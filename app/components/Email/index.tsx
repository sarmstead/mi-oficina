/* eslint-disable @next/next/no-img-element */

import { ZodIssue } from "zod";
import { JSX } from "react";

interface EmailProps extends JSX.IntrinsicAttributes {
  firstName?: string;
  lastName?: string;
  company?: string;
  email?: string;
  recipientEmail?: string;
  phone?: string;
  message?: string;
  errors?: ZodIssue[];
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
  tableKeyColumn: {
    fontWeight: "bold",
    width: "100px",
    verticalAlign: "top",
  },
  inlineTableData: {
    verticalAlign: "top",
  },
  logo: {
    maxWidth: "150px",
    padding: "52px 20px",
  },
  footer: {
    padding: "32px 20px 32px",
    fontSize: "12px",
  },
  error: {
    color: "#a80011",
  },
};

const logoPath =
  "https://cdn.sanity.io/images/q3yrxlwb/production/6eb213de7c6b2b2e5529b5feb912f036fdd4d31b-1280x402.png";

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
                src={logoPath}
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

export const Success = ({
  firstName,
  lastName,
  company,
  email,
  phone,
  message,
}: EmailProps) => (
  <html>
    <body style={emailStyles.body}>
      <table style={emailStyles.table}>
        <tr>
          <td>
            <div>
              <img
                style={emailStyles.logo}
                alt="Sunjay Armstead's website logo"
                src={logoPath}
              />
            </div>
          </td>
        </tr>
        <tr>
          <td style={emailStyles.paragraph}>Hey, Sunjay!</td>
        </tr>
        <tr>
          <td style={emailStyles.paragraph}>
            <p style={{ paddingBottom: "16px" }}>
              We just got a new message on the website. Below are the details:
            </p>
            <table>
              <tr>
                <td style={emailStyles.tableKeyColumn}>First Name</td>
                <td style={emailStyles.inlineTableData}>{firstName}</td>
              </tr>
              <tr>
                <td style={emailStyles.tableKeyColumn}>Last Name</td>
                <td style={emailStyles.inlineTableData}>{lastName}</td>
              </tr>
              <tr>
                <td style={emailStyles.tableKeyColumn}>Company</td>
                <td style={emailStyles.inlineTableData}>{company}</td>
              </tr>
              <tr>
                <td style={emailStyles.tableKeyColumn}>Email</td>
                <td style={emailStyles.inlineTableData}>{email}</td>
              </tr>
              <tr>
                <td style={emailStyles.tableKeyColumn}>Phone</td>
                <td style={emailStyles.inlineTableData}>{phone}</td>
              </tr>
              <tr>
                <td style={emailStyles.tableKeyColumn}>Message</td>
                <td style={emailStyles.inlineTableData}>{message}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style={emailStyles.paragraph}>
            <p>Reach out soon to {firstName} as soon as possible!</p>
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
              <strong>Jack notGPT, your sort of automated assistant</strong>
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
              You are receiving this email because your email address is
              configured as an admin on my website. If that&apos;s you, great!
              If not,&nbsp;
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

export const Error = ({
  firstName,
  lastName,
  company,
  email,
  phone,
  message,
  errors,
}: EmailProps) => (
  <html>
    <body style={emailStyles.body}>
      <table style={emailStyles.table}>
        <tr>
          <td>
            <div>
              <img
                style={emailStyles.logo}
                alt="Sunjay Armstead's website logo"
                src={logoPath}
              />
            </div>
          </td>
        </tr>
        <tr>
          <td style={emailStyles.paragraph}>Hey, Sunjay!</td>
        </tr>
        <tr>
          <td style={emailStyles.paragraph}>
            <p style={{ paddingBottom: "16px" }}>
              A message on our site just failed validation. Below are the
              details:
            </p>
            <table>
              <tr>
                <td style={emailStyles.tableKeyColumn}>First Name</td>
                <td style={emailStyles.inlineTableData}>{firstName}</td>
              </tr>
              <tr>
                <td style={emailStyles.tableKeyColumn}>Last Name</td>
                <td style={emailStyles.inlineTableData}>{lastName}</td>
              </tr>
              <tr>
                <td style={emailStyles.tableKeyColumn}>Company</td>
                <td style={emailStyles.inlineTableData}>{company}</td>
              </tr>
              <tr>
                <td style={emailStyles.tableKeyColumn}>Email</td>
                <td style={emailStyles.inlineTableData}>{email}</td>
              </tr>
              <tr>
                <td style={emailStyles.tableKeyColumn}>Phone</td>
                <td style={emailStyles.inlineTableData}>{phone}</td>
              </tr>
              <tr>
                <td style={emailStyles.tableKeyColumn}>Message</td>
                <td style={emailStyles.inlineTableData}>{message}</td>
              </tr>
            </table>
            {errors && (
              <div
                style={{
                  backgroundColor: "#f6dfe1",
                  padding: "12px",
                  marginTop: "12px",
                  marginBottom: "4px",
                }}
              >
                <p
                  style={{
                    ...emailStyles.tableKeyColumn,
                    ...emailStyles.error,
                  }}
                >
                  Error Logs
                </p>
                {errors.map((message) => {
                  return (
                    <div
                      key={message.path[0]}
                      style={{
                        border: "1px solid #a80011",
                        padding: "4px",
                        marginBottom: "4px",
                      }}
                    >
                      <p style={emailStyles.error}>
                        Field Name: {message.path[0]}
                      </p>
                      <p style={emailStyles.error}>Code: {message.code}</p>
                      <p style={emailStyles.error}>
                        Error Message: {message.message}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </td>
        </tr>
        <tr>
          <td style={emailStyles.paragraph}>
            <p>
              Looks legit? Reach out soon to {firstName} as soon as possible! If
              not, hop into Next.js and figure this thing out.
            </p>
          </td>
        </tr>
        <tr>
          <td style={emailStyles.paragraph}>
            <p>Okay, byeeee!</p>
          </td>
        </tr>
        <tr>
          <td style={emailStyles.paragraph}>
            <p>
              <strong>Jack notGPT, your sort of automated assistant</strong>
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
              You are receiving this email because your email address is
              configured as an admin on my website. If that&apos;s you, great!
              If not,&nbsp;
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
