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
        image_url: "https://images.pexels.com/photos/4051355/pexels-photo-4051355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        name: "Virgin Mojito",
        type: "mocktail",
        recipe_yield: 1,
        description: "A refreshing non-alcoholic version of the popular mint and lime drink, perfect for a sober twist.",
        image_url: "https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        name: "Old Fashioned",
        type: "cocktail",
        recipe_yield: 1,
        description: "A timeless bourbon cocktail, muddled with sugar and bitters, garnished with an orange twist.",
        image_url: "https://images.pexels.com/photos/19252758/pexels-photo-19252758/free-photo-of-whiskey-with-ice-cubes-and-orange-peel-in-lowball-glass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        name: "Piña Colada",
        type: "cocktail",
        recipe_yield: 2,
        description: "A tropical delight blending coconut cream, pineapple juice, and rum, served over ice.",
        image_url: "https://www.thespruceeats.com/thmb/LI3MXdfPpSL1UbOrcMOXek0u49o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/frozen-pina-colada-recipe-759297-Hero-1-c53f5c55f6b14b3e8fea901076e4b130.jpg"
    },
    {
        name: "Berry Sparkler",
        type: "mocktail",
        recipe_yield: 4,
        description: "A fruity and fizzy non-alcoholic drink featuring mixed berries and sparkling water.",
        image_url: "https://hips.hearstapps.com/hmg-prod/images/triple-berry-sparklers-1647984999.jpg?crop=1.00xw:0.718xh;0,0.216xh&resize=1200:*"
    },
    {
        name: "Negroni",
        type: "cocktail",
        recipe_yield: 1,
        description: "A bold and bitter cocktail made with gin, vermouth, and Campari, garnished with an orange slice.",
        image_url: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        name: "Cucumber Mint Cooler",
        type: "mocktail",
        recipe_yield: 2,
        description: "A cooling mocktail with club soda, cucumber, mint, and lime, perfect for a refreshing sip on a hot day.",
        image_url: "https://www.rotinrice.com/wp-content/uploads/2015/08/IMG_6549.jpg"
    },
    {
        name: "Whiskey Sour",
        type: "cocktail",
        recipe_yield: 1,
        description: "A classic sour cocktail featuring whiskey, lemon juice, and a touch of simple syrup.",
        image_url: "https://images.pexels.com/photos/6542662/pexels-photo-6542662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        name: "Shirley Temple",
        type: "mocktail",
        recipe_yield: 1,
        description: "A sweet and bubbly non-alcoholic drink made with ginger ale, grenadine, and a maraschino cherry garnish.",
        image_url: "https://www.recipeboy.com/wp-content/uploads/2011/05/Shirley-Temple-1-1.jpg"
    },
    {
        name: "Espresso Martini",
        type: "cocktail",
        recipe_yield: 1,
        description: "A sophisticated cocktail blending vodka, coffee liqueur, and freshly brewed espresso for a caffeinated kick.",
        image_url: "https://hips.hearstapps.com/hmg-prod/images/210923-delish-seo-espresso-martini-horizontal-0087-eb-1633535263.jpg?crop=0.8893229166666666xw:1xh;center,top&resize=1200:*"
    },
    {
        name: "French 77",
        type: "cocktail",
        recipe_yield: 1,
        description: "A French twist on the classic Champagne cocktail, combining gin, elderflower liqueur, and sparkling wine.",
        image_url: "https://www.acouplecooks.com/wp-content/uploads/2021/11/French-77-003s.jpg"
    },
    {
        name: "Manhattan",
        type: "cocktail",
        recipe_yield: 1,
        description: "An elegant whiskey cocktail made with sweet vermouth and bitters, garnished with a cherry.",
        image_url: "https://www.liquor.com/thmb/DR2UAsRlu-YCVn9r_iLJCmOvzlg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/manhattan-4000x4000-primary-ig-9c3d894510284e9d8fbd9c518d00790b.jpg"
    },
    {
        name: "Sex on the Beach",
        type: "cocktail",
        recipe_yield: 1,
        description: "A fruity and tropical cocktail with vodka, peach schnapps, cranberry juice, and orange juice.",
        image_url: "https://www.allrecipes.com/thmb/jgUBewi7-dIrLBAgMi6meC7s_zw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/24221-Sex-On-The-Beach-DDMFS-4x3-cd29644eb4e34a63a362584a342b4a30.jpg"
    },
    {
        name: "Paloma",
        type: "cocktail",
        recipe_yield: 1,
        description: "A refreshing tequila-based cocktail with grapefruit soda, lime juice, and a pinch of salt.",
        image_url: "https://assets.bonappetit.com/photos/62cdd8cedc3e934b224d8fb5/4:3/w_2132,h_1599,c_limit/0712-paloma-lede.jpg"
    },
    {
        name: "Cosmopolitan",
        type: "cocktail",
        recipe_yield: 1,
        description: "A classic vodka cocktail featuring cranberry juice, triple sec, and a splash of lime juice.",
        image_url: "https://assets.bonappetit.com/photos/650df690c94ec4218673b45a/1:1/w_2560%2Cc_limit/20230915-WEB-SEO-0882_update%2520copy.jpg"
    },
    {
        name: "Bloody Mary",
        type: "cocktail",
        recipe_yield: 1,
        description: "A savory and spicy cocktail made with vodka, tomato juice, Worcestershire sauce, and hot sauce.",
        image_url: "https://static01.nyt.com/images/2020/05/17/magazine/17mag-eat/17mag-eat-superJumbo.jpg"
    },
    {
        name: "Aperol Spritz",
        type: "cocktail",
        recipe_yield: 1,
        description: "A light and refreshing Italian cocktail with Aperol, Prosecco, and a splash of soda water.",
        image_url: "https://www.liquor.com/thmb/1ZharnCZtEmyUkKfEm8dh07MV8g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/aperol-spritz-720x720-primary-985457b239d7427da2f8b4be17131caa.jpg"
    },
    {
        name: "Sidecar",
        type: "cocktail",
        recipe_yield: 1,
        description: "A classic brandy cocktail with Cointreau and lemon juice, served in a sugar-rimmed glass.",
        image_url: "https://img.delicious.com.au/rj9SGmTq/del/2020/12/sidecar-143900-1.jpg"
    },
    {
        name: "Lychee Martini",
        type: "cocktail",
        recipe_yield: 1,
        description: "A sweet and floral martini featuring lychee liqueur, vodka, and a splash of vermouth.",
        image_url: "https://www.wokandskillet.com/wp-content/uploads/2017/06/rsz_lychee_martini-9.jpg.webp"
    },
    {
        name: "Sangria",
        type: "cocktail",
        recipe_yield: 1,
        description: "A fruity and wine-based punch with mixed fruits, brandy, and a hint of sweetness.",
        image_url: "https://www.allrecipes.com/thmb/MDmejvMxqPCS5EXNzxx6atFgwnA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/222520sangria-cocktaillutzflcat4x3-a49b63c5dde34c1281dacfc0a2b8c934.jpg"
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
    { recipe_id: 7, name: "club soda", amount: "2oz" },
    { recipe_id: 8, name: "whiskey", amount: "2 oz" },
    { recipe_id: 8, name: "lemon juice", amount: "3/4 oz" },
    { recipe_id: 8, name: "simple syrup", amount: "1/2 oz" },
    { recipe_id: 9, name: "ginger ale", amount: "1 cup" },
    { recipe_id: 9, name: "grenadine", amount: "1 oz" },
    { recipe_id: 9, name: "maraschino cherry", amount: "1" },
    { recipe_id: 10, name: "vodka", amount: "1 oz" },
    { recipe_id: 10, name: "coffee liqueur", amount: "1 oz" },
    { recipe_id: 10, name: "espresso", amount: "1 oz" },
    { recipe_id: 11, name: "gin", amount: "1 oz" },
    { recipe_id: 11, name: "elderflower liqueur", amount: "1/2 oz" },
    { recipe_id: 11, name: "sparkling wine", amount: "2 oz" },
    { recipe_id: 12, name: "bourbon", amount: "2 oz" },
    { recipe_id: 12, name: "sweet vermouth", amount: "1 oz" },
    { recipe_id: 12, name: "bitters", amount: "2 dashes" },
    { recipe_id: 13, name: "vodka", amount: "1 oz" },
    { recipe_id: 13, name: "peach schnapps", amount: "1/2 oz" },
    { recipe_id: 13, name: "cranberry juice", amount: "2 oz" },
    { recipe_id: 13, name: "orange juice", amount: "1 oz" },
    { recipe_id: 14, name: "tequila", amount: "2 oz" },
    { recipe_id: 14, name: "grapefruit soda", amount: "4 oz" },
    { recipe_id: 14, name: "lime juice", amount: "1 oz" },
    { recipe_id: 15, name: "vodka", amount: "1 oz" },
    { recipe_id: 15, name: "cranberry juice", amount: "1 oz" },
    { recipe_id: 15, name: "triple sec", amount: "1/2 oz" },
    { recipe_id: 15, name: "lime juice", amount: "1/2 oz" },
    { recipe_id: 16, name: "vodka", amount: "2 oz" },
    { recipe_id: 16, name: "tomato juice", amount: "4 oz" },
    { recipe_id: 16, name: "Worcestershire sauce", amount: "1 dash" },
    { recipe_id: 16, name: "hot sauce", amount: "1 dash" },
    { recipe_id: 17, name: "Aperol", amount: "2 oz" },
    { recipe_id: 17, name: "Prosecco", amount: "3 oz" },
    { recipe_id: 17, name: "soda water", amount: "1 oz" },
    { recipe_id: 18, name: "brandy", amount: "2 oz" },
    { recipe_id: 18, name: "Cointreau", amount: "1 oz" },
    { recipe_id: 18, name: "lemon juice", amount: "1 oz" },
    { recipe_id: 19, name: "lychee liqueur", amount: "2 oz" },
    { recipe_id: 19, name: "vodka", amount: "1 oz" },
    { recipe_id: 19, name: "vermouth", amount: "1/2 oz" },
    { recipe_id: 20, name: "red wine", amount: "750 ml" },
    { recipe_id: 20, name: "orange juice", amount: "1 cup" },
    { recipe_id: 20, name: "brandy", amount: "1/2 cup" },
    { recipe_id: 20, name: "mixed fruits", amount: "2 cups" }
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
    { recipe_id: 7, description: "Add lime juice and club soda and shake well with ice.", step_number: 2 },
    { recipe_id: 8, description: "Shake whiskey, lemon juice, and simple syrup with ice and strain into a glass.", step_number: 1 },
    { recipe_id: 8, description: "Garnish with a lemon slice.", step_number: 2 },
    { recipe_id: 9, description: "Pour ginger ale and grenadine over ice in a glass and stir.", step_number: 1 },
    { recipe_id: 9, description: "Garnish with a maraschino cherry.", step_number: 2 },
    { recipe_id: 10, description: "Shake vodka, coffee liqueur, and espresso with ice and strain into a martini glass.", step_number: 1 },
    { recipe_id: 10, description: "Enjoy this caffeinated cocktail.", step_number: 2 },
    { recipe_id: 11, description: "Combine gin and elderflower liqueur in a shaker with ice.", step_number: 1 },
    { recipe_id: 11, description: "Shake well and strain into a Champagne flute. Top with sparkling wine.", step_number: 2 },
    { recipe_id: 12, description: "Stir bourbon, sweet vermouth, and bitters with ice. Strain into a chilled glass.", step_number: 1 },
    { recipe_id: 12, description: "Garnish with a cherry.", step_number: 2 },
    { recipe_id: 13, description: "Combine vodka, peach schnapps, cranberry juice, and orange juice in a shaker with ice.", step_number: 1 },
    { recipe_id: 13, description: "Shake well and strain into a highball glass filled with ice.", step_number: 2 },
    { recipe_id: 14, description: "Combine tequila, grapefruit soda, and lime juice in a shaker with ice.", step_number: 1 },
    { recipe_id: 14, description: "Shake well and strain into a salt-rimmed glass filled with ice.", step_number: 2 },
    { recipe_id: 15, description: "Shake vodka, cranberry juice, triple sec, and lime juice in a shaker with ice.", step_number: 1 },
    { recipe_id: 15, description: "Strain into a chilled martini glass.", step_number: 2 },
    { recipe_id: 16, description: "In a shaker, mix vodka, tomato juice, Worcestershire sauce, and hot sauce with ice.", step_number: 1 },
    { recipe_id: 16, description: "Strain into a glass filled with ice. Garnish with celery and a lemon wedge.", step_number: 2 },
    { recipe_id: 17, description: "Fill a wine glass with ice. Add Aperol, Prosecco, and soda water. Stir gently.", step_number: 1 },
    { recipe_id: 17, description: "Garnish with an orange slice.", step_number: 2 },
    { recipe_id: 18, description: "Shake brandy, Cointreau, and lemon juice in a shaker with ice. Strain into a sugar-rimmed glass.", step_number: 1 },
    { recipe_id: 18, description: "Garnish with a lemon twist.", step_number: 2 },
    { recipe_id: 19, description: "Shake lychee liqueur, vodka, and vermouth in a shaker with ice. Strain into a chilled martini glass.", step_number: 1 },
    { recipe_id: 19, description: "Garnish with a lychee fruit.", step_number: 2 },
    { recipe_id: 20, description: "In a pitcher, combine red wine, orange juice, brandy, and mixed fruits. Stir well.", step_number: 1 },
    { recipe_id: 20, description: "Refrigerate for at least 2 hours before serving.", step_number: 2 }
];

module.exports = { users, recipes, ingredients, instructions }