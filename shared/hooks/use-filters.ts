import {useSearchParams} from "next/navigation";
import {useSet} from "react-use";
import {useState} from "react";

interface PriceProps{
    priceFrom?: number,
    priceTo?: number,
}

export interface QueryFilters extends PriceProps{
    pizzaTypes: string;
    sizes: string;
    ingredients: string
}

export interface Filters {
    sizes: Set<string>
    pizzaTypes: Set<string>;
    selectedIngredients: Set<string>;
    price: PriceProps
}

interface  ReturnProps extends Filters{
    setPrice: (name: keyof PriceProps, value: number) => void,
    setPizzaTypes: (key: string) => void,
    setSizes: (key: string) => void,
    setSelectedIngredients: (key: string) => void
}
export const useFilters = (): ReturnProps => {
    const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>

    //Фильтр ингредиентов
    const [selectedIngredients, {toggle: toggleIngredients}] = useSet(
        new Set<string>(searchParams.get('ingredients')?.split(','))
    );
    //Фильтр цены
    const [price, setPrice] = useState<PriceProps>({
        priceFrom: Number(searchParams.get('priceFrom')),
        priceTo: Number(searchParams.get('priceTo'))
    })
    //Фильтр размеров
    const [sizes, {toggle: toggleSizes}] = useSet(new Set<string>(
        searchParams.has('sizes') ? searchParams.get('sizes')?.split(',') : []
    ))
    //Фильтр типа тета пиццы
    const [pizzaTypes, {toggle: togglePizzaTypes}] = useSet(new Set<string>(
        searchParams.has('pizzaTypes') ? searchParams.get('pizzaTypes')?.split(',') : []
    ))
    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrice(prev => ({
            ...prev,
            [name]:value})
        )
    }
    return {sizes,
        pizzaTypes,
        selectedIngredients,
        price,
        setPrice: updatePrice,
        setPizzaTypes: togglePizzaTypes,
        setSizes: toggleSizes,
        setSelectedIngredients: toggleIngredients,

    }

}