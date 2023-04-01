# react-simple-portfolio

A simple react portfolio

To send emails using emailjs, create a `.env.development` file in the root and then set the following values from the mailjs site.

```
# VITE_EMAIL_JS_SERVICE_ID=YOUR_EMAIL_JS_SERVICE_ID
# VITE_EMAIL_JS_TEMPLATE_ID=YOUR_EMAIL_JS_TEMPLATE_ID
# VITE_EMAIL_JS_USER_ID=YOUR_EMAIL_JS_USER_ID
```

I the MailJS Email templates, one can use the `name`, `email`, `phone` and `message` params like below:

```
Subject:
New message from {{name}} through your website!

Content:

Hello <your-name>,

You got a new message from {{name}}:

Message:
----------------
{{message}}


Details:

Name: {{name}}
Email: {{email}}
Phone Number: {{phone}}
```
