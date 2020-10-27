<template>
	<div class="goods">
		<div class="menu-wrapper" ref="menuWrapper">
			<ul>
				<li v-for="(v,i) in goods" class="menu-item" :class="{'current':currentIndex===i}" @click="selectMenu(i,$event)">
					<span class="text">
						<span v-show="v.type>0" class="icon" :class="classMap[v.type]"></span>{{v.name}}
					</span>
				</li>
			</ul>
		</div>
		<div class="foods-wrapper" ref="foodsWrapper">
			<ul>
				<li v-for="item in goods" class="food-list food-list-hook">
					<h1 class="title">{{item.name}}</h1>
					<ul>
						<li v-for="(v,i) in item.foods" class="food-item" @click.stop="selectFood(v,$event)">
							<div class="icon"><img :src="v.icon" alt="" width="57" height="57"/></div>
							<div class="content">
								<h2 class="name">{{v.name}}</h2>
								<p class="desc">{{v.description}}</p>
								<div class="extra">
								<span class="count">月售{{v.sellCount}}份</span><span>好评率{{v.rating}}</span>
								</div>
								<div class="price">
									<span class="now">￥{{v.price}}</span><span v-show="v.oldPrice" class="old">￥{{v.oldPrice}}</span>
								</div>
								<div class="carcontrol-wrapper">
									<carcontrol :food="v"></carcontrol>
								</div>
							</div>
							
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<shopcar :select-foods="selectFoods" :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"></shopcar>
		<food :food="selectedFood" ref="food"></food>
	</div>
</template>

<script>
	import BScroll from "better-scroll"
	import shopcar from "../shopcar/shopcar.vue"
	import carcontrol from "../carcontrol/carcontrol.vue"
	import food from "../food/food.vue"
	const ERR_OK=0;
	export default{
		props:{
			seller:{
				type:Object
			}
		},
		created(){
			this.classMap=["decrease","discount","special","invoice","guarantee"];
//			this.$http.get("./api/goods")
//				.then((response)=>{
//					if(response.data.errno===ERR_OK){
//						this.goods=response.data.data;
//						this.$nextTick(()=>{
//							this._initScroll();
//							this._calculateHeight()
//						})
//						
//					}
//				})
			this.$http.get("./data/data.json")
				.then((response)=>{
  						this.goods=response.data.goods;
  						this.$nextTick(()=>{
  							this._initScroll();
  							this._calculateHeight()
  						})
  						
  					
				})
		},
		data(){
			return{
				goods:[],
				listHeight:[],
				scrollY:0,
				selectedFood:{}
			}
		},
		computed:{
			currentIndex(){
				for(let i=0;i <this.listHeight.length;i++){
					let height1=this.listHeight[i];
					let height2=this.listHeight[i+1]
					if(!height2 || (this.scrollY>height1&&this.scrollY<height2)){
						return i;
					}
				}
				return 0
			},
			selectFoods(){
				let foods=[];
				this.goods.forEach((good)=>{
					good.foods.forEach((food)=>{
						if(food.count){
							foods.push(food)
						}
					})
				})
				return foods
			}
		},
		methods:{
			selectFood(food,event){
				if(!event._constructed){
					return ;
				}
				this.selectedFood=food;
				this.$refs.food.show()
			},
			selectMenu(index,event) {
				if(!event._constructed){
					return;
				}
				let foodList = this.$refs.foodsWrapper.getElementsByClassName("food-list-hook");
				let el =foodList[index];
				this.foodsScroll.scrollToElement(el,300)
			},
			_initScroll(){
				this.menuScroll = new BScroll(this.$refs.menuWrapper,{
					click:true
				});
				this.foodsScroll = new BScroll(this.$refs.foodsWrapper,{
					click:true,
					probeType:3
				});
				this.foodsScroll.on("scroll",(pos)=>{
					this.scrollY=Math.abs(Math.round(pos.y))
				})
			},
			_calculateHeight(){
				let foodList = this.$refs.foodsWrapper.getElementsByClassName("food-list-hook")
				let height=0;
				this.listHeight.push(height);
				for(let i=0;i<foodList.length;i++){
					let item= foodList[i];
					height+=item.clientHeight;
					this.listHeight.push(height)
				}
			}
		},
		components:{
			shopcar,
			carcontrol,
			food
		}
	}
</script>

<style scoped="">
	.goods{
		position:absolute;
		top:174px;
		width:100%;
		bottom:46px;
		display: flex;
		overflow: hidden;
	}
	.goods .menu-wrapper{
		flex:0 0 80px;
		width:80px;
		background: #f3f5f7;
	}
	.goods .menu-item{
		display: table;
		height: 54px;
		width: 56px;
		line-height: 14px;
		padding:0 12px;	
	}
	.goods .current{
		position: relative;
		z-index: 10;
		margin-top: -1px;
		background: #fff;
		font-weight: 700;
	}
	.goods .menu-item .icon{
		display: inline-block;
		vertical-align: top;
		width:12px;
		height: 12px;
		margin-right: 2px;
		background-size: 12px 12px;
		background-repeat: no-repeat;
	}
	.foods-wrapper .title{
		padding-left:14px;
		height: 26px;
		line-height:26px;
		border-left: 2px solid #d9dde1;
		font-size: 12px;
		color: rgb(147,153,159);
		background: #f3f5f7;
	}
	.food-item{
		display: flex;
		margin:18px;
		padding-bottom: 18px;
		border-bottom:1px solid rgba(7,17,27,0.1);
	}
	.food-item:last-child{
		border-bottom: none;
		margin-bottom: 0px;
	}
	.goods .menu-item .decrease{
		background:url("./decrease_3@2x.png")
	}
	.goods .menu-item .discount{
		background:url("./discount_3@2x.png")
	}
	.goods .menu-item .guarantee{
		background:url("./guarantee_3@2x.png")
	}
	.goods .menu-item .invoice{
		background:url("./invoice_3@2x.png")
	}
	.goods .menu-item .special{
		background:url("./special_3@2x.png")
	}
	.goods .menu-item .text{
		display: table-cell;
		width: 56px;
		vertical-align: middle;
		font-size: 12px;
		text-align: center;
		border-bottom:1px solid rgba(7,17,27,0.2)
	}
	.goods .current .text{
		border-bottom: none;
	}
	.goods .foods-wrapper .icon{
		flex:0 0 57px;
		margin-right: 10px;
	}
	.goods .foods-wrapper .content{
		flex: 1;
		position:relative;
	}
	.goods .foods-wrapper .name{
		margin:2px 0 8px 0;
		height: 14px;
		line-height: 14px;
		font-size: 14px;
		color:rgb(7,17,27)
	}
	.goods .foods-wrapper .desc{
		margin-bottom: 8px;
		line-height: 12px;
		font-size: 10px;
		color: rgb(147,153,159);
	}
	.extra{
		line-height: 12px;
		font-size: 10px;
		color: rgb(147,153,159);
	}
	.count{
		margin-right:12px;
	}
	.price{
		font-weight: 700;
		line-height: 24px;
		
	}
	.price .now{
		margin-right: 8px;
		font-size: 14px;
		color: rgb(240,20,20);
	}
	.price .old{
		text-decoration: line-through;
		font-size: 10px;
		color: rgb(147,153,159);
	}
	.carcontrol-wrapper{
		position: absolute;
		right: 0;
		bottom: 12px;
	}
</style>