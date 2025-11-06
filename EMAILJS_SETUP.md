# EmailJS Setup Instructions

To enable email sending functionality in your contact form, follow these steps:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Set Up Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Configure your email credentials
5. Note down your **Service ID**

## 3. Create Email Template
1. Go to "Email Templates" in dashboard
2. Click "Create New Template"
3. Use these template variables in your email template:
   ```
   From: {{from_name}} <{{from_email}}>
   Subject: {{subject}}
   
   Hi {{to_name}},
   
   You have received a new message from your portfolio contact form:
   
   Name: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}
   
   Message:
   {{message}}
   
   Reply to: {{reply_to}}
   ```
4. Save the template and note down your **Template ID**

## 4. Get Public Key
1. Go to "Integration" section in dashboard
2. Note down your **Public Key**

## 5. Update Contact Component
1. Open `src/components/Contact.tsx`
2. Replace the placeholder values on lines 40-44:
   ```typescript
   const result = await emailjs.send(
     'your_service_id',    // Replace with your Service ID
     'your_template_id',   // Replace with your Template ID
     templateParams,
     'your_public_key'     // Replace with your Public Key
   );
   ```

## 6. Test Your Contact Form
1. Fill out the contact form on your website
2. Check if you receive the email
3. Verify all template variables are populated correctly

## Current Fallback
If EmailJS is not configured, the form will:
- Open the user's default email client
- Pre-fill the email with form data
- Send to: shivamkr1710@gmail.com

## Free Tier Limits
- 200 emails per month
- 2 email services
- 1 email template per service

For more emails, consider upgrading to a paid plan.

## Troubleshooting
- Check browser console for error messages
- Verify all IDs are correctly copied
- Ensure email service is properly connected
- Test with a simple template first