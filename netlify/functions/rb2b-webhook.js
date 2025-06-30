// Netlify Function to receive RB2B webhook data and send email notifications
// Place this file at: netlify/functions/rb2b-webhook.js

exports.handler = async (event, context) => {
  // Only accept POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse the incoming RB2B data
    const rb2bData = JSON.parse(event.body);
    
    console.log('🎯 RB2B Webhook received:', rb2bData);

    // EmailJS configuration from environment variables
    const emailjsConfig = {
      serviceId: process.env.EMAILJS_SERVICE_ID,
      templateId: process.env.EMAILJS_TEMPLATE_ID,
      publicKey: process.env.EMAILJS_PUBLIC_KEY,
      privateKey: process.env.EMAILJS_PRIVATE_KEY,
      yourEmail: 'jainijhawan@gmail.com'
    };

    // Validate EmailJS configuration
    if (!emailjsConfig.serviceId || !emailjsConfig.templateId || !emailjsConfig.publicKey) {
      throw new Error('Missing EmailJS configuration. Please check environment variables.');
    }

    // Check if visitor is identified
    const isIdentified = rb2bData.person && (rb2bData.person.name || rb2bData.person.email);
    
    // Prepare email data
    const emailData = {
      to_email: emailjsConfig.yourEmail,
      subject: isIdentified 
        ? `🎯 IDENTIFIED VISITOR: ${rb2bData.person.name || 'Unknown Name'} from ${rb2bData.person.company || 'Unknown Company'}`
        : `👀 New Anonymous Visitor - ${rb2bData.location?.city || 'Unknown Location'}`,
      
      // Visitor identification
      visitor_status: isIdentified ? 'IDENTIFIED ✅' : 'ANONYMOUS',
      visitor_name: rb2bData.person?.name || 'Unknown',
      visitor_email: rb2bData.person?.email || 'Unknown',
      visitor_company: rb2bData.person?.company || 'Unknown',
      visitor_linkedin: rb2bData.person?.linkedin || 'Unknown',
      visitor_phone: rb2bData.person?.phone || 'Unknown',
      visitor_title: rb2bData.person?.title || 'Unknown',
      
      // Location data
      visitor_location: `${rb2bData.location?.city || 'Unknown'}, ${rb2bData.location?.country || 'Unknown'}`,
      visitor_ip: rb2bData.location?.ip || 'Unknown',
      visitor_isp: rb2bData.location?.isp || 'Unknown',
      
      // Technical data
      visitor_device: rb2bData.device?.type || 'Unknown',
      visitor_browser: rb2bData.device?.browser || 'Unknown',
      visitor_os: rb2bData.device?.os || 'Unknown',
      
      // Page data
      page_url: rb2bData.page?.url || 'Unknown',
      page_title: rb2bData.page?.title || 'Unknown',
      referrer: rb2bData.page?.referrer || 'Direct visit',
      
      // Timing
      visit_time: new Date().toLocaleString(),
      timezone: rb2bData.location?.timezone || 'Unknown',
      
      // Full data
      full_data: JSON.stringify(rb2bData, null, 2)
    };

    // Send email via EmailJS API
    const emailResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: emailjsConfig.serviceId,
        template_id: emailjsConfig.templateId,
        user_id: emailjsConfig.publicKey,
        accessToken: emailjsConfig.privateKey,
        template_params: emailData
      })
    });

    if (emailResponse.ok) {
      console.log('✅ Email notification sent successfully');
      
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: JSON.stringify({ 
          success: true, 
          message: 'Webhook received and email sent',
          identified: isIdentified,
          visitor: isIdentified ? rb2bData.person?.name || 'Identified' : 'Anonymous',
          timestamp: new Date().toISOString()
        }),
      };
    } else {
      const errorText = await emailResponse.text();
      throw new Error(`Failed to send email: ${errorText}`);
    }

  } catch (error) {
    console.error('❌ Webhook processing error:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ 
        success: false, 
        error: error.message,
        timestamp: new Date().toISOString()
      }),
    };
  }
}; 