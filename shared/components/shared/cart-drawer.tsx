'use client'
import {FC, PropsWithChildren} from "react";
import {Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger} from "@/shared/components/ui/sheet";
import Link from "next/link";
import {Button} from "@/shared/components/ui";
import {ArrowRight} from "lucide-react";
import {CartDrawerItem} from "@/shared/components/shared/cart-drawer-item";
import {getCartItemDetails} from "@/shared/lib";

interface Props {
    className?: string
}

export const CartDrawer: FC<PropsWithChildren<Props>> = ({className, children}) => {
    return (
        <Sheet>
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent className='flex flex-col justify-between pb-0 bg-gray-100'>
                <SheetHeader>
                    <SheetTitle>
                        В корзине <span className='font-bold'>3 товара</span>
                    </SheetTitle>
                </SheetHeader>

                <div className="-mx-6 mt-5 overflow-auto scrollbar flex-1">
                    <div className="mb-2">
                        <CartDrawerItem id={1}
                                        imageUrl={'https://media.dodostatic.net/image/r:760x760/11EF905049346CA6BD1BF985A3513048.avif'}
                                        details={getCartItemDetails(1, 30, [{name: "цыпленок"}, {name: "сыр"}])}
                                        name={'кола-барбекю'}
                                        price={150}
                                        quantity={1}
                        />
                    </div>
                </div>

                <SheetFooter className='-mx-6 bh-white p-8'>
                    <div className="w-full">
                        <div className="flex mb-4">
                            <span className="flex flex-1 text-lg text-neutral-500">
                                Итого
                                <div
                                    className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2"/>
                            </span>
                            <span className="font-bold text-lg">500 ₽</span>
                        </div>
                        <Link href='/cart'>
                            <Button
                                type='submit'
                                className='w-full h-12 text-base'>
                                Оформить заказ
                                <ArrowRight className='w-5 ml-2'/>
                            </Button>
                        </Link>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};
