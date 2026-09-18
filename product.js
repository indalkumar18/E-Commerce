
document.addEventListener("DOMContentLoaded",()=>{
 const id=new URLSearchParams(location.search).get("id")||1,p=getProduct(id);
 const box=document.querySelector("#productDetail");
 if(!p){box.innerHTML="<p>Product not found.</p>";return}
 box.innerHTML=`<div class="detail-image"><img src="${p.image}" alt="${p.name}"></div>
 <div class="detail-info"><h1>${p.name}</h1><div class="rating">★★★★★ <span style="color:#777">4.8/5</span></div>
 <div class="big-price">${money(p.price)} <span class="old-price">${money(p.oldPrice)}</span></div>
 <p>${p.desc} This product is designed for quality, comfort and everyday use.</p>
 <ul style="margin:20px 0 20px 20px;color:#666"><li>Quality checked product</li><li>Secure packaging</li><li>Easy return support</li></ul>
 <div class="qty"><button id="minus">−</button><input id="qty" value="1" min="1" type="number"><button id="plus">+</button></div>
 <button class="btn" id="addDetail">Add to Cart</button></div>`;
 let q=document.querySelector("#qty");
 document.querySelector("#minus").onclick=()=>q.value=Math.max(1,+q.value-1);
 document.querySelector("#plus").onclick=()=>q.value=+q.value+1;
 document.querySelector("#addDetail").onclick=()=>addToCart(p.id,+q.value);
});
