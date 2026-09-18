
function productCard(p){
 return `<article class="product-card">
   <div class="product-image"><span class="badge">${p.category}</span><img src="${p.image}" alt="${p.name}"></div>
   <div class="product-info"><h3>${p.name}</h3><p>${p.desc}</p>
   <div class="price">${money(p.price)} <span class="old-price">${money(p.oldPrice)}</span></div>
   <div class="card-actions"><a class="btn outline" href="product.html?id=${p.id}">View</a><button class="btn" onclick="addToCart(${p.id})">Add to Cart</button></div>
   </div></article>`;
}
function renderProducts(list=PRODUCTS){
 const grid=document.querySelector("#productsGrid");if(!grid)return;
 grid.innerHTML=list.length?list.map(productCard).join(""):'<div class="empty" style="grid-column:1/-1">No products found.</div>';
}
document.addEventListener("DOMContentLoaded",()=>{
 let list=[...PRODUCTS];
 const params=new URLSearchParams(location.search), search=params.get("search")||"";
 const input=document.querySelector("#productSearch");if(input)input.value=search;
 const filter=()=>{const q=(input?.value||"").toLowerCase(),cat=document.querySelector("#categoryFilter")?.value||"all";renderProducts(PRODUCTS.filter(p=>(cat==="all"||p.category===cat)&&(!q||p.name.toLowerCase().includes(q)||p.desc.toLowerCase().includes(q))))};
 input?.addEventListener("input",filter);document.querySelector("#categoryFilter")?.addEventListener("change",filter);
 document.querySelectorAll(".category-chip").forEach(c=>c.addEventListener("click",()=>{document.querySelector("#categoryFilter").value=c.dataset.filter;filter()}));
 filter();
});
