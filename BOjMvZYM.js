import{aS as pe,aD as ot,cK as Ge,bm as st,am as lt,$ as dt,K as ft,a7 as Qe,A,G as P,y as X,aj as _e,aH as b,cm as ye,cE as oe,aA as et,by as je,b6 as qe,bE as Z,Y as ct,D as R,a0 as _,aC as tt,aB as Pe,l as nt,bQ as ae,a6 as Le,ca as me,bp as ut,cF as Ie,az as ht,a8 as L,cJ as We,ax as mt,d as rt,b_ as gt,cL as vt,bA as Fe,cl as bt,au as pt,aR as Te,H as Ne,b3 as Oe,g as yt,co as wt,ct as xt,al as ne,J as ze}from"./CYwyGJdu.js";function kt(n,e,t){var r;const i=pe(n,null);if(i===null)return;const a=(r=ot())===null||r===void 0?void 0:r.proxy;Ge(t,o),o(t.value),st(()=>{o(void 0,t.value)});function o(f,l){if(!i)return;const u=i[e];l!==void 0&&s(u,l),f!==void 0&&d(u,f)}function s(f,l){f[l]||(f[l]=[]),f[l].splice(f[l].findIndex(u=>u===a),1)}function d(f,l){f[l]||(f[l]=[]),~f[l].findIndex(u=>u===a)||f[l].push(a)}}function Rt(n){const{primaryColor:e,opacityDisabled:t,borderRadius:r,textColor3:i}=n;return Object.assign(Object.assign({},dt),{iconColor:i,textColor:"white",loadingColor:e,opacityDisabled:t,railColor:"rgba(0, 0, 0, .14)",railColorActive:e,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${ft(e,{alpha:.2})}`})}const St={common:lt,self:Rt},we=Qe("n-form"),it=Qe("n-form-item-insts"),Ft=A("form",[P("inline",`
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `,[A("form-item",{width:"auto",marginRight:"18px"},[X("&:last-child",{marginRight:0})])])]);var $t=function(n,e,t,r){function i(a){return a instanceof t?a:new t(function(o){o(a)})}return new(t||(t=Promise))(function(a,o){function s(l){try{f(r.next(l))}catch(u){o(u)}}function d(l){try{f(r.throw(l))}catch(u){o(u)}}function f(l){l.done?a(l.value):i(l.value).then(s,d)}f((r=r.apply(n,e||[])).next())})};const _t=Object.assign(Object.assign({},oe.props),{inline:Boolean,labelWidth:[Number,String],labelAlign:String,labelPlacement:{type:String,default:"top"},model:{type:Object,default:()=>{}},rules:Object,disabled:Boolean,size:String,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:!0},onSubmit:{type:Function,default:n=>{n.preventDefault()}},showLabel:{type:Boolean,default:void 0},validateMessages:Object}),yn=_e({name:"Form",props:_t,setup(n){const{mergedClsPrefixRef:e}=ye(n);oe("Form","-form",Ft,et,n,e);const t={},r=Z(void 0),i=f=>{const l=r.value;(l===void 0||f>=l)&&(r.value=f)};function a(){var f;for(const l of qe(t)){const u=t[l];for(const m of u)(f=m.invalidateLabelWidth)===null||f===void 0||f.call(m)}}function o(f){return $t(this,arguments,void 0,function*(l,u=()=>!0){return yield new Promise((m,x)=>{const h=[];for(const g of qe(t)){const k=t[g];for(const c of k)c.path&&h.push(c.internalValidate(null,u))}Promise.all(h).then(g=>{const k=g.some(v=>!v.valid),c=[],C=[];g.forEach(v=>{var w,S;!((w=v.errors)===null||w===void 0)&&w.length&&c.push(v.errors),!((S=v.warnings)===null||S===void 0)&&S.length&&C.push(v.warnings)}),l&&l(c.length?c:void 0,{warnings:C.length?C:void 0}),k?x(c.length?c:void 0):m({warnings:C.length?C:void 0})})})})}function s(){for(const f of qe(t)){const l=t[f];for(const u of l)u.restoreValidation()}}return je(we,{props:n,maxChildLabelWidthRef:r,deriveMaxChildLabelWidth:i}),je(it,{formItems:t}),Object.assign({validate:o,restoreValidation:s,invalidateLabelWidth:a},{mergedClsPrefix:e})},render(){const{mergedClsPrefix:n}=this;return b("form",{class:[`${n}-form`,this.inline&&`${n}-form--inline`],onSubmit:this.onSubmit},this.$slots)}});function le(){return le=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},le.apply(this,arguments)}function qt(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,be(n,e)}function Ae(n){return Ae=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Ae(n)}function be(n,e){return be=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},be(n,e)}function Pt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function $e(n,e,t){return Pt()?$e=Reflect.construct.bind():$e=function(i,a,o){var s=[null];s.push.apply(s,a);var d=Function.bind.apply(i,s),f=new d;return o&&be(f,o.prototype),f},$e.apply(null,arguments)}function Ot(n){return Function.toString.call(n).indexOf("[native code]")!==-1}function Ee(n){var e=typeof Map=="function"?new Map:void 0;return Ee=function(r){if(r===null||!Ot(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(r))return e.get(r);e.set(r,i)}function i(){return $e(r,arguments,Ae(this).constructor)}return i.prototype=Object.create(r.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),be(i,r)},Ee(n)}var zt=/%[sdj%]/g,Ct=function(){};function Ve(n){if(!n||!n.length)return null;var e={};return n.forEach(function(t){var r=t.field;e[r]=e[r]||[],e[r].push(t)}),e}function K(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var i=0,a=t.length;if(typeof n=="function")return n.apply(null,t);if(typeof n=="string"){var o=n.replace(zt,function(s){if(s==="%%")return"%";if(i>=a)return s;switch(s){case"%s":return String(t[i++]);case"%d":return Number(t[i++]);case"%j":try{return JSON.stringify(t[i++])}catch{return"[Circular]"}break;default:return s}});return o}return n}function jt(n){return n==="string"||n==="url"||n==="hex"||n==="email"||n==="date"||n==="pattern"}function E(n,e){return!!(n==null||e==="array"&&Array.isArray(n)&&!n.length||jt(e)&&typeof n=="string"&&!n)}function At(n,e,t){var r=[],i=0,a=n.length;function o(s){r.push.apply(r,s||[]),i++,i===a&&t(r)}n.forEach(function(s){e(s,o)})}function De(n,e,t){var r=0,i=n.length;function a(o){if(o&&o.length){t(o);return}var s=r;r=r+1,s<i?e(n[s],a):t([])}a([])}function Et(n){var e=[];return Object.keys(n).forEach(function(t){e.push.apply(e,n[t]||[])}),e}var He=(function(n){qt(e,n);function e(t,r){var i;return i=n.call(this,"Async Validation Error")||this,i.errors=t,i.fields=r,i}return e})(Ee(Error));function Vt(n,e,t,r,i){if(e.first){var a=new Promise(function(m,x){var h=function(c){return r(c),c.length?x(new He(c,Ve(c))):m(i)},g=Et(n);De(g,t,h)});return a.catch(function(m){return m}),a}var o=e.firstFields===!0?Object.keys(n):e.firstFields||[],s=Object.keys(n),d=s.length,f=0,l=[],u=new Promise(function(m,x){var h=function(k){if(l.push.apply(l,k),f++,f===d)return r(l),l.length?x(new He(l,Ve(l))):m(i)};s.length||(r(l),m(i)),s.forEach(function(g){var k=n[g];o.indexOf(g)!==-1?De(k,t,h):At(k,t,h)})});return u.catch(function(m){return m}),u}function Bt(n){return!!(n&&n.message!==void 0)}function Mt(n,e){for(var t=n,r=0;r<e.length;r++){if(t==null)return t;t=t[e[r]]}return t}function Ke(n,e){return function(t){var r;return n.fullFields?r=Mt(e,n.fullFields):r=e[t.field||n.fullField],Bt(t)?(t.field=t.field||n.fullField,t.fieldValue=r,t):{message:typeof t=="function"?t():t,fieldValue:r,field:t.field||n.fullField}}}function Ue(n,e){if(e){for(var t in e)if(e.hasOwnProperty(t)){var r=e[t];typeof r=="object"&&typeof n[t]=="object"?n[t]=le({},n[t],r):n[t]=r}}return n}var at=function(e,t,r,i,a,o){e.required&&(!r.hasOwnProperty(e.field)||E(t,o||e.type))&&i.push(K(a.messages.required,e.fullField))},It=function(e,t,r,i,a){(/^\s+$/.test(t)||t==="")&&i.push(K(a.messages.whitespace,e.fullField))},Se,Lt=(function(){if(Se)return Se;var n="[a-fA-F\\d:]",e=function(w){return w&&w.includeBoundaries?"(?:(?<=\\s|^)(?="+n+")|(?<="+n+")(?=\\s|$))":""},t="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",r="[a-fA-F\\d]{1,4}",i=(`
(?:
(?:`+r+":){7}(?:"+r+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+r+":){6}(?:"+t+"|:"+r+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+r+":){5}(?::"+t+"|(?::"+r+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+r+":){4}(?:(?::"+r+"){0,1}:"+t+"|(?::"+r+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+r+":){3}(?:(?::"+r+"){0,2}:"+t+"|(?::"+r+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+r+":){2}(?:(?::"+r+"){0,3}:"+t+"|(?::"+r+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+r+":){1}(?:(?::"+r+"){0,4}:"+t+"|(?::"+r+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+r+"){0,5}:"+t+"|(?::"+r+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),a=new RegExp("(?:^"+t+"$)|(?:^"+i+"$)"),o=new RegExp("^"+t+"$"),s=new RegExp("^"+i+"$"),d=function(w){return w&&w.exact?a:new RegExp("(?:"+e(w)+t+e(w)+")|(?:"+e(w)+i+e(w)+")","g")};d.v4=function(v){return v&&v.exact?o:new RegExp(""+e(v)+t+e(v),"g")},d.v6=function(v){return v&&v.exact?s:new RegExp(""+e(v)+i+e(v),"g")};var f="(?:(?:[a-z]+:)?//)",l="(?:\\S+(?::\\S*)?@)?",u=d.v4().source,m=d.v6().source,x="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",h="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",g="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",k="(?::\\d{2,5})?",c='(?:[/?#][^\\s"]*)?',C="(?:"+f+"|www\\.)"+l+"(?:localhost|"+u+"|"+m+"|"+x+h+g+")"+k+c;return Se=new RegExp("(?:^"+C+"$)","i"),Se}),Ye={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},ge={integer:function(e){return ge.number(e)&&parseInt(e,10)===e},float:function(e){return ge.number(e)&&!ge.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!ge.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(Ye.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(Lt())},hex:function(e){return typeof e=="string"&&!!e.match(Ye.hex)}},Wt=function(e,t,r,i,a){if(e.required&&t===void 0){at(e,t,r,i,a);return}var o=["integer","float","array","regexp","object","method","email","number","date","url","hex"],s=e.type;o.indexOf(s)>-1?ge[s](t)||i.push(K(a.messages.types[s],e.fullField,e.type)):s&&typeof t!==e.type&&i.push(K(a.messages.types[s],e.fullField,e.type))},Tt=function(e,t,r,i,a){var o=typeof e.len=="number",s=typeof e.min=="number",d=typeof e.max=="number",f=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,l=t,u=null,m=typeof t=="number",x=typeof t=="string",h=Array.isArray(t);if(m?u="number":x?u="string":h&&(u="array"),!u)return!1;h&&(l=t.length),x&&(l=t.replace(f,"_").length),o?l!==e.len&&i.push(K(a.messages[u].len,e.fullField,e.len)):s&&!d&&l<e.min?i.push(K(a.messages[u].min,e.fullField,e.min)):d&&!s&&l>e.max?i.push(K(a.messages[u].max,e.fullField,e.max)):s&&d&&(l<e.min||l>e.max)&&i.push(K(a.messages[u].range,e.fullField,e.min,e.max))},fe="enum",Nt=function(e,t,r,i,a){e[fe]=Array.isArray(e[fe])?e[fe]:[],e[fe].indexOf(t)===-1&&i.push(K(a.messages[fe],e.fullField,e[fe].join(", ")))},Dt=function(e,t,r,i,a){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(t)||i.push(K(a.messages.pattern.mismatch,e.fullField,t,e.pattern));else if(typeof e.pattern=="string"){var o=new RegExp(e.pattern);o.test(t)||i.push(K(a.messages.pattern.mismatch,e.fullField,t,e.pattern))}}},p={required:at,whitespace:It,type:Wt,range:Tt,enum:Nt,pattern:Dt},Ht=function(e,t,r,i,a){var o=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(E(t,"string")&&!e.required)return r();p.required(e,t,i,o,a,"string"),E(t,"string")||(p.type(e,t,i,o,a),p.range(e,t,i,o,a),p.pattern(e,t,i,o,a),e.whitespace===!0&&p.whitespace(e,t,i,o,a))}r(o)},Kt=function(e,t,r,i,a){var o=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(E(t)&&!e.required)return r();p.required(e,t,i,o,a),t!==void 0&&p.type(e,t,i,o,a)}r(o)},Ut=function(e,t,r,i,a){var o=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(t===""&&(t=void 0),E(t)&&!e.required)return r();p.required(e,t,i,o,a),t!==void 0&&(p.type(e,t,i,o,a),p.range(e,t,i,o,a))}r(o)},Yt=function(e,t,r,i,a){var o=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(E(t)&&!e.required)return r();p.required(e,t,i,o,a),t!==void 0&&p.type(e,t,i,o,a)}r(o)},Jt=function(e,t,r,i,a){var o=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(E(t)&&!e.required)return r();p.required(e,t,i,o,a),E(t)||p.type(e,t,i,o,a)}r(o)},Xt=function(e,t,r,i,a){var o=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(E(t)&&!e.required)return r();p.required(e,t,i,o,a),t!==void 0&&(p.type(e,t,i,o,a),p.range(e,t,i,o,a))}r(o)},Zt=function(e,t,r,i,a){var o=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(E(t)&&!e.required)return r();p.required(e,t,i,o,a),t!==void 0&&(p.type(e,t,i,o,a),p.range(e,t,i,o,a))}r(o)},Gt=function(e,t,r,i,a){var o=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(t==null&&!e.required)return r();p.required(e,t,i,o,a,"array"),t!=null&&(p.type(e,t,i,o,a),p.range(e,t,i,o,a))}r(o)},Qt=function(e,t,r,i,a){var o=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(E(t)&&!e.required)return r();p.required(e,t,i,o,a),t!==void 0&&p.type(e,t,i,o,a)}r(o)},en="enum",tn=function(e,t,r,i,a){var o=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(E(t)&&!e.required)return r();p.required(e,t,i,o,a),t!==void 0&&p[en](e,t,i,o,a)}r(o)},nn=function(e,t,r,i,a){var o=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(E(t,"string")&&!e.required)return r();p.required(e,t,i,o,a),E(t,"string")||p.pattern(e,t,i,o,a)}r(o)},rn=function(e,t,r,i,a){var o=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(E(t,"date")&&!e.required)return r();if(p.required(e,t,i,o,a),!E(t,"date")){var d;t instanceof Date?d=t:d=new Date(t),p.type(e,d,i,o,a),d&&p.range(e,d.getTime(),i,o,a)}}r(o)},an=function(e,t,r,i,a){var o=[],s=Array.isArray(t)?"array":typeof t;p.required(e,t,i,o,a,s),r(o)},Ce=function(e,t,r,i,a){var o=e.type,s=[],d=e.required||!e.required&&i.hasOwnProperty(e.field);if(d){if(E(t,o)&&!e.required)return r();p.required(e,t,i,s,a,o),E(t,o)||p.type(e,t,i,s,a)}r(s)},on=function(e,t,r,i,a){var o=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(E(t)&&!e.required)return r();p.required(e,t,i,o,a)}r(o)},ve={string:Ht,method:Kt,number:Ut,boolean:Yt,regexp:Jt,integer:Xt,float:Zt,array:Gt,object:Qt,enum:tn,pattern:nn,date:rn,url:Ce,hex:Ce,email:Ce,required:an,any:on};function Be(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var Me=Be(),ce=(function(){function n(t){this.rules=null,this._messages=Me,this.define(t)}var e=n.prototype;return e.define=function(r){var i=this;if(!r)throw new Error("Cannot configure a schema with no rules");if(typeof r!="object"||Array.isArray(r))throw new Error("Rules must be an object");this.rules={},Object.keys(r).forEach(function(a){var o=r[a];i.rules[a]=Array.isArray(o)?o:[o]})},e.messages=function(r){return r&&(this._messages=Ue(Be(),r)),this._messages},e.validate=function(r,i,a){var o=this;i===void 0&&(i={}),a===void 0&&(a=function(){});var s=r,d=i,f=a;if(typeof d=="function"&&(f=d,d={}),!this.rules||Object.keys(this.rules).length===0)return f&&f(null,s),Promise.resolve(s);function l(g){var k=[],c={};function C(w){if(Array.isArray(w)){var S;k=(S=k).concat.apply(S,w)}else k.push(w)}for(var v=0;v<g.length;v++)C(g[v]);k.length?(c=Ve(k),f(k,c)):f(null,s)}if(d.messages){var u=this.messages();u===Me&&(u=Be()),Ue(u,d.messages),d.messages=u}else d.messages=this.messages();var m={},x=d.keys||Object.keys(this.rules);x.forEach(function(g){var k=o.rules[g],c=s[g];k.forEach(function(C){var v=C;typeof v.transform=="function"&&(s===r&&(s=le({},s)),c=s[g]=v.transform(c)),typeof v=="function"?v={validator:v}:v=le({},v),v.validator=o.getValidationMethod(v),v.validator&&(v.field=g,v.fullField=v.fullField||g,v.type=o.getType(v),m[g]=m[g]||[],m[g].push({rule:v,value:c,source:s,field:g}))})});var h={};return Vt(m,d,function(g,k){var c=g.rule,C=(c.type==="object"||c.type==="array")&&(typeof c.fields=="object"||typeof c.defaultField=="object");C=C&&(c.required||!c.required&&g.value),c.field=g.field;function v(j,U){return le({},U,{fullField:c.fullField+"."+j,fullFields:c.fullFields?[].concat(c.fullFields,[j]):[j]})}function w(j){j===void 0&&(j=[]);var U=Array.isArray(j)?j:[j];!d.suppressWarning&&U.length&&n.warning("async-validator:",U),U.length&&c.message!==void 0&&(U=[].concat(c.message));var V=U.map(Ke(c,s));if(d.first&&V.length)return h[c.field]=1,k(V);if(!C)k(V);else{if(c.required&&!g.value)return c.message!==void 0?V=[].concat(c.message).map(Ke(c,s)):d.error&&(V=[d.error(c,K(d.messages.required,c.field))]),k(V);var y={};c.defaultField&&Object.keys(g.value).map(function(z){y[z]=c.defaultField}),y=le({},y,g.rule.fields);var D={};Object.keys(y).forEach(function(z){var O=y[z],se=Array.isArray(O)?O:[O];D[z]=se.map(v.bind(null,z))});var H=new n(D);H.messages(d.messages),g.rule.options&&(g.rule.options.messages=d.messages,g.rule.options.error=d.error),H.validate(g.value,g.rule.options||d,function(z){var O=[];V&&V.length&&O.push.apply(O,V),z&&z.length&&O.push.apply(O,z),k(O.length?O:null)})}}var S;if(c.asyncValidator)S=c.asyncValidator(c,g.value,w,g.source,d);else if(c.validator){try{S=c.validator(c,g.value,w,g.source,d)}catch(j){console.error?.(j),d.suppressValidatorError||setTimeout(function(){throw j},0),w(j.message)}S===!0?w():S===!1?w(typeof c.message=="function"?c.message(c.fullField||c.field):c.message||(c.fullField||c.field)+" fails"):S instanceof Array?w(S):S instanceof Error&&w(S.message)}S&&S.then&&S.then(function(){return w()},function(j){return w(j)})},function(g){l(g)},s)},e.getType=function(r){if(r.type===void 0&&r.pattern instanceof RegExp&&(r.type="pattern"),typeof r.validator!="function"&&r.type&&!ve.hasOwnProperty(r.type))throw new Error(K("Unknown rule type %s",r.type));return r.type||"string"},e.getValidationMethod=function(r){if(typeof r.validator=="function")return r.validator;var i=Object.keys(r),a=i.indexOf("message");return a!==-1&&i.splice(a,1),i.length===1&&i[0]==="required"?ve.required:ve[this.getType(r)]||void 0},n})();ce.register=function(e,t){if(typeof t!="function")throw new Error("Cannot register a validator by type, validator is not a function");ve[e]=t};ce.warning=Ct;ce.messages=Me;ce.validators=ve;const{cubicBezierEaseInOut:Je}=ct;function sn({name:n="fade-down",fromOffset:e="-4px",enterDuration:t=".3s",leaveDuration:r=".3s",enterCubicBezier:i=Je,leaveCubicBezier:a=Je}={}){return[X(`&.${n}-transition-enter-from, &.${n}-transition-leave-to`,{opacity:0,transform:`translateY(${e})`}),X(`&.${n}-transition-enter-to, &.${n}-transition-leave-from`,{opacity:1,transform:"translateY(0)"}),X(`&.${n}-transition-leave-active`,{transition:`opacity ${r} ${a}, transform ${r} ${a}`}),X(`&.${n}-transition-enter-active`,{transition:`opacity ${t} ${i}, transform ${t} ${i}`})]}const ln=A("form-item",`
 display: grid;
 line-height: var(--n-line-height);
`,[A("form-item-label",`
 grid-area: label;
 align-items: center;
 line-height: 1.25;
 text-align: var(--n-label-text-align);
 font-size: var(--n-label-font-size);
 min-height: var(--n-label-height);
 padding: var(--n-label-padding);
 color: var(--n-label-text-color);
 transition: color .3s var(--n-bezier);
 box-sizing: border-box;
 font-weight: var(--n-label-font-weight);
 `,[R("asterisk",`
 white-space: nowrap;
 user-select: none;
 -webkit-user-select: none;
 color: var(--n-asterisk-color);
 transition: color .3s var(--n-bezier);
 `),R("asterisk-placeholder",`
 grid-area: mark;
 user-select: none;
 -webkit-user-select: none;
 visibility: hidden; 
 `)]),A("form-item-blank",`
 grid-area: blank;
 min-height: var(--n-blank-height);
 `),P("auto-label-width",[A("form-item-label","white-space: nowrap;")]),P("left-labelled",`
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 grid-template-rows: auto 1fr;
 align-items: flex-start;
 `,[A("form-item-label",`
 display: grid;
 grid-template-columns: 1fr auto;
 min-height: var(--n-blank-height);
 height: auto;
 box-sizing: border-box;
 flex-shrink: 0;
 flex-grow: 0;
 `,[P("reverse-columns-space",`
 grid-template-columns: auto 1fr;
 `),P("left-mark",`
 grid-template-areas:
 "mark text"
 ". text";
 `),P("right-mark",`
 grid-template-areas: 
 "text mark"
 "text .";
 `),P("right-hanging-mark",`
 grid-template-areas: 
 "text mark"
 "text .";
 `),R("text",`
 grid-area: text; 
 `),R("asterisk",`
 grid-area: mark; 
 align-self: end;
 `)])]),P("top-labelled",`
 grid-template-areas:
 "label"
 "blank"
 "feedback";
 grid-template-rows: minmax(var(--n-label-height), auto) 1fr;
 grid-template-columns: minmax(0, 100%);
 `,[P("no-label",`
 grid-template-areas:
 "blank"
 "feedback";
 grid-template-rows: 1fr;
 `),A("form-item-label",`
 display: flex;
 align-items: flex-start;
 justify-content: var(--n-label-text-align);
 `)]),A("form-item-blank",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `),A("form-item-feedback-wrapper",`
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `,[X("&:not(:empty)",`
 padding: var(--n-feedback-padding);
 `),A("form-item-feedback",{transition:"color .3s var(--n-bezier)",color:"var(--n-feedback-text-color)"},[P("warning",{color:"var(--n-feedback-text-color-warning)"}),P("error",{color:"var(--n-feedback-text-color-error)"}),sn({fromOffset:"-3px",enterDuration:".3s",leaveDuration:".2s"})])])]);function dn(n){const e=pe(we,null),{mergedComponentPropsRef:t}=ye(n);return{mergedSize:_(()=>{var r,i;if(n.size!==void 0)return n.size;if(e?.props.size!==void 0)return e.props.size;const a=(i=(r=t?.value)===null||r===void 0?void 0:r.Form)===null||i===void 0?void 0:i.size;return a||"medium"})}}function fn(n){const e=pe(we,null),t=_(()=>{const{labelPlacement:h}=n;return h!==void 0?h:e?.props.labelPlacement?e.props.labelPlacement:"top"}),r=_(()=>t.value==="left"&&(n.labelWidth==="auto"||e?.props.labelWidth==="auto")),i=_(()=>{if(t.value==="top")return;const{labelWidth:h}=n;if(h!==void 0&&h!=="auto")return Pe(h);if(r.value){const g=e?.maxChildLabelWidthRef.value;return g!==void 0?Pe(g):void 0}if(e?.props.labelWidth!==void 0)return Pe(e.props.labelWidth)}),a=_(()=>{const{labelAlign:h}=n;if(h)return h;if(e?.props.labelAlign)return e.props.labelAlign}),o=_(()=>{var h;return[(h=n.labelProps)===null||h===void 0?void 0:h.style,n.labelStyle,{width:i.value}]}),s=_(()=>{const{showRequireMark:h}=n;return h!==void 0?h:e?.props.showRequireMark}),d=_(()=>{const{requireMarkPlacement:h}=n;return h!==void 0?h:e?.props.requireMarkPlacement||"right"}),f=Z(!1),l=Z(!1),u=_(()=>{const{validationStatus:h}=n;if(h!==void 0)return h;if(f.value)return"error";if(l.value)return"warning"}),m=_(()=>{const{showFeedback:h}=n;return h!==void 0?h:e?.props.showFeedback!==void 0?e.props.showFeedback:!0}),x=_(()=>{const{showLabel:h}=n;return h!==void 0?h:e?.props.showLabel!==void 0?e.props.showLabel:!0});return{validationErrored:f,validationWarned:l,mergedLabelStyle:o,mergedLabelPlacement:t,mergedLabelAlign:a,mergedShowRequireMark:s,mergedRequireMarkPlacement:d,mergedValidationStatus:u,mergedShowFeedback:m,mergedShowLabel:x,isAutoLabelWidth:r}}function cn(n){const e=pe(we,null),t=_(()=>{const{rulePath:o}=n;if(o!==void 0)return o;const{path:s}=n;if(s!==void 0)return s}),r=_(()=>{const o=[],{rule:s}=n;if(s!==void 0&&(Array.isArray(s)?o.push(...s):o.push(s)),e){const{rules:d}=e.props,{value:f}=t;if(d!==void 0&&f!==void 0){const l=tt(d,f);l!==void 0&&(Array.isArray(l)?o.push(...l):o.push(l))}}return o}),i=_(()=>r.value.some(o=>o.required)),a=_(()=>i.value||n.required);return{mergedRules:r,mergedRequired:a}}var Xe=function(n,e,t,r){function i(a){return a instanceof t?a:new t(function(o){o(a)})}return new(t||(t=Promise))(function(a,o){function s(l){try{f(r.next(l))}catch(u){o(u)}}function d(l){try{f(r.throw(l))}catch(u){o(u)}}function f(l){l.done?a(l.value):i(l.value).then(s,d)}f((r=r.apply(n,e||[])).next())})};const un=Object.assign(Object.assign({},oe.props),{label:String,labelWidth:[Number,String],labelStyle:[String,Object],labelAlign:String,labelPlacement:String,path:String,first:Boolean,rulePath:String,required:Boolean,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:void 0},rule:[Object,Array],size:String,ignorePathChange:Boolean,validationStatus:String,feedback:String,feedbackClass:String,feedbackStyle:[String,Object],showLabel:{type:Boolean,default:void 0},labelProps:Object,contentClass:String,contentStyle:[String,Object]});function Ze(n,e){return(...t)=>{try{const r=n(...t);return!e&&(typeof r=="boolean"||r instanceof Error||Array.isArray(r))||r?.then?r:(r===void 0||We("form-item/validate",`You return a ${typeof r} typed value in the validator method, which is not recommended. Please use ${e?"`Promise`":"`boolean`, `Error` or `Promise`"} typed value instead.`),!0)}catch(r){We("form-item/validate","An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."),console.error(r);return}}}const wn=_e({name:"FormItem",props:un,slots:Object,setup(n){kt(it,"formItems",me(n,"path"));const{mergedClsPrefixRef:e,inlineThemeDisabled:t}=ye(n),r=pe(we,null),i=dn(n),a=fn(n),{validationErrored:o,validationWarned:s}=a,{mergedRequired:d,mergedRules:f}=cn(n),{mergedSize:l}=i,{mergedLabelPlacement:u,mergedLabelAlign:m,mergedRequireMarkPlacement:x}=a,h=Z([]),g=Z(Le()),k=Z(null),c=r?me(r.props,"disabled"):Z(!1),C=oe("Form","-form-item",ln,et,n,e);Ge(me(n,"path"),()=>{n.ignorePathChange||w()});function v(){if(!a.isAutoLabelWidth.value)return;const F=k.value;if(F!==null){const W=F.style.whiteSpace;F.style.whiteSpace="nowrap",F.style.width="",r?.deriveMaxChildLabelWidth(Number(getComputedStyle(F).width.slice(0,-2))),F.style.whiteSpace=W}}function w(){h.value=[],o.value=!1,s.value=!1,n.feedback&&(g.value=Le())}const S=(...F)=>Xe(this,[...F],void 0,function*(W=null,J=()=>!0,B={suppressWarning:!0}){const{path:M}=n;B?B.first||(B.first=n.first):B={};const{value:te}=f,re=r?tt(r.props.model,M||""):void 0,T={},Y={},G=(W?te.filter($=>Array.isArray($.trigger)?$.trigger.includes(W):$.trigger===W):te).filter(J).map(($,N)=>{const q=Object.assign({},$);if(q.validator&&(q.validator=Ze(q.validator,!1)),q.asyncValidator&&(q.asyncValidator=Ze(q.asyncValidator,!0)),q.renderMessage){const Re=`__renderMessage__${N}`;Y[Re]=q.message,q.message=Re,T[Re]=q.renderMessage}return q}),Q=G.filter($=>$.level!=="warning"),de=G.filter($=>$.level==="warning"),I={valid:!0,errors:void 0,warnings:void 0};if(!G.length)return I;const ee=M??"__n_no_path__",ie=new ce({[ee]:Q}),xe=new ce({[ee]:de}),{validateMessages:ue}=r?.props||{};ue&&(ie.messages(ue),xe.messages(ue));const ke=$=>{h.value=$.map(N=>{const q=N?.message||"";return{key:q,render:()=>q.startsWith("__renderMessage__")?T[q]():q}}),$.forEach(N=>{var q;!((q=N.message)===null||q===void 0)&&q.startsWith("__renderMessage__")&&(N.message=Y[N.message])})};if(Q.length){const $=yield new Promise(N=>{ie.validate({[ee]:re},B,N)});$?.length&&(I.valid=!1,I.errors=$,ke($))}if(de.length&&!I.errors){const $=yield new Promise(N=>{xe.validate({[ee]:re},B,N)});$?.length&&(ke($),I.warnings=$)}return!I.errors&&!I.warnings?w():(o.value=!!I.errors,s.value=!!I.warnings),I});function j(){S("blur")}function U(){S("change")}function V(){S("focus")}function y(){S("input")}function D(F,W){return Xe(this,void 0,void 0,function*(){let J,B,M,te;return typeof F=="string"?(J=F,B=W):F!==null&&typeof F=="object"&&(J=F.trigger,B=F.callback,M=F.shouldRuleBeApplied,te=F.options),yield new Promise((re,T)=>{S(J,M,te).then(({valid:Y,errors:G,warnings:Q})=>{Y?(B&&B(void 0,{warnings:Q}),re({warnings:Q})):(B&&B(G,{warnings:Q}),T(G))})})})}je(ht,{path:me(n,"path"),disabled:c,mergedSize:i.mergedSize,mergedValidationStatus:a.mergedValidationStatus,restoreValidation:w,handleContentBlur:j,handleContentChange:U,handleContentFocus:V,handleContentInput:y});const H={validate:D,restoreValidation:w,internalValidate:S,invalidateLabelWidth:v};ut(v);const z=_(()=>{var F;const{value:W}=l,{value:J}=u,B=J==="top"?"vertical":"horizontal",{common:{cubicBezierEaseInOut:M},self:{labelTextColor:te,asteriskColor:re,lineHeight:T,feedbackTextColor:Y,feedbackTextColorWarning:G,feedbackTextColorError:Q,feedbackPadding:de,labelFontWeight:I,[L("labelHeight",W)]:ee,[L("blankHeight",W)]:ie,[L("feedbackFontSize",W)]:xe,[L("feedbackHeight",W)]:ue,[L("labelPadding",B)]:ke,[L("labelTextAlign",B)]:$,[L(L("labelFontSize",J),W)]:N}}=C.value;let q=(F=m.value)!==null&&F!==void 0?F:$;return J==="top"&&(q=q==="right"?"flex-end":"flex-start"),{"--n-bezier":M,"--n-line-height":T,"--n-blank-height":ie,"--n-label-font-size":N,"--n-label-text-align":q,"--n-label-height":ee,"--n-label-padding":ke,"--n-label-font-weight":I,"--n-asterisk-color":re,"--n-label-text-color":te,"--n-feedback-padding":de,"--n-feedback-font-size":xe,"--n-feedback-height":ue,"--n-feedback-text-color":Y,"--n-feedback-text-color-warning":G,"--n-feedback-text-color-error":Q}}),O=t?Ie("form-item",_(()=>{var F;return`${l.value[0]}${u.value[0]}${((F=m.value)===null||F===void 0?void 0:F[0])||""}`}),z,n):void 0,se=_(()=>u.value==="left"&&x.value==="left"&&m.value==="left");return Object.assign(Object.assign(Object.assign(Object.assign({labelElementRef:k,mergedClsPrefix:e,mergedRequired:d,feedbackId:g,renderExplains:h,reverseColSpace:se},a),i),H),{cssVars:t?void 0:z,themeClass:O?.themeClass,onRender:O?.onRender})},render(){const{$slots:n,mergedClsPrefix:e,mergedShowLabel:t,mergedShowRequireMark:r,mergedRequireMarkPlacement:i,onRender:a}=this,o=r!==void 0?r:this.mergedRequired;a?.();const s=()=>{const d=this.$slots.label?this.$slots.label():this.label;if(!d)return null;const f=b("span",{class:`${e}-form-item-label__text`},d),l=o?b("span",{class:`${e}-form-item-label__asterisk`},i!=="left"?" *":"* "):i==="right-hanging"&&b("span",{class:`${e}-form-item-label__asterisk-placeholder`}," *"),{labelProps:u}=this;return b("label",Object.assign({},u,{class:[u?.class,`${e}-form-item-label`,`${e}-form-item-label--${i}-mark`,this.reverseColSpace&&`${e}-form-item-label--reverse-columns-space`],style:this.mergedLabelStyle,ref:"labelElementRef"}),i==="left"?[l,f]:[f,l])};return b("div",{class:[`${e}-form-item`,this.themeClass,`${e}-form-item--${this.mergedSize}-size`,`${e}-form-item--${this.mergedLabelPlacement}-labelled`,this.isAutoLabelWidth&&`${e}-form-item--auto-label-width`,!t&&`${e}-form-item--no-label`],style:this.cssVars},t&&s(),b("div",{class:[`${e}-form-item-blank`,this.contentClass,this.mergedValidationStatus&&`${e}-form-item-blank--${this.mergedValidationStatus}`],style:this.contentStyle},n),this.mergedShowFeedback?b("div",{key:this.feedbackId,style:this.feedbackStyle,class:[`${e}-form-item-feedback-wrapper`,this.feedbackClass]},b(nt,{name:"fade-down-transition",mode:"out-in"},{default:()=>{const{mergedValidationStatus:d}=this;return ae(n.feedback,f=>{var l;const{feedback:u}=this,m=f||u?b("div",{key:"__feedback__",class:`${e}-form-item-feedback__line`},f||u):this.renderExplains.length?(l=this.renderExplains)===null||l===void 0?void 0:l.map(({key:x,render:h})=>b("div",{key:x,class:`${e}-form-item-feedback__line`},h())):null;return m?d==="warning"?b("div",{key:"controlled-warning",class:`${e}-form-item-feedback ${e}-form-item-feedback--warning`},m):d==="error"?b("div",{key:"controlled-error",class:`${e}-form-item-feedback ${e}-form-item-feedback--error`},m):d==="success"?b("div",{key:"controlled-success",class:`${e}-form-item-feedback ${e}-form-item-feedback--success`},m):b("div",{key:"controlled-default",class:`${e}-form-item-feedback`},m):null})}})):null)}}),hn=X([X("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),A("spin-container",`
 position: relative;
 `,[A("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[mt()])]),A("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),A("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[P("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),A("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),A("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[P("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),mn={small:20,medium:18,large:16},gn=Object.assign(Object.assign(Object.assign({},oe.props),{contentClass:String,contentStyle:[Object,String],description:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),pt),xn=_e({name:"Spin",props:gn,slots:Object,setup(n){const{mergedClsPrefixRef:e,inlineThemeDisabled:t}=ye(n),r=oe("Spin","-spin",hn,gt,n,e),i=_(()=>{const{size:d}=n,{common:{cubicBezierEaseInOut:f},self:l}=r.value,{opacitySpinning:u,color:m,textColor:x}=l,h=typeof d=="number"?Fe(d):l[L("size",d)];return{"--n-bezier":f,"--n-opacity-spinning":u,"--n-size":h,"--n-color":m,"--n-text-color":x}}),a=t?Ie("spin",_(()=>{const{size:d}=n;return typeof d=="number"?String(d):d[0]}),i,n):void 0,o=bt(n,["spinning","show"]),s=Z(!1);return vt(d=>{let f;if(o.value){const{delay:l}=n;if(l){f=window.setTimeout(()=>{s.value=!0},l),d(()=>{clearTimeout(f)});return}}s.value=o.value}),{mergedClsPrefix:e,active:s,mergedStrokeWidth:_(()=>{const{strokeWidth:d}=n;if(d!==void 0)return d;const{size:f}=n;return mn[typeof f=="number"?"medium":f]}),cssVars:t?void 0:i,themeClass:a?.themeClass,onRender:a?.onRender}},render(){var n,e;const{$slots:t,mergedClsPrefix:r,description:i}=this,a=t.icon&&this.rotate,o=(i||t.description)&&b("div",{class:`${r}-spin-description`},i||((n=t.description)===null||n===void 0?void 0:n.call(t))),s=t.icon?b("div",{class:[`${r}-spin-body`,this.themeClass]},b("div",{class:[`${r}-spin`,a&&`${r}-spin--rotate`],style:t.default?"":this.cssVars},t.icon()),o):b("div",{class:[`${r}-spin-body`,this.themeClass]},b(rt,{clsPrefix:r,style:t.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,radius:this.radius,scale:this.scale,class:`${r}-spin`}),o);return(e=this.onRender)===null||e===void 0||e.call(this),t.default?b("div",{class:[`${r}-spin-container`,this.themeClass],style:this.cssVars},b("div",{class:[`${r}-spin-content`,this.active&&`${r}-spin-content--spinning`,this.contentClass],style:this.contentStyle},t),b(nt,{name:"fade-in-transition"},{default:()=>this.active?s:null})):s}}),vn=A("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[R("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),R("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),R("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),A("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[Te({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),R("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),R("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),R("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),X("&:focus",[R("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),P("round",[R("rail","border-radius: calc(var(--n-rail-height) / 2);",[R("button","border-radius: calc(var(--n-button-height) / 2);")])]),Ne("disabled",[Ne("icon",[P("rubber-band",[P("pressed",[R("rail",[R("button","max-width: var(--n-button-width-pressed);")])]),R("rail",[X("&:active",[R("button","max-width: var(--n-button-width-pressed);")])]),P("active",[P("pressed",[R("rail",[R("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),R("rail",[X("&:active",[R("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),P("active",[R("rail",[R("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),R("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[R("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[Te()]),R("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),P("active",[R("rail","background-color: var(--n-rail-color-active);")]),P("loading",[R("rail",`
 cursor: wait;
 `)]),P("disabled",[R("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),bn=Object.assign(Object.assign({},oe.props),{size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]});let he;const kn=_e({name:"Switch",props:bn,slots:Object,setup(n){he===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?he=CSS.supports("width","max(1px)"):he=!1:he=!0);const{mergedClsPrefixRef:e,inlineThemeDisabled:t,mergedComponentPropsRef:r}=ye(n),i=oe("Switch","-switch",vn,St,n,e),a=wt(n,{mergedSize(y){var D,H;if(n.size!==void 0)return n.size;if(y)return y.mergedSize.value;const z=(H=(D=r?.value)===null||D===void 0?void 0:D.Switch)===null||H===void 0?void 0:H.size;return z||"medium"}}),{mergedSizeRef:o,mergedDisabledRef:s}=a,d=Z(n.defaultValue),f=me(n,"value"),l=xt(f,d),u=_(()=>l.value===n.checkedValue),m=Z(!1),x=Z(!1),h=_(()=>{const{railStyle:y}=n;if(y)return y({focused:x.value,checked:u.value})});function g(y){const{"onUpdate:value":D,onChange:H,onUpdateValue:z}=n,{nTriggerFormInput:O,nTriggerFormChange:se}=a;D&&ze(D,y),z&&ze(z,y),H&&ze(H,y),d.value=y,O(),se()}function k(){const{nTriggerFormFocus:y}=a;y()}function c(){const{nTriggerFormBlur:y}=a;y()}function C(){n.loading||s.value||(l.value!==n.checkedValue?g(n.checkedValue):g(n.uncheckedValue))}function v(){x.value=!0,k()}function w(){x.value=!1,c(),m.value=!1}function S(y){n.loading||s.value||y.key===" "&&(l.value!==n.checkedValue?g(n.checkedValue):g(n.uncheckedValue),m.value=!1)}function j(y){n.loading||s.value||y.key===" "&&(y.preventDefault(),m.value=!0)}const U=_(()=>{const{value:y}=o,{self:{opacityDisabled:D,railColor:H,railColorActive:z,buttonBoxShadow:O,buttonColor:se,boxShadowFocus:F,loadingColor:W,textColor:J,iconColor:B,[L("buttonHeight",y)]:M,[L("buttonWidth",y)]:te,[L("buttonWidthPressed",y)]:re,[L("railHeight",y)]:T,[L("railWidth",y)]:Y,[L("railBorderRadius",y)]:G,[L("buttonBorderRadius",y)]:Q},common:{cubicBezierEaseInOut:de}}=i.value;let I,ee,ie;return he?(I=`calc((${T} - ${M}) / 2)`,ee=`max(${T}, ${M})`,ie=`max(${Y}, calc(${Y} + ${M} - ${T}))`):(I=Fe((ne(T)-ne(M))/2),ee=Fe(Math.max(ne(T),ne(M))),ie=ne(T)>ne(M)?Y:Fe(ne(Y)+ne(M)-ne(T))),{"--n-bezier":de,"--n-button-border-radius":Q,"--n-button-box-shadow":O,"--n-button-color":se,"--n-button-width":te,"--n-button-width-pressed":re,"--n-button-height":M,"--n-height":ee,"--n-offset":I,"--n-opacity-disabled":D,"--n-rail-border-radius":G,"--n-rail-color":H,"--n-rail-color-active":z,"--n-rail-height":T,"--n-rail-width":Y,"--n-width":ie,"--n-box-shadow-focus":F,"--n-loading-color":W,"--n-text-color":J,"--n-icon-color":B}}),V=t?Ie("switch",_(()=>o.value[0]),U,n):void 0;return{handleClick:C,handleBlur:w,handleFocus:v,handleKeyup:S,handleKeydown:j,mergedRailStyle:h,pressed:m,mergedClsPrefix:e,mergedValue:l,checked:u,mergedDisabled:s,cssVars:t?void 0:U,themeClass:V?.themeClass,onRender:V?.onRender}},render(){const{mergedClsPrefix:n,mergedDisabled:e,checked:t,mergedRailStyle:r,onRender:i,$slots:a}=this;i?.();const{checked:o,unchecked:s,icon:d,"checked-icon":f,"unchecked-icon":l}=a,u=!(Oe(d)&&Oe(f)&&Oe(l));return b("div",{role:"switch","aria-checked":t,class:[`${n}-switch`,this.themeClass,u&&`${n}-switch--icon`,t&&`${n}-switch--active`,e&&`${n}-switch--disabled`,this.round&&`${n}-switch--round`,this.loading&&`${n}-switch--loading`,this.pressed&&`${n}-switch--pressed`,this.rubberBand&&`${n}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},b("div",{class:`${n}-switch__rail`,"aria-hidden":"true",style:r},ae(o,m=>ae(s,x=>m||x?b("div",{"aria-hidden":!0,class:`${n}-switch__children-placeholder`},b("div",{class:`${n}-switch__rail-placeholder`},b("div",{class:`${n}-switch__button-placeholder`}),m),b("div",{class:`${n}-switch__rail-placeholder`},b("div",{class:`${n}-switch__button-placeholder`}),x)):null)),b("div",{class:`${n}-switch__button`},ae(d,m=>ae(f,x=>ae(l,h=>b(yt,null,{default:()=>this.loading?b(rt,Object.assign({key:"loading",clsPrefix:n,strokeWidth:20},this.spinProps)):this.checked&&(x||m)?b("div",{class:`${n}-switch__button-icon`,key:x?"checked-icon":"icon"},x||m):!this.checked&&(h||m)?b("div",{class:`${n}-switch__button-icon`,key:h?"unchecked-icon":"icon"},h||m):null})))),ae(o,m=>m&&b("div",{key:"checked",class:`${n}-switch__checked`},m)),ae(s,m=>m&&b("div",{key:"unchecked",class:`${n}-switch__unchecked`},m)))))}});export{yn as N,wn as a,xn as b,kn as c};
