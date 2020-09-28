function solve(meal_cost, tip_percent, tax_percent) {
    var totalCost = 0;
    var tip = meal_cost * tip_percent / 100;
    var tax = meal_cost * tax_percent / 100;

    totalCost = meal_cost + tip + tax;
    console.log(totalCost.toFixed(0));
}