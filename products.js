
const PRODUCTS = [
 {id:1,name:"Running Shoes",category:"shoes",price:2499,oldPrice:2999,image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",desc:"Comfortable running shoes for everyday use."},
 {id:2,name:"Men's T-Shirt",category:"fashion",price:799,oldPrice:999,image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",desc:"Soft cotton T-shirt with a modern fit."},
 {id:3,name:"Blue Jeans",category:"fashion",price:1499,oldPrice:1899,image:"https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=80",desc:"Classic blue denim jeans."},
 {id:4,name:"Classic Watch",category:"accessories",price:1999,oldPrice:2499,image:"https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",desc:"Elegant watch for daily and formal wear."},
 {id:5,name:"Smart Phone",category:"electronics",price:18999,oldPrice:21999,image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80",desc:"Modern smartphone with a bright display."},
 {id:6,name:"Smart TV",category:"electronics",price:32999,oldPrice:36999,image:"https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=700&q=80",desc:"Large smart television for home entertainment."},
 {id:7,name:"Hoodie",category:"fashion",price:1299,oldPrice:1599,image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=80",desc:"Warm and stylish hoodie."},
 {id:8,name:"Dinner Set",category:"home",price:2499,oldPrice:2999,image:"https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=700&q=80",desc:"Elegant dinner set for your dining table."},
 {id:9,name:"Laptop",category:"electronics",price:54999,oldPrice:59999,image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=80",desc:"Powerful laptop for study and work."},
 {id:10,name:"Coffee Maker",category:"home",price:3999,oldPrice:4499,image:"https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=700&q=80",desc:"Easy-to-use coffee maker for your kitchen."},
 {id:11,name:"Travel Bag",category:"accessories",price:1799,oldPrice:2199,image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",desc:"Spacious travel bag with multiple compartments."},
 {id:12,name:"Digital Camera",category:"electronics",price:28999,oldPrice:31999,image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=80",desc:"Capture clear and beautiful photos."}
];

function money(n){return "₹"+Number(n).toLocaleString("en-IN")}
function getProduct(id){return PRODUCTS.find(p=>p.id===Number(id))}
