const inputMealName = document.getElementById('inputMealName');
const getMeal = inputMealName => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + inputMealName.value + '')
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
        .catch(error => {
            alert('Nothing is found!')
        })
}
const displayMeals = meals => {
    const mealsDiv = document.getElementById('meals');
    mealsDiv.innerHTML = '';
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        const mealInfo = `  
                <div onclick="displayMealDetail('${meal.idMeal}')">
                <img src="${meal.strMealThumb}" alt="" width="200" height="150">
                  <h3 class="meal-name">${meal.strMeal}</h3>                  
                </div>`;
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
        mealDiv.innerHTML = `
        <div id="singleMealDetail">
                <img src="${meal.strMealThumb}" alt="" width="400" height="300"> 
                <h1>${meal.strMeal}</h1>        
                <h2>Ingredient:</h2>
                <ul>
                    <li>${meal.strMeasure1} ${meal.strIngredient1}</li>
                    <li>${meal.strMeasure2} ${meal.strIngredient2}</li>
                    <li>${meal.strMeasure3} ${meal.strIngredient3}</li>
                    <li>${meal.strMeasure4} ${meal.strIngredient4}</li>
                    <li>${meal.strMeasure5} ${meal.strIngredient5}</li>
                    <li>${meal.strMeasure6} ${meal.strIngredient6}</li>
                    <li>${meal.strMeasure7} ${meal.strIngredient7}</li>
                    <li>${meal.strMeasure8} ${meal.strIngredient8}</li>
                    <li>${meal.strMeasure9} ${meal.strIngredient9}</li>
                    <li>${meal.strMeasure10} ${meal.strIngredient10}</li>
                    <li>${meal.strMeasure11} ${meal.strIngredient11}</li>
                    <li>${meal.strMeasure12} ${meal.strIngredient12}</li>
                    <li>${meal.strMeasure13} ${meal.strIngredient13}</li>
                    <li>${meal.strMeasure14} ${meal.strIngredient14}</li>
                    <li>${meal.strMeasure15} ${meal.strIngredient15}</li>
                    <li>${meal.strMeasure16} ${meal.strIngredient16}</li>
                    <li>${meal.strMeasure17} ${meal.strIngredient17}</li>
                    <li>${meal.strMeasure18} ${meal.strIngredient18}</li>
                    <li>${meal.strMeasure19} ${meal.strIngredient19}</li>
                    <li>${meal.strMeasure20} ${meal.strIngredient20}</li>                     
                </ul>         
        </div>`
    }
}








