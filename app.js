// List of quotes
const quotes = {
  0: { imageUrl: "/images/1.png", count: 0, author: "Senna" },
  1: { imageUrl: "/images/2.png", count: 0, author: "Aunt May (Spiderman)" },
  2: { imageUrl: "/images/3.png", count: 0, author: "Morgana the Fallen" },
  3: { imageUrl: "/images/4.png", count: 0, author: "Martin Luther King, Jr." },
  4: { imageUrl: "/images/5.png", count: 0, author: "Earl Vincent Coral" },
  5: { imageUrl: "/images/6.png", count: 0, author: "Maya Angelou" },
  6: { imageUrl: "/images/7.png", count: 0, author: "Ballas (Warframe)" },
  7: { imageUrl: "/images/8.png", count: 0, author: "Brad Henry" },
  8: { imageUrl: "/images/9.png", count: 0, author: "Helen Keller" },
  9: {
    imageUrl: "/images/10.png",
    count: 0,
    author: "Martin Luther King, Jr.",
  },
};

// Total number of quotes
const quotesLength = Object.keys(quotes).length;

// Get DOM elements
const generateBtn = document.getElementById("generate-btn");
const quoteTitle = document.getElementById("quote-title");
const quoteImage = document.getElementById("quote-image");
const viewCount = document.getElementById("view-count");
const viewContainer = document.getElementById("view-container");
const topViewTitle = document.getElementById("top-view-title");
const bgImage = document.getElementById("bg-image");

// Check if all DOM elements are present, else don't put any interactivity
if (
  generateBtn &&
  quoteTitle &&
  quoteImage &&
  viewCount &&
  topViewTitle &&
  bgImage
) {
  generateBtn.addEventListener("click", () => {
    // Generate random number
    const rand = Math.floor(Math.random() * quotesLength);

    // Get a random quote based from the random number
    const quote = quotes[rand];

    // Increase quote reveal count
    quote.count++;

    // Display the random quote
    quoteImage.src = quote.imageUrl;
    quoteImage.alt = quote.imageUrl;
    quoteTitle.innerHTML = `Author: ${quote.author}`;
    viewCount.innerHTML = `View count: ${quote.count}`;

    // Get quotes ranking
    const quotesRankingList = [];
    Object.keys(quotes).forEach((index) => {
      quotesRankingList.push(quotes[index]);
    });
    quotesRankingList.sort((q1, q2) => (q1.count > q2.count ? -1 : 1));

    // Display quotes ranking
    let quotesRankingHtml = "";
    quotesRankingList.forEach((quote, index) => {
      quotesRankingHtml += `<div>
      <div class="flex justify-between items-center">
      <p><b>${index + 1}.</b> ${quote.author}</p> 
      <p>Views: ${quote.count}</p>
      </div>
      <img class="rounded-xl overflow-hidden" src=${quote.imageUrl} alt=${
        quote.imageUrl
      } />
      </div>`;
    });
    viewContainer.innerHTML = quotesRankingHtml;
    topViewTitle.innerHTML = "Top Views";

    // Change background image
    bgImage.src = quote.imageUrl;
  });
} else {
  // Check if there's any error (DEV)
  console.log("error:");
  if (!generateBtn) console.log("generateBtn");
  if (!quoteTitle) console.log("quoteTitle");
  if (!quoteImage) console.log("quoteImage");
  if (!viewCount) console.log("viewCount");
  if (!topViewTitle) console.log("topViewTitle");
  if (!bgImage) console.log("bgImage");
}
