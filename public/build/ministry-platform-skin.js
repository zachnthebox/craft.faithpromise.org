!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}({1:function(t,e,n){t.exports=n("WdqB")},WdqB:function(t,e){window.setupCustomerEvents=function(){function t(){var t=document.getElementById("userLink");return!!t&&!t.innerText.match(/login/i)}function e(){var t=document.getElementById("cartLink");return t?parseInt(t.innerText.replace(/\D/g,"")):0}var n=window.location.pathname.replace(/^\/portal\/?/i,""),r=document.getElementById("fp_content"),i={giving:"/donate/index","giving/profile":"/donate/profile","giving/recurring":"/donate/recurring"};switch(function(){function t(t){t.target===n||e.contains(t.target)||n.contains(t.target)||(r=!1,n.classList.remove(i))}var e=document.getElementById("js_nav_toggle"),n=document.getElementById("js_nav"),r=!1,i="is-visible";e.addEventListener("click",function(){r=!r,n.classList.toggle(i,r)}),document.addEventListener("click",t)}(),function(){t()&&document.body.classList.add("logged-in"),e()&&(document.body.classList.add("items-in-cart"),document.getElementById("js_qty_in_cart").innerText=e())}(),function(){var t=document.getElementById("userLink"),e=t?t.innerText:"",n=e.split(",");document.getElementById("js_first_name").innerText=n[n.length-1].trim(),document.getElementById("js_last_name").innerText=n.slice(0,-1).join(",").trim()}(),n){case"giving":case"giving/recurring":case"giving/profile":!function(){t()||(window.location.href="/portal/login.aspx?ReturnUrl=%2fportal%2fgiving");var e=document.createElement("script");e.setAttribute("data-id","og-embed-script"),e.setAttribute("data-church-code","faithpromise_org"),e.setAttribute("data-default-page",i[n]),e.setAttribute("data-token-type","mp-token"),e.setAttribute("data-mp-token",window.fp.MPP_User_Data),e.setAttribute("data-bg-color","#f9f9f9"),e.src="https://www.onlinegiving.org/assets/embed.js",r.appendChild(e)}();break;case"login.aspx":!function(){var t=document.getElementById("btnForgotPassword");t&&(t.innerText="Recover Your Password")}();break;case"create_account.aspx":!function(){var t=document.getElementById("btnForgotPassword")[0];t&&(t.style="display: none;")}()}}}});