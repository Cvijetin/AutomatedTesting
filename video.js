const assert = require('assert');
var failedVideos = [];
var articleBestIds = [];
var articles = [];
var i = 0;
var title;
describe("Video testing", function () {

    it("GetIDs", function () {
        browser.url("https://57hours.com/adventure/");
        $("#main").waitForDisplayed();
        const textBest = $('.facetwp-template');
        articles = textBest.$$("article");
        articles.forEach(element => {
            postID = "#" + textBest.$$("article")
            [i].getAttribute("id");
            articleBestIds.push(postID);
            i++;
        });
    }),

        it("Video", function () {
            articleBestIds.forEach(postID => {
                browser.newWindow('https://57hours.com/adventure', 'WebdriverIO window', 'width=1280,height=2000,resizable,scrollbars=yes,status=1');
                $(postID).click();
                $("#main").waitForDisplayed();

                if ($(".video__button").isExisting() == true) {

                    //$(".video__button").click();
                    $('a[data-lightbox-trigger="video-1"]').click();
                    $("iframe").waitForDisplayed();
                    browser.switchToFrame(0);
                    $("#player").waitForDisplayed();
                    $(".ytp-cued-thumbnail-overlay").click();
                    if ($(".ytp-error-content").isExisting() == true) {
                        title = browser.getTitle();
                        failedVideos.push(title);
                        browser.switchToFrame(null);
                        $("header").click({ x: 600 });
                    }
                    browser.switchToFrame(null);
                    $("header").click({ x: 600 });


                    $('a[data-lightbox-trigger="video-0"]').click();
                    $("iframe").waitForDisplayed();
                    browser.switchToFrame(0);
                    $("#player").waitForDisplayed();
                    $(".ytp-cued-thumbnail-overlay").click();
                    if ($(".ytp-error-content").isExisting() == true) {
                        title = browser.getTitle();
                        failedVideos.push(title);
                        browser.switchToFrame(null);
                        $("header").click({ x: 600 });
                    }
                    
                } else {
                    browser.url("https://57hours.com/adventure/");
                }

            });
            console.log(failedVideos + "++++++++++++++++");
        });


});
// {{apiEndpoint}}/v1/bookings/1495
// {
//     "data": {
//         "type": "57hours.bookings",
//         "id": "1495",
//         "attributes": {
//               "fundsTransferDone": "false"
//         }
//     }
// }
