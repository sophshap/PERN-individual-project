const users = [
    {
        first_name: "john",
        last_name: "smith",
        username: "user123",
        password: "password",
        email: "email@email.com"
    }
]

const recipes = [
    {
        name: "Margarita",
        type: "cocktail",
        recipe_yield: 1,
        description: "A classic tequila-based cocktail with the perfect balance of lime and orange flavors.",
        image_URL: "https://images.pexels.com/photos/4051355/pexels-photo-4051355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        name: "Virgin Mojito",
        type: "mocktail",
        recipe_yield: 1,
        description: "A refreshing non-alcoholic version of the popular mint and lime drink, perfect for a sober twist.",
        image_URL: "https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        name: "Old Fashioned",
        type: "cocktail",
        recipe_yield: 1,
        description: "A timeless bourbon cocktail, muddled with sugar and bitters, garnished with an orange twist.",
        image_URL: "https://images.pexels.com/photos/19252758/pexels-photo-19252758/free-photo-of-whiskey-with-ice-cubes-and-orange-peel-in-lowball-glass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        name: "Piña Colada",x
        type: "cocktail",
        recipe_yield: 2,
        description: "A tropical delight blending coconut cream, pineapple juice, and rum, served over ice.",
        image_URL: "https://www.thespruceeats.com/thmb/LI3MXdfPpSL1UbOrcMOXek0u49o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/frozen-pina-colada-recipe-759297-Hero-1-c53f5c55f6b14b3e8fea901076e4b130.jpg"
    },
    {
        name: "Berry Sparkler",
        type: "mocktail",
        recipe_yield: 4,
        description: "A fruity and fizzy non-alcoholic drink featuring mixed berries and sparkling water.",
        image_URL: "https://hips.hearstapps.com/hmg-prod/images/triple-berry-sparklers-1647984999.jpg?crop=1.00xw:0.718xh;0,0.216xh&resize=1200:*"
    },
    {
        name: "Negroni",
        type: "cocktail",
        recipe_yield: 1,
        description: "A bold and bitter cocktail made with gin, vermouth, and Campari, garnished with an orange slice.",
        image_URL: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        name: "Cucumber Mint Cooler",
        type: "mocktail",
        recipe_yield: 2,
        description: "A cooling mocktail with cucumber, mint, and lime, perfect for a refreshing sip on a hot day.",
        image_URL: "https://www.rotinrice.com/wp-content/uploads/2015/08/IMG_6549.jpg"
    },
    {
        name: "Whiskey Sour",
        type: "cocktail",
        recipe_yield: 1,
        description: "A classic sour cocktail featuring whiskey, lemon juice, and a touch of simple syrup.",
        image_URL: "https://images.pexels.com/photos/6542662/pexels-photo-6542662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        name: "Shirley Temple",
        type: "mocktail",
        recipe_yield: 1,
        description: "A sweet and bubbly non-alcoholic drink made with ginger ale, grenadine, and a maraschino cherry garnish.",
        image_URL: " https://bellyfull.net/wp-content/uploads/2020/12/Shirley-Temple-Drink-blog.jpg"
    },
    {
        name: "Espresso Martini",
        type: "cocktail",
        recipe_yield: 1,
        description: "A sophisticated cocktail blending vodka, coffee liqueur, and freshly brewed espresso for a caffeinated kick.",
        image_URL: "https://hips.hearstapps.com/hmg-prod/images/210923-delish-seo-espresso-martini-horizontal-0087-eb-1633535263.jpg?crop=0.8893229166666666xw:1xh;center,top&resize=1200:*"
    }
];


