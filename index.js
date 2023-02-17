
// searchBtn.addEventListener("click", getMovie);
// window.addEventListener("load", getMovie);

// <div id="collapse1" style="display: none;">
{/* <div class="card-body">
<div class="desc">Enter a what you have eaten, like <span>"coffee and croissant"</span> or <span>"chicken enchilada"</span> to see how it works. We have accurate data tens of thousands of foods, including international dishes.</div>
<div class="desc-title">Keywords</div>
<input type="text" placeholder="Type one or more keywords" class="search q">
<span class="input-group-addon"><i class="bx bx-sm bx-search-alt"></i></span>
</div>
</div> */}


const searchButton = document.querySelector('#heading1 button');
const searchDiv = document.querySelector('#collapse1');

const allergiesButton = document.querySelector('#heading2 button');
const allergiesDiv = document.querySelector('#allergies');

const dietsButton = document.querySelector('#heading3 button');
const dietsDiv = document.querySelector('#diets');

const caloriesButton = document.querySelector('#heading4 button');
const caloriesDiv = document.querySelector('#collapse4');

const nutrientsButton = document.querySelector('#heading5 button');
const nutrientsDiv = document.querySelector('#collapse5');

const centerDiv = document.querySelector('center-div');
const rightDiv = document.querySelector('right-div');

let divsToControl = [searchDiv, allergiesDiv, dietsDiv, caloriesDiv, nutrientsDiv]; // array of references to div elements

// loop through the divs to control and set their display property to "none"
searchButton.addEventListener('click', () => {
    divsToControl = [allergiesDiv, dietsDiv, caloriesDiv, nutrientsDiv]
    divsToControl.forEach(div => {
        div.style.display = 'none';
    });
    searchDiv.style.display = 'block'
});

allergiesButton.addEventListener('click', () => {
    divsToControl = [searchDiv, dietsDiv, caloriesDiv, nutrientsDiv]
    console.log(divsToControl)

    divsToControl.forEach(div => {
        div.style.display = 'none';
        console.log(div.style.display)

    });
    allergiesDiv.style.display = 'block';
    console.log('allergies:', allergiesButton.style.display)
    console.log(divsToControl)
});

dietsButton.addEventListener('click', () => {
    divsToControl = [searchDiv, allergiesDiv, caloriesDiv, nutrientsDiv]
    console.log(divsToControl)
    divsToControl.forEach(div => {
        div.style.display = 'none';
        console.log(div.style.display)
    });
    dietsDiv.style.display = 'block'
    console.log('diets:', dietsButton)
    console.log(divsToControl)

});

caloriesButton.addEventListener('click', () => {
    divsToControl = [searchDiv, allergiesDiv, dietsDiv, nutrientsDiv]
    divsToControl.forEach(div => {
        div.style.display = 'none';
    });
    caloriesDiv.style.display = 'block'
});

nutrientsButton.addEventListener('click', () => {
    divsToControl = [searchDiv, allergiesDiv, dietsDiv, caloriesDiv]
    divsToControl.forEach(div => {
        div.style.display = 'none';
    });
    nutrientsDiv.style.display = 'block'
});
