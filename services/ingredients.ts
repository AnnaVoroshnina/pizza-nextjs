import {axiosInstance} from "@/services/axios-instance";
import {Ingredient} from "@prisma/client";
import {ApiRoutes} from "@/services/constants";

export const getAllIngredient = async (): Promise<Ingredient[]> => {
    return (await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)).data
}