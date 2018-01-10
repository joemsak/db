webpackJsonp([1],{125:function(e,t,n){"use strict";var a=function(){this.parse=function(e){return e}},i=function(){this.parse=function(e){return parseFloat(e)}},r=function(){this.parse=function(e){return JSON.parse(e)}},s=function(){this.format=function(e){return e}},o=function(){this.format=function(e){return JSON.stringify(e)}},u=function(){this.for=function(e){switch(e){case"FLOAT":return new i;case"JSON":return new r;default:return new a}}},c=function(){this.for=function(e){switch(e){case"JSON":return new o;default:return new s}}},l={PREFIX:"DB"};t.a={get:function(e,t){t=t||{},e=l.PREFIX+"."+e;var n=localStorage.getItem(e)||t.default;return(new u).for(t.parser).parse(n)},set:function(e,t,n){n=n||{},e=l.PREFIX+"."+e;var a=(new c).for(n.formatter);localStorage.setItem(e,a.format(t))}}},126:function(e,t,n){"use strict";var a=n(127),i=n(148),r=n(2),s=r(a.a,i.a,!1,null,null,null);t.a=s.exports},127:function(e,t,n){"use strict";var a=(n(125),n(128));t.a={name:"Calculations",props:{show:{required:!0,type:String},expenses:{required:!1,type:Array,default:function(){return[]}},daysRemaining:{required:!1,type:[Number,String]},amountPaid:{required:!0,type:[Number,String]}},components:{Currency:a.a},computed:{amountSpent:function(){return this.expenses.reduce(function(e,t){return e+parseFloat(t.amount)},0)},amountRemaining:function(){return parseFloat(this.amountPaid-this.amountSpent)},amountPerDay:function(){return this.amountRemaining/this.daysRemaining}}}},128:function(e,t,n){"use strict";var a=n(129),i=n(147),r=n(2),s=r(a.a,i.a,!1,null,null,null);t.a=s.exports},129:function(e,t,n){"use strict";t.a={name:"Currency",props:{value:{required:!0,type:[Number,String],default:0}},computed:{formattedValue:function(){return new Intl.NumberFormat("us-EN",{style:"currency",currency:"USD"}).format(parseFloat(this.value).toFixed(2))}}}},130:function(e,t,n){"use strict";var a=n(3);n.n(a);t.a={data:function(){return{income:this.amountPaid,money:{decimal:".",thousands:",",prefix:"$",suffix:"",precision:2,masked:!1}}},props:["amountPaid"],components:{Money:a.Money}}},131:function(e,t,n){"use strict";var a=n(132);t.a={data:function(){return{}},props:{submitHandler:{required:!0},editingExpense:{required:!0}},components:{expenseForm:a.a}}},132:function(e,t,n){"use strict";function a(e){n(154)}var i=n(133),r=n(155),s=n(2),o=a,u=s(i.a,r.a,!1,o,null,null);t.a=u.exports},133:function(e,t,n){"use strict";var a=n(3),i=(n.n(a),function(e,t){this.amount=e||0,this.category=t||""});t.a={name:"ExpenseForm",data:function(){return{expense:new i,money:{decimal:".",thousands:",",prefix:"$",suffix:"",precision:2,masked:!1}}},props:{submitHandler:{required:!1,type:Function,default:function(){return!1}},editingExpense:{required:!1,type:Object,default:{}}},components:{Money:a.Money},watch:{editingExpense:function(e){this.expense=new i(e.amount,e.category)}},methods:{handleSubmit:function(){if(!function(e){var t=parseFloat(e.expense.amount).toFixed(2),n=e.expense.category;return window.errorTimeout&&(clearTimeout(window.errorTimeout),window.errorTimeout=null),["0.00",0,NaN].includes(t)?(e.$refs.amount.$el.classList.add("field--error"),window.errorTimeout=setTimeout(function(){e.$refs.amount.$el.classList.remove("field--error")}),e.$refs.amount.$el.focus(),e.$refs.amount.$el.select(),!1):!!n.length||(e.$refs.category.classList.add("field--error"),window.errorTimeout=setTimeout(function(){e.$refs.category.classList.remove("field--error")}),e.$refs.category.focus(),!1)}(this))return!1;this.submitHandler(this.expense),this.expense=new i,this.$refs.category.focus()}}}},134:function(e,t,n){"use strict";var a=n(159),i=n(126);t.a={props:{expenses:{required:!0,type:Array},amountPaid:{required:!0,type:[Number,String]},editClickHandler:{required:!1,type:Function,default:function(){return!1}},deleteClickHandler:{required:!1,type:Function,default:function(){return!1}}},watch:{expenses:function(e,t){e.length>t.length&&this.highlightInsertedRow()}},components:{expenseRow:a.a,calculations:i.a},methods:{highlightInsertedRow:function(){var e=this.$refs.expenseTable.querySelector(".table__body .table__row:first-child");e.classList.add("table__row--inserted","table__row--highlighted"),setTimeout(function(){e.classList.remove("table__row--highlighted"),setTimeout(function(){e.classList.remove("table__row--inserted")},1510)})}}}},135:function(e,t,n){"use strict";var a=(n(161),n(0)),i=n(128);t.a={name:"ExpenseRow",props:{editClickHandler:{required:!1,type:Function,default:function(){return!1}},deleteClickHandler:{required:!1,type:Function,default:function(){return!1}},expense:{required:!0,type:Object},i:{required:!0,type:Number}},components:{Icon:a.a,currency:i.a}}},137:function(e,t,n){e.exports=n(138)},138:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(139),i=n(143);new a.a({el:"#app",render:function(e){return e(i.a)}})},143:function(e,t,n){"use strict";function a(e){n(144)}var i=n(5),r=n(952),s=n(2),o=a,u=s(i.a,r.a,!1,o,null,null);t.a=u.exports},144:function(e,t){},147:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",[e._v("\n  "+e._s(e.formattedValue)+"\n")])},i=[],r={render:a,staticRenderFns:i};t.a=r},148:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return"remaining"==e.show?n("span",[n("strong",[e._v("Remaining:")]),e._v(" "),n("Currency",{attrs:{value:e.amountRemaining}})],1):"spent"==e.show?n("span",[n("strong",[e._v("Total")]),e._v(" "),n("Currency",{attrs:{value:e.amountSpent}})],1):"perDay"==e.show?n("span",[n("strong",[e._v("You can spend:")]),e._v(" "),n("Currency",{attrs:{value:e.amountPerDay}}),e._v("\n  per day\n")],1):e._e()},i=[],r={render:a,staticRenderFns:i};t.a=r},149:function(e,t,n){"use strict";function a(e){n(150)}var i=n(130),r=n(151),s=n(2),o=a,u=s(i.a,r.a,!1,o,null,null);t.a=u.exports},150:function(e,t){},151:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"welcome welcome__income"},[n("h1",[e._v("Welcome to Dailybread!")]),e._v(" "),n("p",[e._v("Please enter your income at each payday")]),e._v(" "),n("money",e._b({nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;(function(t){e.$emit("incomeUpdated",t.target.value)})(t)}},model:{value:e.income,callback:function(t){e.income=t},expression:"income"}},"money",e.money,!1))],1)},i=[],r={render:a,staticRenderFns:i};t.a=r},152:function(e,t,n){"use strict";function a(e){n(153)}var i=n(131),r=n(156),s=n(2),o=a,u=s(i.a,r.a,!1,o,null,null);t.a=u.exports},153:function(e,t){},154:function(e,t){},155:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fieldset",[n("legend",[e._v("Add an expense")]),e._v(" "),n("label",[e._v("\n    Category:\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.expense.category,expression:"expense.category"}],ref:"category",staticClass:"field",attrs:{type:"text"},domProps:{value:e.expense.category},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleSubmit(t)},input:function(t){t.target.composing||e.$set(e.expense,"category",t.target.value)}}})]),e._v(" "),n("label",[e._v("\n    Amount\n    "),n("money",e._b({ref:"amount",staticClass:"field",nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleSubmit(t)}},model:{value:e.expense.amount,callback:function(t){e.$set(e.expense,"amount",t)},expression:"expense.amount"}},"money",e.money,!1))],1)])},i=[],r={render:a,staticRenderFns:i};t.a=r},156:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"welcome welcome__expense"},[n("h1",[e._v("Welcome to Dailybread!")]),e._v(" "),n("p",[e._v("Please enter your first expense!")]),e._v(" "),n("expense-form",{attrs:{submitHandler:e.submitHandler,editingExpense:e.editingExpense}})],1)},i=[],r={render:a,staticRenderFns:i};t.a=r},157:function(e,t,n){"use strict";function a(e){n(158)}var i=n(134),r=n(951),s=n(2),o=a,u=s(i.a,r.a,!1,o,null,null);t.a=u.exports},158:function(e,t){},159:function(e,t,n){"use strict";function a(e){n(160)}var i=n(135),r=n(950),s=n(2),o=a,u=s(i.a,r.a,!1,o,null,null);t.a=u.exports},160:function(e,t){},5:function(e,t,n){"use strict";var a=n(1),i=n.n(a),r=n(3),s=(n.n(r),n(125)),o=n(126),u=n(149),c=n(152),l=n(132),d=n(157);t.a={data:function(){return{amountPaid:s.a.get("amountPaid",{parser:"FLOAT",default:0}),money:{decimal:".",thousands:",",prefix:"$",suffix:"",precision:2,masked:!1},currentMonthName:i()().format("MMMM"),editingExpense:null,editingRow:null,expenses:s.a.get("expenses",{parser:"JSON",default:"[]"}),payDay1:i()("2018-01-12"),payDay2:i()("2018-01-31")}},components:{incomeFirstTimer:u.a,expenseFirstTimer:c.a,Money:r.Money,expenseForm:l.a,expenseTable:d.a,calculations:o.a},watch:{expenses:function(e,t){s.a.set("expenses",this.expenses,{formatter:"JSON"})},amountPaid:function(e){s.a.set("amountPaid",e)}},computed:{formattedPayDay1:{get:function(){return this.payDay1.format("YYYY-MM-DD")},set:function(e){this.payDay1=i()(e)}},formattedPayDay2:{get:function(){return this.payDay2.format("YYYY-MM-DD")},set:function(e){this.payDay2=i()(e)}},daysUntilNextPayDay:function(){return i()().startOf("day")<this.payDay1.startOf("day")?this.payDay1.startOf("day").from(i()().startOf("day")):this.payDay2.startOf("day").from(i()().startOf("day"))}},methods:{recordExpense:function(e){var t=this.expenses.slice(0);null!=this.editingRow?t[this.editingRow]=e:t.unshift(e),this.editingRow=null,this.expenses=t},deleteExpense:function(e){this.expenses.splice(e,1)},editExpense:function(e){this.editingRow=e,this.editingExpense=this.expenses[this.editingRow]},getDaysRemaining:function(){return i()()<this.payDay1?this.payDay1.startOf("day").diff(i()().startOf("day"),"days"):this.payDay2.startOf("day").diff(i()().startOf("day"),"days")}}}},950:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table__row"},[n("div",{staticClass:"table__cell table__row-actions"},[n("icon",{staticClass:"action action--remove",attrs:{name:"times"},nativeOn:{click:function(t){e.deleteClickHandler(e.i)}}}),e._v(" "),n("icon",{staticClass:"action action--edit",attrs:{name:"edit"},nativeOn:{click:function(t){e.editClickHandler(e.i)}}})],1),e._v(" "),n("div",{staticClass:"table__cell"},[e._v("\n    "+e._s(e.expense.category)+"\n  ")]),e._v(" "),n("div",{staticClass:"table__cell table__cell--numeric"},[n("currency",{attrs:{value:e.expense.amount}})],1)])},i=[],r={render:a,staticRenderFns:i};t.a=r},951:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"expenseTable",staticClass:"table"},[e._m(0),e._v(" "),n("div",{staticClass:"table__body"},e._l(e.expenses,function(t,a){return n("expense-row",{key:a,attrs:{editClickHandler:e.editClickHandler,deleteClickHandler:e.deleteClickHandler,expense:t,i:a}})})),e._v(" "),n("div",{staticClass:"table__foot"},[n("div",{staticClass:"table__row"},[n("div",{staticClass:"table__cell"},[n("calculations",{attrs:{show:"remaining",expenses:e.expenses,amountPaid:e.amountPaid}})],1),e._v(" "),n("div",{staticClass:"table__cell"},[n("calculations",{attrs:{show:"spent",expenses:e.expenses,amountPaid:e.amountPaid}})],1)])])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table__head"},[n("div",{staticClass:"table__row"},[n("div",{staticClass:"table__cell table__cell--head"},[e._v("\n         \n      ")]),e._v(" "),n("div",{staticClass:"table__cell table__cell--head"},[e._v("\n        Category\n      ")]),e._v(" "),n("div",{staticClass:"\n          table__cell\n          table__cell--head\n          table__cell--numeric\n        "},[e._v("\n        Amount\n      ")])])])}],r={render:a,staticRenderFns:i};t.a=r},952:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grid",attrs:{id:"db"}},[0==e.amountPaid||"0.00"==e.amountPaid?[n("income-first-timer",{attrs:{amountPaid:e.amountPaid},on:{incomeUpdated:function(t){return e.amountPaid=t}}})]:e.expenses.length?[n("div",{staticClass:"grid__col--9"},[n("expense-table",{attrs:{expenses:e.expenses,amountPaid:e.amountPaid,editClickHandler:e.editExpense,deleteClickHandler:e.deleteExpense}})],1),e._v(" "),n("div",{staticClass:"grid__col--3"},[n("h1",[e._v(e._s(e.currentMonthName))]),e._v(" "),n("expense-form",{attrs:{submitHandler:e.recordExpense,editingExpense:e.editingExpense}}),e._v(" "),n("fieldset",[n("legend",[e._v("Income settings")]),e._v(" "),n("label",[e._v("\n          Income each payday\n          "),n("money",e._b({model:{value:e.amountPaid,callback:function(t){e.amountPaid=t},expression:"amountPaid"}},"money",e.money,!1))],1),e._v(" "),n("label",[e._v("\n          First pay day\n          "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.formattedPayDay1,expression:"formattedPayDay1"}],attrs:{type:"date"},domProps:{value:e.formattedPayDay1},on:{input:function(t){t.target.composing||(e.formattedPayDay1=t.target.value)}}})]),e._v(" "),n("label",[e._v("\n          Second pay day\n          "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.formattedPayDay2,expression:"formattedPayDay2"}],attrs:{type:"date"},domProps:{value:e.formattedPayDay2},on:{input:function(t){t.target.composing||(e.formattedPayDay2=t.target.value)}}})])]),e._v(" "),n("p",[n("strong",[e._v("Next pay day:")]),e._v("\n        "+e._s(e.daysUntilNextPayDay)+"\n      ")]),e._v(" "),n("p",[n("calculations",{attrs:{show:"perDay",expenses:e.expenses,daysRemaining:e.getDaysRemaining(),amountPaid:e.amountPaid}})],1)],1)]:[n("expense-first-timer",{attrs:{submitHandler:e.recordExpense,editingExpense:e.editingExpense}})]],2)},i=[],r={render:a,staticRenderFns:i};t.a=r}},[137]);
//# sourceMappingURL=client.d10457fa.js.map