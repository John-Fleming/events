const pies = [
    {
        name: 'Dutch Apple Pie',
        price: 1000,
        isWarm: false,
        isOrganic: true,
        crust: 'extra flakey',
        iceCream: 'Vanilla Bean',
        isAvailable: true,
        imageURL: 'https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/x17/16800-blue-ribbon-apple-pie-600x600.jpg?ext=.jpg',
        drinkPairing: 'whiskey',
        instructor: 'Zoe'
    },
    {
        name: 'Regular Apple Pie',
        price: 5000,
        isWarm: false,
        isOrganic: true,
        crust: 'under baked',
        iceCream: 'Vegan chocolate',
        isAvailable: false,
        imageURL: 'https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/x17/21069-cherry-apple-pie-600x600.jpg?ext=.jpg',
        drinkPairing: 'All Wines',
        instructor: 'Mary'
    },
    {
        name: 'Pizza Pie',
        price: 2.5,
        isWarm: true,
        isOrganic: false,
        crust: 'yeah!',
        iceCream: 'nope',
        isAvailable: false,
        imageURL: 'https://s3.amazonaws.com/order.teafords.com.sites.diner.space/product/0148a7f5c057ce/tn.600x600.png',
        drinkPairing: 'High Life',
        instructor: 'Luke'
    },
    {
        name: 'Berry Pie',
        price: 1,
        isWarm: true,
        isOrganic: false,
        crust: 'good',
        iceCream: 'nope',
        isAvailable: false,
        imageURL: 'https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/x17/16619-american-berry-pie-600x600.jpg?ext=.jpg',
        drinkPairing: 'Water',
        instructor: 'Zoe'
    },
    {
        name: 'Chocolate Pie',
        price: 1,
        isWarm: true,
        isOrganic: false,
        crust: 'Graham Cracker',
        iceCream: 'Mint',
        isAvailable: true,
        imageURL: 'https://www.thecrownmarket.com/wp-content/uploads/2018/10/Chocolate-Cream-Pie-600x600.jpg',
        drinkPairing: 'Gin',
        instructor: 'Mary'
    },
    {
        name: 'Pi Pie',
        price: 3.14,
        isWarm: false,
        isOrganic: true,
        crust: 'Crumb',
        iceCream: 'Moose Tracks',
        isAvailable: true,
        imageURL: 'https://s22735.pcdn.co/wp-content/uploads/GettyImages-503213657-600x600.jpg',
        drinkPairing: 'Milk',
        instructor: 'Luke'
    },
    {
        name: 'Chess Pie',
        price: 5,
        isWarm: true,
        isOrganic: true,
        crust: 'Crumb',
        iceCream: 'Strawberry',
        isAvailable: true,
        imageURL: 'https://thelocalpalate.com/wp-content/uploads/2015/11/Chocolate-Pie-600x600.jpg',
        drinkPairing: 'Cider',
        instructor: 'John'
    },
    {
        name: 'Pumpkin Pie',
        price: 10,
        isWarm: false,
        isOrganic: false,
        crust: 'Semi-flakey',
        iceCream: 'Rocky Road',
        isAvailable: false,
        imageURL: 'https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/x17/19055-maple-pecan-pumpkin-pie-600x600.jpg?ext=.jpg',
        drinkPairing: 'Dr. Pepper',
        instructor: 'John'
    },
];

// console.log('pies', pies);

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};


// Instructions: 
// 3 cards to a row 
// big images
// display all pie objects information 

const pieBuilder = () => {
    let domString = '';
    for (pie in pies) {
        domString += `
        <div class="pie-cards">
            <div class="pie-card-content">
                <div class="pie-picture">
                    <img src=${pies[pie].imageURL} alt="A picture of a ${pies[pie].name}">
                </div>
                <div class="pie-card-text">
                    <h2 class="pie-name">${pies[pie].name}</h2>
                    <div class="pie-lists">
                        <div class="pie-facts-list">
                            <h3 class="pie-facts-header">What you need to know:</h3>
                            <ul>
                                <li>Price: $${pies[pie].price}</li>
                                <li>Crust: ${pies[pie].crust}</li>
                                <li>Is it Organic? ${pies[pie].isOrganic}</li>
                                <li>Is it Warm? ${pies[pie].isWarm}</li>
                            </ul>
                        </div>
                        <div class="pie-pairings-list">
                            <h3 class="pie-pairings-header">Best served with:</h3>
                            <ul>
                                <li>${pies[pie].iceCream}</li>
                                <li>${pies[pie].drinkPairing}</li>
                            </ul>
                        </div>
                    </div>
                    <p class="instructors-pies">This is one of ${pies[pie].instructor}'s favorite pies!</p>
                </div>
            </div>
        </div>
        `;
    }
    printToDom('pie-card-creator', domString);
};

pieBuilder(pies);