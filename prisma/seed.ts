import { PrismaClient, Prisma } from "@prisma/client";
import { hashSync } from "bcrypt";
import { categories, ingredients, products } from "./constants";

const prisma = new PrismaClient();

const randomDecimalNumber = (max: number, min: number) => Math.floor(Math.random() * (max - min) * 10  + min * 10) / 10;

const generatePizza = (
    productId: number,
    pizzaType?: number,
    size?: number
) => {
    return {
        productId,
        price: randomDecimalNumber(190, 600),
        pizzaType,
        size
    } as Prisma.ProductItemUncheckedCreateInput;
}

async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: 'User',
                email: 'user@test.ua',
                password: hashSync('111111', 10),
                verified: new Date(),
                role: 'USER',
            },
            {
                fullName: 'Admin',
                email: 'admin@test.ua',
                password: hashSync('111111', 10),
                verified: new Date(),
                role: 'ADMIN',
            }
        ]
    })

    await prisma.category.createMany({
        data: categories,
    })

    await prisma.ingredient.createMany({
        data: ingredients,
    })

    for (const product of products) {
        await prisma.product.create({
          data: {
            name: product.name,
            imageUrl: product.imageUrl,
            categoryId: product.categoryId,
            ingredients: {
              connect: product.ingredientIds?.map(id => ({ id }))
            }
          }
        })
      }

    await prisma.productItem.createMany({
        data: [
            generatePizza(1, 1, 20),
            generatePizza(1, 2, 30),
            generatePizza(1, 3, 40),

            generatePizza(2, 1, 20),
            generatePizza(2, 2, 30),
            generatePizza(2, 3, 40),

            generatePizza(3, 1, 20),
            generatePizza(3, 2, 30),
            generatePizza(3, 3, 40),

            generatePizza(4, 1, 20),
            generatePizza(4, 2, 30),
            generatePizza(4, 3, 40),
        ],
    })

}


async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
}

async function main() {
    try {
        await down();
        await up();
    } catch (e) {
        console.error(e);
    }
}

main().then(async () => {
    await prisma.$disconnect();
})
.catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})