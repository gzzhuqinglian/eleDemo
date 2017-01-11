<style lang="less" scoped>
	.container{
		overfolow:hidden;
		display:flex;
		.select_con{
			width:80px;
			padding-left:20px;
			li{
				border-bottom:1px solid #e5e5e5;
				font-size:13px;
				height:60px;
				line-height:60px;
				position: relative;
			}
		}
		.content_con{
			flex:1;
		}
		
	}
	.line{
		text-overflow: ellipsis;
    	white-space: nowrap;
    	overflow: hidden; 
	}
	.goods_con {
			overflow: auto;
		    padding-bottom: 20px;
		    box-sizing: border-box;
		    background-color: #fff;
		    padding-bottom: 74px;
		    .goods_item {
		    	
		    	.title{
					font-weight:700;
    				background-color: #f1f1f1;
    				padding-left: 10px;
		    	}
		    	.content {

		    		border-bottom:1px solid #e5e5e5;
		    		padding:10px 0;
		    		padding-right:10px;
		    		margin-left:10px;
		    		display:flex;
		    		font-size:11px;
		    		img{
		    			width:50px;
		    			height:50px;
		    			padding-right:10px;
		    		}
		    		.good{
		    			flex:1;
		    			line-height:20px;
		    			.good_title{
		    				color: #333;
						    font-weight: 600;
						    font-size: 13px;
		    			}
		    			.good_bottom{
		    				display:flex;
		    				margin-top:6px;
		    				padding-right:10px;
		    				div{
		    					flex:1;
		    				}
		    				.price{
								color:red;
								font-weight:700;
								font-size:14px;
		    				}
		    				.add{
		    					text-align:right;
		    					span{
		    						padding: 4px;
								    background-color: #3190e8;
								    border-radius: 50%;
								    color: #fff;
		    					}
		    				}
		    			}
		    		}

		    	}
		    }
		}
		.s_cart{
			position:fixed;
			bottom:0px;
			width:100%;
			background-color:#3d3d3f;
			height:60px;
			line-height:30px;
			.cont{
				margin-left:80px;
				color:#fff;
			}
			.goto{
				color: #fff;
			    display: inline-block;
			    padding: 0 16px;
			    font-size: 18px;
			    border-left: 1px solid gray;
			    position: absolute;
			    bottom: 0px;
			    right: 0px;
			    line-height: 60px;

			}
			.active_go{
				background-color:blue;
			}
			.cart{
				background-image:url('./s_cart.svg');
				height: 30px;
			    width: 30px;
			    display: inline-block;
			    position: absolute;
			    bottom: 23px;
			    left: 10px;
			    padding: 10px;
			    border-radius: 50%;
			    border-top-left-radius: 50%;
			    border-top-right-radius: 50%;
			    background-color: #443838;
			    background-size: cover;
			    border: 4px solid rgba(148, 140, 140, 0.85);
			}
			.num{
				position: absolute;
			    bottom: 23px;
			    left: 10px;
			    background-color:red;
			    bottom: 64px;
			    display: inline-block;
			    width: 20px;
			    height: 20px;
			    border-radius: 50%;
			    text-align: center;
			    line-height: 18px;
			    left: 54px;
			}
		}

		.type_num{
				position: absolute;
			    bottom: 23px;
			    left: 10px;
			    background-color:red;
			    top: 10px;
			    display: inline-block;
			    width: 20px;
			    height: 20px;
			    border-radius: 50%;
			    text-align: center;
			    line-height: 22px;
			    left: 54px;
			}

</style>
<template>
	<div >
		<div class='container'>
			<div class='select_con'>
					<ul>
						<li v-for="item in goods">
							<span>{{item.title}}</span>
							<span class='type_num' v-show="item.buy>0">{{item.buy}}</span>
						</li>
					</ul>
			</div>
			<div class='content_con'>
				<ul class='goods_con' v-bind:style="{ height: height + 'px' }">
						<li class='goods_item' v-for='good in goods'>
							<div class='title'>{{good.title}}</div>
							<div class='content' v-for='item in good.items'>

								<img :src="item.img" alt="">
								<div class='good'>
									<div>
										<p class='good_title'>{{item.title}}</p>
										<p style='color: #b8bbbd;' class='line'><span>{{item.desc}}</span></p>
										<p><span>月售{{item.total}}份</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>好评率{{item.pj}}%</span></p>
									</div>
									<div class='good_bottom'>
										<div><span class='price'>￥{{item.price}}</span></div>
										<div class='add'>
											<div style="display:inline-block;" v-if=" item.buy> 0">
												<span @click='jsscart(item,good)'>-</span>
												{{item.buy}}
											</div>
											
										
										<span @click='addscart(item,good)'>+</span></div>
										
									</div>
									
								</div>
							</div>
						</li>
						
					</ul>
			</div>
			
		</div>
		<div class='s_cart'>
			<div class='cont'>
				<span class='cart'></span>
				<span class='num'>{{totalnum}}</span>
				<span style='font-size:18px;'>￥{{totalprice}}</span><br>
				<span style='font-size:14px;'>配送费￥7</span>
			</div>
			<a href="javascript:void(0)" :class='["goto",{active_go:totalprice>0}]'>去结算</a>
		</div>
		
	</div>
