<template>
  <div id="app">
  		<v-header :seller="seller"></v-header>
  		<div class="wapper">
  			<div class="tab">
	  			<router-link to="/goods" class="router-link-active">商品</router-link>
	  			<router-link to="/ratings">评价</router-link>
	  			<router-link to="/seller">商家</router-link>
  			</div>
  			<router-view :seller="seller"/>
  		</div>
  		
  </div>	
</template>

<script>
import header from "@/components/header/header.vue"
const ERR_OK =0
export default {
  name: 'App',
  components:{
  	"v-header":header
  },
  data(){
  	return {
  		seller:{}	
  	}
  },
  created(){
//    this.$http.get("/api/seller")
//    .then((response)=>{
//      if(response.data.errno===ERR_OK){
//        this.seller=response.data.data;
//        
//      }
//      
//    })

			this.$http.get("./data/data.json")
				.then((response)=>{
						this.seller = response.data.seller;
				})
  }
}
</script>

<style scoped>
	.tab{
		display: flex;
		width:100%;
		height: 40px;
		font-size: 14px;
		line-height: 40px;
		background: #fff;
		border-bottom:1px solid rgba(7,17,27,0.1)
	}
	
	.tab a{
		flex:1;
		text-align: center;
		color: rgb(77,85,93);
	}
	.tab .router-link-active{
		color: rgb(240,20,20);
	}
</style>
