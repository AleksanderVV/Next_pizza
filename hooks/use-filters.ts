import { useSearchParams } from "next/navigation";
import { useSet } from "react-use";
import React from "react";

interface PriceProps {
    priceFrom?: number;
    priceTo?: number;
}


interface QueryFilters extends PriceProps {
    sizes: string;
    pizzaTypes: string;
    ingredients: string;
    selectedIngredients: string;
}

export interface Filters {
    selectedIngredients: Set<string>;
    sizes: Set<string>;
    pizzaTypes: Set<string>;
    prices: PriceProps;
}

interface ReturnProps extends Filters {
    setSizes: (value: string) => void;
    setPizzaTypes: (value: string) => void;
    setSelectedIngredients: (value: string) => void;
    setPrices: (name: keyof PriceProps, value: number) => void;
}

export const useFilters = (): ReturnProps => {
    const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

    // Ingredients filter
    const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
        new Set<string>(searchParams.get('selectedIngredients')?.split(','))
    );

    // Sizes filter
    const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>(
        searchParams.get('sizes') ? searchParams.get('sizes')?.split(',') : [])
    );

    // Pizza types filter
    const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
        new Set<string>(searchParams.get('pizzaTypes') ? searchParams.get('pizzaTypes')?.split(',') : [])
    );

    // Price filter
    const [prices, setPrices] = React.useState<PriceProps>({
        priceFrom: Number(searchParams.get('priceFrom')) || 0,
        priceTo: Number(searchParams.get('priceTo')) || 0,
    });

    const updatePrices = (name: keyof PriceProps, value: number) => {
        setPrices({...prices, [name]: value});
    }
    

    return {
        selectedIngredients, 
        sizes, 
        pizzaTypes, 
        prices,
        setPrices: updatePrices,
        setPizzaTypes: togglePizzaTypes,
        setSizes: toggleSizes,
        setSelectedIngredients: toggleIngredients,
    };
}