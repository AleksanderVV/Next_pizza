export const categories = [
    { name: 'Pizza' },
    { name: 'Combo' },
    { name: 'Appetizers' },
    { name: 'Burgers' },
    { name: 'Alcohol' },
    { name: 'Drinks' },
    { name: 'Desserts' },
]

export const ingredients = [
    {
        name: 'Cheese border',
        price: 179,
        imageUrl:
          'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
    },
    {
        name: 'Creamy mozzarella',
        price: 79,
        imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
    },
    {
        name: 'Cheddar and Parmesan cheeses',
        price: 79,
        imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
    },
    {
        name: 'Hot Jalapeno Pepper',
        price: 59,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
    },
    {
        name: 'Tender Chicken',
        price: 79,
        imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
    },
    {
        name: 'Champignons',
        price: 59,
        imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
    },
    {
        name: 'Bacon',
        price: 79,
        imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F',
    },
    {
        name: 'Ham',
        price: 79,
        imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
    },
    {
        name: 'Spicy pepperoni',
        price: 79,
        imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
    },
    {
        name: 'Spicy Chorizo',
        price: 79,
        imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
    },
    {
        name: 'Pickled cucumbers',
        price: 59,
        imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
    },
    {
        name: 'Fresh tomatoes',
        price: 59,
        imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
    },
    {
        name: 'Red onion',
        price: 59,
        imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
    },
    {
        name: 'Juicy pineapples',
        price: 59,
        imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
    },
    {
        name: 'Italian herbs',
        price: 39,
        imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
    },
    {
        name: 'Sweet pepper',
        price: 59,
        imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
    },
    {
        name: 'Cubes of feta cheese',
        price: 79,
        imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
    },
    {
        name: 'Meatballs',
        price: 79,
        imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
    },
]


