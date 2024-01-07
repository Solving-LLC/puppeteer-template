// initialize dotenv
require("dotenv").config();

const USER_DIR = process.env.USER_DIR || "userdir";

// run puppeteer: userdir: USER_DIR, headless: false
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    userDataDir: USER_DIR,
    headless: false,
    // fix width and height
    defaultViewport: {
      width: 1280,
      height: 720,
    },
  });
 
 
  // use 1st opened tab or create new empty tab
  const page = (await browser.pages())[0] || (await browser.newPage());
  await page.goto("https://github.com/login");

  // process.exit() on browser close
  browser.on("disconnected", () => {
    process.exit();
  });
})();
