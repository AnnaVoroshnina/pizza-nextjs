import {FC} from "react";
import {CheckboxFiltersGroup, RangeSlider, Title} from "@/components/shared";
import {FilterCheckbox} from "@/components/shared";
import {Input} from "@/components/ui";

interface Props {
    className?: string;
}

export const Filters: FC<Props> = ({className}) => {
    return (
        <div className={className}>
            <Title text='Фильтрация' size='sm' className='mb-5 font-bold text-green-800'/>
            {/*Верхние чекбоксы*/}
            <div className="flex flex-col gap-4">
                <FilterCheckbox text='Можно собирать' value='1'/>
                <FilterCheckbox text='Новинки' value='2'/>
            </div>
            {/*Фильтр цен*/}
            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className='font-bold mb-3'>Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input type='number' placeholder='0' min={0} max={1500} defaultValue={0}/>
                    <Input type='number' placeholder='1000' min={100} max={1500} defaultValue={1500}/>
                </div>
                <RangeSlider min={0} max={1500} step={10} value={[0, 1500]}/>
            </div>
            {/*Фильтр ингредиентов*/}
            <CheckboxFiltersGroup
                title='Ингредиенты'
                className='mt-5'
                limit={6}
                defaultItems={[
                    {
                        text: 'Сырный соус',
                        value: '1'
                    },
                    {
                        text: 'Моцарелла',
                        value: '2'
                    },
                    {
                        text: 'Чеснок',
                        value: '3'
                    },
                    {
                        text: 'Соленые огурчики',
                        value: '4'
                    },
                    {
                        text: 'Красный лук',
                        value: '5'
                    },
                    {
                        text: 'Томаты',
                        value: '6'
                    }
                ]}
                items={[
                    {
                        text: 'Сырный соус',
                        value: '1'
                    },
                    {
                        text: 'Моцарелла',
                        value: '2'
                    },
                    {
                        text: 'Чеснок',
                        value: '3'
                    },
                    {
                        text: 'Моцарелла',
                        value: '2'
                    },
                    {
                        text: 'Чеснок',
                        value: '3'
                    },
                    {
                        text: 'Моцарелла',
                        value: '2'
                    },
                    {
                        text: 'Чеснок',
                        value: '3'
                    },
                    {
                        text: 'Соленые огурчики',
                        value: '4'
                    },
                    {
                        text: 'Красный лук',
                        value: '5'
                    },
                    {
                        text: 'Томаты',
                        value: '6'
                    }
                ]}
            />
        </div>
    )
}