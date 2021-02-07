const inputMealName = document.getElementById('inputMealName');
const getMeal = inputMealName => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + inputMealName.value + '')
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
        .catch(error => {
            alert('Meal name not found!')
        })
}
const displayMeals = meals => {
    const mealsDiv = document.getElementById('meals');
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        const mealInfo = `  
                <div onclick="displayMealDetail('${meal.idMeal}')">
                <img src="${meal.strMealThumb}" alt="" width="200" height="150">
                  <h3 class="meal-name">${meal.strMeal}</h3>                  
                </div>
                `;
        mealDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(mealDiv);
    });
}
const displayMealDetail = id => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => renderCountryInfo(data.meals[0]));
    const renderCountryInfo = meal => {
        const mealDiv = document.getElementById('mealDetail');
        console.log(meal);
        mealDiv.innerHTML = `
        <img src="${meal.strMealThumb}" alt="" width="200" height="150"> 
        <h1>${meal.strMeal}</h1>        
         <h2>Ingredient:</h2>          
         <p>${meal.strIngredient1}: ${meal.strMeasure1}</p>
         <p>${meal.strIngredient2}: ${meal.strMeasure2}</p>
         <p>${meal.strIngredient3}: ${meal.strMeasure3}</p>
         <p>${meal.strIngredient4}: ${meal.strMeasure4}</p>
         <p>${meal.strIngredient5}: ${meal.strMeasure5}</p>
         <p>${meal.strIngredient6}: ${meal.strMeasure6}</p>
         <p>${meal.strIngredient7}: ${meal.strMeasure7}</p>
         <p>${meal.strIngredient8}: ${meal.strMeasure8}</p>
         <p>${meal.strIngredient9}: ${meal.strMeasure9}</p>
         <p>${meal.strIngredient10}: ${meal.strMeasure10}</p>        
   `
    }
}








