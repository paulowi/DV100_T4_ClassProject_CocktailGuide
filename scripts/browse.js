// Run code when the document loads
$(document).ready(function() {

    // Call the function to get and log the data for cocktails starting with the letter 'a'
getCocktailDataByFirstLetter('a');

});

function getCocktailDataByFirstLetter(letter) {
    const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;
  
    $.ajax({
        url: apiUrl,
        method: 'GET',
        dataType: 'json',
        success: function(data) {

          // Map the results to a JavaScript object
          const cocktails = data.drinks.map(cocktail => ({
            id: cocktail.idDrink,
            name: cocktail.strDrink,
            image: cocktail.strDrinkThumb,
          }));
          
          displayCocktails(cocktails);

        },
        error: function(error) {
          console.error('Error:', error);
        }
      });
  }

  function displayCocktails(cocktails) {

    const cocktailsContainer = $('#cocktailsContainer');
    cocktailsContainer.empty(); // Clear previous results
    
    cocktails.forEach(cocktail => {
        const card = $(`
          <div class="col-md-4 mb-3">
            <div class="card">
              <img src="${cocktail.image}" class="card-img-top" alt="${cocktail.name}">
              <div class="card-body">
                <h5 class="card-title">${cocktail.name}</h5>
              </div>
            </div>
          </div>
        `);

        card.click(function() {
            window.location.href = `cocktail.html?id=${cocktail.id}`;
        });

        cocktailsContainer.append(card);
    });


}