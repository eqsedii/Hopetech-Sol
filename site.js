/* ===== EDIT HERE ===== */
const PHONE="254717235831", PHONE2="254721638309", EMAIL="hopetechsolutions770@gmail.com";
const SOCIAL={Facebook:"https://www.facebook.com/share/18gKFPDxe1/",Instagram:"#",TikTok:"#"}; // paste Instagram/TikTok links (leave "#" to hide)
const MAPS="https://maps.app.goo.gl/vrrsfFsbz8zgvP8w7?g_st=ac";
// price: number in KSh, or 0 to show "Call for price"
const PRODUCTS=[
{id:"tv75",cat:"TVs",name:'Hisense 75" QLED Q6 Series TV',img:"tv-hisense-75",price:0},
{id:"tvv1",cat:"TVs",name:"Vitron Smart Android TV",img:"tv-vitron-remote",price:0},
{id:"tvv2",cat:"TVs",name:"Vitron 4K TV with Apps and Voice Remote",img:"tv-vitron-apps",price:0},
{id:"tvg",cat:"Power",name:"TV/DVD Guard Surge Protector",img:"tv-guard",price:0},
{id:"c1",cat:"CCTV",name:"Tiandy Dome Camera (Colour Night Vision)",img:"cam-dome-1",price:0},
{id:"c2",cat:"CCTV",name:"Tiandy Dome Camera, Indoor/Outdoor",img:"cam-dome-3",price:0},
{id:"c3",cat:"CCTV",name:"Tiandy Bullet Camera",img:"cam-bullet",price:0},
{id:"c4",cat:"CCTV",name:"Hikvision Colour Camera Pack",img:"hikvision-cams",price:0},
{id:"c5",cat:"CCTV",name:"Hikvision Camera and Recorder Kit",img:"hikvision-kits",price:0},
{id:"c6",cat:"CCTV",name:"Complete CCTV System with Monitor",img:"cctv-monitor",price:0},
{id:"c7",cat:"CCTV",name:"Solar AI Camera (4G)",img:"solar-cam-ai",price:0},
{id:"c8",cat:"CCTV",name:"Solar Dual-Lens PTZ Camera",img:"solar-ptz",price:0},
{id:"r1",cat:"Internet",name:"Tenda Wireless Easy Setup Router",img:"tenda-router-hand",price:0},
{id:"r2",cat:"Internet",name:"Tenda 4-Antenna WiFi Router",img:"tenda-open",price:0},
{id:"r3",cat:"Internet",name:"Tenda Router Wholesale Carton",img:"tenda-boxes",price:0},
{id:"r4",cat:"Internet",name:"5G Wireless Router (CPE)",img:"router-5g",price:0},
{id:"r5",cat:"Internet",name:"Airtel 5G Outdoor Router Kit (AX3S)",img:"airtel-ax3s",price:0},
{id:"r6",cat:"Internet",name:"WiFi Router with Cabling Kit",img:"router-cables",price:0},
{id:"a1",cat:"Audio",name:"Electronic Keyboard with Microphone",img:"keyboard",price:0},
{id:"a2",cat:"Audio",name:"Wireless Handheld Microphones (set of 4)",img:"mics",price:0},
{id:"a3",cat:"Audio",name:"Professional Audio Mixer",img:"mixers",price:0},
];
const SERVICES=[
["📺","TV repair","No picture, sound problems, remote trouble or any other fault, fixed on our own bench.",["No picture or no sound","Broken screen replacement","Remote and software issues"],1],
["🔥","Microwave repair","Microwave not heating, sparking or making strange noises? We diagnose and fix it.",["Not heating","Sparks inside","Strange noise"],1],
["💻","Computer and laptop repair","Broken screens, faulty chargers, slow machines and software setup.",["Broken screens","Charger problems","Windows and software install"],1],
["📺","Second-hand TVs","Tested and guaranteed second-hand TVs available at friendly prices.",["Tested before sale","Guaranteed","Ask for what is in stock"],1],
["🚗","We come to you","Fast, reliable on-site visits for repairs, CCTV and network work.",["Home and office visits","CCTV and network jobs","Call or WhatsApp to book"],1],
["🎥","CCTV supply and installation","Cameras, recorders and monitors installed, tested and maintained for homes, shops and offices.",["Site survey and design","Remote phone viewing","Solar and 4G cameras"],1],
["🌐","Internet and networking","Routers, structured cabling and WiFi that reaches every room.",["LAN and fibre patching","5G and WiFi router setup","Network rack and cabinet work"],0],
["🧊","Appliance repair","Fridges, dispensers and other home and office appliances.",["Fault diagnosis","Spare parts fitting","Pick-up arranged on request"],0],
["🔊","Speaker and PA repair","Amplifiers, mixers, woofers and public-address systems for church, school and events.",["Sound system repair","Mixer servicing","Microphone supply"],0],
];
const GALLERY=[["plaza-front","Tegutwo Plaza, our building"],["shelf-wide","Shop shelves stocked with electronics"],["rack","Network rack cabling"],["live-view-1","Live CCTV feed on a client monitor"],["staff-shop","Our team in the shop"],["hikvision-shelf","Hikvision cameras and recorders"],["mixers","Audio mixers on display"],["tv-vitron-apps","Vitron TV demo"],["airtel-ax3s","Airtel 5G router installation kits"],["hikvision-kits","CCTV kits ready to install"],["poster-tv","TV repair services"],["poster-network","Network and security specialist"],["poster-home","Home and office solutions"],["poster-repairs","Repairs and more"],["signboard","Our signboard"],["plaza-close","Banners on the 2nd and 3rd floors"]];
/* ===================== */
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const wa=(t,n=PHONE)=>`https://wa.me/${n}?text=${encodeURIComponent(t)}`;
const pg=document.body.dataset.page;
const nav=[["index.html","Home","home"],["services.html","Services","services"],["shop.html","Shop","shop"],["gallery.html","Gallery","gallery"],["about.html","About","about"],["contact.html","Contact","contact"]];
const WAI='<svg viewBox="0 0 32 32"><path fill="#fff" d="M16 3C9 3 3.4 8.6 3.4 15.5c0 2.3.6 4.4 1.7 6.3L3 29l7.4-2c1.8 1 3.800 1.500 5.900 1.500 6.900 0 12.600-5.600 12.600-12.500S23 3 16 3zm0 22.900c-1.900 0-3.700-.5-5.300-1.500l-.4-.2-4.400 1.200 1.200-4.300-.3-.4a10 10 0 0 1-1.600-5.500C5.200 9.700 10 5.100 16 5.100s10.800 4.600 10.800 10.400S22 25.900 16 25.900zm5.900-7.700c-.3-.2-1.900-.9-2.200-1s-.5-.2-.7.200-.8 1-1 1.200-.4.200-.7.100a8.700 8.700 0 0 1-4.300-3.700c-.3-.6.300-.5.900-1.700.1-.2 0-.4 0-.5l-1-2.300c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.100-.8.400s-1 1-1 2.500 1.100 2.900 1.200 3.100c.2.200 2.100 3.300 5.200 4.500 2 .8 2.800.9 3.800.7.600-.1 1.900-.8 2.200-1.500s.3-1.400.2-1.500-.3-.2-.6-.4z"/></svg>';
document.body.insertAdjacentHTML("afterbegin",`
<div class="prog" id="prog"></div><div class="top"><div class="wrap"><span>📍 Tegutwo Plaza, next to Equity Bank, Litein</span><span><a href="tel:+${PHONE}">0717 235 831</a> &nbsp;|&nbsp; <a href="tel:+${PHONE2}">0721 638 309</a></span></div></div>
<header class="nav"><div class="wrap"><a class="brand" href="index.html"><img src="img/logo.png" alt="HES logo"><span>Hopetech<br>Elite Solutions</span></a>
<nav class="menu" id="menu">${nav.map(([h,t,k])=>`<a href="${h}" class="${k==pg?"on":""}">${t}</a>`).join("")}</nav>
<button class="cartbtn" id="openCart" aria-label="Open cart">🛒 Cart <b id="cartCount">0</b></button>
<button class="burger" id="burger" aria-label="Menu">☰</button></div></header>`);
document.body.insertAdjacentHTML("beforeend",`
<section class="strip"><div class="wrap"><h2>Need a repair, install or quote?</h2><p>Message us on WhatsApp. We reply fast and can come to you.</p><a class="btn red" href="${wa("Hello Hopetech, I need help with ")}" target="_blank" rel="noopener">Chat on WhatsApp</a></div></section>
<footer><div class="wrap"><div class="fg"><div><div class="lg"><img src="img/logo.png" alt="Hopetech Elite Solutions"></div><p>Your trust is our greatest reward. Electronics sales, repair, CCTV and networking in Litein.</p></div>
<div><h4>Pages</h4>${nav.map(([h,t])=>`<a href="${h}">${t}</a>`).join("")}</div>
<div><h4>Services</h4><a href="services.html">TV repair</a><a href="services.html">CCTV installation</a><a href="services.html">Networking</a><a href="services.html">Microwave repair</a><a href="services.html">Laptop repair</a></div>
<div><h4>Visit us</h4><p>Tegutwo Plaza (Salama Building), next to Equity Bank, Litein. 2nd Floor, Room 25A.</p><a href="tel:+${PHONE}">0717 235 831</a><a href="tel:+${PHONE2}">0721 638 309</a><a href="mailto:${EMAIL}">${EMAIL}</a><a href="${MAPS}" target="_blank" rel="noopener">Open in Google Maps</a><div class="soc" id="soc2"></div></div></div>
<div class="copy">© ${new Date().getFullYear()} Hopetech Elite Solutions. All rights reserved.</div></div></footer>
<aside class="drawer" id="drawer" aria-label="Your cart"><div class="dh"><h3>Your cart</h3><button id="closeCart" aria-label="Close cart">✕</button></div>
<div class="items" id="items"></div>
<div class="df"><input id="cName" placeholder="Your name" autocomplete="name"><input id="cPhone" placeholder="Your phone number" inputmode="tel" autocomplete="tel"><div class="err" id="err"></div>
<button class="btn wa" id="order">Order on WhatsApp</button><button class="clr" id="clear">Clear cart</button></div></aside>
<div class="scrim" id="scrim"></div><div id="toast" role="status"></div>
<a class="wa-float" href="${wa("Hello Hopetech, I would like to inquire")}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${WAI}</a>`);
$("#burger").onclick=()=>$("#menu").classList.toggle("on");
/* cart */
let cart={};try{cart=JSON.parse(localStorage.getItem("hes-cart")||"{}")}catch(e){}
const byId=id=>PRODUCTS.find(p=>p.id==id);
function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("on");clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove("on"),1800)}
function save(){try{localStorage.setItem("hes-cart",JSON.stringify(cart))}catch(e){}draw()}
function draw(){
  const ids=Object.keys(cart).filter(i=>byId(i)),n=ids.reduce((s,i)=>s+cart[i],0);
  $("#cartCount").textContent=n;$("#openCart").classList.toggle("show",n>0);
  $("#items").innerHTML=ids.length?ids.map(i=>{const p=byId(i);return `<div class="it"><div class="th" style="background-image:url(img/${p.img}.jpg)"></div><div class="nm">${p.name}<div class="qty"><button data-q="-1" data-i="${i}" aria-label="Less">−</button><span>${cart[i]}</span><button data-q="1" data-i="${i}" aria-label="More">+</button></div></div><button class="rm" data-rm="${i}">Remove</button></div>`}).join(""):`<p class="empty" style="padding:40px 0;text-align:center;color:#9fb0d6">Your cart is empty.</p>`;
  $("#order").disabled=!ids.length;
  if(!ids.length)closeCart();
}
const openCart=()=>{$("#drawer").classList.add("on");$("#scrim").classList.add("on")},closeCart=()=>{$("#drawer").classList.remove("on");$("#scrim").classList.remove("on")};
$("#openCart").onclick=openCart;$("#closeCart").onclick=closeCart;$("#scrim").onclick=closeCart;
$("#items").onclick=e=>{const q=e.target.dataset.q,i=e.target.dataset.i,r=e.target.dataset.rm;
  if(q){cart[i]+=+q;if(cart[i]<1)delete cart[i];save()}if(r){delete cart[r];save();toast("Item removed")}};
