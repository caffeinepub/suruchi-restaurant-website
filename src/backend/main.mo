import Text "mo:core/Text";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";

actor {
  type MenuCategory = {
    #biryani;
    #chinese;
    #starters;
    #drinks;
  };

  type FoodType = {
    #veg;
    #nonVeg;
  };

  type MenuItem = {
    name : Text;
    description : Text;
    price : Float;
    category : MenuCategory;
    foodType : FoodType;
    isSpecial : Bool;
  };

  type Testimonial = {
    customerName : Text;
    review : Text;
    rating : Nat;
    location : Text;
  };

  type SpecialDish = {
    name : Text;
    description : Text;
    tag : Text;
  };

  module MenuItem {
    public func compare(menuItem1 : MenuItem, menuItem2 : MenuItem) : Order.Order {
      Text.compare(menuItem1.name, menuItem2.name);
    };
  };

  module Testimonial {
    public func compare(testimonial1 : Testimonial, testimonial2 : Testimonial) : Order.Order {
      Text.compare(testimonial1.customerName, testimonial2.customerName);
    };
  };

  module SpecialDish {
    public func compare(specialDish1 : SpecialDish, specialDish2 : SpecialDish) : Order.Order {
      Text.compare(specialDish1.name, specialDish2.name);
    };
  };

  let menuItems : [MenuItem] = [
    {
      name = "Chicken Biryani";
      description = "Fragrant basmati rice cooked with tender chicken and aromatic spices.";
      price = 250.0;
      category = #biryani;
      foodType = #nonVeg;
      isSpecial = false;
    },
    {
      name = "Paneer Tikka";
      description = "Marinated paneer cubes grilled to perfection. Served with mint chutney.";
      price = 180.0;
      category = #starters;
      foodType = #veg;
      isSpecial = false;
    },
    {
      name = "Veg Manchurian";
      description = "Crispy vegetable balls tossed in tangy Chinese sauce.";
      price = 160.0;
      category = #chinese;
      foodType = #veg;
      isSpecial = false;
    },
    {
      name = "Butter Chicken";
      description = "Tender chicken in creamy tomato gravy. Served with naan or rice.";
      price = 280.0;
      category = #starters;
      foodType = #nonVeg;
      isSpecial = false;
    },
    {
      name = "Masala Dosa";
      description = "Crispy dosa filled with spicy potato masala.";
      price = 120.0;
      category = #starters;
      foodType = #veg;
      isSpecial = false;
    },
    {
      name = "Mango Lassi";
      description = "Refreshing yogurt-based drink with mango pulp.";
      price = 80.0;
      category = #drinks;
      foodType = #veg;
      isSpecial = false;
    },
    {
      name = "Mutton Biryani";
      description = "Juicy mutton pieces cooked with basmati rice and rich spices.";
      price = 320.0;
      category = #biryani;
      foodType = #nonVeg;
      isSpecial = false;
    },
    {
      name = "Gobi Manchurian";
      description = "Crispy cauliflower florets in spicy Chinese sauce.";
      price = 140.0;
      category = #chinese;
      foodType = #veg;
      isSpecial = false;
    },
    {
      name = "Suruchi Special Thali";
      description = "Complete meal with curry, rice, naan, dessert and more.";
      price = 350.0;
      category = #starters;
      foodType = #veg;
      isSpecial = true;
    },
  ];

  let testimonials : [Testimonial] = [
    {
      customerName = "Rahul Sharma";
      review = "Amazing biryanis and quick service. My favorite Indian restaurant in town!";
      rating = 5;
      location = "Mumbai";
    },
    {
      customerName = "Sneha Patel";
      review = "Loved the paneer dishes! Will visit again with family soon.";
      rating = 4;
      location = "Ahmedabad";
    },
    {
      customerName = "Vikram Kumar";
      review = "The Chinese menu is fantastic. Proper Indo-Chinese flavors.";
      rating = 5;
      location = "Bengaluru";
    },
    {
      customerName = "Pooja Mehta";
      review = "Very affordable thalis and lunch combos. Tasty food!";
      rating = 4;
      location = "Delhi";
    },
  ];

  let specialDishes : [SpecialDish] = [
    {
      name = "Lamb Rogan Josh";
      description = "Traditional Kashmiri lamb curry slow-cooked to perfection.";
      tag = "Chef's Special";
    },
    {
      name = "Prawn Masala";
      description = "Juicy prawns cooked in spicy tomato onion gravy.";
      tag = "Seafood Special";
    },
    {
      name = "Chocolate Samosa";
      description = "Unique fusion dessert with chocolate-filled crispy samosa.";
      tag = "Dessert Innovation";
    },
  ];

  public query ({ caller }) func getAllMenuItems() : async [MenuItem] {
    menuItems.sort();
  };

  public query ({ caller }) func getMenuByCategory(category : MenuCategory) : async [MenuItem] {
    menuItems.values().filter(
      func(item) { item.category == category }
    ).toArray().sort();
  };

  public query ({ caller }) func getMenuByType(foodType : FoodType) : async [MenuItem] {
    menuItems.values().filter(
      func(item) { item.foodType == foodType }
    ).toArray().sort();
  };

  public query ({ caller }) func getSpecialMenuItems() : async [MenuItem] {
    menuItems.values().filter(
      func(item) { item.isSpecial }
    ).toArray().sort();
  };

  public query ({ caller }) func getTestimonials() : async [Testimonial] {
    testimonials.sort();
  };

  public query ({ caller }) func getSpecialDishes() : async [SpecialDish] {
    specialDishes.sort();
  };
};
