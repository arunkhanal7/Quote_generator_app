const quotes = {
    science : ['Science is the magic that works','There is real poetry in the real world. Science is the poetry of reality','A real scientist solves problems, not wails that they are unsolvable','The science of today is the technology of tomorrow','The scientist is not a person who gives the right answers, he is one who asks the right questions'],
    inspiration :['The secret of getting ahead is getting started.','It is hard to beat a person who never gives up.','If people are doubting how far you can go, go so far that you can not hear them anymore.','Everything you can imagine is real.','Whatever you are, be a good one.']
}
let quote = document.getElementById('quote');
let random = document.getElementById('random');
let previous = document.getElementById('previous');
let next = document.getElementById('next');


let category = 'science';
let Index = 0;
let font = 24;

const Quote_Update= ()=>{
    quote.textContent = quotes[category][Index];
    quote.style.fontSize = font + 'px';
    

}

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


random.addEventListener('click',displayRandom);

previous.addEventListener('click', () => {
        if (Index > 0) {
            Index--;
            Quote_Update();
        }
    });
next.addEventListener('click',()=>{
    const categoryQuotes = quotes[category];
    if (Index < categoryQuotes.length - 1) {
            Index++;
        Quote_Update();
    }
})


Quote_Update();
