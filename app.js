/* ====== EDIT HERE ====== */
const PHONE = "254717235831";
const SOCIAL = { Facebook:"#", Instagram:"#", TikTok:"#", X:"#" }; // paste your links here
// price: number in KSh, or 0 to show "Ask price". img: optional file in /img
const PRODUCTS = [
 {id:"tv32",cat:"TVs",name:'Vitron 32" Smart Android TV',price:0,img:"tvs.jpg",ico:"📺"},
 {id:"tv40",cat:"TVs",name:'Vitron 40" Smart Android TV',price:0,img:"tvs.jpg",ico:"📺"},
 {id:"tv43",cat:"TVs",name:'Vitron 43" Smart Android TV',price:0,img:"tvs.jpg",ico:"📺"},
 {id:"tv50",cat:"TVs",name:'Vitron 50" 4K Android TV',price:0,img:"tvs.jpg",ico:"📺"},
 {id:"tv55",cat:"TVs",name:'Vitron 55" 4K Android TV',price:0,img:"tvs.jpg",ico:"📺"},
 {id:"tv65",cat:"TVs",name:'Vitron 65" 4K Android TV',price:0,img:"tvs.jpg",ico:"📺"},
 {id:"cam1",cat:"CCTV",name:"Calus E27 Max Smart Bulb Camera",price:0,img:"camera.jpg",ico:"📷"},
 {id:"cam2",cat:"CCTV",name:"CCTV Camera Kit (installation available)",price:0,ico:"🎥"},
 {id:"cab",cat:"Networking",name:"CAT6 Ethernet Cable (roll)",price:0,ico:"🔌"},
 {id:"rtr",cat:"Networking",name:"WiFi Router",price:0,ico:"📡"},
 {id:"mb",cat:"TV Spares",name:"TV Mainboard",price:0,img:"board.jpg",ico:"🧩"},
 {id:"led",cat:"TV Spares",name:"TV LED Backlight Strips",price:0,img:"repair.jpg",ico:"💡"},
 {id:"ec",cat:"TV Spares",name:"Electronic Components Pack",price:0,ico:"🔧"},
 {id:"spk",cat:"Audio",name:"Speaker / PA System",price:0,ico:"🔊"},
];
const SERVICES = [
 ["📺","TV and woofer repair","Backlight, mainboard, panel and power faults fixed on our bench."],
 ["🌐","Internet and networking","Routers, LAN cabling and structured network setup."],
 ["🎥","CCTV installation","Supply, installation and maintenance of cameras."],
 ["💻","Laptops and computers","Repairs, upgrades and software setup."],
 ["🧊","Appliance repair","Fridges, microwaves, dispensers for home and office."],
 ["🔊","Speaker and PA repair","Amplifiers, mixers and speaker systems."],
 ["🔧","Electronic spares","Components, boards and parts for technicians."],
];
/* ======================== */
const $=s=>document.querySelector(s), money=n=>"KSh "+n.toLocaleString();
const wa=t=>`https://wa.me/${PHONE}?text=${encodeURIComponent(t)}`;
let cart={}; try{cart=JSON.parse(localStorage.getItem("hes-cart")||"{}")}catch(e){}

/* page loader */
const t0=performance.now();
addEventListener("load",()=>setTimeout(()=>$("#loader").classList.add("hide"),Math.max(0,1400-(performance.now()-t0))));
function flash(ms=650){const l=$("#loader");l.classList.remove("hide");setTimeout(()=>l.classList.add("hide"),ms)}
document.addEventListener("click",e=>{
  const b=e.target.closest(".btn[data-load]");
  if(b){b.classList.add("is-loading");setTimeout(()=>b.classList.remove("is-loading"),900)}
  const a=e.target.closest('nav a, .brand');
  if(a){flash(); $("#menu").classList.remove("on")}
});

