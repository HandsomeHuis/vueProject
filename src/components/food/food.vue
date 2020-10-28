<template>
	<transition name="move">
		<div v-show="showFlag" class="food" ref="food">
			<div class="food-content">
				<div class="image-header">
					<img :src="food.image" alt="" />
					<div class="back" @click="hide"><i class="icon-arrow_lift"></i></div>	
				</div>
				<div class="content">
					<h1 class="title">{{food.name}}</h1>
					<div class="detail">
						<span class="sell-count">月售{{food.sellCount}}</span>
						<span class="rating">好评率{{food.rating}}%</span>
					</div>
					<div class="price">
						<span class="now">￥{{food.price}}</span>
						<span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
					</div>
					<div class="cartcontrol-wrapper">
					<carcontrol :food="food"></carcontrol>
				</div>
				<div class="buy" v-show="!food.count || food.count===0" @click.stop.prevent="addFirst">加入购物车</div>
				</div>
				<split v-show="food.info"></split>
				<div class="info" v-show="food.info">
					<h1 class="title">商品介绍</h1>
					<p class="text">{{food.info}}</p>
				</div>
				<split v-show="food.info"></split>
				<div class="rating">
					<h1 class="title">商品评价</h1>
					<ratingselect @ratsel="cc" @togcont="dd" :slect-type="selectType" :only-content="onlyContent" :desc="desc" :ratings="food.ratings"></ratingselect>
				</div>
				<div class="rating-wrapper">
					<ul v-show="food.ratings && food.ratings.length">
						<li v-show="needShow(v.rateType,v.text)" v-for="(v,i) in food.ratings" class="rating-item">
							<div class="user">
								<span class="name">{{v.username}}</span>
								<img :src="v.avatar" class="avatar" width="12" height="12"/>
							</div>
							<div class="time">{{v.rateTime | formatDate}}</div>
							<p class="text">
								<span :class="{'icon-thumb_up':v.rateType===0,'icon-thumb_down':v.rateType===1}"></span>{{v.text}}
							</p>
						</li>
					</ul>
					<div class="no-rating" v-show="!food.ratings || !food.ratings.length">暂无评价</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import Vue from "vue"
	import BScroll from "better-scroll"
	import carcontrol from "../carcontrol/carcontrol.vue"
	import split from "../splite/split.vue"
	import ratingselect from "../ratingselect/ratingselect.vue"
	import {formatDate} from "../../common/js/date.js"
	
	const POSITIVE=0;
	const NEGATIVE=1;
	const ALL=2;
	export default{
		props:{
			food:{
				type:Object
			}
		},
		data(){
			return {
				showFlag:false,
				selectType:ALL,
				onlyContent:true,
				desc:{
					all:"全部",
					positive:"推荐",
					negative:"吐槽"
				}
			}
		},
		methods:{
			show(){
				this.showFlag=true;
				this.selectType=ALL;
				this.onlyContent=true;
				this.$nextTick(()=>{
					if(!this.scroll){
						this.scroll=new BScroll(this.$refs.food,{
							click:true
						})
					}
					else{
						this.scroll.refresh()
					}
				})
			},
			hide(){
				this.showFlag=false
			},
			addFirst(event){
				if(!event._constructed){
					return
				}
				Vue.set(this.food,"count",1)
			},
			needShow(type,text){
				if(this.onlyContent && !text){
					return false
				}
				if(this.selectType===ALL){
					
					return true
				}else{
					return type===this.selectType
				}
			},
			cc(e){
			
				this.selectType=e
				this.scroll.refresh()
				
			},
			dd(e){
				
				this.onlyContent=e
				this.scroll.refresh()
			}
		},
		filters:{
			formatDate(time){
				let date = new Date(time);
				return formatDate(date,"yyyy-MM-dd hh:mm")
			}
		},
		components:{
			carcontrol,
			split,
			ratingselect
		}
	}
</script>

