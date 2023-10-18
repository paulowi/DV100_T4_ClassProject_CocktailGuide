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
        },
        error: function(data){
            // Run Error
        }

    })
}