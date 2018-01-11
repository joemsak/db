webpackJsonp([1],{125:function(t,e,n){"use strict";var a=function(){this.parse=function(t){return t}},i=function(){this.parse=function(t){return parseFloat(t)}},r=function(){this.parse=function(t){return JSON.parse(t)}},s=function(){this.format=function(t){return t}},o=function(){this.format=function(t){return JSON.stringify(t)}},u=function(){this.for=function(t){switch(t){case"FLOAT":return new i;case"JSON":return new r;default:return new a}}},c=function(){this.for=function(t){switch(t){case"JSON":return new o;default:return new s}}},l={PREFIX:"DB"};e.a={get:function(t,e){e=e||{},t=l.PREFIX+"."+t;var n=localStorage.getItem(t)||e.default;return(new u).for(e.parser).parse(n)},set:function(t,e,n){n=n||{},t=l.PREFIX+"."+t;var a=(new c).for(n.formatter);localStorage.setItem(t,a.format(e))}}},126:function(t,e,n){"use strict";var a=n(127),i=n(148),r=n(2),s=r(a.a,i.a,!1,null,null,null);e.a=s.exports},127:function(t,e,n){"use strict";var a=(n(125),n(128));e.a={name:"Calculations",props:{show:{required:!0,type:String},items:{required:!1,type:Array,default:function(){return[]}},daysRemaining:{required:!1,type:[Number,String]},amountPaid:{required:!0,type:[Number,String]}},components:{dbCurrency:a.a},computed:{amountSpent:function(){return this.items.reduce(function(t,e){return t+parseFloat(e.amount)},0)},amountRemaining:function(){return parseFloat(this.amountPaid-this.amountSpent)},amountPerDay:function(){return this.amountRemaining/this.daysRemaining}}}},128:function(t,e,n){"use strict";var a=n(129),i=n(147),r=n(2),s=r(a.a,i.a,!1,null,null,null);e.a=s.exports},129:function(t,e,n){"use strict";e.a={name:"Currency",props:{value:{required:!0,type:[Number,String],default:0}},computed:{formattedValue:function(){return new Intl.NumberFormat("us-EN",{style:"currency",currency:"USD"}).format(parseFloat(this.value).toFixed(2))}}}},130:function(t,e,n){"use strict";var a=n(3);n.n(a);e.a={data:function(){return{income:this.amountPaid,money:{decimal:".",thousands:",",prefix:"$",suffix:"",precision:2,masked:!1}}},props:["amountPaid"],components:{Money:a.Money}}},131:function(t,e,n){"use strict";var a=n(132);e.a={data:function(){return{}},props:{submitHandler:{required:!0}},components:{dbItemForm:a.a}}},132:function(t,e,n){"use strict";function a(t){n(154)}var i=n(133),r=n(155),s=n(2),o=a,u=s(i.a,r.a,!1,o,null,null);e.a=u.exports},133:function(t,e,n){"use strict";var a=n(3),i=(n.n(a),function(t,e){this.amount=t||0,this.category=e||"",this.madeOn=new Date});e.a={name:"ItemForm",data:function(){return{item:new i,money:{decimal:".",thousands:",",prefix:"$",suffix:"",precision:2,masked:!1}}},props:{submitHandler:{required:!1,type:Function,default:function(){return!1}},editingItem:{required:!1,type:Object,default:function(){}}},components:{Money:a.Money},watch:{editingItem:function(t){this.item=new i(t.amount,t.category)}},methods:{handleSubmit:function(){if(!function(t){var e=parseFloat(t.item.amount).toFixed(2),n=t.item.category;return window.errorTimeout&&(clearTimeout(window.errorTimeout),window.errorTimeout=null),["0.00",0,NaN].includes(e)?(t.$refs.amount.$el.classList.add("field--error"),window.errorTimeout=setTimeout(function(){t.$refs.amount.$el.classList.remove("field--error")}),t.$refs.amount.$el.focus(),t.$refs.amount.$el.select(),!1):!!n.length||(t.$refs.category.classList.add("field--error"),window.errorTimeout=setTimeout(function(){t.$refs.category.classList.remove("field--error")}),t.$refs.category.focus(),!1)}(this))return!1;this.submitHandler(this.item),this.item=new i,this.$refs.category.focus()}}}},134:function(t,e,n){"use strict";var a=n(159),i=n(126);e.a={props:{items:{required:!0,type:Array},amountPaid:{required:!0,type:[Number,String]},editClickHandler:{required:!1,type:Function,default:function(){return!1}},deleteClickHandler:{required:!1,type:Function,default:function(){return!1}}},watch:{items:function(t,e){t.length>e.length&&this.highlightInsertedRow()}},components:{dbItemRow:a.a,dbCalculations:i.a},methods:{highlightInsertedRow:function(){var t=this.$refs.ledger.querySelector(".table__body .table__row:first-child");t.classList.add("table__row--inserted","table__row--highlighted"),setTimeout(function(){t.classList.remove("table__row--highlighted"),setTimeout(function(){t.classList.remove("table__row--inserted")},1510)})}}}},135:function(t,e,n){"use strict";var a=(n(161),n(0)),i=n(128);e.a={name:"ItemRow",props:{editClickHandler:{required:!1,type:Function,default:function(){return!1}},deleteClickHandler:{required:!1,type:Function,default:function(){return!1}},item:{required:!0,type:Object},i:{required:!0,type:Number}},components:{faIcon:a.a,dbCurrency:i.a}}},137:function(t,e,n){t.exports=n(138)},138:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(139),i=n(143);new a.a({el:"#app",render:function(t){return t(i.a)}})},143:function(t,e,n){"use strict";function a(t){n(144)}var i=n(5),r=n(952),s=n(2),o=a,u=s(i.a,r.a,!1,o,null,null);e.a=u.exports},144:function(t,e){},147:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.formattedValue)+"\n")])},i=[],r={render:a,staticRenderFns:i};e.a=r},148:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return"remaining"==t.show?n("span",[n("strong",[t._v("Remaining:")]),t._v(" "),n("db-currency",{attrs:{value:t.amountRemaining}})],1):"spent"==t.show?n("span",[n("strong",[t._v("Total")]),t._v(" "),n("db-currency",{attrs:{value:t.amountSpent}})],1):"perDay"==t.show?n("span",[n("strong",[t._v("You can spend:")]),t._v(" "),n("db-currency",{attrs:{value:t.amountPerDay}}),t._v("\n  per day\n")],1):t._e()},i=[],r={render:a,staticRenderFns:i};e.a=r},149:function(t,e,n){"use strict";function a(t){n(150)}var i=n(130),r=n(151),s=n(2),o=a,u=s(i.a,r.a,!1,o,null,null);e.a=u.exports},150:function(t,e){},151:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"welcome welcome__income"},[n("h1",[t._v("Welcome to Dailybread!")]),t._v(" "),n("p",[t._v("Please enter your income at each payday")]),t._v(" "),n("money",t._b({nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;(function(e){t.$emit("incomeUpdated",e.target.value)})(e)}},model:{value:t.income,callback:function(e){t.income=e},expression:"income"}},"money",t.money,!1))],1)},i=[],r={render:a,staticRenderFns:i};e.a=r},152:function(t,e,n){"use strict";function a(t){n(153)}var i=n(131),r=n(156),s=n(2),o=a,u=s(i.a,r.a,!1,o,null,null);e.a=u.exports},153:function(t,e){},154:function(t,e){},155:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fieldset",[n("legend",[t._v("Add an expense")]),t._v(" "),n("label",[t._v("\n    Category:\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.item.category,expression:"item.category"}],ref:"category",staticClass:"field",attrs:{type:"text"},domProps:{value:t.item.category},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.handleSubmit(e)},input:function(e){e.target.composing||t.$set(t.item,"category",e.target.value)}}})]),t._v(" "),n("label",[t._v("\n    Amount\n    "),n("money",t._b({ref:"amount",staticClass:"field",nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.handleSubmit(e)}},model:{value:t.item.amount,callback:function(e){t.$set(t.item,"amount",e)},expression:"item.amount"}},"money",t.money,!1))],1)])},i=[],r={render:a,staticRenderFns:i};e.a=r},156:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"welcome welcome__expense"},[n("h1",[t._v("Welcome to Dailybread!")]),t._v(" "),n("p",[t._v("Please enter your first expense!")]),t._v(" "),n("db-item-form",{attrs:{submitHandler:t.submitHandler}})],1)},i=[],r={render:a,staticRenderFns:i};e.a=r},157:function(t,e,n){"use strict";function a(t){n(158)}var i=n(134),r=n(951),s=n(2),o=a,u=s(i.a,r.a,!1,o,null,null);e.a=u.exports},158:function(t,e){},159:function(t,e,n){"use strict";function a(t){n(160)}var i=n(135),r=n(950),s=n(2),o=a,u=s(i.a,r.a,!1,o,null,null);e.a=u.exports},160:function(t,e){},5:function(t,e,n){"use strict";var a=n(1),i=n.n(a),r=n(3),s=(n.n(r),n(125)),o=n(126),u=n(149),c=n(152),l=n(132),d=n(157);e.a={data:function(){return{amountPaid:s.a.get("amountPaid",{parser:"FLOAT",default:0}),money:{decimal:".",thousands:",",prefix:"$",suffix:"",precision:2,masked:!1},currentMonthName:i()().format("MMMM"),editingItem:null,editingRow:null,ledgerItems:s.a.get("ledgerItems",{parser:"JSON",default:"[]"}),payDay1:i()("2018-01-12"),payDay2:i()("2018-01-31")}},components:{dbIncomeFirstTimer:u.a,dbExpenseFirstTimer:c.a,Money:r.Money,dbItemForm:l.a,dbLedger:d.a,dbCalculations:o.a},watch:{ledgerItems:function(){s.a.set("ledgerItems",this.ledgerItems,{formatter:"JSON"})},amountPaid:function(t){s.a.set("amountPaid",t)}},computed:{formattedPayDay1:{get:function(){return this.payDay1.format("YYYY-MM-DD")},set:function(t){this.payDay1=i()(t)}},formattedPayDay2:{get:function(){return this.payDay2.format("YYYY-MM-DD")},set:function(t){this.payDay2=i()(t)}},daysUntilNextPayDay:function(){return i()().startOf("day")<this.payDay1.startOf("day")?this.payDay1.startOf("day").from(i()().startOf("day")):this.payDay2.startOf("day").from(i()().startOf("day"))}},methods:{recordItem:function(t){var e=this.ledgerItems.slice(0);null!=this.editingRow?e[this.editingRow]=t:e.unshift(t),this.editingRow=null,this.ledgerItems=e},deleteItem:function(t){this.ledgerItems.splice(t,1)},editItem:function(t){this.editingRow=t,this.editingItem=this.ledgerItems[this.editingRow]},getDaysRemaining:function(){return i()()<this.payDay1?this.payDay1.startOf("day").diff(i()().startOf("day"),"days"):this.payDay2.startOf("day").diff(i()().startOf("day"),"days")}}}},950:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table__row"},[n("div",{staticClass:"table__cell table__row-actions"},[n("fa-icon",{staticClass:"action action--remove",attrs:{name:"times"},nativeOn:{click:function(e){t.deleteClickHandler(t.i)}}}),t._v(" "),n("fa-icon",{staticClass:"action action--edit",attrs:{name:"edit"},nativeOn:{click:function(e){t.editClickHandler(t.i)}}})],1),t._v(" "),n("div",{staticClass:"table__cell"},[t._v("\n    "+t._s(t.item.category)+"\n  ")]),t._v(" "),n("div",{staticClass:"table__cell table__cell--numeric"},[n("db-currency",{attrs:{value:t.item.amount}})],1)])},i=[],r={render:a,staticRenderFns:i};e.a=r},951:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"ledger",staticClass:"table"},[t._m(0),t._v(" "),n("div",{staticClass:"table__body"},t._l(t.items,function(e,a){return n("db-item-row",{key:a,attrs:{editClickHandler:t.editClickHandler,deleteClickHandler:t.deleteClickHandler,item:e,i:a}})})),t._v(" "),n("div",{staticClass:"table__foot"},[n("div",{staticClass:"table__row"},[n("div",{staticClass:"table__cell"},[n("db-calculations",{attrs:{show:"remaining",items:t.items,amountPaid:t.amountPaid}})],1),t._v(" "),n("div",{staticClass:"table__cell"},[n("db-calculations",{attrs:{show:"spent",items:t.items,amountPaid:t.amountPaid}})],1)])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table__head"},[n("div",{staticClass:"table__row"},[n("div",{staticClass:"table__cell table__cell--head"},[t._v("\n         \n      ")]),t._v(" "),n("div",{staticClass:"table__cell table__cell--head"},[t._v("\n        Category\n      ")]),t._v(" "),n("div",{staticClass:"\n          table__cell\n          table__cell--head\n          table__cell--numeric\n        "},[t._v("\n        Amount\n      ")])])])}],r={render:a,staticRenderFns:i};e.a=r},952:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid",attrs:{id:"db"}},[0==t.amountPaid||"0.00"==t.amountPaid?[n("db-income-first-timer",{attrs:{amountPaid:t.amountPaid},on:{incomeUpdated:function(e){return t.amountPaid=e}}})]:t.ledgerItems.length?[n("div",{staticClass:"grid__col--9"},[n("db-ledger",{attrs:{items:t.ledgerItems,amountPaid:t.amountPaid,editClickHandler:t.editItem,deleteClickHandler:t.deleteItem}})],1),t._v(" "),n("div",{staticClass:"grid__col--3"},[n("h1",[t._v(t._s(t.currentMonthName))]),t._v(" "),n("db-item-form",{attrs:{submitHandler:t.recordItem,editingItem:t.editingItem}}),t._v(" "),n("fieldset",[n("legend",[t._v("Income settings")]),t._v(" "),n("label",[t._v("\n          Income each payday\n          "),n("money",t._b({model:{value:t.amountPaid,callback:function(e){t.amountPaid=e},expression:"amountPaid"}},"money",t.money,!1))],1),t._v(" "),n("label",[t._v("\n          First pay day\n          "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.formattedPayDay1,expression:"formattedPayDay1"}],attrs:{type:"date"},domProps:{value:t.formattedPayDay1},on:{input:function(e){e.target.composing||(t.formattedPayDay1=e.target.value)}}})]),t._v(" "),n("label",[t._v("\n          Second pay day\n          "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.formattedPayDay2,expression:"formattedPayDay2"}],attrs:{type:"date"},domProps:{value:t.formattedPayDay2},on:{input:function(e){e.target.composing||(t.formattedPayDay2=e.target.value)}}})])]),t._v(" "),n("p",[n("strong",[t._v("Next pay day:")]),t._v("\n        "+t._s(t.daysUntilNextPayDay)+"\n      ")]),t._v(" "),n("p",[n("db-calculations",{attrs:{show:"perDay",items:t.ledgerItems,daysRemaining:t.getDaysRemaining(),amountPaid:t.amountPaid}})],1)],1)]:[n("db-expense-first-timer",{attrs:{submitHandler:t.recordItem}})]],2)},i=[],r={render:a,staticRenderFns:i};e.a=r}},[137]);
//# sourceMappingURL=client.4702d00d.js.map