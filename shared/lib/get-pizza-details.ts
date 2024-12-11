import {mapPizzaType, PizzaSize, PizzaType} from "@/shared/constants/pizza";
import {calcTotalPizzaPrice} from "@/shared/lib/calc-total-pizza-price";
import {Ingredient, ProductItem} from "@prisma/client";

export const getPizzaDetails = (
    items: ProductItem[],
    size: PizzaSize,
    type: PizzaType,
    ingredients: Ingredient[],
    selectedIngredients: Set<number>
) => {
    const textDetails = `${size} см, ${mapPizzaType[type].toLowerCase()} тесто`
    const totalPrice = calcTotalPizzaPrice(items, size, type, ingredients, selectedIngredients)
    return {textDetails, totalPrice}
}