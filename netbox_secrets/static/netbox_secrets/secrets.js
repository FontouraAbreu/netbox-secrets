"use strict";(()=>{var P=Object.create;var g=Object.defineProperty;var R=Object.getOwnPropertyDescriptor;var M=Object.getOwnPropertyNames;var B=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty;var _=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports);var D=(e,n,i,t)=>{if(n&&typeof n=="object"||typeof n=="function")for(let o of M(n))!C.call(e,o)&&o!==i&&g(e,o,{get:()=>n[o],enumerable:!(t=R(n,o))||t.enumerable});return e};var H=(e,n,i)=>(i=e!=null?P(B(e)):{},D(n||!e||!e.__esModule?g(i,"default",{value:e,enumerable:!0}):i,e));var m=(e,n,i)=>new Promise((t,o)=>{var s=l=>{try{c(i.next(l))}catch(a){o(a)}},r=l=>{try{c(i.throw(l))}catch(a){o(a)}},c=l=>l.done?t(l.value):Promise.resolve(l.value).then(s,r);c((i=i.apply(e,n)).next())});var h=_(w=>{"use strict";w.parse=O;w.serialize=q;var I=Object.prototype.toString,f=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function O(e,n){if(typeof e!="string")throw new TypeError("argument str must be a string");for(var i={},t=n||{},o=t.decode||$,s=0;s<e.length;){var r=e.indexOf("=",s);if(r===-1)break;var c=e.indexOf(";",s);if(c===-1)c=e.length;else if(c<r){s=e.lastIndexOf(";",r-1)+1;continue}var l=e.slice(s,r).trim();if(i[l]===void 0){var a=e.slice(r+1,c).trim();a.charCodeAt(0)===34&&(a=a.slice(1,-1)),i[l]=U(a,o)}s=c+1}return i}function q(e,n,i){var t=i||{},o=t.encode||K;if(typeof o!="function")throw new TypeError("option encode is invalid");if(!f.test(e))throw new TypeError("argument name is invalid");var s=o(n);if(s&&!f.test(s))throw new TypeError("argument val is invalid");var r=e+"="+s;if(t.maxAge!=null){var c=t.maxAge-0;if(isNaN(c)||!isFinite(c))throw new TypeError("option maxAge is invalid");r+="; Max-Age="+Math.floor(c)}if(t.domain){if(!f.test(t.domain))throw new TypeError("option domain is invalid");r+="; Domain="+t.domain}if(t.path){if(!f.test(t.path))throw new TypeError("option path is invalid");r+="; Path="+t.path}if(t.expires){var l=t.expires;if(!j(l)||isNaN(l.valueOf()))throw new TypeError("option expires is invalid");r+="; Expires="+l.toUTCString()}if(t.httpOnly&&(r+="; HttpOnly"),t.secure&&(r+="; Secure"),t.priority){var a=typeof t.priority=="string"?t.priority.toLowerCase():t.priority;switch(a){case"low":r+="; Priority=Low";break;case"medium":r+="; Priority=Medium";break;case"high":r+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(t.sameSite){var d=typeof t.sameSite=="string"?t.sameSite.toLowerCase():t.sameSite;switch(d){case!0:r+="; SameSite=Strict";break;case"lax":r+="; SameSite=Lax";break;case"strict":r+="; SameSite=Strict";break;case"none":r+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return r}function $(e){return e.indexOf("%")!==-1?decodeURIComponent(e):e}function K(e){return encodeURIComponent(e)}function j(e){return I.call(e)==="[object Date]"||e instanceof Date}function U(e,n){try{return n(e)}catch(i){return e}}});function p(e,n,i,t){let o="mdi-alert";switch(e){case"warning":o="mdi-alert";break;case"success":o="mdi-check-circle";break;case"info":o="mdi-information";break;case"danger":o="mdi-alert";break}let s=document.createElement("div");s.setAttribute("class","toast-container position-fixed bottom-0 end-0 m-3");let r=document.createElement("div");r.setAttribute("class",`toast bg-${e}`),r.setAttribute("role","alert"),r.setAttribute("aria-live","assertive"),r.setAttribute("aria-atomic","true");let c=document.createElement("div");c.setAttribute("class",`toast-header bg-${e} text-body`);let l=document.createElement("i");l.setAttribute("class",`mdi ${o}`);let a=document.createElement("strong");a.setAttribute("class","me-auto ms-1"),a.innerText=n;let d=document.createElement("button");d.setAttribute("type","button"),d.setAttribute("class","btn-close"),d.setAttribute("data-bs-dismiss","toast"),d.setAttribute("aria-label","Close");let u=document.createElement("div");if(u.setAttribute("class","toast-body"),c.appendChild(l),c.appendChild(a),typeof t!="undefined"){let b=document.createElement("small");b.setAttribute("class","text-muted"),c.appendChild(b)}return c.appendChild(d),u.innerText=i.trim(),r.appendChild(c),r.appendChild(u),s.appendChild(r),document.body.appendChild(s),new window.Toast(r)}var T=H(h());function L(e){return"error"in e&&"exception"in e}function y(e){return"error"in e}function E(e){return"value"in e&&"required"in e}function F(){let{csrftoken:e}=T.default.parse(document.cookie);if(typeof e=="undefined")throw new Error("Invalid or missing CSRF token");return e}function x(e,n,i){return m(this,null,function*(){let t=F(),o=new Headers({"X-CSRFToken":t}),s;typeof i!="undefined"&&(s=JSON.stringify(i),o.set("content-type","application/json"),o.set("Accept","application/json"));let r=yield fetch(e,{method:n,body:s,headers:o,credentials:"same-origin"}),c=r.headers.get("Content-Type");if(typeof c=="string"&&c.includes("text"))return{error:yield r.text()};let l=yield r.json();return!r.ok&&Array.isArray(l)?{error:l.join(`
`)}:!r.ok&&"detail"in l?{error:l.detail}:l})}function A(e,n){return m(this,null,function*(){return yield x(e,"POST",n)})}function v(e){return m(this,null,function*(){return yield x(e,"GET")})}function N(){let e=document.getElementById("new_keypair_modal"),n=document.getElementById("use_new_pubkey"),i=document.getElementById("copy_prikey"),t=document.getElementById("export_key");if(e===null||n===null||i===null||t===null)return;let o=e.querySelector("textarea#new_pubkey"),s=e.querySelector("textarea#new_privkey");function r(){for(let a of[o,s])a!==null&&a.setAttribute("readonly","");v("/api/plugins/secrets/generate-rsa-key-pair/").then(a=>{if(y(a))p("danger","Error",a.error).show();else{let{private_key:d,public_key:u}=a;o!==null&&s!==null&&(o.value=u,s.value=d)}})}function c(){let a=document.getElementById("id_public_key");o!==null&&(a.value=o.value,a.innerText=o.value)}function l(){let a=`Public Key

${o==null?void 0:o.value}

Private Key

${s==null?void 0:s.value}`,d=new Blob([a],{type:"text/plain"}),u=document.createElement("a");u.style.display="none",u.href=window.URL.createObjectURL(d),u.download="key.txt",document.body.appendChild(u),u.click(),window.URL.revokeObjectURL(u.href),document.body.removeChild(u)}e.addEventListener("shown.bs.modal",()=>r()),n.addEventListener("click",()=>c()),i.addEventListener("click",()=>navigator.clipboard.writeText((s==null?void 0:s.value)||"")),t.addEventListener("click",()=>l())}function S(e,n){let i=document.querySelector(`button.unlock-secret[secret-id='${e}']`),t=document.querySelector(`button.lock-secret[secret-id='${e}']`),o=document.querySelector(`span[secret-id='${e}']`);i!==null&&(n==="unlock"&&i.classList.add("d-none"),n==="lock"&&i.classList.remove("d-none")),t!==null&&(n==="unlock"&&t.classList.remove("d-none"),n==="lock"&&t.classList.add("d-none")),o!==null&&(n==="unlock"&&o.classList.remove("d-none"),n==="lock"&&o.classList.add("d-none"))}function G(){let e=new window.Modal("#privkey_modal");function n(t){let o=document.getElementById(`secret_${t}`);typeof t=="string"&&t!==""&&v(`/api/plugins/secrets/secrets/${t}/`).then(s=>{if(y(s))s.error.toLowerCase().includes("invalid session key")?e.show():p("danger","Error",s.error).show();else{let{plaintext:r}=s;o!==null&&r!==null?(E(o)?o.value=r:o.innerText=r,S(t,"unlock")):e.show()}})}function i(t){if(typeof t=="string"&&t!==""){let o=document.getElementById(`secret_${t}`);E(o)?o.value="********":o.innerText="********",S(t,"lock")}}for(let t of document.querySelectorAll("button.unlock-secret"))t.addEventListener("click",()=>n(t.getAttribute("secret-id")));for(let t of document.querySelectorAll("button.lock-secret"))t.addEventListener("click",()=>i(t.getAttribute("secret-id")))}function z(e){A("/api/plugins/secrets/session-keys/",{private_key:e,preserve_key:!0}).then(n=>{if(y(n)){let i=n.error;L(n)&&(i+=`
${n.exception}`),p("danger","Failed to Retrieve Session Key",i).show()}else if(window.location.pathname==="/plugins/secrets/user-key/")window.location.reload();else{let i=p("success","Session Key Received","You may now unlock secrets.");window.location.reload(),i.show()}})}function J(){for(let n of document.querySelectorAll("#request_session_key")){let i=function(){for(let t of document.querySelectorAll("#user_privkey"))z(t.value),t.value=""};var e=i;n.addEventListener("click",i)}}function X(){let e=new window.Modal("#privkey_modal");function n(i){document.cookie.indexOf("netbox_secrets_sessionid")===-1&&(i.preventDefault(),e.show())}for(let i of document.querySelectorAll(".requires-session-key")){let t=i.closest("form");t!==null&&t.addEventListener("submit",n)}}function k(){for(let e of[N,G,J,X])e()}document.readyState!=="loading"?k():document.addEventListener("DOMContentLoaded",k);})();
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
//# sourceMappingURL=/static/netbox_secrets/secrets.js.map
