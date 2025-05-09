
import { Api } from "@/services/api-client"
import { Ingredient } from "@prisma/client"
import React from "react"
import { useSet } from "react-use";

interface ReturnProps {
    ingredients: Ingredient[];
    loading: boolean;
    selectedIngredients: Set<string>;
    onAddId: (id: string) => void;
}

export const useFilterIngredients = () : ReturnProps => {
    const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);

    const [selectedIds, { toggle }] = useSet(new Set<string>([]));

    React.useEffect(() => {
        async function fetchIngredients() {
            try {
                setLoading(true);
                const ingredients = await Api.ingredients.getAll();
                setIngredients(ingredients);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchIngredients();
    }, []);

    return {ingredients, loading, onAddId: toggle, selectedIngredients: selectedIds};
}