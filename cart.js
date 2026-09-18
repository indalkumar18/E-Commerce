
function getCart(){return JSON.parse(localStorage.getItem("shopperz-cart")||"[]")}
function saveCart(cart){localStorage.setItem("shopperz-cart",JSON.stringify(cart))}
function addToCart(id,qty=1){
  const p=getProduct(id), cart=getCart();
  if(!p)return;
  const item=cart.find(x=>x.id===p.id);
  if(item)item.qty+=qty;else cart.push({id:p.id,qty});
  saveCart(cart);
  if(typeof showToast==="function")showToast(p.name+" added to cart");
  updateCartCount();
}
function updateCartCount(){
  const count=getCart().reduce((s,i)=>s+i.qty,0);
  document.querySelectorAll("[data-cart-count]").forEach(x=>x.textContent=count);
}
function cartTotal(){
  return getCart().reduce((s,i)=>{const p=getProduct(i.id);return s+(p?p.price*i.qty:0)},0);
}
function renderCart(){
  const wrap=document.querySelector("#cartItems"), subtotalEl=document.querySelector("#subtotal"), totalEl=document.querySelector("#total");
  if(!wrap)return;
  const cart=getCart();
  if(!cart.length){
    wrap.innerHTML='<div class="empty"><h2>Your cart is empty</h2><p>Add some products to continue shopping.</p><br><a class="btn" href="products.html">Shop Now</a></div>';
    subtotalEl.textContent=money(0);totalEl.textContent=money(0);return;
  }
  wrap.innerHTML=cart.map(i=>{
    const p=getProduct(i.id);
    return `<div class="cart-item">
      <img src="${p.image}" alt="${p.name}">
      <div><h3>${p.name}</h3><small>${money(p.price)} each</small></div>
      <div class="cart-qty"><button onclick="changeQty(${p.id},-1)">−</button><span>${i.qty}</span><button onclick="changeQty(${p.id},1)">+</button></div>
      <button class="remove" onclick="removeItem(${p.id})">Remove</button>
    </div>`;
  }).join("");
  const sub=cartTotal(), shipping=sub>=5000?0:99;
  subtotalEl.textContent=money(sub);document.querySelector("#shipping").textContent=shipping?money(shipping):"FREE";
  totalEl.textContent=money(sub+shipping);
}
function changeQty(id,d){
  const cart=getCart(),item=cart.find(x=>x.id===id);if(!item)return;
  item.qty+=d;if(item.qty<=0)cart.splice(cart.indexOf(item),1);
  saveCart(cart);renderCart();updateCartCount();
}
function removeItem(id){saveCart(getCart().filter(x=>x.id!==id));renderCart();updateCartCount();if(typeof showToast==="function")showToast("Product removed")}
document.addEventListener("DOMContentLoaded",()=>{renderCart();updateCartCount()});
