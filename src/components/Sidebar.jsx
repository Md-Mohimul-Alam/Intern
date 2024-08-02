import React,{useState} from 'react';
import './css/Sidebar.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import { IoIosArrowForward } from "react-icons/io";
import { useCart } from './ContextApi';


import offersBtn from './static/img/offers-btn.png';
import wishlistBtn from './static/img/wishlist.png';
import baby from './logo/Baby.png';
import bakery from './logo/Bakery.png';
import hairBodyCare from './logo/Hair__Body_Care_Nvq41nk.png';
import breakfast from './logo/Cereal__Breakfast_Foods.png';
import dairyEggs from './logo/Dairy_8QdGFwA.png';
import seafood from './logo/Seafood.png';
import meat from './logo/meat.png';
import frozenFoods from './logo/Frozen_Foods.png';
import produce from './logo/Produce.png';
import pantry from './logo/Pantry.png';
import homeKitchen from './logo/HomeKitchen.png';

import accessoriesRefills from './logo/Wipes_Refills__Accessories.png';
import babyFoodSnacks from './logo/Baby_Food__Snacks.png';
import babyFormula from './logo/Baby_Formula.png';
import childrensHealth from './logo/Childrens_Health.png';
import clothingAccessories from './logo/Clothing_and_Accessories.png';
import diapersWipes from './logo/Diapers__Training_Pants.png';
import schoolSupplies from './logo/school-supplies.png'
import cakeMuffins from './logo/Refrigerated_Dough.png';
import chipsSnacks from './logo/Snacks_Chips__Dips.png';
import chocolateCandy from './logo/chocolate.png';
import cookiesBiscuit from './logo/Freshly_Baked__Artisan_Bread.png';
import muriChiraChanachur from './logo/Specialty.png';
import seasonalBakery from './logo/Seasonal_Bakery.png';
import sugarFree from './logo/Sugar_Free.png';
import sweetsDesserts from './logo/Sweets__Desserts.png';
import bath from './uploads/category/logo/Hair__Body_Care_Nvq41nk.png';
import accessoriesImg from './uploads/category/logo/Accessories.png';
import barLiquidSoapImg from './uploads/category/logo/Bar__Liquid_Soap.png';
import hairCareImg from './uploads/category/logo/Hair_Coloring.png';
import shampooConditionerImg from './uploads/category/logo/Shampoo__Conditioner.png';
import skinCareImg from './uploads/category/logo/Baby_Bath_and_Skin_Care.png';
import stylingProductsImg from './uploads/category/logo/Styling_Products.png';
import toothpastesImg from './uploads/category/logo/Bath__Shower_Preparations.png';

import breadsFromTheAisle from './uploads/category/logo/Breads_from_the_Aisle.png';
import cerealBreakfastFoods from './uploads/category/logo/Cereal__Breakfast_Foods_w4AKkRi.png';
import jam from './uploads/category/logo/jam.png';
import breadDough from './uploads/category/logo/Bread__Dough.png';
import tea from './uploads/category/logo/tea.png';

import Dairy from './uploads/category/logo/Dairy_8QdGFwA.png';
import butterMargarineImg from './uploads/category/logo/Butter__Margarine.png';
import cheeseImg from './uploads/category/logo/Cheese.png';
import eggsImg from './uploads/category/logo/Eggs.png';
import milkCreamImg from './uploads/category/logo/Milk__Cream.png';
import milkAlternativesImg from './uploads/category/logo/Milk_Alternatives.png';
import yogurtImg from './uploads/category/logo/Yogurt.png';

import Fish from './uploads/category/logo/Seafood.png';
import Shutki from './uploads/category/logo/Fresh_Seafood.png';
import FishF from './uploads/category/logo/Fresh_Fish_Fillets__Steaks.png';
import Frozwen from './uploads/category/logo/Dips__Spreads.png';
import Seafood from './uploads/category/logo/Frozen_Seafood.png';
import Shrimp from './uploads/category/logo/Shrimp__Scallops.png';

import Fresh_Meat from './uploads/category/logo/meat.png';
import Beef_Steak from './uploads/category/logo/Beef__Steak.png';
import Chicken from './uploads/category/logo/chicken.png';
import Duck from './uploads/category/logo/Frozen_Meat.png';
import Lamb from './uploads/category/logo/Lamb__Veal.png';
import Mutton from './uploads/category/logo/Lamb__Veal_6eFDf6T.png';
import Turkey from './uploads/category/logo/Turkey.png';

import Frozen_Food from './uploads/category/logo/Frozen_Foods.png'; 
import Breakfast from './uploads/category/logo/Breakfast_Food.png';
import Frozen_Snacks from './uploads/category/logo/Frozen_Seafood_lkE9iLJ.png';
import Ice_Cream from './uploads/category/logo/Ice_Cream_Treats__Toppings.png'; 

import Produce from './uploads/category/logo/Produce.png';
import Fresh_Fruit from './uploads/category/logo/Fresh_Fruit.png';
import Fresh_Vegetables from './uploads/category/logo/Fresh_Vegetables.png';
import Seasonal from './uploads/category/logo/Seasonal.png';

