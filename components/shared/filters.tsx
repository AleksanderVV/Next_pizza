'use client'

import React from "react";
import { cn } from "@/lib/utils";
import { Title, FilterCheckbox, CheckboxFiltersGroup } from "./index";
import { Input, RangeSlider } from "../ui";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";
import { useSet } from "react-use";

interface Props {
    className?: string;
}

interface PriceProps {
    priceFrom: number;
    priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => {

      const {ingredients, loading, onAddId, selectedIds} = useFilterIngredients();
      const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));
      const [prices, setPrice] = React.useState<PriceProps>({priceFrom: 0, priceTo: 1000});

      const items = ingredients.map(item => ({value: String(item.id), text: String(item.name)}));

      const updatePrice = (name: keyof PriceProps, value: number) => {
          setPrice({...prices, [name]: value});
      }

    return (
        <div className={className}>
            <Title text="Filters" size="sm" className="mb-5 font-bold" />

            <CheckboxFiltersGroup 
                title="Sizes"
                name="sizes"
                className="mb-5"
                onClickCheckbox={toggleSizes}
                selected={sizes}
                items={[
                    {text: '20 sm', value: '20'},
                    {text: '30 sm', value: '30'},
                    {text: '40 sm', value: '40'},
                ]}
            />

            <div className="mt-5 border-y border-y-neutral-100 pt-6 pb-7">
                <p className="font-bold mb-3">Price:</p>
                <div className="flex gap-3 mb-5">
                    <Input 
                        type="number" 
                        placeholder="0" 
                        min={0} 
                        max={1000} 
                        value={String(prices.priceFrom)} 
                        onChange={(e) => updatePrice('priceFrom', Number(e.target.value))} />
                    <Input 
                        type="number" 
                        placeholder="5000" 
                        min={100} 
                        max={1000} 
                        value={String(prices.priceTo)} 
                        onChange={(e) => updatePrice('priceTo', Number(e.target.value))} />
                </div>
                <RangeSlider 
                    min={0} 
                    max={1000} 
                    step={10} 
                    value={[prices.priceFrom, prices.priceTo]}
                    onValueChange={([priceFrom, priceTo]) => setPrice({priceFrom, priceTo})} />
            </div>

            <CheckboxFiltersGroup 
                title="Ingredients"
                name="ingredients"
                className="mt-5"
                limit={6}
                defaultItems={items.slice(0,6)}
                items={items}
                loading={loading}
                onClickCheckbox={onAddId}
                selected={selectedIds}
            />
        </div>
    )
}