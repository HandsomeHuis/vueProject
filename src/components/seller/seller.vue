<template>
	<div class="seller" ref="seller">
		<div class="seller-content">
			<div class="overview">
				<h1 class="title">{{seller.name}}</h1>
				<div class="desc">
					<star :size="36" :score="seller.score"></star>
					<span class="text">({{seller.ratingCount}})</span>
					<span class="text">月售{{seller.sellCount}}单</span>
				</div>
				<ul class="remark">
					<li class="block">
						<h2>起送价</h2>
						<div class="content">
							<span class="stress">{{seller.minPrice}}</span>元
						</div>
					</li>
					<li class="block">
						<h2>商家配送</h2>
						<div class="content">
							<span class="stress">{{seller.deliveryPrice}}</span>元
						</div>
					</li>
					<li class="block">
						<h2>平均配送时间</h2>
						<div class="content">
							<span class="stress">{{seller.deliveryTime}}</span>分钟
						</div>
					</li>
				</ul>
				<div class="favorite" @click="toggleFavorite">
					<span class="icon-favorite" :class="{'active':favorite}"></span>
					<span class="text">{{favoriteText}}</span>
				</div>
			</div>
			<split></split>
			<div class="bulletin">
				<h1 class="title">公告与活动</h1>
				<div class="content-wrapper">
					<p class="content">{{seller.bulletin}}</p>
				</div>
				<ul v-if="seller.supports" class="supports">
					<li class="support-item" v-for="(v,i) in seller.supports">
						<span class="icon" :class="classMap[seller.supports[i].type]"></span>
						<span class="text">{{seller.supports[i].description}}</span>
					</li>
				</ul>
			</div>
			<split></split>
			<div class="pics">
				<h1 class="title">商家实景</h1>
				<div class="pic-wrapper" ref="picWrapper">
					<ul class="pic-list" ref="piclist">
						<li class="pic-item" v-for="(v,i) in seller.pics">
							<img :src="v" alt="" width="120" height="90" />
						</li>
					</ul>
				</div>
			</div>
			<split></split>
			<div class="info">
				<h1 class="title">商家信息</h1>
				<ul>
					<li class="info-item" v-for="(v,i) in seller.infos">{{v}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import star from"../star/star.vue"
	import split from "../splite/split.vue"
	import BScroll from "better-scroll"
	export default {
		props:{
			seller:{
				type:Object
			}
		},
		created(){
			this.classMap=["decrease","discount","special","invoice","guarantee"]
		},
		data(){
			return{
				favorite:false
			}
		},
		methods:{
			toggleFavorite(){
				if(!event._constructed){
					return
				}
				this.favorite=!this.favorite
			}
		},
		computed:{
			favoriteText(){
				return this.favorite?"已收藏":"收藏"
			}
		},
		mounted(){
			if(this.seller.pics){
				let picWidth=120;
				let margin=6;
				let width=(picWidth+margin)*this.seller.pics.length-margin;
				this.$refs.piclist.style.width=width+"px"
				if(!this.picScroll){
					this.picScroll=new BScroll(this.$refs.picWrapper,{
						scrollX:true,
						eventPassthroug:"vertical"
					})
				}else{
					this.picScroll.refresh()
				}
				
			}
			this.scroll=new BScroll(this.$refs.seller,{
				click:true
			})
		},
		updated(){
			
		},
		components:{
			star,
			split
		}
	}
</script>

<style scoped="">
	.seller{
		position: absolute;
		top: 174px;
		bottom: 0;
		width: 100%;
		left: 0;
		overflow: hidden;
	}
	.seller .overview{
		padding:18px;
		position: relative;
		
	}
	.overview .title{
		margin-bottom: 8px;
		line-height: 14px;
		color: rgb(7,17,27);
		font-size: 14px;
	}
	.overview .desc{
		padding-bottom: 18px;
		font-size: 0;
		border-bottom: 1px solid rgba(7,17,27,0.1);
	}
	.overview .desc .star{
		display: inline-block;
		vertical-align: top;
		margin-right: 8px;
	}
	.overview .desc .text{
		display: inline-block;
		line-height: 18px;
		vertical-align: top;
		margin-right: 12px;
		font-size: 10px;
		color: rgb(77,85,93);
	}
	.overview .remark{
		display: flex;
		padding-top: 18px;
	}
	.overview .favorite{
		position: absolute;
		right: 11px;
		top: 18px;
		text-align: center;
		width: 50px;
	}
	.overview .favorite .icon-favorite{
	
		display: block;
		color: #d4d6d9;
		line-height: 24px;
		font-size: 24px;	
		margin-bottom: 4px;
	}
	.overview .favorite .icon-favorite.active{
		color: rgb(240,20,20);
	}
	.overview .favorite .text{
		line-height: 10px;
		font-size: 10px;
		color: rgb(77,85,93);
	}
	.overview .remark .block{
		flex: 1;
		text-align: center;
		border-right: 1px solid rgba(7,17,27,0.1);
	}
	.overview .remark .block:last-child{
		border-right: none;
	}
	.remark .block h2{
		margin-bottom: 4px;
		line-height: 10px;
		font-size: 10px;
		color: rgb(147,153,159);
	}
	.remark .block .content{
		line-height: 24px;
		font-size: 10px;
		color: rgb(7,17,27);
	}
	.remark .block .content .stress{
		font-size: 24px;
	}
	.seller .bulletin{
		padding:18px 18px 0 18px
	}
	.seller .bulletin .title{
		margin-bottom: 8px;
		line-height: 14px;
		color: rgb(7,17,27);
		font-size: 14px;
	}
	.seller .bulletin .content-wrapper{
		padding: 0 12px 16px 12px;
		border-bottom: 1px solid rgba(7,17,27,0.1);
	}
	.bulletin .content-wrapper .content{
		line-height: 24px;
		font-size: 12px;
		color: rgb(240,20,20);
	}
	.bulletin .supports .support-item{
		padding:16px 12px;
		font-size: 0;
		border-bottom: 1px solid rgba(7,17,27,0.1);
	}
	.bulletin .supports .support-item:last-child{
		border:none
	}
	.supports .icon{
		display: inline-block;
		width:16px;
		height: 16px;
		vertical-align: top;
		margin-right: 6px;
		background-size: 16px 16px;
		background-repeat: no-repeat;
	}
	.supports .decrease{
		background:url("./decrease_4@2x.png");
	}
	.supports .discount{
		background:url("./discount_4@2x.png");
	}
	.supports .guarantee{
		background:url("./guarantee_4@2x.png");
	}
	.supports .invoice{
		background:url("./invoice_4@2x.png");
	}
	.supports .special{
		background:url("./special_4@2x.png");
	}
	.bulletin .supports .text{
		line-height: 16px;
		font-size: 12px;
		color:rgb(7,17,27) ;
	}
	.pics{
		padding: 18px;
	}
	.pics .title{
		margin-bottom: 12px;
		line-height: 14px;
		color: rgb(7,17,27);
		font-size: 14px;
	}
	.pics .pic-wrapper{
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		
	}
	.pics .pic-wrapper .pic-list{
		font-size: 0;
	}
	.pic-wrapper .pic-list .pic-item{
		display: inline-block;
		margin-right: 6px;
		width: 120px;
		height: 90px;
	}
	.pic-wrapper .pic-list .pic-item:last-child{
		margin-right: 0;
	}
	.info{
		padding: 18px 18px 0 18px;
		color: rgb(7,17,27);
	}
	.info .title{
		padding-bottom: 12px;
		line-height: 14px;
		
		font-size: 14px;
		border-bottom: 1px solid rgba(7,17,27,0.1);
	}
	.info .info-item{
		padding:16px 12px;
		line-height: 16px;
		border-bottom: 1px solid rgba(7,17,27,0.1);
		font-size: 12px;
	}
	.info .info-item:last-child{
		border:none
	}
</style>