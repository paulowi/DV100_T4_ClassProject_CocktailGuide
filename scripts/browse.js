$(document).ready(function () {
    getCocktailByFirstLetter('a');
    console.log("test");

    $("input[name='letterFilter']").click(function () {
        const selectedLetter = $(this).attr('value');
        getCocktailByFirstLetter(selectedLetter);
    })
})

getCocktailByFirstLetter = (letter) => {
    const apiURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;

    $.ajax({
        url: apiURL,
        type: 'GET',
        dataType: 'json',
        loading: console.log("loading nigga damn"),
        success: function(data) {

            const cocktails = data.drinks.map(cocktail => ({
                id: cocktail.idDrink,
                name: cocktail.strDrink,
                image: cocktail.strDrinkThumb,
            }));
            console.log(cocktails);
            console.log("test");

            displayCocktail(cocktails);
        },
        error: function(data){
            // Run Error
        }

    })
}

displayCocktail = (cocktails) => {
    const cocktailsContainer = $('#cocktailsContainer');
    cocktailsContainer.empty();

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
        `)
        card.click(function () {
            window.location.href = `cocktail.html?id=${cocktail.id}`;
        })

        cocktailsContainer.append(card);
    });
}