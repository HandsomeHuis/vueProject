webpackJsonp([1],{"/Pxg":function(t,s){},"6HuD":function(t,s){},BNO8:function(t,s){},C5X8:function(t,s){},FZxW:function(t,s){},Fq1M:function(t,s){},JJWX:function(t,s){},Lp1Y:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),i={props:{size:{type:Number},score:{type:Number}},data:function(){return{item:[]}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1!=0,a=Math.floor(s),i=0;i<a;i++)t.push("on");for(e&&t.push("half");t.length<5;)t.push("off");return t}}},n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"star",class:this.starType},this._l(this.itemClasses,function(t,e){return s("span",{staticClass:"starItem",class:t})}),0)},staticRenderFns:[]};var o=e("VU/8")(i,n,!1,function(t){e("Fq1M")},null,null).exports,r={props:{seller:{type:Object}},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]},data:function(){return{classMap:[],showDetail:!1}},methods:{sd:function(){this.showDetail=!0},hideDetail:function(){this.showDetail=!1}},components:{star:o}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.seller.avatar,alt:"",width:"64",height:"64"}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n\t\t\t\t"+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达\n\t\t\t")]),t._v(" "),t.seller.supports?e("div",{staticClass:"support"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"support-count",on:{click:t.sd}},[t.seller.supports?e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length)+"个")]):t._e(),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin-wrapper"},[e("span",{staticClass:"bulletin-title"}),t._v(" "),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right",on:{click:t.sd}})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,alt:""}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showDetail,expression:"showDetail"}],staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,a){return e("li",{staticClass:"support-item"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[a].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[a].description))])])}),0):t._e(),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])])])]),t._v(" "),e("div",{staticClass:"detail-close",on:{click:t.hideDetail}},[e("i",{staticClass:"icon-close"})])])])],1)},staticRenderFns:[]};var l={name:"App",components:{"v-header":e("VU/8")(r,c,!1,function(t){e("FZxW")},"data-v-40afc3c8",null).exports},data:function(){return{seller:{id:(t={},(s=window.location.search.match(/[?&][^?&]+=[^?&]+/g))&&s.forEach(function(s){var e=s.substring(1).split("="),a=decodeURIComponent(e[0]),i=decodeURIComponent(e[1]);t[a]=i}),t).id}};var t,s},created:function(){var t=this;this.$http.get("./data/data.json").then(function(s){t.seller=s.data.seller})}},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("v-header",{attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"wapper"},[e("div",{staticClass:"tab"},[e("router-link",{attrs:{to:"/goods"}},[t._v("商品")]),t._v(" "),e("router-link",{attrs:{to:"/ratings"}},[t._v("评价")]),t._v(" "),e("router-link",{attrs:{to:"/seller"}},[t._v("商家")])],1),t._v(" "),e("keep-alive",[e("router-view",{attrs:{seller:t.seller}})],1)],1)],1)},staticRenderFns:[]};var d=e("VU/8")(l,v,!1,function(t){e("wL9N")},"data-v-8633a59e",null).exports,p=e("/ocq"),u=e("GQaK"),h={props:{food:{type:Object}},methods:{addCar:function(){this.food.count?this.food.count++:a.a.set(this.food,"count",1)},decreaseCar:function(){this.food.count&&this.food.count--}}},f={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"carcontrol"},[e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"car-decrease",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.decreaseCar(s)}}},[e("span",{staticClass:"inner icon-remove_circle_outline"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"car-count"},[t._v(t._s(t.food.count))]),t._v(" "),e("div",{staticClass:"car-add icon-add_circle",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.addCar(s)}}})],1)},staticRenderFns:[]};var _=e("VU/8")(h,f,!1,function(t){e("bh4r")},"data-v-2c02bdfc",null).exports,C={props:{selectFoods:{type:Array,default:function(){return[{price:20,count:1}]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},data:function(){return{fold:!0}},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},payDesc:function(){return 0===this.totalPrice?"￥"+this.minPrice+"元起送":this.totalPrice<this.minPrice?"还差￥"+(this.minPrice-this.totalPrice)+"元起送":"去结算"},payClass:function(){return this.totalPrice<this.minPrice?"not-enough":"enough"},listShow:function(){var t=this;if(!this.totalCount>0)return this.fold=!0,!1;var s=!this.fold;return s&&this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new u.a(t.$refs.listContent,{click:!0})}),s}},methods:{toggleList:function(){this.totalCount&&(this.fold=!this.fold)},empty:function(){this.selectFoods.forEach(function(t){t.count=0})},pay:function(){this.totalPrice<this.minPrice||window.alert("支付"+this.totalPrice+"元")}},components:{carcontrol:_}},m={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"shopcar"},[e("div",{staticClass:"content",on:{click:t.toggleList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo",class:{highlight:t.totalCount>0}},[e("span",{staticClass:"icon-shopping_cart",class:{highlight:t.totalCount>0}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount>0"}],staticClass:"num"},[t._v(t._s(t.totalCount))])]),t._v(" "),e("div",{staticClass:"price",class:{hhh:t.totalCount>0}},[t._v("\n\t\t\t\t"+t._s(t.totalPrice)+"元\n\t\t\t")]),t._v(" "),e("div",{staticClass:"desc"},[t._v("\n\t\t\t\t另需配送费"+t._s(t.deliveryPrice)+"元\n\t\t\t")])]),t._v(" "),e("div",{staticClass:"content-right",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.pay(s)}}},[e("div",{staticClass:"pay",class:t.payClass},[t._v("\n\t\t\t\t"+t._s(t.payDesc)+"\n\t\t\t")])])]),t._v(" "),e("transition",{attrs:{name:"fold"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),t._v(" "),e("div",{ref:"listContent",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(s){return e("li",{staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.price*s.count))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("carcontrol",{attrs:{food:s}})],1)])}),0)])])])],1),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"list-mask"})])],1)},staticRenderFns:[]};var g=e("VU/8")(C,m,!1,function(t){e("/Pxg")},"data-v-32e26e62",null).exports,w={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"split"})},staticRenderFns:[]};var y=e("VU/8")({},w,!1,function(t){e("BNO8")},"data-v-6bbac440",null).exports,x={props:{ratings:{type:Array,default:function(){return[]}},selectType:{type:Number,default:2},onlyContent:{type:Boolean,default:!1},desc:{type:Object,default:function(){return{all:"全部",positive:"满意",negative:"不满意"}}}},computed:{positives:function(){return this.ratings.filter(function(t){return 0===t.rateType})},negatives:function(){return this.ratings.filter(function(t){return 1===t.rateType})}},data:function(){return{aa:this.selectType,bb:this.onlyContent}},methods:{select:function(t,s){s._constructed&&(this.aa=t,this.$emit("ratsel",t))},toggleContent:function(t){t._constructed&&(this.bb=!this.bb,this.$emit("togcont",this.bb))}}},b={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ratingselect"},[e("div",{staticClass:"rating-type"},[e("span",{staticClass:"block positive",class:{active:2===t.aa},on:{click:function(s){return t.select(2,s)}}},[t._v(t._s(t.desc.all)),e("span",{staticClass:"count"},[t._v(t._s(t.ratings.length))])]),t._v(" "),e("span",{staticClass:"block positive",class:{active:0===t.aa},on:{click:function(s){return t.select(0,s)}}},[t._v(t._s(t.desc.positive)),e("span",{staticClass:"count"},[t._v(t._s(t.positives.length))])]),t._v(" "),e("span",{staticClass:"block negative",class:{active:1===t.aa},on:{click:function(s){return t.select(1,s)}}},[t._v(t._s(t.desc.negative)),e("span",{staticClass:"count"},[t._v(t._s(t.negatives.length))])])]),t._v(" "),e("div",{staticClass:"switch",class:{on:t.bb},on:{click:function(s){return t.toggleContent(s)}}},[e("span",{staticClass:"icon-check_circle"}),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])])])},staticRenderFns:[]};var k=e("VU/8")(x,b,!1,function(t){e("TdRO")},"data-v-52afb0be",null).exports;function T(t,s){/(y+)/.test(s)&&(s=s.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var e={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var a in e)if(new RegExp("("+a+")").test(s)){var i=e[a]+"";s=s.replace(RegExp.$1,1===RegExp.$1.length?i:F(i))}return s}function F(t){return("00"+t).substr(t.length)}var $={props:{food:{type:Object}},data:function(){return{showFlag:!1,selectType:2,onlyContent:!0,desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},methods:{show:function(){var t=this;this.showFlag=!0,this.selectType=2,this.onlyContent=!0,this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new u.a(t.$refs.food,{click:!0})})},hide:function(){this.showFlag=!1},addFirst:function(t){t._constructed&&a.a.set(this.food,"count",1)},needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)},cc:function(t){this.selectType=t,this.scroll.refresh()},dd:function(t){this.onlyContent=t,this.scroll.refresh()}},filters:{formatDate:function(t){return T(new Date(t),"yyyy-MM-dd hh:mm")}},components:{carcontrol:_,split:y,ratingselect:k}},P={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],ref:"food",staticClass:"food"},[e("div",{staticClass:"food-content"},[e("div",{staticClass:"image-header"},[e("img",{attrs:{src:t.food.image,alt:""}}),t._v(" "),e("div",{staticClass:"back",on:{click:t.hide}},[e("i",{staticClass:"icon-arrow_lift"})])]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),e("div",{staticClass:"detail"},[e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.food.sellCount))]),t._v(" "),e("span",{staticClass:"rating"},[t._v("好评率"+t._s(t.food.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(t.food.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(t.food.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("carcontrol",{attrs:{food:t.food}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count||0===t.food.count,expression:"!food.count || food.count===0"}],staticClass:"buy",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.addFirst(s)}}},[t._v("加入购物车")])]),t._v(" "),e("split",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}],staticClass:"info"},[e("h1",{staticClass:"title"},[t._v("商品介绍")]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(t.food.info))])]),t._v(" "),e("split",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),t._v(" "),e("div",{staticClass:"rating"},[e("h1",{staticClass:"title"},[t._v("商品评价")]),t._v(" "),e("ratingselect",{attrs:{"slect-type":t.selectType,"only-content":t.onlyContent,desc:t.desc,ratings:t.food.ratings},on:{ratsel:t.cc,togcont:t.dd}})],1),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.food.ratings&&t.food.ratings.length,expression:"food.ratings && food.ratings.length"}]},t._l(t.food.ratings,function(s,a){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(v.rateType,v.text)"}],staticClass:"rating-item"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("img",{staticClass:"avatar",attrs:{src:s.avatar,width:"12",height:"12"}})]),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.rateTime)))]),t._v(" "),e("p",{staticClass:"text"},[e("span",{class:{"icon-thumb_up":0===s.rateType,"icon-thumb_down":1===s.rateType}}),t._v(t._s(s.text)+"\n\t\t\t\t\t\t")])])}),0),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.ratings||!t.food.ratings.length,expression:"!food.ratings || !food.ratings.length"}],staticClass:"no-rating"},[t._v("暂无评价")])])],1)])])},staticRenderFns:[]};var N=e("VU/8")($,P,!1,function(t){e("Lp1Y")},"data-v-87ed6aac",null).exports,E={props:{seller:{type:Object}},created:function(){var t=this;this.classMap=["decrease","discount","special","invoice","guarantee"],this.$http.get("./data/data.json").then(function(s){t.goods=s.data.goods,t.$nextTick(function(){t._initScroll(),t._calculateHeight()})})},data:function(){return{goods:[],listHeight:[],scrollY:0,selectedFood:{}}},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.scrollY>s&&this.scrollY<e)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t}},methods:{selectFood:function(t,s){s._constructed&&(this.selectedFood=t,this.$refs.food.show())},selectMenu:function(t,s){if(s._constructed){var e=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook")[t];this.foodsScroll.scrollToElement(e,300)}},_initScroll:function(){var t=this;this.menuScroll=new u.a(this.$refs.menuWrapper,{click:!0}),this.foodsScroll=new u.a(this.$refs.foodsWrapper,{click:!0,probeType:3}),this.foodsScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y))})},_calculateHeight:function(){var t=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook"),s=0;this.listHeight.push(s);for(var e=0;e<t.length;e++){s+=t[e].clientHeight,this.listHeight.push(s)}}},components:{shopcar:g,carcontrol:_,food:N}},M={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,a){return e("li",{staticClass:"menu-item",class:{current:t.currentIndex===a},on:{click:function(s){return t.selectMenu(a,s)}}},[e("span",{staticClass:"text"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"v.type>0"}],staticClass:"icon",class:t.classMap[s.type]}),t._v(t._s(s.name)+"\n\t\t\t\t")])])}),0)]),t._v(" "),e("div",{ref:"foodsWrapper",staticClass:"foods-wrapper"},[e("ul",t._l(t.goods,function(s){return e("li",{staticClass:"food-list food-list-hook"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s,a){return e("li",{staticClass:"food-item",on:{click:function(e){return e.stopPropagation(),t.selectFood(s,e)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{src:s.icon,alt:"",width:"57",height:"57"}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(s.sellCount)+"份")]),e("span",[t._v("好评率"+t._s(s.rating))])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(s.price))]),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"v.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"carcontrol-wrapper"},[e("carcontrol",{attrs:{food:s}})],1)])])}),0)])}),0)]),t._v(" "),e("shopcar",{attrs:{"select-foods":t.selectFoods,"delivery-price":t.seller.deliveryPrice,"min-price":t.seller.minPrice}}),t._v(" "),e("food",{ref:"food",attrs:{food:t.selectedFood}})],1)},staticRenderFns:[]};var S=e("VU/8")(E,M,!1,function(t){e("JJWX")},"data-v-d361491c",null).exports,D={props:{seller:{type:Object}},data:function(){return{ratings:[],selectType:2,onlyContent:!0}},methods:{needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)},cc:function(t){this.selectType=t,this.scroll.refresh()},dd:function(t){this.onlyContent=t,this.scroll.refresh()}},created:function(){var t=this;this.$http.get("./data/data.json").then(function(s){t.ratings=s.data.ratings,t.$nextTick(function(){t.scroll=new u.a(t.$refs.ratings,{click:!0})})})},filters:{formatDate:function(t){return T(new Date(t),"yyyy-MM-dd hh:mm")}},components:{star:o,split:y,ratingselect:k}},R={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"ratings",staticClass:"ratings"},[e("div",{staticClass:"ratings-content"},[e("div",{staticClass:"overview"},[e("div",{staticClass:"overview-left"},[e("h1",{staticClass:"score"},[t._v(t._s(t.seller.score))]),t._v(" "),e("div",{staticClass:"title"},[t._v("综合评分")]),t._v(" "),e("div",{staticClass:"rank"},[t._v("高于周边商家"+t._s(t.seller.rankRate)+"%")])]),t._v(" "),e("div",{staticClass:"overview-right"},[e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("服务态度")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.serviceScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.serviceScore))])],1),t._v(" "),e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("商品评分")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.foodScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.foodScore))])],1),t._v(" "),e("div",{staticClass:"delivery-wrapper"},[e("span",{staticClass:"title"},[t._v("送达时间")]),t._v(" "),e("span",{staticClass:"delivery"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),t._v(" "),e("split"),t._v(" "),e("ratingselect",{attrs:{"slect-type":t.selectType,"only-content":t.onlyContent,ratings:t.ratings},on:{ratsel:t.cc,togcont:t.dd}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",t._l(t.ratings,function(s,a){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(v.rateType,v.text)"}],staticClass:"rating-item"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:s.avatar,alt:"",width:"28",height:"28"}})]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:24,score:s.score}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.deliveryTime,expression:"v.deliveryTime"}],staticClass:"delivery"},[t._v(t._s(s.deliveryTime))])],1),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(s.text))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:s.recommend&&s.recommend.length,expression:"v.recommend && v.recommend.length"}],staticClass:"recommend"},[e("span",{staticClass:"icon-thumb_up"}),t._v(" "),t._l(s.recommend,function(s){return e("span",{staticClass:"item"},[t._v(t._s(s))])})],2),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.rateTime)))])])])}),0)]),t._v(" "),e("div",{staticClass:"db"},[t._v("人家也是有底线的")])],1)])},staticRenderFns:[]};var H=e("VU/8")(D,R,!1,function(t){e("C5X8")},"data-v-2ecb60f3",null).exports,W={props:{seller:{type:Object}},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]},data:function(){return{favorite:!1}},methods:{toggleFavorite:function(){event._constructed&&(this.favorite=!this.favorite)}},computed:{favoriteText:function(){return this.favorite?"已收藏":"收藏"}},mounted:function(){if(this.seller.pics){var t=126*this.seller.pics.length-6;this.$refs.piclist.style.width=t+"px",this.picScroll?this.picScroll.refresh():this.picScroll=new u.a(this.$refs.picWrapper,{scrollX:!0,eventPassthroug:"vertical"})}this.scroll=new u.a(this.$refs.seller,{click:!0})},updated:function(){},components:{star:o,split:y}},U={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"seller",staticClass:"seller"},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"overview"},[e("h1",{staticClass:"title"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"desc"},[e("star",{attrs:{size:36,score:t.seller.score}}),t._v(" "),e("span",{staticClass:"text"},[t._v("("+t._s(t.seller.ratingCount)+")")]),t._v(" "),e("span",{staticClass:"text"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1),t._v(" "),e("ul",{staticClass:"remark"},[e("li",{staticClass:"block"},[e("h2",[t._v("起送价")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.minPrice))]),t._v("元\n\t\t\t\t\t")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("商家配送")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryPrice))]),t._v("元\n\t\t\t\t\t")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("平均配送时间")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryTime))]),t._v("分钟\n\t\t\t\t\t")])])]),t._v(" "),e("div",{staticClass:"favorite",on:{click:t.toggleFavorite}},[e("span",{staticClass:"icon-favorite",class:{active:t.favorite}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.favoriteText))])])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"bulletin"},[e("h1",{staticClass:"title"},[t._v("公告与活动")]),t._v(" "),e("div",{staticClass:"content-wrapper"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,a){return e("li",{staticClass:"support-item"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[a].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[a].description))])])}),0):t._e()]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"pics"},[e("h1",{staticClass:"title"},[t._v("商家实景")]),t._v(" "),e("div",{ref:"picWrapper",staticClass:"pic-wrapper"},[e("ul",{ref:"piclist",staticClass:"pic-list"},t._l(t.seller.pics,function(t,s){return e("li",{staticClass:"pic-item"},[e("img",{attrs:{src:t,alt:"",width:"120",height:"90"}})])}),0)])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"info"},[e("h1",{staticClass:"title"},[t._v("商家信息")]),t._v(" "),e("ul",t._l(t.seller.infos,function(s,a){return e("li",{staticClass:"info-item"},[t._v(t._s(s))])}),0)])],1)])},staticRenderFns:[]};var V=e("VU/8")(W,U,!1,function(t){e("bV4Q")},"data-v-c15bc9ae",null).exports,O=new p.a({routes:[{path:"/goods",component:S},{path:"/ratings",component:H},{path:"/seller",component:V},{path:"/",redirect:"/goods"}]}),j=e("mtWM"),z=e.n(j);e("6HuD");a.a.use(p.a),a.a.config.productionTip=!1,a.a.prototype.$http=z.a,new a.a({el:"#app",components:{App:d},template:"<App/>",router:O})},TdRO:function(t,s){},bV4Q:function(t,s){},bh4r:function(t,s){},wL9N:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.6bd7e20153daf037e052.js.map