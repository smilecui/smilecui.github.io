define("resource/js/sentinel.min",function(){this.sentinel||function(e,n){sentinel=function(){var e,n,t,i=Array.isArray,o={},r={};return{on:function(a,s){if(s){if(!e){var f=document,l=f.head;f.addEventListener("animationstart",function(e,n,t,i){if(n=r[e.animationName])for(e.stopImmediatePropagation(),t=n.length,i=0;t>i;i++)n[i](e.target)},!0),e=f.createElement("style"),l.insertBefore(e,l.firstChild),n=e.sheet,t=n.cssRules}(i(a)?a:[a]).map(function(e,i,a){i=o[e],i||(a="!"==e[0],o[e]=i=a?e.slice(1):"sentinel-"+Math.random().toString(16).slice(2),t[n.insertRule("@keyframes "+i+"{from{transform:none;}to{transform:none;}}",t.length)]._id=e,a||(t[n.insertRule(e+"{animation-duration:0.0001s;animation-name:"+i+";}",t.length)]._id=e),o[e]=i),(r[i]=r[i]||[]).push(s)})}},off:function(e,a){(i(e)?e:[e]).map(function(e,i,s,f){if(i=o[e]){if(s=r[i],a)for(f=s.length;f--;)s[f]===a&&s.splice(f,1);else s=[];if(!s.length){for(f=t.length;f--;)t[f]._id==e&&n.deleteRule(f);delete o[e],delete r[i]}}})},reset:function(){o={},r={},e&&e.parentNode.removeChild(e),e=0}}}(),n=e.createEvent("HTMLEvents"),n.initEvent("sentinel-load",!1,!1),e.dispatchEvent(n)}(document)});