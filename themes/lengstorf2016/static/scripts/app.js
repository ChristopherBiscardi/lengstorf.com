!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var o=n(4),i=n(3),s=n(7),a=n(6),r=n(5);(0,o.moveMarkdownFootnotes)({srcBlockClass:"footnotes",destBlockClass:"post-footnotes"}),document.addEventListener("click",function(t){(0,s.scrollToLocalLinks)(t,{offsetAdjustment:20,callback:o.highlightCurrentFootnote.bind(null,{containerClass:"post-footnotes"})})}),(0,i.fiveStagesInit)(),(0,a.lazyLoadImages)({containerClass:"js--lazyload",loadingClass:"js--lazyload--loading"}),(0,r.lazyLoadDisqus)({shortName:"lengstorf"})},function(t,e){"use strict";function n(t){var e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)}function o(t){var e=t.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight;return e.top>=0&&e.top<=n||e.bottom>=0&&e.bottom<=n}function i(t){var e=arguments.length<=1||void 0===arguments[1]?"js__in-viewport":arguments[1];n(t)?t.classList.add(e):t.classList.remove(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.isElementInViewport=n,e.isElementVisible=o,e.onVisibilityChange=i},function(t,e){"use strict";function n(t){var e=arguments.length<=1||void 0===arguments[1]?200:arguments[1],n=!1;return function(){n||(t.call(),n=!0,setTimeout(function(){n=!1},e))}}Object.defineProperty(e,"__esModule",{value:!0}),e.throttle=n},function(t,e,n){"use strict";function o(){var t=arguments.length<=0||void 0===arguments[0]?".five-stages":arguments[0],e=document.querySelectorAll(t);return e?([].forEach.call(e,function(t){t.classList.add("js__active");var e=function(){(0,i.onVisibilityChange)(t)};addEventListener("scroll",e,!1)}),!0):!1}Object.defineProperty(e,"__esModule",{value:!0}),e.fiveStagesInit=o;var i=n(1)},function(t,e){"use strict";function n(t){var e=t.srcBlockClass,n=t.destBlockClass,o=document.getElementsByClassName(e).item(0);if(o){var s=document.getElementsByClassName(n).item(0),a=o.getElementsByTagName("OL").item(0);a.classList.add(n+"__list"),i(a,n),s.appendChild(a),s.classList.remove(n+"--hidden"),o.parentNode&&o.parentNode.removeChild(o)}}function o(t,e){var n=t.containerClass,o=t.highlightModifier,i=void 0===o?"--highlight":o,a=e.parentNode,r=a.classList.contains(n+"__list"),c=n+"__footnote"+i;s(n,c),r&&"LI"===e.tagName&&e.classList.add(c)}Object.defineProperty(e,"__esModule",{value:!0}),e.moveMarkdownFootnotes=n,e.highlightCurrentFootnote=o;var i=function(t,e){for(var n=t.children,o=0;o<n.length;o++){n[o].classList.add(e+"__footnote");var i=n[o].querySelector(".footnote-return");i&&i.classList.add(e+"__return-link")}},s=function(t,e){for(var n=document.querySelector("."+t+"__list"),o=n?n.firstElementChild:!1;o&&"LI"===o.tagName;)o.classList.remove(e),o=o.nextElementSibling}},function(t,e,n){"use strict";function o(t){var e=t.shortName,n=t.containerClass,o=void 0===n?"comments":n,c=document.getElementsByClassName(o)[0],l=(0,i.throttle)(function(){c&&!a&&(0,s.isElementVisible)(c)&&r(e)},100);window.addEventListener("scroll",l),l()}Object.defineProperty(e,"__esModule",{value:!0}),e.lazyLoadDisqus=o;var i=n(2),s=n(1),a=!1,r=function(t){var e=(window.disqus_config,document.createElement("script"));e.type="text/javascript",e.async=!0,e.src="//"+t+".disqus.com/embed.js",(document.body||document.head).appendChild(e),a=!0}},function(t,e,n){"use strict";function o(t){var e=t.containerClass,n=t.loadingClass,o=document.getElementsByClassName(e),s=Array.prototype.map.call(o,function(t){return t.firstElementChild}),l=new Event("lazyload-init");s.forEach(function(t){t.addEventListener("load",function(t){c(t.target,n)}),t.addEventListener("lazyload-init",r),a(t,l)});var d=(0,i.throttle)(function(){s.forEach(function(t){a(t,l)})},100);window.addEventListener("scroll",d)}Object.defineProperty(e,"__esModule",{value:!0}),e.lazyLoadImages=o;var i=n(2),s=n(1),a=function(t,e){return!t.dataset.loaded&&(0,s.isElementVisible)(t)?(t.dispatchEvent(e),!0):!1},r=function(t){t.target.srcset=t.target.dataset.lazyload,t.target.dataset.loaded=!0},c=function(t,e){t.parentNode.classList.remove(e)}},function(t,e){"use strict";function n(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=e.offsetAdjustment,o=void 0===n?0:n,i=e.duration,s=void 0===i?750:i,a=e.callback,r=void 0===a?function(){}:a;"A"===t.target.tagName&&"undefined"!==t.target.href&&!function(){l();var e={uri:t.target.href,offsetAdjustment:o,duration:s,callback:r};u(t,e).then(function(){history.pushState({newURL:e.uri},"",e.uri)})["catch"](function(t){})}()}Object.defineProperty(e,"__esModule",{value:!0}),e.scrollToLocalLinks=n;var o=!1,i=function(){var t=document.location,e=t.protocol,n=t.host,o=t.pathname;return e+"//"+n+o},s=function(t){return!t.replace(i(),"").match(/^http/)},a=function(){return document.body.scrollTop?document.body:document.documentElement},r=function(t,e,n,o){return-n/2*(Math.cos(Math.PI*t/o)-1)+e},c=function f(t,e,n){var o=n.position,i=n.stepSize,s=n.increment,a=n.duration,c=n.callback,l=void 0===c?function(){}:c;e+=s,t.scrollTop=r(e,o,i,a),a>e?setTimeout(function(){f(t,e,{position:o,stepSize:i,increment:s,duration:a,callback:l})},s):l()},l=function(){document.body&&0===document.body.scrollTop&&(document.body.scrollTop=1)},d=function(t,e,n){return new Promise(function(o,i){c(t,0,{position:t.scrollTop,stepSize:e-t.scrollTop,increment:20,callback:o,duration:n})})},u=function(t,e){var n=e.uri,i=e.offsetAdjustment,r=e.duration,c=e.callback;return new Promise(function(e,l){o&&l("Scrolling is already in progress.");var u=n.split("#")[1]||!1;if(s(n)&&u){t.preventDefault(),o=!0;var f=u?document.getElementById(u):!1,m=a(),v=f.offsetTop-i;d(m,v,r).then(function(){o=!1,e()}),c(f)}else l("Link is not local.")})}}]);