import { PrismaClient, Prisma } from "@prisma/client";
import { hashSync } from "bcrypt";
import { categories, ingredients, products } from "./constants";
import { connect } from "http2";

const prisma = new PrismaClient();

const randomDecimalNumber = (max: number, min: number) => Math.floor(Math.random() * (max - min) * 10  + min * 10) / 10;

const generateProductItem = (
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
            generateProductItem(1, 1, 20),
            generateProductItem(1, 2, 30),
            generateProductItem(1, 3, 40),

            generateProductItem(2, 1, 20),
            generateProductItem(2, 2, 30),
            generateProductItem(2, 3, 40),

            generateProductItem(3, 1, 20),
            generateProductItem(3, 2, 30),
            generateProductItem(3, 3, 40),

            generateProductItem(4, 1, 20),
            generateProductItem(4, 2, 30),
            generateProductItem(4, 3, 40),

            generateProductItem(5),
            generateProductItem(6),
            generateProductItem(7),
            generateProductItem(8),
            generateProductItem(9),
            generateProductItem(10),
            generateProductItem(11),
            generateProductItem(12),
            generateProductItem(13),
            generateProductItem(14),
            generateProductItem(15),
            generateProductItem(16),
            generateProductItem(17),
            generateProductItem(18),
            generateProductItem(19),
            generateProductItem(20),
            generateProductItem(21),
            generateProductItem(22),
            generateProductItem(23),
            generateProductItem(24),
            generateProductItem(25),
            generateProductItem(26),
            generateProductItem(27),
            generateProductItem(28),
        ],
    })

    await prisma.cart.createMany({
        data: [
            {
                userId: 1,
                totalAmount: 0,
                token: '1111',
            },
            {
                userId: 2,
                totalAmount: 0,
                token: '2222',
            }
        ]
    })

    await prisma.cartItem.create({
        data: 
            {
                productItemId: 1,
                cartId: 1,
                quantity: 2,
                ingredients: {
                    connect: [ { id: 1 }, { id: 2 } ]
                }
            }
    })

}


async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
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