$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const cocktailID = urlParams.get('id');

    if (cocktailID) {
        getCocktailDetails(cocktailID);
    } else {
        //run error
    }
})

getCocktailDetails = (cocktailID) => {
    const apiURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailID}`;

    $.ajax({
        url: apiURL,
        type: 'GET',
        dataType: 'json',
        success: function(data) {

            const cocktail = data.drinks[0];

            console.log(cocktail);
            $('#cocktailName').text(cocktail.strDrink);
            $('#cocktailCategory').text(cocktail.strCategory);
            $('#cocktailGlass').text(cocktail.strGlass);
            $('#cocktailInstructions').text(cocktail.strInstructions);
            $('#cocktailImage').attr('src', cocktail.strDrinkThumb);
            $('#cocktailIngredient1').text(cocktail.strIngredient1);
            $('#cocktailIngredient2').text(cocktail.strIngredient2);
            $('#cocktailIngredient3').text(cocktail.strIngredient3);
            $('#cocktailIngredient4').text(cocktail.strIngredient4);
        },
        error: function(data){
            // Run Error
        }

    })
}