<style scoped="">
	.food{
		position: fixed;
		left: 0;
		top:0;
		bottom: 48px;
		z-index:30;
		width: 100%;
		background: #fff;
	}
	.move-enter,.move-leave-to{
		transform: translate3d(0,0,0);
	}
	.move-enter-to,.move-leave{
		transform: translate3d(100%,0,0);
	}
	.move-enter-active,.move-leave-active{
		transition: all 0.2s linear;
    } 
    .image-header{
    	position: relative;
    	width:100%;
    	height: 0;
    	padding-top: 100%;
    }
    .image-header img{
    	position: absolute;
    	top:0;
    	left: 0;
    	width: 100%;
    	height: 100%;
    }
    .back{
    	position: absolute;
    	top: 10px;
    	left: 0;
    }
    .icon-arrow_lift{
    	display: block;
    	padding: 10px;
    	font-size: 20px;
    	color: #fff;
    }
    .content{
    	padding: 18px;
    	position: relative;
    }
    .content .title{
    	line-height: 14px;
    	margin-bottom: 8px;
    	font-size: 14px;
    	font-weight: 700;
    	color: rgb(7,17,27);
    }
    .content .detail{
    	margin-bottom: 18px;
    	line-height: 10px;
    	font-size: 0;
    	height: 10px;
    	
    }
     .content .sell-count,.count .rating{
     	font-size: 10px;
     	color: rgb(147,153,159);
     }
     .content .sell-count{
     	margin-right: 12px;
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
	.cartcontrol-wrapper{
		position: absolute;
		right: 12px;
		bottom: 12px;
	}
	.buy{
		position: absolute;
		right: 18px;
		bottom: 18px;
		z-index: 10;
		height: 24px;
		line-height: 24px;
		padding: 0 12px;
		box-sizing: border-box;
		font-size: 10px;
		border-radius: 12px;
		color: #fff;
		background: rgb(0,160,220);
	}
	.info{
		padding:18px;
	}
	.info .title{
		line-height: 14px;
		margin-bottom: 6px;
		font-size: 14px;
		color: rgb(7,17,27);
	}
	.info .text{
		color: rgb(7,17,27);
		line-height: 24px;
		padding:0 8px;
		font-size: 12px;
		color: rgb(77,85,93);
	}
	.rating{
		padding-top: 18px;
		
	}
	.rating .title{
		line-height: 14px;
		margin-left: 18px;
		font-size: 14px;
		color: rgb(7,17,27);
	}
	.rating-wrapper{
		padding:0 18px
	}
	.rating-wrapper .rating-item{
		position: relative;
		padding:16px 0;
		border-bottom: 1px solid rgba(7,17,27,0.1);
	}
	.rating-wrapper .rating-item .user{
		position: absolute;
		right: 0;
		top: 16px;
		font-size: 0;
		line-height: 12px;
	}
	.rating-wrapper .rating-item .user .name{
		display: inline-block;
		vertical-align: top;
		font-size: 10px;
		color: rgb(147,153,159);
		margin-right: 6px;
	}
	.rating-wrapper .rating-item .user .avatar{
		border-radius: 50%;
	}
	.rating-wrapper .rating-item .time{
		line-height: 12px;
		font-size: 10px;
		color: rgb(147,153,159);
		margin-bottom: 6px;
	}
	.rating-wrapper .rating-item .text{
		line-height: 16px;
		font-size: 12px;
		color: rgb(7,17,27);
	}
	.rating-wrapper .rating-item .text .icon-thumb_up,.rating-wrapper .rating-item .text .icon-thumb_down{
		line-height: 16px;
		margin-right: 4px;
		font-size: 12px;
	}
	.rating-wrapper .rating-item .text .icon-thumb_up{
		color: rgb(0,160,220);
	}
	.rating-wrapper .rating-item .text .icon-thumb_down{
		color: rgb(147,153,159);
	}
	.no-rating{
		padding:16px 0;
		font-size: 12px;
		color:rgb(147,153,159)
	}
</style>