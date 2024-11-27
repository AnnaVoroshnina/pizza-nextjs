'use client'
import {FC, useState} from "react";
import {CheckboxFiltersGroup, RangeSlider, Title} from "@/components/shared";
import {FilterCheckbox} from "@/components/shared";
import {Input} from "@/components/ui";
import {useFilterIngredients} from "@/hooks/useFilterIngredients";
import {useSet} from "react-use";

interface Props {
    className?: string;
}
interface PriceProps{
    priceFrom: number,
    priceTo: number,
}

export const Filters: FC<Props> = ({className}) => {
    const {ingredients, loading, selectedIngredients, onAddId} =useFilterIngredients()
    const [price, setPrice] = useState<PriceProps>({priceFrom: 0, priceTo: 1500})

    const [sizes, {toggle: toggleSizes}] = useSet(new Set<string>([]))
    const [pizzaTypes, {toggle: togglePizzaTypes}] = useSet(new Set<string>([]))


    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrice({
            ...price,
            [name]:value}
        )
    }

    const items = ingredients.map (item => ({text: item.name, value: String(item.id)}))
    return (
        <div className={className}>
            <Title text='Фильтрация' size='sm' className='mb-5 font-bold text-green-800'/>
            {/*Верхние чекбоксы*/}
            <CheckboxFiltersGroup
                title='Тип теста'
                name="pizzaTypes"
                className='mb-5'
                items={[
                    {text: 'Тонкое', value: '1'},
                    {text: 'Толстое', value: '2'},
                ]}
                onClickCheckbox={togglePizzaTypes}
                selectedValues={pizzaTypes}
            />
            <CheckboxFiltersGroup
                title='Размеры'
                name="sizes"
                className='mb-5'
                items={[
                    {text: '25см', value: '25'},
                    {text: '30см', value: '30'},
                    {text: '35см', value: '35'},
                ]}
                onClickCheckbox={toggleSizes}
                selectedValues={sizes}
            />
            {/*Фильтр цен*/}
            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className='font-bold mb-3'>Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input
                        type='number'
                        placeholder='0'
                        min={0} max={1500}
                        value={String(price.priceFrom)}
                        onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}
                    />
                    <Input
                        type='number'
                        placeholder='1000'
                        min={100} max={1500}
                        value={String(price.priceTo)}
                        onChange={(e) => updatePrice('priceTo', Number(e.target.value))}
                    />
                </div>
                <RangeSlider
                    min={0} max={1500} step={10}
                    value={[price.priceFrom, price.priceTo]}
                    onValueChange={([priceFrom, priceTo]) => setPrice({priceFrom, priceTo})}
                />
            </div>
            {/*Фильтр ингредиентов*/}
            <CheckboxFiltersGroup
                title='Ингредиенты'
                name="ingredients"
                className='mt-5'
                limit={6}
                defaultItems={items.slice(0, 6)}
                items={items}
                loading={loading}
                onClickCheckbox={onAddId}
                selectedValues={selectedIngredients}
            />
        </div>
    )
}