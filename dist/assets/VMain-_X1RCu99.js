import{a4 as pe,n as w,a5 as be,a6 as Ce,c as M,M as ie,o as K,S as W,T as ue,a7 as ee,g as te,e as O,p as Ve,U as Ae,q as he,a8 as Ie,W as Se,X as ke,r as Le,a9 as Pe,Y as xe,R as Me,t as Re,Z as we,_ as Ee,$ as Be,v as De,u as He,a0 as Te,a1 as ze,w as $e,aa as Oe,x as Fe,L as Ze,a3 as Ne,ab as _e,ac as Ue,P as je,ad as ae,z as qe}from"./VOverlay-CwWkSeu2.js";import{L as X,p as x,a as Ke,a5 as re,Q as ce,y as de,a6 as We,a7 as Xe,c as f,E as Ye,r as Y,_ as H,A as $,D as Qe,a8 as Ge,g as R,b as s,x as Je,z as et,O as F,F as ne,s as tt,v as at,M as nt,P as lt,u as st,a9 as ot,C as le,U as it,m as se,aa as ut}from"./index-BSQDVEEi.js";const Z=Symbol.for("vuetify:layout"),ve=Symbol.for("vuetify:layout-item"),oe=1e3,kt=x({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Lt=x({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function rt(){const e=X(Z);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Pt(e){const u=X(Z);if(!u)throw new Error("[Vuetify] Could not find injected layout");const t=e.id??`layout-item-${Ke()}`,a=re("useLayoutItem");ce(ve,{id:t});const o=de(!1);We(()=>o.value=!0),Xe(()=>o.value=!1);const{layoutItemStyles:n,layoutItemScrimStyles:d}=u.register(a,{...e,active:f(()=>o.value?!1:e.active.value),id:t});return Ye(()=>u.unregister(t)),{layoutItemStyles:n,layoutRect:u.layoutRect,layoutItemScrimStyles:d}}const ct=(e,u,t,a)=>{let o={top:0,left:0,right:0,bottom:0};const n=[{id:"",layer:{...o}}];for(const d of e){const g=u.get(d),r=t.get(d),i=a.get(d);if(!g||!r||!i)continue;const l={...o,[g.value]:parseInt(o[g.value],10)+(i.value?parseInt(r.value,10):0)};n.push({id:d,layer:l}),o=l}return n};function xt(e){const u=X(Z,null),t=f(()=>u?u.rootZIndex.value-100:oe),a=Y([]),o=H(new Map),n=H(new Map),d=H(new Map),g=H(new Map),r=H(new Map),{resizeRef:i,contentRect:l}=pe(),C=f(()=>{const v=new Map,b=e.overlaps??[];for(const c of b.filter(y=>y.includes(":"))){const[y,m]=c.split(":");if(!a.value.includes(y)||!a.value.includes(m))continue;const A=o.get(y),S=o.get(m),P=n.get(y),B=n.get(m);!A||!S||!P||!B||(v.set(m,{position:A.value,amount:parseInt(P.value,10)}),v.set(y,{position:S.value,amount:-parseInt(B.value,10)}))}return v}),p=f(()=>{const v=[...new Set([...d.values()].map(c=>c.value))].sort((c,y)=>c-y),b=[];for(const c of v){const y=a.value.filter(m=>{var A;return((A=d.get(m))==null?void 0:A.value)===c});b.push(...y)}return ct(b,o,n,g)}),V=f(()=>!Array.from(r.values()).some(v=>v.value)),h=f(()=>p.value[p.value.length-1].layer),E=f(()=>({"--v-layout-left":$(h.value.left),"--v-layout-right":$(h.value.right),"--v-layout-top":$(h.value.top),"--v-layout-bottom":$(h.value.bottom),...V.value?void 0:{transition:"none"}})),I=f(()=>p.value.slice(1).map((v,b)=>{let{id:c}=v;const{layer:y}=p.value[b],m=n.get(c),A=o.get(c);return{id:c,...y,size:Number(m.value),position:A.value}})),T=v=>I.value.find(b=>b.id===v),L=re("createLayout"),z=de(!1);Qe(()=>{z.value=!0}),ce(Z,{register:(v,b)=>{let{id:c,order:y,position:m,layoutSize:A,elementSize:S,active:P,disableTransitions:B,absolute:me}=b;d.set(c,y),o.set(c,m),n.set(c,A),g.set(c,P),B&&r.set(c,B);const Q=Ge(ve,L==null?void 0:L.vnode).indexOf(v);Q>-1?a.value.splice(Q,0,c):a.value.push(c);const G=f(()=>I.value.findIndex(D=>D.id===c)),U=f(()=>t.value+p.value.length*2-G.value*2),fe=f(()=>{const D=m.value==="left"||m.value==="right",j=m.value==="right",ge=m.value==="bottom",J={[m.value]:0,zIndex:U.value,transform:`translate${D?"X":"Y"}(${(P.value?0:-110)*(j||ge?-1:1)}%)`,position:me.value||t.value!==oe?"absolute":"fixed",...V.value?void 0:{transition:"none"}};if(!z.value)return J;const k=I.value[G.value];if(!k)throw new Error(`[Vuetify] Could not find layout item "${c}"`);const q=C.value.get(c);return q&&(k[q.position]+=q.amount),{...J,height:D?`calc(100% - ${k.top}px - ${k.bottom}px)`:S.value?`${S.value}px`:void 0,left:j?void 0:`${k.left}px`,right:j?`${k.right}px`:void 0,top:m.value!=="bottom"?`${k.top}px`:void 0,bottom:m.value!=="top"?`${k.bottom}px`:void 0,width:D?S.value?`${S.value}px`:void 0:`calc(100% - ${k.left}px - ${k.right}px)`}}),ye=f(()=>({zIndex:U.value-1}));return{layoutItemStyles:fe,layoutItemScrimStyles:ye,zIndex:U}},unregister:v=>{d.delete(v),o.delete(v),n.delete(v),g.delete(v),r.delete(v),a.value=a.value.filter(b=>b!==v)},mainRect:h,mainStyles:E,getLayoutItem:T,items:I,layoutRect:l,rootZIndex:t});const N=f(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),_=f(()=>({zIndex:u?t.value:void 0,position:u?"relative":void 0,overflow:u?"hidden":void 0}));return{layoutClasses:N,layoutStyles:_,getLayoutItem:T,items:I,layoutRect:l,layoutRef:i}}var Mt="M16 17V19H2V17S2 13 9 13 16 17 16 17M12.5 7.5A3.5 3.5 0 1 0 9 11A3.5 3.5 0 0 0 12.5 7.5M15.94 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13M15 4A3.39 3.39 0 0 0 13.07 4.59A5 5 0 0 1 13.07 10.41A3.39 3.39 0 0 0 15 11A3.5 3.5 0 0 0 15 4Z",Rt="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21",wt="M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20Z",Et="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z",Bt="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z",Dt="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z",Ht="M18 14H14V18H10V14H6V10H10V6H14V10H18",Tt="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z",zt="M2,21L23,12L2,3V10L17,12L2,14V21Z";const dt=x({...w(),...be()},"VForm"),$t=R()({name:"VForm",props:dt(),emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,u){let{slots:t,emit:a}=u;const o=Ce(e),n=Y();function d(r){r.preventDefault(),o.reset()}function g(r){const i=r,l=o.validate();i.then=l.then.bind(l),i.catch=l.catch.bind(l),i.finally=l.finally.bind(l),a("submit",i),i.defaultPrevented||l.then(C=>{var V;let{valid:p}=C;p&&((V=n.value)==null||V.submit())}),i.preventDefault()}return M(()=>{var r;return s("form",{ref:n,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:d,onSubmit:g},[(r=t.default)==null?void 0:r.call(t,o)])}),ie(o,n)}}),vt=x({fluid:{type:Boolean,default:!1},...w(),...K()},"VContainer"),Ot=R()({name:"VContainer",props:vt(),setup(e,u){let{slots:t}=u;const{rtlClasses:a}=Je();return M(()=>s(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},a.value,e.class],style:e.style},t)),{}}}),mt=R()({name:"VCardActions",props:w(),setup(e,u){let{slots:t}=u;return et({VBtn:{slim:!0,variant:"text"}}),M(()=>{var a;return s("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),ft=W("v-card-subtitle"),yt=W("v-card-title"),gt=x({appendAvatar:String,appendIcon:F,prependAvatar:String,prependIcon:F,subtitle:[String,Number],title:[String,Number],...w(),...ue()},"VCardItem"),pt=R()({name:"VCardItem",props:gt(),setup(e,u){let{slots:t}=u;return M(()=>{var i;const a=!!(e.prependAvatar||e.prependIcon),o=!!(a||t.prepend),n=!!(e.appendAvatar||e.appendIcon),d=!!(n||t.append),g=!!(e.title!=null||t.title),r=!!(e.subtitle!=null||t.subtitle);return s("div",{class:["v-card-item",e.class],style:e.style},[o&&s("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?s(O,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):s(ne,null,[e.prependAvatar&&s(ee,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&s(te,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),s("div",{class:"v-card-item__content"},[g&&s(yt,{key:"title"},{default:()=>{var l;return[((l=t.title)==null?void 0:l.call(t))??e.title]}}),r&&s(ft,{key:"subtitle"},{default:()=>{var l;return[((l=t.subtitle)==null?void 0:l.call(t))??e.subtitle]}}),(i=t.default)==null?void 0:i.call(t)]),d&&s("div",{key:"append",class:"v-card-item__append"},[t.append?s(O,{key:"append-defaults",disabled:!n,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):s(ne,null,[e.appendIcon&&s(te,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&s(ee,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),bt=W("v-card-text"),Ct=x({appendAvatar:String,appendIcon:F,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:F,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...Ve(),...w(),...ue(),...Ae(),...he(),...Ie(),...Se(),...ke(),...Le(),...Pe(),...K(),...tt(),...xe({variant:"elevated"})},"VCard"),Ft=R()({name:"VCard",directives:{Ripple:Me},props:Ct(),setup(e,u){let{attrs:t,slots:a}=u;const{themeClasses:o}=at(e),{borderClasses:n}=Re(e),{colorClasses:d,colorStyles:g,variantClasses:r}=we(e),{densityClasses:i}=Ee(e),{dimensionStyles:l}=Be(e),{elevationClasses:C}=De(e),{loaderClasses:p}=He(e),{locationStyles:V}=Te(e),{positionClasses:h}=ze(e),{roundedClasses:E}=$e(e),I=Oe(e,t),T=f(()=>e.link!==!1&&I.isLink.value),L=f(()=>!e.disabled&&e.link!==!1&&(e.link||I.isClickable.value));return M(()=>{const z=T.value?"a":e.tag,N=!!(a.title||e.title!=null),_=!!(a.subtitle||e.subtitle!=null),v=N||_,b=!!(a.append||e.appendAvatar||e.appendIcon),c=!!(a.prepend||e.prependAvatar||e.prependIcon),y=!!(a.image||e.image),m=v||c||b,A=!!(a.text||e.text!=null);return nt(s(z,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":L.value},o.value,n.value,d.value,i.value,C.value,p.value,h.value,E.value,r.value,e.class],style:[g.value,l.value,V.value,e.style],href:I.href.value,onClick:L.value&&I.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var S;return[y&&s("div",{key:"image",class:"v-card__image"},[a.image?s(O,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):s(Fe,{key:"image-img",cover:!0,src:e.image},null)]),s(Ze,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),m&&s(pt,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),A&&s(bt,{key:"text"},{default:()=>{var P;return[((P=a.text)==null?void 0:P.call(a))??e.text]}}),(S=a.default)==null?void 0:S.call(a),a.actions&&s(mt,null,{default:a.actions}),Ne(L.value,"v-card")]}}),[[lt("ripple"),L.value&&e.ripple]])}),{}}}),Vt=x({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,..._e({origin:"center center",scrollStrategy:"block",transition:{component:Ue},zIndex:2400})},"VDialog"),Zt=R()({name:"VDialog",props:Vt(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:t}=u;const a=st(e,"modelValue"),{scopeId:o}=je(),n=Y();function d(r){var C,p;const i=r.relatedTarget,l=r.target;if(i!==l&&((C=n.value)!=null&&C.contentEl)&&((p=n.value)!=null&&p.globalTop)&&![document,n.value.contentEl].includes(l)&&!n.value.contentEl.contains(l)){const V=ut(n.value.contentEl);if(!V.length)return;const h=V[0],E=V[V.length-1];i===h?E.focus():h.focus()}}ot&&le(()=>a.value&&e.retainFocus,r=>{r?document.addEventListener("focusin",d):document.removeEventListener("focusin",d)},{immediate:!0}),le(a,async r=>{var i,l;await it(),r?(i=n.value.contentEl)==null||i.focus({preventScroll:!0}):(l=n.value.activatorEl)==null||l.focus({preventScroll:!0})});const g=f(()=>se({"aria-haspopup":"dialog","aria-expanded":String(a.value)},e.activatorProps));return M(()=>{const r=ae.filterProps(e);return s(ae,se({ref:n,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},r,{modelValue:a.value,"onUpdate:modelValue":i=>a.value=i,"aria-modal":"true",activatorProps:g.value,role:"dialog"},o),{activator:t.activator,default:function(){for(var i=arguments.length,l=new Array(i),C=0;C<i;C++)l[C]=arguments[C];return s(O,{root:"VDialog"},{default:()=>{var p;return[(p=t.default)==null?void 0:p.call(t,...l)]}})}})}),ie({},n)}}),At=x({scrollable:Boolean,...w(),...K({tag:"main"})},"VMain"),Nt=R()({name:"VMain",props:At(),setup(e,u){let{slots:t}=u;const{mainStyles:a}=rt(),{ssrBootStyles:o}=qe();return M(()=>s(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[a.value,o.value,e.style]},{default:()=>{var n,d;return[e.scrollable?s("div",{class:"v-main__scroller"},[(n=t.default)==null?void 0:n.call(t)]):(d=t.default)==null?void 0:d.call(t)]}})),{}}});export{Ot as V,Dt as a,$t as b,Lt as c,Ht as d,Ft as e,bt as f,Zt as g,Nt as h,kt as i,xt as j,Tt as k,yt as l,Bt as m,mt as n,zt as o,Et as p,Mt as q,wt as r,Rt as s,Pt as u};