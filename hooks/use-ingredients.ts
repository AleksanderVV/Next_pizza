import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import React from "react";

export const useIngredients = () => {
    const [loading, setLoading] = React.useState<boolean>(true);
    const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);

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

    return {ingredients, loading};
}