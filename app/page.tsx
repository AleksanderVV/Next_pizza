import { Container, Title, TopBar, Filters, ProductsGroupList } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
                <ProductsGroupList title="Popular pizzas" items={[
                  {
                    id: 1,
                    name: "Hawaiian Pizza",
                    imageUrl: "https://adminbm.kharkiv.ua/uploads/bela_misczela_37fd5dc0c5.webp",
                    items: [
                      {
                        id: 1,
                        price: 390
                      },
                      {
                        id: 2,
                        price: 450
                      }
                    ],
                  },
                  {
                    id: 2,
                    name: "Hawaiian Pizza",
                    imageUrl: "https://adminbm.kharkiv.ua/uploads/bela_misczela_37fd5dc0c5.webp",
                    items: [
                      {
                        id: 1,
                        price: 390
                      },
                      {
                        id: 2,
                        price: 450
                      }
                    ],
                  },
                  {
                    id: 3,
                    name: "Hawaiian Pizza",
                    imageUrl: "https://adminbm.kharkiv.ua/uploads/bela_misczela_37fd5dc0c5.webp",
                    items: [
                      {
                        id: 1,
                        price: 390
                      },
                      {
                        id: 2,
                        price: 450
                      }
                    ],
                  },
                ]} />

                <ProductsGroupList title="New pizzas" items={[
                  {
                    id: 1,
                    name: "Hawaiian Pizza",
                    imageUrl: "https://adminbm.kharkiv.ua/uploads/bela_misczela_37fd5dc0c5.webp",
                    items: [
                      {
                        id: 1,
                        price: 390
                      },
                      {
                        id: 2,
                        price: 450
                      }
                    ],
                  },
                  {
                    id: 2,
                    name: "Hawaiian Pizza",
                    imageUrl: "https://adminbm.kharkiv.ua/uploads/bela_misczela_37fd5dc0c5.webp",
                    items: [
                      {
                        id: 1,
                        price: 390
                      },
                      {
                        id: 2,
                        price: 450
                      }
                    ],
                  },
                  {
                    id: 3,
                    name: "Hawaiian Pizza",
                    imageUrl: "https://adminbm.kharkiv.ua/uploads/bela_misczela_37fd5dc0c5.webp",
                    items: [
                      {
                        id: 1,
                        price: 390
                      },
                      {
                        id: 2,
                        price: 450
                      }
                    ],
                  }
                ]} />
                <ProductsGroupList title="Burgers" items={[
                  {
                    id: 1,
                    name: "Burger Polo",
                    imageUrl: "https://adminbm.kharkiv.ua/uploads/DSC_07855_50a520b0c2.webp",
                    items: [
                      {
                        id: 1,
                        price: 390
                      },
                      {
                        id: 2,
                        price: 450
                      }
                    ],
                  },
                  {
                    id: 2,
                    name: "Burger Polo",
                    imageUrl: "https://adminbm.kharkiv.ua/uploads/DSC_07855_50a520b0c2.webp",
                    items: [
                      {
                        id: 1,
                        price: 390
                      },
                      {
                        id: 2,
                        price: 450
                      }
                    ],
                  },
                  {
                    id: 3,
                    name: "Burger Polo",
                    imageUrl: "https://adminbm.kharkiv.ua/uploads/DSC_07855_50a520b0c2.webp",
                    items: [
                      {
                        id: 1,
                        price: 390
                      },
                      {
                        id: 2,
                        price: 450
                      }
                    ],
                  }  
                ]} />
            </div>
          </div>

        </div>
      </Container>
    </>
  );
}
