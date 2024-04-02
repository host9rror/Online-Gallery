import{a as y,S as h,i as g}from"./assets/vendor-550cebad.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();let v=1,n;async function u(t){const s="43068097-aa3ed59823608d0655ab40c7d",o="https://pixabay.com/api/",i=new URLSearchParams({key:s,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:v,per_page:15});try{const e=await y.get(o,{params:i});if(e.status!==200)throw new Error("Error");const r=e.data;return r.totalHits===0?null:r}catch(e){return e}}async function L(){n=document.querySelector("#search-input").value.trim();try{return await u(n)}catch(t){return t}}function S(t,s){if(!Array.isArray(t)){console.error(Error);return}const o=t.map(({webformatURL:i,largeImageURL:e,tags:r,likes:a,views:m,comments:f,downloads:p})=>`<li class="gallery-item">
        <a href="${e}">
          <img
            src="${i}"
            data-source="${e}"
            alt="${r}"
          />
          <ul class="gallery-description">
            <li class="gallery-desc-item"><div class="desc-info"><h3>Likes</h3><p>${a}</p></div></li>
            <li class="gallery-desc-item"><div class="desc-info"><h3>Views</h3><p>${m}</p></div></li>
            <li class="gallery-desc-item"><div class="desc-info"><h3>Comments</h3><p>${f}</p></div></li>
            <li class="gallery-desc-item"><div class="desc-info"><h3>Downloads</h3><p>${p}</p></div></li>
          </ul>
        </a>
      </li>`).join("");s?(s.innerHTML=o,new h(".gallery-item a",{captionsData:"alt",captionDelay:250})):console.error(Error)}const q=document.querySelector("#search-form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader"),d=document.querySelector(".more-btn");q.addEventListener("submit",t=>{t.preventDefault(),c.innerHTML="";const s=t.target.querySelector("#search-input").value.trim();s&&(l.classList.add("loading"),u(s).then(o=>{o===null?g.error({position:"topRight",title:"❌",icon:"",message:"Sorry, there are no images matching your search query. Please try again!"}):(S(o.hits,c),w(o.hits))}).catch(o=>{console.error(o)}).finally(()=>{l.classList.remove("loading")})),t.target.reset()});d.addEventListener("click",t=>{L()});function w(t){d.classList.toggle("is-hidden",t.length===0)}
//# sourceMappingURL=commonHelpers.js.map
