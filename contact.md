---
layout: page
---

<!-- Contact Form -->
# Ready to Get to Work?
<h3 style="text-align:center;">Let's Talk</h3>

<form name="Contact Form" netlify-honeypot="surname" action="/thank-you" netlify>
  <!-- Netlify honeypot field -->
  <p class='hidden'><label>Don’t fill this out: <input name='surname'></label></p>
  <!-- Standard form fields -->
  <input type="text" name="name" placeholder="Your Name" required>
  <input type="email" name="email" placeholder="Your Email" required>
  <textarea name="message" placeholder="How Can I Help?" required></textarea>
  <button id="contact-btn" type="submit">Get In Touch</button>
</form>