export const products = [
    {   name: 'Bella Stracciatella',
        imageUrl:
            'https://adminbm.kharkiv.ua/uploads/DSC_09573_05b9f4a940.webp',
        categoryId: 1,
        ingredients: {
            connect: [{id: 1}, {id: 2}, {id: 3}]   
        }
    },
    {
        name: 'Feta Pollo',
        imageUrl:
            'https://adminbm.kharkiv.ua/uploads/DSC_09556_7f4272c023.webp',
        categoryId: 1,
        ingredients: {
            connect: [{id: 2}, {id: 4}, {id: 5}, {id: 8}, {id: 10}]
        }
    },
    {
        name: 'Jalapeno Pepper',
        imageUrl:
            'https://adminbm.kharkiv.ua/uploads/DSC_09531_1dc1010755.webp',
        categoryId: 1,
        ingredients: {
            connect: [{id: 1}, {id: 3}, {id: 10}, {id: 11}, {id: 13}]
        }
    },
    {
        name: 'Fungo Miscela',
        imageUrl:
            'https://adminbm.kharkiv.ua/uploads/DSC_09520_33116f92a8.webp',
        categoryId: 1,
        ingredients: {
            connect: [{id: 3}, {id: 10}, {id: 14}, {id: 15}]
        }
    },
    {   name: '3 pizzas',
        imageUrl:
            'https://adminbm.kharkiv.ua/uploads/3_24_96a50c6408_5522128378.webp',
        categoryId: 2},
    {
        name: '2 Burgers Combo',
        imageUrl:
            'https://adminbm.kharkiv.ua/uploads/burger_combo_94e9ea8337.webp',
        categoryId: 2},
    {
        name: '3 Burgers Combo',
        imageUrl:
            'https://adminbm.kharkiv.ua/uploads/burger_3_combo_9ea22b67d3.webp',
        categoryId: 2},
    {
        name: '2 Burritos Combo',
        imageUrl:
            'https://adminbm.kharkiv.ua/uploads/burrito_2_combo_fa50679924.webp',
        categoryId: 2},
    {   name: 'Pizzoni with brisket and cheddar',
        imageUrl:
            'https://adminbm.kharkiv.ua/uploads/DSC_07786_3986956f4f.webp',
        categoryId: 3},
    {
        name: 'Chicken wings fries',
        imageUrl:
            'https://adminbm.kharkiv.ua/uploads/DSC_09830_4effeeb542.webp',
        categoryId: 3},
    {
        name: 'French fries',
        imageUrl:
            'https://adminbm.kharkiv.ua/uploads/Kartofel_fri_b871054993.webp',
        categoryId: 3},
    {
        name: 'Potato croquettes with ham',
        imageUrl:
            'https://adminbm.kharkiv.ua/uploads/DSC_09832_16c71354df.webp',
        categoryId: 3},
    {   name: 'Pollo Burger',
        imageUrl:
            'https://adminbm.kharkiv.ua/uploads/DSC_07855_50a520b0c2.webp',
        categoryId: 4},
    {
        name: 'Burger with bacon and Jack Daniels sauce',
        imageUrl:
            'https://adminbm.kharkiv.ua/uploads/Burger_z_yalovichinoyu_ta_sousom_Dzhek_18c89cda4a.webp',
        categoryId: 4},
    {
        name: 'Double burger with fries and jalapeno',
        imageUrl:
            'https://adminbm.kharkiv.ua/uploads/Dablburger_z_czibuleyu_fri_887e6248b5.webp',
        categoryId: 4},
    {
        name: 'BBQ burger with mustard and gherkins',
        imageUrl:
            'https://adminbm.kharkiv.ua/uploads/DSC_00803_74531d9339.webp',
        categoryId: 4},
    {   name: "Jack Daniel's whiskey",
        imageUrl:
            'https://adminbm.kharkiv.ua/uploads/jackdaniels_14e69a54f7.webp',
        categoryId: 5},
    {
        name: 'Finlandia Vodka',
        imageUrl:
            'https://adminbm.kharkiv.ua/uploads/finlandia_a4932d34a5.webp',
        categoryId: 5},
    {
        name: 'Decordi Rosso Secco wine',
        imageUrl:
            'https://adminbm.kharkiv.ua/uploads/Vino_Decordi_Rosso_Secco_7a07da8a8e.webp',
        categoryId: 5},
    {
        name: 'Corona Extra beer',
        imageUrl:
            'https://adminbm.kharkiv.ua/uploads/pivo_corona_extra_svetloe_fcc793bf8c.webp',
        categoryId: 5},
    {   name: 'Coca-Cola',
        imageUrl:
            'https://adminbm.kharkiv.ua/uploads/Kola_c4b31b6356.webp',
        categoryId: 6},
    {
        name: 'Fanta',
        imageUrl:
            'https://adminbm.kharkiv.ua/uploads/Fanta_1l_9237a9615f.webp',
        categoryId: 6},
    {
        name: 'Sprite',
        imageUrl:
            'https://adminbm.kharkiv.ua/uploads/Sprajt_1l_115c63ec3e.webp',
        categoryId: 6},
    {
        name: 'Sandora juice 0.95 l in assortment',
        imageUrl:
            'https://adminbm.kharkiv.ua/uploads/sok_apelsin_6e99dfcaee.webp',
        categoryId: 6},
    {   name: 'Napoleon with cherry',
        imageUrl:
            'https://adminbm.kharkiv.ua/uploads/DSC_05911_1_ffebd8b63f.webp',
        categoryId: 7},
    {
        name: 'Oreo brownie',
        imageUrl:
            'https://adminbm.kharkiv.ua/uploads/DSC_05913_2_8886dc93b4.webp',
        categoryId: 7},
    {
        name: 'Cheesecake Snickers',
        imageUrl:
            'https://adminbm.kharkiv.ua/uploads/DSC_09849_c827f7a483.webp',
        categoryId: 7},
    {
        name: 'Dubai cheesecake',
        imageUrl:
            'https://adminbm.kharkiv.ua/uploads/DSC_07815_8f937ff9f0.webp',
        categoryId: 7},
]