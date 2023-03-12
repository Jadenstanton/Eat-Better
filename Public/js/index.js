// searchBtn.addEventListener("click", getMovie);
// window.addEventListener("load", getMovie);

// <div id="collapse1" style="display: none;">
{
  /* <div class="card-body">
<div class="desc">Enter a what you have eaten, like <span>"coffee and croissant"</span> or <span>"chicken enchilada"</span> to see how it works. We have accurate data tens of thousands of foods, including international dishes.</div>
<div class="desc-title">Keywords</div>
<input type="text" placeholder="Type one or more keywords" class="search q">
<span class="input-group-addon"><i class="bx bx-sm bx-search-alt"></i></span>
</div>
</div> */
}

const searchButton = document.querySelector("#heading1 button");
const searchDiv = document.querySelector("#collapse1");

const allergiesButton = document.querySelector("#heading2 button");
const allergiesDiv = document.querySelector("#allergies");

const dietsButton = document.querySelector("#heading3 button");
const dietsDiv = document.querySelector("#diets");

const caloriesButton = document.querySelector("#heading4 button");
const caloriesDiv = document.querySelector("#collapse4");

const nutrientsButton = document.querySelector("#heading5 button");
const nutrientsDiv = document.querySelector("#collapse5");

const centerDiv = document.querySelector("center-div");
const rightDiv = document.querySelector("right-div");

let divsToControl = [
  searchDiv,
  allergiesDiv,
  dietsDiv,
  caloriesDiv,
  nutrientsDiv,
]; // array of references to div elements

/* When the user clicks on the button, 
        toggle between hiding and showing the dropdown content */
function keywordFunction() {
  document.getElementById("searchDropdown").classList.toggle("show");
}
function allFunction() {
  document.getElementById("allDropdown").classList.toggle("show");
}
function dietFunction() {
  document.getElementById("dietDropdown").classList.toggle("show");
}
function calFunction() {
  document.getElementById("calDropdown").classList.toggle("show");
}
function nutriFunction() {
  document.getElementById("nutriDropdown").classList.toggle("show");
}

let currentDropdown = null;

function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  if (currentDropdown && currentDropdown !== dropdown) {
    currentDropdown.classList.remove("show");
  }
  dropdown.classList.toggle("show");
  currentDropdown = dropdown;
}

// Close the dropdown if the user clicks outside of it or on another dropdown button
window.onclick = function (event) {
  const dropdownBtns = document.querySelectorAll(".dropbtn");
  const dropdownContents = document.querySelectorAll(".dropdown-content");
  let clickedOnDropdown = false;

  // Check if the click was on a dropdown button
  for (let i = 0; i < dropdownBtns.length; i++) {
    if (event.target === dropdownBtns[i]) {
      clickedOnDropdown = true;
      break;
    }
  }

  // Close the current dropdown if the click was outside of it or on another dropdown button
  if (!clickedOnDropdown) {
    for (let i = 0; i < dropdownContents.length; i++) {
      const dropdownContent = dropdownContents[i];
      if (
        dropdownContent.classList.contains("show") &&
        !dropdownContent.contains(event.target)
      ) {
        dropdownContent.classList.remove("show");
        currentDropdown = null;
      }
    }
  }
};

// loop through the divs to control and set their display property to "none"
// searchButton.addEventListener('click', () => {
//     divsToControl = [allergiesDiv, dietsDiv, caloriesDiv, nutrientsDiv]
//     divsToControl.forEach(div => {
//         div.style.display = 'none';
//     });
//     searchDiv.style.display = 'block'
// });

// allergiesButton.addEventListener('click', () => {
//     divsToControl = [searchDiv, dietsDiv, caloriesDiv, nutrientsDiv]
//     console.log(divsToControl)

//     divsToControl.forEach(div => {
//         div.style.display = 'none';
//         console.log(div.style.display)

//     });
//     allergiesDiv.style.display = 'block';
//     console.log('allergies:', allergiesButton.style.display)
//     console.log(divsToControl)
// });

// dietsButton.addEventListener('click', () => {
//     divsToControl = [searchDiv, allergiesDiv, caloriesDiv, nutrientsDiv]
//     console.log(divsToControl)
//     divsToControl.forEach(div => {
//         div.style.display = 'none';
//         console.log(div.style.display)
//     });
//     dietsDiv.style.display = 'block'
//     console.log('diets:', dietsButton)
//     console.log(divsToControl)

// });

// caloriesButton.addEventListener('click', () => {
//     divsToControl = [searchDiv, allergiesDiv, dietsDiv, nutrientsDiv]
//     divsToControl.forEach(div => {
//         div.style.display = 'none';
//     });
//     caloriesDiv.style.display = 'block'
// });

// nutrientsButton.addEventListener('click', () => {
//     divsToControl = [searchDiv, allergiesDiv, dietsDiv, caloriesDiv]
//     divsToControl.forEach(div => {
//         div.style.display = 'none';
//     });
//     nutrientsDiv.style.display = 'block'
// });
