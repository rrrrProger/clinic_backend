import{a6 as Ce,n as M,a7 as Ve,a8 as Ae,c as x,M as ie,o as $,U as he,W as oe,a9 as J,g as ee,e as F,p as Ie,X as ue,q as Se,aa as Le,Y as ke,Z as xe,r as Pe,ab as Me,_ as Re,R as Ee,t as we,$ as Be,a0 as Te,a1 as re,v as De,u as He,a2 as $e,a3 as ze,w as Fe,ac as Oe,x as Ne,L as Ze,a5 as _e,ad as je,ae as Ue,Q as qe,af as te,z as Ke}from"./VOverlay-Bb_EPXnR.js";import{L as Q,V as Z,p as h,a as We,a6 as ce,Q as de,y as Xe,a7 as Qe,a8 as Ye,c as C,E as Ge,r as Y,$ as H,a9 as ae,A as z,aa as Je,g as P,b as i,x as et,z as tt,O,F as ne,s as at,v as nt,M as lt,P as st,u as it,ab as ot,C as le,m as X,ac as ut}from"./index-DX1hjWVC.js";const N=Symbol.for("vuetify:layout"),ve=Symbol.for("vuetify:layout-item"),se=1e3,xt=h({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Pt=h({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function rt(){const e=Q(N);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{layoutIsReady:Z(),getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Mt(e){const l=Q(N);if(!l)throw new Error("[Vuetify] Could not find injected layout");const t=e.id??`layout-item-${We()}`,a=ce("useLayoutItem");de(ve,{id:t});const o=Xe(!1);Qe(()=>o.value=!0),Ye(()=>o.value=!1);const u=Z(),{layoutItemStyles:s,layoutItemScrimStyles:d}=l.register(a,{...e,active:C(()=>o.value?!1:e.active.value),id:t});return Ge(()=>l.unregister(t)),{layoutItemStyles:s,layoutRect:l.layoutRect,layoutItemScrimStyles:d,layoutIsReady:u}}const ct=(e,l,t,a)=>{let o={top:0,left:0,right:0,bottom:0};const u=[{id:"",layer:{...o}}];for(const s of e){const d=l.get(s),r=t.get(s),v=a.get(s);if(!d||!r||!v)continue;const n={...o,[d.value]:parseInt(o[d.value],10)+(v.value?parseInt(r.value,10):0)};u.push({id:s,layer:n}),o=n}return u};function Rt(e){const l=Q(N,null),t=C(()=>l?l.rootZIndex.value-100:se),a=Y([]),o=H(new Map),u=H(new Map),s=H(new Map),d=H(new Map),r=H(new Map),{resizeRef:v,contentRect:n}=Ce(),y=ae(()=>{const f=[...new Set([...s.values()].map(c=>c.value))].sort((c,S)=>c-S),A=[];for(const c of f){const S=a.value.filter(p=>{var L;return((L=s.get(p))==null?void 0:L.value)===c});A.push(...S)}return ct(A,o,u,d)}),V=C(()=>!Array.from(r.values()).some(f=>f.value)),m=C(()=>y.value[y.value.length-1].layer),I=C(()=>({"--v-layout-left":z(m.value.left),"--v-layout-right":z(m.value.right),"--v-layout-top":z(m.value.top),"--v-layout-bottom":z(m.value.bottom),...V.value?void 0:{transition:"none"}})),g=ae(()=>y.value.slice(1).map((f,A)=>{let{id:c}=f;const{layer:S}=y.value[A],p=u.get(c),L=o.get(c);return{id:c,...S,size:Number(p.value),position:L.value}})),b=f=>g.value.find(A=>A.id===f),R=ce("createLayout"),E=Z();de(N,{register:(f,A)=>{let{id:c,order:S,position:p,layoutSize:L,elementSize:w,active:B,disableTransitions:T,absolute:me}=A;s.set(c,S),o.set(c,p),u.set(c,L),d.set(c,B),T&&r.set(c,T);const G=Je(ve,R==null?void 0:R.vnode).indexOf(f);G>-1?a.value.splice(G,0,c):a.value.push(c);const U=C(()=>g.value.findIndex(D=>D.id===c)),q=C(()=>t.value+y.value.length*2-U.value*2),fe=C(()=>{const D=p.value==="left"||p.value==="right",K=p.value==="right",ge=p.value==="bottom",W=w.value??L.value,pe=W===0?"%":"px",be={[p.value]:0,zIndex:q.value,transform:`translate${D?"X":"Y"}(${(B.value?0:-(W===0?100:W))*(K||ge?-1:1)}${pe})`,position:me.value||t.value!==se?"absolute":"fixed",...V.value?void 0:{transition:"none"}};if(U.value<0)throw new Error(`Layout item "${c}" is missing`);const k=g.value[U.value];if(!k)throw new Error(`[Vuetify] Could not find layout item "${c}"`);return{...be,height:D?`calc(100% - ${k.top}px - ${k.bottom}px)`:w.value?`${w.value}px`:void 0,left:K?void 0:`${k.left}px`,right:K?`${k.right}px`:void 0,top:p.value!=="bottom"?`${k.top}px`:void 0,bottom:p.value!=="top"?`${k.bottom}px`:void 0,width:D?w.value?`${w.value}px`:void 0:`calc(100% - ${k.left}px - ${k.right}px)`}}),ye=C(()=>({zIndex:q.value-1}));return{layoutItemStyles:fe,layoutItemScrimStyles:ye,zIndex:q}},unregister:f=>{s.delete(f),o.delete(f),u.delete(f),d.delete(f),r.delete(f),a.value=a.value.filter(A=>A!==f)},mainRect:m,mainStyles:I,getLayoutItem:b,items:g,layoutRect:n,rootZIndex:t,layoutIsReady:E});const _=C(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),j=C(()=>({zIndex:l?t.value:void 0,position:l?"relative":void 0,overflow:l?"hidden":void 0}));return{layoutClasses:_,layoutStyles:j,getLayoutItem:b,items:g,layoutRect:n,layoutIsReady:E,layoutRef:v}}var Et="M16 17V19H2V17S2 13 9 13 16 17 16 17M12.5 7.5A3.5 3.5 0 1 0 9 11A3.5 3.5 0 0 0 12.5 7.5M15.94 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13M15 4A3.39 3.39 0 0 0 13.07 4.59A5 5 0 0 1 13.07 10.41A3.39 3.39 0 0 0 15 11A3.5 3.5 0 0 0 15 4Z",wt="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21",Bt="M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20Z",Tt="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z",Dt="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z",Ht="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z",$t="M18 14H14V18H10V14H6V10H10V6H14V10H18",zt="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z",Ft="M2,21L23,12L2,3V10L17,12L2,14V21Z";const dt=h({...M(),...Ve()},"VForm"),Ot=P()({name:"VForm",props:dt(),emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,l){let{slots:t,emit:a}=l;const o=Ae(e),u=Y();function s(r){r.preventDefault(),o.reset()}function d(r){const v=r,n=o.validate();v.then=n.then.bind(n),v.catch=n.catch.bind(n),v.finally=n.finally.bind(n),a("submit",v),v.defaultPrevented||n.then(y=>{var m;let{valid:V}=y;V&&((m=u.value)==null||m.submit())}),v.preventDefault()}return x(()=>{var r;return i("form",{ref:u,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:s,onSubmit:d},[(r=t.default)==null?void 0:r.call(t,o)])}),ie(o,u)}}),vt=h({fluid:{type:Boolean,default:!1},...M(),...$()},"VContainer"),Nt=P()({name:"VContainer",props:vt(),setup(e,l){let{slots:t}=l;const{rtlClasses:a}=et();return x(()=>i(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},a.value,e.class],style:e.style},t)),{}}}),mt=P()({name:"VCardActions",props:M(),setup(e,l){let{slots:t}=l;return tt({VBtn:{slim:!0,variant:"text"}}),x(()=>{var a;return i("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),ft=h({opacity:[Number,String],...M(),...$()},"VCardSubtitle"),yt=P()({name:"VCardSubtitle",props:ft(),setup(e,l){let{slots:t}=l;return x(()=>i(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),gt=he("v-card-title"),pt=h({appendAvatar:String,appendIcon:O,prependAvatar:String,prependIcon:O,subtitle:[String,Number],title:[String,Number],...M(),...oe()},"VCardItem"),bt=P()({name:"VCardItem",props:pt(),setup(e,l){let{slots:t}=l;return x(()=>{var v;const a=!!(e.prependAvatar||e.prependIcon),o=!!(a||t.prepend),u=!!(e.appendAvatar||e.appendIcon),s=!!(u||t.append),d=!!(e.title!=null||t.title),r=!!(e.subtitle!=null||t.subtitle);return i("div",{class:["v-card-item",e.class],style:e.style},[o&&i("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?i(F,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):i(ne,null,[e.prependAvatar&&i(J,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&i(ee,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),i("div",{class:"v-card-item__content"},[d&&i(gt,{key:"title"},{default:()=>{var n;return[((n=t.title)==null?void 0:n.call(t))??e.title]}}),r&&i(yt,{key:"subtitle"},{default:()=>{var n;return[((n=t.subtitle)==null?void 0:n.call(t))??e.subtitle]}}),(v=t.default)==null?void 0:v.call(t)]),s&&i("div",{key:"append",class:"v-card-item__append"},[t.append?i(F,{key:"append-defaults",disabled:!u,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):i(ne,null,[e.appendIcon&&i(ee,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&i(J,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Ct=h({opacity:[Number,String],...M(),...$()},"VCardText"),Vt=P()({name:"VCardText",props:Ct(),setup(e,l){let{slots:t}=l;return x(()=>i(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),At=h({appendAvatar:String,appendIcon:O,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:O,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...Ie(),...M(),...oe(),...ue(),...Se(),...Le(),...ke(),...xe(),...Pe(),...Me(),...$(),...at(),...Re({variant:"elevated"})},"VCard"),Zt=P()({name:"VCard",directives:{Ripple:Ee},props:At(),setup(e,l){let{attrs:t,slots:a}=l;const{themeClasses:o}=nt(e),{borderClasses:u}=we(e),{colorClasses:s,colorStyles:d,variantClasses:r}=Be(e),{densityClasses:v}=Te(e),{dimensionStyles:n}=re(e),{elevationClasses:y}=De(e),{loaderClasses:V}=He(e),{locationStyles:m}=$e(e),{positionClasses:I}=ze(e),{roundedClasses:g}=Fe(e),b=Oe(e,t),R=C(()=>e.link!==!1&&b.isLink.value),E=C(()=>!e.disabled&&e.link!==!1&&(e.link||b.isClickable.value));return x(()=>{const _=R.value?"a":e.tag,j=!!(a.title||e.title!=null),f=!!(a.subtitle||e.subtitle!=null),A=j||f,c=!!(a.append||e.appendAvatar||e.appendIcon),S=!!(a.prepend||e.prependAvatar||e.prependIcon),p=!!(a.image||e.image),L=A||S||c,w=!!(a.text||e.text!=null);return lt(i(_,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":E.value},o.value,u.value,s.value,v.value,y.value,V.value,I.value,g.value,r.value,e.class],style:[d.value,n.value,m.value,e.style],href:b.href.value,onClick:E.value&&b.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var B;return[p&&i("div",{key:"image",class:"v-card__image"},[a.image?i(F,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):i(Ne,{key:"image-img",cover:!0,src:e.image},null)]),i(Ze,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),L&&i(bt,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),w&&i(Vt,{key:"text"},{default:()=>{var T;return[((T=a.text)==null?void 0:T.call(a))??e.text]}}),(B=a.default)==null?void 0:B.call(a),a.actions&&i(mt,null,{default:a.actions}),_e(E.value,"v-card")]}}),[[st("ripple"),E.value&&e.ripple]])}),{}}}),ht=h({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...je({origin:"center center",scrollStrategy:"block",transition:{component:Ue},zIndex:2400})},"VDialog"),_t=P()({name:"VDialog",props:ht(),emits:{"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,l){let{emit:t,slots:a}=l;const o=it(e,"modelValue"),{scopeId:u}=qe(),s=Y();function d(n){var m,I;const y=n.relatedTarget,V=n.target;if(y!==V&&((m=s.value)!=null&&m.contentEl)&&((I=s.value)!=null&&I.globalTop)&&![document,s.value.contentEl].includes(V)&&!s.value.contentEl.contains(V)){const g=ut(s.value.contentEl);if(!g.length)return;const b=g[0],R=g[g.length-1];y===b?R.focus():b.focus()}}ot&&le(()=>o.value&&e.retainFocus,n=>{n?document.addEventListener("focusin",d):document.removeEventListener("focusin",d)},{immediate:!0});function r(){var n;(n=s.value)!=null&&n.contentEl&&!s.value.contentEl.contains(document.activeElement)&&s.value.contentEl.focus({preventScroll:!0})}function v(){t("afterLeave")}return le(o,async n=>{var y;n||(await Z(),(y=s.value.activatorEl)==null||y.focus({preventScroll:!0}))}),x(()=>{const n=te.filterProps(e),y=X({"aria-haspopup":"dialog","aria-expanded":String(o.value)},e.activatorProps),V=X({tabindex:-1},e.contentProps);return i(te,X({ref:s,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},n,{modelValue:o.value,"onUpdate:modelValue":m=>o.value=m,"aria-modal":"true",activatorProps:y,contentProps:V,role:"dialog",onAfterEnter:r,onAfterLeave:v},u),{activator:a.activator,default:function(){for(var m=arguments.length,I=new Array(m),g=0;g<m;g++)I[g]=arguments[g];return i(F,{root:"VDialog"},{default:()=>{var b;return[(b=a.default)==null?void 0:b.call(a,...I)]}})}})}),ie({},s)}}),It=h({scrollable:Boolean,...M(),...ue(),...$({tag:"main"})},"VMain"),jt=P()({name:"VMain",props:It(),setup(e,l){let{slots:t}=l;const{dimensionStyles:a}=re(e),{mainStyles:o,layoutIsReady:u}=rt(),{ssrBootStyles:s}=Ke();return x(()=>i(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[o.value,s.value,a.value,e.style]},{default:()=>{var d,r;return[e.scrollable?i("div",{class:"v-main__scroller"},[(d=t.default)==null?void 0:d.call(t)]):(r=t.default)==null?void 0:r.call(t)]}})),u}});export{Nt as V,Ht as a,Ot as b,Pt as c,$t as d,Zt as e,Vt as f,_t as g,jt as h,xt as i,Rt as j,zt as k,gt as l,Dt as m,mt as n,Ft as o,Tt as p,Et as q,Bt as r,wt as s,Mt as u};
