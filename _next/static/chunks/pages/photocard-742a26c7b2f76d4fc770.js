(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[785],{6839:function(o,e,n){"use strict";var t=n(5893),a=n(7294);e.Z=function(o){var e=o.children,n=o.className,r=(0,a.useRef)();return(0,a.useEffect)((function(){function o(){r.current.style.height=window.innerHeight+"px"}return document.querySelector("html").classList.add(n),document.querySelector("body").classList.add(n),o(),window.addEventListener("resize",o),function(){document.querySelector("html").removeAttribute("class"),document.querySelector("body").removeAttribute("class"),window.removeEventListener("resize",o)}}),[]),(0,t.jsx)("div",{className:"wrap",ref:r,children:e})}},5542:function(o,e,n){"use strict";n.d(e,{E:function(){return t}});var t="/xr-global"},2167:function(o,e,n){"use strict";var t=n(3038);e.default=void 0;var a,r=(a=n(7294))&&a.__esModule?a:{default:a},d=n(1063),s=n(4651),_=n(7426);var i={};function c(o,e,n,t){if(o&&d.isLocalURL(e)){o.prefetch(e,n,t).catch((function(o){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:o&&o.locale;i[e+"%"+n+(a?"%"+a:"")]=!0}}var l=function(o){var e,n=!1!==o.prefetch,a=s.useRouter(),l=r.default.useMemo((function(){var e=d.resolveHref(a,o.href,!0),n=t(e,2),r=n[0],s=n[1];return{href:r,as:o.as?d.resolveHref(a,o.as):s||r}}),[a,o.href,o.as]),u=l.href,m=l.as,p=o.children,f=o.replace,h=o.shallow,g=o.scroll,w=o.locale;"string"===typeof p&&(p=r.default.createElement("a",null,p));var E=(e=r.default.Children.only(p))&&"object"===typeof e&&e.ref,j=_.useIntersection({rootMargin:"200px"}),x=t(j,2),b=x[0],v=x[1],y=r.default.useCallback((function(o){b(o),E&&("function"===typeof E?E(o):"object"===typeof E&&(E.current=o))}),[E,b]);r.default.useEffect((function(){var o=v&&n&&d.isLocalURL(u),e="undefined"!==typeof w?w:a&&a.locale,t=i[u+"%"+m+(e?"%"+e:"")];o&&!t&&c(a,u,m,{locale:e})}),[m,u,v,w,n,a]);var N={ref:y,onClick:function(o){e.props&&"function"===typeof e.props.onClick&&e.props.onClick(o),o.defaultPrevented||function(o,e,n,t,a,r,s,_){("A"!==o.currentTarget.nodeName||!function(o){var e=o.currentTarget.target;return e&&"_self"!==e||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.nativeEvent&&2===o.nativeEvent.which}(o)&&d.isLocalURL(n))&&(o.preventDefault(),null==s&&t.indexOf("#")>=0&&(s=!1),e[a?"replace":"push"](n,t,{shallow:r,locale:_,scroll:s}))}(o,a,u,m,f,h,g,w)},onMouseEnter:function(o){d.isLocalURL(u)&&(e.props&&"function"===typeof e.props.onMouseEnter&&e.props.onMouseEnter(o),c(a,u,m,{priority:!0}))}};if(o.passHref||"a"===e.type&&!("href"in e.props)){var k="undefined"!==typeof w?w:a&&a.locale,L=a&&a.isLocaleDomain&&d.getDomainLocale(m,k,a&&a.locales,a&&a.domainLocales);N.href=L||d.addBasePath(d.addLocale(m,k,a&&a.defaultLocale))}return r.default.cloneElement(e,N)};e.default=l},7426:function(o,e,n){"use strict";var t=n(3038);Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(o){var e=o.rootMargin,n=o.disabled||!d,_=a.useRef(),i=a.useState(!1),c=t(i,2),l=c[0],u=c[1],m=a.useCallback((function(o){_.current&&(_.current(),_.current=void 0),n||l||o&&o.tagName&&(_.current=function(o,e,n){var t=function(o){var e=o.rootMargin||"",n=s.get(e);if(n)return n;var t=new Map,a=new IntersectionObserver((function(o){o.forEach((function(o){var e=t.get(o.target),n=o.isIntersecting||o.intersectionRatio>0;e&&n&&e(n)}))}),o);return s.set(e,n={id:e,observer:a,elements:t}),n}(n),a=t.id,r=t.observer,d=t.elements;return d.set(o,e),r.observe(o),function(){d.delete(o),r.unobserve(o),0===d.size&&(r.disconnect(),s.delete(a))}}(o,(function(o){return o&&u(o)}),{rootMargin:e}))}),[n,e,l]);return a.useEffect((function(){if(!d&&!l){var o=r.requestIdleCallback((function(){return u(!0)}));return function(){return r.cancelIdleCallback(o)}}}),[l]),[m,l]};var a=n(7294),r=n(3447),d="undefined"!==typeof IntersectionObserver;var s=new Map},6485:function(o,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var t=n(5893),a=n(7294),r=n(1664),d=n(6839),s=n(5542),_=n(3422),i=[{idx:1,thumb_src_off:s.E+"/images/photocard_item01.png",thumb_src_on:s.E+"/images/photocard_item01_on.png",download_thumb_src:[s.E+"/images/download_item_1_1.jpg",s.E+"/images/download_item_1_2.jpg",s.E+"/images/download_item_1_3.jpg"],download_src:[s.E+"/download/exo_photo_no_1_1.jpg",s.E+"/download/exo_photo_no_1_2.jpg",s.E+"/download/exo_photo_no_1_3.jpg"],name:"\uc2dc\uc6b0\ubbfc"},{idx:2,thumb_src_off:s.E+"/images/photocard_item02.png",thumb_src_on:s.E+"/images/photocard_item02_on.png",download_thumb_src:[s.E+"/images/download_item_2_1.jpg",s.E+"/images/download_item_2_2.jpg",s.E+"/images/download_item_2_3.jpg"],download_src:[s.E+"/download/exo_photo_no_2_1.jpg",s.E+"/download/exo_photo_no_2_2.jpg",s.E+"/download/exo_photo_no_2_3.jpg"],name:"\ub514\uc624"},{idx:3,thumb_src_off:s.E+"/images/photocard_item03.png",thumb_src_on:s.E+"/images/photocard_item03_on.png",download_thumb_src:[s.E+"/images/download_item_3_1.jpg",s.E+"/images/download_item_3_2.jpg",s.E+"/images/download_item_3_3.jpg"],download_src:[s.E+"/download/exo_photo_no_3_1.jpg",s.E+"/download/exo_photo_no_3_2.jpg",s.E+"/download/exo_photo_no_3_3.jpg"],name:"\ubc31\ud604"},{idx:4,thumb_src_off:s.E+"/images/photocard_item04.png",thumb_src_on:s.E+"/images/photocard_item04_on.png",download_thumb_src:[s.E+"/images/download_item_4_1.jpg",s.E+"/images/download_item_4_2.jpg",s.E+"/images/download_item_4_3.jpg"],download_src:[s.E+"/download/exo_photo_no_4_1.jpg",s.E+"/download/exo_photo_no_4_2.jpg",s.E+"/download/exo_photo_no_4_3.jpg"],name:"\ucc2c\uc5f4"},{idx:5,thumb_src_off:s.E+"/images/photocard_item05.png",thumb_src_on:s.E+"/images/photocard_item05_on.png",download_thumb_src:[s.E+"/images/download_item_5_1.jpg",s.E+"/images/download_item_5_2.jpg",s.E+"/images/download_item_5_3.jpg"],download_src:[s.E+"/download/exo_photo_no_5_1.jpg",s.E+"/download/exo_photo_no_5_2.jpg",s.E+"/download/exo_photo_no_5_3.jpg"],name:"\uce74\uc774"},{idx:6,thumb_src_off:s.E+"/images/photocard_item06.png",thumb_src_on:s.E+"/images/photocard_item06_on.png",download_thumb_src:[s.E+"/images/download_item_6_1.jpg",s.E+"/images/download_item_6_2.jpg",s.E+"/images/download_item_6_3.jpg"],download_src:[s.E+"/download/exo_photo_no_6_1.jpg",s.E+"/download/exo_photo_no_6_2.jpg",s.E+"/download/exo_photo_no_6_3.jpg"],name:"\uc138\ud6c8"},{idx:7,thumb_src_off:s.E+"/images/photocard_item07.png",thumb_src_on:s.E+"/images/photocard_item07_on.png",download_thumb_src:[s.E+"/images/download_item_7_1.jpg",s.E+"/images/download_item_7_2.jpg",s.E+"/images/download_item_7_3.jpg"],download_src:[s.E+"/download/exo_photo_no_7_1.jpg",s.E+"/download/exo_photo_no_7_2.jpg",s.E+"/download/exo_photo_no_7_3.jpg"],name:"\ub2e8\uccb4 1"},{idx:8,thumb_src_off:s.E+"/images/photocard_item08.png",thumb_src_on:s.E+"/images/photocard_item08_on.png",download_thumb_src:[s.E+"/images/download_item_8_1.jpg",s.E+"/images/download_item_8_2.jpg",s.E+"/images/download_item_8_3.jpg"],download_src:[s.E+"/download/exo_photo_no_8_1.jpg",s.E+"/download/exo_photo_no_8_2.jpg",s.E+"/download/exo_photo_no_8_3.jpg"],name:"\ub2e8\uccb4 2"},{idx:9,thumb_src_off:s.E+"/images/photocard_item09.png",thumb_src_on:s.E+"/images/photocard_item09_on.png",download_thumb_src:[s.E+"/images/download_item_9_1.jpg",s.E+"/images/download_item_9_2.jpg",s.E+"/images/download_item_9_3.jpg"],download_src:[s.E+"/download/exo_photo_no_9_1.jpg",s.E+"/download/exo_photo_no_9_2.jpg",s.E+"/download/exo_photo_no_9_3.jpg"],name:"\ub2e8\uccb4 3"}],c=function(o){return void 0!==o?i.filter((function(e){return e.idx==o?e:null})):i},l=n(1010),u=function(){var o=(0,_.I0)(),e=(0,_.v9)((function(o){return o.photocard})).photocards;return(0,t.jsxs)("div",{className:"photocard-content",children:[(0,t.jsxs)("p",{className:"text",children:["Thank you for watching",(0,t.jsx)("br",{}),"all EXO XR Gallery videos!"]}),(0,t.jsxs)("p",{className:"text",children:["Enjoy\xa0EXO member and group photos\xa0with",(0,t.jsx)("br",{}),"member\u2019s autographs especially for EXO-Ls!"]}),(0,t.jsxs)("div",{className:"photocard-list",children:[(0,t.jsx)("p",{className:"list-title",children:"Select your EXO planet"}),(0,t.jsx)("ul",{children:e.map((function(e){return(0,t.jsx)("li",{className:"list-item","data-num":e.idx,children:(0,t.jsxs)("button",{type:"button",className:"inner",onClick:function(){var n;n=e.idx,o({type:l.MJ,data:c(n)})},children:[(0,t.jsx)("img",{src:e.thumb_src_off,className:"img off"}),(0,t.jsx)("img",{src:e.thumb_src_on,className:"img on"}),(0,t.jsx)("p",{className:"name",children:e.name})]})},e.idx)}))})]})]})},m=function(){var o=(0,_.v9)((function(o){return o.photocard})).photocardViewData,e=o.idx,n=o.download_thumb_src,r=o.download_src,d=(0,a.useRef)(Math.floor(3*Math.random()));return(0,t.jsxs)("div",{className:"download-content",children:[(0,t.jsx)("div",{className:"download-img",children:(0,t.jsx)("img",{src:n[d.current]})}),(0,t.jsx)("div",{className:"button-wrap",children:(0,t.jsx)("a",{href:r[d.current],className:"download-btn","data-num":e,download:!0,children:(0,t.jsx)("span",{children:"Download"})})})]})},p=function(){var o=(0,_.I0)(),e=(0,a.useState)(!1),n=e[0],i=e[1],p=(0,_.v9)((function(o){return o.photocard})).photocardViewActivate,f=(0,a.useRef)(null);return(0,a.useEffect)((function(){o({type:l.yD,data:c()})}),[]),(0,a.useEffect)((function(){n?f.current.play():f.current.pause()}),[n]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("audio",{ref:f,src:"".concat(s.E,"/sound/photocard_sound.mp3")}),(0,t.jsxs)(d.Z,{className:"photocard",children:[(0,t.jsxs)("header",{className:"header common",children:[p?(0,t.jsx)("button",{type:"button",className:"btn-back",onClick:function(){o({type:l.qJ})}}):(0,t.jsx)(r.default,{href:"/gallery",as:"".concat(s.E,"/gallery"),children:(0,t.jsx)("a",{className:"btn-back"})}),(0,t.jsx)("button",{type:"button",className:"btn-sound ".concat(n?"active":""),onClick:function(){i((function(o){return!o}))}})]}),(0,t.jsx)("div",{className:"photocard-wrap",children:p?(0,t.jsx)(m,{}):(0,t.jsx)(u,{})})]}),(0,t.jsx)("div",{className:"modal-wrap active","data-modal":"f","data-modal-type":"alert",onClick:function(o){o.target==o.currentTarget&&(i(!0),o.currentTarget.classList.remove("active"))},children:(0,t.jsx)("div",{className:"modal-body",children:(0,t.jsx)("div",{className:"modal-content",children:(0,t.jsxs)("p",{className:"text",children:["Now playing : '\uc9c0\ucf1c\uc904\uac8c(Just as usual) - EXO'",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"To turn off the music,",(0,t.jsx)("br",{}),"press the speaker button"]})})})})]})}},2797:function(o,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/photocard",function(){return n(6485)}])},1664:function(o,e,n){o.exports=n(2167)}},function(o){o.O(0,[774,888,179],(function(){return e=2797,o(o.s=e);var e}));var e=o.O();_N_E=e}]);