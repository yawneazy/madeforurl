// TEST A
// console.log("LINE 1");

// setTimeout(() => {
//     console.log("LINE 2");
// }, 0);

// TEST B
// import express from "express";

// console.log("AFTER IMPORT");

// const app = express();

// app.listen(8000, () => {
//   console.log("SERVER STARTED");
// });

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";
import { google } from "googleapis";

// const auth = new google.auth.GoogleAuth({
//     keyFile: "credentials.json",
//     scopes: ["https://www.googleapis.com/auth/spreadsheets"],
// });

// const sheets = google.sheets({ version: "v4", auth });

console.log("A - imports loaded");

let sheets;

function getSheets() {
    if (!sheets) {
        const auth = new google.auth.GoogleAuth({
            keyFile: "credentials.json",
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        sheets = google.sheets({ version: "v4", auth });
    }

    return sheets;
}

dotenv.config();

console.log("B - before sheets setup");

const app = express();

app.use(cors());
app.use(cors({
    // origin: "madeforurl-f9296.web.app"
    origin: "*"
  }));
// app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.get("/test", (req, res) => {
    res.json({ ok: true });
});

app.post("/api/contact", async (req, res) => {
    try {
        const { firstName, lastName, email, website, message } = req.body;

        console.log("CONTACT RECEIVED:", req.body);

        const sheets = getSheets();

        await sheets.spreadsheets.values.append({
            spreadsheetId: "1AXRj4tPqoqWdOwJQVTXxttPd5gh5upgXUWt1pt5RoiM",
            range: "Sheet1!A:F",
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [[
                    new Date().toISOString(),
                    firstName,
                    lastName,
                    email,
                    website,
                    message
                ]]
            }
        });

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

        return res.json({ success: true });

    } catch (error) {
        console.error("SHEETS ERROR:", error);

        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
});
console.log("C - before listen");

const PORT = 8000;

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});

