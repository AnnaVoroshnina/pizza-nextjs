import {prisma} from "@/prisma/prisma-client";
import {notFound} from "next/navigation";
import {ChooseModalProduct} from "@/shared/components/shared";

export default async function ProductModalPage({params: {id}}: { params: { id: string } }) {
    const product = await prisma.product.findFirst({
        where: {
            id: Number(id)
        },
        include: {
            ingredients: true,
            productItems: true
        }
    });
    if (!product) {
        return notFound()
    }
    return (
        <ChooseModalProduct product={product} />
    )
}