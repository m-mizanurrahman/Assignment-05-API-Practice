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
                    <li>${meal.strIngredient1}- ${meal.strMeasure1}</li>
                    <li>${meal.strIngredient2}- ${meal.strMeasure2}</li>
                    <li>${meal.strIngredient3}- ${meal.strMeasure3}</li>
                    <li>${meal.strIngredient4}- ${meal.strMeasure4}</li>
                    <li>${meal.strIngredient5}- ${meal.strMeasure5}</li>
                    <li>${meal.strIngredient6}- ${meal.strMeasure6}</li>
                    <li>${meal.strIngredient7}- ${meal.strMeasure7}</li>
                    <li>${meal.strIngredient8}- ${meal.strMeasure8}</li>
                    <li>${meal.strIngredient9}- ${meal.strMeasure9}</li> 
                    <li>${meal.strIngredient10}- ${meal.strMeasure10}</li>
                    <li>${meal.strIngredient11}- ${meal.strMeasure11}</li>
                    <li>${meal.strIngredient12}- ${meal.strMeasure12}</li>
                    <li>${meal.strIngredient13}- ${meal.strMeasure13}</li>
                    <li>${meal.strIngredient14}- ${meal.strMeasure14}</li>
                    <li>${meal.strIngredient15}- ${meal.strMeasure15}</li>
                    <li>${meal.strIngredient16}- ${meal.strMeasure16}</li>
                    <li>${meal.strIngredient17}- ${meal.strMeasure17}</li>
                    <li>${meal.strIngredient18}- ${meal.strMeasure18}</li>
                    <li>${meal.strIngredient19}- ${meal.strMeasure19}</li> 
                    <li>${meal.strIngredient20}- ${meal.strMeasure20}</li>                       
                </ul>         
        </div>`
    }
}








