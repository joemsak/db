webpackJsonp([1],{129:function(t,e,n){"use strict";var a=n(151);n.n(a);e.a={data:function(){return{money:{decimal:".",thousands:",",prefix:"$",suffix:"",precision:2,masked:!1}}},props:["value"],components:{Money:a.Money},methods:{updateValue:function(t){var e=t.replace(this.money.prefix,"");e=e.replace(this.money.thousands,""),this.$refs.input.value=t,this.$emit("input",parseFloat(e))}}}},130:function(t,e,n){"use strict";var a=n(7),i=n(4),r=n(131);e.a={components:{dbBillEntry:r.a},computed:{subTitle:function(){return i.a.getPayDay(1).format("dddd, MMM Do")+" – "+i.a.getPayDay(2).subtract(1,"days").format("dddd, MMM Do")}},mounted:function(){a.a.activate({prev:{path:"/",name:"Income settings"},next:{path:"/pay_period/2",name:"2nd pay period"}})},destroyed:function(){a.a.reset()}}},131:function(t,e,n){"use strict";function a(t){n(156)}var i=n(132),r=n(948),o=n(2),s=a,u=o(i.a,r.a,!1,s,"data-v-3feea292",null);e.a=u.exports},132:function(t,e,n){"use strict";var a=(n(133),n(0)),i=n(135),r=n(945),o=function(t,e,n,a){this.category=t||"",this.amount=e||0,this.payPeriod=parseInt(n),this.id=a,this.isEditing=!1,this.isValid=function(){return""!=this.category&&0!=this.amount&&void 0!=this.payPeriod}};e.a={data:function(){var t=this;return{bills:i.a.bills.filter(function(e){return parseInt(e.payPeriod)==parseInt(t.payPeriod)}),newBill:new o("",0,this.payPeriod)}},props:["title","subTitle","prevSection","nextSection","payPeriod"],components:{Icon:a.a,dbBillForm:r.a},methods:{handleNewBillSubmit:function(t){t&&t.isValid()&&(i.a.add(t),this.$refs.newBillForm.$el.querySelector("input").focus(),this.newBill=new o("",0,this.payPeriod))},handleSubmit:function(t){new o(t.category,t.amount,t.payPeriod,t.id).isValid()&&(t.isEditing=!1)},removeBill:function(t){i.a.remove(t)},editBill:function(t){var e=this.bills.findIndex(function(e){return e.id==t});this.bills[e].isEditing=!0}},mounted:function(){var t=this;this.$refs.newBillForm.$el.querySelector("input").focus(),i.a.$on("updatedBills",function(e){t.bills=e.filter(function(e){return parseInt(e.payPeriod)==parseInt(t.payPeriod)})})}}},135:function(t,e,n){"use strict";function a(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var i=n(3),r=n(5);e.a=new i.a({data:function(){return{bills:r.a.get("payDayBills",{parser:"JSON",default:[]})}},computed:{nextKey:function(){var t=this.bills.map(function(t){return t.id});return(parseInt(Math.max.apply(Math,a(t)))||0)+1}},watch:{bills:{deep:!0,handler:function(t){r.a.set("payDayBills",t,{formatter:"JSON"}),this.$emit("updatedBills",t)}}},methods:{add:function(t){t.isEditing=!1,t.id=this.nextKey,this.bills.unshift(t)},remove:function(t){var e=this.bills.findIndex(function(e){return e.id==t});this.bills.splice(e,1)}}})},136:function(t,e,n){"use strict";var a=n(6);e.a={props:["bill","buttonText"],components:{dbMoney:a.a},methods:{handleSubmit:function(){this.$emit("submit",this.bill)}}}},137:function(t,e,n){"use strict";var a=n(7),i=n(4),r=n(131);e.a={components:{dbBillEntry:r.a},computed:{subTitle:function(){return i.a.getPayDay(2).format("dddd, MMM Do")+" – "+i.a.getPayDay(2).endOf("month").subtract(1,"days").format("dddd, MMM Do")}},mounted:function(){a.a.activate({next:{path:"/dashboard",name:"Dashboard"},prev:{path:"/pay_period/1",name:"1st pay period"}})},destroyed:function(){a.a.reset()}}},138:function(t,e,n){"use strict";var a=(n(133),n(1)),i=n.n(a),r=n(4),o=(n(5),n(955)),s=n(135),u=n(0),c=n(6);e.a={data:function(){return{buttonTxt:"+ Add expense",debit:{amount:0,category:"",memo:""},debits:o.a.entries,bills:s.a.bills.filter(function(t){var e=i()().startOf("day"),n=void 0;return n=e>=r.a.payDay2.startOf("day")?2:1,parseInt(t.payPeriod)==n})}},components:{dbMoney:c.a,Icon:u.a},computed:{ledgerItems:function(){return this.debits.concat(this.bills)},amountRemaning:function(){return r.a.income-this.amountSpent},amountSpent:function(){return this.ledgerItems.reduce(function(t,e){return t+=parseFloat(e.amount)},0)}},methods:{removeDebit:function(t){o.a.remove(t)},editDebit:function(t){this.buttonTxt="Save changes",this.debit=t},updateDebits:function(){this.debit.id||o.a.add({category:this.debit.category,amount:this.debit.amount,memo:this.debit.memo}),this.debit={category:"",amount:0,memo:""},console.log(this.debit.amount),this.$refs.debitCategory.focus(),this.buttonTxt="+ Add expense"}},mounted:function(){var t=this;r.a.initiated(),o.a.$on("updatedEntries",function(e){t.debits=e}),this.$refs.debitCategory.focus()}}},139:function(t,e,n){"use strict";var a=n(7),i=n(959);n.n(i).a.load({google:{families:["Roboto"]}}),e.a={data:function(){return{welcome:a.a}}}},140:function(t,e,n){t.exports=n(141)},141:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(3),i=n(145),r=n(146),o=n(957);a.a.filter("to-currency",function(t){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(parseFloat(t).toFixed(2))}),a.a.use(i.a);var s=new i.a({routes:r.a});new a.a({el:"#app",router:s,render:function(t){return t(o.a)}})},146:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var a=n(147),i=n(154),r=n(950),o=n(953),s=n(4),u=a.a;s.a.isInitiated&&(u=o.a);var c=[{path:"/",component:u},{path:"/pay_period/1",component:i.a},{path:"/pay_period/2",component:r.a},{path:"/dashboard",component:o.a}]},147:function(t,e,n){"use strict";function a(t){n(148)}var i=n(9),r=n(153),o=n(2),s=a,u=o(i.a,r.a,!1,s,"data-v-697c7eb6",null);e.a=u.exports},148:function(t,e){},152:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("money",t._b({ref:"input",nativeOn:{input:function(e){t.updateValue(e.target.value)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},"money",t.money,!1))},i=[],r={render:a,staticRenderFns:i};e.a=r},153:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){e.preventDefault(),t.handleSubmit(e)}}},[n("label",[t._v("\n    First pay day this month:\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.payDay1,expression:"payDay1"}],attrs:{type:"date"},domProps:{value:t.payDay1},on:{input:function(e){e.target.composing||(t.payDay1=e.target.value)}}})]),t._v(" "),n("label",[t._v("\n    Second pay day this month:\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.payDay2,expression:"payDay2"}],attrs:{type:"date"},domProps:{value:t.payDay2},on:{input:function(e){e.target.composing||(t.payDay2=e.target.value)}}})]),t._v(" "),n("label",[t._v("\n    Take-home amount each pay day:\n    "),n("db-money",{model:{value:t.income,callback:function(e){t.income=e},expression:"income"}})],1),t._v(" "),n("input",{attrs:{type:"submit",value:"Next"}})])},i=[],r={render:a,staticRenderFns:i};e.a=r},154:function(t,e,n){"use strict";function a(t){n(155)}var i=n(130),r=n(949),o=n(2),s=a,u=o(i.a,r.a,!1,s,"data-v-27133da5",null);e.a=u.exports},155:function(t,e){},156:function(t,e){},4:function(t,e,n){"use strict";var a=n(3),i=n(1),r=n.n(i),o=n(5),s=r()().subtract(1,"months").endOf("month"),u=r()().date(15),c=r()().get("year")+"."+r()().format("MM");0==s.day()?s.subtract(2,"days"):6==s.day()&&s.subtract(1,"days"),0==u.day()?u.subtract(2,"days"):6==u.day()&&u.subtract(1,"days"),e.a=new a.a({data:{payDay1:o.a.get(c+".payDay1",{parser:"DATE",default:s}),payDay2:o.a.get(c+".payDay2",{parser:"DATE",default:u}),income:o.a.get("income",{parser:"FLOAT",default:0}),isInitiated:o.a.get("initiated",{default:!1})},watch:{payDay1:function(t){o.a.set(c+".payDay1",t,{formatter:"DATE"})},payDay2:function(t){o.a.set(c+".payDay2",t,{formatter:"DATE"})},income:function(t){o.a.set("income",t)},isInitiated:function(t){o.a.set("initiated",t)}},methods:{getPayDay:function(t){return this["payDay"+t].clone()},initiated:function(){this.isInitiated=!0},isValid:function(){return void 0!=this.payDay1&&void 0!=this.payDay2&&![void 0,0,null,"0.00",NaN].includes(this.income)}}})},5:function(t,e,n){"use strict";var a=n(1),i=n.n(a),r=function(){this.parse=function(t){return t}},o=function(){this.parse=function(t){return parseFloat(t)}},s=function(){this.parse=function(t){return"string"!=typeof t&&(t=JSON.stringify(t)),JSON.parse(t)}},u=function(){this.parse=function(t){return i()(t)}},c=function(){this.format=function(t){return t}},l=function(){this.format=function(t){return JSON.stringify(t)}},d=function(){this.format=function(t){return i()(t).format("YYYY-MM-DD")}},f=function(){this.for=function(t){switch(t){case"FLOAT":return new o;case"JSON":return new s;case"DATE":return new u;default:return new r}}},m=function(){this.for=function(t){switch(t){case"JSON":return new l;case"DATE":return new d;default:return new c}}},p={PREFIX:"DB"};e.a={get:function(t,e){e=e||{},t=p.PREFIX+"."+t;var n=localStorage.getItem(t)||e.default;return(new f).for(e.parser).parse(n)},set:function(t,e,n){n=n||{},t=p.PREFIX+"."+t;var a=(new m).for(n.formatter);localStorage.setItem(t,a.format(e))}}},6:function(t,e,n){"use strict";var a=n(129),i=n(152),r=n(2),o=r(a.a,i.a,!1,null,null,null);e.a=o.exports},7:function(t,e,n){"use strict";var a=n(3);e.a=new a.a({data:function(){return{active:!1,prev:{},next:{}}},methods:{activate:function(t){var e=this;t=Object.assign({},{active:!0,prev:!1,next:!1},t),Object.keys(t).forEach(function(n){e[n]=t[n]})},reset:function(){this.activate({active:!1})}}})},9:function(t,e,n){"use strict";var a=n(1),i=n.n(a),r=n(4),o=(n(5),n(6));e.a={data:function(){return{payDay1:r.a.getPayDay(1).format("YYYY-MM-DD"),payDay2:r.a.getPayDay(2).format("YYYY-MM-DD"),income:r.a.income}},components:{dbMoney:o.a},watch:{payDay1:function(t){r.a.payDay1=i()(t)},payDay2:function(t){r.a.payDay2=i()(t)},income:function(t){r.a.income=t}},methods:{handleSubmit:function(){this.$router.push({path:"/pay_period/1"})}}}},945:function(t,e,n){"use strict";function a(t){n(946)}var i=n(136),r=n(947),o=n(2),s=a,u=o(i.a,r.a,!1,s,"data-v-bb1916fe",null);e.a=u.exports},946:function(t,e){},947:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("form",{on:{submit:function(e){e.preventDefault(),t.handleSubmit(e)}}},[n("div",{staticClass:"grid grid--bleed"},[n("div",{staticClass:"grid__col-sm-6 grid__col--bleed-x"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.bill.category,expression:"bill.category"}],attrs:{type:"text",placeholder:"Category"},domProps:{value:t.bill.category},on:{input:function(e){e.target.composing||t.$set(t.bill,"category",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"grid__col-sm-4 grid__col--bleed-x"},[n("db-money",{model:{value:t.bill.amount,callback:function(e){t.$set(t.bill,"amount",e)},expression:"bill.amount"}})],1),t._v(" "),n("div",{staticClass:"grid__col-sm-2 grid__col--bleed-x"},[n("button",[t._v(t._s(t.buttonText))])])])])])},i=[],r={render:a,staticRenderFns:i};e.a=r},948:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"header"},[n("h1",[t._v(t._s(t.title))]),t._v(" "),n("h2",[t._v(t._s(t.subTitle))]),t._v(" "),n("div",{staticClass:"grid grid--bleed grid--justify-center"},[n("div",{staticClass:"grid__col-sm-8 grid__col--bleed"},[n("ul",[n("db-bill-form",{ref:"newBillForm",attrs:{buttonText:"+ Add",bill:t.newBill},on:{submit:t.handleNewBillSubmit}})],1)])])]),t._v(" "),n("div",{staticClass:"container grid grid--justify-center"},[n("div",{staticClass:"grid__col-sm-8"},[n("ul",t._l(t.bills,function(e){return e.isEditing?n("db-bill-form",{key:e.id,ref:"billForm"+e.id,refInFor:!0,attrs:{buttonText:"Save",bill:e},on:{submit:t.handleSubmit}}):n("li",{key:e.id},[n("div",{staticClass:"grid grid--bleed"},[n("div",{staticClass:"grid__col-sm-6 grid__col--bleed-x"},[t._v("\n              "+t._s(e.category)+"\n            ")]),t._v(" "),n("div",{staticClass:"grid__col-sm-4 grid__col--bleed-x"},[t._v("\n              "+t._s(t._f("to-currency")(e.amount))+"\n            ")]),t._v(" "),n("div",{staticClass:"grid__col-sm-2 grid__col--bleed-x"},[n("icon",{attrs:{name:"edit"},nativeOn:{click:function(n){t.editBill(e.id)}}}),t._v(" "),n("icon",{staticClass:"icon--red",attrs:{name:"times"},nativeOn:{click:function(n){t.removeBill(e.id)}}})],1)])])}))])])])},i=[],r={render:a,staticRenderFns:i};e.a=r},949:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("db-bill-entry",{attrs:{title:"Bills during 1st pay period","pay-period":"1","sub-title":t.subTitle}})},i=[],r={render:a,staticRenderFns:i};e.a=r},950:function(t,e,n){"use strict";function a(t){n(951)}var i=n(137),r=n(952),o=n(2),s=a,u=o(i.a,r.a,!1,s,"data-v-0c7a19fc",null);e.a=u.exports},951:function(t,e){},952:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("db-bill-entry",{attrs:{title:"Bills during 2nd pay period","pay-period":"2","sub-title":t.subTitle}})},i=[],r={render:a,staticRenderFns:i};e.a=r},953:function(t,e,n){"use strict";function a(t){n(954)}var i=n(138),r=n(956),o=n(2),s=a,u=o(i.a,r.a,!1,s,"data-v-492d4c9e",null);e.a=u.exports},954:function(t,e){},955:function(t,e,n){"use strict";function a(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var i=n(3),r=n(1),o=n.n(r),s=n(5);e.a=new i.a({data:function(){return{entries:s.a.get("debits",{parser:"JSON",default:[]})}},computed:{nextKey:function(){var t=this.entries.map(function(t){return t.id});return(parseInt(Math.max.apply(Math,a(t)))||0)+1}},watch:{entries:{deep:!0,handler:function(t){s.a.set("debits",t,{formatter:"JSON"}),this.$emit("updatedEntries",t)}}},methods:{add:function(t){t.isEditing=!1,t.id=this.nextKey,t.madeOn=o()(),this.entries.unshift(t)},remove:function(t){var e=this.entries.findIndex(function(e){return e.id==t});this.entries.splice(e,1)}}})},956:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"entry"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.debit.category,expression:"debit.category"}],ref:"debitCategory",attrs:{type:"text",placeholder:"Category"},domProps:{value:t.debit.category},on:{input:function(e){e.target.composing||t.$set(t.debit,"category",e.target.value)}},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.updateDebits(e)}}}),t._v(" "),n("db-money",{nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.updateDebits(e)}},model:{value:t.debit.amount,callback:function(e){t.$set(t.debit,"amount",e)},expression:"debit.amount"}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.debit.memo,expression:"debit.memo"}],staticClass:"memo",attrs:{type:"text",placeholder:"Memo (optional)"},domProps:{value:t.debit.memo},on:{input:function(e){e.target.composing||t.$set(t.debit,"memo",e.target.value)}},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.updateDebits(e)}}}),t._v(" "),n("button",{on:{click:t.updateDebits}},[t._v(t._s(t.buttonTxt))])],1),t._v(" "),n("ul",[t._l(t.debits,function(e){return n("li",[n("span",[t._v("\n        "+t._s(e.category)+"\n        "),n("small",{directives:[{name:"show",rawName:"v-show",value:!!e.memo&&!!e.memo.length,expression:"!!item.memo && !!item.memo.length"}]},[t._v("\n          ("+t._s(e.memo)+")\n        ")])]),t._v(" "),n("span",[t._v(t._s(t._f("to-currency")(e.amount)))]),t._v(" "),n("span",{staticClass:"actions"},[n("icon",{attrs:{name:"edit"},nativeOn:{click:function(n){t.editDebit(e)}}}),t._v(" "),n("icon",{staticClass:"icon--red",attrs:{name:"times"},nativeOn:{click:function(n){t.removeDebit(e.id)}}})],1)])}),t._v(" "),t._l(t.bills,function(e){return n("li",[n("span",[t._v("\n        "+t._s(e.category)+"\n      ")]),t._v(" "),n("span",[t._v(t._s(t._f("to-currency")(e.amount)))])])})],2),t._v(" "),n("footer",[n("span",[n("strong",[t._v("Remaining:")]),t._v("\n      "+t._s(t._f("to-currency")(t.amountRemaning))+"\n    ")]),t._v(" "),n("span",[n("strong",[t._v("Total:")]),t._v("\n      "+t._s(t._f("to-currency")(t.amountSpent))+"\n    ")])])])},i=[],r={render:a,staticRenderFns:i};e.a=r},957:function(t,e,n){"use strict";function a(t){n(958)}var i=n(139),r=n(960),o=n(2),s=a,u=o(i.a,r.a,!1,s,null,null);e.a=u.exports},958:function(t,e){},960:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view"),t._v(" "),t.welcome.active?n("div",{staticClass:"footer"},[t.welcome.prev?n("router-link",{staticClass:"btn footer__back-btn",attrs:{to:t.welcome.prev.path}},[t._v("\n      go back to "+t._s(t.welcome.prev.name)+"\n    ")]):t._e(),t._v(" "),t.welcome.next?n("router-link",{staticClass:"btn",attrs:{to:t.welcome.next.path}},[t._v("\n      Next: "+t._s(t.welcome.next.name)+" →\n    ")]):t._e()],1):t._e()],1)},i=[],r={render:a,staticRenderFns:i};e.a=r}},[140]);
//# sourceMappingURL=client.9a13c266.js.map