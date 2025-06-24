const generateWelcomeEmail = (clientName) => `
  <div style="font-family: Arial, sans-serif; background-color: #f7f7f7; padding: 20px;">
    <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
      <img 
        src="https://media.istockphoto.com/id/1397892955/photo/thank-you-message-for-card-presentation-business-expressing-gratitude-acknowledgment-and.jpg?s=612x612&w=0&k=20&c=7Lyf2sRAJnX_uiDy3ZEytmirul8pyJWm4l2fxiUtdvk=" 
        alt="Thank You Banner" 
        style="width: 100%; height: auto;"
      />
      <div style="padding: 30px;">
        <h2 style="color: #e11d48;">Hi <strong>${clientName}</strong>, 👋</h2>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Thank you for getting in touch with <strong>Nitesh Kumar Sharma</strong>. 🙏
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          I’ve received your message and will get back to you as soon as possible. I truly appreciate your interest and look forward to connecting with you.
        </p>

        <div style="margin: 30px 0; text-align: center;">
          <a href="https://niteshsharma831.github.io/portfolio/index.html" target="_blank" style="background: #e11d48; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">
            🌐 Visit My Portfolio
          </a>
        </div>

        <p style="font-size: 16px; color: #333;">
          Warm regards,<br />
          <strong style="color: #16a34a;">Nitesh Kumar Sharma</strong><br />
          MERN Stack Developer | UX/UI Designer<br/>
          📧 <a href="mailto:Niteshkumarsharma831@gmail.com" style="color:#2563eb;">Niteshkumarsharma831@gmail.com</a><br/>
          📱 <a href="tel:+919572861917" style="color:#2563eb;">+91 95728 61917</a>
        </p>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />

        <p style="text-align: center; font-size: 16px;">
          <span>🔗 Follow me on</span><br/>
          <a href="https://www.linkedin.com/in/nitesh-kumar-sharma-2894a1185/" target="_blank" style="margin: 0 8px; color: #0e76a8; text-decoration: none;">LinkedIn</a> |
          <a href="https://github.com/Niteshsharma831" target="_blank" style="margin: 0 8px; color: #333; text-decoration: none;">GitHub</a> |
          <a href="https://www.fiverr.com/niteshsharma_01" target="_blank" style="margin: 0 8px; color: #1dbf73; text-decoration: none;">Fiverr</a> |
          <a href="https://www.facebook.com/niteshsharma.sharma.796" target="_blank" style="margin: 0 8px; color: #3b5998; text-decoration: none;">Facebook</a> |
          <a href="https://www.instagram.com/niteshsharma_99/" target="_blank" style="margin: 0 8px; color: #e1306c; text-decoration: none;">Instagram</a>
        </p>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />

        <p style="text-align: center; font-size: 12px; color: #999;">
          © ${new Date().getFullYear()} Nitesh Kumar Sharma. All rights reserved.<br/>
          <a href="https://niteshsharma831.github.io/portfolio/terms.html" style="color: #999; text-decoration: underline;" target="_blank">Terms</a> |
          <a href="https://niteshsharma831.github.io/portfolio/privacy.html" style="color: #999; text-decoration: underline;" target="_blank">Privacy</a>
        </p>
      </div>
    </div>
  </div>
`;

module.exports = generateWelcomeEmail;
