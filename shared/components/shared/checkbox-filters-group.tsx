'use client'

import {ChangeEvent, FC, useState} from "react";
import {FilterCheckbox, FilterCheckboxProps} from "@/shared/components/shared/filter-checkbox";
import {Input, Skeleton} from "@/shared/components/ui";

type Item = FilterCheckboxProps

interface Props {
    title: string;
    items: Item[];
    defaultItems?: Item[];
    limit?: number;
    loading?: boolean;
    searchInputPlaceholder?: string;
    onClickCheckbox?: (id: string) => void;
    selectedValues: Set<string>
    defaultValue?: string[];
    className?: string;
    name?: string
}

export const CheckboxFiltersGroup: FC<Props> = (
    {
        title,
        items,
        defaultItems,
        limit = 5,
        loading,
        searchInputPlaceholder = 'Поиск...',
        onClickCheckbox,
        selectedValues,
        defaultValue,
        className,
        name
    }
) => {
    const [showAll, setShowAll] = useState<boolean>(false)
    const [searchValue, setSearchValue] = useState<string>('')

    const list = showAll
        ? items.filter(item => item.text.toLowerCase().includes(searchValue.toLowerCase()))
        : (defaultItems || items).slice(0, limit)

    const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }
    if (loading) {
        return (
            <div className={className}>
                <p className='font-bold mb-3'>{title}</p>
                {...Array(limit).fill(0).map((_, index)=> (
                    <Skeleton key={index} className='h-6 mb-4 rounded-[8px]'/>
                ))}
                <Skeleton className='w-28 h-6 mb-4 rounded-[8px]'/>
            </div>
        )
    }
    return (
        <div className={className}>
            <p className='font-bold mb-3'>{title}</p>
            {showAll && (<div className="mb-5">
                <Input
                    onChange={onChangeSearchInput}
                    placeholder={searchInputPlaceholder} className='bg-gray-50 border-none'
                />
            </div>)}

            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {list.map((item, index) => (
                    <FilterCheckbox
                        key={index}
                        text={item.text}
                        value={item.value}
                        onCheckedChange={() => onClickCheckbox?.(item.value)}
                        checked={selectedValues?.has(item.value)}
                        endAdornment={item.endAdornment}
                        name={name}
                    />
                ))}
            </div>
            {items.length > limit && (
                <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
                    <button onClick={() => setShowAll(!showAll)} className='text-primary mt-3'>
                        {showAll ? 'Скрыть' : '+ Показать все'}
                    </button>
                </div>
            )}
        </div>
    )
}