import Canned_and_Packed_Food from './uploads/category/logo/Canned_and_Packaged_Goods.png';
import Color_Essences_Baking_Needs from './uploads/category/logo/Cooking__Baking_Needs.png';
import Dal_Lentils_Beans from './uploads/category/logo/International__World_Foods.png';
import Dried_Fruit_Nuts from './uploads/category/logo/Nuts__Dried_Fruit.png';
import Flour_Attas_Suji from './uploads/category/logo/Packaged_Meals__Side_Dishes.png';
import Honey_Syrup_Ayurveda from './uploads/category/logo/Salad_Dressings_Oil__Vinegar.png';
import Masala_Spices from './uploads/category/logo/Gravy_and_Gravy_Mixes_76.png';
import Noodle_Pasta_Shemai from './uploads/category/logo/Ice_Cream_Cones__Dessert_Toppings.png';
import Oil_Ghee_Dalda from './uploads/category/logo/oil_C0T0Kob.png';
import Pickles from './uploads/category/logo/Olives__Pickles.png';
import Rice_Grains from './uploads/category/logo/Rice_Grains__Dried_Beans.png';
import Salt_Sugar from './uploads/category/logo/Canned_Goods_Soups__Broths.png';
import Sauce_Ketchup_Vinegar from './uploads/category/logo/Condiments_Sauces__Marinades.png';
import Water_Juice_Beverages from './uploads/category/logo/Beverages.png';
import Bakeware_Cookware from './uploads/category/logo/Bakeware__Cookware.png';
import Candles_Incense_Lighters from './uploads/category/logo/Candles_Incense_Lighters.png';
import Supplies_Maintenance from './uploads/category/logo/Supplies__Maintenance.png';
import Gadgets_Tools from './uploads/category/logo/Gadgets__Tools.png';
import Home from './uploads/category/logo/Home.png';
import Kitchen_Gadgets_Tools from './uploads/category/logo/Kitchen_Gadgets__Tools.png';
import Prayers from './uploads/category/logo/Household.png';

