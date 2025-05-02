import { Ingredient } from "@prisma/client"
import { axiosInstance } from "./axios-instance"
import { ApiRoutes } from "./constants"

export const getAll = async () : Promise<Ingredient[]>  => {
    const data = (await axiosInstance.get<{ingredients: Ingredient[]}>(ApiRoutes.INGREDIENTS)).data;
    
    return data.ingredients;
}