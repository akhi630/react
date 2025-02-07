import { configureStore, createSlice } from "@reduxjs/toolkit";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Cart from "./Cart";
// import Makeup from "./Makeup";


const productsSlice = createSlice({
    name:"products",
    initialState:{
        
        Veg:[
        {image:"potato.jpg",name:"Potato",price:22.00},
        {image:"greenchilli.jpg",name:"Mirchi",price:29.00},
        {image:"onion.jpg",name:"Onion",price:10.00},
        {image:"raddish.jpg",name:"Raddish",price:20.00},
        {image:"carrot.jpg",name:"Carrot",price:40.00},
        {image:"beans.jpg",name:"Beans",price:45.00},
        {image:"bitter guard.jpg",name:"Bitter guard",price:36.00},
        {image:"ladies finger.jpg",name:"Ladies finger",price:43.00}
    ],
NonVeg:[
        {image:"chiken.jpg",name:"chiken",price:200.00},
        {image:"mutton.jpg",name:"mutton",price:231.00},
        {image:"fish.jpg",name:"fishes",price:193.00},
        {image:"Crab.jpg",name:"Crab",price:345.00},
        {image:"prawns.jpg",name:"Prawns",price:193.00},
        {image:"egg.jpg",name:"Eggs",price:193.00}
],

Milk:[
    {image:"jersy.jpg",name:"Jersy",price:200.00},
    {image:"sangham.jpg",name:"Sangham",price:231.00},
    {image:"heritage.jpg",name:"Heritage",price:193.00},
    {image:"vishaka.jpg",name:"vishaka",price:345.00},
    {image:"arokya.jpg",name:"Arokya",price:193.00},
    {image:"delight.jpg",name:"Country delight",price:193.00}
]
// Makeup:[
//         {image:"lipstick.jpg",name:"Lipstick",price:200.00},
//         {image:"nail polish.jpg",name:"Nailpalice",price:231.00},
//         {image:"hair oil.jpg",name:"HairOil",price:193.00},
//         {image:"lackme.jpg",name:"Lackme", price:64.98},
//         {image:"lotion.jpg",name:"Lotion", price:32},
//         {image:"lipstick.jpg",name:"Lipstick" ,price:198.98},
//         {image:"foundation.jpg",name:"Foundation" ,price:234.98},
//         {image:"eyeshadow.jpg",name:"Eyeshadow" ,price:51.98},
//         {image:"eyeliner.jpg",name:"Eyeliner" ,price:50.98},
//         {image:"primer.jpg",name:"Primer" ,price:130.98}
// ]
    },
})

    const cartSlice = createSlice({
        name:'cart',
        initialState:[],
        reducers:{
            addTocart:(state,action)=>{
                const Item=state.find(Item=>Item.name===action.payload.name);
                if(Item)
                {
                  Item.quantity+=1;
                }
                else
                {
                    state.push({...action.payload,quantity:1});
                }
            },
            increment:(state,action)=>{
                let item=state.find(item=>item.name===action.payload.name);
                if(item)
                    {
                      item.quantity+=1;
                    }
            },
           decrement:(state,action)=>{
                let item=state.find(item=>item.name===action.payload.name);
                if(item && item.quantity>1)
                    {
                      item.quantity-=1;
                    }
                    else{
                        return state.filter(item=>item.name!==action.payload.name);
                    }
            },
            clear:(state,action)=>{
                return state.filter(item=>item.name!==action.payload.name);
               
            },
            clearCart:()=>[],
                }
            }
        )


        let purchaseDetailsSlice=createSlice({
            name:"purchaseDetails",
            initialState:[],
            reducers:{
                addPurchaseDetails:(state,action)=>{
                    state.push(action.payload)
                }
            }
        })

        const authSlice=createSlice({
            name:"auth",
            initialState:
            {
                isAuthenticated:localStorage.getItem("username")?true:false,
                user:localStorage.getItem("username")
            },
            reducers:
            {
                login:(state,action)=>{
                    state.isAuthenticated=true;
                    state.user=action.payload;
                    localStorage.setItem("username",action.payload);
                },
                logout:(state)=>{
                    state.isAuthenticated=false;
                    state.user="";
                    localStorage.removeItem("username");
                },
            

            },
        });
        
const store = configureStore({
    reducer:{products : productsSlice.reducer,
             cart:cartSlice.reducer,
             purchaseDetails:purchaseDetailsSlice.reducer,
             auth:authSlice.reducer
    },
});


export const {addTocart,increment,decrement,clearCart,clear}=cartSlice.actions;
export const{addPurchaseDetails}=purchaseDetailsSlice.actions;
export const{login,logout}=authSlice.actions;
export default store;