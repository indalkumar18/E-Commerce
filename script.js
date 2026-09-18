
document.addEventListener("DOMContentLoaded",()=>{
  const menu=document.querySelector(".mobile-menu");
  const ham=document.querySelector(".hamburger");
  if(ham&&menu) ham.addEventListener("click",()=>menu.classList.toggle("is-open"));

  const toast=document.createElement("div");
  toast.className="toast";
  document.body.appendChild(toast);
  window.showToast=(msg)=>{
    toast.textContent=msg;toast.classList.add("show");
    clearTimeout(window.toastTimer);
    window.toastTimer=setTimeout(()=>toast.classList.remove("show"),1800);
  };

  document.querySelectorAll("[data-cart-count]").forEach(el=>{
    el.textContent=JSON.parse(localStorage.getItem("shopperz-cart")||"[]").reduce((s,i)=>s+i.qty,0);
  });

  const search=document.querySelector("#globalSearch");
  if(search) search.addEventListener("keydown",e=>{
    if(e.key==="Enter"){
      location.href="products.html?search="+encodeURIComponent(search.value);
    }
  });
});
