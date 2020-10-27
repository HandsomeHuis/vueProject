<template>
	<div class="header">
		<div class="content-wrapper">
			<div class="avatar">
				<img :src="seller.avatar" alt="" width="64" height="64"/>
			</div>
			<div class="content">
				<div class="title">
					<span class="brand"></span>
					<span class="name">{{seller.name}}</span>
				</div>
				<div class="description">
					{{seller.description}}/{{seller.deliveryTime}}分钟送达
				</div>
				<div v-if="seller.supports" class="support">
					<span class="icon" :class="classMap[seller.supports[0].type]"></span>
					<span class="text">{{seller.supports[0].description}}</span>
				</div>
			</div>
			<div v-if="seller.supports" class="support-count" @click="sd">
				<span class="count" v-if="seller.supports">{{seller.supports.length}}个</span>
				<i class="icon-keyboard_arrow_right"></i>
			</div>
		</div>
		<div class="bulletin-wrapper">
			<span class="bulletin-title"></span>
			<span class="bulletin-text">{{seller.bulletin}}</span>
			<i class="icon-keyboard_arrow_right" @click="sd"></i>
		</div>
		<div class="background">
			<img :src="seller.avatar" alt="" />
		</div>
		<transition name=fade>
			<div class="detail"   v-show="showDetail">
				<div class="detail-wrapper clearfix">
					<div class="detail-main">
						<h1 class="name">{{seller.name}}</h1>
						<div class="star-wrapper">
							<star :size="48" :score="seller.score"></star>
						</div>
						<div class="title">
							<div class="line"></div>
							<div class="text">优惠信息</div>
							<div class="line"></div>
						</div>
						<ul v-if="seller.supports" class="supports">
							<li class="support-item" v-for="(v,i) in seller.supports">
								<span class="icon" :class="classMap[seller.supports[i].type]"></span>
								<span class="text">{{seller.supports[i].description}}</span>
							</li>
						</ul>
						<div class="title">
							<div class="line"></div>
							<div class="text">商家公告</div>
							<div class="line"></div>
						</div>
						<div class="bulletin">
							<p class="content">{{seller.bulletin}}</p>
						</div>
					</div>	
				</div>
				<div class="detail-close" @click="hideDetail">
					<i class="icon-close"></i>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	import star from "../star/star.vue"
	export default{
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
				classMap:[],
				showDetail:false
			}
		},
		methods:{
			sd(){
				this.showDetail=true;
			},
			hideDetail(){
				this.showDetail=false;
			}
		},
		components:{
			star
		}
	}
</script>

