import puppeteer from "puppeteer";
import { headers } from "next/headers";

export async function GET() {
  const headerList = await headers();
  const host = headerList.get("host");
  const protocol = host.includes("localhost") ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  await page.goto(`${baseUrl}/cv?download=true`, {
    waitUntil: "networkidle0",
  });

  const pdfBuffer = await page.pdf({
    format: "A4",
    printBackground: false,
    preferCSSPageSize: true,
  });

  await browser.close();

  return new Response(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="DatMaiVan-CV.pdf"',
    },
  });
}
