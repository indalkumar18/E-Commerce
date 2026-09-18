
function users(){return JSON.parse(localStorage.getItem("shopperz-users")||"[]")}
document.addEventListener("DOMContentLoaded",()=>{
 const form=document.querySelector("#authForm"),msg=document.querySelector("#authMessage");
 if(!form)return;
 form.addEventListener("submit",e=>{
  e.preventDefault();const fd=new FormData(form),mode=form.dataset.mode;
  let us=users(),email=fd.get("email"),pass=fd.get("password");
  if(mode==="register"){
   if(us.some(u=>u.email===email)){msg.textContent="Email already registered.";msg.style.display="block";return}
   us.push({name:fd.get("name"),email,password:pass});localStorage.setItem("shopperz-users",JSON.stringify(us));
   msg.textContent="Registration successful. You can login now.";msg.style.display="block";form.reset();
  }else{
   const u=us.find(x=>x.email===email&&x.password===pass);
   msg.textContent=u?"Login successful!":"Invalid email or password.";msg.style.display="block";
   if(u)localStorage.setItem("shopperz-user",JSON.stringify(u));
  }
 });
});
