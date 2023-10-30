$(document).ready(function() {

    const urlParams = new URLSearchParams(window.location.search);
    const cocktailId = urlParams.get('id');

    if(cocktailId) {
        getCocktailDetails(cocktailId);
    } else{
        //Handle error Message
    }

});

function getCocktailDetails(cocktailId) {
    const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`;
  
    $.ajax({
        url: apiUrl,
        method: 'GET',
        dataType: 'json',
        success: function(data) {
             
            console.log(data);

            const cocktail = data.drinks[0];

            $('#cocktailName').text(cocktail.strDrink);
            $('#cocktailCategory').text(cocktail.strCategory);
            $('#cocktailGlass').text(cocktail.strGlass);
            $('#cocktailInstructions').text(cocktail.strInstructions);
            $('#cocktailImage').attr('src', cocktail.strDrinkThumb);

            


        },
        error: function(error) {
          console.error('Error:', error);
        }
      });
  }