import{aE as je,bh as Me,bi as Ue,bd as ne,bz as Ve,by as He,bf as te,cD as ve,bA as D,ai as U,ba as We,aD as b,bE as qe,cs as Ze,ae as Je,bl as Xe,A as Qe,aO as q,cg as ae,ci as Re,cm as be,ck as Y,a8 as de,c6 as L,J as Z,C as B,D as E,G as F,z as G,H as oe,au as Ye,aC as en,cx as ee,bx as nn,cr as tn,cy as ge,a1 as z,a9 as W,bu as X,bB as re,cC as Ne,b8 as me,aM as on,ax as rn,B as an,l as dn,V as sn,i as ln,bs as Pe,F as un,n as cn,bC as fn,b9 as hn,am as pn,as as vn,b2 as bn,g as gn,an as mn,br as Ae}from"./index-DegLwvmn.js";function xe(e,n){let{target:t}=e;for(;t;){if(t.dataset&&t.dataset[n]!==void 0)return!0;t=t.parentElement}return!1}function yn(e={},n){const t=He({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:o,keyup:r}=e,i=d=>{switch(d.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}o!==void 0&&Object.keys(o).forEach(c=>{if(c!==d.key)return;const f=o[c];if(typeof f=="function")f(d);else{const{stop:h=!1,prevent:m=!1}=f;h&&d.stopPropagation(),m&&d.preventDefault(),f.handler(d)}})},a=d=>{switch(d.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}r!==void 0&&Object.keys(r).forEach(c=>{if(c!==d.key)return;const f=r[c];if(typeof f=="function")f(d);else{const{stop:h=!1,prevent:m=!1}=f;h&&d.stopPropagation(),m&&d.preventDefault(),f.handler(d)}})},s=()=>{(n===void 0||n.value)&&(te("keydown",document,i),te("keyup",document,a)),n!==void 0&&ve(n,d=>{d?(te("keydown",document,i),te("keyup",document,a)):(ne("keydown",document,i),ne("keyup",document,a))})};return je()?(Me(s),Ue(()=>{(n===void 0||n.value)&&(ne("keydown",document,i),ne("keyup",document,a))})):s(),Ve(t)}function wn(e,n,t){const o=D(e.value);let r=null;return ve(e,i=>{r!==null&&window.clearTimeout(r),i===!0?t&&!t.value?o.value=!0:r=window.setTimeout(()=>{o.value=!0},n):o.value=!1}),o}const H="v-hidden",xn=Qe("[v-hidden]",{display:"none!important"}),ut=U({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:n}){const t=D(null),o=D(null);function r(a){const{value:s}=t,{getCounter:d,getTail:c}=e;let f;if(d!==void 0?f=d():f=o.value,!s||!f)return;f.hasAttribute(H)&&f.removeAttribute(H);const{children:h}=s;if(a.showAllItemsBeforeCalculate)for(const w of h)w.hasAttribute(H)&&w.removeAttribute(H);const m=s.offsetWidth,P=[],v=n.tail?c?.():null;let A=v?v.offsetWidth:0,N=!1;const K=s.children.length-(n.tail?1:0);for(let w=0;w<K-1;++w){if(w<0)continue;const l=h[w];if(N){l.hasAttribute(H)||l.setAttribute(H,"");continue}else l.hasAttribute(H)&&l.removeAttribute(H);const u=l.offsetWidth;if(A+=u,P[w]=u,A>m){const{updateCounter:g}=e;for(let S=w;S>=0;--S){const _=K-1-S;g!==void 0?g(_):f.textContent=`${_}`;const O=f.offsetWidth;if(A-=P[S],A+O<=m||S===0){N=!0,w=S-1,v&&(w===-1?(v.style.maxWidth=`${m-O}px`,v.style.boxSizing="border-box"):v.style.maxWidth="");const{onUpdateCount:R}=e;R&&R(_);break}}}}const{onUpdateOverflow:I}=e;N?I!==void 0&&I(!0):(I!==void 0&&I(!1),f.setAttribute(H,""))}const i=Ze();return xn.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Je,ssr:i}),Xe(()=>r({showAllItemsBeforeCalculate:!1})),{selfRef:t,counterRef:o,sync:r}},render(){const{$slots:e}=this;return We(()=>this.sync({showAllItemsBeforeCalculate:!1})),b("div",{class:"v-overflow",ref:"selfRef"},[qe(e,"default"),e.counter?e.counter():b("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function kn(e){return n=>{n?e.value=n.$el:e.value=null}}const Sn=U({name:"ChevronRight",render(){return b("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},b("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}});function ke(e){return Array.isArray(e)?e:[e]}const he={STOP:"STOP"};function Ke(e,n){const t=n(e);e.children!==void 0&&t!==he.STOP&&e.children.forEach(o=>Ke(o,n))}function Cn(e,n={}){const{preserveGroup:t=!1}=n,o=[],r=t?a=>{a.isLeaf||(o.push(a.key),i(a.children))}:a=>{a.isLeaf||(a.isGroup||o.push(a.key),i(a.children))};function i(a){a.forEach(r)}return i(e),o}function Rn(e,n){const{isLeaf:t}=e;return t!==void 0?t:!n(e)}function Nn(e){return e.children}function Pn(e){return e.key}function An(){return!1}function Kn(e,n){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(n(e)))}function In(e){return e.disabled===!0}function _n(e,n){return e.isLeaf===!1&&!Array.isArray(n(e))}function ue(e){var n;return e==null?[]:Array.isArray(e)?e:(n=e.checkedKeys)!==null&&n!==void 0?n:[]}function ce(e){var n;return e==null||Array.isArray(e)?[]:(n=e.indeterminateKeys)!==null&&n!==void 0?n:[]}function zn(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)||t.add(o)}),Array.from(t)}function On(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)&&t.delete(o)}),Array.from(t)}function $n(e){return e?.type==="group"}function ct(e){const n=new Map;return e.forEach((t,o)=>{n.set(t.key,o)}),t=>{var o;return(o=n.get(t))!==null&&o!==void 0?o:null}}class Tn extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function Fn(e,n,t,o){return ie(n.concat(e),t,o,!1)}function Bn(e,n){const t=new Set;return e.forEach(o=>{const r=n.treeNodeMap.get(o);if(r!==void 0){let i=r.parent;for(;i!==null&&!(i.disabled||t.has(i.key));)t.add(i.key),i=i.parent}}),t}function En(e,n,t,o){const r=ie(n,t,o,!1),i=ie(e,t,o,!0),a=Bn(e,t),s=[];return r.forEach(d=>{(i.has(d)||a.has(d))&&s.push(d)}),s.forEach(d=>r.delete(d)),r}function fe(e,n){const{checkedKeys:t,keysToCheck:o,keysToUncheck:r,indeterminateKeys:i,cascade:a,leafOnly:s,checkStrategy:d,allowNotLoaded:c}=e;if(!a)return o!==void 0?{checkedKeys:zn(t,o),indeterminateKeys:Array.from(i)}:r!==void 0?{checkedKeys:On(t,r),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:f}=n;let h;r!==void 0?h=En(r,t,n,c):o!==void 0?h=Fn(o,t,n,c):h=ie(t,n,c,!1);const m=d==="parent",P=d==="child"||s,v=h,A=new Set,N=Math.max.apply(null,Array.from(f.keys()));for(let K=N;K>=0;K-=1){const I=K===0,w=f.get(K);for(const l of w){if(l.isLeaf)continue;const{key:u,shallowLoaded:g}=l;if(P&&g&&l.children.forEach(R=>{!R.disabled&&!R.isLeaf&&R.shallowLoaded&&v.has(R.key)&&v.delete(R.key)}),l.disabled||!g)continue;let S=!0,_=!1,O=!0;for(const R of l.children){const j=R.key;if(!R.disabled){if(O&&(O=!1),v.has(j))_=!0;else if(A.has(j)){_=!0,S=!1;break}else if(S=!1,_)break}}S&&!O?(m&&l.children.forEach(R=>{!R.disabled&&v.has(R.key)&&v.delete(R.key)}),v.add(u)):_&&A.add(u),I&&P&&v.has(u)&&v.delete(u)}}return{checkedKeys:Array.from(v),indeterminateKeys:Array.from(A)}}function ie(e,n,t,o){const{treeNodeMap:r,getChildren:i}=n,a=new Set,s=new Set(e);return e.forEach(d=>{const c=r.get(d);c!==void 0&&Ke(c,f=>{if(f.disabled)return he.STOP;const{key:h}=f;if(!a.has(h)&&(a.add(h),s.add(h),_n(f.rawNode,i))){if(o)return he.STOP;if(!t)throw new Tn}})}),s}function Dn(e,{includeGroup:n=!1,includeSelf:t=!0},o){var r;const i=o.treeNodeMap;let a=e==null?null:(r=i.get(e))!==null&&r!==void 0?r:null;const s={keyPath:[],treeNodePath:[],treeNode:a};if(a?.ignored)return s.treeNode=null,s;for(;a;)!a.ignored&&(n||!a.isGroup)&&s.treeNodePath.push(a),a=a.parent;return s.treeNodePath.reverse(),t||s.treeNodePath.pop(),s.keyPath=s.treeNodePath.map(d=>d.key),s}function Ln(e){if(e.length===0)return null;const n=e[0];return n.isGroup||n.ignored||n.disabled?n.getNext():n}function Gn(e,n){const t=e.siblings,o=t.length,{index:r}=e;return n?t[(r+1)%o]:r===t.length-1?null:t[r+1]}function Se(e,n,{loop:t=!1,includeDisabled:o=!1}={}){const r=n==="prev"?jn:Gn,i={reverse:n==="prev"};let a=!1,s=null;function d(c){if(c!==null){if(c===e){if(!a)a=!0;else if(!e.disabled&&!e.isGroup){s=e;return}}else if((!c.disabled||o)&&!c.ignored&&!c.isGroup){s=c;return}if(c.isGroup){const f=ye(c,i);f!==null?s=f:d(r(c,t))}else{const f=r(c,!1);if(f!==null)d(f);else{const h=Mn(c);h?.isGroup?d(r(h,t)):t&&d(r(c,!0))}}}}return d(e),s}function jn(e,n){const t=e.siblings,o=t.length,{index:r}=e;return n?t[(r-1+o)%o]:r===0?null:t[r-1]}function Mn(e){return e.parent}function ye(e,n={}){const{reverse:t=!1}=n,{children:o}=e;if(o){const{length:r}=o,i=t?r-1:0,a=t?-1:r,s=t?-1:1;for(let d=i;d!==a;d+=s){const c=o[d];if(!c.disabled&&!c.ignored)if(c.isGroup){const f=ye(c,n);if(f!==null)return f}else return c}}return null}const Un={getChild(){return this.ignored?null:ye(this)},getParent(){const{parent:e}=this;return e?.isGroup?e.getParent():e},getNext(e={}){return Se(this,"next",e)},getPrev(e={}){return Se(this,"prev",e)}};function Vn(e,n){const t=n?new Set(n):void 0,o=[];function r(i){i.forEach(a=>{o.push(a),!(a.isLeaf||!a.children||a.ignored)&&(a.isGroup||t===void 0||t.has(a.key))&&r(a.children)})}return r(e),o}function Hn(e,n){const t=e.key;for(;n;){if(n.key===t)return!0;n=n.parent}return!1}function Ie(e,n,t,o,r,i=null,a=0){const s=[];return e.forEach((d,c)=>{var f;const h=Object.create(o);if(h.rawNode=d,h.siblings=s,h.level=a,h.index=c,h.isFirstChild=c===0,h.isLastChild=c+1===e.length,h.parent=i,!h.ignored){const m=r(d);Array.isArray(m)&&(h.children=Ie(m,n,t,o,r,h,a+1))}s.push(h),n.set(h.key,h),t.has(a)||t.set(a,[]),(f=t.get(a))===null||f===void 0||f.push(h)}),s}function Wn(e,n={}){var t;const o=new Map,r=new Map,{getDisabled:i=In,getIgnored:a=An,getIsGroup:s=$n,getKey:d=Pn}=n,c=(t=n.getChildren)!==null&&t!==void 0?t:Nn,f=n.ignoreEmptyChildren?l=>{const u=c(l);return Array.isArray(u)?u.length?u:null:u}:c,h=Object.assign({get key(){return d(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return s(this.rawNode)},get isLeaf(){return Rn(this.rawNode,f)},get shallowLoaded(){return Kn(this.rawNode,f)},get ignored(){return a(this.rawNode)},contains(l){return Hn(this,l)}},Un),m=Ie(e,o,r,h,f);function P(l){if(l==null)return null;const u=o.get(l);return u&&!u.isGroup&&!u.ignored?u:null}function v(l){if(l==null)return null;const u=o.get(l);return u&&!u.ignored?u:null}function A(l,u){const g=v(l);return g?g.getPrev(u):null}function N(l,u){const g=v(l);return g?g.getNext(u):null}function K(l){const u=v(l);return u?u.getParent():null}function I(l){const u=v(l);return u?u.getChild():null}const w={treeNodes:m,treeNodeMap:o,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:f,getFlattenedNodes(l){return Vn(m,l)},getNode:P,getPrev:A,getNext:N,getParent:K,getChild:I,getFirstAvailableNode(){return Ln(m)},getPath(l,u={}){return Dn(l,u,w)},getCheckedKeys(l,u={}){const{cascade:g=!0,leafOnly:S=!1,checkStrategy:_="all",allowNotLoaded:O=!1}=u;return fe({checkedKeys:ue(l),indeterminateKeys:ce(l),cascade:g,leafOnly:S,checkStrategy:_,allowNotLoaded:O},w)},check(l,u,g={}){const{cascade:S=!0,leafOnly:_=!1,checkStrategy:O="all",allowNotLoaded:R=!1}=g;return fe({checkedKeys:ue(u),indeterminateKeys:ce(u),keysToCheck:l==null?[]:ke(l),cascade:S,leafOnly:_,checkStrategy:O,allowNotLoaded:R},w)},uncheck(l,u,g={}){const{cascade:S=!0,leafOnly:_=!1,checkStrategy:O="all",allowNotLoaded:R=!1}=g;return fe({checkedKeys:ue(u),indeterminateKeys:ce(u),keysToUncheck:l==null?[]:ke(l),cascade:S,leafOnly:_,checkStrategy:O,allowNotLoaded:R},w)},getNonLeafKeys(l={}){return Cn(m,l)}};return w}const ft={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},_e=de("n-radio-group");function ht(e){const n=q(_e,null),{mergedClsPrefixRef:t,mergedComponentPropsRef:o}=ae(e),r=Re(e,{mergedSize(l){var u,g;const{size:S}=e;if(S!==void 0)return S;if(n){const{mergedSizeRef:{value:O}}=n;if(O!==void 0)return O}if(l)return l.mergedSize.value;const _=(g=(u=o?.value)===null||u===void 0?void 0:u.Radio)===null||g===void 0?void 0:g.size;return _||"medium"},mergedDisabled(l){return!!(e.disabled||n?.disabledRef.value||l?.disabled.value)}}),{mergedSizeRef:i,mergedDisabledRef:a}=r,s=D(null),d=D(null),c=D(e.defaultChecked),f=L(e,"checked"),h=be(f,c),m=Y(()=>n?n.valueRef.value===e.value:h.value),P=Y(()=>{const{name:l}=e;if(l!==void 0)return l;if(n)return n.nameRef.value}),v=D(!1);function A(){if(n){const{doUpdateValue:l}=n,{value:u}=e;Z(l,u)}else{const{onUpdateChecked:l,"onUpdate:checked":u}=e,{nTriggerFormInput:g,nTriggerFormChange:S}=r;l&&Z(l,!0),u&&Z(u,!0),g(),S(),c.value=!0}}function N(){a.value||m.value||A()}function K(){N(),s.value&&(s.value.checked=m.value)}function I(){v.value=!1}function w(){v.value=!0}return{mergedClsPrefix:n?n.mergedClsPrefixRef:t,inputRef:s,labelRef:d,mergedName:P,mergedDisabled:a,renderSafeChecked:m,focus:v,mergedSize:i,handleRadioInputChange:K,handleRadioInputBlur:I,handleRadioInputFocus:w}}const qn=B("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[E("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[F("checked",{backgroundColor:"var(--n-button-border-color-active)"}),F("disabled",{opacity:"var(--n-opacity-disabled)"})]),F("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[B("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),E("splitor",{height:"var(--n-height)"})]),B("radio-button",`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[B("radio-input",`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),E("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),G("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[E("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),G("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[E("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),oe("disabled",`
 cursor: pointer;
 `,[G("&:hover",[E("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),oe("checked",{color:"var(--n-button-text-color-hover)"})]),F("focus",[G("&:not(:active)",[E("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),F("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),F("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function Zn(e,n,t){var o;const r=[];let i=!1;for(let a=0;a<e.length;++a){const s=e[a],d=(o=s.type)===null||o===void 0?void 0:o.name;d==="RadioButton"&&(i=!0);const c=s.props;if(d!=="RadioButton"){r.push(s);continue}if(a===0)r.push(s);else{const f=r[r.length-1].props,h=n===f.value,m=f.disabled,P=n===c.value,v=c.disabled,A=(h?2:0)+(m?0:1),N=(P?2:0)+(v?0:1),K={[`${t}-radio-group__splitor--disabled`]:m,[`${t}-radio-group__splitor--checked`]:h},I={[`${t}-radio-group__splitor--disabled`]:v,[`${t}-radio-group__splitor--checked`]:P},w=A<N?I:K;r.push(b("div",{class:[`${t}-radio-group__splitor`,w]}),s)}}return{children:r,isButtonGroup:i}}const Jn=Object.assign(Object.assign({},ee.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),pt=U({name:"RadioGroup",props:Jn,setup(e){const n=D(null),{mergedSizeRef:t,mergedDisabledRef:o,nTriggerFormChange:r,nTriggerFormInput:i,nTriggerFormBlur:a,nTriggerFormFocus:s}=Re(e),{mergedClsPrefixRef:d,inlineThemeDisabled:c,mergedRtlRef:f}=ae(e),h=ee("Radio","-radio-group",qn,nn,e,d),m=D(e.defaultValue),P=L(e,"value"),v=be(P,m);function A(u){const{onUpdateValue:g,"onUpdate:value":S}=e;g&&Z(g,u),S&&Z(S,u),m.value=u,r(),i()}function N(u){const{value:g}=n;g&&(g.contains(u.relatedTarget)||s())}function K(u){const{value:g}=n;g&&(g.contains(u.relatedTarget)||a())}X(_e,{mergedClsPrefixRef:d,nameRef:L(e,"name"),valueRef:v,disabledRef:o,mergedSizeRef:t,doUpdateValue:A});const I=tn("Radio",f,d),w=z(()=>{const{value:u}=t,{common:{cubicBezierEaseInOut:g},self:{buttonBorderColor:S,buttonBorderColorActive:_,buttonBorderRadius:O,buttonBoxShadow:R,buttonBoxShadowFocus:j,buttonBoxShadowHover:Q,buttonColor:M,buttonColorActive:y,buttonTextColor:x,buttonTextColorActive:C,buttonTextColorHover:p,opacityDisabled:k,[W("buttonHeight",u)]:T,[W("fontSize",u)]:V}}=h.value;return{"--n-font-size":V,"--n-bezier":g,"--n-button-border-color":S,"--n-button-border-color-active":_,"--n-button-border-radius":O,"--n-button-box-shadow":R,"--n-button-box-shadow-focus":j,"--n-button-box-shadow-hover":Q,"--n-button-color":M,"--n-button-color-active":y,"--n-button-text-color":x,"--n-button-text-color-hover":p,"--n-button-text-color-active":C,"--n-height":T,"--n-opacity-disabled":k}}),l=c?ge("radio-group",z(()=>t.value[0]),w,e):void 0;return{selfElRef:n,rtlEnabled:I,mergedClsPrefix:d,mergedValue:v,handleFocusout:K,handleFocusin:N,cssVars:c?void 0:w,themeClass:l?.themeClass,onRender:l?.onRender}},render(){var e;const{mergedValue:n,mergedClsPrefix:t,handleFocusin:o,handleFocusout:r}=this,{children:i,isButtonGroup:a}=Zn(Ye(en(this)),n,t);return(e=this.onRender)===null||e===void 0||e.call(this),b("div",{onFocusin:o,onFocusout:r,ref:"selfElRef",class:[`${t}-radio-group`,this.rtlEnabled&&`${t}-radio-group--rtl`,this.themeClass,a&&`${t}-radio-group--button-group`],style:this.cssVars},i)}}),we=de("n-dropdown-menu"),se=de("n-dropdown"),Ce=de("n-dropdown-option"),ze=U({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return b("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),Xn=U({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=q(we),{renderLabelRef:t,labelFieldRef:o,nodePropsRef:r,renderOptionRef:i}=q(se);return{labelField:o,showIcon:e,hasSubmenu:n,renderLabel:t,nodeProps:r,renderOption:i}},render(){var e;const{clsPrefix:n,hasSubmenu:t,showIcon:o,nodeProps:r,renderLabel:i,renderOption:a}=this,{rawNode:s}=this.tmNode,d=b("div",Object.assign({class:`${n}-dropdown-option`},r?.(s)),b("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},b("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,o&&`${n}-dropdown-option-body__prefix--show-icon`]},re(s.icon)),b("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(s):re((e=s.title)!==null&&e!==void 0?e:s[this.labelField])),b("div",{class:[`${n}-dropdown-option-body__suffix`,t&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:d,option:s}):d}}),Qn=B("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[F("color-transition",{transition:"color .3s var(--n-bezier)"}),F("depth",{color:"var(--n-color)"},[G("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),G("svg",{height:"1em",width:"1em"})]),Yn=Object.assign(Object.assign({},ee.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),et=U({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:Yn,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=ae(e),o=ee("Icon","-icon",Qn,on,e,n),r=z(()=>{const{depth:a}=e,{common:{cubicBezierEaseInOut:s},self:d}=o.value;if(a!==void 0){const{color:c,[`opacity${a}Depth`]:f}=d;return{"--n-bezier":s,"--n-color":c,"--n-opacity":f}}return{"--n-bezier":s,"--n-color":"","--n-opacity":""}}),i=t?ge("icon",z(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:n,mergedStyle:z(()=>{const{size:a,color:s}=e;return{fontSize:rn(a),color:s}}),cssVars:t?void 0:r,themeClass:i?.themeClass,onRender:i?.onRender}},render(){var e;const{$parent:n,depth:t,mergedClsPrefix:o,component:r,onRender:i,themeClass:a}=this;return!((e=n?.$options)===null||e===void 0)&&e._n_icon__&&Ne("icon","don't wrap `n-icon` inside `n-icon`"),i?.(),b("i",me(this.$attrs,{role:"img",class:[`${o}-icon`,a,{[`${o}-icon--depth`]:t,[`${o}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?b(r):this.$slots)}});function pe(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function nt(e){return e.type==="group"}function Oe(e){return e.type==="divider"}function tt(e){return e.type==="render"}const $e=U({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=q(se),{hoverKeyRef:t,keyboardKeyRef:o,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:i,activeKeyPathRef:a,animatedRef:s,mergedShowRef:d,renderLabelRef:c,renderIconRef:f,labelFieldRef:h,childrenFieldRef:m,renderOptionRef:P,nodePropsRef:v,menuPropsRef:A}=n,N=q(Ce,null),K=q(we),I=q(Pe),w=z(()=>e.tmNode.rawNode),l=z(()=>{const{value:p}=m;return pe(e.tmNode.rawNode,p)}),u=z(()=>{const{disabled:p}=e.tmNode;return p}),g=z(()=>{if(!l.value)return!1;const{key:p,disabled:k}=e.tmNode;if(k)return!1;const{value:T}=t,{value:V}=o,{value:le}=r,{value:J}=i;return T!==null?J.includes(p):V!==null?J.includes(p)&&J[J.length-1]!==p:le!==null?J.includes(p):!1}),S=z(()=>o.value===null&&!s.value),_=wn(g,300,S),O=z(()=>!!N?.enteringSubmenuRef.value),R=D(!1);X(Ce,{enteringSubmenuRef:R});function j(){R.value=!0}function Q(){R.value=!1}function M(){const{parentKey:p,tmNode:k}=e;k.disabled||d.value&&(r.value=p,o.value=null,t.value=k.key)}function y(){const{tmNode:p}=e;p.disabled||d.value&&t.value!==p.key&&M()}function x(p){if(e.tmNode.disabled||!d.value)return;const{relatedTarget:k}=p;k&&!xe({target:k},"dropdownOption")&&!xe({target:k},"scrollbarRail")&&(t.value=null)}function C(){const{value:p}=l,{tmNode:k}=e;d.value&&!p&&!k.disabled&&(n.doSelect(k.key,k.rawNode),n.doUpdateShow(!1))}return{labelField:h,renderLabel:c,renderIcon:f,siblingHasIcon:K.showIconRef,siblingHasSubmenu:K.hasSubmenuRef,menuProps:A,popoverBody:I,animated:s,mergedShowSubmenu:z(()=>_.value&&!O.value),rawNode:w,hasSubmenu:l,pending:Y(()=>{const{value:p}=i,{key:k}=e.tmNode;return p.includes(k)}),childActive:Y(()=>{const{value:p}=a,{key:k}=e.tmNode,T=p.findIndex(V=>k===V);return T===-1?!1:T<p.length-1}),active:Y(()=>{const{value:p}=a,{key:k}=e.tmNode,T=p.findIndex(V=>k===V);return T===-1?!1:T===p.length-1}),mergedDisabled:u,renderOption:P,nodeProps:v,handleClick:C,handleMouseMove:y,handleMouseEnter:M,handleMouseLeave:x,handleSubmenuBeforeEnter:j,handleSubmenuAfterEnter:Q}},render(){var e,n;const{animated:t,rawNode:o,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:a,siblingHasSubmenu:s,renderLabel:d,renderIcon:c,renderOption:f,nodeProps:h,props:m,scrollable:P}=this;let v=null;if(r){const I=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,o,o.children);v=b(Te,Object.assign({},I,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const A={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},N=h?.(o),K=b("div",Object.assign({class:[`${i}-dropdown-option`,N?.class],"data-dropdown-option":!0},N),b("div",me(A,m),[b("div",{class:[`${i}-dropdown-option-body__prefix`,a&&`${i}-dropdown-option-body__prefix--show-icon`]},[c?c(o):re(o.icon)]),b("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},d?d(o):re((n=o[this.labelField])!==null&&n!==void 0?n:o.title)),b("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,s&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?b(et,null,{default:()=>b(Sn,null)}):null)]),this.hasSubmenu?b(an,null,{default:()=>[b(dn,null,{default:()=>b("div",{class:`${i}-dropdown-offset-container`},b(sn,{show:this.mergedShowSubmenu,placement:this.placement,to:P&&this.popoverBody||void 0,teleportDisabled:!P},{default:()=>b("div",{class:`${i}-dropdown-menu-wrapper`},t?b(ln,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>v}):v)}))})]}):null);return f?f({node:K,option:o}):K}}),ot=U({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:t}=this,{children:o}=e;return b(un,null,b(Xn,{clsPrefix:t,tmNode:e,key:e.key}),o?.map(r=>{const{rawNode:i}=r;return i.show===!1?null:Oe(i)?b(ze,{clsPrefix:t,key:r.key}):r.isGroup?(Ne("dropdown","`group` node is not allowed to be put in `group` node."),null):b($e,{clsPrefix:t,tmNode:r,parentKey:n,key:r.key})}))}}),rt=U({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return b("div",n,[e?.()])}}),Te=U({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:t}=q(se);X(we,{showIconRef:z(()=>{const r=n.value;return e.tmNodes.some(i=>{var a;if(i.isGroup)return(a=i.children)===null||a===void 0?void 0:a.some(({rawNode:d})=>r?r(d):d.icon);const{rawNode:s}=i;return r?r(s):s.icon})}),hasSubmenuRef:z(()=>{const{value:r}=t;return e.tmNodes.some(i=>{var a;if(i.isGroup)return(a=i.children)===null||a===void 0?void 0:a.some(({rawNode:d})=>pe(d,r));const{rawNode:s}=i;return pe(s,r)})})});const o=D(null);return X(hn,null),X(pn,null),X(Pe,o),{bodyRef:o}},render(){const{parentKey:e,clsPrefix:n,scrollable:t}=this,o=this.tmNodes.map(r=>{const{rawNode:i}=r;return i.show===!1?null:tt(i)?b(rt,{tmNode:r,key:r.key}):Oe(i)?b(ze,{clsPrefix:n,key:r.key}):nt(i)?b(ot,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key}):b($e,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:t})});return b("div",{class:[`${n}-dropdown-menu`,t&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},t?b(cn,{contentClass:`${n}-dropdown-menu__content`},{default:()=>o}):o,this.showArrow?fn({clsPrefix:n,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),it=B("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[vn(),B("dropdown-option",`
 position: relative;
 `,[G("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[G("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),B("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[G("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),oe("disabled",[F("pending",`
 color: var(--n-option-text-color-hover);
 `,[E("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),G("&::before","background-color: var(--n-option-color-hover);")]),F("active",`
 color: var(--n-option-text-color-active);
 `,[E("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),G("&::before","background-color: var(--n-option-color-active);")]),F("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[E("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),F("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),F("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[E("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[F("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),E("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[F("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),B("icon",`
 font-size: var(--n-option-icon-size);
 `)]),E("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),E("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[F("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),B("icon",`
 font-size: var(--n-option-icon-size);
 `)]),B("dropdown-menu","pointer-events: all;")]),B("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),B("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),B("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),G(">",[B("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),oe("scrollable",`
 padding: var(--n-padding);
 `),F("scrollable",[E("content",`
 padding: var(--n-padding);
 `)])]),at={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:String,inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},dt=Object.keys(Ae),st=Object.assign(Object.assign(Object.assign({},Ae),at),ee.props),vt=U({name:"Dropdown",inheritAttrs:!1,props:st,setup(e){const n=D(!1),t=be(L(e,"show"),n),o=z(()=>{const{keyField:y,childrenField:x}=e;return Wn(e.options,{getKey(C){return C[y]},getDisabled(C){return C.disabled===!0},getIgnored(C){return C.type==="divider"||C.type==="render"},getChildren(C){return C[x]}})}),r=z(()=>o.value.treeNodes),i=D(null),a=D(null),s=D(null),d=z(()=>{var y,x,C;return(C=(x=(y=i.value)!==null&&y!==void 0?y:a.value)!==null&&x!==void 0?x:s.value)!==null&&C!==void 0?C:null}),c=z(()=>o.value.getPath(d.value).keyPath),f=z(()=>o.value.getPath(e.value).keyPath),h=Y(()=>e.keyboard&&t.value);yn({keydown:{ArrowUp:{prevent:!0,handler:S},ArrowRight:{prevent:!0,handler:g},ArrowDown:{prevent:!0,handler:_},ArrowLeft:{prevent:!0,handler:u},Enter:{prevent:!0,handler:O},Escape:l}},h);const{mergedClsPrefixRef:m,inlineThemeDisabled:P,mergedComponentPropsRef:v}=ae(e),A=z(()=>{var y,x;return e.size||((x=(y=v?.value)===null||y===void 0?void 0:y.Dropdown)===null||x===void 0?void 0:x.size)||"medium"}),N=ee("Dropdown","-dropdown",it,mn,e,m);X(se,{labelFieldRef:L(e,"labelField"),childrenFieldRef:L(e,"childrenField"),renderLabelRef:L(e,"renderLabel"),renderIconRef:L(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:a,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:c,activeKeyPathRef:f,animatedRef:L(e,"animated"),mergedShowRef:t,nodePropsRef:L(e,"nodeProps"),renderOptionRef:L(e,"renderOption"),menuPropsRef:L(e,"menuProps"),doSelect:K,doUpdateShow:I}),ve(t,y=>{!e.animated&&!y&&w()});function K(y,x){const{onSelect:C}=e;C&&Z(C,y,x)}function I(y){const{"onUpdate:show":x,onUpdateShow:C}=e;x&&Z(x,y),C&&Z(C,y),n.value=y}function w(){i.value=null,a.value=null,s.value=null}function l(){I(!1)}function u(){j("left")}function g(){j("right")}function S(){j("up")}function _(){j("down")}function O(){const y=R();y?.isLeaf&&t.value&&(K(y.key,y.rawNode),I(!1))}function R(){var y;const{value:x}=o,{value:C}=d;return!x||C===null?null:(y=x.getNode(C))!==null&&y!==void 0?y:null}function j(y){const{value:x}=d,{value:{getFirstAvailableNode:C}}=o;let p=null;if(x===null){const k=C();k!==null&&(p=k.key)}else{const k=R();if(k){let T;switch(y){case"down":T=k.getNext();break;case"up":T=k.getPrev();break;case"right":T=k.getChild();break;case"left":T=k.getParent();break}T&&(p=T.key)}}p!==null&&(i.value=null,a.value=p)}const Q=z(()=>{const{inverted:y}=e,x=A.value,{common:{cubicBezierEaseInOut:C},self:p}=N.value,{padding:k,dividerColor:T,borderRadius:V,optionOpacityDisabled:le,[W("optionIconSuffixWidth",x)]:J,[W("optionSuffixWidth",x)]:Fe,[W("optionIconPrefixWidth",x)]:Be,[W("optionPrefixWidth",x)]:Ee,[W("fontSize",x)]:De,[W("optionHeight",x)]:Le,[W("optionIconSize",x)]:Ge}=p,$={"--n-bezier":C,"--n-font-size":De,"--n-padding":k,"--n-border-radius":V,"--n-option-height":Le,"--n-option-prefix-width":Ee,"--n-option-icon-prefix-width":Be,"--n-option-suffix-width":Fe,"--n-option-icon-suffix-width":J,"--n-option-icon-size":Ge,"--n-divider-color":T,"--n-option-opacity-disabled":le};return y?($["--n-color"]=p.colorInverted,$["--n-option-color-hover"]=p.optionColorHoverInverted,$["--n-option-color-active"]=p.optionColorActiveInverted,$["--n-option-text-color"]=p.optionTextColorInverted,$["--n-option-text-color-hover"]=p.optionTextColorHoverInverted,$["--n-option-text-color-active"]=p.optionTextColorActiveInverted,$["--n-option-text-color-child-active"]=p.optionTextColorChildActiveInverted,$["--n-prefix-color"]=p.prefixColorInverted,$["--n-suffix-color"]=p.suffixColorInverted,$["--n-group-header-text-color"]=p.groupHeaderTextColorInverted):($["--n-color"]=p.color,$["--n-option-color-hover"]=p.optionColorHover,$["--n-option-color-active"]=p.optionColorActive,$["--n-option-text-color"]=p.optionTextColor,$["--n-option-text-color-hover"]=p.optionTextColorHover,$["--n-option-text-color-active"]=p.optionTextColorActive,$["--n-option-text-color-child-active"]=p.optionTextColorChildActive,$["--n-prefix-color"]=p.prefixColor,$["--n-suffix-color"]=p.suffixColor,$["--n-group-header-text-color"]=p.groupHeaderTextColor),$}),M=P?ge("dropdown",z(()=>`${A.value[0]}${e.inverted?"i":""}`),Q,e):void 0;return{mergedClsPrefix:m,mergedTheme:N,mergedSize:A,tmNodes:r,mergedShow:t,handleAfterLeave:()=>{e.animated&&w()},doUpdateShow:I,cssVars:P?void 0:Q,themeClass:M?.themeClass,onRender:M?.onRender}},render(){const e=(o,r,i,a,s)=>{var d;const{mergedClsPrefix:c,menuProps:f}=this;(d=this.onRender)===null||d===void 0||d.call(this);const h=f?.(void 0,this.tmNodes.map(P=>P.rawNode))||{},m={ref:kn(r),class:[o,`${c}-dropdown`,`${c}-dropdown--${this.mergedSize}-size`,this.themeClass],clsPrefix:c,tmNodes:this.tmNodes,style:[...i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:a,onMouseleave:s};return b(Te,me(this.$attrs,m,h))},{mergedTheme:n}=this,t={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return b(gn,Object.assign({},bn(this.$props,dt),t),{trigger:()=>{var o,r;return(r=(o=this.$slots).default)===null||r===void 0?void 0:r.call(o)}})}});export{Sn as C,ut as V,vt as _,pt as a,kn as b,ct as c,Wn as d,xe as h,ft as r,ht as s,yn as u};
