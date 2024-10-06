import React, { createContext, useState, useContext, useMemo, useRef, useEffect } from 'react';

import {
    addUser,
    getUserByEmail,
    userExists,
   
} from './indexedDB';

import babyImage from './uploads/category/cover/baby_items_a-z_d8oMRlZ.jpg';
import bakerySnacksImage from './uploads/category/cover/BAKERY__SNACKS_x5WFQ98.jpg';
import bathBodyCareImage from './uploads/category/cover/clean_body_wash_for_sensitive_skin_b8OahOw.jpg';
import breakfastImage from './uploads/category/cover/Asian_best_cheap_Halal_Breakfast_near_me_in_bronx_tCoV0EF.jpg';
import dairyEggsImage from './uploads/category/cover/Dairy__Eggs_milk.jpg';
import electronicsImage from './uploads/category/cover/Dhaka_asian_Supermarket_shop_available_electronics_international_items.jpg';
import fishImage from './uploads/category/cover/ocean_fresh_fish_yd1Qe6t.jpg';
import freshMeatImage from './uploads/category/cover/asian_fresh_halal_meat_3eX2kt9.jpg';
import frozenFoodImage from './uploads/category/cover/family_imdian_frozen_foods_de5eixx.jpg';
import fruitsVegetableImage from './uploads/category/cover/FRUITS_AND_VEGETABLE.jpg';
import groceryImage from './uploads/category/cover/asian_GROCERY_Store.jpg';
import homeKitchenImage from './uploads/category/cover/modern_home_and_kitchen_yiAaD5R.jpg';



import accessoriesRefills from './uploads/category/cover/Acc__Refill.jpg';
import babyFoodSnacks from './uploads/category/cover/Baby_food__Snacks.jpg';
import babyFormula from './uploads/category/cover/Baby-formula.png';
import childrensHealth from './uploads/category/cover/Baby-health.png';
import clothingAccessories from './uploads/category/cover/Baby-clothing--Acc.png';
import diapersWipes from './uploads/category/cover/Baby-Diaper--Wipes.png';
import schoolSupplies from './uploads/category/cover/SCHOOL_SUPPLIES.jpg';

import cakeMuffins from './uploads/category/cover/Cake--Muffin.png';
import chipsSnacks from './uploads/category/cover/Chips--Snacks.png';
import chocolateCandy from './uploads/category/cover/Chocolate--Candy.png';
import cookiesBiscuit from './uploads/category/cover/Cookies--Biscuits.png';
import muriChiraChanachur from './uploads/category/cover/Muri-Chanachur.png';
import seasonalBakery from './uploads/category/cover/seasonal-bakery.png';
import sugarFree from './uploads/category/cover/sugar-free.png';
import sweetsDesserts from './uploads/category/cover/sweets-dessert.png';

import accessoriesImg from './uploads/category/cover/Acc__Refill.jpg';
import barLiquidSoapImg from './uploads/category/cover/bar_and_liquid_soap_TQF8TY4.jpg';
import hairCareImg from './uploads/category/cover/hair_care_8ewdlMn.jpg';
import shampooConditionerImg from './uploads/category/cover/SHAMPOO__CONDITIONER_I0BvJAI.jpg';
import skinCareImg from './uploads/category/cover/SKIN_CARE_PRODUCTS.jpg';
import stylingProductsImg from './uploads/category/cover/styling_product.jpg';
import toothpastesImg from './uploads/category/cover/TOOTHPASTES.jpg';

import breadsFromTheAisle from './uploads/category/cover/bread_buns.jpg';
import cerealBreakfastFoods from './uploads/category/cover/breakfast_cereals.jpg';
import jam from './uploads/category/cover/jam_jelly_spreads.jpg';
import breadDough from './uploads/category/cover/roti_paratha_and_naan.jpg';
import tea from './uploads/category/cover/TEA__COFFEE.jpg';

import butterMargarineImg from './uploads/category/cover/BUTTER__MARGARINE.jpg';
import cheeseImg from './uploads/category/cover/CHEESE.jpg';
import eggsImg from './uploads/category/cover/EGGS.jpg';
import milkCreamImg from './uploads/category/cover/MILK__CREAM.jpg';
import milkAlternativesImg from './uploads/category/cover/MILK__CREAM.jpg';
import yogurtImg from './uploads/category/cover/yogurt.jpg';

import frozenFishImage from './uploads/category/cover/FROZEN_FISH.jpg';
import Shutki from './uploads/category/cover/DRIED_FISH_SHUTKI.jpg';
import FishF from './uploads/category/cover/FISH_FILLETS__STEAKS.jpg';
import Seafood from './uploads/category/cover/frozen_seafood.jpg';
import Shrimp from './uploads/category/cover/shrimp_prawn.jpg';

import Beef_Steak from './uploads/category/cover/Beef__Steak.jpg';
import Chicken from './uploads/category/cover/CHICKEN.jpg';
import Duck from './uploads/category/cover/DUCK.jpg';
import Lamb from './uploads/category/cover/Halal_Lamb.jpg';
import Mutton from './uploads/category/cover/MUTTON__GOAT.jpg';
import Turkey from './uploads/category/cover/TURKEY.jpg';

import frozenVeg from './uploads/category/cover/FROZEN_VEGETABLE__FRUITS.jpg';
import beefMuttonLambImage from './uploads/category/cover/Frozen_Beef_Mutton__Lamb.jpg';
import breakfastFoodImage from './uploads/category/cover/Frozen_Breakfast_Food.jpg';
import frozenSnacksMealsImage from './uploads/category/cover/Frozen_Snacks__Meals.jpg';
import iceCreamTreatsToppingsImage from './uploads/category/cover/ICE_Cream_Treats__Toppings.jpg';
import poultryChickenImage from './uploads/category/cover/FROZEN_POULTRY__CHICKEN.jpg';
import prawnSeafoodImage from './uploads/category/cover/FROZEN_PRAWN__SEAFOOD.jpg';

import cannedPackedFoodImage from './uploads/category/cover/CANNED_AND_PACKED_FOOD.jpg';
import colorEssencesBakingNeedsImage from './uploads/category/cover/COLOR_ESSENCES__BAKING_NEEDS.jpg';
import dalLentilsBeansImage from './uploads/category/cover/DAL_LENTILS__BEANS.jpg';
import driedFruitNutsImage from './uploads/category/cover/DRIED_FRUIT__NUTS.jpg';
import flourAttaSujiImage from './uploads/category/cover/FLOUR_ATTA__SUJI.jpg';
import honeySyrupAyurvedaImage from './uploads/category/cover/HONEY_SYRUP__AYURVEDA.jpg';
import masalaSpicesImage from './uploads/category/cover/MASALA__SPICES.jpg';
import noodlePastaShemaiImage from './uploads/category/cover/NOODLE_PASTA__SHEMAI.jpg';
import oilGheeDaldaImage from './uploads/category/cover/OIL_GHEE_and_DALDA.jpg';
import picklesImage from './uploads/category/cover/PICKLES.jpg';
import riceGrainsImage from './uploads/category/cover/RICE__GRAINS.jpg';
import saltSugarImage from './uploads/category/cover/SALT__SUGAR.jpg';
import sauceKetchupVinegarImage from './uploads/category/cover/SAUCE_KETCHUP__VINEGAR.jpg';
import waterJuiceBeveragesImage from './uploads/category/cover/WATERJUICE__BEVERAGES.jpg';


import freshFruitImage from './uploads/category/cover/FRESH_FRUIT.jpg';
import freshVegetableImage from './uploads/category/cover/Fresh_Vegetable.jpg';

import cookwareImage from './uploads/category/cover/BAKEWARE__COOKWARE.jpg';
import dinnerwareImage from './uploads/category/cover/CANDLES_INCENSE_LIGHTERS_6HHU6Jj.jpg';
import beddingImage from './uploads/category/cover/CLEANING__MAINTENANCE.jpg';
import storageSolutionsImage from './uploads/category/cover/DISPOSABLE_ITEMS.jpg';
import cleaningSuppliesImage from './uploads/category/cover/HOME_FURNISHING.jpg';


