let app_key = "f5ba8b0969b7c7cca5906ee1084fa731";
let app_id = "f5266155";
let URL = `https://api.edamam.com/api/recipes/v2?type=public&app_key=${app_key}&app_id=${app_id}`;

const queryParams = new URLSearchParams();

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const searchInput = document.querySelector(".search.q");
const healthCheckboxes = document.querySelectorAll(
  '.health-check input[type="checkbox"]'
);
const dietCheckboxes = document.querySelectorAll(
  '.diet-check input[type="checkbox"]'
);
const mealCheckboxes = document.querySelectorAll(
  '.meal-check input[type="checkbox"]'
);

function addRecipes(item) {
  var cardContainer = document.getElementById("card-container");


  let card = document.createElement("div");
  card.className = "recipeCard";
  // card.style.height = "200px";
  // card.style.width = "200px";
  // card.style.backgroundColor = "lightgray";
  card.style.margin = "10px";
  card.style.float = "left";

  let cardHeader = document.createElement("div");
  cardHeader.className = "image-div";

  let image = document.createElement("img");
  image.src = item.recipe.images.REGULAR.url;

  let title = document.createElement("p");
  title.textContent = item.recipe.label;

  let addButton = document.createElement("button");

  // let plusSign = document.createElement("span");
  // plusSign.className = "material-symbols-outlined";
  // plusSign.textContent = "Add";

  let ingredients = item.recipe.ingredients;
  let myList = document.createElement("ul");
  myList.className = "ingredient-list";

    ingredients.forEach(function (ingredient){
      let food = ingredient.text;
      let listItem = document.createElement("li");
      listItem.textContent = food;
      listItem.className = "ingredient";
      // Append the list item to the unordered list
      myList.appendChild(listItem);
    });


  let ingredientDiv = document.createElement("div");
  ingredientDiv.className = 'ingredient-div';
  const calories = document.createElement("p");
  calories.textContent = item.recipe.calories;

  ingredientDiv.appendChild(myList);

  // addButton.appendChild(plusSign);


  cardHeader.appendChild(image);
  cardHeader.appendChild(title);
  cardHeader.appendChild(addButton);
  card.appendChild(cardHeader)
  card.appendChild(ingredientDiv);
  // card.appendChild(calories);

  cardContainer.appendChild(card);
}

// Add checkbox values to endpoint and keywords
function updateApiEndpoint() {
  const queryParams = new URLSearchParams();
  if (searchInput.value) {
    queryParams.append("q", searchInput.value);
  } else {
    queryParams.delete("q");
  }

  healthCheckboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      queryParams.append("health", checkbox.value);
    }
  });

  // remove the unchecked health checkbox value from the health parameter
  healthCheckboxes.forEach(function (checkbox) {
    if (!checkbox.checked) {
      queryParams.getAll("health").forEach(function (healthValue, index) {
        if (healthValue === checkbox.value) {
          queryParams.delete("health", index);
        }
      });
    }
  });

  // add diet parameters to queryParams as needed
  dietCheckboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      queryParams.append("diet", checkbox.value);
    }
  });

  // remove the unchecked diet checkbox value from the diet parameter
  dietCheckboxes.forEach(function (checkbox) {
    if (!checkbox.checked) {
      queryParams.getAll("diet").forEach(function (dietValue, index) {
        if (dietValue === checkbox.value) {
          queryParams.delete("diet", index);
        }
      });
    }
  });

  mealCheckboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      queryParams.append("mealType", checkbox.value);
    }
  });

  mealCheckboxes.forEach(function (checkbox) {
    if (!checkbox.checked) {
      queryParams.getAll("mealType").forEach(function (mealValue, index) {
        if (mealValue === checkbox.value) {
          queryParams.delete("mealType", index);
        }
      });
    }
  });

  // add other parameters to queryParams as needed

  const url = `${URL}&${queryParams.toString()}`;
  console.log(encodeURI(url));
  window.localStorage.setItem("apiURL", url);
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", updateApiEndpoint);
  // console.log(url);
});

// Add keyword values to url
searchInput.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    event.preventDefault();
    updateApiEndpoint();
  }
});

// Search button
async function searchRecipes() {
  let getobj = window.localStorage.getItem("apiURL");
  console.log(getobj);

  try {
    const response = await fetch(getobj);
    const data = await response.json();

    console.log(data);
    let cardContainer = document.getElementById("card-container");
    while (cardContainer.firstChild) {
      cardContainer.removeChild(cardContainer.firstChild);
    }
    data.hits.forEach((item) => addRecipes(item));
    localStorage.setItem("Recipes", JSON.stringify(data));
  } catch (error) {
    console.error(error);
  }
}

const apiSearchButton = document.getElementById("search-btn");
apiSearchButton.addEventListener("click", searchRecipes);
let url = "";