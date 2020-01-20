const assert = require("assert");
var articleBestIds = [];
var articles = [];
const testIds = [
  "#post-5844",
  "#post-9186",
  "#post-10453",
  "#post-10371",
  "#post-10220",
  "#post-9892",
  "#post-9829",
  "#post-9781"
];
var title;
var i = 0;
var j = 0;
describe("Magazine mobile testing", function() {
  it("Get bestOfID", function() {
    browser.url("https://57hours.com/");
    $("#siteFooter").scrollIntoView({ behavior: "smooth", block: "end" });
    browser.pause(3000);
    $("header").scrollIntoView({ behavior: "smooth", block: "start" });
    browser.pause(3000);
    browser.call(
      async () => await percySnapshot(browser, "Main-screen", { widths: [400] })
    );
    browser.url("https://57hours.com/magazine/");
    $("#main").waitForDisplayed();
    const textBest = $(".facetwp-template");
    articles = textBest.$$("article");
    articles.forEach(element => {
      postID = "#" + textBest.$$("article")[i].getAttribute("id");
      articleBestIds.push(postID);
      i++;
    });
    $("#siteFooter").scrollIntoView({ behavior: "smooth", block: "end" });
    browser.pause(3000);
    $("header").scrollIntoView({ behavior: "smooth", block: "start" });
    browser.call(
      async () =>
        await percySnapshot(browser, "Magazine-screen", { widths: [400] })
    );
  }),
    it("Magazine mobile screenshots", function() {
      articleBestIds.forEach(postID => {
        const main = $(".site-content");
        browser.newWindow(
          "https://57hours.com/magazine/",
          "WebdriverIO window",
          "width=420,height=1000,resizable,scrollbars=yes,status=1"
        );
        $(postID).click();
        main.waitForDisplayed();
        title = browser.getTitle();
        $("footer").waitForDisplayed();
        $("footer").scrollIntoView({ behavior: "smooth", block: "end" });
        browser.pause(3000);
        $("header").scrollIntoView({ behavior: "smooth", lock: "start" });
        browser.pause(3000);
        browser.call(
          async () => await percySnapshot(browser, title, { widths: [400] })
        );
        browser.url("https://57hours.com/magazine/");
      });
    });
});
