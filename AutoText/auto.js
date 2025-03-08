const containerEl = document.querySelector(".wrap");
const words = ["Red","Blue","Green","Black","White","Purple","Pink","Orange","Brown"];
let wordsIndex = 0;
let charaterIndex = 0;

update();

function update(){
    charaterIndex++;
    containerEl.innerHTML = `
    <h1>Colors: ${words[wordsIndex].slice(0,charaterIndex)}</h1>
`;

    if(charaterIndex === words[wordsIndex].length){
        wordsIndex++;
        charaterIndex = 0;
    }

    if(wordsIndex === words.length){
        wordsIndex = 0;
    }
    setTimeout(update, 300);
}