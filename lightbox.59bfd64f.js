!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=2)}({2:function(e,t){var o=document.querySelectorAll(".image"),n=document.querySelector(".preview-box"),r=n.querySelector("img"),l=n.querySelector(".icon"),c=n.querySelector(".current-img"),u=n.querySelector(".total-img"),i=document.querySelector(".shadow");window.onload=function(){for(var e=function(e){u.textContent=o.length;var t=e,y=void 0;o[e].onclick=function(){function u(){c.textContent=t+1;var e=o[t].querySelector("img").src;r.src=e}y=e,u();var s=document.querySelector(".prev"),d=document.querySelector(".next");0==t&&(s.style.display="none"),t>=o.length-1&&(d.style.display="none"),s.onclick=function(){0==--t?(u(),s.style.display="none"):(u(),d.style.display="block")},d.onclick=function(){++t>=o.length-1?(u(),d.style.display="none"):(u(),s.style.display="block")},document.querySelector("body").style.overflow="hidden",n.classList.add("show"),i.style.display="block",l.onclick=function(){t=y,s.style.display="block",d.style.display="block",n.classList.remove("show"),i.style.display="none",document.querySelector("body").style.overflow="scroll"}}},t=0;t<o.length;t++)e(t)}}});