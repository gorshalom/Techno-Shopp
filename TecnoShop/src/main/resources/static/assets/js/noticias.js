fetch(
  "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a3de42c854f34805b629176edf60cfe0"
)
  .then((response) => {
    return response.text();
  })
  .then((result) => {
    // tech[0].src = `${link}`;
    let i = 1;
    let tech_authors = document.getElementsByClassName("name");
    let tech_date = document.getElementsByClassName("date");
    let tech_title = document.getElementsByClassName("tech_title");
    let tech_descriptions = document.getElementsByClassName("description");
    let tech_img = document.getElementsByClassName("tech_img");
    let news = JSON.parse(result);
    let link = news["articles"][0].urlToImage;
    tech_authors[0].innerHTML = "Author : " + news["articles"][0].author;
    tech_date[0].innerHTML = "Date " + news["articles"][0].publishedAt;
    tech_title[0].innerHTML = "Title : " + news["articles"][0].title;
    tech_descriptions[0].innerHTML =
      "News : " + news["articles"][0].description;
    tech_img[0].src = `${link}`;
    let btn = document.getElementsByClassName("right_btn");
    btn[0].addEventListener("click", () => {
      if (i < news["articles"].length) {
        let link = news["articles"][i].urlToImage;
        tech_authors[0].innerHTML = "Author : " + news["articles"][i].author;
        tech_date[0].innerHTML = "Date " + news["articles"][i].publishedAt;
        tech_title[0].innerHTML = "Title : " + news["articles"][i].title;
        tech_descriptions[0].innerHTML =
          "News : " + news["articles"][i].description;
        tech_img[0].src = `${link}`;
      } else {
        let link = news["articles"][0].urlToImage;
        tech_authors[0].innerHTML = "Author : " + news["articles"][0].author;
        tech_date[0].innerHTML = "Date " + news["articles"][0].publishedAt;
        tech_title[0].innerHTML = "Title : " + news["articles"][0].title;
        tech_descriptions[0].innerHTML =
          "News : " + news["articles"][0].description;
        tech_img[0].src = `${link}`;
        i = 1;
      }
      i++;
    });
  });

// business api
fetch(
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a3de42c854f34805b629176edf60cfe0"
)
  .then((response) => {
    return response.text();
  })
  .then((result) => {
    let i = 1;
    let busi_authors = document.getElementsByClassName("busi_name");
    let busi_date = document.getElementsByClassName("busi_date");
    let busi_title = document.getElementsByClassName("busi_title");
    let busi_content = document.getElementsByClassName("busi_description");
    let busi_img = document.getElementsByClassName("business_img");
    let busi_news = JSON.parse(result);
    // console.log(busi_news);
    let busi_link = busi_news["articles"][0].urlToImage;
    busi_authors[0].innerHTML = "Author : " + busi_news["articles"][0].author;
    busi_date[0].innerHTML = "Date " + busi_news["articles"][0].publishedAt;
    busi_title[0].innerHTML = "Title : " + busi_news["articles"][0].title;
    busi_content[0].innerHTML = "News : " + busi_news["articles"][0].content;
    busi_img[0].src = `${busi_link}`;
    let btn = document.getElementsByClassName("busiright_btn");
    btn[0].addEventListener("click", () => {
      if (i < busi_news["articles"].length) {
        let busi_link = busi_news["articles"][i].urlToImage;
        busi_authors[0].innerHTML =
          "Author : " + busi_news["articles"][i].author;
        busi_date[0].innerHTML = "Date " + busi_news["articles"][i].publishedAt;
        busi_title[0].innerHTML = "Title : " + busi_news["articles"][i].title;
        if (busi_news["articles"][i].content == "") {
          busi_content[0].innerHTML = "News : Not Available";
        } else {
          busi_content[0].innerHTML =
            "News : " + busi_news["articles"][i].content;
        }
        // busi_content[0].innerHTML = "News : " + busi_news['articles'][i].content;
        busi_img[0].src = `${busi_link}`;
      } else {
        let busi_link = busi_news["articles"][0].urlToImage;
        busi_authors[0].innerHTML =
          "Author : " + busi_news["articles"][0].author;
        busi_date[0].innerHTML = "Date " + busi_news["articles"][0].publishedAt;
        busi_title[0].innerHTML = "Title : " + busi_news["articles"][0].title;
        busi_content[0].innerHTML =
          "News : " + busi_news["articles"][0].content;
        busi_img[0].src = `${busi_link}`;
        i = 1;
      }
      i++;
    });
  });

// wallstreet journal api
fetch(
  "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=a3de42c854f34805b629176edf60cfe0"
)
  .then((response) => {
    return response.text();
  })
  .then((result) => {
    let i = 1;
    let wallstreet_authors = document.getElementsByClassName("wallstreet_name");
    let wallstreet_date = document.getElementsByClassName("wallstreet_date");
    let wallstreet_title = document.getElementsByClassName("wallstreet_title");
    let wallstreet_content = document.getElementsByClassName(
      "wallstreet_description"
    );
    let wallstreet_img = document.getElementsByClassName("wallstreet_img");
    let wallstreet_news = JSON.parse(result);
    // console.log(tesla_news);
    let wallstreet_link = wallstreet_news["articles"][0].urlToImage;
    wallstreet_authors[0].innerHTML =
      "Author : " + wallstreet_news["articles"][0].author;
    wallstreet_date[0].innerHTML =
      "Date " + wallstreet_news["articles"][0].publishedAt;
    wallstreet_title[0].innerHTML =
      "Title : " + wallstreet_news["articles"][0].title;
    wallstreet_content[0].innerHTML =
      "News : " + wallstreet_news["articles"][0].content;
    wallstreet_img[0].src = `${wallstreet_link}`;
    let btn = document.getElementsByClassName("wallstreetright_btn");
    btn[0].addEventListener("click", () => {
      if (i < wallstreet_news["articles"].length) {
        let wallstreet_link = wallstreet_news["articles"][i].urlToImage;
        wallstreet_authors[0].innerHTML =
          "Author : " + wallstreet_news["articles"][i].author;
        wallstreet_date[0].innerHTML =
          "Date " + wallstreet_news["articles"][i].publishedAt;
        wallstreet_title[0].innerHTML =
          "Title : " + wallstreet_news["articles"][i].title;
        if (wallstreet_news["articles"][i].content == "") {
          wallstreet_content[0].innerHTML = "News : Not Available";
        } else {
          wallstreet_content[0].innerHTML =
            "News : " + wallstreet_news["articles"][i].content;
        }
        // busi_content[0].innerHTML = "News : " + busi_news['articles'][i].content;
        wallstreet_img[0].src = `${wallstreet_link}`;
      } else {
        let wallstreet_link = tesla_news["articles"][0].urlToImage;
        wallstreet_authors[0].innerHTML =
          "Author : " + wallstreet_news["articles"][0].author;
        wallstreet_date[0].innerHTML =
          "Date " + wallstreet_news["articles"][0].publishedAt;
        wallstreet_title[0].innerHTML =
          "Title : " + wallstreet_news["articles"][0].title;
        wallstreet_content[0].innerHTML =
          "News : " + wallstreet_news["articles"][0].content;
        wallstreet_img[0].src = `${wallstreet_link}`;
        i = 1;
      }
      i++;
    });
  });
