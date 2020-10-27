<template>
	<div class="star" :class="starType">
		<span v-for="(v,i) in itemClasses" :class="v" class="starItem"></span>
	</div>
</template>

<script>
	const LENTHE=5;
	const CLS_ON="on";
	const CLS_HALF="half";
	const CLS_OFF="off";
	export default{
		props:{
			size:{
				type:Number
			},
			score:{
				type:Number
			}
		},
		data(){
			return {
				item:[]
			}
		},
		computed:{
			starType(){
				return "star-" + this.size
			},
			itemClasses(){
				let result=[];
				let score=Math.floor(this.score*2)/2;
				let hasDecimal= score%1!==0;
				let integer=Math.floor(score);
				for(let i=0;i<integer;i++){
					result.push(CLS_ON)
				}
				if(hasDecimal){
					result.push(CLS_HALF)
				}
				while(result.length<LENTHE){
					result.push(CLS_OFF)
				}
				return result
			}
		}
	}
</script>

<style>
	.star .starItem{
		display: inline-block;
		background-repeat: no-repeat;
	}
	.star-48 .starItem{
		width:20px;
		height: 20px;
		margin-right: 22px;
		background-size: 20px 20px;
	}
	.star-48 .starItem:last-child{
		margin-right: 0px;
	}
	.star-48 .starItem.on{
		background: url("./star48_on@2x.png");
	}
	.star-48 .starItem.half{
		background: url("./star48_half@2x.png");
	}
	.star-48 .starItem.off{
		background: url("./star48_off@2x.png");
	}
	.star-36 .starItem{
		width:15px;
		height: 15px;
		margin-right: 16px;
		background-size: 15px 15px;
	}
	.star-36 .starItem:last-child{
		margin-right: 0px;
	}
	.star-36 .starItem.on{
		background: url("./star36_on@2x.png");
	}
	.star-36 .starItem.half{
		background: url("./star36_half@2x.png");
	}
	.star-36 .starItem.off{
		background: url("./star36_off@2x.png");
	}
	.star-24 .starItem{
		width:10px;
		height: 10px;
		margin-right: 3px;
		background-size: 10px 10px;
	}
	.star-24 .starItem:last-child{
		margin-right: 0px;
	}
	.star-24 .starItem.on{
		background: url("./star24_on@2x.png");
	}
	.star-24 .starItem.half{
		background: url("./star24_half@2x.png");
	}
	.star-24 .starItem.off{
		background: url("./star24_off@2x.png");
	}
	@media (-webkit-min-device-pixel-ratio:3),(min-device-pixel-ratio:3){
	.star-48 .starItem{
		width:30px;
		height: 30px;
		background-size: 30px 30px;
	}
	.star-48 .starItem:last-child{
		margin-right: 0px;
	}
	.star-48 .starItem.on{
		background: url("./star48_on@3x.png");
	}
	.star-48 .starItem.half{
		background: url("./star48_half@3x.png");
	}
	.star-48 .starItem.off{
		background: url("./star48_off@3x.png");
	}
	.star-36 .starItem{
		width:22px;
		height: 22px;
		background-size: 22px 22px;
	}
	.star-36 .starItem:last-child{
		margin-right: 0px;
	}
	.star-36 .starItem.on{
		background: url("./star36_on@3x.png");
	}
	.star-36 .starItem.half{
		background: url("./star36_half@3x.png");
	}
	.star-36 .starItem.off{
		background: url("./star36_off@3x.png");
	}
	.star-24 .starItem{
		width:15px;
		height: 15px;
		background-size: 15px 15px;
	}
	.star-24 .starItem:last-child{
		margin-right: 0px;
	}
	.star-24 .starItem.on{
		background: url("./star24_on@3x.png");
	}
	.star-24 .starItem.half{
		background: url("./star24_half@3x.png");
	}
	.star-24 .starItem.off{
		background: url("./star24_off@3x.png");
	}	
	}
</style>