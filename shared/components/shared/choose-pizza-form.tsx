'use client'

import {FC, useEffect, useState} from "react";
import {cn} from "@/shared/lib/utils";
import {Button} from "@/shared/components/ui";
import {PizzaSize, PizzaType, pizzaTypes} from "@/shared/constants/pizza";
import {Ingredient, ProductItem} from "@prisma/client";
import {PizzaImage} from "@/shared/components/shared/pizza-image";
import {Title} from "@/shared/components/shared/title";
import {GroupVariants} from "@/shared/components/shared/group-variants";
import {IngredientItem} from "@/shared/components/shared/ingredient-item";
import {useSet} from "react-use";
import {getAvailablePizzaSizes, getPizzaDetails} from "@/shared/lib";
import {getAvailableSize} from "@/shared/lib/get-available-size";

interface Props {
    className?: string;
    imageUrl: string;
    name: string;
    ingredients: Ingredient[];
    items: ProductItem[];
    onClickAddCart?: VoidFunction;
}

export const ChoosePizzaForm: FC<Props> = ({imageUrl, name, ingredients, items, onClickAddCart, className}) => {
    const [size, setSize] = useState<PizzaSize>(25)
    const [type, setType] = useState<PizzaType>(1)
    const [selectedIngredients, {toggle: addIngredient}] = useSet(new Set<number>([]))

    const {textDetails, totalPrice} = getPizzaDetails(items, size, type, ingredients, selectedIngredients)
    const availablePizzaSizes = getAvailablePizzaSizes(items, type)

    const handleCLickAdd = () => {
        onClickAddCart?.()
    }

    useEffect(() => {
        const {isAvailableSize, availableSize} = getAvailableSize(availablePizzaSizes, size)
        if (availableSize && !isAvailableSize) {
            setSize(Number(availableSize.value) as PizzaSize)
        }
    }, [type])

    return (
        <div className={cn(className, 'flex flex-1')}>
            <PizzaImage imageUrl={imageUrl} size={size}/>
            <div className="w-[490px] bg-gray-100 p-7">
                <Title text={name} size="md" className="font-extrabold mb-1"/>
                <p className="text-gray-400">{textDetails}</p>
                <div className='flex flex-col gap-5 mt-5'>
                    <GroupVariants
                        value={String(size)}
                        onClick={value => setSize(Number(value) as PizzaSize)}
                        items={availablePizzaSizes}
                    />
                    <GroupVariants
                        value={String(type)}
                        onClick={value => setType(Number(value) as PizzaType)}
                        items={pizzaTypes}
                    />
                </div>
                <div className="mt-10bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5">
                    <div className='grid grid-cols-3 gap-3'>
                        {ingredients.map(({id, imageUrl, name, price}) => (
                            <IngredientItem
                                key={id}
                                name={name}
                                imageUrl={imageUrl}
                                price={price}
                                onClick={() => addIngredient(id)}
                                active={selectedIngredients.has(id)}/>
                        ))}
                    </div>
                </div>
                <Button
                    onClick={handleCLickAdd}
                    className={"h-[55px] px-10 text-base rounded-[18px] w-full mt-10"}>
                    Добавить в корзину за {totalPrice} руб.
                </Button>
            </div>
        </div>
    )
}