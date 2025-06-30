# RB2B Visitor Identification Setup Guide 🎯📧

This guide will help you set up **RB2B visitor identification** with email notifications. RB2B can identify visitors by their **real names, emails, and company information**.

## What RB2B Can Identify

### **Personal Information (When Available):**
- ✅ **Full names** (first and last)
- ✅ **Email addresses** 
- ✅ **Company names**
- ✅ **LinkedIn profiles**
- ✅ **Phone numbers**
- ✅ **Job titles**

### **Additional Data Collected:**
- ✅ **Location data** (city, country, ISP)
- ✅ **Device information** (browser, OS, screen resolution)
- ✅ **Visit behavior** (pages visited, time spent)
- ✅ **Referral sources**

## Setup Instructions

### Step 1: RB2B Configuration

✅ **Good news!** Your RB2B script is already integrated with your account ID: `46DJ4HWY3D61`

The script is already active and will start identifying visitors automatically. RB2B works by:
- Tracking anonymous visitors initially
- Identifying them when they interact with your content
- Building a profile over multiple visits
- Matching visitors to their business email addresses

### Step 2: EmailJS Configuration (for Notifications)

You need to set up EmailJS to receive email notifications when visitors are identified.

1. **Create EmailJS Account**
   - Go to [EmailJS.com](https://www.emailjs.com/)
   - Sign up for a free account
   - Verify your email address

2. **Add Email Service**
   - Go to Email Services in your EmailJS dashboard
   - Click "Add New Service"
   - Choose your email provider (Gmail recommended)
   - Follow the setup instructions
   - Copy your **Service ID**

3. **Create Email Template**
   - Go to Email Templates
   - Click "Create New Template"
   - Use this template structure:

```html
Subject: {{subject}}

🎯 VISITOR IDENTIFICATION ALERT

Visitor Status: {{visitor_status}}

📋 PERSONAL INFORMATION:
• Name: {{visitor_name}}
• Email: {{visitor_email}}
• Company: {{visitor_company}}
• LinkedIn: {{visitor_linkedin}}
• Phone: {{visitor_phone}}

📍 LOCATION & TECHNICAL:
• Location: {{visitor_location}}
• IP Address: {{visitor_ip}}
• ISP: {{visitor_isp}}
• Device: {{visitor_device}}
• Browser: {{visitor_browser}}
• OS: {{visitor_os}}

🌐 PAGE INFORMATION:
• URL: {{page_url}}
• Title: {{page_title}}
• Referrer: {{referrer}}
• Visit Time: {{visit_time}}
• Timezone: {{timezone}}
• Time on Page: {{time_on_page}}

📊 FULL DATA:
{{full_data}}

---
Sent from your portfolio website tracking system
```

4. **Get Your Credentials**
   - Copy your **Template ID**
   - Go to Account → General
   - Copy your **Public Key**

### Step 3: Update Your Website Configuration

Update the configuration in your `index.html` file (around line 1200+):

```javascript
this.config = {
    emailjsPublicKey: "YOUR_ACTUAL_PUBLIC_KEY",    // Replace with your EmailJS public key
    emailjsServiceId: "YOUR_ACTUAL_SERVICE_ID",    // Replace with your EmailJS service ID  
    emailjsTemplateId: "YOUR_ACTUAL_TEMPLATE_ID",  // Replace with your EmailJS template ID
    yourEmail: "jainijhawan@gmail.com"             // Your email (already correct)
};
```

## How It Works

### **Visitor Journey:**
1. **Anonymous Visit**: Visitor lands on your site
2. **Basic Tracking**: System collects device, location, and behavior data
3. **RB2B Processing**: RB2B attempts to identify the visitor
4. **Identification**: If successful, RB2B provides name, email, company
5. **Notification**: You receive detailed email with all available data

### **Email Notifications:**
- **Identified Visitors**: `�� IDENTIFIED VISITOR: John Doe from ABC Company`
- **Anonymous Visitors**: `👀 New Visitor from New York, United States`

### **Tracking Features:**
- **Real-time identification** when possible
- **Periodic checks** every 10 seconds for new data
- **Comprehensive visitor profiles** with technical and personal data
- **Email alerts** for both identified and anonymous visitors

## Expected Results

### **Identification Rate:**
- **B2B Visitors**: 40-70% identification rate
- **Corporate Networks**: Higher identification rates
- **Personal Devices**: Lower identification rates
- **Return Visitors**: Better identification over time

### **Data Quality:**
- **High-confidence matches**: Full name, verified email, company
- **Partial matches**: Some personal info, company domain
- **Anonymous visitors**: Technical and location data only

## Privacy & Legal Compliance

### **What's Collected:**
- ✅ **Business contact information** (public data)
- ✅ **Technical browsing data** (standard web analytics)
- ✅ **Location data** (IP-based, not GPS)

### **Privacy Considerations:**
- RB2B uses **publicly available business data**
- No personal device access or invasive tracking
- Complies with standard business lead generation practices
- Users can opt-out through standard browser settings

## Troubleshooting

### **Not Receiving Emails?**
1. Check EmailJS configuration
2. Verify template ID and service ID
3. Check spam folder
4. Test EmailJS service independently

### **Low Identification Rate?**
1. RB2B needs time to build database
2. Works better with business/corporate visitors
3. Identification improves over time
4. Some visitors may use privacy tools

### **Testing the System:**
1. Visit your website from different devices
2. Check browser console for tracking messages
3. Wait 10-15 seconds for RB2B processing
4. Check your email for notifications

## Support

- **RB2B Support**: [RB2B Help Center](https://rb2b.com/help)
- **EmailJS Support**: [EmailJS Documentation](https://www.emailjs.com/docs/)

---

🎯 **Your RB2B tracking is now active and ready to identify visitors!** 