const Sidebar = ({ isOpen }) => {
    const { handleCategoryClick, handleSubcategoryClick } = useCart();

    const [dropdowns, setDropdowns] = useState({});
    const [rotations, setRotations] = useState({});

    const toggleDropdown = (cid) => {
        setDropdowns((prevDropdowns) => ({
            ...prevDropdowns,
            [cid]: !prevDropdowns[cid],
        }));
        setRotations((prevRotations) => ({
            ...prevRotations,
            [cid]: dropdowns[cid] ? 0 : 90,
        }));
    };

    return (
        <div>
            {!isOpen ? (
                <div className="left-sidebar hidden-md-down">
                    <div className="filter-wrapper">
                        <div className="filter-list">
                            <div className="nav-item" title="All Product">
                                <i className="img-fluid_side fa fa-th" aria-hidden="true" title="All Product"></i>
                            </div>
                            <div className="nav-item" title="Offers">
                                <img className="img-fluid_side offers-btn" src={offersBtn} alt="Offers" title="Offers" />
                            </div>
                            <div className="nav-item" title="Frequent Buy">
                                <i className="img-fluid_side fa fa-certificate" aria-hidden="true" title="Frequent Buy"></i>
                            </div>
                            <div className="nav-item" title="Wishlist">
                                <img className="img-fluid_side offers-btn" src={wishlistBtn} alt="Wishlist" title="Wishlist" />
                            </div>
                        </div>
                    </div>
                    <div className="segment">
                        <div className="segment-body">
                            <div className="navigation segment-list">
                                <div className="nav-item" title="Baby" onClick={() => handleCategoryClick('baby')}>
                                    <img className="img-fluid_side" title="Baby" src={baby} alt="Category - Baby" />
                                </div>
                                <div className="nav-item" title="Bakery & Snacks" onClick={() => handleCategoryClick('bakery-snacks')}>
                                    <img className="img-fluid_side" title="Bakery & Snacks" src={bakery} alt="Category - Bakery & Snacks" />
                                </div>
                                <div className="nav-item" title="Bath & Body Care" onClick={() => handleCategoryClick('bath-body-care')}>
                                    <img className="img-fluid_side" title="Bath & Body Care" src={hairBodyCare} alt="Category - Bath & Body Care" />
                                </div>
                                <div className="nav-item" title="Breakfast" onClick={() => handleCategoryClick('breakfast')}>
                                    <img className="img-fluid_side" title="Breakfast" src={breakfast} alt="Category - Breakfast" />
                                </div>
                                <div className="nav-item" title="Dairy & Eggs" onClick={() => handleCategoryClick('dairy-eggs')}>
                                    <img className="img-fluid_side" title="Dairy & Eggs" src={dairyEggs} alt="Category - Dairy & Eggs" />
                                </div>
                                <div className="nav-item" title="Electronics" onClick={() => handleCategoryClick('electronics')}>
                                    <i className="img-fluid_side fas fa-box-open" aria-hidden="true" title="Electronics"></i>
                                </div>
                                <div className="nav-item" title="Fish" onClick={() => handleCategoryClick('fish')}>
                                    <img className="img-fluid_side" title="Fish" src={seafood} alt="Category - Fish" />
                                </div>
                                <div className="nav-item" title="Fresh Meat" onClick={() => handleCategoryClick('fresh-meat')}>
                                    <img className="img-fluid_side" title="Fresh Meat" src={meat} alt="Category - Fresh Meat" />
                                </div>
                                <div className="nav-item" title="Frozen Foods" onClick={() => handleCategoryClick('frozen-food')}>
                                    <img className="img-fluid_side" title="Frozen Foods" src={frozenFoods} alt="Category - Frozen Foods" />
                                </div>
                                <div className="nav-item" title="Fruits and Vegetable" onClick={() => handleCategoryClick('fruits-vegetable')}>
                                    <img className="img-fluid_side" title="Fruits and Vegetable" src={produce} alt="Category - Fruits and Vegetable" />
                                </div>
                                <div className="nav-item" title="Grocery" onClick={() => handleCategoryClick('grocery')}>
                                    <img className="img-fluid_side" title="Grocery" src={pantry} alt="Category - Grocery" />
                                </div>
                                <div className="nav-item" title="Home & Kitchen" onClick={() => handleCategoryClick('home-kitchen')}>
                                    <img className="img-fluid_side" title="Home & Kitchen" src={homeKitchen} alt="Category - Home & Kitchen" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            ) : (
                <div className={`menuWrapper ${isOpen ? 'open' : ''}`} style={{ position: 'fixed',top:'65px', height: '100%', width: '260px', background: '#f7fff0', color: '#666',    borderTop: '1px solid #eee',borderRight: '1.5px solid #eee'}}>
                    <div className="menu-wrapper" style={{ marginLeft: '6px'}}>
                        <div className="filter-wrappr">
                            <div className='FIrst_1_11'>
                                <i className="img-fluid_side fa fa-th" aria-hidden="true"></i>
                                &nbsp;&nbsp;All products
                            </div>

                            <div className='FIrst_1_11'>
                                <img className="img-fluid_side" src={offersBtn} alt="Offers" />
                                &nbsp;&nbsp;Offers
                            </div>

                            <div className='FIrst_1_11'>
                                <i className="img-fluid_side fa fa-certificate" aria-hidden="true"></i>
                                &nbsp;&nbsp;Frequently Buy
                            </div>
                            

                            <div className='FIrst_1_11'>
                                <img className="img-fluid_side" src={wishlistBtn} alt="Wishlist"/>
                                &nbsp;&nbsp;Wishlist
                            </div>

                        </div>


                        <div className="segment_1 ">
                            <div className="segment-body">
                                <div  className="FIrst_1_11"  title=" Baby"  role="button"  aria-expanded="false"aria-controls="category" onClick={() => handleCategoryClick('baby')}>
                                    <img className="img-fluid_side" title="Baby" src={baby} alt="Category - Baby" />
                                    <span>&nbsp;&nbsp;Baby&nbsp;</span>
                                    <span style={{float:'right', right:'0px'}}>  
                                        <IoIosArrowForward className="arrow-icon" style={{ transform: `rotate(${rotations[1] || 0}deg)`,color:'#212529' }} onClick={(e) => {e.preventDefault();  e.stopPropagation();  toggleDropdown(1); }}/>
                                    </span>
                                    {dropdowns[1] && (
                                        <ul data-cid="1" id="category4" className="multi-collapse"  style={{ listStyleType: 'none',marginLeft:'22px', paddingLeft:'22px'}}>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('baby')}>
                                                <div className="FIrst_1" title="Accessories & Refills">
                                                    <img src={accessoriesRefills} className="img-fluid_side " alt="Accessories & Refills" />
                                                    Accessories & Refills
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('baby')}>
                                                <div className="FIrst_1" title="Baby Food & Snacks">
                                                    <img src={babyFoodSnacks} className="img-fluid_side " alt="Baby Food & Snacks" />
                                                    Baby Food & Snacks
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('baby')}>
                                                <div className="FIrst_1" title="Baby Formula">
                                                    <img src={babyFormula} className="img-fluid_side " alt="Baby Formula" />
                                                    Baby Formula
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('baby')}>
                                                <div className="FIrst_1" title="Children's Health">
                                                    <img src={childrensHealth} className="img-fluid_side " alt="Children's Health" />
                                                    Children's Health
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('baby')}>
                                                <div className="FIrst_1" title="Clothing and Accessories">
                                                    <img src={clothingAccessories} className="img-fluid_side " alt="Clothing and Accessories" />
                                                    Clothing
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('baby')}>
                                                <div className="FIrst_1" title="Diapers & Wipes">
                                                    <img src={diapersWipes} className="img-fluid_side " alt="Diapers & Wipes" />
                                                    Diapers & Wipes
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('baby')}>
                                                <div className="FIrst_1" title="School Supplies">
                                                    <img src={schoolSupplies} className="img-fluid_side " alt="School Supplies" />
                                                    School Supplies
                                                </div>
                                            </li>
                                        </ul>
                                    )}

                                </div>

                                <div  className="FIrst_1_11"  title=" Bakery & Snacks"  role="button"  aria-expanded="false"aria-controls="category" onClick={() => handleCategoryClick('bakery-snacks')}>
                                    <img className="img-fluid_side" title="Bakery & Snacks" src={bakery} alt="Category - Bakery & Snacks" />
                                    <span>&nbsp;&nbsp;Bakery & Snacks</span>
                                    <span style={{float:'right', right:'0px'}}>  
                                        <IoIosArrowForward className="arrow-icon" style={{ transform: `rotate(${rotations[2] || 0}deg)`,color:'#212529' }} onClick={(e) => {e.preventDefault();  e.stopPropagation();  toggleDropdown(2); }}/>
                                    </span>
                                    {dropdowns[2] && (
                                        <ul data-cid="2" id="category5" className="multi-collapse"  style={{ listStyleType: 'none',marginLeft:'22px', paddingLeft:'22px'}}>
                                        <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Bakery & Snacks')}>
                                            <div className="FIrst_1" title="Cake & Muffins"style={{paddingTop:'5px',paddingBottom:'5px'}}>
                                                <img src={cakeMuffins} className="img-fluid_side " alt="Cake & Muffins" />
                                                Cake & Muffins
                                            </div>
                                        </li>
                                        <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Bakery & Snacks')}>
                                            <div className="FIrst_1" title="Chips & Snacks">
                                                <img src={chipsSnacks} className="img-fluid_side " alt="Chips & Snacks" />
                                                Chips & Snacks
                                            </div>
                                        </li>
                                        <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Bakery & Snacks')}>
                                            <div className="FIrst_1" title="Chocolate & Candy">
                                                <img src={chocolateCandy} className="img-fluid_side " alt="Chocolate & Candy" />
                                                Chocolate & Candy
                                            </div>
                                        </li>
                                        <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Bakery & Snacks')}>
                                            <div className="FIrst_1" title="Cookies & Biscuit">
                                                <img src={cookiesBiscuit} className="img-fluid_side " alt="Cookies & Biscuit" />
                                                Cookies & Biscuit
                                            </div>
                                        </li>
                                        <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Bakery & Snacks')}>
                                            <div className="FIrst_1" title="Muri-Chira-Chanachur">
                                                <img src={muriChiraChanachur} className="img-fluid_side " alt="Muri-Chira-Chanachur" />
                                                Muri-Chanachur
                                            </div>
                                        </li>
                                        <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Bakery & Snacks')}>
                                            <div className="FIrst_1" title="Seasonal Bakery">
                                                <img src={seasonalBakery} className="img-fluid_side " alt="Seasonal Bakery" />
                                                Seasonal Bakery
                                            </div>
                                        </li>
                                        <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Bakery & Snacks')}>
                                            <div className="FIrst_1" title="Sugar Free">
                                                <img src={sugarFree} className="img-fluid_side " alt="Sugar Free" />
                                                Sugar Free
                                            </div>
                                        </li>
                                        <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Bakery & Snacks')}>
                                            <div className="FIrst_1" title="Sweets & Desserts">
                                                <img src={sweetsDesserts} className="img-fluid_side " alt="Sweets & Desserts" />
                                                Sweets & Desserts
                                            </div>
                                        </li>
                                    </ul>
                                    )}
                                </div>
                                <div  className="FIrst_1_11"  title="  Bath & Body Care"  role="button"  aria-expanded="false"aria-controls="category" onClick={() => handleCategoryClick('bath-body-care')} >
                                    <img className="img-fluid_side" title=" Bath & Body Care" src={bath} alt="Category -  Bath & Body Care" />
                                    <span>&nbsp; Bath & Body Care </span>
                                    <span style={{float:'right', right:'0px'}}>  
                                        <IoIosArrowForward className="arrow-icon" style={{ transform: `rotate(${rotations[3] || 0}deg)`,color:'#212529' }} onClick={(e) => {e.preventDefault();  e.stopPropagation();  toggleDropdown(3); }}/>
                                    </span>
                                    {dropdowns[3] && (
                                        <ul data-cid="3" id="category9" className="multi-collapse" style={{ listStyleType: 'none',marginLeft:'28px', paddingLeft:'22px' }}>
                                        <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Bath & Body Care')}>
                                            <div className="FIrst_1" title="Accessories" role="button" aria-expanded="false" aria-controls="category1">
                                            <img src={accessoriesImg} className="img-fluid_side " alt="Accessories" />
                                            Accessories
                                            </div>
                                        </li>
                                        <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Bath & Body Care')}>
                                            <div className="FIrst_1" title="Bar & Liquid Soap" role="button" aria-expanded="false" aria-controls="category2">
                                            <img src={barLiquidSoapImg} className="img-fluid_side " alt="Bar & Liquid Soap" />
                                            Bar & Liquid Soap
                                            </div>
                                        </li>
                                        <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Bath & Body Care')}>
                                            <div className="FIrst_1" title="Hair Care" role="button" aria-expanded="false" aria-controls="category3">
                                            <img src={hairCareImg} className="img-fluid_side " alt="Hair Care" />
                                            Hair Care
                                            </div>
                                        </li>
                                        <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Bath & Body Care')}>
                                            <div className="FIrst_1" title="Shampoo & Conditioner" role="button" aria-expanded="false" aria-controls="category4">
                                            <img src={shampooConditionerImg} className="img-fluid_side " alt="Shampoo & Conditioner" />
                                            Shampoo
                                            </div>
                                        </li>
                                        <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Bath & Body Care')}>
                                            <div className="FIrst_1" title="Skin Care products" role="button" aria-expanded="false" aria-controls="category5">
                                            <img src={skinCareImg} className="img-fluid_side " alt="Skin Care products" />
                                            Skin Care products
                                            </div>
                                        </li>
                                        <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Bath & Body Care')}>
                                            <div className="FIrst_1" title="Styling Products" role="button" aria-expanded="false" aria-controls="category6">
                                            <img src={stylingProductsImg} className="img-fluid_side " alt="Styling Products" />
                                            Styling Products                                            </div>
                                        </li>
                                        <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Bath & Body Care')}>
                                            <div className="FIrst_1" title="Toothpastes" role="button" aria-expanded="false" aria-controls="category7">
                                            <img src={toothpastesImg} className="img-fluid_side " alt="Toothpastes" />
                                            Toothpastes
                                            </div>
                                        </li>
                                        </ul>
                                    )}
                                </div>
                                <div  className="FIrst_1_11"  title="  Bath & Body Care"  role="button"  aria-expanded="false"aria-controls="category" onClick={() => handleCategoryClick('breakfast')}>
                                    <img className="img-fluid_side" title="Breakfast" src={breakfast} alt="Category - Breakfast" />
                                    <span>&nbsp; Breakfast </span>
                                        <span style={{float:'right', right:'0px'}}>  
                                        <IoIosArrowForward className="arrow-icon" style={{ transform: `rotate(${rotations[4] || 0}deg)`,color:'#212529' }} onClick={(e) => {e.preventDefault();  e.stopPropagation();  toggleDropdown(4); }}/>
                                    </span>
                                    {dropdowns[4] && (
                                       <ul data-cid="4" id="category129" className="multi-collapse" style={{ listStyleType: 'none' ,marginLeft:'28px', paddingLeft:'22px' }}>
                                       <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Breakfast')}>
                                           <div className="FIrst_1" title="Bread, Bun & Rolls" onClick={() => window.location.href = '/breakfast/bread-bun-rolls'} style={{ cursor: 'pointer' }}>
                                               <img src={breadsFromTheAisle} className="img-fluid_side " alt="Bread, Bun & Rolls" />
                                               Bread, Bun & Rolls
                                           </div>
                                       </li>
                                       <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Breakfast')}>
                                           <div className="FIrst_1" title="Cereal" onClick={() => window.location.href = '/breakfast/cereal'} style={{ cursor: 'pointer' }}>
                                               <img src={cerealBreakfastFoods} className="img-fluid_side " alt="Cereal" />
                                               Cereal
                                           </div>
                                       </li>
                                       <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Breakfast')}>
                                           <div className="FIrst_1" title="Jam, Jelly & Spreads" onClick={() => window.location.href = '/breakfast/jam-jelly-spreads'} style={{ cursor: 'pointer' }}>
                                               <img src={jam} className="img-fluid_side " alt="Jam, Jelly & Spreads" />
                                               Jam, Jelly & Spreads
                                           </div>
                                       </li>
                                       <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Breakfast')}>
                                           <div className="FIrst_1" title="Roti, Paratha & Naan" onClick={() => window.location.href = '/breakfast/roti-paratha-naan'} style={{ cursor: 'pointer' }}>
                                               <img src={breadDough} className="img-fluid_side " alt="Roti, Paratha & Naan" />
                                               Roti, Paratha & Naan
                                           </div>
                                       </li>
                                       <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Breakfast')}>
                                           <div className="FIrst_1" title="Tea & Coffee" onClick={() => window.location.href = '/breakfast/tea-coffee'} style={{ cursor: 'pointer' }}>
                                               <img src={tea} className="img-fluid_side " alt="Tea & Coffee" />
                                               Tea & Coffee
                                           </div>
                                       </li>
                                   </ul>
                                   
                                    )}
                                </div>

                                <div  className="FIrst_1_11"  title="  Bath & Body Care"  role="button"  aria-expanded="false"aria-controls="category" onClick={() => handleCategoryClick('dairy-eggs')}>
                                    <img className="img-fluid_side" title="Breakfast" src={Dairy} alt="Category - dairy-eggs" />
                                    <span>&nbsp; Dairy & Eggs </span>
                                        <span style={{float:'right', right:'0px'}}>  
                                        <IoIosArrowForward className="arrow-icon" style={{ transform: `rotate(${rotations[5] || 0}deg)`,color:'#212529' }} onClick={(e) => {e.preventDefault();  e.stopPropagation();  toggleDropdown(5); }}/>
                                    </span>
                                    {dropdowns[5] && (
                                       <ul data-cid="5" id="category129" className="multi-collapse" style={{ listStyleType: 'none' ,marginLeft:'28px', paddingLeft:'22px' }}>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Dairy & Eggs')}>
                                                <div className="FIrst_1" title=" Butter & Margarine">
                                                <img src={butterMargarineImg} className="img-fluid_side" alt="Butter & Margarine" /> 
                                                Butter & Margarine
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Dairy & Eggs')}>
                                                <div className="FIrst_1" title=" Cheese">
                                                <img src={cheeseImg} className="img-fluid_side" alt="Cheese" /> 
                                                Cheese
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Dairy & Eggs')}>
                                                <div className="FIrst_1" title=" Eggs">
                                                <img src={eggsImg} className="img-fluid_side" alt="Eggs" /> 
                                                Eggs
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Dairy & Eggs')}>
                                                <div className="FIrst_1" title=" Milk & Cream">
                                                <img src={milkCreamImg} className="img-fluid_side" alt="Milk & Cream" /> 
                                                Milk & Cream
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Dairy & Eggs')}>
                                                <div className="FIrst_1" title=" Milk Alternatives">
                                                <img src={milkAlternativesImg} className="img-fluid_side" alt="Milk Alternatives" /> 
                                                Milk Alternatives
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Dairy & Eggs')}>
                                                <div className="FIrst_1" title=" Yogurt">
                                                <img src={yogurtImg} className="img-fluid_side" alt="Yogurt" /> 
                                                Yogurt
                                                </div>
                                            </li>
                                        </ul>
                                   
                                    )}
                                </div>

                                <div  className="FIrst_1_11"  title="  Bath & Body Care"  role="button"  aria-expanded="false"aria-controls="category" onClick={() => handleCategoryClick('electronics')}>
                                    <i className="fas fa-box-open img-fluid_side"></i>
                                    <span>&nbsp; Electronics </span>
                                        <span style={{float:'right', right:'0px'}}>  
                                    </span>
                                </div>

                                <div  className="FIrst_1_11"  title="  Bath & Body Care"  role="button"  aria-expanded="false"aria-controls="category" onClick={() => handleCategoryClick('fish')}>
                                    <img className="img-fluid_side" title="Fish" src={Fish} alt="Category - Fish" />
                                    <span>&nbsp; Fish </span>
                                        <span style={{float:'right', right:'0px'}}>  
                                        <IoIosArrowForward className="arrow-icon" style={{ transform: `rotate(${rotations[6] || 0}deg)`,color:'#212529' }} onClick={(e) => {e.preventDefault();  e.stopPropagation();  toggleDropdown(6); }}/>
                                    </span>
                                    {dropdowns[6] && (
                                        <ul data-cid="6" id="category129" className="multi-collapse" style={{ listStyleType: 'none' ,marginLeft:'28px', paddingLeft:'22px' }}>
                                        <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Fish')}>
                                            <div className="FIrst_1" title=" Shutki">
                                            <img src={Shutki} className="img-fluid_side" alt="Shutki" /> 
                                            Shutki
                                            </div>
                                        </li>
                                        <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Fish')}>
                                            <div className="FIrst_1" title="  Fish Fillets & Steaks">
                                            <img src={FishF} className="img-fluid_side" alt=" Fish Fillets & Steaks" /> 
                                            Fish Fillets & Steaks
                                            </div>
                                        </li>
                                        <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Fish')}>
                                            <div className="FIrst_1" title="  Frozen Fish">
                                            <img src={Frozwen} className="img-fluid_side" alt=" Frozen Fish" /> 
                                            Frozen Fish
                                            </div>
                                        </li>
                                        <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Fish')}>
                                            <div className="FIrst_1" title="  Frozen Seafood">
                                            <img src={Seafood} className="img-fluid_side" alt=" Frozen Seafood" /> 
                                            Frozen Seafood
                                            </div>
                                        </li>
                                        <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Fish')}>
                                            <div className="FIrst_1" title="  Shrimp & Prawn">
                                            <img src={Shrimp} className="img-fluid_side" alt=" Shrimp & Prawn" /> 
                                            Shrimp & Prawn
                                            </div>
                                        </li>
                                    </ul>
                                    )}
                                </div>

                                <div  className="FIrst_1_11"  title="Fresh Meat"  role="button"  aria-expanded="false"aria-controls="category" onClick={() => handleCategoryClick('fresh-meat')}>
                                    <img className="img-fluid_side" title=" Fresh Meat" src={Fresh_Meat} alt="Category -  Fresh Meat" />
                                    <span>&nbsp;  Fresh Meat </span>
                                        <span style={{float:'right', right:'0px'}}>  
                                        <IoIosArrowForward className="arrow-icon" style={{ transform: `rotate(${rotations[7] || 0}deg)`,color:'#212529' }} onClick={(e) => {e.preventDefault();  e.stopPropagation();  toggleDropdown(7); }}/>
                                    </span>
                                    {dropdowns[7] && (
                                       <ul data-cid="7" id="category129" className="multi-collapse" style={{ listStyleType: 'none' ,marginLeft:'28px', paddingLeft:'22px' }}>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Fresh Meat')}>
                                                <div className="FIrst_1" title="  Beef & Steak">
                                                <img src={ Beef_Steak} className="img-fluid_side" alt=" Beef & Steak" /> 
                                                Beef & Steak
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Fresh Meat')}>
                                                <div className="FIrst_1" title=" Chicken">
                                                <img src={Chicken} className="img-fluid_side" alt="Chicken" /> 
                                                Chicken
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Fresh Meat')}>
                                                <div className="FIrst_1" title=" Duck">
                                                <img src={Duck} className="img-fluid_side" alt="Duck" /> 
                                                Duck
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Fresh Meat')}>
                                                <div className="FIrst_1" title="  Lamb">
                                                <img src={Lamb} className="img-fluid_side" alt=" Lamb" /> 
                                                Lamb
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Fresh Meat')}>
                                                <div className="FIrst_1" title="Mutton">
                                                <img src={Mutton} className="img-fluid_side" alt="Mutton" /> 
                                                Mutton & Goat
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Fresh Meat')}>
                                                <div className="FIrst_1" title=" Turkey">
                                                <img src={Turkey} className="img-fluid_side" alt="Turkey" /> 
                                                Turkey 
                                                </div>
                                            </li>
                                        </ul>
                                   
                                    )}
                                </div>
                                <div  className="FIrst_1_11"  title=" Frozen Food"  role="button"  aria-expanded="false"aria-controls="category" onClick={() => handleCategoryClick('frozen-food')}>
                                    <img className="img-fluid_side" title="  Frozen Food" src={Frozen_Food} alt="Category -   Frozen Food" />
                                    <span>&nbsp;   Frozen Food </span>
                                        <span style={{float:'right', right:'0px'}}>  
                                        <IoIosArrowForward className="arrow-icon" style={{ transform: `rotate(${rotations[8] || 0}deg)`,color:'#212529' }} onClick={(e) => {e.preventDefault();  e.stopPropagation();  toggleDropdown(8); }}/>
                                    </span>
                                    {dropdowns[8] && (
                                       <ul data-cid="8" id="category129" className="multi-collapse" style={{ listStyleType: 'none' ,marginLeft:'28px', paddingLeft:'22px' }}>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Frozen Food')}>
                                                <div className="FIrst_1" title="   Beef, Mutton & Lamb">
                                                <img src={Fresh_Meat} className="img-fluid_side" alt="  Beef, Mutton & Lamb" /> 
                                                Beef, Mutton & Lamb
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Frozen Food')}>
                                                <div className="FIrst_1" title=" Chicken">
                                                <img src={Breakfast} className="img-fluid_side" alt="Chicken" /> 
                                                Breakfast Food
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Frozen Food')}>
                                                <div className="FIrst_1" title="  Frozen Snacks & Meals">
                                                <img src={Frozen_Snacks} className="img-fluid_side" alt=" Frozen Snacks & Meals" /> 
                                                Frozen Snacks
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Frozen Food')}>
                                                <div className="FIrst_1" title="Ice Cream, Treats & Toppings">
                                                <img src={Ice_Cream} className="img-fluid_side" alt="  Ice Cream, Treats & Toppings" /> 
                                                Ice-Cream
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Frozen Food')}>
                                                <div className="FIrst_1" title=" Poultry & Chicken">
                                                <img src={Chicken} className="img-fluid_side" alt=" Poultry & Chicken" /> 
                                                Poultry & Chicken
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Frozen Food')}>
                                                <div className="FIrst_1" title=" Prawn & Seafood">
                                                <img src={Shrimp} className="img-fluid_side" alt="Prawn & Seafood" /> 
                                                Prawn & Seafood 
                                                </div>
                                            </li>
                                        </ul>                                  
                                    )}
                                </div>
                                <div  className="FIrst_1_11"  title=" Frozen Food"  role="button"  aria-expanded="false"aria-controls="category" onClick={() => handleCategoryClick('fruits-vegetable')}>
                                    <img className="img-fluid_side" title="  Frozen Food" src={Produce} alt="Category -   Frozen Food" />
                                    <span>&nbsp;    Fruits and Vegetable </span>
                                        <span style={{float:'right', right:'0px'}}>  
                                        <IoIosArrowForward className="arrow-icon" style={{ transform: `rotate(${rotations[9] || 0}deg)`,color:'#212529' }} onClick={(e) => {e.preventDefault();  e.stopPropagation();  toggleDropdown(9); }}/>
                                    </span>
                                    {dropdowns[9] && (
                                       <ul data-cid="9" id="category129" className="multi-collapse" style={{ listStyleType: 'none' ,marginLeft:'28px', paddingLeft:'22px' }}>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Fruits and Vegetables')}>
                                                <div className="FIrst_1" title="    Fresh Fruit">
                                                <img src={Fresh_Fruit} className="img-fluid_side" alt="  Fresh Fruit" /> 
                                                Fresh Fruit
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Fruits and Vegetables')}>
                                                <div className="FIrst_1" title=" Fresh_Vegetables">
                                                <img src={Fresh_Vegetables} className="img-fluid_side" alt="Fresh_Vegetables" /> 
                                                Fresh Vegetables
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Fruits and Vegetables')}>
                                                <div className="FIrst_1" title="   Frozen Vegetable & Fruits">
                                                <img src={Seasonal} className="img-fluid_side" alt="  Frozen Vegetable & Fruits" /> 
                                                Frozen Vegetable
                                                </div>
                                            </li>
                                        </ul>                                  
                                    )}
                                </div>

                                <div className="FIrst_1_11" title="Grocery" role="button" aria-expanded="false" aria-controls="category" onClick={() => handleCategoryClick('grocery')}>
                                    <img className="img-fluid_side" title="Grocery" src={Produce} alt="Category - Grocery" />
                                    <span>&nbsp; Grocery</span>
                                    <span style={{float:'right', right:'0px'}}>
                                        <IoIosArrowForward
                                            className="arrow-icon"
                                            style={{ transform: `rotate(${rotations[10] || 0}deg)`, color: '#212529' }}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                toggleDropdown(10);
                                            }}
                                        />
                                    </span>
                                    {dropdowns[10] && (
                                        <ul data-cid="10" id="category125" className="multi-collapse collapse show" style={{ listStyleType: 'none', marginLeft: '28px', paddingLeft: '22px' }}>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Grocery')}>
                                                <div className="FIrst_1" title="Canned and Packed Food">
                                                    <img src={Canned_and_Packed_Food} className="img-fluid cat-img" alt="Canned and Packed Food" />
                                                    Canned & Packed Food
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Grocery')}>
                                                <div className="FIrst_1" title="Color, Essences & Baking Needs">
                                                    <img src={Color_Essences_Baking_Needs} className="img-fluid cat-img" alt="Color, Essences & Baking Needs" />
                                                    Color & Baking Needs
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Grocery')}>
                                                <div className="FIrst_1" title="Dal, Lentils & Beans">
                                                    <img src={Dal_Lentils_Beans} className="img-fluid cat-img" alt="Dal, Lentils & Beans" />
                                                    Dal, Lentils & Beans
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Grocery')}>
                                                <div className="FIrst_1" title="Dried Fruit & Nuts">
                                                    <img src={Dried_Fruit_Nuts} className="img-fluid cat-img" alt="Dried Fruit & Nuts" />
                                                    Dried Fruit & Nuts
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Grocery')}>
                                                <div className="FIrst_1" title="Flour, Atta & Suji">
                                                    <img src={Flour_Attas_Suji} className="img-fluid cat-img" alt="Flour, Atta & Suji" />
                                                    Atta & Suji
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Grocery')}>
                                                <div className="FIrst_1" title="Honey, Syrup & Ayurveda">
                                                    <img src={Honey_Syrup_Ayurveda} className="img-fluid cat-img" alt="Honey, Syrup & Ayurveda" />
                                                    Honey & Ayurveda
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Grocery')}>
                                                <div className="FIrst_1" title="Masala & Spices">
                                                    <img src={Masala_Spices} className="img-fluid cat-img" alt="Masala & Spices" />
                                                    Masala & Spices
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Grocery')}>
                                                <div className="FIrst_1" title="Noodle, Pasta & Shemai">
                                                    <img src={Noodle_Pasta_Shemai} className="img-fluid cat-img" alt="Noodle, Pasta & Shemai" />
                                                    Noodle,Pasta & Shemai
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Grocery')}>
                                                <div className="FIrst_1" title="OIL / GHEE / DALDA">
                                                    <img src={Oil_Ghee_Dalda} className="img-fluid cat-img" alt="OIL / GHEE / DALDA" />
                                                    OIL / GHEE / DALDA
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Grocery')}>
                                                <div className="FIrst_1" title="Pickles">
                                                    <img src={Pickles} className="img-fluid cat-img" alt="Pickles" />
                                                    Pickles
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Grocery')}>
                                                <div className="FIrst_1" title="Rice & Grains">
                                                    <img src={Rice_Grains} className="img-fluid cat-img" alt="Rice & Grains" />
                                                    Rice & Grains
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Grocery')}>
                                                <div className="FIrst_1" title="Salt & Sugar">
                                                    <img src={Salt_Sugar} className="img-fluid cat-img" alt="Salt & Sugar" />
                                                    Salt & Sugar
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Grocery')}>
                                                <div className="FIrst_1" title="Sauce, Ketchup & Vinegar">
                                                    <img src={Sauce_Ketchup_Vinegar} className="img-fluid cat-img" alt="Sauce, Ketchup & Vinegar" />
                                                    Ketchup & Vinegar
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Grocery')}>
                                                <div className="FIrst_1" title="Water, Juice & Beverages">
                                                    <img src={Water_Juice_Beverages} className="img-fluid cat-img" alt="Water, Juice & Beverages" />
                                                    Juice & Beverages
                                                </div>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                                <div className="FIrst_1_11" title="Home & Kitchen" role="button" aria-expanded={dropdowns[11]} aria-controls="category48"   onClick={() => handleCategoryClick('home-kitchen')}>
                                    <img className="img-fluid_side" title="Home & Kitchen" src={Home} alt="Category - Home & Kitchen" />
                                    <span>&nbsp;Home & Kitchen</span>
                                    <span style={{float:'right', right:'0px' }}>
                                        <IoIosArrowForward className="arrow-icon" style={{ transform: `rotate(${rotations[11] || 0}deg)`, color: '#212529' }} onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleDropdown(11); }} />
                                    </span>
                                    {dropdowns[11] && (
                                        <ul data-cid="11" id="category48" className="multi-collapse" style={{ listStyleType: 'none', marginLeft: '28px', paddingLeft: '22px' }}>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Home & Kitchen')}>
                                                <div className="FIrst_1" title="Bakeware & Cookware">
                                                    <img src={Bakeware_Cookware} className="img-fluid_side" alt="Bakeware & Cookware" />
                                                    Cookware
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Home & Kitchen')}>
                                                <div className="FIrst_1" title="Candles, Incense, Lighters">
                                                    <img src={Candles_Incense_Lighters} className="img-fluid_side" alt="Candles, Incense, Lighters" />
                                                    Candles & Lighters
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Home & Kitchen')}>
                                                <div className="FIrst_1" title="Cleaning & Maintenance">
                                                    <img src={Supplies_Maintenance} className="img-fluid_side" alt="Cleaning & Maintenance" />
                                                    Cleaning Stufs
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Home & Kitchen')}>
                                                <div className="FIrst_1" title="DISPOSABLE ITEMS">
                                                    <img src={Gadgets_Tools} className="img-fluid_side" alt="DISPOSABLE ITEMS" />
                                                    Disposable Items
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Home & Kitchen')}>
                                                <div className="FIrst_1" title="Home Furnishing">
                                                    <img src={Home} className="img-fluid_side" alt="Home Furnishing" />
                                                    Home Furnishing
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Home & Kitchen')}>
                                                <div className="FIrst_1" title="Kitchen Gadgets & Tools">
                                                    <img src={Kitchen_Gadgets_Tools} className="img-fluid_side" alt="Kitchen Gadgets & Tools" />
                                                    Kitchen Gadgets
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Home & Kitchen')}>
                                                <div className="FIrst_1" title="Napkin & Tissue">
                                                    <i className="fas fa-box-open img-fluid_side"></i> Napkin & Tissue
                                                </div>
                                            </li>
                                            <li className="sidebar-dropdown-item"  onClick={() => handleSubcategoryClick('Home & Kitchen')}>
                                                <div className="FIrst_1" title="Prayers">
                                                    <img src={Prayers} className="img-fluid_side" alt="Prayers" />
                                                    Prayers
                                                </div>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                               
                            </div>
                        </div>



                
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
