/* eslint-disable @next/next/no-img-element */

interface EmailProps extends JSX.IntrinsicAttributes {
  firstName?: string;
}

const emailStyles = {
  body: {
    fontFamily: "Arial",
    fontSize: "16px",
    margin: "auto",
  },
  paragraph: {
    padding: "0 20px 16px",
  },
  table: {
    background: "white",
    maxWidth: "600px",
    margin: "auto",
  },
  logo: {
    maxWidth: "150px",
    padding: "52px 20px",
  },
  footer: {
    padding: "32px 20px 32px",
    fontSize: "12px",
  },
};

export const Received = ({ firstName }: EmailProps) => (
  <html>
    <body style={emailStyles.body}>
      <table style={emailStyles.table}>
        <tr>
          <td>
            <div>
              <img
                style={emailStyles.logo}
                alt="Sunjay Armstead's website logo"
                src="https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYQe1dL0k6mm-rAnJt0Uv3AjgM7YhrEoBBE8W3OK4rI7xrTKg6xpyGExLE2_fY_73FtN7D83_kqCaSUFLu8U4pJqgiLI_Q=w1316-h1201"
              />
            </div>
          </td>
        </tr>
        <tr>
          <td style={emailStyles.paragraph}>Hey, {firstName}!</td>
        </tr>
        <tr>
          <td style={emailStyles.paragraph}>
            <p>
              I just got your message on my website,&nbsp;
              <a href="https://sunjayarmstead.com" target="_blank">
                sunjayarmstead.com
              </a>
              .
            </p>
          </td>
        </tr>
        <tr>
          <td style={emailStyles.paragraph}>
            <p>
              A couple of things about that. First up, I <em>really</em>&nbsp;
              appreciate you reaching out. It takes a lot of trust to send that
              message (since most people don&apos;t normally reply back to you
              when you submit a contact form. Yuck!)
            </p>
          </td>
        </tr>
        <tr>
          <td style={emailStyles.paragraph}>
            <p>
              And secondly, because you took the time to reach out to me, it is
              my goal to reply as soon as possible. So be on the lookout for a
              reply back ASAP.
            </p>
          </td>
        </tr>
        <tr>
          <td style={emailStyles.paragraph}>
            <p>Have a wonderful week!</p>
          </td>
        </tr>
        <tr>
          <td style={emailStyles.paragraph}>
            <p>
              <strong>Sunjay Armstead</strong>
            </p>
          </td>
        </tr>
        <tr>
          <td style={emailStyles.footer}>
            <p
              style={{
                textAlign: "center",
                margin: "auto",
                maxWidth: "450px",
              }}
            >
              You are receiving this email because your email address was
              attached to a contact form submission on my website. If
              that&apos;s you, great! If not,&nbsp;
              <a href="mailto: connect@sunjayarmstead.com">
                please reach out to me
              </a>
              &nbsp; so I can stop the bots!
            </p>
          </td>
        </tr>
      </table>
    </body>
  </html>
);
