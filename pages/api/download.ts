import type { NextApiRequest, NextApiResponse } from "next";
// Import dependencies
const puppeteer = require("puppeteer");
//const fs = require("fs");

type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {

    const urlBody = String(req.body);
    console.log(urlBody)

    if (urlBody) {
      (async()=>{
        // The location / URL
        const url = urlBody;

        // Create the browser
        const browser = await puppeteer.launch({
          headless: true,
        });

        // Navigate to the website
        const page = await browser.newPage();
        await page.goto(urlBody, { waitUntil: 'load' });

        // Modified colors
        // await page.emulateMedia("screen");

        const pdfBuffer = await page.pdf({format: "A4"}) 
        
        //fs.writeFileSync("page.pdf", pdfBuffer);

        // Generate the PDF
        /* const buffer = await page.pdf({
          path: 'public/page.pdf',
          format: "A4",
        }); */

        // The width, height, and margin options accept values labeled with units. Unlabeled values are treated as pixels.

        // width: "100px"
        // px - pixel
        // in - inch
        // cm - centimeter
        // mm - millimeter

        // height: "100px"
        // px - pixel
        // in - inch
        // cm - centimeter
        // mm - millimeter

        // format: "A0"
        // Letter: 8.5in x 11in
        // Legal: 8.5in x 14in
        // Tabloid: 11in x 17in
        // Ledger: 17in x 11in
        // A0: 33.1in x 46.8in
        // A1: 23.4in x 33.1in
        // A2: 16.54in x 23.4in
        // A3: 11.7in x 16.54in
        // A4: 8.27in x 11.7in
        // A5: 5.83in x 8.27in
        // A6: 4.13in x 5.83in
        // Close the browser
        res.send(pdfBuffer)
        await browser.close();
      })()
    }
  } catch (error) {
    res.status(404).json({ message: "ERROR URL .HTML" });
  }
}
