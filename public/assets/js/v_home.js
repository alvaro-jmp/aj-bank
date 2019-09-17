// This code use third-party software "preact":
// Copyright (c) 2015-present Jason Miller.
// Licensed under the MIT License (MIT), see
// https://github.com/preactjs/preact/blob/master/LICENSE

// This code use third-party software "validator":
// Copyright (c) 2018 Chris O'Hara <cohara87@gmail.com>.
// Licensed under the MIT License (MIT), see
// https://github.com/chriso/validator.js/blob/master/LICENSE

// This code use third-party software "hyperscript-helpers":
// Copyright (c) 2015 Ossi Hanhinen.
// Licensed under the MIT License (MIT), see
// https://github.com/ohanhi/hyperscript-helpers/blob/master/LICENSE



// This code use third-party software "firebase":
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s="PNpO")}({"IEM/":function(e){!function(){"use strict";function t(e,t){var n,o,r,i,l=U;for(i=arguments.length;i-- >2;)j.push(arguments[i]);for(t&&null!=t.children&&(j.length||j.push(t.children),delete t.children);j.length;)if((o=j.pop())&&void 0!==o.pop)for(i=o.length;i--;)j.push(o[i]);else"boolean"==typeof o&&(o=null),(r="function"!=typeof e)&&(null==o?o="":"number"==typeof o?o+="":"string"!=typeof o&&(r=!1)),r&&n?l[l.length-1]+=o:l===U?l=[o]:l.push(o),n=r;var a=new S;return a.nodeName=e,a.children=l,a.attributes=null==t?void 0:t,a.key=null==t?void 0:t.key,void 0!==T.vnode&&T.vnode(a),a}function n(e,t){for(var n in t)e[n]=t[n];return e}function o(e,t){e&&("function"==typeof e?e(t):e.current=t)}function r(e,o){return t(e.nodeName,n(n({},e.attributes),o),arguments.length>2?[].slice.call(arguments,2):e.children)}function i(e){!e.__d&&(e.__d=!0)&&1==D.push(e)&&(T.debounceRendering||L)(l)}function l(){for(var e;e=D.pop();)e.__d&&N(e)}function a(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&u(e,t.nodeName):n||e._componentConstructor===t.nodeName}function u(e,t){return e.__n===t||e.nodeName.toLowerCase()===t.toLowerCase()}function c(e){var t=n({},e.attributes);t.children=e.children;var o=e.nodeName.defaultProps;if(void 0!==o)for(var r in o)void 0===t[r]&&(t[r]=o[r]);return t}function s(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.__n=e,n}function p(e){var t=e.parentNode;t&&t.removeChild(e)}function f(e,t,n,r,i){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)o(n,null),o(r,e);else if("class"!==t||i)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var l in n)l in r||(e.style[l]="");for(var l in r)e.style[l]="number"==typeof r[l]&&!1===W.test(l)?r[l]+"px":r[l]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,d,a):e.removeEventListener(t,d,a),(e.__l||(e.__l={}))[t]=r}else if("list"!==t&&"type"!==t&&!i&&t in e){try{e[t]=null==r?"":r}catch(e){}null!=r&&!1!==r||"spellcheck"==t||e.removeAttribute(t)}else{var u=i&&t!==(t=t.replace(/^xlink:?/,""));null==r||!1===r?u?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(u?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function d(e){return this.__l[e.type](T.event&&T.event(e)||e)}function _(){for(var e;e=A.shift();)T.afterMount&&T.afterMount(e),e.componentDidMount&&e.componentDidMount()}function m(e,t,n,o,r,i){H++||(q=null!=r&&void 0!==r.ownerSVGElement,R=null!=e&&!("__preactattr_"in e));var l=h(e,t,n,o,i);return r&&l.parentNode!==r&&r.appendChild(l),--H||(R=!1,i||_()),l}function h(e,t,n,o,r){var i=e,l=q;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),b(e,!0))),i.__preactattr_=!0,i;var a=t.nodeName;if("function"==typeof a)return k(e,t,n,o);if(q="svg"===a||"foreignObject"!==a&&q,a+="",(!e||!u(e,a))&&(i=s(a,q),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),b(e,!0)}var c=i.firstChild,p=i.__preactattr_,f=t.children;if(null==p){p=i.__preactattr_={};for(var d=i.attributes,_=d.length;_--;)p[d[_].name]=d[_].value}return!R&&f&&1===f.length&&"string"==typeof f[0]&&null!=c&&void 0!==c.splitText&&null==c.nextSibling?c.nodeValue!=f[0]&&(c.nodeValue=f[0]):(f&&f.length||null!=c)&&v(i,f,n,o,R||null!=p.dangerouslySetInnerHTML),g(i,t.attributes,p),q=l,i}function v(e,t,n,o,r){var i,l,u,c,s,f=e.childNodes,d=[],_={},m=0,v=0,y=f.length,g=0,w=t?t.length:0;if(0!==y)for(var x=0;x<y;x++){var C=f[x],N=C.__preactattr_,k=w&&N?C._component?C._component.__k:N.key:null;null!=k?(m++,_[k]=C):(N||(void 0!==C.splitText?!r||C.nodeValue.trim():r))&&(d[g++]=C)}if(0!==w)for(var x=0;x<w;x++){c=t[x],s=null;var k=c.key;if(null!=k)m&&void 0!==_[k]&&(s=_[k],_[k]=void 0,m--);else if(v<g)for(i=v;i<g;i++)if(void 0!==d[i]&&a(l=d[i],c,r)){s=l,d[i]=void 0,i===g-1&&g--,i===v&&v++;break}s=h(s,c,n,o),u=f[x],s&&s!==e&&s!==u&&(null==u?e.appendChild(s):s===u.nextSibling?p(u):e.insertBefore(s,u))}if(m)for(var x in _)void 0!==_[x]&&b(_[x],!1);for(;v<=g;)void 0!==(s=d[g--])&&b(s,!1)}function b(e,t){var n=e._component;n?E(n):(null!=e.__preactattr_&&o(e.__preactattr_.ref,null),!1!==t&&null!=e.__preactattr_||p(e),y(e))}function y(e){for(e=e.lastChild;e;){var t=e.previousSibling;b(e,!0),e=t}}function g(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||f(e,o,n[o],n[o]=void 0,q);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||f(e,o,n[o],n[o]=t[o],q)}function w(e,t,n){var o,r=V.length;for(e.prototype&&e.prototype.render?(o=new e(t,n),M.call(o,t,n)):(o=new M(t,n),o.constructor=e,o.render=x);r--;)if(V[r].constructor===e)return o.__b=V[r].__b,V.splice(r,1),o;return o}function x(e,t,n){return this.constructor(e,n)}function C(e,t,n,r,l){e.__x||(e.__x=!0,e.__r=t.ref,e.__k=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||l?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r)),r&&r!==e.context&&(e.__c||(e.__c=e.context),e.context=r),e.__p||(e.__p=e.props),e.props=t,e.__x=!1,0!==n&&(1!==n&&!1===T.syncComponentUpdates&&e.base?i(e):N(e,1,l)),o(e.__r,e))}function N(e,t,o,r){if(!e.__x){var i,l,a,u=e.props,s=e.state,p=e.context,f=e.__p||u,d=e.__s||s,h=e.__c||p,v=e.base,y=e.__b,g=v||y,x=e._component,k=!1,M=h;if(e.constructor.getDerivedStateFromProps&&(s=n(n({},s),e.constructor.getDerivedStateFromProps(u,s)),e.state=s),v&&(e.props=f,e.state=d,e.context=h,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(u,s,p)?k=!0:e.componentWillUpdate&&e.componentWillUpdate(u,s,p),e.props=u,e.state=s,e.context=p),e.__p=e.__s=e.__c=e.__b=null,e.__d=!1,!k){i=e.render(u,s,p),e.getChildContext&&(p=n(n({},p),e.getChildContext())),v&&e.getSnapshotBeforeUpdate&&(M=e.getSnapshotBeforeUpdate(f,d));var O,P,S=i&&i.nodeName;if("function"==typeof S){var j=c(i);l=x,l&&l.constructor===S&&j.key==l.__k?C(l,j,1,p,!1):(O=l,e._component=l=w(S,j,p),l.__b=l.__b||y,l.__u=e,C(l,j,0,p,!1),N(l,1,o,!0)),P=l.base}else a=g,O=x,O&&(a=e._component=null),(g||1===t)&&(a&&(a._component=null),P=m(a,i,p,o||!v,g&&g.parentNode,!0));if(g&&P!==g&&l!==x){var U=g.parentNode;U&&P!==U&&(U.replaceChild(P,g),O||(g._component=null,b(g,!1)))}if(O&&E(O),e.base=P,P&&!r){for(var L=e,W=e;W=W.__u;)(L=W).base=P;P._component=L,P._componentConstructor=L.constructor}}for(!v||o?A.push(e):k||(e.componentDidUpdate&&e.componentDidUpdate(f,d,M),T.afterUpdate&&T.afterUpdate(e));e.__h.length;)e.__h.pop().call(e);H||r||_()}}function k(e,t,n,o){for(var r=e&&e._component,i=r,l=e,a=r&&e._componentConstructor===t.nodeName,u=a,s=c(t);r&&!u&&(r=r.__u);)u=r.constructor===t.nodeName;return r&&u&&(!o||r._component)?(C(r,s,3,n,o),e=r.base):(i&&!a&&(E(i),e=l=null),r=w(t.nodeName,s,n),e&&!r.__b&&(r.__b=e,l=null),C(r,s,1,n,o),e=r.base,l&&e!==l&&(l._component=null,b(l,!1))),e}function E(e){T.beforeUnmount&&T.beforeUnmount(e);var t=e.base;e.__x=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?E(n):t&&(null!=t.__preactattr_&&o(t.__preactattr_.ref,null),e.__b=t,p(t),V.push(e),y(t)),o(e.__r,null)}function M(e,t){this.__d=!0,this.context=t,this.props=e,this.state=this.state||{},this.__h=[]}function O(e,t,n){return m(n,e,{},!1,t,!1)}function P(){return{}}var S=function(){},T={},j=[],U=[],L="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,W=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,D=[],A=[],H=0,q=!1,R=!1,V=[];n(M.prototype,{setState:function(e,t){this.__s||(this.__s=this.state),this.state=n(n({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this.__h.push(t),i(this)},forceUpdate:function(e){e&&this.__h.push(e),N(this,2)},render:function(){}});var I={h:t,createElement:t,cloneElement:r,createRef:P,Component:M,render:O,rerender:l,options:T};e.exports=I}()},JkW7:function(e,t,n){"use strict";function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n("IEM/"),c=n("nq8m")(u.h),s=c.div,p=c.h1,f=function(e){function t(){return o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){return s({class:"w3-container"},[p({},["Testing ..."])])},t}(u.Component),d=f,_=n("nq8m")(u.h),m=_.div,h=_.h1,v=function(e){function t(){return i(this,t),l(this,e.apply(this,arguments))}return a(t,e),t.prototype.render=function(){return m({class:"w3-container"},[h({},["Hello world"]),Object(u.h)(d)])},t.prototype.componentDidMount=function(){console.log("componentDidMount() HEYY !!!! Hello world xD")},t}(u.Component);t.default=v},PNpO:function(e,t,n){"use strict";var o=n("IEM/"),r=function(e){return e&&e.default?e.default:e};if("function"==typeof r(n("JkW7"))){var i=document.body.firstElementChild,l=function(){var e=r(n("JkW7"));i=(0,o.render)((0,o.h)(e),document.body,i)};l()}},nq8m:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return"string"==typeof e&&e.length>0},o=function(e,t){return e[0]===t},r=function(e){return n(e)&&(o(e,".")||o(e,"#"))},i=function(e){return function(t){return function(n){for(var o=arguments.length,i=Array(o>1?o-1:0),l=1;l<o;l++)i[l-1]=arguments[l];return r(n)?e.apply(void 0,[t+n].concat(i)):void 0===n?e(t):e.apply(void 0,[t,n].concat(i))}}},l=["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","bgsound","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","command","content","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","element","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","image","img","input","ins","isindex","kbd","keygen","label","legend","li","link","listing","main","map","mark","marquee","math","menu","menuitem","meta","meter","multicol","nav","nextid","nobr","noembed","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","plaintext","pre","progress","q","rb","rbc","rp","rt","rtc","ruby","s","samp","script","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xmp"];t.default=function(e){var t=i(e),n={TAG_NAMES:l,isSelector:r,createTag:t};return l.forEach(function(e){n[e]=t(e)}),n},e.exports=t.default}});
//# sourceMappingURL=bundle.e98b2.js.map