$("#clear").onclick=()=>{cart={};save()};
$("#order").onclick=()=>{
  const nm=$("#cName").value.trim(),ph=$("#cPhone").value.trim();let m="";
  $("#cName").classList.toggle("bad",!nm);$("#cPhone").classList.toggle("bad",ph.replace(/\D/g,"").length<9);
  if(!nm)m="Please enter your name.";else if(ph.replace(/\D/g,"").length<9)m="Please enter a valid phone number.";
  $("#err").textContent=m;if(m)return;
  const lines=Object.keys(cart).filter(byId).map((i,k)=>`${k+1}. ${byId(i).name} x${cart[i]}`).join("\n");
  const txt=`Hello Hopetech Elite Solutions, I would like to order:\n\n${lines}\n\nName: ${nm}\nPhone: ${ph}\n\nPlease confirm price, availability and delivery.`;
  cart={};save();location.href=wa(txt);
};
draw();
/* shop */
if($("#prodGrid")){
  const cats=["All",...new Set(PRODUCTS.map(p=>p.cat))];let cat="All",q="";
  const lbl={TVs:"TVs",Power:"Power protection",CCTV:"CCTV cameras",Internet:"Routers and internet",Audio:"Audio and music"};
  $("#chips").innerHTML=cats.map(c=>`<button data-c="${c}" class="${c==cat?"on":""}">${c=="All"?"All":lbl[c]}</button>`).join("");
  function shop(){
    const l=PRODUCTS.filter(p=>(cat=="All"||p.cat==cat)&&p.name.toLowerCase().includes(q));
    $("#prodGrid").innerHTML=l.length?l.map(p=>`<article class="card prod"><div class="im" style="background-image:url(img/${p.img}.jpg)" role="img" aria-label="${p.name}"></div><div class="bd"><div class="cat">${lbl[p.cat]}</div><h3>${p.name}</h3><div class="pr">${p.price?"KSh "+p.price.toLocaleString():"Call or WhatsApp for price"}</div><button class="btn primary" data-add="${p.id}">Add to cart</button></div></article>`).join(""):`<p class="empty">No products match. Try another word, or <a href="${wa("Hello Hopetech, do you have ")}" style="color:var(--cyan);font-weight:700">ask us on WhatsApp</a>.</p>`;
    $$("#chips button").forEach(b=>b.classList.toggle("on",b.dataset.c==cat));
  }
  $("#chips").onclick=e=>{if(e.target.dataset.c){cat=e.target.dataset.c;shop()}};
  $("#search").oninput=e=>{q=e.target.value.toLowerCase();shop()};
  $("#prodGrid").onclick=e=>{const id=e.target.dataset.add;if(id){cart[id]=(cart[id]||0)+1;save();toast("Added to cart")}};
  const want=new URLSearchParams(location.search).get("cat");if(want&&cats.includes(want))cat=want;
  shop();
}
/* services, gallery, social */
if($("#svcHome"))$("#svcHome").innerHTML=SERVICES.filter(x=>x[4]).map(([i,t,d])=>`<a class="card svc mini" href="services.html"><div class="ico">${i}</div><h3>${t}</h3><p>${d}</p></a>`).join("");
if($("#svcGrid"))$("#svcGrid").innerHTML=SERVICES.map(([i,t,d,l])=>`<article class="card svc"><div class="ico">${i}</div><h3>${t}</h3><p>${d}</p><ul>${l.map(x=>`<li>${x}</li>`).join("")}</ul><p style="margin-top:16px"><a href="${wa("Hello Hopetech, I need: "+t)}" target="_blank" rel="noopener" class="l">Book on WhatsApp</a></p></article>`).join("");
if($("#gal")){
  $("#gal").innerHTML=GALLERY.map(([f,c])=>`<figure><img src="img/${f}.jpg" alt="${c}" loading="lazy"><figcaption>${c}</figcaption></figure>`).join("");
  document.body.insertAdjacentHTML("beforeend",'<div class="lb" id="lb"><img alt=""></div>');
  $("#gal").onclick=e=>{const i=e.target.closest("img");if(i){$("#lb img").src=i.src;$("#lb").classList.add("on")}};
  $("#lb").onclick=()=>$("#lb").classList.remove("on");
  addEventListener("keydown",e=>{if(e.key=="Escape"){$("#lb").classList.remove("on");closeCart()}});
}
if($("#qSend"))$("#qSend").onclick=()=>{const n=$("#qName").value.trim(),m=$("#qMsg").value.trim();if(!n||!m){$("#qErr").textContent="Please add your name and message.";return}location.href=wa(`Hello Hopetech, I am ${n}. ${m}`)};
const ab={Facebook:"f",Instagram:"IG",TikTok:"TT"};const live=Object.entries(SOCIAL).filter(([n,u])=>u&&u!="#");
if($("#soc2"))$("#soc2").innerHTML=live.map(([n,u])=>`<a href="${u}" target="_blank" rel="noopener" aria-label="${n}">${ab[n]}</a>`).join("");
if($("#social"))$("#social").innerHTML=live.map(([n,u])=>`<a href="${u}" target="_blank" rel="noopener">${n}</a>`).join(" · ");

/* ===== effects ===== */
const nv=$(".nav"),pr=$("#prog"),hv=$(".hero video");
addEventListener("scroll",()=>{const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;nv.classList.toggle("sc",y>20);pr.style.width=(h>0?y/h*100:0)+"%";if(hv&&y<innerHeight)hv.style.transform=`translateY(${y*.25}px) scale(1.08)`},{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
$$(".sh,.split>*,.band,.card,.box,.gal figure,.tools,.strip .wrap").forEach((el,i)=>{el.classList.add("rv");el.style.transitionDelay=(i%4)*80+"ms";io.observe(el)});
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;co.unobserve(e.target);const el=e.target,n=+el.dataset.n,sf=el.dataset.s||"";let t0;const f=t=>{t0=t0||t;const p=Math.min((t-t0)/1400,1);el.textContent=Math.round(n*(1-Math.pow(1-p,3)))+sf;if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)}));
$$("[data-n]").forEach(el=>co.observe(el));
const dr=$(".hero video");if(dr)dr.play&&dr.play().catch(()=>{});
