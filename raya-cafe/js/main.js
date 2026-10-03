(function(){
"use strict";
var WA_NUM="201002378848";
var DATA=window.RAYA_MENU;
var IMG={};
DATA.beans.forEach(function(g){g.items.forEach(function(it,i){IMG["b-"+g.id+"-"+i]=it.img})});
DATA.menu.forEach(function(c){IMG["ban-"+c.id]=c.banner;c.items.forEach(function(it,i){IMG["m-"+c.id+"-"+i]=it.img})});
var CREDITS=window.RAYA_CREDITS||[];
var BEANS=DATA.beans,MENU=DATA.menu;

var T={
 ar:{findUs:"موقعنا على الخريطة",navBeans:"البن",navMenu:"المنيو",navContact:"تواصل معنا",orderWa:"اطلب عبر واتساب",
  slogan:"قهوة على مزاجك",heroSub:"اختار من منيو بن رايا: البن والتوليفات، القهوة، والمشروبات الساخنة والساقعة.",browse:"تصفح المنيو",viewMap:"افتح الموقع على خرائط جوجل",
  beansKicker:"البداية من هنا",beansTitle:"بن رايا",beansWa:"اطلب البن على واتساب",
  menuKicker:"منيو بن رايا",menuTitle:"المنيو",note:"الأسعار بالجنيه المصري.",
  contactKicker:"زورنا أو كلمنا",contactTitle:"تواصل معنا",callUs:"اتصل بنا",callNow:"اتصل الآن",location:"موقعنا",locationText:"لاقي طريقك لينا بسهولة على خرائط جوجل.",
  waTitle:"واتساب",waText:"ابعت طلبك أو استفسارك وهنرد عليك.",rights:"جميع الحقوق محفوظة.",
  credits:"حقوق الصور",creditsText:"بعض صور المنتجات مستخدمة بموجب تراخيص المشاع الإبداعي، وهذه بيانات أصحابها:",
  sendOrder:"ابعت الطلب",clear:"مسح الطلب",added:"اتضاف للطلب",cleared:"اتمسح الطلب",close:"إغلاق",
  add:"أضف",items:"صنف",cur:"جنيه",greet:"أهلاً، عايز أطلب:",total:"الإجمالي",waHello:"أهلاً،",beansMsg:"أهلاً، عايز أستفسر عن البن.",inc:"زود",dec:"قلل"},
 en:{findUs:"Find us on the map",navBeans:"Coffee beans",navMenu:"Menu",navContact:"Contact",orderWa:"Order via WhatsApp",
  slogan:"Coffee, your way",heroSub:"Browse the Ben Raya menu: our coffee beans and blends, coffee, and hot and cold drinks.",browse:"Browse the menu",viewMap:"View on Google Maps",
  beansKicker:"Where it starts",beansTitle:"Ben Raya beans",beansWa:"Order beans on WhatsApp",
  menuKicker:"The Ben Raya menu",menuTitle:"The menu",note:"Prices in Egyptian pounds.",
  contactKicker:"Visit or call us",contactTitle:"Get in touch",callUs:"Call us",callNow:"Call now",location:"Our location",locationText:"Find your way to us on Google Maps.",
  waTitle:"WhatsApp",waText:"Send your order or question and we'll reply.",rights:"All rights reserved.",
  credits:"Photo credits",creditsText:"Some product photos are used under Creative Commons licenses. Their authors:",
  sendOrder:"Send order",clear:"Clear order",added:"Added to your order",cleared:"Order cleared",close:"Close",
  add:"Add",items:"items",cur:"EGP",greet:"Hello, I'd like to order:",total:"Total",waHello:"Hello,",beansMsg:"Hello, I'd like to ask about your coffee beans.",inc:"Increase",dec:"Decrease"}
};

var lang="ar";
try{var sv=localStorage.getItem("raya-lang");if(sv==="en"||sv==="ar")lang=sv}catch(e){}
var activeCat=MENU[0].id,activeBean=BEANS[0].id,cart={},INDEX={};
BEANS.forEach(function(g){g.items.forEach(function(it,i){INDEX["b-"+g.id+"-"+i]=it})});
MENU.forEach(function(c){c.items.forEach(function(it,i){INDEX["m-"+c.id+"-"+i]=it})});

function t(k){return T[lang][k]}
function nm(it){return lang==="ar"?it.ar:it.en}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function price(p){return '<span class="price">'+p+'<small>'+t("cur")+'</small></span>'}
function img(key,alt){return '<img src="'+IMG[key]+'" alt="'+esc(alt)+'" loading="lazy" decoding="async" width="460" height="460">'}
function waLink(msg){return "https://wa.me/"+WA_NUM+(msg?"?text="+encodeURIComponent(msg):"")}

function addCtl(key){
 var q=cart[key]||0;
 if(!q)return '<span class="add" data-key="'+key+'"><button type="button" class="plus-only" data-act="inc"><svg aria-hidden="true"><use href="#i-plus"/></svg>'+t("add")+'</button></span>';
 return '<span class="add on" data-key="'+key+'"><button type="button" data-act="dec" aria-label="'+t("dec")+'"><svg><use href="#i-minus"/></svg></button><span class="q">'+q+'</span><button type="button" data-act="inc" aria-label="'+t("inc")+'"><svg><use href="#i-plus"/></svg></button></span>';
}

function applyStrings(){
 document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";
 document.querySelectorAll("[data-t]").forEach(function(el){el.textContent=t(el.getAttribute("data-t"))});
 document.getElementById("beansWa").href=waLink(t("beansMsg"));
 document.querySelectorAll("a.wa-link").forEach(function(a){a.href=waLink(t("waHello"))});
}
function renderTicker(){
 var names=[];MENU.forEach(function(c){c.items.forEach(function(it){names.push(nm(it))})});
 for(var i=names.length-1;i>0;i--){var j=(i*7+3)%(i+1);var x=names[i];names[i]=names[j];names[j]=x}
 var seg=names.slice(0,40).map(function(n){return '<span><svg><use href="#i-bean"/></svg>'+esc(n)+'</span>'}).join("");
 document.getElementById("ticker").innerHTML=seg+seg;
}
function renderBeans(animate){
 document.getElementById("beanChips").innerHTML=BEANS.map(function(g){return '<button class="chip" type="button" role="tab" data-bean="'+g.id+'" aria-selected="'+(g.id===activeBean)+'">'+esc(lang==="ar"?g.ar:g.en)+'</button>'}).join("");
 var g=BEANS.filter(function(x){return x.id===activeBean})[0];
 var el=document.getElementById("beanGrid");
 el.innerHTML=g.items.map(function(it,i){var key="b-"+g.id+"-"+i;
  return '<article class="bcard"><div class="ph">'+img(key,nm(it))+'</div><div class="row"><h3>'+esc(nm(it))+'</h3><hr>'+price(it.p)+'</div>'+addCtl(key)+'</article>'}).join("");
 if(animate){el.classList.remove("panel");void el.offsetWidth;el.classList.add("panel")}
}
function renderTabs(){
 document.getElementById("tabs").innerHTML=MENU.map(function(c){return '<button class="tab" type="button" role="tab" id="tab-'+c.id+'" data-cat="'+c.id+'" aria-selected="'+(c.id===activeCat)+'" tabindex="'+(c.id===activeCat?0:-1)+'">'+esc(lang==="ar"?c.ar:c.en)+'</button>'}).join("");
}
function renderPanel(animate){
 var c=MENU.filter(function(x){return x.id===activeCat})[0];
 var p=document.getElementById("panel");p.setAttribute("aria-labelledby","tab-"+c.id);
 var h='<div class="panel"'+(animate?'':' style="animation:none"')+'><div class="banner"><img src="'+IMG["ban-"+c.id]+'" alt=""><div class="cap"><h3>'+esc(lang==="ar"?c.ar:c.en)+'</h3><p>'+c.items.length+' '+t("items")+'</p></div></div><div class="items">';
 h+=c.items.map(function(it,i){var key="m-"+c.id+"-"+i;
  return '<article class="item"><div class="ph">'+img(key,nm(it))+'</div><div class="item-body"><div class="item-title"><h3>'+esc(nm(it))+'</h3><hr>'+price(it.p)+'</div><p>'+esc(lang==="ar"?it.dar:it.den)+'</p>'+addCtl(key)+'</div></article>'}).join("");
 p.innerHTML=h+'</div></div>';
}
function refreshCtl(key){document.querySelectorAll('.add[data-key="'+key+'"]').forEach(function(el){el.outerHTML=addCtl(key)})}
function renderAll(){applyStrings();renderTicker();renderBeans(false);renderTabs();renderPanel(false);updateFab();renderCredits()}

function totals(){var n=0,s=0;Object.keys(cart).forEach(function(k){n+=cart[k];s+=cart[k]*INDEX[k].p});return{n:n,s:s}}
function orderMsg(){
 var lines=[t("greet")];
 Object.keys(cart).forEach(function(k){var it=INDEX[k];lines.push("• "+cart[k]+" × "+nm(it)+" ("+it.p*cart[k]+" "+t("cur")+")")});
 lines.push(t("total")+": "+totals().s+" "+t("cur"));return lines.join("\n");
}
function updateFab(){
 var f=document.getElementById("fab"),tt=totals();
 f.classList.toggle("has",tt.n>0);
 document.getElementById("fabCnt").textContent=tt.n;
 document.getElementById("fabTotal").textContent=tt.n?tt.s+" "+t("cur"):"";
 document.getElementById("fabClear").classList.toggle("show",tt.n>0);
 f.href=tt.n?waLink(orderMsg()):waLink(t("waHello"));
 f.setAttribute("aria-label",tt.n?t("sendOrder")+": "+tt.n+" "+t("items")+", "+tt.s+" "+t("cur"):t("orderWa"));
}
var toastT;
function toast(msg){var el=document.getElementById("toast");el.textContent=msg;el.classList.add("show");clearTimeout(toastT);toastT=setTimeout(function(){el.classList.remove("show")},1500)}
function renderCredits(){
 document.getElementById("crList").innerHTML=CREDITS.map(function(c){var it=INDEX[c.k];var label=it?nm(it):(c.k.indexOf("ban-")===0?(function(){var id=c.k.slice(4);var m=MENU.filter(function(x){return x.id===id})[0];return m?(lang==="ar"?m.ar:m.en):t("beansTitle")})():c.k);
  return '<li>'+esc(label)+': <a href="'+esc(c.land)+'" target="_blank" rel="noopener">'+esc(c.credit)+'</a></li>'}).join("");
}
function scrollToCatStart(){
 var hh=document.querySelector(".header").offsetHeight,bh=document.getElementById("tabsBar").offsetHeight;
 var panel=document.getElementById("panel");
 var target=Math.max(0,Math.round(panel.getBoundingClientRect().top+window.scrollY-hh-bh-12));
 window.scrollTo({top:target,behavior:matchMedia("(prefers-reduced-motion:reduce)").matches?"auto":"smooth"});
}
function selectCat(id,focus){
 activeCat=id;renderTabs();renderPanel(true);
 var nt=document.getElementById("tab-"+id);
 if(nt){if(focus)nt.focus({preventScroll:true});var tabs=document.getElementById("tabs");var r=nt.getBoundingClientRect(),tr=tabs.getBoundingClientRect();tabs.scrollLeft+=(r.left+r.width/2)-(tr.left+tr.width/2)}
 scrollToCatStart();
}

document.addEventListener("click",function(e){
 var b=e.target.closest(".add button");
 if(b){var key=b.closest(".add").getAttribute("data-key"),act=b.getAttribute("data-act");
  var q=(cart[key]||0)+(act==="inc"?1:-1);if(q<=0)delete cart[key];else cart[key]=q;
  refreshCtl(key);updateFab();
  var sel='.add[data-key="'+key+'"] [data-act="'+(q>0?act:"inc")+'"]';var nb=document.querySelector(sel);if(nb)nb.focus();
  if(act==="inc"&&q===1)toast(t("added"));return;}
 var tab=e.target.closest(".tab");if(tab){selectCat(tab.getAttribute("data-cat"),true);return}
 var ch=e.target.closest("[data-bean]");if(ch){activeBean=ch.getAttribute("data-bean");renderBeans(true);
  var n=document.querySelector('[data-bean="'+activeBean+'"]');if(n){n.focus({preventScroll:true});n.scrollIntoView({block:"nearest",inline:"center"})}}
});
document.getElementById("tabs").addEventListener("keydown",function(e){
 if(["ArrowLeft","ArrowRight","Home","End"].indexOf(e.key)<0)return;
 var ids=MENU.map(function(c){return c.id}),i=ids.indexOf(activeCat),rtl=lang==="ar";
 if(e.key==="Home")i=0;else if(e.key==="End")i=ids.length-1;else i=(i+((e.key==="ArrowRight")!==rtl?1:-1)+ids.length)%ids.length;
 e.preventDefault();selectCat(ids[i],true);
});
document.getElementById("fabClear").addEventListener("click",function(){cart={};renderBeans(false);renderPanel(false);updateFab();toast(t("cleared"))});
document.getElementById("langBtn").addEventListener("click",function(){lang=lang==="ar"?"en":"ar";try{localStorage.setItem("raya-lang",lang)}catch(e){}renderAll()});
var cr=document.getElementById("cr");
document.getElementById("crBtn").addEventListener("click",function(){if(cr.showModal)cr.showModal();else cr.setAttribute("open","")});
document.getElementById("crClose").addEventListener("click",function(){cr.close?cr.close():cr.removeAttribute("open")});
cr.addEventListener("click",function(e){if(e.target===cr)cr.close()});

var bar=document.getElementById("tabsBar");
if("IntersectionObserver" in window){var s=document.createElement("div");bar.parentNode.insertBefore(s,bar);
 new IntersectionObserver(function(en){bar.classList.toggle("stuck",!en[0].isIntersecting&&en[0].boundingClientRect.top<0)},{rootMargin:"-90px 0px 0px 0px"}).observe(s)}

renderAll();
})();
