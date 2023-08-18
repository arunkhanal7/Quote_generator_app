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
  
  //previous for category as well as random
  previous.addEventListener("click", () => {
    if (!selectedCategory || selectedCategory === "random") {
      quotes.random = [...quotes.science, ...quotes.inspiration];
    }
  
    const category = selectedCategory ?? "random";
  
    if (Index > 0) {
      Index--;
      Quote_Update(category);
    }
  });
  
  //next for category as well as random
  
  next.addEventListener("click", () => {
    if (!selectedCategory || selectedCategory === "random") {
      quotes.random = [...quotes.science, ...quotes.inspiration];
    }
  
    const category = selectedCategory ?? "random";
  
    const categoryQuotes = quotes[category];
  
    if (Index < categoryQuotes.length - 1) {
      Index++;
      Quote_Update(category);
    }
  });
  
  //category selection from select 
  
  category.addEventListener("change", (e) => {
    const category = e.target.value;
    if (category === "random") {
      quotes.random = [...quotes.science, ...quotes.inspiration];
    }
    Index = 0;
    quote.textContent = quotes[category][Index];
    selectedCategory = category;
  });
  
  
  //to show the quote in the text content of the html
  const Quote_Update = (category) => {
    if (!category){
       category = "science";
    }
    quote.textContent = quotes[category][Index];
    quote.style.fontSize = font + "px";
  };
  
  
  //for random generation
  // usinf do while loop to not generate same Index continously
  
  let lastDisplayedIndex = -1; // Initialize with a value that won't match any index
  
  function displayRandom() {
    const category = Math.random() < 0.5 ? "science" : "inspiration";
  
    let Index;
    do {
      Index = Math.floor(Math.random() * quotes[category].length);
    } while (Index === lastDisplayedIndex); // Generate a new index until it's different
  
    lastDisplayedIndex = Index; // Update the last displayed index
  
    quote.textContent = quotes[category][Index];
  }
  
  random.addEventListener("click", displayRandom);
  
  //to decrease the font size
  function decreasefont(){
      if(font > 18  ){
          font -= 2;
          Quote_Update();
      }
  }
  fontsmaller.addEventListener("click", decreasefont);
  
  
  // to increase the font size
  function increasefont(){
      if(font < 30){
          font += 2;
          Quote_Update();
      }
  
  }
  fontbigger.addEventListener("click",increasefont)
  
  
  function theme(){
          let element = document.body;
          element.classList.toggle("dark");
  }
  togglebutton.addEventListener("click",theme)
  
  //
  Quote_Update();
  