import{A as l,H as d,y as o,G as i,D as c,ak as g,aH as m,cn as b,cC as f,bA as $,cz as h,w as y,bN as a}from"./-8RROWZu.js";const t="0!important",p="-1px!important";function s(r){return i(`${r}-type`,[o("& +",[l("button",{},[i(`${r}-type`,[c("border",{borderLeftWidth:t}),c("state-border",{left:p})])])])])}function n(r){return i(`${r}-type`,[o("& +",[l("button",[i(`${r}-type`,[c("border",{borderTopWidth:t}),c("state-border",{top:p})])])])])}const x=l("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[d("vertical",{flexDirection:"row"},[d("rtl",[l("button",[o("&:first-child:not(:last-child)",`
 margin-right: ${t};
 border-top-right-radius: ${t};
 border-bottom-right-radius: ${t};
 `),o("&:last-child:not(:first-child)",`
 margin-left: ${t};
 border-top-left-radius: ${t};
 border-bottom-left-radius: ${t};
 `),o("&:not(:first-child):not(:last-child)",`
 margin-left: ${t};
 margin-right: ${t};
 border-radius: ${t};
 `),s("default"),i("ghost",[s("primary"),s("info"),s("success"),s("warning"),s("error")])])])]),i("vertical",{flexDirection:"column"},[l("button",[o("&:first-child:not(:last-child)",`
 margin-bottom: ${t};
 margin-left: ${t};
 margin-right: ${t};
 border-bottom-left-radius: ${t};
 border-bottom-right-radius: ${t};
 `),o("&:last-child:not(:first-child)",`
 margin-top: ${t};
 margin-left: ${t};
 margin-right: ${t};
 border-top-left-radius: ${t};
 border-top-right-radius: ${t};
 `),o("&:not(:first-child):not(:last-child)",`
 margin: ${t};
 border-radius: ${t};
 `),n("default"),i("ghost",[n("primary"),n("info"),n("success"),n("warning"),n("error")])])])]),v={size:String,vertical:Boolean},w=g({name:"ButtonGroup",props:v,setup(r){const{mergedClsPrefixRef:e,mergedRtlRef:u}=b(r);return f("-button-group",x,e),$(y,r),{rtlEnabled:h("ButtonGroup",u,e),mergedClsPrefix:e}},render(){const{mergedClsPrefix:r}=this;return m("div",{class:[`${r}-button-group`,this.rtlEnabled&&`${r}-button-group--rtl`,this.vertical&&`${r}-button-group--vertical`],role:"group"},this.$slots)}});class G{static synchronize(){return a.get("/company/customers/synchronize")}static getList(e){return a.get("/company/customers",{params:e})}static getDetail(e){return a.get(`/company/customers/${e}`)}static update(e,u){return a.put(`/company/customers/${e}`,u)}static delete(e){return a.delete(`/company/customers/${e}`)}}export{G as C,w as N};
