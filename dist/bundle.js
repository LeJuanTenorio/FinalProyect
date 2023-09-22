(()=>{"use strict";var n={377:(n,e,t)=>{t.d(e,{Z:()=>r});var o=t(81),s=t.n(o),i=t(645),a=t.n(i)()(s());a.push([n.id,".feed{\n    display: flex;\n    flex-direction: column;\n    width:70vw;\n    height:100vh;\n}\n\n.lowerFeed{\n    display: flex;\n    flex-direction: row;\n}",""]);const r=a},948:(n,e,t)=>{t.d(e,{Z:()=>r});var o=t(81),s=t.n(o),i=t(645),a=t.n(i)()(s());a.push([n.id,".container{\n    display: flex;\n    height: 20vh;\n    width: 100%;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}",""]);const r=a},261:(n,e,t)=>{t.d(e,{Z:()=>r});var o=t(81),s=t.n(o),i=t(645),a=t.n(i)()(s());a.push([n.id,".mainDash{\n    display: flex;\n    flex-direction: row;\n    width:95vw;\n    height:100%;\n}",""]);const r=a},480:(n,e,t)=>{t.d(e,{Z:()=>r});var o=t(81),s=t.n(o),i=t(645),a=t.n(i)()(s());a.push([n.id,"",""]);const r=a},649:(n,e,t)=>{t.d(e,{Z:()=>r});var o=t(81),s=t.n(o),i=t(645),a=t.n(i)()(s());a.push([n.id,"*{\n    background-color: black;\n}",""]);const r=a},38:(n,e,t)=>{t.d(e,{Z:()=>r});var o=t(81),s=t.n(o),i=t(645),a=t.n(i)()(s());a.push([n.id,"*{\n    background-color: rgb(9,30,40);\n}",""]);const r=a},109:(n,e,t)=>{t.d(e,{Z:()=>r});var o=t(81),s=t.n(o),i=t(645),a=t.n(i)()(s());a.push([n.id,"@media screen and (min-width: 769px) {\n    /* Estilos para pantallas grandes */\n.sidebar {\n    width: 100%;\n    height: 100%;\n    background-color: white;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center; \n}\n\n.sidebar ul {\n    list-style: none;\n    padding: 0;\n}\n\n.sidebar ul li {\n    margin: 10%;\n    margin-right: 20%;\n}\n\n.sidebar a {\n    text-decoration: none;\n    color: #00171F;\n}\n\n.sidebar img {\n    height: 80%;\n    width: 80%;\n    padding: 20%;\n}\n}\n\n@media screen and (max-width: 768px) {\n    /* Estilos para pantallas pequeñas */\n  }",""]);const r=a},28:(n,e,t)=>{t.d(e,{Z:()=>r});var o=t(81),s=t.n(o),i=t(645),a=t.n(i)()(s());a.push([n.id,".appContainer{\n    display: flex;\n    flex-direction: row;\n    width: 100vw;\n    height: 100vh;\n}\n\n.sidebar{\n    width: 5vw;\n    height: 100%;\n    top: 0;\n    left: 0;\n    display: flex;\n\n}",""]);const r=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,s,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),s&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=s):l[4]="".concat(s)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}}},e={};function t(o){var s=e[o];if(void 0!==s)return s.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(109);class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n                <style>\n                ${n.Z}\n                </style>\n                \n            <div class="sidebar">\n                <ul>\n                <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/128/1946/1946436.png"></a></li>\n                <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/128/149/149852.png?ga=GA1.1.432586728.1695342026&track=ais"></a></li>\n                <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/128/3602/3602123.png?ga=GA1.1.432586728.1695342026&track=ais"></a></li>\n                <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/128/1077/1077114.png?ga=GA1.1.432586728.1695342026&track=ais"></a></li>\n                </ul>\n            </div>\n                `,console.log("sidebarLeft"))}}customElements.define("my-sidebar",e);var o=t(38);class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <section>\n            <p>placeholder</p>\n            </section>\n\n            <style>\n            ${o.Z}\n            </style>\n            `,console.log("SidebarRight"))}}customElements.define("sidebar-right",s);var i,a=t(649);!function(n){n.id="id",n.logo_title="logo_title",n.background="background"}(i||(i={}));class r extends HTMLElement{static get observedAttributes(){return Object.keys({id:null,logo_title:null,background:null})}attributeChangedCallback(n,e,t){n===i.id||(this[n]=t)}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.logo_title=this.logo_title,this.background=this.background,this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n        <h1>${this.background}</h1>\n        \n        <style>\n          ${a.Z}\n        </style>\n        \n        \n      `,console.log("reviewContainer"))}}customElements.define("review-container",r);var c=t(261);class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <section class="mainDash">\n            <main-feed></main-feed>\n            <sidebar-right></sidebar-right>\n            </section>\n            \n                <style>\n                ${c.Z}\n                <style>\n            `,console.log("mainDash"))}}customElements.define("main-dash",d);var l=t(377);class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <section class="feed">\n\n                <header-welcome></header-welcome>\n\n                <div class="lowerFeed">\n                    <mega-review></mega-review>\n                    <comment-feed></comment-feed>\n                </div>\n\n            </section>\n            \n            <style>\n            ${l.Z}\n            </styles>\n            `,console.log("feed"))}}customElements.define("main-feed",h);class m extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML="\n            <p>commentfeed<p>\n            ",console.log("commentfeed"))}}customElements.define("comment-feed",m);const u=[{name:"Julian",id:"4324235f",img:"https://images.unsplash.com/photo-1623184663110-89ba5b565eb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21pbGluZyUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"}];var p=t(948);class g extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <div class="container">\n            <p>welcome</p>\n            <user name="${u[0].name}"></user>\n            </div>\n\n            <style>\n            ${p.Z}\n            </style>\n            `,console.log("welcome"))}}customElements.define("header-welcome",g);var w,f=t(480);class b extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n                <review-container></review-container>\n                <style>\n                ${f.Z}\n                <style>\n            `,console.log("megareview"))}}customElements.define("mega-review",b),function(n){n.id="id",n.name="name",n.img="img"}(w||(w={}));class v extends HTMLElement{static get observedAttributes(){return Object.keys({id:null,name:null,img:null})}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.name=this.name,this.img=this.img,this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n        <h1>${this.name}</h1>\n        <img src="${this.img}"></img>\n        <style>\n        </style>\n        `)}}customElements.define("user-info",v);var y=t(28);class x extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <style>\n            ${y.Z}\n            </style>\n    \n            <section class="appContainer">\n            <my-sidebar class="sidebar"></my-sidebar>\n            <main-dash></main-dash>\n            </section>\n            \n\n            `,console.log("holi"))}}customElements.define("app-container",x)})()})();