<style scoped>
	.fade-enter-active, .fade-leave-active {
  		transition: opacity .5s;
	}
		.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		  opacity: 0;
		}
	.header{
		color:#fff;
		position: relative;
		background: rgba(7,17,27,0.5);
		overflow: hidden;
	}
	.content-wrapper{
		padding:24px 12px 18px 24px;
		font-size: 0px;
		position:relative;
	}
	.avatar{
		display: inline-block;
		vertical-align: top;
	}
	.avatar img{
		border-radius: 2px;
	}
	.content{
		display: inline-block;
		margin-left: 16px;
	}
	.title{
		margin:2px 0 8px 0;
	}
	.brand{
		display: inline-block;
		vertical-align: top;
		width:30px;
		height: 18px;
		background: url("./brand@2x.png");
		background-size: 30px 18px;
		background-repeat: no-repeat;
	}
	.name{
		margin-left:6px;
		font-size: 16px;
		line-height: 18px;
		font-weight: bold;
	}
	.description{
		margin-bottom: 10px;
		line-height: 12px;
		font-size: 12px;
	}
	.support .icon{
		display: inline-block;
		vertical-align: top;
		width:12px;
		height: 12px;
		margin-right: 4px;
		background-repeat:no-repeat;
		background-size: 12px 12px;
	}
	.support .text{
		font-size: 10px;
		line-height: 12px;
	}
	.support .decrease{
		background:url("./decrease_1@2x.png")
	}
	.support .discount{
		background:url("./discount_1@2x.png")
	}
	.support .guarantee{
		background:url("./guarantee_1@2x.png")
	}
	.support .invoice{
		background:url("./invoice_1@2x.png")
	}
	.support .special{
		background:url("./special_1@2x.png")
	}
	.support-count{
		position:absolute;
		right: 12px;
		bottom:14px;
		padding:0px 8px;
		height: 24px;
		line-height: 24px;
		border-radius: 14px;
		background: rgba(0,0,0,0.2);
		text-align: center;
	}
	.support-count .count{
		font-size: 10px;
		vertical-align: top;
	}
	.support-count .icon-keyboard_arrow_right{
		font-size: 10px;
		line-height: 24px;
		margin-left: 2px;
	}
	.bulletin-wrapper{
		height: 28px;
		line-height: 28px;
		padding:0 22px 0 12px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		position: relative;
		background: rgba(7,17,27,0.2);
	}
	.bulletin-wrapper .bulletin-title{
		display: inline-block;
		width:22px;
		height: 12px;
		background: url("./bulletin@2x.png");
		background-size: 22px 12px;
		vertical-align: top;
		margin-top: 8px;
		background-repeat: no-repeat;
	}
	.bulletin-wrapper .bulletin-text{
		font-size: 10px;
		font-weight: 200;
		margin:0 4px;
		vertical-align: top;
	}
	.bulletin-wrapper .icon-keyboard_arrow_right{
		position: absolute;
		font-size: 10px;
		right: 12px;
		top:8px;
	}
	.background{
		position: absolute;
		top:0px;
		left: 0px;
		width:100%;
		height: 100%;
		z-index: -1;
		filter:blur(10px)
	}
	.background img{
		width:100%;
		height: 100%;
	}
	.detail{
		position:fixed;
		z-index: 100;
		width:100%;
		height: 100%;
		overflow: auto;
		background: rgba(7,17,27,0.8);
		top:0px;
		left: 0px;
	}
	.detail-wrapper{
		min-height: 100%;
		width:100%;
	}
	.detail-main{
		margin-top:64px;
		padding-bottom:64px;
	}
	.detail-close{
		position: relative;
		width:32px;
		height: 32px;
		margin:-64px auto 0 auto;
		clear:both;
		font-size: 32px;
	}
	.detail-main .name{
		line-height: 16px;
		text-align: center;
		font-size: 16px;
		font-weight: 700;
	}
	.star-wrapper{
		margin-top:18px;
		padding:2px 0;
		text-align: center;
	}
	.detail-main .title{
		display: flex;
		width: 80%;
		margin:28px auto 24px auto;
		
	}
	.detail-main .title .line{
		flex: 1;
		position: relative;
		top:-6px;
		border-bottom: 1px solid rgba(255,255,255,0.2);
	}
	.detail-main .title .text{
		padding:0 12px;
		font-size: 14px;
		font-weight: 700;
	}
	.detail-main .supports{
		width:80%;
		margin:0px auto;
	}
	.detail-main .supports .support-item{
		padding:0 12px;
		margin-bottom: 12px;
		font-size: 0;
	}
	.detail-main .supports .support-item:last-child{
		margin-bottom: 0px;
	}
	.detail-main .supports .icon{
		display: inline-block;
		width:16px;
		height: 16px;
		vertical-align: top;
		margin-right: 6px;
		background-size: 16px 16px;
		background-repeat: no-repeat;
	}
	.detail-main .supports .decrease{
		background:url("./decrease_2@2x.png");
	}
	.detail-main .supports .discount{
		background:url("./discount_2@2x.png");
	}
	.detail-main .supports .guarantee{
		background:url("./guarantee_2@2x.png");
	}
	.detail-main .supports .invoice{
		background:url("./invoice_2@2x.png");
	}
	.detail-main .supports .special{
		background:url("./special_2@2x.png");
	}
	.detail-main .supports .text{
		line-height: 16px;
		font-size: 12px;
	}
	.detail-main  .bulletin{
		widows: 80%;
		margin:0px auto
	}
	.detail-main .bulletin .content{
		padding:0px 12px;
		line-height: 24px;
		font-size: 12px;
	}
	@media (-webkit-min-device-pixel-ratio:3),(min-device-pixel-ratio:3){
		
	.brand{
		background: url("./brand@3x.png");
	}
	.support .decrease{
		background:url("./decrease_1@3x.png")
	}
	.support .discount{
		background:url("./discount_1@3x.png")
	}
	.support .guarantee{
		background:url("./guarantee_1@3x.png")
	}
	.support .invoice{
		background:url("./invoice_1@3x.png")
	}
	.support .special{
		background:url("./special_1@3x.png")
	}	
	.bulletin-wrapper .bulletin-title{
		background: url("./bulletin@3x.png");
	}	
	}
</style>