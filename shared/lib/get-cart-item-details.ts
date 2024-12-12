import {mapPizzaType, PizzaSize, PizzaType} from "@/shared/constants/pizza";
import {Ingredient} from "@prisma/client";

export const getCartItemDetails = (
    pizzaType: PizzaType,
    pizzaSize: PizzaSize,
    ingredients: Ingredient[],
) => {
    const details: string[] = []
    if (pizzaSize && pizzaType) {
        const typeName = mapPizzaType[pizzaType]
        details.push(`${typeName} тесто ${pizzaType} см`)
    }
    if (ingredients) {
        details.push(...ingredients.map(ingredient => ingredient.name))
    }
    return details.join(', ')
}