const assert = require("assert");
var articleBestIds = [];
var articles = [];
var title;
var articleBestOfIds = [];
var articlesBest = [];
var titleBest;
var i = 0;
var j = 0;
describe("57hours web testing", function() {
  it("Get adventureIDs", function() {
    browser.url("https://57hours.com/");
    $("#siteFooter").scrollIntoView({ behavior: "smooth", block: "end" });
    browser.pause(3000);
    $("header").scrollIntoView({ behavior: "smooth", block: "start" });
    browser.call(
      async () =>
        await percySnapshot(browser, "Main-screen", { widths: [1280] })
    );
    browser.url("https://57hours.com/adventure/");
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
        await percySnapshot(browser, "Adventure-screen", { widths: [1280] })
    );

    browser.url("https://57hours.com/magazine/");
    $("#main").waitForDisplayed();
    const textBestOf = $(".facetwp-template");
    articlesBest = textBestOf.$$("article");
    articlesBest.forEach(element => {
      postBestID = "#" + textBestOf.$$("article")[j].getAttribute("id");
      articleBestOfIds.push(postBestID);
      j++;
    });
    $("#siteFooter").scrollIntoView({ behavior: "smooth", block: "end" });
    browser.pause(3000);
    $("header").scrollIntoView({ behavior: "smooth", block: "start" });
    browser.call(
      async () =>
        await percySnapshot(browser, "Magazine-screen", { widths: [1280] })
    );
  }),
    it("Adventure desktop screenshots", function() {
      browser.url("https://57hours.com/adventure/");
      articleBestIds.forEach(postID => {
        const main = $(".site-content");
        $(postID).click();
        main.waitForDisplayed();
        title = browser.getTitle();
        $("footer").waitForDisplayed();
        $("footer").scrollIntoView({ behavior: "smooth", block: "end" });
        browser.pause(3000);
        $("header").scrollIntoView({ behavior: "smooth", lock: "start" });
        browser.pause(3000);
        browser.call(
          async () => await percySnapshot(browser, title, { widths: [1280] })
        );
        browser.url("https://57hours.com/adventure/");
      });
    });
  it("Magazine desktop screenshots", function() {
    browser.url("https://57hours.com/magazine/");
    articleBestOfIds.forEach(postBestID => {
      const mainBest = $(".site-content");
      $(postBestID).click();
      mainBest.waitForDisplayed();
      titleBest = browser.getTitle();
      $("footer").waitForDisplayed();
      $("footer").scrollIntoView({ behavior: "smooth", block: "end" });
      browser.pause(3000);
      $("header").scrollIntoView({ behavior: "smooth", lock: "start" });
      browser.pause(3000);
      browser.call(
        async () => await percySnapshot(browser, titleBest, { widths: [1280] })
      );
      browser.url("https://57hours.com/magazine/");
    });
  });
});
