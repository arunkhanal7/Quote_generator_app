const quotes = {
  science: [
    "Science is the magic that works",
    "There is real poetry in the real world. Science is the poetry of reality",
    "A real scientist solves problems, not wails that they are unsolvable",
    "The science of today is the technology of tomorrow",
    "The scientist is not a person who gives the right answers, he is one who asks the right questions",
  ],
  inspiration: [
    "The secret of getting ahead is getting started.",
    "It is hard to beat a person who never gives up.",
    "If people are doubting how far you can go, go so far that you can not hear them anymore.",
    "Everything you can imagine is real.",
    "Whatever you are, be a good one.",
  ],
};

let quote = document.getElementById("quote");
let random = document.getElementById("random");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let category = document.getElementById("category");
let fontsmaller = document.getElementById("decreaseFont");
let fontbigger = document.getElementById("increaseFont");
let togglebutton = document.getElementById("switch");

let Index = 0;
let font = 24;
let selectedCategory;
let selectedQuote;

// Function to update the displayed quote and font size
const Quote_Update = (category, index) => {
  quote.textContent = quotes[category][index];
  quote.style.fontSize = font + "px";
};

// Function to handle previous button click
previous.addEventListener("click", () => {
  if (Index > 0) {
    Index--;
    Quote_Update(selectedCategory, Index);
  }
});

// Function to handle next button click
next.addEventListener("click", () => {
  const categoryQuotes = quotes[selectedCategory];
  if (Index < categoryQuotes.length - 1) {
    Index++;
    Quote_Update(selectedCategory, Index);
  }
});

// Function to handle category change
category.addEventListener("change", (e) => {
  selectedCategory = e.target.value;
  Index = 0;
  Quote_Update(selectedCategory, Index);
});

// Function to handle random button click
random.addEventListener("click", () => {
  const category = Math.random() < 0.5 ? "science" : "inspiration";
  const categoryQuotes = quotes[category];
  
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * categoryQuotes.length);
  } while (newIndex === Index);

  Index = newIndex;
  selectedCategory = category;
  Quote_Update(selectedCategory, Index);
});

// Function to handle font size decrease
fontsmaller.addEventListener("click", () => {
  if (font > 18) {
    font -= 2;
    Quote_Update(selectedCategory, Index);
  }
});

// Function to handle font size increase
fontbigger.addEventListener("click", () => {
  if (font < 30) {
    font += 2;
    Quote_Update(selectedCategory, Index);
  }
});

// Function to toggle theme
togglebutton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Initial setup to display the first quote
selectedCategory = "science"; // Default category
selectedQuote = quotes[selectedCategory][Index]; // Get the first quote
Quote_Update(selectedCategory, Index); // Display the first quote