/* render */
$("#svcGrid").innerHTML=SERVICES.map(([i,t,d])=>`<article class="card rv" data-svc="${t}"><div class="ico">${i}</div><h3>${t}</h3><p>${d}</p></article>`).join("");
document.querySelectorAll("[data-svc]").forEach(c=>c.onclick=()=>{flash();setTimeout(()=>open(wa(`Hello Hopetech, I need: ${c.dataset.svc}`),"_blank"),500)});
const cats=["All",...new Set(PRODUCTS.map(p=>p.cat))];let cat="All";
function drawProducts(){
  $("#filters").innerHTML=cats.map(c=>`<button class="${c==cat?"on":""}" data-c="${c}">${c}</button>`).join("");
  $("#prodGrid").innerHTML=PRODUCTS.filter(p=>cat=="All"||p.cat==cat).map(p=>`<article class="card rv in"><div class="thumb" style="${p.img?`background-image:url(img/${p.img})`:""}">${p.img?"":p.ico}</div><h3>${p.name}</h3><div class="price">${p.price?money(p.price):"Ask price"}</div><button class="btn primary" data-add="${p.id}" data-load>Add to cart</button></article>`).join("");
}
$("#filters").onclick=e=>{if(e.target.dataset.c){cat=e.target.dataset.c;drawProducts()}};
$("#prodGrid").onclick=e=>{const id=e.target.dataset.add;if(id){cart[id]=(cart[id]||0)+1;save();toast("Added to cart")}};
$("#social").innerHTML=Object.entries(SOCIAL).map(([n,u])=>`<a href="${u}" target="_blank" rel="noopener">${n}</a>`).join("");

/* cart */
function save(){localStorage.setItem("hes-cart",JSON.stringify(cart));drawCart()}
function drawCart(){
  const ids=Object.keys(cart).filter(i=>PRODUCTS.find(p=>p.id==i));let n=0,tot=0,ask=false;
  $("#items").innerHTML=ids.length?ids.map(i=>{const p=PRODUCTS.find(x=>x.id==i),q=cart[i];n+=q;p.price?tot+=p.price*q:ask=true;
    return `<div class="row"><div><b>${p.name}</b><br><small>${p.price?money(p.price):"Ask price"}</small></div><div class="qty"><button data-m="${i}">−</button>${q}<button data-p="${i}">+</button></div></div>`}).join(""):`<p class="empty">Your cart is empty.<br>Add items from the shop.</p>`;
  $("#cartCount").textContent=n;$("#total").textContent=tot?money(tot)+(ask?" + items to quote":""):"Ask for price";
}
$("#items").onclick=e=>{const m=e.target.dataset.m,p=e.target.dataset.p;if(m){cart[m]--;if(cart[m]<1)delete cart[m]}if(p)cart[p]++;if(m||p)save()};
const toggle=on=>{$("#drawer").classList.toggle("on",on);$("#scrim").classList.toggle("on",on)};
$("#openCart").onclick=()=>toggle(true);$("#closeCart").onclick=$("#scrim").onclick=()=>toggle(false);
$("#clear").onclick=()=>{cart={};save()};
$("#order").onclick=()=>{
  const ids=Object.keys(cart);if(!ids.length)return toast("Add items first");
  let tot=0,lines=ids.map((i,k)=>{const p=PRODUCTS.find(x=>x.id==i);if(p.price)tot+=p.price*cart[i];return `${k+1}. ${p.name} x${cart[i]}${p.price?" - "+money(p.price*cart[i]):""}`});
  const nm=$("#cName").value.trim();
  setTimeout(()=>open(wa(`Hello Hopetech, I would like to order:\n${lines.join("\n")}\n${tot?"Total: "+money(tot)+"\n":""}${nm?"Name: "+nm:""}`),"_blank"),600);
};
$("#qSend").onclick=()=>setTimeout(()=>open(wa(`Hello Hopetech, I am ${$("#qName").value||"a customer"}. ${$("#qMsg").value}`),"_blank"),600);

/* effects */
function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("on");setTimeout(()=>t.classList.remove("on"),1500)}
$("#burger").onclick=()=>$("#menu").classList.toggle("on");
$("#yr").textContent=new Date().getFullYear();
const words=["power it up.","get it working.","keep you connected.","protect your place."];let wi=0,ci=0,del=false;
(function type(){const w=words[wi];$("#typed").textContent=w.slice(0,ci);ci+=del?-1:1;
  if(!del&&ci>w.length){del=true;return setTimeout(type,1600)}
  if(del&&ci<0){del=false;wi=(wi+1)%words.length;ci=0}
  setTimeout(type,del?30:70)})();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll(".rv").forEach(el=>io.observe(el));
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,n=+el.dataset.n;let v=0;const s=setInterval(()=>{v++;el.textContent=v;if(v>=n)clearInterval(s)},900/n);co.unobserve(el)}));
document.querySelectorAll("[data-n]").forEach(el=>co.observe(el));
if(!matchMedia("(prefers-reduced-motion:reduce)").matches)document.querySelectorAll(".tilt").forEach(el=>{
  el.onmousemove=e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform=`perspective(700px) rotateY(${x*10}deg) rotateX(${-y*10}deg)`};
  el.onmouseleave=()=>el.style.transform=""});
drawProducts();drawCart();
