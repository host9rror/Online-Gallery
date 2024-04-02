import{a as p,S as f,i as m}from"./assets/vendor-550cebad.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();let y=1;async function h(s){const t="43068097-aa3ed59823608d0655ab40c7d",o="https://pixabay.com/api/",i=new URLSearchParams({key:t,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:y,per_page:15});try{const e=await p.get(o,{params:i});if(e.status!==200)throw new Error("Error");const r=e.data;return r.totalHits===0?{hits:[]}:r}catch(e){return e}}function g(s,t){if(!Array.isArray(s)){console.error(Error);return}const o=s.map(({webformatURL:i,largeImageURL:e,tags:r,likes:a,views:n,comments:d,downloads:u})=>`<li class="gallery-item">
        <a href="${e}">
          <img
            src="${i}"
            data-source="${e}"
            alt="${r}"
          />
          <ul class="gallery-description">
            <li class="gallery-desc-item"><div class="desc-info"><h3>Likes</h3><p>${a}</p></div></li>
            <li class="gallery-desc-item"><div class="desc-info"><h3>Views</h3><p>${n}</p></div></li>
            <li class="gallery-desc-item"><div class="desc-info"><h3>Comments</h3><p>${d}</p></div></li>
            <li class="gallery-desc-item"><div class="desc-info"><h3>Downloads</h3><p>${u}</p></div></li>
          </ul>
        </a>
      </li>`).join("");t?(t.innerHTML+=o,new f(".gallery-item a",{captionsData:"alt",captionDelay:250}),moreButton.classList.toggle("is-hidden",s.length===0)):console.error(Error)}const L=document.querySelector("#search-form"),l=document.querySelector(".gallery"),c=document.querySelector(".loader");document.querySelector(".more-btn");L.addEventListener("submit",s=>{s.preventDefault(),l.innerHTML="";const t=s.target.querySelector("#search-input").value.trim();t&&(c.classList.add("loading"),h(t).then(o=>{o===null?m.error({position:"topRight",title:"❌",icon:"",message:"Sorry, there are no images matching your search query. Please try again!"}):g(o.hits,l)}).catch(o=>{console.error(o)}).finally(()=>{c.classList.remove("loading")})),s.target.reset()});
//# sourceMappingURL=commonHelpers.js.map
