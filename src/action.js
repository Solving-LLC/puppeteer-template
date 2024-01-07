// initialize dotenv
require("dotenv").config();

const USER_DIR = process.env.USER_DIR || "userdir";

// run puppeteer: userdir: USER_DIR, headless: false
const puppeteer = require("puppeteer");
const { sleep } = require("./libs/sleep");

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
  await page.goto("https://github.com/solving-llc/puppeteer-template");

  // wait for selector: #repo-stars-counter-star
  await page.waitForSelector("#repo-stars-counter-star", {
    timeout: 10000,
    visible: true,
  });

  // click selector: svg.octicon-star
  await page.click("#repo-stars-counter-star");

  await sleep(5);
  process.exit();

})();
