import{ai as oe,aD as d,cs as Ct,ae as St,bA as B,A as Se,b1 as Tt,aZ as ae,bS as Rt,a8 as _t,b8 as $t,F as Ae,b as zt,bB as Pt,N as kt,aO as Wt,a1 as q,be as At,C as r,G as l,z as S,D as $,H as Bt,au as de,bM as Te,k as ce,cg as Et,cx as Be,bY as Lt,cm as jt,cD as be,ba as te,bl as It,bk as Mt,cE as Ht,cy as Ot,cf as Re,aj as Dt,a9 as I,aA as Z,cG as Ft,cB as Nt,j as Vt,Q as Ut,bu as Gt,c6 as M,J as ee,cd as Xt,ch as qt,bo as N,a6 as re,bb as Ee,cb as A,cz as Kt,cj as Yt,cv as Le,cp as Jt,a4 as ve,cq as Qt,ad as Zt,cF as _e,bD as ea,cI as ta,ac as aa,b$ as ra,a5 as na,by as oa}from"./index-LI1pC_fU.js";import{_ as ia}from"./Dropdown-CD2ek-Q1.js";import"./UserAvatar-DHXSTyUT.js";import{_ as sa}from"./_plugin-vue_export-helper-DlAUqK2U.js";const la=Se(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[Se("&::-webkit-scrollbar",{width:0,height:0})]),da=oe({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=B(null);function o(n){!(n.currentTarget.offsetWidth<n.currentTarget.scrollWidth)||n.deltaY===0||(n.currentTarget.scrollLeft+=n.deltaY+n.deltaX,n.preventDefault())}const i=Ct();return la.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:St,ssr:i}),Object.assign({selfRef:e,handleWheel:o},{scrollTo(...n){var p;(p=e.value)===null||p===void 0||p.scrollTo(...n)}})},render(){return d("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var ca=/\s/;function ba(e){for(var o=e.length;o--&&ca.test(e.charAt(o)););return o}var fa=/^\s+/;function ua(e){return e&&e.slice(0,ba(e)+1).replace(fa,"")}var $e=NaN,pa=/^[-+]0x[0-9a-f]+$/i,va=/^0b[01]+$/i,ha=/^0o[0-7]+$/i,ga=parseInt;function ze(e){if(typeof e=="number")return e;if(Tt(e))return $e;if(ae(e)){var o=typeof e.valueOf=="function"?e.valueOf():e;e=ae(o)?o+"":o}if(typeof e!="string")return e===0?e:+e;e=ua(e);var i=va.test(e);return i||ha.test(e)?ga(e.slice(2),i?2:8):pa.test(e)?$e:+e}var fe=function(){return Rt.Date.now()},ma="Expected a function",xa=Math.max,ya=Math.min;function wa(e,o,i){var c,n,p,v,u,m,g=0,h=!1,w=!1,T=!0;if(typeof e!="function")throw new TypeError(ma);o=ze(o)||0,ae(i)&&(h=!!i.leading,w="maxWait"in i,p=w?xa(ze(i.maxWait)||0,o):p,T="trailing"in i?!!i.trailing:T);function x(b){var W=c,D=n;return c=n=void 0,g=b,v=e.apply(D,W),v}function C(b){return g=b,u=setTimeout(k,o),h?x(b):v}function _(b){var W=b-m,D=b-g,F=o-W;return w?ya(F,p-D):F}function P(b){var W=b-m,D=b-g;return m===void 0||W>=o||W<0||w&&D>=p}function k(){var b=fe();if(P(b))return z(b);u=setTimeout(k,_(b))}function z(b){return u=void 0,T&&c?x(b):(c=n=void 0,v)}function H(){u!==void 0&&clearTimeout(u),g=0,c=m=n=u=void 0}function j(){return u===void 0?v:z(fe())}function y(){var b=fe(),W=P(b);if(c=arguments,n=this,m=b,W){if(u===void 0)return C(m);if(w)return clearTimeout(u),u=setTimeout(k,o),x(m)}return u===void 0&&(u=setTimeout(k,o)),v}return y.cancel=H,y.flush=j,y}var Ca="Expected a function";function Sa(e,o,i){var c=!0,n=!0;if(typeof e!="function")throw new TypeError(Ca);return ae(i)&&(c="leading"in i?!!i.leading:c,n="trailing"in i?!!i.trailing:n),wa(e,o,{leading:c,maxWait:o,trailing:n})}const Ta=oe({name:"Add",render(){return d("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),je=_t("n-tabs"),Ra={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},_a=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},At(Ra,["displayDirective"])),ne=oe({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:_a,setup(e){const{mergedClsPrefixRef:o,valueRef:i,typeRef:c,closableRef:n,tabStyleRef:p,addTabStyleRef:v,tabClassRef:u,addTabClassRef:m,tabChangeIdRef:g,onBeforeLeaveRef:h,triggerRef:w,handleAdd:T,activateTab:x,handleClose:C}=Wt(je);return{trigger:w,mergedClosable:q(()=>{if(e.internalAddable)return!1;const{closable:_}=e;return _===void 0?n.value:_}),style:p,addStyle:v,tabClass:u,addTabClass:m,clsPrefix:o,value:i,type:c,handleClose(_){_.stopPropagation(),!e.disabled&&C(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){T();return}const{name:_}=e,P=++g.id;if(_!==i.value){const{value:k}=h;k?Promise.resolve(k(e.name,i.value)).then(z=>{z&&g.id===P&&x(_)}):x(_)}}}},render(){const{internalAddable:e,clsPrefix:o,name:i,disabled:c,label:n,tab:p,value:v,mergedClosable:u,trigger:m,$slots:{default:g}}=this,h=n??p;return d("div",{class:`${o}-tabs-tab-wrapper`},this.internalLeftPadded?d("div",{class:`${o}-tabs-tab-pad`}):null,d("div",Object.assign({key:i,"data-name":i,"data-disabled":c?!0:void 0},$t({class:[`${o}-tabs-tab`,v===i&&`${o}-tabs-tab--active`,c&&`${o}-tabs-tab--disabled`,u&&`${o}-tabs-tab--closable`,e&&`${o}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:m==="click"?this.activateTab:void 0,onMouseenter:m==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),d("span",{class:`${o}-tabs-tab__label`},e?d(Ae,null,d("div",{class:`${o}-tabs-tab__height-placeholder`}," "),d(zt,{clsPrefix:o},{default:()=>d(Ta,null)})):g?g():typeof h=="object"?h:Pt(h??i)),u&&this.type==="card"?d(kt,{clsPrefix:o,class:`${o}-tabs-tab__close`,onClick:this.handleClose,disabled:c}):null))}}),$a=r("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[l("segment-type",[r("tabs-rail",[S("&.transition-disabled",[r("tabs-capsule",`
 transition: none;
 `)])])]),l("top",[r("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),l("left",[r("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),l("left, right",`
 flex-direction: row;
 `,[r("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),r("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),l("right",`
 flex-direction: row-reverse;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),r("tabs-bar",`
 left: 0;
 `)]),l("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),r("tabs-bar",`
 top: 0;
 `)]),r("tabs-rail",`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[r("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),r("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[r("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[l("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),S("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),l("flex",[r("tabs-nav",`
 width: 100%;
 position: relative;
 `,[r("tabs-wrapper",`
 width: 100%;
 `,[r("tabs-tab",`
 margin-right: 0;
 `)])])]),r("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[$("prefix, suffix",`
 display: flex;
 align-items: center;
 `),$("prefix","padding-right: 16px;"),$("suffix","padding-left: 16px;")]),l("top, bottom",[S(">",[r("tabs-nav",[r("tabs-nav-scroll-wrapper",[S("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),S("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),l("shadow-start",[S("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),l("shadow-end",[S("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),l("left, right",[r("tabs-nav-scroll-content",`
 flex-direction: column;
 `),S(">",[r("tabs-nav",[r("tabs-nav-scroll-wrapper",[S("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),S("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),l("shadow-start",[S("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),l("shadow-end",[S("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),r("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[r("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[S("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `)]),S("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),r("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),r("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),r("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),r("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[l("disabled",{cursor:"not-allowed"}),$("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),$("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),r("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[S("&.transition-disabled",`
 transition: none;
 `),l("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),r("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),r("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[S("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),S("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),S("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),S("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),S("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),r("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),l("line-type, bar-type",[r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[S("&:hover",{color:"var(--n-tab-text-color-hover)"}),l("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),l("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),r("tabs-nav",[l("line-type",[l("top",[$("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 bottom: -1px;
 `)]),l("left",[$("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 right: -1px;
 `)]),l("right",[$("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 left: -1px;
 `)]),l("bottom",[$("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 top: -1px;
 `)]),$("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-bar",`
 border-radius: 0;
 `)]),l("card-type",[$("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[l("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[$("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),Bt("disabled",[S("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),l("closable","padding-right: 8px;"),l("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),l("disabled","color: var(--n-tab-text-color-disabled);")])]),l("left, right",`
 flex-direction: column; 
 `,[$("prefix, suffix",`
 padding: var(--n-tab-padding-vertical);
 `),r("tabs-wrapper",`
 flex-direction: column;
 `),r("tabs-tab-wrapper",`
 flex-direction: column;
 `,[r("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),l("top",[l("card-type",[r("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);"),$("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[l("active",`
 border-bottom: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),l("left",[l("card-type",[r("tabs-scroll-padding","border-right: 1px solid var(--n-tab-border-color);"),$("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[l("active",`
 border-right: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),l("right",[l("card-type",[r("tabs-scroll-padding","border-left: 1px solid var(--n-tab-border-color);"),$("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[l("active",`
 border-left: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),l("bottom",[l("card-type",[r("tabs-scroll-padding","border-top: 1px solid var(--n-tab-border-color);"),$("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[l("active",`
 border-top: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),ue=Sa,za=Object.assign(Object.assign({},Be.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),Pa=oe({name:"Tabs",props:za,slots:Object,setup(e,{slots:o}){var i,c,n,p;const{mergedClsPrefixRef:v,inlineThemeDisabled:u,mergedComponentPropsRef:m}=Et(e),g=Be("Tabs","-tabs",$a,Lt,e,v),h=B(null),w=B(null),T=B(null),x=B(null),C=B(null),_=B(null),P=B(!0),k=B(!0),z=Re(e,["labelSize","size"]),H=q(()=>{var t,a;if(z.value)return z.value;const s=(a=(t=m?.value)===null||t===void 0?void 0:t.Tabs)===null||a===void 0?void 0:a.size;return s||"medium"}),j=Re(e,["activeName","value"]),y=B((c=(i=j.value)!==null&&i!==void 0?i:e.defaultValue)!==null&&c!==void 0?c:o.default?(p=(n=de(o.default())[0])===null||n===void 0?void 0:n.props)===null||p===void 0?void 0:p.name:null),b=jt(j,y),W={id:0},D=q(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});be(b,()=>{W.id=0,Y(),ge()});function F(){var t;const{value:a}=b;return a===null?null:(t=h.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function Ie(t){if(e.type==="card")return;const{value:a}=w;if(!a)return;const s=a.style.opacity==="0";if(t){const f=`${v.value}-tabs-bar--disabled`,{barWidth:R,placement:E}=e;if(t.dataset.disabled==="true"?a.classList.add(f):a.classList.remove(f),["top","bottom"].includes(E)){if(he(["top","maxHeight","height"]),typeof R=="number"&&t.offsetWidth>=R){const L=Math.floor((t.offsetWidth-R)/2)+t.offsetLeft;a.style.left=`${L}px`,a.style.maxWidth=`${R}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",s&&(a.style.transition="none"),a.offsetWidth,s&&(a.style.transition="",a.style.opacity="1")}else{if(he(["left","maxWidth","width"]),typeof R=="number"&&t.offsetHeight>=R){const L=Math.floor((t.offsetHeight-R)/2)+t.offsetTop;a.style.top=`${L}px`,a.style.maxHeight=`${R}px`}else a.style.top=`${t.offsetTop}px`,a.style.maxHeight=`${t.offsetHeight}px`;a.style.height="8192px",s&&(a.style.transition="none"),a.offsetHeight,s&&(a.style.transition="",a.style.opacity="1")}}}function Me(){if(e.type==="card")return;const{value:t}=w;t&&(t.style.opacity="0")}function he(t){const{value:a}=w;if(a)for(const s of t)a.style[s]=""}function Y(){if(e.type==="card")return;const t=F();t?Ie(t):Me()}function ge(){var t;const a=(t=C.value)===null||t===void 0?void 0:t.$el;if(!a)return;const s=F();if(!s)return;const{scrollLeft:f,offsetWidth:R}=a,{offsetLeft:E,offsetWidth:L}=s;f>E?a.scrollTo({top:0,left:E,behavior:"smooth"}):E+L>f+R&&a.scrollTo({top:0,left:E+L-R,behavior:"smooth"})}const J=B(null);let ie=0,O=null;function He(t){const a=J.value;if(a){ie=t.getBoundingClientRect().height;const s=`${ie}px`,f=()=>{a.style.height=s,a.style.maxHeight=s};O?(f(),O(),O=null):O=f}}function Oe(t){const a=J.value;if(a){const s=t.getBoundingClientRect().height,f=()=>{document.body.offsetHeight,a.style.maxHeight=`${s}px`,a.style.height=`${Math.max(ie,s)}px`};O?(O(),O=null,f()):O=f}}function De(){const t=J.value;if(t){t.style.maxHeight="",t.style.height="";const{paneWrapperStyle:a}=e;if(typeof a=="string")t.style.cssText=a;else if(a){const{maxHeight:s,height:f}=a;s!==void 0&&(t.style.maxHeight=s),f!==void 0&&(t.style.height=f)}}}const me={value:[]},xe=B("next");function Fe(t){const a=b.value;let s="next";for(const f of me.value){if(f===a)break;if(f===t){s="prev";break}}xe.value=s,Ne(t)}function Ne(t){const{onActiveNameChange:a,onUpdateValue:s,"onUpdate:value":f}=e;a&&ee(a,t),s&&ee(s,t),f&&ee(f,t),y.value=t}function Ve(t){const{onClose:a}=e;a&&ee(a,t)}function ye(){const{value:t}=w;if(!t)return;const a="transition-disabled";t.classList.add(a),Y(),t.classList.remove(a)}const V=B(null);function se({transitionDisabled:t}){const a=h.value;if(!a)return;t&&a.classList.add("transition-disabled");const s=F();s&&V.value&&(V.value.style.width=`${s.offsetWidth}px`,V.value.style.height=`${s.offsetHeight}px`,V.value.style.transform=`translateX(${s.offsetLeft-Dt(getComputedStyle(a).paddingLeft)}px)`,t&&V.value.offsetWidth),t&&a.classList.remove("transition-disabled")}be([b],()=>{e.type==="segment"&&te(()=>{se({transitionDisabled:!1})})}),It(()=>{e.type==="segment"&&se({transitionDisabled:!0})});let we=0;function Ue(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||we===t.contentRect.width)return;we=t.contentRect.width;const{type:s}=e;if((s==="line"||s==="bar")&&ye(),s!=="segment"){const{placement:f}=e;le((f==="top"||f==="bottom"?(a=C.value)===null||a===void 0?void 0:a.$el:_.value)||null)}}const Ge=ue(Ue,64);be([()=>e.justifyContent,()=>e.size],()=>{te(()=>{const{type:t}=e;(t==="line"||t==="bar")&&ye()})});const U=B(!1);function Xe(t){var a;const{target:s,contentRect:{width:f,height:R}}=t,E=s.parentElement.parentElement.offsetWidth,L=s.parentElement.parentElement.offsetHeight,{placement:X}=e;if(!U.value)X==="top"||X==="bottom"?E<f&&(U.value=!0):L<R&&(U.value=!0);else{const{value:K}=x;if(!K)return;X==="top"||X==="bottom"?E-f>K.$el.offsetWidth&&(U.value=!1):L-R>K.$el.offsetHeight&&(U.value=!1)}le(((a=C.value)===null||a===void 0?void 0:a.$el)||null)}const qe=ue(Xe,64);function Ke(){const{onAdd:t}=e;t&&t(),te(()=>{const a=F(),{value:s}=C;!a||!s||s.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function le(t){if(!t)return;const{placement:a}=e;if(a==="top"||a==="bottom"){const{scrollLeft:s,scrollWidth:f,offsetWidth:R}=t;P.value=s<=0,k.value=s+R>=f}else{const{scrollTop:s,scrollHeight:f,offsetHeight:R}=t;P.value=s<=0,k.value=s+R>=f}}const Ye=ue(t=>{le(t.target)},64);Gt(je,{triggerRef:M(e,"trigger"),tabStyleRef:M(e,"tabStyle"),tabClassRef:M(e,"tabClass"),addTabStyleRef:M(e,"addTabStyle"),addTabClassRef:M(e,"addTabClass"),paneClassRef:M(e,"paneClass"),paneStyleRef:M(e,"paneStyle"),mergedClsPrefixRef:v,typeRef:M(e,"type"),closableRef:M(e,"closable"),valueRef:b,tabChangeIdRef:W,onBeforeLeaveRef:M(e,"onBeforeLeave"),activateTab:Fe,handleClose:Ve,handleAdd:Ke}),Mt(()=>{Y(),ge()}),Ht(()=>{const{value:t}=T;if(!t)return;const{value:a}=v,s=`${a}-tabs-nav-scroll-wrapper--shadow-start`,f=`${a}-tabs-nav-scroll-wrapper--shadow-end`;P.value?t.classList.remove(s):t.classList.add(s),k.value?t.classList.remove(f):t.classList.add(f)});const Je={syncBarPosition:()=>{Y()}},Qe=()=>{se({transitionDisabled:!0})},Ce=q(()=>{const{value:t}=H,{type:a}=e,s={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],f=`${t}${s}`,{self:{barColor:R,closeIconColor:E,closeIconColorHover:L,closeIconColorPressed:X,tabColor:K,tabBorderColor:Ze,paneTextColor:et,tabFontWeight:tt,tabBorderRadius:at,tabFontWeightActive:rt,colorSegment:nt,fontWeightStrong:ot,tabColorSegment:it,closeSize:st,closeIconSize:lt,closeColorHover:dt,closeColorPressed:ct,closeBorderRadius:bt,[I("panePadding",t)]:Q,[I("tabPadding",f)]:ft,[I("tabPaddingVertical",f)]:ut,[I("tabGap",f)]:pt,[I("tabGap",`${f}Vertical`)]:vt,[I("tabTextColor",a)]:ht,[I("tabTextColorActive",a)]:gt,[I("tabTextColorHover",a)]:mt,[I("tabTextColorDisabled",a)]:xt,[I("tabFontSize",t)]:yt},common:{cubicBezierEaseInOut:wt}}=g.value;return{"--n-bezier":wt,"--n-color-segment":nt,"--n-bar-color":R,"--n-tab-font-size":yt,"--n-tab-text-color":ht,"--n-tab-text-color-active":gt,"--n-tab-text-color-disabled":xt,"--n-tab-text-color-hover":mt,"--n-pane-text-color":et,"--n-tab-border-color":Ze,"--n-tab-border-radius":at,"--n-close-size":st,"--n-close-icon-size":lt,"--n-close-color-hover":dt,"--n-close-color-pressed":ct,"--n-close-border-radius":bt,"--n-close-icon-color":E,"--n-close-icon-color-hover":L,"--n-close-icon-color-pressed":X,"--n-tab-color":K,"--n-tab-font-weight":tt,"--n-tab-font-weight-active":rt,"--n-tab-padding":ft,"--n-tab-padding-vertical":ut,"--n-tab-gap":pt,"--n-tab-gap-vertical":vt,"--n-pane-padding-left":Z(Q,"left"),"--n-pane-padding-right":Z(Q,"right"),"--n-pane-padding-top":Z(Q,"top"),"--n-pane-padding-bottom":Z(Q,"bottom"),"--n-font-weight-strong":ot,"--n-tab-color-segment":it}}),G=u?Ot("tabs",q(()=>`${H.value[0]}${e.type[0]}`),Ce,e):void 0;return Object.assign({mergedClsPrefix:v,mergedValue:b,renderedNames:new Set,segmentCapsuleElRef:V,tabsPaneWrapperRef:J,tabsElRef:h,barElRef:w,addTabInstRef:x,xScrollInstRef:C,scrollWrapperElRef:T,addTabFixed:U,tabWrapperStyle:D,handleNavResize:Ge,mergedSize:H,handleScroll:Ye,handleTabsResize:qe,cssVars:u?void 0:Ce,themeClass:G?.themeClass,animationDirection:xe,renderNameListRef:me,yScrollElRef:_,handleSegmentResize:Qe,onAnimationBeforeLeave:He,onAnimationEnter:Oe,onAnimationAfterEnter:De,onRender:G?.onRender},Je)},render(){const{mergedClsPrefix:e,type:o,placement:i,addTabFixed:c,addable:n,mergedSize:p,renderNameListRef:v,onRender:u,paneWrapperClass:m,paneWrapperStyle:g,$slots:{default:h,prefix:w,suffix:T}}=this;u?.();const x=h?de(h()).filter(y=>y.type.__TAB_PANE__===!0):[],C=h?de(h()).filter(y=>y.type.__TAB__===!0):[],_=!C.length,P=o==="card",k=o==="segment",z=!P&&!k&&this.justifyContent;v.value=[];const H=()=>{const y=d("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},z?null:d("div",{class:`${e}-tabs-scroll-padding`,style:i==="top"||i==="bottom"?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),_?x.map((b,W)=>(v.value.push(b.props.name),pe(d(ne,Object.assign({},b.props,{internalCreatedByPane:!0,internalLeftPadded:W!==0&&(!z||z==="center"||z==="start"||z==="end")}),b.children?{default:b.children.tab}:void 0)))):C.map((b,W)=>(v.value.push(b.props.name),pe(W!==0&&!z?We(b):b))),!c&&n&&P?ke(n,(_?x.length:C.length)!==0):null,z?null:d("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return d("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},P&&n?d(ce,{onResize:this.handleTabsResize},{default:()=>y}):y,P?d("div",{class:`${e}-tabs-pad`}):null,P?null:d("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},j=k?"top":i;return d("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${o}-type`,`${e}-tabs--${p}-size`,z&&`${e}-tabs--flex`,`${e}-tabs--${j}`],style:this.cssVars},d("div",{class:[`${e}-tabs-nav--${o}-type`,`${e}-tabs-nav--${j}`,`${e}-tabs-nav`]},Te(w,y=>y&&d("div",{class:`${e}-tabs-nav__prefix`},y)),k?d(ce,{onResize:this.handleSegmentResize},{default:()=>d("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},d("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},d("div",{class:`${e}-tabs-wrapper`},d("div",{class:`${e}-tabs-tab`}))),_?x.map((y,b)=>(v.value.push(y.props.name),d(ne,Object.assign({},y.props,{internalCreatedByPane:!0,internalLeftPadded:b!==0}),y.children?{default:y.children.tab}:void 0))):C.map((y,b)=>(v.value.push(y.props.name),b===0?y:We(y))))}):d(ce,{onResize:this.handleNavResize},{default:()=>d("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(j)?d(da,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:H}):d("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},H()))}),c&&n&&P?ke(n,!0):null,Te(T,y=>y&&d("div",{class:`${e}-tabs-nav__suffix`},y))),_&&(this.animated&&(j==="top"||j==="bottom")?d("div",{ref:"tabsPaneWrapperRef",style:g,class:[`${e}-tabs-pane-wrapper`,m]},Pe(x,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Pe(x,this.mergedValue,this.renderedNames)))}});function Pe(e,o,i,c,n,p,v){const u=[];return e.forEach(m=>{const{name:g,displayDirective:h,"display-directive":w}=m.props,T=C=>h===C||w===C,x=o===g;if(m.key!==void 0&&(m.key=g),x||T("show")||T("show:lazy")&&i.has(g)){i.has(g)||i.add(g);const C=!T("if");u.push(C?Ft(m,[[Nt,x]]):m)}}),v?d(Vt,{name:`${v}-transition`,onBeforeLeave:c,onEnter:n,onAfterEnter:p},{default:()=>u}):u}function ke(e,o){return d(ne,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:o,disabled:typeof e=="object"&&e.disabled})}function We(e){const o=Ut(e);return o.props?o.props.internalLeftPadded=!0:o.props={internalLeftPadded:!0},o}function pe(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const Ia={__name:"ToggleTheme",setup(e){const o=Xt(),i=qt();async function c({clientX:n,clientY:p}){function v(){o.toggleDark(),Kt(i)()}if(!document.startViewTransition)return v();const u=[`circle(0px at ${n}px ${p}px)`,`circle(${Math.hypot(Math.max(n,window.innerWidth-n),Math.max(p,window.innerHeight-p))}px at ${n}px ${p}px)`];await document.startViewTransition(v).ready,document.documentElement.animate({clipPath:i.value?u.reverse():u},{duration:500,easing:"ease-in",pseudoElement:`::view-transition-${i.value?"old":"new"}(root)`})}return(n,p)=>(N(),re("i",{id:"toggleTheme",class:Ee(["mr-16 cursor-pointer",A(i)?"i-fe:moon":"i-fe:sun"]),onClick:c},null,2))}},Ma={__name:"Fullscreen",setup(e){const{isFullscreen:o,toggle:i}=Yt();return(c,n)=>(N(),re("i",{id:"fullscreen",class:Ee(["mr-16 cursor-pointer",A(o)?"i-fe:minimize":"i-fe:maximize"]),onClick:n[0]||(n[0]=(...p)=>A(i)&&A(i)(...p))},null,2))}},ka={__name:"ContextMenu",props:{show:{type:Boolean,default:!1},currentPath:{type:String,default:""},x:{type:Number,default:0},y:{type:Number,default:0}},emits:["update:show"],setup(e,{emit:o}){const i=e,c=o,n=Le(),p=q(()=>[{label:"Reload",key:"reload",disabled:i.currentPath!==n.activeTab,icon:()=>d("i",{class:"i-mdi:refresh text-14"})},{label:"Close",key:"close",disabled:n.tabs.length<=1,icon:()=>d("i",{class:"i-mdi:close text-14"})},{label:"Close Others",key:"close-other",disabled:n.tabs.length<=1,icon:()=>d("i",{class:"i-mdi:arrow-expand-horizontal text-14"})},{label:"Close Left",key:"close-left",disabled:n.tabs.length<=1||i.currentPath===n.tabs[0].path,icon:()=>d("i",{class:"i-mdi:arrow-expand-left text-14"})},{label:"Close Right",key:"close-right",disabled:n.tabs.length<=1||i.currentPath===n.tabs[n.tabs.length-1].path,icon:()=>d("i",{class:"i-mdi:arrow-expand-right text-14"})}]),v=Jt(),u=new Map([["reload",()=>{n.reloadTab(v.fullPath,v.meta?.keepAlive)}],["close",()=>{n.removeTab(i.currentPath)}],["close-other",()=>{n.removeOther(i.currentPath)}],["close-left",()=>{n.removeLeft(i.currentPath)}],["close-right",()=>{n.removeRight(i.currentPath)}]]);function m(){c("update:show",!1)}function g(h){const w=u.get(h);typeof w=="function"&&w(),m()}return(h,w)=>{const T=ia;return N(),ve(T,{show:e.show,options:A(p),x:e.x,y:e.y,placement:"bottom-start",onClickoutside:m,onSelect:g},null,8,["show","options","x","y"])}}},Wa={id:"top-tab"},Aa={__name:"index",setup(e){const o=Qt(),i=Le(),c=oa({show:!1,x:0,y:0,currentPath:""});function n(g){i.setActiveTab(g),o.push(g)}function p(){c.show=!0}function v(){c.show=!1}function u(g,h,w){Object.assign(c,{x:g,y:h,currentPath:w})}async function m(g,h){const{clientX:w,clientY:T}=g;v(),u(w,T,h.path),await te(),p()}return(g,h)=>{const w=ne,T=Pa;return N(),re("div",Wa,[Zt(T,{value:A(i).activeTab,closable:A(i).tabs.length>1,type:"card",onClose:h[0]||(h[0]=x=>A(i).removeTab(x))},{default:_e(()=>[(N(!0),re(Ae,null,ea(A(i).tabs,x=>(N(),ve(w,{key:x.path,name:x.path,onClick:C=>n(x.path),onContextmenu:ta(C=>m(C,x),["prevent"])},{default:_e(()=>[aa(ra(x.title),1)]),_:2},1032,["name","onClick","onContextmenu"]))),128))]),_:1},8,["value","closable"]),A(c).show?(N(),ve(ka,{key:0,show:A(c).show,"onUpdate:show":h[1]||(h[1]=x=>A(c).show=x),"current-path":A(c).currentPath,x:A(c).x,y:A(c).y},null,8,["show","current-path","x","y"])):na("",!0)])}}},Ha=sa(Aa,[["__scopeId","data-v-d607c7a4"]]);export{Ha as A,Ia as _,Ma as a};