const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const items = [
        { id: 1, name: 'Meharban Ghee 794g', category: 'dairy-eggs', subcategories: 'butter-margarine', price: 11.99, tott: 'each', image: '/uploads/product/logo/meharban_ghee.jpeg' },
        { id: 2, name: 'AL RAYAN EXTRA LONG BASMATI RICE', category: 'grocery', subcategories: 'rice-grains', price: 25.00, tott: '2Bags/20lb', image: '/uploads/product/logo/AL_RAYAN_EXTRA_LONG_GRAIN_BASMATI_RICE.jpg' },
        { id: 3, name: 'Idaho Potato Bag (5lb)', category: 'fruits-vegetable', subcategories: 'fresh-vegetables', price: 2.99, tott: 'each Bag', image: '/uploads/product/logo/Idaho_Potato_Bag.png' },
        { id: 4, name: 'YUMZY NOODLES CHICKEN FLAVOR', category: 'grocery', subcategories: 'noodle-pasta-shemai', price: 5.00, tott: '3 Pack', image: '/uploads/product/logo/YUMZY-CHICKENNOODLES-8PK.jpg' },
        { id: 5, name: 'Maggi Soup', category: 'grocery', subcategories: 'noodle-pasta-shemai', price: 5.00, tott: '3 PCS', image: '/uploads/product/logo/Maggi_Soup.png' },
        { id: 6, name: 'Regular Whole Chicken 4lb', category: 'fresh-meat', subcategories: 'chicken', price: 10.99, tott: 'each', image: '/uploads/product/logo/Regular Whole Chicken.jpeg' }, 
        { id: 7, name: 'Chicken Quarter Leg (No Cut No Clean)', category: 'fresh-meat', subcategories: 'chicken', price: 1.49, tott: 'lb', image: '/uploads/product/logo/Chicken_Quarter_Leg.jpeg' },
        { id: 8, name: 'Frozen Whole Baby Goat', category: 'fresh-meat', subcategories: 'mutton-goat', price: 29.99, tott: '5 lb', image: '/uploads/product/logo/Frozen_Whole_Baby_Goat.png' },
        { id: 9, name: 'Frozen Baby Goat Precut', category: 'fresh-meat', subcategories: 'mutton-goat', price: 5.99, tott: 'lb', image: '/uploads/product/logo/Frozen Baby Goat Precut.jpeg' },
        { id: 10, name: 'Beef Precut', category: 'frozen-food', subcategories: 'frozen-beef-mutton-lamb', price: 4.49, tott: 'lb', image: '/uploads/product/logo/Beef_Precut.png' },
        { id: 11, name: 'Hi 5 Wafer', category: 'bakery-snacks', subcategories: 'cookies-biscuit', price: 5.00, tott: '3 PCS', image: '/uploads/product/logo/Hi_5_Wafer.png' },
        { id: 12, name: 'Regular Gallon Milk', category: 'dairy-eggs', subcategories: 'milk-cream', price: 3.99, tott: 'each', image: '/uploads/product/logo/regular_milk.jpeg' },
        { id: 13, name: 'Hilash 10/12 size', category: 'fish', subcategories: 'frozen-fish', price: 29.99, tott: 'each', image: '/uploads/product/logo/Hilsha_r3zE12O.jpg' },
        { id: 14, name: 'Hilsha 8/10', category: 'fish', subcategories: 'frozen-fish', price: 14.99, tott: 'each', image: '/uploads/product/logo/Hilsha_r3zE12O.jpg' },
        { id: 15, name: 'Rohu 3 KG', category: 'fish', subcategories: 'frozen-fish', price: 30.00, tott: '2 PCS', image: '/uploads/product/logo/rohu_fish__29636.jpg' },
        { id: 16, name: 'Rajdhani Mustard Oil 2TR 100% Natural', category: 'grocery', subcategories: 'oil-ghee-dalda', price: 7.99, tott: 'each', image: '/uploads/product/logo/Rajdhani-Mustard-Oil-Group_PqPDecF.png' },
        { id: 17, name: 'Rajdhani Mustard Oil 5LTR 100% Natural', category: 'grocery', subcategories: 'oil-ghee-dalda', price: 14.99, tott: 'each', image: '/uploads/product/logo/Rajdhani-Mustard-Oil-Group_PqPDecF.png' },
        { id: 18, name: 'AL RAYAN BASMATI RICE 20 lb', category: 'grocery', subcategories: 'rice-grains', price: 18.99, tott: 'each', image: '/uploads/product/logo/Al-Rayan_20lb.jpg' },
        { id: 19, name: 'SHAHJALAL BASMATI RICE (20 LB)', category: 'grocery', subcategories: 'rice-grains', price: 19.99, tott: 'each', image: '/uploads/product/logo/SHAHJALAL.jpeg' },
        { id: 20, name: 'DELTA STAR RICE 50lb ( limit only 1)', category: 'grocery', subcategories: 'rice-grains', price: 37.99, tott: '50lb', image: '/uploads/product/logo/images_2.jpg' },
        { id: 21, name: 'Broccoli', category: 'fruits-vegetable', subcategories: 'fresh-vegetables', price: 2.99, tott: 'lb', image: '/uploads/product/logo/Broccoli.jpg' },
        { id: 22, name: 'TELAPIA FILLET', category: 'fish', subcategories: 'fish-fille', price: 3.49, tott: 'lb', image: '/uploads/product/logo/TELAPIA_FILLET.jpg' },
        { id: 23, name: 'Fresh Garlic', category: 'fruits-vegetable', subcategories: 'fresh-vegetables', price: 5.00, tott: '3 pack', image: '/uploads/product/logo/Fresh-Normal-White-Garlic-of-2018.jpg' },
        { id: 24, name: 'Rehmat-e-Shereen Almond Chocolate Cookies', category: 'bakery-snacks', subcategories: 'cookies-biscuit', price: 3.99, tott: 'each', image: '/uploads/product/logo/HelloIMG1722201335960.jpeg' },
        { id: 25, name: 'Rehmat-e-Shereen Black Seed Cookies', category: 'bakery-snacks', subcategories: 'cookies-biscuit', price: 3.99, tott: 'each', image: '/uploads/product/logo/rehmat_e_shereem_black_seed_cookies_8QHKbHK.jpeg' },
        { id: 26, name: 'Rehmat-e-Shereen Black Seed Cookies', category: 'bakery-snacks', subcategories: 'cookies-biscuit', price: 3.99, tott: 'each', image: '/uploads/product/logo/rehmat_e_shereem_black_seed_cookies_8QHKbHK.jpeg' },
        { id: 27, name: 'Rehmat-e-Shereen Checker Cookies', category: 'bakery-snacks', subcategories: 'cookies-biscuit', price: 3.99, tott: 'each', image: '/uploads/product/logo/Rehmat-e-Shereen Checker Cookies.jpeg' },
        { id: 28, name: 'Rehmat-e-Shereen Bakar Khanni', category: 'bakery-snacks', subcategories: 'sweets-desserts', price: 3.99, tott: 'each', image: '/uploads/product/logo/123.jpeg' },
        { id: 29, name: 'Rehmat-e-Shereen Cumin Cookies', category: 'bakery-snacks', subcategories: 'cookies-biscuit', price:3.99 , tott:'/each',  image: '/uploads/product/logo/rehmat_e_shereen_cumin_cookies.jpeg' },
        { id: 30, name: 'United King Chocolate Delight Butter Biscuits', category: 'bakery-snacks', subcategories: 'cookies-biscuit', price:3.49 , tott:'/each',  image: '/uploads/product/logo/united_king_chocolate_delight_butter_biscuits.jepg' },
        { id: 31, name: 'United King Mix Butter Biscuits', category: 'bakery-snacks', subcategories: 'cookies-biscuit', price:3.49 , tott:'/each',  image: '/uploads/product/logo/united_king_mix_butter_biscuits.jpg' },
        { id: 32, name: 'United King Roasted Almond Nan Khataee', category: 'bakery-snacks', subcategories: 'cookies-biscuit', price:4.99 , tott:'/each',  image: '/uploads/product/logo/united_king_roasted_almond_nan_khataee.jpg' },
        { id: 33, name: 'Jazaa Nan Khatai', category: 'bakery-snacks', subcategories: 'cookies-biscuit', price:3.99 , tott:'/each',  image: '/uploads/product/logo/jazaa_nan_khatai.jpeg' },
        { id: 34, name: 'Fresh Food Round Cinnamon Sticks', category: 'grocery', subcategories: 'masala-spices', price:10.49 , tott:'/each (14oz)',  image: '/uploads/product/logo/fresh_food_round_cinnamon_sticks_14_oz.jpg' },
        { id: 35, name: 'Fresh Food Flat Cinnamon Stick', category: 'grocery', subcategories: 'masala-spices', price:6.49 , tott:'/each (7oz)',  image: '/uploads/product/logo/fresh_food_flat_cinnamon_sticks_7oz.jpg' },
        { id: 36, name: 'EGN Flat Cinnamon Sticks', category: 'grocery', subcategories: 'masala-spices', price:10.49 , tott:'/each (14oz)',  image: '/uploads/product/logo/egn_flat_cinnamon_sticks_7oz_zq4yddE.jpeg' },
        { id: 37, name: 'EGN Flat Cinnamon Sticks', category: 'grocery', subcategories: 'masala-spices', price:5.49 , tott:'/each (7oz)',  image: '/uploads/product/logo/egn_flat_cinnamon_sticks_7oz_zq4yddE.jpeg' },
        { id: 38, name: 'Hoque & Sons Flat Cinnamon Sticks', category: 'grocery', subcategories: 'masala-spices', price:4.49 , tott:'/each (3.5oz)',  image: '/uploads/product/logo/hoque_and_sons_cinamon_sticks.jpeg' },
        { id: 39, name: 'Swad Whole Cashews', category: 'grocery', subcategories: 'dried-fruit-nuts', price:30.99 , tott:'/each (3lb)',  image: '/uploads/product/logo/swad_whole_cashews_3lb.jpeg' },
        { id: 40, name: 'Laxmi Castor Oil', category: 'grocery', subcategories: 'oil-ghee-dalda', price:6.99 , tott:'/each (17oz)',  image: '/uploads/product/logo/swad_whole_cashews_3lb.jpeg' },
        { id: 41, name: 'Goya Mojo Criollo Marinade', category: 'grocery', subcategories: 'oil-ghee-dalda', price:4.99 , tott:'/each (725ml)',  image: '/uploads/product/logo/goya_moja_criollo_marinade.jpg' },
        { id: 42, name: 'Three Rivers Mustard Oil', category: 'grocery', subcategories: 'oil-ghee-dalda', price:8.99 , tott:'/each (1000ml)',  image: '/uploads/product/logo/three_rivers_mustard_oil_1000_ml.jpeg' },
        { id: 43, name: 'Skippy Super Chunk Peanut Butter', category: 'breakfast', subcategories: 'jam-jelly-spreads', price:10.99 , tott:'/each (3lb)',  image: '/uploads/product/logo/skippy_extra_crunchy_peanut_butter_3lb.jpeg' },
        { id: 44, name: 'Swad Rice Flour', category: 'grocery', subcategories: 'flour-atta-suji', price:4.99 , tott:'/each (4lb)',  image: '/uploads/product/logo/swad_rice_flour_4lb.jpeg' },
        { id: 45, name: 'Goya Canilla Rice', category: 'grocery', subcategories: 'rice-grains', price: 19.99, tott:'/each (20lb)',  image: '/uploads/product/logo/goya_canilla_rice_20_lb.jpeg' },
        { id: 46, name: 'Laxmi Rice Flour', category: 'grocery', subcategories: 'flour-atta-suji', price:8.99 , tott:'/each (10lb)',  image: '/uploads/product/logo/laxmi_rice_flour_10lb.jpg' },
        { id: 47, name: 'Shahzada Extra Long Basmati Rice', category: 'grocery', subcategories: 'rice-grains', price:5.99 , tott:'/each (2lb)',  image: '/static/img/placeholder.png' },
        { id: 48, name: 'Elephant Brand Sanpatong Sweet Rice', category: 'grocery', subcategories: 'rice-grains', price:8.99 , tott:'/each (5lb)',  image: '/uploads/product/logo/elephant_brand_sanpatong_sweet_rice_5lb.jpeg' },
        { id: 49, name: 'Fresh Food Sweet Rice', category: 'grocery', subcategories: 'rice-grains', price:10.99 , tott:'/each (4lb)',  image: '/static/img/placeholder.png' },
        { id: 50, name: 'Deshi Distributors Sweet Rice', category: 'grocery', subcategories: 'rice-grains', price:5.99 , tott:'/each (2lb)',  image: '/static/img/placeholder.png' },
        { id: 51, name: 'Fresh Food Sweet Rice', category: 'grocery', subcategories: 'rice-grains', price:5.99 , tott:'/each (2lb)',  image: '/static/img/placeholder.png' },
        { id: 52, name: 'Fresh Food Dinajpuri Aromatic Chinigura', category: 'grocery', subcategories: 'rice-grains', price:17.99 , tott:'/each (10lb)',  image: '/uploads/product/logo/fresh_food_dinajpuri_aromatic_chinigura_rice.jpeg' },
        { id: 53, name: 'Ovijat Aromatic Kalijeera Rice', category: 'grocery', subcategories: 'rice-grains', price:20.99 , tott:'/each (4.54lb)',  image: '/uploads/product/logo/ovijat_aromatic_kalijeera_rice.jpeg' },
        { id: 54, name: 'Ritesh Long Grain Basmati Rice', category: 'grocery', subcategories: 'rice-grains', price:15.99 , tott:'/each (10lb)',  image: '/uploads/product/logo/ritesh_long_grain_basmati_rice.jpeg' },
        { id: 55, name: 'Ovijat Chinigura Aromatic Rice', category: 'grocery', subcategories: 'rice-grains', price:10.99 , tott:'/each (4.4lb)',  image: '/uploads/product/logo/ovijat_chinigura_aromatic_rice_4.4_lb.jpeg' },
        { id: 56, name: 'Ameen Classic Extra Long Basmati Rice', category: 'grocery', subcategories: 'rice-grains', price:12.99 , tott:'/each (10lb)',  image: '/uploads/product/logo/ameen_classic_extra_long_basmati_rice_10_lb.jpg' },
        { id: 57, name: 'Putul Aromatic Kalijira Rice', category: 'grocery', subcategories: 'rice-grains', price:15.99 , tott:'/each (10lb)',  image: '/uploads/product/logo/putul_aromatic_kalijira_rice.jpeg' },
        { id: 58, name: 'Jamuna Brand Aromatic Kalijeera Rice', category: 'grocery', subcategories: 'rice-grains', price:18.99 , tott:'/each (10lb)',  image: '/uploads/product/logo/jamuna_brand_kalijeera_rice_10lb.jpg' },
        { id: 59, name: 'Krishok Aromatic Kalizira Rice', category: 'grocery', subcategories: 'rice-grains', price:20.99 , tott:'/each (10lb)',  image: '/uploads/product/logo/krishok_aromatic_kalijeera_rice.jpeg' },
        { id: 60, name: 'Shahjalal Butter Toast', category: 'bakery-snacks', subcategories: 'cookies-biscuit', price:3.49 , tott:'/each',  image: '/uploads/product/logo/butter_toast1-265x265_1.jpeg' },
        { id: 61, name: 'Shahjalal Ghee Toast', category: 'bakery-snacks', subcategories: 'cookies-biscuit', price:3.49 , tott:'/each',  image: '/uploads/product/logo/ghee_toast.jpeg' },
        { id: 62, name: 'National Cornflour', category: 'grocery', subcategories: 'flour-atta-suji', price:2.99 , tott:'/each 300g',  image: '/uploads/product/logo/00620514013084.jpg' },
        { id: 63, name: 'National Chatkharaydaar Sabzi', category: 'grocery', subcategories: 'masala-spices', price:2.49 , tott:'/each',  image: '/uploads/product/logo/Chatkharaydar-Sabzi-3D-min.jpeg' },
        { id: 64, name: 'National Fried Fish Masala', category: 'grocery', subcategories: 'masala-spices', price:2.49 , tott:'/each',  image: '/uploads/product/logo/71ZGJ74BZ9S.jpg' },
        { id: 65, name: 'EGN Round Cinnamon', category: 'grocery', subcategories: 'masala-spices', price:10.99 , tott:'/each',  image: '/uploads/product/logo/s-l1600.jpeg' },
        { id: 66, name: 'Shan Black Pepper Powder', category: 'grocery', subcategories: 'masala-spices', price:3.49 , tott:'/each',  image: '/uploads/product/logo/black-pepper-powder-1.jpeg' },
        { id: 67, name: 'Shan Ginger Powder 100g', category: 'grocery', subcategories: 'masala-spices', price:4.49 , tott:'/each',  image: '/uploads/product/logo/Shan-Ginger-Powder-100-g_23cd7f14-9d2e-4acc-ae2b-c435fe953798.a4d2f741a358_UuHBy8u.jpeg' },
        { id: 68, name: 'Shan Turmeric PowdEr 200g', category: 'grocery', subcategories: 'masala-spices', price:3.49 , tott:'/each',  image: '/uploads/product/logo/s-l400_ocBjAkc.jpg' },
        { id: 69, name: 'Shan Red Chilli Powder', category: 'grocery', subcategories: 'masala-spices', price:5.99 , tott:'/each',  image: '/uploads/product/logo/716QeitqN5L.jpg' },
        { id: 70, name: 'Shan Turmeric Powder 400g', category: 'grocery', subcategories: 'masala-spices', price:4.99 , tott:'/each',  image: '/uploads/product/logo/s-l400_ocBjAkc.jpg' },
        { id: 71, name: 'Shan Cumin 400g', category: 'grocery', subcategories: 'masala-spices', price:6.99 , tott:'/each',  image: '/uploads/product/logo/SHANCUMINPOWDER_1200x1200.jpeg' },
        { id: 72, name: 'Regal Coconut Pound Cake', category: 'bakery-snacks', subcategories: 'cake-muffins', price:3.99 , tott:'/each',  image: '/uploads/product/logo/regal_pound_cake.jpeg' },
        { id: 73, name: 'KCB Laziz Nimko Boondi', category: 'bakery-snacks', subcategories: 'cookies-biscuit', price:3.99 , tott:'/each',  image: '/uploads/product/logo/DSC00160-Edit_580x.jpeg' },
        { id: 74, name: 'KCB Karachi Fruit Biscuits', category: 'bakery-snacks', subcategories: 'cookies-biscuit', price:2.99 , tott:'/each',  image: '/uploads/product/logo/DSC00224-Edit_580x_ADP8e8B.jpeg' },
        { id: 75, name: 'KCB Karachi Fruit Biscuits', category: 'bakery-snacks', subcategories: 'cookies-biscuit', price:2.99 , tott:'/each',  image: '/uploads/product/logo/DSC00224-Edit_580x_ADP8e8B.jpeg' },
        { id: 76, name: 'Regal Puff Pastry Twist', category: 'bakery-snacks', subcategories: 'sweets-desserts', price:4.49 , tott:'/each',  image: '/uploads/product/logo/puff_pastry_twist-1.jpg' },
        { id: 77, name: 'Tea Time Masala Para', category: 'bakery-snacks', subcategories: 'chips-snacks', price:4.99 , tott:'/each',  image: '/uploads/product/logo/153250956720180611_173351_500X500-800x800.jpg' },
        { id: 78, name: 'Regal Strawberry Snack Cakes', category: 'bakery-snacks', subcategories: 'cake-muffins', price:3.49 , tott:'/each',  image: '/uploads/product/logo/regal-regal-classic-strawberry-snack-cakes-250g_5027738014043_Mustakshif.jpg' },
        { id: 79, name: 'Regal Choco & Honey', category: 'bakery-snacks', subcategories: 'cake-muffins', price:3.49 , tott:'/each',  image: '/uploads/product/logo/Regal-Choc-And-Honey-Snack-Cakes-250g.jpg' },
        { id: 80, name: 'Regal Milk Cakes', category: 'bakery-snacks', subcategories: 'cake-muffins', price:3.49 , tott:'/each',  image: '/uploads/product/logo/432726011_0_640x640_74bcf817-4b79-4bcc-a37c-035fe8c709c7.jpeg' },
        { id: 81, name: 'Tiffin Cake Rusk', category: 'bakery-snacks', subcategories: 'cookies-biscuit', price:1.00 , tott:'/each box',  image: '/uploads/product/logo/tiffin_cake_rusk.jpeg' },
        { id: 82, name: 'Bisconni Chai Wala Biskut', category: 'bakery-snacks', subcategories: 'cookies-biscuit', price:1.00 , tott:'/each box',  image: '/uploads/product/logo/bisconni_chai_wala_biskut.jpg' },
        { id: 83, name: 'Cortas Falafel Powder', category: 'grocery', subcategories: 'masala-spices', price:3.99 , tott:'/each(7oz)',  image: '/uploads/product/logo/Cortas_Falafel_Powder.jpeg' },
        { id: 84, name: 'Laziza Yakhni Pulao', category: 'grocery', subcategories: 'masala-spices', price:2.99 , tott:'/each(100g)',  image: '/uploads/product/logo/laziza_yakhni_pulao.jpeg' },
        { id: 85, name: 'KCB Coconut Biscuits', category: 'bakery-snacks', subcategories: 'cookies-biscuit', price:6.99 , tott:'/each',  image: '/uploads/product/logo/kcb_badam_coconut_biscuits_1_1400x.jpeg' },
        { id: 86, name: 'KCB Kalonji Biscuits 20oz', category: 'bakery-snacks', subcategories: 'cookies-biscuit', price:7.49 , tott:'/each',  image: '/uploads/product/logo/DSC00219-Edit_360x.jpeg' },
        { id: 87, name: '2x4 Frozen Shrimp', category: 'fish', subcategories: 'frozen-fish', price:29.99 , tott:'/each(2lb)',  image: '/uploads/product/logo/1813e6_c1ad31162c854a1ca7cc1c36726ee323mv2.jpeg' },
        { id: 88, name: 'KCB Cake Rusk Vegetarian 8oz', category: 'bakery-snacks', subcategories: 'cookies-biscuit', price:3.99 , tott:'/each',  image: '/uploads/product/logo/s599730797189284667_p2099_i1_w640.jpeg' },
        { id: 89, name: 'KCB Special Cake Rusk 8oz', category: 'bakery-snacks', subcategories: 'cookies-biscuit', price:3.99 , tott:'/each',  image: '/uploads/product/logo/KCB_Special_Cake_Rusk_Snacks_800x_c20ec58f-3c3d-4cb0-aeea-3bab998dc08b_487x.jpeg' },
        { id: 90, name: 'KCB Cake Rusk Fruit 8oz', category: 'bakery-snacks', subcategories: 'cookies-biscuit', price:3.99 , tott:'/each',  image: '/uploads/product/logo/KCBCakerusk226g.jpg' },
        { id: 91, name: 'Cake Rusk No Sugar 8oz', category: 'bakery-snacks', subcategories: 'cookies-biscuit', price:3.99 , tott:'/each',  image: '/uploads/product/logo/1643064313-kcb-cake-rusk-no-sugar-added-vegetarian.jpg' },
        { id: 92, name: 'Spice It Meat Tenderizer', category: 'grocery', subcategories: 'masala-spices', price:2.49 , tott:'/each(7oz)',  image: '/uploads/product/logo/IMG_8583.jpeg' },
        { id: 93, name: 'Cake Rusk Fennel Seeds', category: 'bakery-snacks', subcategories: 'cookies-biscuit', price:3.99 , tott:'/each',  image: '/uploads/product/logo/DSC01943-Edit_1024x10242x.jpeg' },
        { id: 94, name: 'Badia Complete Seasoning', category: 'grocery', subcategories: 'masala-spices', price:5.99 , tott:'/each(12oz)',  image: '/uploads/product/logo/IMG_8582.jpeg' },
        { id: 95, name: 'Laziza Paya Masala', category: 'grocery', subcategories: 'masala-spices', price:2.99 , tott:'/each (100g)',  image: '/uploads/product/logo/IMG_8573.jpeg' },
        { id: 96, name: 'Laziza Tandoori Masala', category: 'grocery', subcategories: 'masala-spices', price:2.99 , tott:'/each (100g)',  image: '/uploads/product/logo/IMG_8572.jpeg' },
        { id: 97, name: 'Laziza Karahi/Fry Meat', category: 'grocery', subcategories: 'masala-spices', price:2.99 , tott:'/each (90gm)',  image: '/uploads/product/logo/IMG_8571.jpeg' },
        { id: 98, name: 'Laziza Nehari Masala', category: 'grocery', subcategories: 'masala-spices', price:2.99 , tott:'/each (100gm)',  image: '/uploads/product/logo/IMG_8570.jpeg' },
        { id: 99, name: 'Laziza Chicken Tikka Masala', category: 'grocery', subcategories: 'masala-spices', price:2.99 , tott:'/each (100gm)',  image: '/uploads/product/logo/IMG_8569.jpeg' },
        { id: 100, name: 'Apricot Paste', category: 'breakfast', subcategories: 'jam-jelly-spreads', price:6.99 , tott:'/each',  image: '/uploads/product/logo/59310362-4839-423f-96c3-1576e5ca7087.a874139c95d37c93fd5f0ba1c27fdf5c.jpeg' },
        { id: 101, name: 'Laziza Zafrani Bombay Biryani Masala', category: 'grocery', subcategories: 'masala-spices', price:2.99 , tott:'/each',  image: '/uploads/product/logo/IMG_8568.jpeg' },
        { id: 102, name: 'Apricot Preserves', category: 'breakfast', subcategories: 'jam-jelly-spreads', price:4.49 , tott:'/each',  image: '/uploads/product/logo/7426501154-scaled-e1678810948372.jpg' },
        { id: 103, name: 'Fig Preserves', category: 'breakfast', subcategories: 'jam-jelly-spreads', price:4.49 , tott:'/each',  image: '/uploads/product/logo/A0921.jpg' },
        { id: 104, name: 'Sour Cherry Preserves', category: 'breakfast', subcategories: 'jam-jelly-spreads', price:4.49 , tott:'/each',  image: '/uploads/product/logo/7426501156-scaled-e1678811114926.jpg' },
        { id: 105, name: 'Strawberry Preserves', category: 'breakfast', subcategories: 'jam-jelly-spreads', price:4.49 , tott:'/each',  image: '/uploads/product/logo/7426501158-scaled-e1678810992845.jpg' },
        { id: 106, name: 'Ajwa Dates', category: 'grocery', subcategories: 'dried-fruit-nuts', price:10.49 , tott:'/each',  image: '/uploads/product/logo/71z5TRJragL.jpg' },
        { id: 107, name: 'Mr. Nut Medjool Dates', category: 'grocery', subcategories: 'dried-fruit-nuts', price:15.99 , tott:'/each',  image: '/uploads/product/logo/76170263_1__77501.jpg' },
        { id: 108, name: 'Pran Wafer Milk', category: 'bakery-snacks', subcategories: 'cookies-biscuit', price:1.99 , tott:'/each',  image: '/uploads/product/logo/pran-crunchy-wafer-biscuit-vanilla-150gm.jpg' },
        { id: 109, name: 'Pran Wafer Strawberry', category: 'bakery-snacks', subcategories: 'cookies-biscuit', price:1.99 , tott:'/each',  image: '/uploads/product/logo/product-zSxwrQCyC-ysDe9GVly_C-0.jpg' },
        { id: 110, name: 'Laziza Chicken Masala', category: 'grocery', subcategories: 'masala-spices', price:2.99 , tott:'/each(100gm)',  image: '/uploads/product/logo/IMG_8567.jpeg' },
        { id: 111, name: 'Pani Poori', category: 'grocery', subcategories: 'canned-and-packed-food', price:3.49 , tott:'/each',  image: '/uploads/product/logo/61BCd5KzcdL.jpg' },
        { id: 112, name: 'Laziza Sindhi Biryani', category: 'grocery', subcategories: 'masala-spices', price:2.99 , tott:'/each',  image: '/uploads/product/logo/IMG_8566.jpeg' },
        { id: 113, name: 'AL RAYAN EXTRA LONG BASMATI RICE', category: 'grocery', subcategories: 'rice-grains', price: 12.99, tott: '/each 10lb', image: '/uploads/product/logo/AL_RAYAN_EXTRA_LONG_GRAIN_BASMATI_RICE.jpg' },
        { id: 114, name: 'Chicken Quarter Leg (No Cut No Clean)', category: 'fresh-meat', subcategories: 'chicken', price: 2.98, tott: '2lb', image: '/uploads/product/logo/Chicken_Quarter_Leg.jpeg' },
        { id: 115, name: 'SWAD WHOLE CASHEWS ( 28 oz)', category: 'grocery', subcategories: 'dried-fruit-nuts', price:15.99 , tott:'/each',  image: '/uploads/product/logo/20180605_143441.jpg' },
        { id: 116, name: 'SWAD WHOLE CASHEWS 28OZ', category: 'grocery', subcategories: 'dried-fruit-nuts', price:16.99 , tott:'/each',  image: '/uploads/product/logo/download_3_9x3hcI9.jpg' },
        { id: 117, name: 'SWAD WHOLE CASHEWS 14 OZ', category: 'grocery', subcategories: 'dried-fruit-nuts', price:9.99 , tott:'/each',  image: '/uploads/product/logo/Cashews_Whole_14oz.jpg' },
        { id: 118, name: 'SWAD RICE FLOUR 4LB', category: 'grocery', subcategories: 'flour-atta-suji', price:4.99 , tott:'/each',  image: '/uploads/product/logo/1.jpeg' },
        { id: 119, name: 'SWAD RICE FLOUR 2LB', category: 'grocery', subcategories: 'flour-atta-suji', price:3.49 , tott:'/each',  image: '/uploads/product/logo/2.jpeg' },
        { id: 120, name: 'SWAD RICE FLOUR10LB', category: 'grocery', subcategories: 'flour-atta-suji', price:9.99 , tott:'/each ',  image: '/uploads/product/logo/3.jpeg' },
        { id: 121, name: 'LAXMI RICE FLOUR 2LB', category: 'grocery', subcategories: 'flour-atta-suji', price:2.99 , tott:'/each',  image: '/uploads/product/logo/11.jpg' },
        { id: 122, name: 'LAXMI RICE FLOUR 4LB', category: 'grocery', subcategories: 'flour-atta-suji', price:8.49 , tott:'/each',  image: '/uploads/product/logo/22.jpg' },
        { id: 123, name: 'ZIyad Apricot Preserves', category: 'breakfast', subcategories: 'jam-jelly-spreads', price:4.49 , tott:'/each',  image: '/uploads/product/logo/ziyad_apricot_preserves.jpg' },
        { id: 124, name: 'Ziyad Sour Cherry Preserves', category: 'breakfast', subcategories: 'jam-jelly-spreads', price:4.49 , tott:'/each (13.4oz)',  image: '/uploads/product/logo/ziyad_sour_cherry_preserves.jpg' },
        { id: 125, name: 'Ziyad Fig Preserves', category: 'breakfast', subcategories: 'jam-jelly-spreads', price:4.49 , tott:'/each(13.4oz)',  image: '/uploads/product/logo/ziyad_fig_preserves.jpg' },
        { id: 126, name: 'REGAL STRAWBERRY SNACK CAKES', category: 'bakery-snacks', subcategories: 'cake-muffins', price:3.99 , tott:'/each',  image: '/uploads/product/logo/REGAL_STRAWBERRY_SNACK_CAKE.jpeg' },
        { id: 127, name: 'REGAL CHOCO & HONEY SNACK CAKE', category: 'bakery-snacks', subcategories: 'cake-muffins', price:3.49 , tott:'/each',  image: '/uploads/product/logo/REGAL_CHOCO__HONEY_SNACK_CAKE.jpg' },
        { id: 128, name: 'REGAL CHOCO & HONEY CAKES (10 PCS)', category: 'bakery-snacks', subcategories: 'cake-muffins', price:2.99 , tott:'/each',  image: '/uploads/product/logo/bis.jpg2019-07-24_17_45_00_pm.jpg' },
        { id: 129, name: 'BISCONNI CHAI WALA BISKUT 3.527 oz', category: 'bakery-snacks', subcategories: 'cookies-biscuit', price:0.99 , tott:'/each box',  image: '/uploads/product/logo/CW-Rs-5-Wrapper-3d.png' },
        { id: 130, name: 'KCB CAKE RUSK Fennel Seeds 20oz', category: 'bakery-snacks', subcategories: 'cookies-biscuit', price:6.99 , tott:'/each',  image: '/uploads/product/logo/images_1_k3ENCar.jpg' },
        { id: 131, name: 'KCB CAKE RUSK Fennel Seeds 25oz', category: 'bakery-snacks', subcategories: 'cookies-biscuit', price:5.99 , tott:'/each',  image: '/uploads/product/logo/images_1_hve2Bmz.jpg' },
        { id: 132, name: 'AL AJWA DATES', category: 'grocery', subcategories: 'dried-fruit-nuts', price:16.99 , tott:'/each',  image: '/uploads/product/logo/AL_AJWA_DATES.jpg' },
        { id: 133, name: 'Ajwa Dates Bakarat Foods', category: 'grocery', subcategories: 'dried-fruit-nuts', price:17.99 , tott:'/each',  image: '/uploads/product/logo/Ajwa_Dates_Bakarat_Foods.jpg' },
        
        { id: 134, name: 'Laziza Ras Malai Mix', category: 'grocery', subcategories: 'color-essences-baking', price:2.99 , tott:'/each (75gm)',  image: '/uploads/product/logo/IMG_8553.jpeg' },
        { id: 135, name: 'Laziza Firni Khas', category: 'grocery', subcategories: 'color-essences-baking', price:2.99 , tott:'/each (150g)',  image: '/uploads/product/logo/IMG_8552.jpeg' },
        { id: 136, name: 'Super Fresh Rice Flour 4lb', category: 'grocery', subcategories: 'flour-atta-suji', price:3.49 , tott:'/each',  image: '/uploads/product/logo/s-l1200.jpeg' },
        { id: 137, name: 'Laziza Jelly Falooda Mix', category: 'grocery', subcategories: 'color-essences-baking', price:2.99 , tott:'/each(8.28oz)',  image: '/uploads/product/logo/IMG_8551.jpeg' },
        { id: 138, name: 'Marina Strawberry Cake Mix', category: 'bakery-snacks', subcategories: 'cake-muffins', price:4.49 , tott:'/each',  image: '/uploads/product/logo/0644209411856_2_A1C1_1200.jpeg' },
        { id: 139, name: 'Marina Chocolate Mix Cake', category: 'bakery-snacks', subcategories: 'cake-muffins', price:4.49 , tott:'/each',  image: '/uploads/product/logo/images_msxpE1g.jpeg' },
        { id: 140, name: 'Pran Mejbani Beef Masala', category: 'grocery', subcategories: 'masala-spices', price:2.49 , tott:'/each(100gm)',  image: '/uploads/product/logo/IMG_8550.jpeg' },
        { id: 141, name: 'Pran Butter Chicken Masala', category: 'grocery', subcategories: 'masala-spices', price:2.49 , tott:'/each (100g)',  image: '/uploads/product/logo/IMG_8549.jpeg' },
        { id: 142, name: 'Laxmi Besan Flour', category: 'grocery', subcategories: 'flour-atta-suji', price:4.49  , tott:'/each',  image: '/uploads/product/logo/laxmi_besan_2lb.jpeg' },
        { id: 143, name: 'Pran Haleem Masala', category: 'grocery', subcategories: 'masala-spices', price:2.49 , tott:'/each(100g)',  image: '/uploads/product/logo/IMG_8548.jpeg' },
        { id: 144, name: 'Radhuni Fish Curry Masala', category: 'grocery', subcategories: 'masala-spices', price:1.99  , tott:'/each',  image: '/uploads/product/logo/IMG_8547.jpeg' },
        { id: 145, name: 'Goya All Purpose Flour', category: 'grocery', subcategories: 'flour-atta-suji', price:3.49 , tott:'/each',  image: '/uploads/product/logo/harina-de-trigo-milano-5-lb.jpeg' },
        { id: 146, name: 'Radhuni Fried Chicken Mix', category: 'grocery', subcategories: 'masala-spices', price:1.99  , tott:'/each(75g)',  image: '/uploads/product/logo/IMG_8546.jpeg' },
        { id: 147, name: 'Three Rivers Besan', category: 'grocery', subcategories: 'flour-atta-suji', price:6.99 , tott:'/each',  image: '/uploads/product/logo/3168.jpeg' },
        { id: 148, name: 'Pran Bombay Biryani Masala', category: 'grocery', subcategories: 'masala-spices', price:2.49 , tott:'/each',  image: '/uploads/product/logo/IMG_8545.jpeg' },
        { id: 149, name: 'Meharban Besan Flour 4lb', category: 'grocery', subcategories: 'flour-atta-suji', price:6.49  , tott:'/each 4lb',  image: '/uploads/product/logo/41hV8EnshYL._SR600315_PIWhiteStripBottomLeft035_SCLZZZZZZZ_FMpng_BG255255255.jpeg' },
        { id: 150, name: 'Pran Achar Gosht Masala', category: 'grocery', subcategories: 'masala-spices', price:1.99  , tott:'/each(1.76 oz)',  image: '/uploads/product/logo/IMG_8544.jpeg' },
        { id: 151, name: 'Roshni Light Red Kidney Beans', category: 'grocery', subcategories: 'dal-lentils-beans', price:8.49  , tott:'/each 4lb',  image: '/uploads/product/logo/81INomfyOdL_1200x1200_crop_center.jpeg' },
        { id: 152, name: 'Essential Kheer Mix', category: 'grocery', subcategories: 'color-essences-baking', price:2.99  , tott:'/ Each',  image: '/uploads/product/logo/81INomfyOdL_1200x1200_crop_center.jpeg' },
        { id: 153, name: 'Bansi Soya Chunks', category: 'grocery', subcategories: 'dal-lentils-beans', price:3.49 , tott:'/each',  image: '/uploads/product/logo/images_2.jpeg' },
        { id: 154, name: 'Swad Corn Grit', category: 'grocery', subcategories: 'dal-lentils-beans', price:3.49 , tott:'/each',  image: '/uploads/product/logo/SCG..jpeg' },
        { id: 155, name: 'Laziza Firni', category: 'grocery', subcategories: 'color-essences-baking', price:2.99  , tott:'/each(300g)',  image: '/uploads/product/logo/IMG_8539.jpeg' },
        { id: 156, name: 'Hoque Moong Dal 7lb', category: 'grocery', subcategories: 'dal-lentils-beans', price:13.49  , tott:'/each',  image: '/uploads/product/logo/hoque_moong_dal.jpeg' },
        { id: 157, name: 'Laziza Banana Custard Powder', category: 'grocery', subcategories: 'color-essences-baking', price:3.49 , tott:'/each',  image: '/uploads/product/logo/IMG_8538.jpeg' },
        { id: 158, name: 'Dominican Mango', category: 'fruits-vegetable', subcategories: 'fresh-fruits', price:2.99  , tott:'/each',  image: '/uploads/product/logo/dominican_mango.jpeg' },
        { id: 159, name: 'Kent Mango', category: 'fruits-vegetable', subcategories: 'fresh-fruits', price:2.99 , tott:'/each',  image: '/uploads/product/logo/kent_mangi.jpeg' },
        { id: 160, name: 'Laziza Pistachio Custard Powder', category: 'grocery', subcategories: 'color-essences-baking', price:3.49 , tott:'/each',  image: '/uploads/product/logo/IMG_8537.jpeg' },
        { id: 161, name: 'Pran Mejabani Beef Masala', category: 'grocery', subcategories: 'masala-spices', price:2.49 , tott:'/each (100g)',  image: '/uploads/product/logo/IMG_8536.jpeg' },
        { id: 162, name: 'Pran Meat Masala', category: 'grocery', subcategories: 'masala-spices', price:2.49 , tott:'/each (100g)',  image: '/uploads/product/logo/IMG_8535.jpeg' },
        { id: 163, name: 'Laxmi Yellow Vatana', category: 'grocery', subcategories: 'dal-lentils-beans', price:3.49 , tott:'/each 2lb',  image: '/uploads/product/logo/810oMqzjcTL.jpeg' },
        { id: 164, name: 'Super Fresh Red Lentils', category: 'grocery', subcategories: 'dal-lentils-beans', price:5.49 , tott:'/each 2lb',  image: '/uploads/product/logo/81Opk2NFIiL._AC_UF10001000_QL80_.jpeg' },
        { id: 165, name: 'Laxmi Yellow Split Peas', category: 'grocery', subcategories: 'dal-lentils-beans', price:5.49 , tott:'/each',  image: '/uploads/product/logo/81yl9gM2ckL.jpeg' },
        { id: 166, name: 'Swad Muth Beans 2lb', category: 'grocery', subcategories: 'dal-lentils-beans', price:4.49 , tott:'/each',  image: '/uploads/product/logo/download.jpeg' },
        { id: 167, name: 'Pran Chicken Masala', category: 'grocery', subcategories: 'masala-spices', price:2.99 , tott:'/each(100g)',  image: '/uploads/product/logo/IMG_8534.jpeg' },
        { id: 168, name: 'Laziza Strawberry Custard Powder', category: 'grocery', subcategories: 'color-essences-baking', price:3.99 , tott:'/each(300g)',  image: '/uploads/product/logo/IMG_8533.jpeg' },
        { id: 169, name: 'Radhuni Sorshe Ilish Masala', category: 'grocery', subcategories: 'masala-spices', price:1.99 , tott:'/each (65g)',  image: '/uploads/product/logo/IMG_8532.jpeg' },
        { id: 170, name: 'Dole Pineapple Juice 46oz', category: 'grocery', subcategories: 'waterjuice-beverages', price:6.49 , tott:'/each',  image: '/uploads/product/logo/shopping_gfV4GaK.jpeg' },
        { id: 171, name: 'Poland Spring', category: 'grocery', subcategories: 'waterjuice-beverages', price:3.49 , tott:'/each',  image: '/uploads/product/logo/HN1KA.jpeg' },
        { id: 172, name: 'Maaza Kala Khatta', category: 'grocery', subcategories: 'waterjuice-beverages', price:3.49 , tott:'/each',  image: '/uploads/product/logo/Maaza_Kala_Khatta_Juice_-_1_LTR.jpeg' },
        { id: 173, name: 'Maaza Pomegranate', category: 'grocery', subcategories: 'waterjuice-beverages', price:3.49 , tott:'/each',  image: '/uploads/product/logo/front_fr.3.full.jpeg' },
        { id: 174, name: 'Maaza Aam Panna Juice', category: 'grocery', subcategories: 'waterjuice-beverages', price:3.49 , tott:'/each',  image: '/uploads/product/logo/40251623_2-maaza-aam-panna-refreshing-fruit-drink_grande.jpeg' },
        { id: 175, name: 'Real Guava Juice', category: 'grocery', subcategories: 'waterjuice-beverages', price:3.99 , tott:'/each',  image: '/uploads/product/logo/DABURREALGUAVAJUICE.jpeg' },
        { id: 176, name: 'Real Litchi Juice', category: 'grocery', subcategories: 'waterjuice-beverages', price:3.99 , tott:'/each',  image: '/uploads/product/logo/litch.jpeg' },
        { id: 177, name: 'Real Pomegranate Juice', category: 'grocery', subcategories: 'waterjuice-beverages', price:3.99 , tott:'/each',  image: '/uploads/product/logo/81BcfgsSfvL._AC_UF10001000_QL80__1.jpeg' },
        { id: 178, name: 'Swad Garlic Powder (Coarse)', category: 'grocery', subcategories: 'masala-spices', price:5.99 , tott:'/each',  image: '/uploads/product/logo/IMG_8530.jpeg' },
        { id: 179, name: 'Real Pineapple Juice', category: 'grocery', subcategories: 'waterjuice-beverages', price:3.99 , tott:'/each',  image: '/uploads/product/logo/images_1.jpeg' },
        { id: 180, name: 'Swad Amchur Powder', category: 'grocery', subcategories: 'masala-spices', price:6.99 , tott:'/each(14oz)',  image: '/uploads/product/logo/IMG_8529.jpeg' },
        { id: 181, name: 'Real Mango Juice', category: 'grocery', subcategories: 'waterjuice-beverages', price:3.99 , tott:'/each',  image: '/uploads/product/logo/RealFruitMangoJuice1L.jpeg' },
        { id: 182, name: 'Real Green Mango Juice', category: 'grocery', subcategories: 'waterjuice-beverages', price:3.99 , tott:'/each',  image: '/uploads/product/logo/RealFruitMangoJuice1L.jpeg' },
        { id: 183, name: 'OceanSpray Cranberry 450ml', category: 'grocery', subcategories: 'waterjuice-beverages', price:2.49 , tott:'/each',  image: '/uploads/product/logo/71uRvDwL-3L.jpeg' },
        { id: 184, name: 'Best Mango Juice 1QT', category: 'grocery', subcategories: 'waterjuice-beverages', price:4.49 , tott:'/each',  image: '/uploads/product/logo/best-mango-juice-drink-1l-3382-oz_1680463329.jpeg' },
        { id: 185, name: 'Sunny D Smooth Orange 2QT', category: 'grocery', subcategories: 'waterjuice-beverages', price:3.49 , tott:'/each',  image: '/uploads/product/logo/SUN__0001_smooth.jpeg' },
        { id: 186, name: 'Tops Guava Fruit Juice 1L', category: 'grocery', subcategories: 'waterjuice-beverages', price:2.49 , tott:'/each',  image: '/uploads/product/logo/guava.jpeg' },
        { id: 187, name: 'Tops Mango Juice 1L', category: 'grocery', subcategories: 'waterjuice-beverages', price:2.49 , tott:'/each',  image: '/uploads/product/logo/fro3-550x550.jpeg' },
        { id: 188, name: 'Pomegranate Squash Shezan', category: 'grocery', subcategories: 'waterjuice-beverages', price:3.99 , tott:'/each',  image: '/uploads/product/logo/bottles-pomegranate-1-500x500.jpeg' },
        { id: 189, name: 'Goya Coconut Water 33.8 oz', category: 'grocery', subcategories: 'waterjuice-beverages', price:4.49 , tott:'/each',  image: '/uploads/product/logo/goya_coconut_water.jpeg' },
        { id: 190, name: 'National Sheer Khurma Mix', category: 'grocery', subcategories: 'color-essences-baking', price:2.99 , tott:'/each',  image: '/uploads/product/logo/IMG_8528.jpeg' },
        { id: 191, name: 'Fruit Vitals Chaunsa Mango', category: 'grocery', subcategories: 'waterjuice-beverages', price:3.99 , tott:'/each',  image: '/uploads/product/logo/71pwQdCx8VL.jpeg' },
        { id: 192, name: 'Jelly Falooda Drink & Desert Mix', category: 'grocery', subcategories: 'color-essences-baking', price:2.49 , tott:'/each',  image: '/uploads/product/logo/IMG_8527.jpeg' },
        { id: 193, name: 'Pran Litchi Drink', category: 'grocery', subcategories: 'waterjuice-beverages', price:2.49 , tott:'/each',  image: '/uploads/product/logo/pran.jpeg' },
        { id: 194, name: 'Meharban Lychee 3L', category: 'grocery', subcategories: 'waterjuice-beverages', price:6.49 , tott:'/each',  image: '/uploads/product/logo/lych.jpeg' },
        { id: 195, name: 'Meharban Guava 3L', category: 'grocery', subcategories: 'waterjuice-beverages', price:5.49 , tott:'/each',  image: '/uploads/product/logo/ITN_Guava_Fruit_3L__IV-012_700x700.jpeg' },
        { id: 196, name: 'Meharban Mango 3L', category: 'grocery', subcategories: 'waterjuice-beverages', price:5.49 , tott:'/each',  image: '/uploads/product/logo/1674502165-meharban-mango-juice.jpeg' },
        { id: 197, name: 'Rafhan Mango Custard', category: 'grocery', subcategories: 'color-essences-baking-needs', price: 3.49, tott: '/ Each', image: '/uploads/product/logo/IMG_8526.jpeg' },
        { id: 198, name: 'Laziza Mango Custard Powder', category: 'grocery', subcategories: 'color-essences-baking-needs', price: 2.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8525.jpeg' },
        { id: 199, name: 'Maaza Guava Juice', category: 'grocery', subcategories: 'waterjuice-beverages', price: 3.99, tott: '/ Each', image: '/uploads/product/logo/guava.jpeg' },
        { id: 200, name: 'Tamek Mango Juice', category: 'grocery', subcategories: 'waterjuice-beverages', price: 2.99, tott: '/ Each', image: '/uploads/product/logo/8690575871321.jpeg' },
        { id: 201, name: 'Goya Tarmarind 33.8 oz', category: 'grocery', subcategories: 'waterjuice-beverages', price: 3.99, tott: '/ Each', image: '/uploads/product/logo/tarmarid.jpeg' },
        { id: 202, name: 'Goya Passionfruit', category: 'grocery', subcategories: 'waterjuice-beverages', price: 3.99, tott: '/ Each', image: '/uploads/product/logo/pasio.jpeg' },
        { id: 203, name: '4C Iced Tea 5lb', category: 'grocery', subcategories: 'waterjuice-beverages', price: 12.49, tott: '/ Each', image: '/uploads/product/logo/61zuXLeX6VL._AC_UF8941000_QL80_.jpeg' },
        { id: 204, name: 'Pran Coconut Water', category: 'grocery', subcategories: 'waterjuice-beverages', price: 1.99, tott: '/ Each', image: '/uploads/product/logo/coconut.jpeg' },
        { id: 205, name: 'Orange Tang 1lb', category: 'grocery', subcategories: 'waterjuice-beverages', price: 6.49, tott: '/ Each', image: '/uploads/product/logo/04acc081-df93-4422-8594-0df249da17fd.jpeg' },
        { id: 206, name: 'Mango Tang 2.5 kg', category: 'grocery', subcategories: 'waterjuice-beverages', price: 20.99, tott: '/ Each', image: '/uploads/product/logo/dea241_12430adcdaec4570a6996d3f531291f2mv2.jpeg' },
        { id: 207, name: 'Tang Orange 4lb', category: 'grocery', subcategories: 'waterjuice-beverages', price: 12.99, tott: '/ Each', image: '/uploads/product/logo/tang.jpeg' },
        { id: 208, name: 'Three River Edible Gelatine', category: 'grocery', subcategories: 'color-essences-baking-needs', price: 2.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8503.jpeg' },
        { id: 209, name: 'Three Rivers Kachri Powder', category: 'grocery', subcategories: 'color-essences-baking-needs', price: 2.49, tott: '/ Each', image: '/uploads/product/logo/IMG_8502.jpeg' },
        { id: 210, name: 'Davis Baking Powder Powder', category: 'grocery', subcategories: 'color-essences-baking-needs', price: 5.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8501.jpeg' },
        { id: 211, name: 'Meharban Aromatic Kalijeera Rice', category: 'grocery', subcategories: 'rice-grains', price: 17.99, tott: '/ Each(10lb)', image: '/uploads/product/logo/meharban_aromatic_kalijeera_rice_10lb.jpeg' },
        { id: 212, name: 'Borwick’s Baking Powder', category: 'grocery', subcategories: 'color-essences-baking-needs', price: 3.49, tott: '/ Each', image: '/uploads/product/logo/IMG_8500.jpeg' },
        { id: 213, name: 'Rossmoor Baking Powder', category: 'grocery', subcategories: 'color-essences-baking-needs', price: 3.49, tott: '/ Each', image: '/uploads/product/logo/IMG_8499.jpeg' },
        { id: 214, name: 'Wheel Soap', category: 'bath-body-care', subcategories: 'bar-liquid-soap', price: 1.00, tott: '/ Each', image: '/uploads/product/logo/406588_4-wheel-green-detergent-bar.jpeg' },
        { id: 215, name: 'Argo Baking Powder', category: 'grocery', subcategories: 'color-essences-baking-needs', price: 3.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8498.jpeg' },
        { id: 216, name: 'Lifebuoy Bar Soap', category: 'bath-body-care', subcategories: 'bar-liquid-soap', price: 1.99, tott: '/ Each', image: '/uploads/product/logo/lifeboy.jpeg' },
        { id: 217, name: 'Rossmoor Halal Edible Gelatine', category: 'grocery', subcategories: 'color-essences-baking-needs', price: 2.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8497.jpeg' },
        { id: 218, name: 'Ahmed Orange Jelly Crystals', category: 'grocery', subcategories: 'color-essences-baking-needs', price: 1.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8496.jpeg' },
        { id: 219, name: 'Laziza Pineapple Custard Powder', category: 'grocery', subcategories: 'color-essences-baking-needs', price: 3.49, tott: '/ Each', image: '/uploads/product/logo/IMG_8495.jpeg' },
        { id: 220, name: 'National Vanilla Custard Powder', category: 'grocery', subcategories: 'color-essences-baking-needs', price: 2.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8494.jpeg' },
        { id: 221, name: 'Laziza Gulab Jamun Mix', category: 'grocery', subcategories: 'color-essences-baking-needs', price: 2.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8493.jpeg' },
        { id: 222, name: 'Toufayan Bagels Whole Wheat', category: 'breakfast', subcategories: 'bread-bun-rolls', price: 3.49, tott: '/ Each', image: '/uploads/product/logo/PKG20807-Bagels-WW.jpeg' },
        { id: 223, name: 'Ahmed Pineapple Jelly Crystals', category: 'grocery', subcategories: 'color-essences-baking-needs', price: 1.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8492.jpeg' },
        { id: 224, name: 'Toufayan Bagels', category: 'breakfast', subcategories: 'bread-bun-rolls', price: 3.99, tott: '/ Each', image: '/uploads/product/logo/bagel.jpeg' },
        { id: 225, name: 'Ahmed Strawberry Jelly Crystals', category: 'grocery', subcategories: 'color-essences-baking-needs', price: 1.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8491.jpeg' },
        { id: 226, name: 'TeaTime Chat Papdi', category: 'bakery-snacks', subcategories: 'chips-snacks', price: 4.99, tott: '/ Each', image: '/uploads/product/logo/teatim.jpeg' },
        { id: 227, name: 'Meena Roti 20pc', category: 'breakfast', subcategories: 'roti-paratha-naan', price: 7.49, tott: '/ Each', image: '/uploads/product/logo/whole-wheat-1.jpeg' },
        { id: 228, name: 'Toufayan\'s Pita', category: 'breakfast', subcategories: 'bread-bun-rolls', price: 3.49, tott: '/ Each', image: '/uploads/product/logo/pit.jpeg' },
        { id: 229, name: 'Bombay Premium Chili Powder', category: 'grocery', subcategories: 'masala-spices', price: 5.99, tott: '/ Each (500g)', image: '/uploads/product/logo/IMG_8490.jpeg' },
        { id: 230, name: 'Bombay Premium Turmeric Powder', category: 'grocery', subcategories: 'masala-spices', price: 4.99, tott: '/ Each (500g)', image: '/uploads/product/logo/IMG_8489.jpeg' },
        { id: 231, name: 'Sadaf Tomato Paste', category: 'grocery', subcategories: 'condiments-sauces', price: 1.49, tott: '/ Each', image: '/uploads/product/logo/sdaf.jpeg' },
        { id: 232, name: 'Ahmed Banana Jelly Crystals', category: 'grocery', subcategories: 'color-essences-baking-needs', price: 1.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8488.jpeg' },
        { id: 233, name: 'Laziza Banana Custard Powder', category: 'grocery', subcategories: 'color-essences-baking-needs', price: 3.49, tott: '/ Each', image: '/uploads/product/logo/IMG_8487.jpeg' },
        { id: 234, name: 'Rossmoor Jelly Crystals', category: 'grocery', subcategories: 'color-essences-baking-needs', price: 1.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8486.jpeg' },
        { id: 235, name: 'National Mango Custard Powder', category: 'grocery', subcategories: 'color-essences-baking-needs', price: 2.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8485.jpeg' },
        { id: 236, name: 'Ahmed Custard Powder', category: 'grocery', subcategories: 'color-essences-baking-needs', price: 3.49, tott: '/ Each', image: '/uploads/product/logo/IMG_8484.jpeg' },
        { id: 237, name: 'National Jelly Crystals Strawberry', category: 'grocery', subcategories: 'color-essences-baking-needs', price: 1.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8483.jpeg' },
        { id: 238, name: 'Zaiqa Masoor Dal 4 lb', category: 'grocery', subcategories: 'lentils-beans', price: 7.49, tott: '/ Each', image: '/uploads/product/logo/masoor.jpeg' },
        { id: 239, name: 'Alamgeer Kalonji', category: 'grocery', subcategories: 'masala-spices', price: 3.99, tott: '/ Each', image: '/uploads/product/logo/kalonji.jpeg' },
        { id: 240, name: 'Alamgeer Kashmiri Mirch Powder', category: 'grocery', subcategories: 'masala-spices', price: 3.99, tott: '/ Each', image: '/uploads/product/logo/kas.jpeg' },
        { id: 241, name: 'Deep Roti', category: 'breakfast', subcategories: 'roti-paratha-naan', price: 8.49, tott: '/ Each', image: '/uploads/product/logo/deep.jpeg' },
        { id: 242, name: 'Mehrban Kalijeera 20lb', category: 'grocery', subcategories: 'rice-grains', price: 34.99, tott: '/ Each', image: '/uploads/product/logo/kalijera.jpeg' },
        { id: 243, name: 'Mehrban Kalijeera 10lb', category: 'grocery', subcategories: 'rice-grains', price: 17.99, tott: '/ Each', image: '/uploads/product/logo/kalijeera.jpeg' },
        { id: 244, name: 'Golden River Moong 4lb', category: 'grocery', subcategories: 'lentils-beans', price: 5.99, tott: '/ Each', image: '/uploads/product/logo/golden_river_moong_4lb.jpeg' },
        { id: 245, name: 'Zaiqa Kala Chana 4lb', category: 'grocery', subcategories: 'lentils-beans', price: 5.49, tott: '/ Each', image: '/uploads/product/logo/kala_chana.jpeg' },
        { id: 246, name: 'Zaiqa Chana Dal 4lb', category: 'grocery', subcategories: 'lentils-beans', price: 6.49, tott: '/ Each', image: '/uploads/product/logo/chanadal.jpeg' },
        { id: 247, name: 'Freshco Fresh Dry Dates 400g', category: 'grocery', subcategories: 'nuts-seeds', price: 4.49, tott: '/ Each', image: '/uploads/product/logo/IMG_8477.jpeg' },
        { id: 248, name: 'Laxmi Poha 4lb', category: 'grocery', subcategories: 'rice-grains', price: 6.99, tott: '/ Each', image: '/uploads/product/logo/poha.jpeg' },
        { id: 249, name: 'Kesar Tea Masala 50g', category: 'grocery', subcategories: 'masala-spices', price: 3.49, tott: '/ Each', image: '/uploads/product/logo/IMG_8476.jpeg' },
        { id: 250, name: 'SWAD Achar Masala 7oz', category: 'grocery', subcategories: 'masala-spices', price: 3.49, tott: '/ Each', image: '/uploads/product/logo/IMG_8475.jpeg' },
        { id: 251, name: 'Deep Achar Masala', category: 'grocery', subcategories: 'masala-spices', price: 2.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8474.jpeg' },
        { id: 252, name: 'Laziza Achar Gosht', category: 'grocery', subcategories: 'masala-spices', price: 1.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8473.jpeg' },
        { id: 253, name: 'Methi (Fenugreek) 4oz', category: 'grocery', subcategories: 'masala-spices', price: 2.49, tott: '/ Each', image: '/uploads/product/logo/IMG_8472.jpeg' },
        { id: 254, name: 'Ahmed Mango Pickle 1kg', category: 'grocery', subcategories: 'pickles', price: 4.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8471.jpeg' },
        { id: 255, name: 'Zaiqa Ginger Pickle 1kg', category: 'grocery', subcategories: 'pickles', price: 3.49, tott: '/ Each', image: '/uploads/product/logo/IMG_8470.jpeg' },
        { id: 256, name: 'Deep Achar Pickle 500g', category: 'grocery', subcategories: 'pickles', price: 2.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8469.jpeg' },
        { id: 257, name: 'Deep Garlic Pickle 500g', category: 'grocery', subcategories: 'pickles', price: 2.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8468.jpeg' },
        { id: 258, name: 'Ahmed Mix Pickle 1kg', category: 'grocery', subcategories: 'pickles', price: 4.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8467.jpeg' },
        { id: 259, name: 'Ahmed Lime Pickle 1kg', category: 'grocery', subcategories: 'pickles', price: 4.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8466.jpeg' },
        { id: 260, name: 'Ahmed Chilli Pickle 1kg', category: 'grocery', subcategories: 'pickles', price: 4.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8465.jpeg' },
        { id: 261, name: 'Khatoon Pickle', category: 'grocery', subcategories: 'pickles', price: 3.49, tott: '/ Each', image: '/uploads/product/logo/IMG_8464.jpeg' },
        { id: 262, name: 'Deep Punjabi Masala Pickle', category: 'grocery', subcategories: 'pickles', price: 2.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8463.jpeg' },
        { id: 263, name: 'Deep Lime Pickle 500g', category: 'grocery', subcategories: 'pickles', price: 2.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8462.jpeg' },
        { id: 264, name: 'Deep Hot Lime Pickle 500g', category: 'grocery', subcategories: 'pickles', price: 2.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8461.jpeg' },
        { id: 265, name: 'National Mix Pickle', category: 'grocery', subcategories: 'pickles', price: 3.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8460.jpeg' },
        { id: 266, name: 'National Lime Pickle', category: 'grocery', subcategories: 'pickles', price: 3.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8459.jpeg' },
        { id: 267, name: 'National Chilli Pickle', category: 'grocery', subcategories: 'pickles', price: 3.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8458.jpeg' },
        { id: 268, name: 'National Garlic Pickle', category: 'grocery', subcategories: 'pickles', price: 3.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8457.jpeg' },
        { id: 269, name: 'National Punjabi Mango Pickle', category: 'grocery', subcategories: 'pickles', price: 3.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8456.jpeg' },
        { id: 270, name: 'Deep Garam Masala', category: 'grocery', subcategories: 'masala-spices', price: 4.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8455.jpeg' },
        { id: 271, name: 'Ahmed Apple Jam 340g', category: 'grocery', subcategories: 'jam-jellies', price: 2.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8454.jpeg' },
        { id: 272, name: 'National Mango Jam 340g', category: 'grocery', subcategories: 'jam-jellies', price: 2.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8453.jpeg' },
        { id: 273, name: 'Ahmed Pineapple Jam 340g', category: 'grocery', subcategories: 'jam-jellies', price: 2.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8452.jpeg' },
        { id: 274, name: 'Kissan Mixed Fruit Jam 500g', category: 'grocery', subcategories: 'jam-jellies', price: 3.49, tott: '/ Each', image: '/uploads/product/logo/IMG_8451.jpeg' },
        { id: 275, name: 'Ahmed Strawberry Jam 340g', category: 'grocery', subcategories: 'jam-jellies', price: 2.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8450.jpeg' },
        { id: 276, name: 'Ahmed Apple Jelly 340g', category: 'grocery', subcategories: 'jam-jellies', price: 2.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8449.jpeg' },
        { id: 277, name: 'National Pineapple Jam 340g', category: 'grocery', subcategories: 'jam-jellies', price: 2.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8448.jpeg' },
        { id: 278, name: 'Sriracha Hot Chilli Sauce', category: 'grocery', subcategories: 'condiments-sauces', price: 4.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8447.jpeg' },
        { id: 279, name: 'Barilla Basilico Pasta Sauce', category: 'grocery', subcategories: 'condiments-sauces', price: 4.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8446.jpeg' },
        { id: 280, name: 'San Remo Bolognese Pasta Sauce', category: 'grocery', subcategories: 'condiments-sauces', price: 4.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8445.jpeg' },
        { id: 281, name: 'Maggi Tamarina Sauce', category: 'grocery', subcategories: 'condiments-sauces', price: 2.49, tott: '/ Each', image: '/uploads/product/logo/IMG_8444.jpeg' },
        { id: 282, name: 'Mother\'s Recipe Mixed Pickle 400g', category: 'grocery', subcategories: 'pickles', price: 2.49, tott: '/ Each', image: '/uploads/product/logo/IMG_8443.jpeg' },
        { id: 283, name: 'Mother\'s Recipe Mango Pickle 400g', category: 'grocery', subcategories: 'pickles', price: 2.49, tott: '/ Each', image: '/uploads/product/logo/IMG_8442.jpeg' },
        { id: 284, name: 'Mother\'s Recipe Lime Pickle 400g', category: 'grocery', subcategories: 'pickles', price: 2.49, tott: '/ Each', image: '/uploads/product/logo/IMG_8441.jpeg' },
        { id: 285, name: 'Deep Mix Pickle 500g', category: 'grocery', subcategories: 'pickles', price: 2.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8440.jpeg' },
        { id: 286, name: 'Deep Mango Pickle 500g', category: 'grocery', subcategories: 'pickles', price: 2.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8439.jpeg' },
        { id: 287, name: 'Deep Lime Pickle 500g', category: 'grocery', subcategories: 'pickles', price: 2.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8438.jpeg' },
        { id: 288, name: 'Deep Chili Pickle 500g', category: 'grocery', subcategories: 'pickles', price: 2.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8437.jpeg' },
        { id: 289, name: 'Deep Ginger Pickle 500g', category: 'grocery', subcategories: 'pickles', price: 2.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8436.jpeg' },
        { id: 290, name: 'Deep Garlic Pickle 500g', category: 'grocery', subcategories: 'pickles', price: 2.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8435.jpeg' },
        { id: 291, name: 'Aashirwad Atta', category: 'grocery', subcategories: 'rice-grains', price: 9.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8434.jpeg' },
        { id: 292, name: 'National Mixed Pickle', category: 'grocery', subcategories: 'pickles', price: 3.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8433.jpeg' },
        { id: 293, name: 'National Mango Pickle', category: 'grocery', subcategories: 'pickles', price: 3.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8432.jpeg' },
        { id: 294, name: 'Ahmed Green Chilli Pickle', category: 'grocery', subcategories: 'pickles', price: 3.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8431.jpeg' },
        { id: 295, name: 'Ahmed Garlic Pickle', category: 'grocery', subcategories: 'pickles', price: 3.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8430.jpeg' },
        { id: 296, name: 'Ahmed Lemon Pickle', category: 'grocery', subcategories: 'pickles', price: 3.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8429.jpeg' },
        { id: 297, name: 'Deep Punjabi Masala Pickle 500g', category: 'grocery', subcategories: 'pickles', price: 2.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8428.jpeg' },
        { id: 298, name: 'Himalaya Salt', category: 'grocery', subcategories: 'masala-spices', price: 4.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8427.jpeg' },
        { id: 299, name: 'Heera Fennel Seeds', category: 'grocery', subcategories: 'masala-spices', price: 2.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8426.jpeg' },
        { id: 300, name: 'Heera Black Cumin Seeds', category: 'grocery', subcategories: 'masala-spices', price: 2.99, tott: '/ Each', image: '/uploads/product/logo/IMG_8425.jpeg' },
        { id: 301, name: 'Dall Mong', category: 'bakery-snacks', subcategories: 'muri-chira-chanachur', price: 3.49, tott: '/each', image: '/uploads/product/logo/dall_mong_1.jpeg' },
        { id: 302, name: 'Laziza Seekh Kebab', category: 'grocery', subcategories: 'masala-spices', price: 2.99, tott: '/each (100gm)', image: '/uploads/product/logo/IMG_8565.jpeg' },
        { id: 303, name: 'Regal Kashmiri Mix', category: 'bakery-snacks', subcategories: 'muri-chira-chanachur', price: 4.46, tott: '/each', image: '/uploads/product/logo/regalkashmirmix.jpeg' },
        { id: 304, name: 'Laziza Shahi Tukra Mix', category: 'grocery', subcategories: 'color-essences-baking', price: 2.99, tott: '/each', image: '/uploads/product/logo/IMG_8564.jpeg' },
        { id: 305, name: 'Nimcolia Daal', category: 'bakery-snacks', subcategories: 'chips-snacks', price: 4.49, tott: '/each', image: '/uploads/product/logo/images_3.jpeg' },
        { id: 306, name: 'Laziza Fish Masala', category: 'grocery', subcategories: 'masala-spices', price: 2.99, tott: '/each(100g)', image: '/uploads/product/logo/IMG_8563.jpeg' },
        { id: 307, name: 'Bhindi Cut Okra', category: 'bakery-snacks', subcategories: 'chips-snacks', price: 3.49, tott: '/each', image: '/uploads/product/logo/71UuAXLcNTL._AC_UF8941000_QL80_.jpeg' },
        { id: 308, name: 'Laziza Chapli Kebab', category: 'grocery', subcategories: 'masala-spices', price: 2.99, tott: '/each(100g)', image: '/uploads/product/logo/71UuAXLcNTL._AC_UF8941000_QL80_.jpeg' },
        { id: 309, name: 'Laziza Achar Gosht', category: 'grocery', subcategories: 'masala-spices', price: 2.99, tott: '/each(100g)', image: '/uploads/product/logo/IMG_8561.jpeg' },
        { id: 310, name: 'Laziza Delhi Pulao Biryani', category: 'grocery', subcategories: 'masala-spices', price: 3.99, tott: '/each(100g)', image: '/uploads/product/logo/IMG_8560.jpeg' },
        { id: 311, name: 'Amma\'s Kitchen Kerala Mixture', category: 'bakery-snacks', subcategories: 'chips-snacks', price: 3.49, tott: '/each', image: '/uploads/product/logo/673a1db7-ecc3-47a9-a52d-acc5bf9da865.f136455b052a90fea4c725cfd52a0a2f_WwvlHfv.jpeg' },
        { id: 312, name: 'Amma\'s Kitchen Achappam', category: 'bakery-snacks', subcategories: 'chips-snacks', price: 2.49, tott: '/each', image: '/uploads/product/logo/673a1db7-ecc3-47a9-a52d-acc5bf9da865.f136455b052a90fea4c725cfd52a0a2f.jpeg' },
        { id: 313, name: 'Banana Chips', category: 'bakery-snacks', subcategories: 'chips-snacks', price: 3.49, tott: '/each', image: '/uploads/product/logo/71jVSzm5fJL._AC_UF8941000_QL80_.jpeg' },
        { id: 314, name: 'Laziza Rabri Falooda Mix', category: 'grocery', subcategories: 'color-essences-baking', price: 3.49, tott: '/each(200g)', image: '/uploads/product/logo/IMG_8559.jpeg' },
        { id: 315, name: 'Haldiram\'s Punjabi Tadka', category: 'bakery-snacks', subcategories: 'chips-snacks', price: 4.49, tott: '/each', image: '/uploads/product/logo/images_2_bf9uDq6.jpeg' },
        { id: 316, name: 'Laziza Strawberry Falooda Mix', category: 'grocery', subcategories: 'color-essences-baking', price: 3.49, tott: '/each(195g)', image: '/uploads/product/logo/IMG_8558.jpeg' },
        { id: 317, name: 'Ifad Muri Toast', category: 'bakery-snacks', subcategories: 'cookies-biscuit', price: 3.99, tott: '/each', image: '/uploads/product/logo/images_1_KGUggU9.jpeg' },
        { id: 318, name: 'Teer Meat Masala', category: 'grocery', subcategories: 'masala-spices', price: 1.99, tott: '/each(100g)', image: '/uploads/product/logo/IMG_8557.jpeg' },
        { id: 319, name: 'Laziza Haleem Mix', category: 'grocery', subcategories: 'color-essences-baking', price: 5.99, tott: '/each (13.22oz)', image: '/uploads/product/logo/IMG_8556.jpeg' },
        { id: 320, name: 'Laziza Vanilla Custard Powder', category: 'grocery', subcategories: 'color-essences-baking', price: 3.49, tott: '/each (300g)', image: '/uploads/product/logo/IMG_8555.jpeg' },
        { id: 321, name: 'Laziza Kheer Mix', category: 'grocery', subcategories: 'color-essences-baking', price: 3.99, tott: '/each (310gm)', image: '/uploads/product/logo/IMG_8554.jpeg' },
    ];

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [totalPrice, setTotalPrice] = useState(() => {
        const savedTotalPrice = localStorage.getItem('totalPrice');
        return savedTotalPrice ? parseFloat(savedTotalPrice) : 0;
    });


    
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);
    const categoryListRef = useRef(null);
    const subcategoryListRef = useRef(null);
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('totalPrice', totalPrice.toString());
    }, [cart, totalPrice]);

    const addToCart = (item, quantity) => {
        if (!item || !item.id) {
            console.error('Invalid item payload:', item);
            return;
        }

        setCart(prevCart => {
            let updatedCart = [...prevCart];

            const itemIndex = updatedCart.findIndex(cartItem => cartItem.id === item.id);

            if (itemIndex !== -1) {
                if (quantity > 0) {
                    updatedCart[itemIndex].quantity = quantity;
                } else {
                    updatedCart.splice(itemIndex, 1);
                }
            } else {
                if (quantity > 0) {
                    updatedCart.push({ ...item, quantity });
                }
            }

            const updatedTotalPrice = updatedCart.reduce((sum, cartItem) => {
                return sum + (cartItem.price * cartItem.quantity);
            }, 0);

            setTotalPrice(updatedTotalPrice);

            return updatedCart;
        });
    };

    const removeFromCart = (itemId) => {
        setCart(prevCart => {
            const updatedCart = prevCart.filter(cartItem => cartItem.id !== itemId);

            const updatedTotalPrice = updatedCart.reduce((sum, cartItem) => {
                return sum + (cartItem.price * cartItem.quantity);
            }, 0);

            setTotalPrice(updatedTotalPrice);

            return updatedCart;
        });
    };

    const updateCartItemQuantity = (itemId, quantity) => {
        setCart(prevCart => {
            const updatedCart = prevCart.map(item => {
                if (item.id === itemId) {
                    return { ...item, quantity };
                }
                return item;
            });

            const updatedTotalPrice = updatedCart.reduce((sum, cartItem) => {
                return sum + (cartItem.price * cartItem.quantity);
            }, 0);

            setTotalPrice(updatedTotalPrice);

            return updatedCart;
        });
    };



    const handleIncrement = (itemId) => {
        const item = cart.find(item => item.id === itemId);
        if (item) {
            const newQuantity = item.quantity + 1;
            updateCartItemQuantity(itemId, newQuantity);
        }
    };

    const handleDecrement = (itemId) => {
        const item = cart.find(item => item.id === itemId);
        if (item) {
            const newQuantity = item.quantity - 1;
            if (newQuantity <= 0) {
                removeFromCart(itemId);
            } else {
                updateCartItemQuantity(itemId, newQuantity);
            }
        }
    };

    const totalItems = useMemo(() => {
        return cart.length;
    }, [cart]);

    const scrollLeft = (ref) => {
        if (ref.current) {
            ref.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };
    
    const scrollRight = (ref) => {
        if (ref.current) {
            ref.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const handleCategoryClick = (path) => {
        setSelectedCategory(path);
        setSelectedSubcategory(null);
    };

    const handleSubcategoryClick = (path) => {
        setSelectedSubcategory(path);
    };

    const handleShowAllClickTop = () => {
        setSelectedCategory(null);
        setSelectedSubcategory(null);
    };

    const categories = [
        { title: "Baby",
            image: babyImage,
            path: "baby",
            subcategories: [
                { title: "Accessories & Refills", image: accessoriesRefills, path: "accessoriesRefills" },
                { title: "Food & Snacks", image: babyFoodSnacks, path: "baby-food-snacks" },
                { title: "Formula", image: babyFormula, path: "baby-formula" },
                { title: "Health", image: childrensHealth, path: "baby-health" },
                { title: "Clothing & Accessories", image: clothingAccessories, path: "baby-clothing-accessories" },
                { title: "Diapers & Wipes", image: diapersWipes, path: "diapers-wipes" },
                { title: "School Supplies", image: schoolSupplies, path: "school-supplies" }
            ],
             },
            {
            title: "Bakery & Snacks",
            image: bakerySnacksImage,
            path: "bakery-snacks",
            subcategories: [
                { title: "Cake & Muffins", image: cakeMuffins, path: "cake-muffins" },
                { title: "Chips & Snacks", image: chipsSnacks, path: "chips-snacks" },
                { title: "Chocolate & Candy", image: chocolateCandy, path: "chocolate-candy" },
                { title: "Cookies & Biscuit", image: cookiesBiscuit, path: "cookies-biscuit" },
                { title: "Muri-Chira-Chanachur", image: muriChiraChanachur, path: "muri-chira-chanachur" },
                { title: "Seasonal Bakery", image: seasonalBakery, path: "seasonal-bakery" },
                { title: "Sugar Free", image: sugarFree, path: "sugar-free" },
                { title: "Sweets & Desserts", image: sweetsDesserts, path: "sweets-desserts" }
            ]
        },
        {
            title: "Bath & Body Care",
            image: bathBodyCareImage,
            path: "bath-body-care",
            subcategories: [
                { title: "Accessories", image: accessoriesImg, path: "accessories" },
                { title: "Bar & Liquid Soap", image: barLiquidSoapImg, path: "bar-liquid-soap" },
                { title: "Hair Care", image: hairCareImg, path: "hair-care" },
                { title: "Shampoo & Conditioner", image: shampooConditionerImg, path: "shampoo-conditioner" },
                { title: "Skin Care products", image: skinCareImg, path: "skin-care-products" },
                { title: "Styling Products", image: stylingProductsImg, path: "styling-products" },
                { title: "Toothpastes", image: toothpastesImg, path: "toothpastes" }
            ]
        },
        {
            title: "Breakfast",
            image: breakfastImage,
            path: "breakfast",
            subcategories: [
                { title: "Bread, Bun & Rolls", image: breadsFromTheAisle, path: "bread-bun-rolls" },
                { title: "Cereal", image: cerealBreakfastFoods, path: "cereal" },
                { title: "Jam, Jelly & Spreads", image: jam, path: "jam-jelly-spreads" },
                { title: "Roti, Paratha & Naan", image: breadDough, path: "roti-paratha-naan" },
                { title: "Tea & Coffee", image: tea, path: "tea-coffee" }
            ]
        },
        {
            title: "Dairy & Eggs",
            image: dairyEggsImage,
            path: "dairy-eggs",
            subcategories: [
                { title: "Butter & Margarine", image: butterMargarineImg, path: "butter-margarine" },
                { title: "Cheese", image: cheeseImg, path: "cheese" },
                { title: "Eggs", image: eggsImg, path: "eggs" },
                { title: "Milk & Cream", image: milkCreamImg, path: "milk-cream" },
                { title: "Milk Alternatives", image: milkAlternativesImg, path: "milk-alternatives" },
                { title: "Yogurt", image: yogurtImg, path: "yogurt" }
            ]
        },
        {
            title: "ELECTRONICS", 
            image: electronicsImage,
            path: "electronics" , 
            subcategories: [
            ]
        },
        {
            title: "Fish",
            image: fishImage,
            path: "fish",
            subcategories: [
                { title: "Dried Fish (Shutki)", image: Shutki, path: "Shutki" },
                { title: "Fish Fillets & Steaks", image: FishF, path: "Fish Fillets & Steaks" },
                { title: "Frozen Fish", image: frozenFishImage, path: "frozen-fish" },
                { title: "Frozen Seafood", image: Seafood, path: "seafood" },
                { title: "Shrimp & Prawn", image: Shrimp, path: "Shrimp & Prawn" }
            ]
        },
        {
            title: "Fresh Meat",
            image: freshMeatImage,
            path: "fresh-meat",
            subcategories: [
                { title: "Beef & Steak", image: Beef_Steak, path: "beef-steak" },
                { title: "Chicken", image: Chicken, path: "chicken" },
                { title: "Lamb", image: Lamb, path: "lamb" },
                { title: "Duck", image: Duck, path: "Duck" },
                { title: "Mutton & Goat", image: Mutton, path: "Mutton" },
                { title: "Turkey", image: Turkey, path: "Turkey" }
            ]
        },
        {
            title: "Frozen Food",
            image: frozenFoodImage,
            path: "frozen-food",
            subcategories: [
                { title: "Frozen Vegetables", image: frozenVeg, path: "frozen-vegetables" },
                { title: "Frozen beef Mutton Lamb ", image: beefMuttonLambImage, path: "all" },
                { title: "Frozen Fruits", image: freshFruitImage, path: "frozen-fruits" },
                { title: "Frozen Meals", image: breakfastFoodImage, path: "frozen-meals" },
                { title: "Frozen Snacks", image: frozenSnacksMealsImage, path: "frozen-snacks" },
                { title: "Ice Cream, Treats & Toppings", image: iceCreamTreatsToppingsImage, path: "ice-cream-treats-toppings" },
                { title: "Poultry & Chicken", image: poultryChickenImage, path: "poultry-chicken" },
                { title: "Prawn & Seafood", image: prawnSeafoodImage, path: "prawn-seafood" }
            ]
        },
        {
            title: "Fruits and Vegetables",
            image: fruitsVegetableImage,
            path: "fruits-vegetable",
            subcategories: [
                { title: "Fresh Fruits", image: freshFruitImage, path: "fresh-fruits" },
                { title: "Fresh Vegetables", image: freshVegetableImage, path: "fresh-vege" },
                { title: "Frozen Vegetable & Fruits", image: frozenVeg, path: "packaged-fruits-vegetables" }
            ]
        },
        {
            title: "Grocery",
            image: groceryImage,
            path: "grocery",
            subcategories: [
                { title: "Canned and Packed Food", image: cannedPackedFoodImage, path: "canned-and-packed-food" },
                { title: "Color, Essences & Baking Needs", image: colorEssencesBakingNeedsImage, path: "color-essences-baking" },
                { title: "Dal, Lentils & Beans", image: dalLentilsBeansImage, path: "dal-lentils-beans" },
                { title: "Dried Fruit & Nuts", image: driedFruitNutsImage, path: "dried-fruit-nuts" },
                { title: "Flour, Atta & Suji", image: flourAttaSujiImage, path: "flour-atta-suji" },
                { title: "Honey, Syrup & Ayurveda", image: honeySyrupAyurvedaImage, path: "honey-syrup-ayurveda" },
                { title: "Masala & Spices", image: masalaSpicesImage, path: "masala-spices" },
                { title: "Noodle, Pasta & Shemai", image: noodlePastaShemaiImage, path: "noodle-pasta-shemai" },
                { title: "Oil / Ghee / Dalda", image: oilGheeDaldaImage, path: "oil-ghee-dalda" },
                { title: "Pickles", image: picklesImage, path: "pickles" },
                { title: "Rice & Grains", image: riceGrainsImage, path: "rice-grains" },
                { title: "Salt & Sugar", image: saltSugarImage, path: "salt-sugar" },
                { title: "Sauce, Ketchup & Vinegar", image: sauceKetchupVinegarImage, path: "sauce-ketchup-vinegar" },
                { title: "Water, Juice & Beverages", image: waterJuiceBeveragesImage, path: "waterjuice-beverages" }
            ]
        },
        {
            title: "Home & Kitchen",
            image: homeKitchenImage,
            path: "home-kitchen",
            subcategories: [
                { title: "Cookware", image: cookwareImage, path: "cookware" },
                { title: "Dinnerware", image: dinnerwareImage, path: "dinnerware" },
                { title: "Bedding", image: beddingImage, path: "bedding" },
                { title: "Storage Solutions", image: storageSolutionsImage, path: "storage-solutions" },
                { title: "Cleaning Supplies", image: cleaningSuppliesImage, path: "cleaning-supplies" }
            ]
        }
    ];
    const clearCart = () => {
        try {
            // Retrieve the current cart data
            const cartData = window.localStorage.getItem('cart');
            
            if (cartData) {
                window.localStorage.setItem('cartdrop', cartData);
                const parsedCartData = JSON.parse(cartData);
                const totalPriceDrop = parsedCartData.reduce((acc, item) => acc + item.price * item.quantity, 0);
                window.localStorage.setItem('totalPriceDrop', totalPriceDrop.toFixed(2));
            }
    
            window.localStorage.removeItem('cart');
            
            window.localStorage.setItem('showCartPopup', 'true');
            window.localStorage.removeItem('totalPrice');
            console.log('Cart cleared successfully');
            window.location.reload();
        } catch (error) {
            console.error('Failed to clear cart:', error);
        }
    };
    
    
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });
    const [isAuthenticated, setIsAuthenticated] = useState(!!user);

    // Handle authentication
    const login = async (email, password) => {
        try {
            const user = await getUserByEmail(email);
            if (user && user.password === password) {
                setUser(user);
                setIsAuthenticated(true);
                localStorage.setItem('user', JSON.stringify(user));
                return true;
            }
            return false;
        } catch (error) {
            console.error('Login failed:', error);
            return false;
        }
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('user');
    };

    const register = async (userInfo) => {
        try {
            const userExistsFlag = await userExists(userInfo.email, 'email');
            if (userExistsFlag) {
                throw new Error('User already exists');
            }
            await addUser(userInfo, 'customer');
            return true;
        } catch (error) {
            console.error('Registration failed:', error);
            return false;
        }
    };
    
    const contextValue = {
        cart,
        totalPrice,
        addToCart,
        removeFromCart,
        handleIncrement,
        handleDecrement,
        totalItems,
        scrollLeft,
        scrollRight,
        selectedCategory,
        selectedSubcategory,
        handleCategoryClick,
        handleSubcategoryClick,
        handleShowAllClickTop,
        updateCartItemQuantity,
        categoryListRef,
        subcategoryListRef,
        categories,
        items,
        clearCart,
        login,
        logout,
        register,
        isAuthenticated,
        user,

    };
    
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
return useContext(CartContext);

};

