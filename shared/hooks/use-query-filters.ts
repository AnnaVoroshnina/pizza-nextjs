import {useEffect} from "react";
import qs from "qs";
import {Filters} from "@/shared/hooks/use-filters";
import {useRouter} from "next/navigation";

export const useQueryFilters = (filters: Filters) => {
    const router = useRouter()
    useEffect(() => {
        const params = {
            ...filters.price,
            pizzaTypes: Array.from(filters.pizzaTypes),
            sizes: Array.from(filters.sizes),
            ingredients: Array.from(filters.selectedIngredients)
        }

        const queryString = qs.stringify(params, {
            arrayFormat: 'comma'
        })
        router.push(`?${queryString}`, {scroll: false})
    }, [filters, router]);
}