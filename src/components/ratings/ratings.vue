<template>
	<div class="ratings" ref="ratings">
		<div class="ratings-content">
			<div class="overview">
				<div class="overview-left">
					<h1 class="score">{{seller.score}}</h1>
					<div class="title">综合评分</div>
					<div class="rank">高于周边商家{{seller.rankRate}}%</div>
				</div>
				<div class="overview-right">
					<div class="score-wrapper">
						<span class="title">服务态度</span>
						<star :size="36" :score="seller.serviceScore"></star>
						<span class="score">{{seller.serviceScore}}</span>
					</div>
					<div class="score-wrapper">
						<span class="title">商品评分</span>
						<star :size="36" :score="seller.foodScore"></star>
						<span class="score">{{seller.foodScore}}</span>
					</div>
					<div class="delivery-wrapper">
						<span class="title">送达时间</span>
						<span class="delivery">{{seller.deliveryTime}}分钟</span>
					</div>
				</div>
			</div>
			<split></split>
			<ratingselect  @ratsel="cc" @togcont="dd" :slect-type="selectType"  :only-content="onlyContent"  :ratings="ratings"></ratingselect>
			<div class="rating-wrapper">
				<ul>
					<li v-for="(v,i) in ratings" class="rating-item" v-show="needShow(v.rateType,v.text)">
						<div class="avatar">
							<img :src="v.avatar" alt="" width="28" height="28"/>
						</div>
						<div class="content">
							<h1 class="name">{{v.username}}</h1>
							<div class="star-wrapper">
								<star :size="24" :score="v.score"></star>
								<span class="delivery" v-show="v.deliveryTime">{{v.deliveryTime}}</span>
							</div>
							<p class="text">{{v.text}}</p>
							<div class="recommend" v-show="v.recommend && v.recommend.length">
								<span class="icon-thumb_up"></span>
								<span class="item" v-for="item in v.recommend">{{item}}</span>
							</div>
							<div class="time">{{v.rateTime | formatDate}}</div>
						</div>
						
						
					</li>
				</ul>
			</div>
			<div class="db">人家也是有底线的</div>
		</div>
		
	</div>
</template>

<script>
	
	const ALL=2;
	const ERR_OK=0
	import BScroll from "better-scroll"
	import star from "../star/star.vue"
	import split from "../splite/split.vue"
	import ratingselect from "../ratingselect/ratingselect.vue"
	import {formatDate} from "../../common/js/date.js"
	export default{
		props:{
			seller:{
				type:Object
			}
		},
		data(){
			return{
				ratings:[],
				selectType:ALL,
				onlyContent:true
			}
		},
		methods:{
			
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
		created(){
//			this.$http.get("/api/ratings").then((response)=>{
//				if(response.data.errno===ERR_OK){
//					this.ratings=response.data.data;
//					this.$nextTick(()=>{
//						this.scroll=new BScroll(this.$refs.ratings,{
//						click:true
//					})	
//					})
//					
//				}
//			})
			this.$http.get("./data/data.json").then((response)=>{
				
					this.ratings=response.data.ratings;
					this.$nextTick(()=>{
						this.scroll=new BScroll(this.$refs.ratings,{
						click:true
					})	
					})
					
				
			})
		},
		filters:{
			formatDate(time){
				let date = new Date(time);
				return formatDate(date,"yyyy-MM-dd hh:mm")
			}
		},
		components:{
			star,
			split,
			ratingselect
		}
	}
</script>

<style scoped="">
	.ratings{
		position: absolute;
		top: 174px;
		bottom: 0;
		width: 100%;
		left: 0;
		overflow: hidden;
	}
	.overview{
		display: flex;
		padding:18px 0;
	}
	.overview .overview-left{
		flex: 0 0 137px;
		width: 137px;
		border-right: 1px solid rgba(7,17,27,0.1);
		text-align: center;
		padding: 6px 0;
	}
	.overview-left .score{
		margin-bottom: 6px;
		line-height: 28px;
		font-size: 24px;
		color: rgb(255,153,0);
	}
	.overview-left .title{
		line-height: 12px;
		font-size: 12px;
		color: rgb(7,17,27);
		margin-bottom: 8px;
	}
	.overview-left .rank{
		line-height: 10px;
		font-size: 10px;
		color: rgb(147,153,159);
	}
	.overview .overview-right{
		flex: 1;
		padding:6px 0 6px 24px;
	}
	.overview-right .score-wrapper{
		margin-bottom: 8px;
		font-size: 0;
	}
	.overview-right .score-wrapper .title{
		line-height: 18px;
		display: inline-block;
		vertical-align: top;
		font-size: 12px;
		color: rgb(7,17,27);
	}
	.overview-right .score-wrapper .star{
		display: inline-block;
		vertical-align: top;
		margin:0 12px;
	}
	.overview-right .score-wrapper .score{
		line-height: 18px;
		display: inline-block;
		vertical-align: top;
		font-size: 12px;
		color: rgb(255,153,0);
	}
	.overview-right .delivery-wrapper{
		font-size: 0;
	}
	.overview-right .delivery-wrapper .title{
		line-height: 18px;
		font-size: 12px;
		color: rgb(7,17,27);
	}
	.overview-right .delivery-wrapper .delivery{
		margin-left: 12px;
		font-size: 12px;
		color: rgb(147,153,159);
	}
	.ratings-content .rating-wrapper{
		padding: 0 18px;
	}
	.rating-wrapper .rating-item{
		display: flex;
		padding:18px 0;
		border-bottom: 1px solid rgba(7,17,27,0.1);
	}
	.rating-item .avatar{
		flex: 0 0 28px;
		width: 28px;
		margin-right: 12px;
	}
	.rating-item .avatar img{
		border-radius: 50%;
	}
	.rating-item .content{
		position: relative;
		flex: 1;
	}
	.rating-item .content .name{
		margin-bottom: 4px;
		line-height: 12px;
		font-size: 10px;
		color: rgb(7,17,27);
	}
	.rating-item .content .star-wrapper{
		margin-bottom: 6px;
		font-size: 0;
	}
	.rating-item .content .star-wrapper .star{
		display: inline-block;
		vertical-align: top;
		margin-right: 6px;
	}
	.rating-item .content .star-wrapper .delivery{
		display: inline-block;
		vertical-align: top;
		line-height: 12px;
		font-size: 10px;
		color: rgb(147,153,159);
	}
	.rating-item .content .text{
		line-height: 18px;
		color: rgb(7,17,27);
		font-size: 12px;
		margin-bottom: 8px;
	}
	.rating-item .content .recommend{
		line-height: 16px;
		font-size: 0;
	}
	.rating-item .content .recommend .icon-thumb_up,.rating-item .content .recommend .item{
		display: inline-block;
		margin: 0 8px 4px 0;
		font-size: 9px;
	}
	.rating-item .content .recommend .icon-thumb_up{
		color: rgb(0,160,220);
	}
	.rating-item .content .recommend .item{
		padding:0 6px;
		border: 1px solid rgba(7,17,27,0.1);
		border-radius: 1px;
		color: rgb(147,153,159) ;
		background: #fff;
	}
	.rating-item .content .time{
		position: absolute;
		top: 0;
		right: 0;
		line-height: 12px;
		font-size: 10px;
		color:  rgb(147,153,159);
	}
	@media only screen and (max-width: 320px) {
		.overview .overview-left{
			flex: 0 0 115px;
			width: 115px;
		}
		.overview .overview-right{
			padding-left: 4px;
		}
		
	}
	
</style>