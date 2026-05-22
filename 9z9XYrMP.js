import{al as K,aJ as c,cF as ht,ag as gt,bI as E,A as ye,b6 as xt,b3 as ee,b_ as mt,a9 as yt,aU as Pe,c6 as wt,be as St,F as Ct,c as Rt,bJ as Tt,N as zt,a2 as G,bl as $t,D as r,H as i,z as g,G as z,J as Pt,aA as ne,bU as we,n as oe,cs as _t,cK as _e,c5 as Wt,cz as At,cQ as ie,bh as se,bs as Et,br as Lt,cR as Bt,cL as kt,cr as Se,an as jt,aa as j,aG as Q,cT as It,cO as Ht,m as Ot,R as Ft,bC as Mt,cf as I,K as Z}from"./9ge5YqQ_.js";const Dt=ye(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[ye("&::-webkit-scrollbar",{width:0,height:0})]),Nt=K({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=E(null);function n(b){!(b.currentTarget.offsetWidth<b.currentTarget.scrollWidth)||b.deltaY===0||(b.currentTarget.scrollLeft+=b.deltaY+b.deltaX,b.preventDefault())}const l=ht();return Dt.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:gt,ssr:l}),Object.assign({selfRef:e,handleWheel:n},{scrollTo(...b){var x;(x=e.value)===null||x===void 0||x.scrollTo(...b)}})},render(){return c("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var Vt=/\s/;function Ut(e){for(var n=e.length;n--&&Vt.test(e.charAt(n)););return n}var Xt=/^\s+/;function Gt(e){return e&&e.slice(0,Ut(e)+1).replace(Xt,"")}var Ce=NaN,Kt=/^[-+]0x[0-9a-f]+$/i,Jt=/^0b[01]+$/i,Yt=/^0o[0-7]+$/i,qt=parseInt;function Re(e){if(typeof e=="number")return e;if(xt(e))return Ce;if(ee(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=ee(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Gt(e);var l=Jt.test(e);return l||Yt.test(e)?qt(e.slice(2),l?2:8):Kt.test(e)?Ce:+e}var le=function(){return mt.Date.now()},Qt="Expected a function",Zt=Math.max,ea=Math.min;function ta(e,n,l){var u,b,x,v,f,h,m=0,y=!1,T=!1,A=!0;if(typeof e!="function")throw new TypeError(Qt);n=Re(n)||0,ee(l)&&(y=!!l.leading,T="maxWait"in l,x=T?Zt(Re(l.maxWait)||0,n):x,A="trailing"in l?!!l.trailing:A);function C(s){var W=u,F=b;return u=b=void 0,m=s,v=e.apply(F,W),v}function S(s){return m=s,f=setTimeout(_,n),y?C(s):v}function R(s){var W=s-h,F=s-m,M=n-W;return T?ea(M,x-F):M}function P(s){var W=s-h,F=s-m;return h===void 0||W>=n||W<0||T&&F>=x}function _(){var s=le();if(P(s))return $(s);f=setTimeout(_,R(s))}function $(s){return f=void 0,A&&u?C(s):(u=b=void 0,v)}function H(){f!==void 0&&clearTimeout(f),m=0,u=h=b=f=void 0}function k(){return f===void 0?v:$(le())}function p(){var s=le(),W=P(s);if(u=arguments,b=this,h=s,W){if(f===void 0)return S(h);if(T)return clearTimeout(f),f=setTimeout(_,n),C(h)}return f===void 0&&(f=setTimeout(_,n)),v}return p.cancel=H,p.flush=k,p}var aa="Expected a function";function ra(e,n,l){var u=!0,b=!0;if(typeof e!="function")throw new TypeError(aa);return ee(l)&&(u="leading"in l?!!l.leading:u,b="trailing"in l?!!l.trailing:b),ta(e,n,{leading:u,maxWait:n,trailing:b})}const na=K({name:"Add",render(){return c("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),fe=yt("n-tabs"),We={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},da=K({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:We,slots:Object,setup(e){const n=Pe(fe,null);return n||wt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:n.paneStyleRef,class:n.paneClassRef,mergedClsPrefix:n.mergedClsPrefixRef}},render(){return c("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),oa=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},$t(We,["displayDirective"])),be=K({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:oa,setup(e){const{mergedClsPrefixRef:n,valueRef:l,typeRef:u,closableRef:b,tabStyleRef:x,addTabStyleRef:v,tabClassRef:f,addTabClassRef:h,tabChangeIdRef:m,onBeforeLeaveRef:y,triggerRef:T,handleAdd:A,activateTab:C,handleClose:S}=Pe(fe);return{trigger:T,mergedClosable:G(()=>{if(e.internalAddable)return!1;const{closable:R}=e;return R===void 0?b.value:R}),style:x,addStyle:v,tabClass:f,addTabClass:h,clsPrefix:n,value:l,type:u,handleClose(R){R.stopPropagation(),!e.disabled&&S(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){A();return}const{name:R}=e,P=++m.id;if(R!==l.value){const{value:_}=y;_?Promise.resolve(_(e.name,l.value)).then($=>{$&&m.id===P&&C(R)}):C(R)}}}},render(){const{internalAddable:e,clsPrefix:n,name:l,disabled:u,label:b,tab:x,value:v,mergedClosable:f,trigger:h,$slots:{default:m}}=this,y=b??x;return c("div",{class:`${n}-tabs-tab-wrapper`},this.internalLeftPadded?c("div",{class:`${n}-tabs-tab-pad`}):null,c("div",Object.assign({key:l,"data-name":l,"data-disabled":u?!0:void 0},St({class:[`${n}-tabs-tab`,v===l&&`${n}-tabs-tab--active`,u&&`${n}-tabs-tab--disabled`,f&&`${n}-tabs-tab--closable`,e&&`${n}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:h==="click"?this.activateTab:void 0,onMouseenter:h==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),c("span",{class:`${n}-tabs-tab__label`},e?c(Ct,null,c("div",{class:`${n}-tabs-tab__height-placeholder`}," "),c(Rt,{clsPrefix:n},{default:()=>c(na,null)})):m?m():typeof y=="object"?y:Tt(y??l)),f&&this.type==="card"?c(zt,{clsPrefix:n,class:`${n}-tabs-tab__close`,onClick:this.handleClose,disabled:u}):null))}}),ia=r("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[i("segment-type",[r("tabs-rail",[g("&.transition-disabled",[r("tabs-capsule",`
 transition: none;
 `)])])]),i("top",[r("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),i("left",[r("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),i("left, right",`
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
 `)]),i("right",`
 flex-direction: row-reverse;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),r("tabs-bar",`
 left: 0;
 `)]),i("bottom",`
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
 `,[i("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),g("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),i("flex",[r("tabs-nav",`
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
 `,[z("prefix, suffix",`
 display: flex;
 align-items: center;
 `),z("prefix","padding-right: 16px;"),z("suffix","padding-left: 16px;")]),i("top, bottom",[g(">",[r("tabs-nav",[r("tabs-nav-scroll-wrapper",[g("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),g("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),i("shadow-start",[g("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),i("shadow-end",[g("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),i("left, right",[r("tabs-nav-scroll-content",`
 flex-direction: column;
 `),g(">",[r("tabs-nav",[r("tabs-nav-scroll-wrapper",[g("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),g("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),i("shadow-start",[g("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),i("shadow-end",[g("&::after",`
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
 `,[g("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `)]),g("&::before, &::after",`
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
 `,[i("disabled",{cursor:"not-allowed"}),z("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),z("label",`
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
 `,[g("&.transition-disabled",`
 transition: none;
 `),i("disabled",`
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
 `,[g("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),g("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),g("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),g("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),g("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),r("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),i("line-type, bar-type",[r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[g("&:hover",{color:"var(--n-tab-text-color-hover)"}),i("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),i("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),r("tabs-nav",[i("line-type",[i("top",[z("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 bottom: -1px;
 `)]),i("left",[z("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 right: -1px;
 `)]),i("right",[z("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 left: -1px;
 `)]),i("bottom",[z("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 top: -1px;
 `)]),z("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-bar",`
 border-radius: 0;
 `)]),i("card-type",[z("prefix, suffix",`
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
 `,[i("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[z("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),Pt("disabled",[g("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),i("closable","padding-right: 8px;"),i("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),i("disabled","color: var(--n-tab-text-color-disabled);")])]),i("left, right",`
 flex-direction: column; 
 `,[z("prefix, suffix",`
 padding: var(--n-tab-padding-vertical);
 `),r("tabs-wrapper",`
 flex-direction: column;
 `),r("tabs-tab-wrapper",`
 flex-direction: column;
 `,[r("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),i("top",[i("card-type",[r("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);"),z("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-bottom: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),i("left",[i("card-type",[r("tabs-scroll-padding","border-right: 1px solid var(--n-tab-border-color);"),z("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-right: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),i("right",[i("card-type",[r("tabs-scroll-padding","border-left: 1px solid var(--n-tab-border-color);"),z("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-left: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),i("bottom",[i("card-type",[r("tabs-scroll-padding","border-top: 1px solid var(--n-tab-border-color);"),z("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-top: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),de=ra,sa=Object.assign(Object.assign({},_e.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),ca=K({name:"Tabs",props:sa,slots:Object,setup(e,{slots:n}){var l,u,b,x;const{mergedClsPrefixRef:v,inlineThemeDisabled:f,mergedComponentPropsRef:h}=_t(e),m=_e("Tabs","-tabs",ia,Wt,e,v),y=E(null),T=E(null),A=E(null),C=E(null),S=E(null),R=E(null),P=E(!0),_=E(!0),$=Se(e,["labelSize","size"]),H=G(()=>{var t,a;if($.value)return $.value;const o=(a=(t=h?.value)===null||t===void 0?void 0:t.Tabs)===null||a===void 0?void 0:a.size;return o||"medium"}),k=Se(e,["activeName","value"]),p=E((u=(l=k.value)!==null&&l!==void 0?l:e.defaultValue)!==null&&u!==void 0?u:n.default?(x=(b=ne(n.default())[0])===null||b===void 0?void 0:b.props)===null||x===void 0?void 0:x.name:null),s=At(k,p),W={id:0},F=G(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});ie(s,()=>{W.id=0,J(),ue()});function M(){var t;const{value:a}=s;return a===null?null:(t=y.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function Ae(t){if(e.type==="card")return;const{value:a}=T;if(!a)return;const o=a.style.opacity==="0";if(t){const d=`${v.value}-tabs-bar--disabled`,{barWidth:w,placement:L}=e;if(t.dataset.disabled==="true"?a.classList.add(d):a.classList.remove(d),["top","bottom"].includes(L)){if(pe(["top","maxHeight","height"]),typeof w=="number"&&t.offsetWidth>=w){const B=Math.floor((t.offsetWidth-w)/2)+t.offsetLeft;a.style.left=`${B}px`,a.style.maxWidth=`${w}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",o&&(a.style.transition="none"),a.offsetWidth,o&&(a.style.transition="",a.style.opacity="1")}else{if(pe(["left","maxWidth","width"]),typeof w=="number"&&t.offsetHeight>=w){const B=Math.floor((t.offsetHeight-w)/2)+t.offsetTop;a.style.top=`${B}px`,a.style.maxHeight=`${w}px`}else a.style.top=`${t.offsetTop}px`,a.style.maxHeight=`${t.offsetHeight}px`;a.style.height="8192px",o&&(a.style.transition="none"),a.offsetHeight,o&&(a.style.transition="",a.style.opacity="1")}}}function Ee(){if(e.type==="card")return;const{value:t}=T;t&&(t.style.opacity="0")}function pe(t){const{value:a}=T;if(a)for(const o of t)a.style[o]=""}function J(){if(e.type==="card")return;const t=M();t?Ae(t):Ee()}function ue(){var t;const a=(t=S.value)===null||t===void 0?void 0:t.$el;if(!a)return;const o=M();if(!o)return;const{scrollLeft:d,offsetWidth:w}=a,{offsetLeft:L,offsetWidth:B}=o;d>L?a.scrollTo({top:0,left:L,behavior:"smooth"}):L+B>d+w&&a.scrollTo({top:0,left:L+B-w,behavior:"smooth"})}const Y=E(null);let te=0,O=null;function Le(t){const a=Y.value;if(a){te=t.getBoundingClientRect().height;const o=`${te}px`,d=()=>{a.style.height=o,a.style.maxHeight=o};O?(d(),O(),O=null):O=d}}function Be(t){const a=Y.value;if(a){const o=t.getBoundingClientRect().height,d=()=>{document.body.offsetHeight,a.style.maxHeight=`${o}px`,a.style.height=`${Math.max(te,o)}px`};O?(O(),O=null,d()):O=d}}function ke(){const t=Y.value;if(t){t.style.maxHeight="",t.style.height="";const{paneWrapperStyle:a}=e;if(typeof a=="string")t.style.cssText=a;else if(a){const{maxHeight:o,height:d}=a;o!==void 0&&(t.style.maxHeight=o),d!==void 0&&(t.style.height=d)}}}const ve={value:[]},he=E("next");function je(t){const a=s.value;let o="next";for(const d of ve.value){if(d===a)break;if(d===t){o="prev";break}}he.value=o,Ie(t)}function Ie(t){const{onActiveNameChange:a,onUpdateValue:o,"onUpdate:value":d}=e;a&&Z(a,t),o&&Z(o,t),d&&Z(d,t),p.value=t}function He(t){const{onClose:a}=e;a&&Z(a,t)}function ge(){const{value:t}=T;if(!t)return;const a="transition-disabled";t.classList.add(a),J(),t.classList.remove(a)}const D=E(null);function ae({transitionDisabled:t}){const a=y.value;if(!a)return;t&&a.classList.add("transition-disabled");const o=M();o&&D.value&&(D.value.style.width=`${o.offsetWidth}px`,D.value.style.height=`${o.offsetHeight}px`,D.value.style.transform=`translateX(${o.offsetLeft-jt(getComputedStyle(a).paddingLeft)}px)`,t&&D.value.offsetWidth),t&&a.classList.remove("transition-disabled")}ie([s],()=>{e.type==="segment"&&se(()=>{ae({transitionDisabled:!1})})}),Et(()=>{e.type==="segment"&&ae({transitionDisabled:!0})});let xe=0;function Oe(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||xe===t.contentRect.width)return;xe=t.contentRect.width;const{type:o}=e;if((o==="line"||o==="bar")&&ge(),o!=="segment"){const{placement:d}=e;re((d==="top"||d==="bottom"?(a=S.value)===null||a===void 0?void 0:a.$el:R.value)||null)}}const Fe=de(Oe,64);ie([()=>e.justifyContent,()=>e.size],()=>{se(()=>{const{type:t}=e;(t==="line"||t==="bar")&&ge()})});const N=E(!1);function Me(t){var a;const{target:o,contentRect:{width:d,height:w}}=t,L=o.parentElement.parentElement.offsetWidth,B=o.parentElement.parentElement.offsetHeight,{placement:U}=e;if(!N.value)U==="top"||U==="bottom"?L<d&&(N.value=!0):B<w&&(N.value=!0);else{const{value:X}=C;if(!X)return;U==="top"||U==="bottom"?L-d>X.$el.offsetWidth&&(N.value=!1):B-w>X.$el.offsetHeight&&(N.value=!1)}re(((a=S.value)===null||a===void 0?void 0:a.$el)||null)}const De=de(Me,64);function Ne(){const{onAdd:t}=e;t&&t(),se(()=>{const a=M(),{value:o}=S;!a||!o||o.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function re(t){if(!t)return;const{placement:a}=e;if(a==="top"||a==="bottom"){const{scrollLeft:o,scrollWidth:d,offsetWidth:w}=t;P.value=o<=0,_.value=o+w>=d}else{const{scrollTop:o,scrollHeight:d,offsetHeight:w}=t;P.value=o<=0,_.value=o+w>=d}}const Ve=de(t=>{re(t.target)},64);Mt(fe,{triggerRef:I(e,"trigger"),tabStyleRef:I(e,"tabStyle"),tabClassRef:I(e,"tabClass"),addTabStyleRef:I(e,"addTabStyle"),addTabClassRef:I(e,"addTabClass"),paneClassRef:I(e,"paneClass"),paneStyleRef:I(e,"paneStyle"),mergedClsPrefixRef:v,typeRef:I(e,"type"),closableRef:I(e,"closable"),valueRef:s,tabChangeIdRef:W,onBeforeLeaveRef:I(e,"onBeforeLeave"),activateTab:je,handleClose:He,handleAdd:Ne}),Lt(()=>{J(),ue()}),Bt(()=>{const{value:t}=A;if(!t)return;const{value:a}=v,o=`${a}-tabs-nav-scroll-wrapper--shadow-start`,d=`${a}-tabs-nav-scroll-wrapper--shadow-end`;P.value?t.classList.remove(o):t.classList.add(o),_.value?t.classList.remove(d):t.classList.add(d)});const Ue={syncBarPosition:()=>{J()}},Xe=()=>{ae({transitionDisabled:!0})},me=G(()=>{const{value:t}=H,{type:a}=e,o={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],d=`${t}${o}`,{self:{barColor:w,closeIconColor:L,closeIconColorHover:B,closeIconColorPressed:U,tabColor:X,tabBorderColor:Ge,paneTextColor:Ke,tabFontWeight:Je,tabBorderRadius:Ye,tabFontWeightActive:qe,colorSegment:Qe,fontWeightStrong:Ze,tabColorSegment:et,closeSize:tt,closeIconSize:at,closeColorHover:rt,closeColorPressed:nt,closeBorderRadius:ot,[j("panePadding",t)]:q,[j("tabPadding",d)]:it,[j("tabPaddingVertical",d)]:st,[j("tabGap",d)]:lt,[j("tabGap",`${d}Vertical`)]:dt,[j("tabTextColor",a)]:ct,[j("tabTextColorActive",a)]:bt,[j("tabTextColorHover",a)]:ft,[j("tabTextColorDisabled",a)]:pt,[j("tabFontSize",t)]:ut},common:{cubicBezierEaseInOut:vt}}=m.value;return{"--n-bezier":vt,"--n-color-segment":Qe,"--n-bar-color":w,"--n-tab-font-size":ut,"--n-tab-text-color":ct,"--n-tab-text-color-active":bt,"--n-tab-text-color-disabled":pt,"--n-tab-text-color-hover":ft,"--n-pane-text-color":Ke,"--n-tab-border-color":Ge,"--n-tab-border-radius":Ye,"--n-close-size":tt,"--n-close-icon-size":at,"--n-close-color-hover":rt,"--n-close-color-pressed":nt,"--n-close-border-radius":ot,"--n-close-icon-color":L,"--n-close-icon-color-hover":B,"--n-close-icon-color-pressed":U,"--n-tab-color":X,"--n-tab-font-weight":Je,"--n-tab-font-weight-active":qe,"--n-tab-padding":it,"--n-tab-padding-vertical":st,"--n-tab-gap":lt,"--n-tab-gap-vertical":dt,"--n-pane-padding-left":Q(q,"left"),"--n-pane-padding-right":Q(q,"right"),"--n-pane-padding-top":Q(q,"top"),"--n-pane-padding-bottom":Q(q,"bottom"),"--n-font-weight-strong":Ze,"--n-tab-color-segment":et}}),V=f?kt("tabs",G(()=>`${H.value[0]}${e.type[0]}`),me,e):void 0;return Object.assign({mergedClsPrefix:v,mergedValue:s,renderedNames:new Set,segmentCapsuleElRef:D,tabsPaneWrapperRef:Y,tabsElRef:y,barElRef:T,addTabInstRef:C,xScrollInstRef:S,scrollWrapperElRef:A,addTabFixed:N,tabWrapperStyle:F,handleNavResize:Fe,mergedSize:H,handleScroll:Ve,handleTabsResize:De,cssVars:f?void 0:me,themeClass:V?.themeClass,animationDirection:he,renderNameListRef:ve,yScrollElRef:R,handleSegmentResize:Xe,onAnimationBeforeLeave:Le,onAnimationEnter:Be,onAnimationAfterEnter:ke,onRender:V?.onRender},Ue)},render(){const{mergedClsPrefix:e,type:n,placement:l,addTabFixed:u,addable:b,mergedSize:x,renderNameListRef:v,onRender:f,paneWrapperClass:h,paneWrapperStyle:m,$slots:{default:y,prefix:T,suffix:A}}=this;f?.();const C=y?ne(y()).filter(p=>p.type.__TAB_PANE__===!0):[],S=y?ne(y()).filter(p=>p.type.__TAB__===!0):[],R=!S.length,P=n==="card",_=n==="segment",$=!P&&!_&&this.justifyContent;v.value=[];const H=()=>{const p=c("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},$?null:c("div",{class:`${e}-tabs-scroll-padding`,style:l==="top"||l==="bottom"?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),R?C.map((s,W)=>(v.value.push(s.props.name),ce(c(be,Object.assign({},s.props,{internalCreatedByPane:!0,internalLeftPadded:W!==0&&(!$||$==="center"||$==="start"||$==="end")}),s.children?{default:s.children.tab}:void 0)))):S.map((s,W)=>(v.value.push(s.props.name),ce(W!==0&&!$?$e(s):s))),!u&&b&&P?ze(b,(R?C.length:S.length)!==0):null,$?null:c("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return c("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},P&&b?c(oe,{onResize:this.handleTabsResize},{default:()=>p}):p,P?c("div",{class:`${e}-tabs-pad`}):null,P?null:c("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},k=_?"top":l;return c("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${n}-type`,`${e}-tabs--${x}-size`,$&&`${e}-tabs--flex`,`${e}-tabs--${k}`],style:this.cssVars},c("div",{class:[`${e}-tabs-nav--${n}-type`,`${e}-tabs-nav--${k}`,`${e}-tabs-nav`]},we(T,p=>p&&c("div",{class:`${e}-tabs-nav__prefix`},p)),_?c(oe,{onResize:this.handleSegmentResize},{default:()=>c("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},c("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},c("div",{class:`${e}-tabs-wrapper`},c("div",{class:`${e}-tabs-tab`}))),R?C.map((p,s)=>(v.value.push(p.props.name),c(be,Object.assign({},p.props,{internalCreatedByPane:!0,internalLeftPadded:s!==0}),p.children?{default:p.children.tab}:void 0))):S.map((p,s)=>(v.value.push(p.props.name),s===0?p:$e(p))))}):c(oe,{onResize:this.handleNavResize},{default:()=>c("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(k)?c(Nt,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:H}):c("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},H()))}),u&&b&&P?ze(b,!0):null,we(A,p=>p&&c("div",{class:`${e}-tabs-nav__suffix`},p))),R&&(this.animated&&(k==="top"||k==="bottom")?c("div",{ref:"tabsPaneWrapperRef",style:m,class:[`${e}-tabs-pane-wrapper`,h]},Te(C,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Te(C,this.mergedValue,this.renderedNames)))}});function Te(e,n,l,u,b,x,v){const f=[];return e.forEach(h=>{const{name:m,displayDirective:y,"display-directive":T}=h.props,A=S=>y===S||T===S,C=n===m;if(h.key!==void 0&&(h.key=m),C||A("show")||A("show:lazy")&&l.has(m)){l.has(m)||l.add(m);const S=!A("if");f.push(S?It(h,[[Ht,C]]):h)}}),v?c(Ot,{name:`${v}-transition`,onBeforeLeave:u,onEnter:b,onAfterEnter:x},{default:()=>f}):f}function ze(e,n){return c(be,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:n,disabled:typeof e=="object"&&e.disabled})}function $e(e){const n=Ft(e);return n.props?n.props.internalLeftPadded=!0:n.props={internalLeftPadded:!0},n}function ce(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{na as A,da as N,be as _,ca as a};
