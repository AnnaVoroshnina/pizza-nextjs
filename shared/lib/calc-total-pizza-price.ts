import {Ingredient, ProductItem} from "@prisma/client";
import {PizzaSize, PizzaType} from "@/shared/constants/pizza";

/**
 * Функция для подсчета общей стоимости пиццы
 *
 * @params items - список вариаций
 * @params size - размер выбранной пиццы
 * @params type - тип выбранного теста
 * @params ingredients - список ингредиентов
 * @params selectedIngredients - выбранные ингредиенты
 *
 * @returns number общая стоимость
 */

export const calcTotalPizzaPrice = (
    items: ProductItem[],
    size: PizzaSize,
    type: PizzaType,
    ingredients: Ingredient[],
    selectedIngredients: Set<number>
) => {
    const pizzaPrice = items.find(
        item => (item.size === size && item.pizzaType === type)
    )?.price || 0
    const totalIngredientsPrice = ingredients
        .filter(ingredient => selectedIngredients.has(ingredient.id))
        .reduce((acc, ingredient) => acc + ingredient.price, 0)
    return pizzaPrice + totalIngredientsPrice
}