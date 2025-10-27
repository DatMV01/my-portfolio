// app/api/pdf/route.js
import chromium from "@sparticuz/chromium";
import { headers } from "next/headers";

export async function GET() {
  const headerList = await headers();
  const host = headerList.get("host");
  const protocol = host.includes("localhost") ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;

  let browser = null;

  try {
    const isLocal = process.env.NODE_ENV !== "production";

    const puppeteer = isLocal
      ? await import("puppeteer")
      : await import("puppeteer-core");

    browser = await puppeteer.default.launch({
      args: isLocal ? ["--no-sandbox"] : chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: isLocal
        ? puppeteer.default.executablePath()
        : await chromium.executablePath(),
      headless: chromium.headless,
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

    return new Response(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="DatMaiVan-CV.pdf"',
      },
    });
  } catch (error) {
    console.error("❌ PDF generation error:", error);
    return new Response("Failed to generate PDF", { status: 500 });
  } finally {
    if (browser) await browser.close();
  }
}
