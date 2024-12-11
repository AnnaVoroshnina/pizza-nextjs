'use client'

import {FC, useState} from "react";
import {Dialog, DialogContent} from "@/shared/components/ui/dialog";
import {cn} from "@/shared/lib/utils";
import {ChoosePizzaForm, ChooseProductForm} from "@/shared/components/shared";
import {useRouter} from "next/navigation";
import {ProductWithRelations} from "@/@types/prisma";

interface Props {
    className?: string;
    product: ProductWithRelations;
}

export const ChooseModalProduct: FC<Props> = ({className, product}) => {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(Boolean(product));
    const isPizzaForm = Boolean(product.productItems[0].pizzaType)

    const handleClose = () => {
        setIsOpen(false);
        router.push('/');
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className={cn(
                'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
                className,
            )}>{
                isPizzaForm
                    ? <ChoosePizzaForm
                        imageUrl={product.imageUrl}
                        name={product.name}
                        ingredients={product.ingredients}
                        items={product.productItems}
                    />
                    : <ChooseProductForm name={product.name} imageUrl={product.imageUrl} />
            }
            </DialogContent>
        </Dialog>
    )
}