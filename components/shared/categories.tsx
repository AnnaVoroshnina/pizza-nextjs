"use client"

import {FC} from "react";
import {cn} from "@/lib/utils";
import {useCategoryStore} from "@/store/category";
import {Category} from "@prisma/client";

interface Props {
    categories: Category[]
    className?: string;
}


export const Categories: FC<Props> = ({className, categories}) => {
    const categoryActiveId = useCategoryStore(state => state.activeId)
    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 p-2 rounded-2xl', className)}>
            {categories.map(({name, id}, index) => {
                return (
                    <a
                        key={index}
                        href={`#${name}`}
                        className={cn('flex items-center font-bold h-11 rounded-2xl px-5',
                            categoryActiveId === (id) && 'bg-white shadow-md shadow-grey-200 text-primary')}
                    >
                        <button>
                            {name}
                        </button>
                    </a>)
            })}
        </div>
    )
}