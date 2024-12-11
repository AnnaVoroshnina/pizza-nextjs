import {Variant} from "@/shared/components/shared/group-variants";
import {PizzaSize} from "@/shared/constants/pizza";

export const getAvailableSize = (availablePizzaSizes: Variant[], size: PizzaSize) => {
    const isAvailableSize = availablePizzaSizes?.find(item => Number(item.value) === size && !item.disabled)
    const availableSize = availablePizzaSizes?.find(item => !item.disabled)
    return {isAvailableSize, availableSize}
}