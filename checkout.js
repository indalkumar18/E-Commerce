
document.addEventListener("DOMContentLoaded",()=>{
 const total=document.querySelector("#checkoutTotal"),cart=getCart(),sub=cartTotal(),ship=sub>=5000?0:99;
 if(total)total.textContent=money(sub+ship);
 const form=document.querySelector("#checkoutForm"),msg=document.querySelector("#orderMessage");
 form?.addEventListener("submit",e=>{
  e.preventDefault();
  if(!getCart().length){msg.textContent="Your cart is empty.";msg.style.display="block";return}
  const orderId="SPZ"+Date.now().toString().slice(-7);
  localStorage.removeItem("shopperz-cart");
  msg.innerHTML=`Order placed successfully! Your demo order ID is <strong>${orderId}</strong>.`;
  msg.style.display="block";form.reset();updateCartCount();
 });
});
