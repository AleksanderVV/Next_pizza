import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import { Container, ProductImage, Title } from "@/components/shared";

export default async function ProductPage({ params: { id } }: { params: { id: string } }) {

    const product = await prisma.product.findFirst({
        where: {
            id: Number(id)
        }
    });

    if (!product) {
        return notFound();
    }

    return <Container className="flex flex-col my-10">
        <div className="flex flex-1">
            <ProductImage imageUrl={product.imageUrl} size={20} className="" />

            <div className="w-[490px] bg-[#fcfcfc] p-7">
                <Title text={product.name} size="lg" className="font-extrabold" />
                <p className=" text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nesciunt voluptatum repellat itaque accusamus! Fugit quis velit unde natus quos.</p>
            </div>
        </div>
    </Container>;
}