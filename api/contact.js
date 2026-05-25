import { Resend } from "resend";
import { google } from "googleapis";

const resend = new Resend(process.env.RESEND_API_KEY);

async function appendToSheet({ firstName, lastName, email, website, message }) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Sheet1!A:F",
    valueInputOption: "RAW",
    requestBody: {
      values: [[
        new Date().toISOString(),
        firstName,
        lastName,
        email,
        website,
        message
      ]],
    },
  });
}


export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { firstName, lastName, email, website, message } = req.body;

    await Promise.all([
    resend.emails.send({
      from: "MadeForURL <onboarding@resend.dev>",
      to: "madeforurl@gmail.com",
      subject: `New Contact Form Message from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    }),
    appendToSheet({ firstName, lastName, email, website, message }),
  ]);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("RESEND ERROR:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
}