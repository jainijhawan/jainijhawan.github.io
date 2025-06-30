# 🔗 RB2B Webhook Integration Setup Guide

This guide will help you set up **webhook integration** between RB2B and your email notifications for **instant alerts** when visitors are identified.

## 🚀 **Quick Start (Testing)**

### **Step 1: Test Your RB2B Webhook**

1. **Go to [webhook.site](https://webhook.site)** 
2. **Copy your unique URL** (e.g., `https://webhook.site/12345678-abcd-efgh`)
3. **Login to your RB2B dashboard** at [app.rb2b.com](https://app.rb2b.com)
4. **Go to Integrations → Webhook**
5. **Paste your webhook.site URL**
6. **Set triggers** to "Visitor Identified" and "New Visit"
7. **Save the webhook**

### **Step 2: Test the Integration**

1. **Visit your website** from a different browser/device
2. **Go back to webhook.site** to see the data RB2B sends
3. **Check the payload structure** - this is what we'll work with

---

## 🏗️ **Permanent Setup (Production)**

### **Step 1: Set Up Netlify Functions**

1. **Create project structure:**
   ```
   your-project/
   ├── netlify/
   │   └── functions/
   │       └── rb2b-webhook.js
   ├── index.html
   └── package.json
   ```

2. **Copy the webhook function** I created (`netlify-webhook-function.js`) to:
   ```
   netlify/functions/rb2b-webhook.js
   ```

3. **Create `package.json`** (if you don't have one):
   ```json
   {
     "name": "rb2b-webhook-integration",
     "version": "1.0.0",
     "scripts": {
       "build": "echo 'Build complete'"
     }
   }
   ```

### **Step 2: Deploy to Netlify**

1. **Create Netlify account** at [netlify.com](https://netlify.com)
2. **Connect your GitHub repository** or drag & drop your folder
3. **Deploy settings:**
   - Build command: `npm run build` (or leave empty)
   - Publish directory: `/` (root folder)
4. **Deploy your site**

### **Step 3: Configure Environment Variables**

In your Netlify dashboard:

1. **Go to Site Settings → Environment Variables**
2. **Add these variables:**
   ```
   EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   EMAILJS_SERVICE_ID=your_emailjs_service_id  
   EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   EMAILJS_PRIVATE_KEY=your_emailjs_private_key
   ```

### **Step 4: Set Up EmailJS**

1. **Create EmailJS account** at [emailjs.com](https://emailjs.com)
2. **Add email service** (Gmail recommended)
3. **Create email template** with these variables:
   ```html
   Subject: {{subject}}

   🎯 RB2B VISITOR ALERT

   Status: {{visitor_status}}

   📋 PERSONAL INFO:
   • Name: {{visitor_name}}
   • Email: {{visitor_email}}  
   • Company: {{visitor_company}}
   • LinkedIn: {{visitor_linkedin}}
   • Phone: {{visitor_phone}}
   • Title: {{visitor_title}}

   📍 LOCATION:
   • Location: {{visitor_location}}
   • IP: {{visitor_ip}}
   • ISP: {{visitor_isp}}

   💻 TECHNICAL:
   • Device: {{visitor_device}}
   • Browser: {{visitor_browser}}
   • OS: {{visitor_os}}

   🌐 PAGE INFO:
   • URL: {{page_url}}
   • Title: {{page_title}}
   • Referrer: {{referrer}}
   • Time: {{visit_time}}

   📊 FULL DATA:
   {{full_data}}
   ```

4. **Get your credentials:**
   - Public Key (Account → General)
   - Private Key (Account → General)
   - Service ID (Email Services)
   - Template ID (Email Templates)

### **Step 5: Configure RB2B Webhook**

1. **Get your Netlify function URL:**
   ```
   https://your-site-name.netlify.app/.netlify/functions/rb2b-webhook
   ```

2. **In RB2B dashboard:**
   - Go to Integrations → Webhook
   - Enter your Netlify function URL
   - Select triggers: "Visitor Identified", "New Visit"
   - Save webhook

---

## 🧪 **Testing Your Setup**

### **Test the webhook:**

```bash
# Test with curl
curl -X POST https://your-site.netlify.app/.netlify/functions/rb2b-webhook \
  -H "Content-Type: application/json" \
  -d '{
    "person": {
      "name": "John Doe",
      "email": "john@example.com",
      "company": "Test Company"
    },
    "location": {
      "city": "New York",
      "country": "USA",
      "ip": "192.168.1.1"
    },
    "page": {
      "url": "https://yoursite.com",
      "title": "Your Portfolio"
    }
  }'
```

### **Expected results:**

1. **Check Netlify function logs** for webhook activity
2. **Check your email** for notification
3. **Verify RB2B dashboard** shows webhook as active

---

## 📊 **What You'll Get**

### **For Identified Visitors:**
- ✅ **Real-time email alerts**
- ✅ **Full name, email, company**
- ✅ **LinkedIn profile links**
- ✅ **Phone numbers (when available)**
- ✅ **Job titles and seniority**

### **For Anonymous Visitors:**
- ✅ **Location and technical data**
- ✅ **Page visit information**
- ✅ **Device and browser details**

### **Email Notifications:**
- 🎯 **Identified visitors:** "IDENTIFIED VISITOR: John Doe from ABC Company"
- 👀 **Anonymous visitors:** "New Anonymous Visitor - New York, USA"

---

## 🔧 **Troubleshooting**

### **Webhook not receiving data:**
1. Check RB2B webhook configuration
2. Verify webhook URL is correct
3. Check Netlify function logs

### **Emails not sending:**
1. Verify EmailJS credentials in environment variables
2. Test EmailJS service independently
3. Check function logs for errors

### **RB2B not identifying visitors:**
1. RB2B needs time to build identification database
2. Works better with business/corporate visitors
3. Check RB2B dashboard for identification rates

---

## 💡 **Advanced Features**

### **Add Slack notifications:**
```javascript
// Add to your webhook function
const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
await fetch(slackWebhookUrl, {
  method: 'POST',
  body: JSON.stringify({
    text: `🎯 New identified visitor: ${rb2bData.person.name}`
  })
});
```

### **Add database storage:**
```javascript
// Store visitor data in Airtable, Google Sheets, etc.
const airtableResponse = await fetch('https://api.airtable.com/v0/your-base/visitors', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    fields: {
      Name: rb2bData.person.name,
      Email: rb2bData.person.email,
      Company: rb2bData.person.company
    }
  })
});
```

---

## 🎯 **Your Webhook URL**

Once deployed, your webhook URL will be:
```
https://YOUR-SITE-NAME.netlify.app/.netlify/functions/rb2b-webhook
```

**Use this URL in your RB2B webhook configuration!**

---

✅ **Ready to get instant notifications whenever someone visits your portfolio!** 