const ingredients = [
    { recipe_id: 1, name: "tequila", amount: "2 oz" },
    { recipe_id: 1, name: "lime juice", amount: "1 oz" },
    { recipe_id: 1, name: "orange liqueur", amount: "1 oz" },
    { recipe_id: 2, name: "mint leaves", amount: "8 leaves" },
    { recipe_id: 2, name: "lime juice", amount: "1 oz" },
    { recipe_id: 2, name: "simple syrup", amount: "1/2 oz" },
    { recipe_id: 3, name: "bourbon", amount: "2 oz" },
    { recipe_id: 3, name: "sugar cube", amount: "1" },
    { recipe_id: 3, name: "angostura bitters", amount: "3 dashes" },
    { recipe_id: 4, name: "coconut cream", amount: "2 oz" },
    { recipe_id: 4, name: "pineapple juice", amount: "2 oz" },
    { recipe_id: 4, name: "white rum", amount: "1 oz" },
    { recipe_id: 5, name: "mixed berries", amount: "1 cup" },
    { recipe_id: 5, name: "sparkling water", amount: "1 cup" },
    { recipe_id: 6, name: "gin", amount: "1 oz" },
    { recipe_id: 6, name: "vermouth", amount: "1 oz" },
    { recipe_id: 6, name: "Campari", amount: "1 oz" },
    { recipe_id: 7, name: "cucumber", amount: "4 slices" },
    { recipe_id: 7, name: "mint leaves", amount: "6 leaves" },
    { recipe_id: 7, name: "lime", amount: "1, juiced" },
    { recipe_id: 8, name: "whiskey", amount: "2 oz" },
    { recipe_id: 8, name: "lemon juice", amount: "3/4 oz" },
    { recipe_id: 8, name: "simple syrup", amount: "1/2 oz" },
    { recipe_id: 9, name: "ginger ale", amount: "1 cup" },
    { recipe_id: 9, name: "grenadine", amount: "1 oz" },
    { recipe_id: 9, name: "maraschino cherry", amount: "1" },
    { recipe_id: 10, name: "vodka", amount: "1 oz" },
    { recipe_id: 10, name: "coffee liqueur", amount: "1 oz" },
    { recipe_id: 10, name: "espresso", amount: "1 oz" },
];


const instructions = [
    { recipe_id: 1, description: "Combine tequila, lime juice, and orange liqueur in a shaker with ice.", step_number: 1 },
    { recipe_id: 1, description: "Shake well and strain into a salt-rimmed glass.", step_number: 2 },
    { recipe_id: 2, description: "Muddle mint leaves in a glass with lime juice and simple syrup.", step_number: 1 },
    { recipe_id: 2, description: "Fill the glass with ice and top with club soda.", step_number: 2 },
    { recipe_id: 3, description: "Muddle a sugar cube with a few dashes of angostura bitters in a glass.", step_number: 1 },
    { recipe_id: 3, description: "Add bourbon and ice, stir well, and garnish with an orange twist.", step_number: 2 },
    { recipe_id: 4, description: "Blend coconut cream, pineapple juice, and white rum with ice until smooth.", step_number: 1 },
    { recipe_id: 4, description: "Pour into a chilled glass and garnish with a pineapple wedge.", step_number: 2 },
    { recipe_id: 5, description: "Muddle mixed berries in a glass and top with sparkling water.", step_number: 1 },
    { recipe_id: 5, description: "Stir gently and serve over ice.", step_number: 2 },
    { recipe_id: 6, description: "Stir gin, vermouth, and Campari over ice and strain into a glass.", step_number: 1 },
    { recipe_id: 6, description: "Garnish with an orange slice.", step_number: 2 },
    { recipe_id: 7, description: "Muddle cucumber slices and mint leaves in a shaker.", step_number: 1 },
    { recipe_id: 7, description: "Add lime juice and shake well with ice.", step_number: 2 },
    { recipe_id: 8, description: "Shake whiskey, lemon juice, and simple syrup with ice and strain into a glass.", step_number: 1 },
    { recipe_id: 8, description: "Garnish with a lemon slice.", step_number: 2 },
    { recipe_id: 9, description: "Pour ginger ale and grenadine over ice in a glass and stir.", step_number: 1 },
    { recipe_id: 9, description: "Garnish with a maraschino cherry.", step_number: 2 },
    { recipe_id: 10, description: "Shake vodka, coffee liqueur, and espresso with ice and strain into a martini glass.", step_number: 1 },
    { recipe_id: 10, description: "Enjoy this caffeinated cocktail.", step_number: 2 },
];

module.exports = { users, recipes, ingredients, instructions }