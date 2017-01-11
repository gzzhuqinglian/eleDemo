<style lang="less" scoped>
	.header_con{
		color:#fff;
		line-height:28px;
		padding-top:10px;
		background-color: #c4b8c1;
		background-size: cover;
    	background-repeat: no-repeat;
    	font-size:13px;
    	.header{
			padding:0 10px;
			img{
				float:left;
				margin:0 10px;
				margin-left:0px;
				height:85px;
				width:85px;
			}
    	}
		
	}
	.header_bot{
		margin-top:6px;
		padding:0 10px;
		background-color: rgba(0,0,0,.15);
	}
	.notice{
		clear:both;

	}
	.line{
		text-overflow: ellipsis;
    	white-space: nowrap;
    	overflow: hidden; 
	}
	.flex{
		background-color:#fff;
		display:flex;
		padding:10px 0;
		border-bottom: 1px solid #e5e5e5;
		a{
			flex:1;
			text-align:center;
			font-size:16px;

		}
	}
	.active{
		padding-bottom: 4px;
	    border-bottom: 1px solid blue;
	    color: blue;
	}
	.page{
		height: 100%;
	    overflow: hidden;
	    padding-bottom: 128px;
	}
</style>
<template>
	<div class='page'>
		 <router-link to="/shopDatail">
		 	<div class='header_con'>

		 		<div class='header'>
		 			<img src="./sb.png" alt="">
			 		<div>
			 			<h3>老娘舅</h3>
			 			<div>商家配送/39分钟送达/配送费￥7</div>
			 			<div class='line'>新用户下单立减20.0元(不与其他活动共享)</div>
			 		</div>
		 		</div>
		 		<div class="notice line header_bot">
		 		公告：温馨提示，为了你能更快的享受老娘舅的美食,请提早时间下单
		 		</div>
		 	</div>
		 	
		 </router-link>
		 <div class="flex">
		 	 <router-link to="/index/goods"><span :class='{active:activeG}'>商品</span></router-link>
		 	  <router-link to="/index/shoppj"><span :class='{active:activeP}'>评价</span></router-link>
		 </div>
		 <transition name="slide-left">
		 	 <router-view></router-view>
		 </transition>
		
	</div>
</template>
<script>
    export default {
        data(){
        	return {
        		activeG:true,
        		activeP:false
        	}
        },
        methods:{
        	test:function(){
        		alert('good');
        	},
        	activeSel(a,b,c){
        		if(a.name=='goods'){
        			this.activeG=true;
        			this.activeP=false;
        		}else{
        			this.activeG=false;
        			this.activeP=true;
        		}
        	}
        },
        watch: {
		    // 如果路由有变化，会再次执行该方法
		    '$route': 'activeSel'
		},
    }
</script>