const items=[
{title:"Mountain Morning",cat:"nature",src:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80"},
{title:"Forest Trail",cat:"nature",src:"https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80"},
{title:"City Lights",cat:"city",src:"https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=80"},
{title:"Urban Architecture",cat:"city",src:"https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=900&q=80"},
{title:"Beach Escape",cat:"travel",src:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"},
{title:"Desert Journey",cat:"travel",src:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80"}
];
const gallery=document.querySelector("#gallery"),lightbox=document.querySelector("#lightbox"),lbImg=document.querySelector("#lightboxImage"),caption=document.querySelector("#caption");let visible=[],index=0;
function render(filter="all"){visible=items.filter(x=>filter==="all"||x.cat===filter);gallery.innerHTML=visible.map((x,i)=>`<article class="card" data-index="${i}"><img src="${x.src}" alt="${x.title}" loading="lazy"><div class="overlay">${x.title}</div></article>`).join("")}
function open(i){index=i;lbImg.src=visible[index].src;lbImg.alt=visible[index].title;caption.textContent=visible[index].title;lightbox.classList.add("open");lightbox.setAttribute("aria-hidden","false")}
function move(step){index=(index+step+visible.length)%visible.length;open(index)}
gallery.addEventListener("click",e=>{const c=e.target.closest(".card");if(c)open(+c.dataset.index)});
document.querySelector(".filters").addEventListener("click",e=>{if(!e.target.dataset.filter)return;document.querySelectorAll(".filters button").forEach(b=>b.classList.remove("active"));e.target.classList.add("active");render(e.target.dataset.filter)});
document.querySelector("#close").onclick=()=>{lightbox.classList.remove("open");lightbox.setAttribute("aria-hidden","true")};document.querySelector("#prev").onclick=()=>move(-1);document.querySelector("#next").onclick=()=>move(1);
document.addEventListener("keydown",e=>{if(!lightbox.classList.contains("open"))return;if(e.key==="Escape")document.querySelector("#close").click();if(e.key==="ArrowLeft")move(-1);if(e.key==="ArrowRight")move(1)});
render();