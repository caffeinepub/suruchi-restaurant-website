import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useMemo, useRef, useState } from "react";
import type { MenuItem } from "../backend.d";
import { FoodType, MenuCategory, useAllMenuItems } from "../hooks/useQueries";

const FALLBACK_MENU: MenuItem[] = [
  {
    name: "Chicken Dum Biryani",
    description:
      "Slow-cooked basmati rice with tender chicken, saffron & whole spices",
    category: MenuCategory.biryani,
    price: 220,
    isSpecial: true,
    foodType: FoodType.nonVeg,
  },
  {
    name: "Mutton Biryani",
    description: "Fragrant rice with succulent mutton pieces in aromatic gravy",
    category: MenuCategory.biryani,
    price: 280,
    isSpecial: false,
    foodType: FoodType.nonVeg,
  },
  {
    name: "Veg Biryani",
    description: "Garden fresh vegetables layered with fragrant basmati rice",
    category: MenuCategory.biryani,
    price: 160,
    isSpecial: false,
    foodType: FoodType.veg,
  },
  {
    name: "Prawn Biryani",
    description: "Coastal style prawn biryani with coconut and spices",
    category: MenuCategory.biryani,
    price: 300,
    isSpecial: false,
    foodType: FoodType.nonVeg,
  },
  {
    name: "Chilli Chicken",
    description: "Crispy chicken tossed in fiery Indo-Chinese chilli sauce",
    category: MenuCategory.chinese,
    price: 200,
    isSpecial: true,
    foodType: FoodType.nonVeg,
  },
  {
    name: "Hakka Noodles",
    description: "Stir-fried noodles with vegetables in savory Chinese sauce",
    category: MenuCategory.chinese,
    price: 150,
    isSpecial: false,
    foodType: FoodType.veg,
  },
  {
    name: "Manchurian",
    description: "Crispy deep-fried balls in tangy Manchurian gravy",
    category: MenuCategory.chinese,
    price: 160,
    isSpecial: false,
    foodType: FoodType.veg,
  },
  {
    name: "Chicken Fried Rice",
    description:
      "Wok-tossed rice with egg and chicken in classic Chinese style",
    category: MenuCategory.chinese,
    price: 180,
    isSpecial: false,
    foodType: FoodType.nonVeg,
  },
  {
    name: "Tandoori Chicken",
    description:
      "Whole chicken marinated in spiced yogurt, roasted in clay oven",
    category: MenuCategory.starters,
    price: 350,
    isSpecial: true,
    foodType: FoodType.nonVeg,
  },
  {
    name: "Paneer Tikka",
    description:
      "Cottage cheese cubes marinated in spiced yogurt, grilled to perfection",
    category: MenuCategory.starters,
    price: 220,
    isSpecial: false,
    foodType: FoodType.veg,
  },
  {
    name: "Fish Fry",
    description:
      "Fresh river fish marinated with mustard and turmeric, shallow fried",
    category: MenuCategory.starters,
    price: 250,
    isSpecial: false,
    foodType: FoodType.nonVeg,
  },
  {
    name: "Seekh Kebab",
    description:
      "Minced meat with herbs and spices on skewers, grilled over charcoal",
    category: MenuCategory.starters,
    price: 230,
    isSpecial: false,
    foodType: FoodType.nonVeg,
  },
  {
    name: "Fresh Lime Soda",
    description: "Chilled lime soda with choice of sweet, salt or masala",
    category: MenuCategory.drinks,
    price: 60,
    isSpecial: false,
    foodType: FoodType.veg,
  },
  {
    name: "Mango Lassi",
    description: "Thick creamy yogurt blended with Alphonso mangoes",
    category: MenuCategory.drinks,
    price: 90,
    isSpecial: true,
    foodType: FoodType.veg,
  },
  {
    name: "Masala Chai",
    description:
      "Traditional Indian spiced tea with cardamom, ginger and cinnamon",
    category: MenuCategory.drinks,
    price: 40,
    isSpecial: false,
    foodType: FoodType.veg,
  },
  {
    name: "Cold Coffee",
    description: "Rich chilled coffee blended with ice cream and milk",
    category: MenuCategory.drinks,
    price: 100,
    isSpecial: false,
    foodType: FoodType.veg,
  },
];

const categoryLabels: Record<MenuCategory, string> = {
  [MenuCategory.biryani]: "Biryani",
  [MenuCategory.chinese]: "Chinese",
  [MenuCategory.starters]: "Starters",
  [MenuCategory.drinks]: "Drinks",
};

