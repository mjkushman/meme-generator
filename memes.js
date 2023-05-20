const form = document.querySelector('#memeForm') // select the form
const image = document.querySelector('input[name="image"]') // select the image nput
const tText = document.querySelector('input[name="tText"]') // select the top text input
const bText = document.querySelector('input[name="bText"]') // select the bottom text input
const results = document.getElementById('results')

//Ceates the meme
function createMeme(background, top, bot){
    const meme = document.createElement('div'); // create meme div
    const topDiv = document.createElement('div') // create top text div
    const botDiv = document.createElement('div') // create bottom tex div
    const removeBtn = document.createElement('button');
    removeBtn.innerText='Delete'
    removeBtn.classList.add('removeBtn')
    meme.appendChild(topDiv); // add top tex div
    meme.appendChild(botDiv); // add bottom text div
    meme.classList.add('meme')
    topDiv.classList.add('top-text') // adds class of top-text
    botDiv.classList.add('bottom-text') // adds class of bottom-text
    meme.setAttribute('style',"background-image:"+`url(${background})`);
    topDiv.innerText=top;
    botDiv.innerText=bot;
    results.appendChild(meme)
    meme.append(removeBtn)
}
//Event listener to make Delete button delete
results.addEventListener('click', function(e){
    if(e.target.tagName === 'BUTTON'){
    e.target.parentElement.remove();
    }
})

//event listener to hande the Submit button
form.addEventListener('submit', function(e){
    e.preventDefault(); // prevent page from reloading
    //Make sure all 3 fields are supplied. If yes, call meme creator function
    tText.value == '' || bText.value == '' || image.value == '' ? alert("Fill out all three fields!") : createMeme(image.value, tText.value, bText.value); // calls the meme creator function
    //Cear the form values
    image.value=''
    tText.value=''
    bText.value=''
}
)