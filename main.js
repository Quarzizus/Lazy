(()=>{"use strict";const e=()=>{const e=document.createElement("img");e.classList.add("fox_imagen"),e.dataset.src=`https://randomfox.ca/images/${Math.floor(122*Math.random()+1)}.jpg`;const t=document.createElement("div");return t.classList.add("fox"),t.id="fox-id",t.append(e),t},t=e=>e.isIntersecting,r=e=>{const t=e.target,r=t.querySelector("img"),o=r.dataset.src;r.src=o,c.unobserve(t)},c=new IntersectionObserver((e=>{e.filter(t).forEach(r)})),o=document.querySelector(".main"),n=document.querySelector(".buttons_add"),s=document.querySelector(".buttons_clear");n.addEventListener("click",(()=>{const t=e();var r;o.append(t),r=t,c.observe(r)})),s.addEventListener("click",(()=>{[...o.querySelectorAll("#fox-id")].forEach((e=>e.remove()))}))})();