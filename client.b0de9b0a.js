webpackJsonp([1],{122:function(e,t,n){e.exports=n(123)},123:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(124),s=n(128);new a.a({el:"#app",render:function(e){return e(s.a)}})},128:function(e,t,n){"use strict";function a(e){n(129)}var s=n(2),i=n(133),o=n(130),r=a,l=o(s.a,i.a,!1,r,null,null);t.a=l.exports},129:function(e,t){},133:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grid",attrs:{id:"db"}},[n("div",{staticClass:"grid__col--3"},[n("h1",[e._v(e._s(e.currentMonthName))]),e._v(" "),n("fieldset",[n("legend",[e._v("Add an expense")]),e._v(" "),n("label",[e._v("\n        Category:\n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.expenseCategory,expression:"expenseCategory"}],ref:"newExpenseCategory",staticClass:"field",attrs:{type:"text"},domProps:{value:e.expenseCategory},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.recordExpense(t)},input:function(t){t.target.composing||(e.expenseCategory=t.target.value)}}})]),e._v(" "),n("label",[e._v("\n        Amount\n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.expenseAmount,expression:"expenseAmount"}],ref:"newExpenseAmount",staticClass:"field",attrs:{type:"number"},domProps:{value:e.expenseAmount},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.recordExpense(t)},input:function(t){t.target.composing||(e.expenseAmount=t.target.value)}}})])]),e._v(" "),n("fieldset",[n("legend",[e._v("Income settings")]),e._v(" "),n("label",[e._v("\n        Income each payday\n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.amountPaid,expression:"amountPaid"}],attrs:{type:"number"},domProps:{value:e.amountPaid},on:{input:function(t){t.target.composing||(e.amountPaid=t.target.value)}}})]),e._v(" "),n("label",[e._v("\n        First pay day\n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.formattedPayDay1,expression:"formattedPayDay1"}],attrs:{type:"date"},domProps:{value:e.formattedPayDay1},on:{input:function(t){t.target.composing||(e.formattedPayDay1=t.target.value)}}})]),e._v(" "),n("label",[e._v("\n        Second pay day\n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.formattedPayDay2,expression:"formattedPayDay2"}],attrs:{type:"date"},domProps:{value:e.formattedPayDay2},on:{input:function(t){t.target.composing||(e.formattedPayDay2=t.target.value)}}})])])]),e._v(" "),n("div",{staticClass:"grid__col--9"},[n("div",{ref:"expenseTable",staticClass:"table"},[e._m(0),e._v(" "),n("div",{staticClass:"table__body"},e._l(e.expenses,function(t,a){return n("div",{staticClass:"table__row"},[n("div",{staticClass:"table__cell table__cell--numeric"},[e._v("\n            $"+e._s(t.amount)+"\n          ")]),e._v(" "),n("div",{staticClass:"table__cell"},[e._v("\n            "+e._s(t.category)+"\n          ")]),e._v(" "),n("div",{staticClass:"table__cell"},[n("span",{staticClass:"action action--remove",on:{click:function(t){e.deleteExpense(a)}}},[e._v("\n              ×\n            ")]),e._v(" "),n("span",{staticClass:"action action--edit",on:{click:function(t){e.editExpense(a)}}},[e._v("\n              edit\n            ")])])])})),e._v(" "),n("div",{staticClass:"table__foot"},[n("div",{staticClass:"table__row"},[n("div",{staticClass:"table__cell"},[n("strong",[e._v("Total")]),e._v("\n            $"+e._s(e.amountSpent)+"\n          ")]),e._v(" "),n("div",{staticClass:"table__cell"},[e._v("\n             \n          ")]),e._v(" "),n("div",{staticClass:"table__cell"},[n("strong",[e._v("Remaining:")]),e._v("\n            "+e._s(e.amountRemaining)+"\n          ")])])])]),e._v(" "),n("p",[n("strong",[e._v("Next pay day:")]),e._v("\n      "+e._s(e.daysUntilNextPayDay)+"\n    ")]),e._v(" "),n("p",[n("strong",[e._v("You can spend:")]),e._v("\n      "+e._s(e.amountPerDay)+"\n      per day\n    ")])])])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table__head"},[n("div",{staticClass:"table__row"},[n("div",{staticClass:"\n              table__cell\n              table__cell--head\n              table__cell--numeric\n            "},[e._v("\n            Amount\n          ")]),e._v(" "),n("div",{staticClass:"table__cell table__cell--head"},[e._v("\n            Category\n          ")]),e._v(" "),n("div",{staticClass:"table__cell table__cell--head"},[e._v("\n            Actions\n          ")])])])}],i={render:a,staticRenderFns:s};t.a=i},2:function(e,t,n){"use strict";var a=n(0),s=n.n(a);t.a={data:function(){return{currentMonthName:s()().format("MMMM"),editing:null,expenseAmount:"",expenseCategory:"",expenses:JSON.parse(localStorage.getItem("DB.expenses")||"[]"),payDay1:s()("2018-01-12"),payDay2:s()("2018-01-31"),amountPaid:parseFloat(localStorage.getItem("DB.amountPaid")||0)}},watch:{amountPaid:function(e){localStorage.setItem("DB.amountPaid",e)},expenses:function(e,t){if(localStorage.setItem("DB.expenses",JSON.stringify(this.expenses)),e.length>t.length){var n=this.$refs.expenseTable.querySelector(".table__body .table__row:first-child");n.classList.add("table__row--inserted","table__row--highlighted"),setTimeout(function(){n.classList.remove("table__row--highlighted"),setTimeout(function(){n.classList.remove("table__row--inserted")},1510)})}}},computed:{amountSpent:function(){return this.expenses.reduce(function(e,t){return e+parseFloat(t.amount)},0).toFixed(2)},formattedPayDay1:{get:function(){return this.payDay1.format("YYYY-MM-DD")},set:function(e){this.payDay1=s()(e)}},formattedPayDay2:{get:function(){return this.payDay2.format("YYYY-MM-DD")},set:function(e){this.payDay2=s()(e)}},amountRemaining:function(){return"$"+this.getAmountRemaining()},amountPerDay:function(){return"$"+(this.getAmountRemaining()/this.getDaysRemaining()).toFixed(2)},daysUntilNextPayDay:function(){return s()().startOf("day")<this.payDay1.startOf("day")?this.payDay1.startOf("day").from(s()().startOf("day")):this.payDay2.startOf("day").from(s()().startOf("day"))}},methods:{recordExpense:function(e){var t=parseFloat(this.expenseAmount),n=this.expenseCategory,a=this;if(!function(e,t,n){return window.errorTimeout&&(clearTimeout(window.errorTimeout),window.errorTimeout=null),[0,NaN].includes(t)?(e.$refs.newExpenseAmount.classList.add("field--error"),window.errorTimeout=setTimeout(function(){e.$refs.newExpenseAmount.classList.remove("field--error")}),e.$refs.newExpenseAmount.focus(),e.$refs.newExpenseAmount.select(),!1):!!n.length||(e.$refs.newExpenseCategory.classList.add("field--error"),window.errorTimeout=setTimeout(function(){e.$refs.newExpenseCategory.classList.remove("field--error")}),e.$refs.newExpenseCategory.focus(),!1)}(a,t,n))return!1;(function(e,t,n){var a=e.expenses.slice(0);e.editing?a[e.editing]={amount:t.toFixed(2),category:n}:a.unshift({amount:t.toFixed(2),category:n}),e.expenses=a})(a,t,n),function(e){e.expenseAmount="",e.expenseCategory="",e.$refs.newExpenseCategory.focus()}(a)},deleteExpense:function(e){this.expenses.splice(e,1)},editExpense:function(e){var t=this.expenses[e];this.editing=e,this.expenseAmount=t.amount,this.expenseCategory=t.category},getDaysRemaining:function(){return s()()<this.payDay1?this.payDay1.startOf("day").diff(s()().startOf("day"),"days"):this.payDay2.startOf("day").diff(s()().startOf("day"),"days")},getAmountRemaining:function(){return parseFloat(this.amountPaid-this.amountSpent).toFixed(2)}}}}},[122]);
//# sourceMappingURL=client.b0de9b0a.js.map