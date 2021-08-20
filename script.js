let pizza = {

    "type": ["deep dish", "traditional", "hand tossed"],
    "sauces": ["marinara", "pesto"],
    "cheese": ["mozzarella", "cheddar", "parmasan", "provolone", "feta"],
    "proteins": ["pepperoni", "sausage", "ham", "salami", "pastrami", "chicken", "steak", "artichoke"],
    "vegetables": ["olives", "onions", "mushrooms", "spinach", "arugala"],
    
}
console.log(pizza);

function pizzaOven(type, sauces, cheese, proteins, vegetables){

    let pizza = {};

        pizza.type = type;
        pizza.sauces = sauces;
        pizza.cheese = cheese;
        pizza.proteins = proteins;
        pizza.vegetables = vegetables;
        return pizza;
}

let pizza1 = pizzaOven(["deep dish", "traditional"],"none", "mozzarella",["pepperoni","sausage"], "none");
console.log(pizza1);

let pizza2 = pizzaOven("hand tossed", "marinara", ["mozarella", "feta"], "none" ,["mushrooms", "olives", "onions"]);
console.log(pizza2);

/* ------- Additional Pizzas -------- */

let pizza3 = pizzaOven("hand tossed", "pesto", "mozzarella", ["pepperoni","sausauge","ham"],["mushrooms", "spinach"]);
console.log(pizza3);

let pizza4 = pizzaOven("deep dish", "marinara", "cheddar",["pepperoni","sausauge","ham", "artichoke", "steak", "chicken"], "mushrooms");
console.log(pizza4);

