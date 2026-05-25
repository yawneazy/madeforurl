import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";
// import { google } from "googleapis";

dotenv.config();
const app = express();

const corsOptions = {
  origin: [
    "https://madeforurl.com",
    "https://www.madeforurl.com",
    "https://madeforurl.vercel.app"
  ],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

// app.get("/test", (req, res) => {
//     res.json({ ok: true });
// });

app.post("/api/contact", async (req, res) => {
    try {
        const { firstName, lastName, email, website, message } = req.body;

        const data = await resend.emails.send({
            from: "MadeForURL <onboarding@resend.dev>",
            to: "madeforurl@gmail.com", // <-- CHANGE THIS
            subject: `New Contact Form Message from ${firstName} ${lastName}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Website:</strong> ${website}</p>
                <p><strong>Message:</strong><br/>${message}</p>
            `
        });

        return res.json({ success: true, data });

    } catch (error) {
        console.error("RESEND ERROR:", error);

        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

//  --------- POSSIBLE LATER IMPLEMENTATION OF GOOGLE SHEETS
// console.log("A - imports loaded");
// let sheets;

// function getSheets() {
//     if (!sheets) {
//         const auth = new google.auth.GoogleAuth({
//             credentials: {
//                 client_email: process.env.GOOGLE_CLIENT_EMAIL,
//                 private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
//                 // private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
//             },
//             scopes: ["https://www.googleapis.com/auth/spreadsheets"],
//         });

//         sheets = google.sheets({
//             version: "v4",
//             auth,
//         });
//     }
//     console.log("KEY EXISTS:", !!process.env.GOOGLE_PRIVATE_KEY);
//     return sheets;
// }

// console.log("B - before sheets setup");


// app.post("/api/contact", async (req, res) => {
//     try {
//         const { firstName, lastName, email, website, message } = req.body;

        // console.log("CONTACT RECEIVED:", req.body);

        // const sheets = getSheets();

        // await sheets.spreadsheets.values.append({
        //     spreadsheetId: "1AXRj4tPqoqWdOwJQVTXxttPd5gh5upgXUWt1pt5RoiM",
        //     range: "Sheet1!A:F",
        //     valueInputOption: "USER_ENTERED",
        //     requestBody: {
        //         values: [[
        //             new Date().toISOString(),
        //             firstName,
        //             lastName,
        //             email,
        //             website,
        //             message
        //         ]]
        //     }
        // });

//         return res.json({ success: true });

//     } catch (error) {
//         // console.error("SHEETS ERROR:", error);

//         return res.status(500).json({
//             success: false,
//             error: error.message
//         });
//     }
// });
// console.log("C - before listen");

const PORT = process.env.PORT || 8000 ;

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});
