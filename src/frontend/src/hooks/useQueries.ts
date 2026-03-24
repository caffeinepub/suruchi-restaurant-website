import { useQuery } from "@tanstack/react-query";
import type { MenuItem, SpecialDish, Testimonial } from "../backend.d";
import { FoodType, MenuCategory } from "../backend.d";
import { useActor } from "./useActor";

export function useAllMenuItems() {
  const { actor, isFetching } = useActor();
  return useQuery<MenuItem[]>({
    queryKey: ["menuItems"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllMenuItems();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useMenuByCategory(category: MenuCategory) {
  const { actor, isFetching } = useActor();
  return useQuery<MenuItem[]>({
    queryKey: ["menuItems", "category", category],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMenuByCategory(category);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useMenuByType(foodType: FoodType) {
  const { actor, isFetching } = useActor();
  return useQuery<MenuItem[]>({
    queryKey: ["menuItems", "type", foodType],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMenuByType(foodType);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSpecialDishes() {
  const { actor, isFetching } = useActor();
  return useQuery<SpecialDish[]>({
    queryKey: ["specialDishes"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getSpecialDishes();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSpecialMenuItems() {
  const { actor, isFetching } = useActor();
  return useQuery<MenuItem[]>({
    queryKey: ["specialMenuItems"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getSpecialMenuItems();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useTestimonials() {
  const { actor, isFetching } = useActor();
  return useQuery<Testimonial[]>({
    queryKey: ["testimonials"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getTestimonials();
    },
    enabled: !!actor && !isFetching,
  });
}

export { MenuCategory, FoodType };