const starIndices = [0, 1, 2, 3, 4];

function MenuItemCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      data-ocid={`menu.item.${index + 1}`}
      className="menu-item-card flex items-start gap-4 p-5 rounded-xl border border-gold/10 bg-[#1A1A1C] hover:border-gold/30"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <div
            className={`w-3 h-3 rounded-full border-2 flex-shrink-0 ${
              item.foodType === FoodType.veg
                ? "border-green-500 bg-green-500/20"
                : "border-red-500 bg-red-500/20"
            }`}
          />
          <h4 className="font-display font-semibold text-[#F2F2F2] text-base truncate">
            {item.name}
          </h4>
          {item.isSpecial && (
            <span className="text-[9px] bg-gold/20 text-gold border border-gold/30 px-1.5 py-0.5 rounded font-body tracking-wide uppercase flex-shrink-0">
              Chef's Pick
            </span>
          )}
        </div>
        <p className="font-body text-[#B8B8B8] text-xs leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>
      <div className="flex flex-col items-end gap-2 flex-shrink-0">
        <span className="font-display font-bold text-gold text-lg">
          ₹{item.price}
        </span>
        <button
          type="button"
          data-ocid="menu.primary_button"
          className="text-[10px] bg-orange/20 text-orange border border-orange/30 hover:bg-orange hover:text-white px-3 py-1.5 rounded-full font-body tracking-wide uppercase transition-all duration-200"
        >
          Order
        </button>
      </div>
    </motion.div>
  );
}

export { starIndices };

export default function MenuSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [foodType, setFoodType] = useState<FoodType | "all">("all");
  const [category, setCategory] = useState<MenuCategory>(MenuCategory.biryani);

  const { data: menuItems, isLoading } = useAllMenuItems();
  const items = menuItems && menuItems.length > 0 ? menuItems : FALLBACK_MENU;

  const filtered = useMemo(() => {
    return items.filter(
      (item) =>
        item.category === category &&
        (foodType === "all" || item.foodType === foodType),
    );
  }, [items, category, foodType]);

  return (
    <section
      id="menu"
      ref={ref}
      className="py-24 md:py-32"
      style={{ backgroundColor: "#0B0B0C" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-body text-xs text-gold tracking-[0.3em] uppercase mb-4">
            Explore
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#F2F2F2] uppercase tracking-wider">
            Our <span className="gold-gradient">Menu</span>
          </h2>
          <div className="flex items-center justify-center mt-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold" />
            <div className="w-2 h-2 rounded-full bg-gold mx-3" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
          <p className="font-body text-[#B8B8B8] mt-4 max-w-lg mx-auto text-sm">
            From traditional recipes to modern interpretations — every dish
            crafted with fresh ingredients and generational expertise.
          </p>
        </motion.div>

        {/* Veg / Non-Veg Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-3 mb-8"
        >
          {(["all", FoodType.veg, FoodType.nonVeg] as const).map((type) => (
            <button
              type="button"
              key={type}
              onClick={() => setFoodType(type)}
              data-ocid="menu.tab"
              className={`font-body text-xs uppercase tracking-widest px-6 py-2.5 rounded-full border transition-all duration-300 ${
                foodType === type
                  ? "bg-gold text-[#0B0B0C] border-gold font-semibold"
                  : "border-gold/30 text-[#B8B8B8] hover:border-gold/60 hover:text-gold"
              }`}
            >
              {type === "all"
                ? "All"
                : type === FoodType.veg
                  ? "🟢 Veg"
                  : "🔴 Non-Veg"}
            </button>
          ))}
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button
              type="button"
              key={key}
              onClick={() => setCategory(key as MenuCategory)}
              data-ocid="menu.tab"
              className={`font-body text-sm uppercase tracking-wider px-7 py-3 rounded-lg border transition-all duration-300 ${
                category === key
                  ? "bg-[#1A1A1C] text-gold border-gold font-medium"
                  : "border-[#2A2A2C] text-[#B8B8B8] hover:border-gold/40 hover:text-[#F2F2F2] bg-[#151518]"
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        {isLoading ? (
          <div
            className="grid sm:grid-cols-2 gap-4"
            data-ocid="menu.loading_state"
          >
            {[0, 1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-24 rounded-xl bg-[#1A1A1C]" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div
            className="text-center py-16 text-[#B8B8B8] font-body"
            data-ocid="menu.empty_state"
          >
            No items found for this selection.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4">
            {filtered.map((item, i) => (
              <MenuItemCard key={item.name} item={item} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
