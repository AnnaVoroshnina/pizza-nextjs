'use client'
import {FC} from "react";
import {CheckboxFiltersGroup, RangeSlider, Title} from "@/shared/components/shared/index";
import {Input} from "@/shared/components/ui";
import {useFilters, useIngredients, useQueryFilters} from "../../hooks";

interface Props {
    className?: string;
}

export const Filters: FC<Props> = ({className}) => {
    const {ingredients, loading}=useIngredients()
    const filters = useFilters()
    useQueryFilters(filters)

    const items = ingredients.map (item => ({text: item.name, value: String(item.id)}))
    const updatePrices = (prices: number[]) => {
        filters.setPrice('priceFrom', prices[0])
        filters.setPrice('priceTo', prices[1])
    }

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
                onClickCheckbox={filters.setPizzaTypes}
                selectedValues={filters.pizzaTypes}
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
                onClickCheckbox={filters.setSizes}
                selectedValues={filters.sizes}
            />
            {/*Фильтр цен*/}
            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className='font-bold mb-3'>Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input
                        type='number'
                        placeholder='0'
                        min={0} max={1500}
                        value={String(filters.price.priceFrom)}
                        onChange={(e) => filters.setPrice('priceFrom', Number(e.target.value))}
                    />
                    <Input
                        type='number'
                        placeholder='1000'
                        min={100} max={1500}
                        value={String(filters.price.priceTo)}
                        onChange={(e) => filters.setPrice('priceTo', Number(e.target.value))}
                    />
                </div>
                <RangeSlider
                    min={0} max={1500} step={10}
                    value={[filters.price.priceFrom || 0, filters.price.priceTo || 1500]}
                    onValueChange={updatePrices}
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
                onClickCheckbox={filters.setSelectedIngredients}
                selectedValues={filters.selectedIngredients}
            />
        </div>
    )
}