</template>
<script>
	import img from './goode.png'
    export default {
    	methods:{
    		addscart(item,good){
    			this.totalprice=this.totalprice+item.price;
    			this.totalnum=this.totalnum+1;
    			item.buy=item.buy+1;
    			good.buy=good.buy+1;
    			console.log(good.title)
    		},
    		jsscart(item,good){
    			this.totalprice=this.totalprice-item.price;
    			item.buy=item.buy-1;
    			this.totalnum=this.totalnum-1;
    			good.buy=good.buy-1;
    			console.log(good.title)
    		}
    	},
        data(){
        	return{
        		totalprice:0,
        		totalnum:0,
        		active_go:false,
        		 goods:[
        		 	{title:'热销榜',buy:0,items:[
        		 		{
        		 			img:img,
        		 			title:'梅干菜扣肉套餐',
        		 			desc:'梅干菜扣肉饭、太湖银鱼水蒸蛋、蔬菜',
        		 			total:'1445',
        		 			pj:'98',
        		 			price:26,
        		 			buy:0
        		 		},
        		 		{
        		 			img:img,
        		 			title:'梅干菜扣肉套餐',
        		 			desc:'梅干菜扣肉饭、太湖银鱼水蒸蛋、蔬菜',
        		 			total:'1445',
        		 			pj:'98',
        		 			price:26,
        		 			buy:0
        		 		},
        		 		{
        		 			img:img,
        		 			title:'梅干菜扣肉套餐',
        		 			desc:'梅干菜扣肉饭、太湖银鱼水蒸蛋、蔬菜',
        		 			total:'1445',
        		 			pj:'98',
        		 			price:26,
        		 			buy:0
        		 		},
        		 		{
        		 			img:img,
        		 			title:'梅干菜扣肉套餐',
        		 			desc:'梅干菜扣肉饭、太湖银鱼水蒸蛋、蔬菜',
        		 			total:'1445',
        		 			pj:'98',
        		 			price:26,
        		 			buy:0
        		 		},

        		 	]},
        		 	
        		 	{title:'副食小吃',buy:0,items:[
        		 		{
        		 			img:img,
        		 			title:'梅干菜扣肉套餐',
        		 			desc:'梅干菜扣肉饭、太湖银鱼水蒸蛋、蔬菜',
        		 			total:'1445',
        		 			pj:'98',
        		 			price:26,
        		 			buy:0
        		 		},
        		 		{
        		 			img:img,
        		 			title:'梅干菜扣肉套餐',
        		 			desc:'梅干菜扣肉饭、太湖银鱼水蒸蛋、蔬菜',
        		 			total:'1445',
        		 			pj:'98',
        		 			price:26,
        		 			buy:0
        		 		},
        		 		{
        		 			img:img,
        		 			title:'梅干菜扣肉套餐',
        		 			desc:'梅干菜扣肉饭、太湖银鱼水蒸蛋、蔬菜',
        		 			total:'1445',
        		 			pj:'98',
        		 			price:26,
        		 			buy:0
        		 		},
        		 		{
        		 			img:img,
        		 			title:'梅干菜扣肉套餐',
        		 			desc:'梅干菜扣肉饭、太湖银鱼水蒸蛋、蔬菜',
        		 			total:'1445',
        		 			pj:'98',
        		 			price:26,
        		 			buy:0
        		 		}]
        		 	},
        		 	{title:'招牌套餐',buy:0,items:[
        		 		{
        		 			img:img,
        		 			title:'梅干菜扣肉套餐',
        		 			desc:'梅干菜扣肉饭、太湖银鱼水蒸蛋、蔬菜',
        		 			total:'1445',
        		 			pj:'98',
        		 			price:26,
        		 			buy:0
        		 		},
        		 		{
        		 			img:img,
        		 			title:'梅干菜扣肉套餐',
        		 			desc:'梅干菜扣肉饭、太湖银鱼水蒸蛋、蔬菜',
        		 			total:'1445',
        		 			pj:'98',
        		 			price:26,
        		 			buy:0
        		 		},
        		 		{
        		 			img:img,
        		 			title:'梅干菜扣肉套餐',
        		 			desc:'梅干菜扣肉饭、太湖银鱼水蒸蛋、蔬菜',
        		 			total:'1445',
        		 			pj:'98',
        		 			price:26,
        		 			buy:0
        		 		},
        		 		{
        		 			img:img,
        		 			title:'梅干菜扣肉套餐',
        		 			desc:'梅干菜扣肉饭、太湖银鱼水蒸蛋、蔬菜',
        		 			total:'1445',
        		 			pj:'98',
        		 			price:26,
        		 			buy:0
        		 		}]
        		 	}

        		 ],
        		height:window.screen.height-28,
        		select_type:['热销榜','副食小吃','招牌套餐','平衡套餐','饮料炖品'
        		]
        	}
        }
    }
</script>