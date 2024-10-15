"use client"

import {FC, useEffect, useRef} from "react";
import {Title} from "@/components/shared/title";
import {cn} from "@/lib/utils";
import {ProductCard} from "@/components/shared/product-card";
import {useIntersection} from "react-use";
import {useCategoryStore} from "@/store/category";

interface Props {
    title: string
    products: any[]
    categoryId: number
    className?: string;
    listClassName?: string

}
export const ProductsGroupList: FC<Props> = ({title, products, categoryId, className, listClassName}) => {
    const setActiveCategoryId = useCategoryStore(state => state.setActiveId)
    const intersectionRef = useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4
    })
    useEffect(()=>{
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId)
        }
    }, [categoryId, intersection?.isIntersecting, title])

    return(
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size='lg' className='font-extrabold mb-5 text-green-800' />
            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {products.filter((product) => product.items.length > 0).map((product, index) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.items[0].price}
                        imageUrl={product.imageUrl} />
                ))}
            </div>
        </div>
    )
}