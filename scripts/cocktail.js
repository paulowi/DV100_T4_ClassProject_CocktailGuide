$(document).ready(function() {
    
    // Get the cocktail ID from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const cocktailId = urlParams.get('id');
  
    if (cocktailId) {
      getCocktailDetails(cocktailId);
    } else {
      // Handle the case where no cocktail ID is provided in the URL
    }
  });
  
  function getCocktailDetails(cocktailId) {
    const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`;
  
    $.ajax({
      url: apiUrl,
      method: 'GET',
      dataType: 'json',
      success: function(data) {
        const cocktail = data.drinks[0];

        console.log(cocktail);
        
        if (cocktail) {
          $('#cocktailName').text(cocktail.strDrink);
          $('#cocktailCategory').text(`Category: ${cocktail.strCategory}`);
          $('#cocktailGlass').text(`Glass: ${cocktail.strGlass}`);
          $('#cocktailInstructions').text(cocktail.strInstructions);
          $('#cocktailImage').attr('src', cocktail.strDrinkThumb);

          if(cocktail.strIngredient1) {
            $('#cocktailIngredient1').text(cocktail.strIngredient1);
          }
          if(cocktail.strIngredient2) {
            $('#cocktailIngredient2').text(cocktail.strIngredient2);
          }
          if(cocktail.strIngredient3) {
            $('#cocktailIngredient3').text(cocktail.strIngredient3);
          }
          if(cocktail.strIngredient4) {
            $('#cocktailIngredient4').text(cocktail.strIngredient4);
          }

        } else {
          // Handle the case where the cocktail is not found
        }
      },
      error: function(error) {
        console.error('Error:', error);
      }
    });
  }