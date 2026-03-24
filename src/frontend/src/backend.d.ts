import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface MenuItem {
    name: string;
    description: string;
    category: MenuCategory;
    price: number;
    isSpecial: boolean;
    foodType: FoodType;
}
export interface SpecialDish {
    tag: string;
    name: string;
    description: string;
}
export interface Testimonial {
    customerName: string;
    review: string;
    rating: bigint;
    location: string;
}
export enum FoodType {
    veg = "veg",
    nonVeg = "nonVeg"
}
export enum MenuCategory {
    starters = "starters",
    chinese = "chinese",
    biryani = "biryani",
    drinks = "drinks"
}
export interface backendInterface {
    getAllMenuItems(): Promise<Array<MenuItem>>;
    getMenuByCategory(category: MenuCategory): Promise<Array<MenuItem>>;
    getMenuByType(foodType: FoodType): Promise<Array<MenuItem>>;
    getSpecialDishes(): Promise<Array<SpecialDish>>;
    getSpecialMenuItems(): Promise<Array<MenuItem>>;
    getTestimonials(): Promise<Array<Testimonial>>;
}
