'use clients'
import {prisma} from "@/prisma/prisma-client";
import {notFound} from "next/navigation";
import {Container, PizzaImage, Title} from "@/shared/components/shared";
import {GroupVariants} from "@/shared/components/shared/group-variants";

export default async function ProductPage({params: {id}}: { params: { id: string } }) {
    const product = await prisma.product.findFirst({where: {id: Number(id)}});
    if (!product) {
        return notFound()
    }
    return <Container className="flex flex-col my-10">
        <div className="flex flex-1">
            <PizzaImage imageUrl={product.imageUrl} size={35}/>
            <div className="w-[490px] bg-gray-100 p-7">
                <Title text={product.name} size="md" className="font-extrabold mb-1"/>
                <p className="text-gray-400">Blabla Bla</p>
                <GroupVariants value='2' items={[
                    {
                        name: "Маленькая",
                        value: "1"
                    },
                    {
                        name: "Средняя",
                        value: "2"
                    },
                    {
                        name: "Большая",
                        value: "3",
                        disabled: true
                    },
                ]}/>
            </div>
        </div>
    </Container>
}