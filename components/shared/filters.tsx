import React from "react";
import { cn } from "@/lib/utils";
import { Title, FilterCheckbox, CheckboxFiltersGroup } from "./index";
import { Input, RangeSlider } from "../ui";

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Title text="Filters" size="sm" className="mb-5 font-bold" />

            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Create your pizza" value="1" />
                <FilterCheckbox text="New products" value="2" />
            </div>

            <div className="mt-5 border-y border-y-neutral-100 pt-6 pb-7">
                <p className="font-bold mb-3">Price:</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0} max={30000} defaultValue={0} />
                    <Input type="number" placeholder="30000" min={100} max={30000} />
                </div>
                <RangeSlider min={0} max={30000} step={10} value={[0,30000]} />
            </div>

            <CheckboxFiltersGroup 
                title="Ingredients"
                className="mt-5"
                limit={6}
                defaultItems={[
                    {
                        text: 'Cheese souse',
                        value: '1',
                      },
                      {
                        text: 'Motsarella',
                        value: '2',
                      },
                      {
                        text: 'Garlic',
                        value: '3',
                      },
                      {
                        text: 'Salt Cucumbers',
                        value: '4',
                      },
                      {
                        text: 'Red Onions',
                        value: '5',
                      },
                      {
                        text: 'Tomatoes',
                        value: '6',
                      },
                ]}
                items={[
                    {
                      text: 'Cheese souse',
                      value: '1',
                    },
                    {
                      text: 'Motsarella',
                      value: '2',
                    },
                    {
                      text: 'Garlic',
                      value: '3',
                    },
                    {
                      text: 'Salt Cucumbers',
                      value: '4',
                    },
                    {
                      text: 'Red Onions',
                      value: '5',
                    },
                    {
                      text: 'Tomatoes',
                      value: '6',
                    },
                    {
                      text: 'Mushrooms',
                      value: '1',
                    },
                    {
                      text: 'Sausages',
                      value: '2',
                    },
                    {
                      text: 'Olives',
                      value: '3',
                    },
                    {
                      text: 'Corn',
                      value: '4',
                    },
                    {
                      text: 'Pineapple',
                      value: '5',
                    },
                  ]

                }
            />
        </div>
    )
}