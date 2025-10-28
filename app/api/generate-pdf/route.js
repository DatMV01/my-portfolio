import chromium from "@sparticuz/chromium";
import { headers } from "next/headers";
import { join } from "node:path";
import puppeteer from "puppeteer";
import puppeteerCore from "puppeteer-core";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

let _browser;

async function getBrowser() {
  if (_browser) return _browser;

  if (process.env.NODE_ENV === "production") {
    const remoteExecutablePath = join(process.cwd(), "chromium-v141.0.0-pack");

    _browser = await puppeteerCore.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      //executablePath: await chromium.executablePath(),
      executablePath: await chromium.executablePath(remoteExecutablePath),
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    });
  } else {
    _browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
  }

  return _browser;
}

export async function GET() {
  const headerList = await headers();
  const host = headerList.get("host");
  const protocol = host.includes("localhost") ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;
  const browser = await getBrowser();
  const page = await browser.newPage();

  try {
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
    await page.close();
  }
}
