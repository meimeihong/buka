<template>
<div id="header">
	<div class="head">
		<a class="im"><img :src="img"/></a>
	<a class="load" @click='show'>安装APP</a>
	<a class="find"><i class="fa fa-search"></i></a>
	</div>
	<div class="shade" v-show='sel' >
		<div class="buk">
			<span class="buks">
				<i class="fa fa-times" aria-hidden="true" @click.stop='show'></i>
				<img src="../../img/logo.png"/>
				
			</span>
			<p>请选择需要下载的客户端类型</p>
			<ul>
				<li class="li1"><i class="fa fa-apple" aria-hidden="true"></i><span>iPhone</span></li>
				<li class="li1"><i class="fa fa-tablet" aria-hidden="true"></i><span>iPad</span></li>
				<li class="li2"><i class="fa fa-android" aria-hidden="true"></i><span>Android</span></li>
				<li class="li2"><i class="fa fa-tablet" aria-hidden="true"></i><span>AndroidHD</span></li>
			</ul>
		</div>
	</div>
</div>
</template>

<script>
	export default{
		name:'Header',
		data(){
			return{
				img:'http://m.buka.cn/static/img/logo_2x.png',
				sel:false,
				logo:''
			}
		},
		methods:{
			show:function(){
				this.sel=!this.sel;
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../../styles/main.less';
	#header{
		position:fixed;
		.position(0,0);
		z-index:80;
	.head{
		position:relative;
		.lh(44);
		.w(375);
		.h(40);
		background:@bg-color;
		.im{.mg(15,0,0,0);
			.w(120);
			.h(35);
			.mg(0,0,0,10);
			display: inline-block;
			img{
				.w(60);
				.h(29);
			}
		}
		.load{
			position:absolute;
			display: block;
			.w(75);
			.h(28);
			.fs(12);
			.pd(0,7,0,7);
			.position(7,80);
			box-sizing: border-box;
			.lh(28);
			background:@head;
			color:white;
			text-align:center;
			border-radius: 5px;
		}
		.find{
			position:absolute;
			.position-top(0);
			.position-right(0);
			.w(120);
			.h(44);
			text-align: right;
			
			i{	position:absolute;
				.position-top(7);
				.position-right(10);
				.w(26);
				.h(26);
				.fs(26);
				color:@head;
				
			}
		}
		
	}
	.shade{
		position:fixed;
		.position(0,0);
		z-index:200;
		.w(375);
		.h(667);
		background:rgba(0,0,0,.6);
		.buk{text-align: center;
			.pd(5,5,5,5);
			.w(280);
			.h(220);
			z-index:220;
			position:fixed;
		.position(223.5,47.5);
			background: white;
			.buks{
				.w(375);
				.h(75);
				display: block;
				position: relative;
			.mg(0,0,0,0);
				.w(20);
				.h(20);
				color:#fe960e;
				.fs(20);
				img{position: absolute;
				.position(10,60);
				.w(150);
				.h(50);
			}
			}
			p{	.mg(50,0,10,0);
				.fs(14);
				color:@font2;
				
			}
			ul{overflow: hidden;
			.pd(0,0,0,5);
				li{border-radius: 5px;
					float:left;
					text-align: left;
					.pd(0,5,0,10);
					/*box-sizing: border-box;*/
					position: relative;
				.mg(0,4,0,4);
					.w(112.5);
					.h(55);
					.lh(55);
					i{
						.w(23);
						.h(30);
						.mg(0,10,0,0);
						color:white;
					}
					span{
						position: absolute;
						.position(2.5,50);
						display: inline-block;
						color: #fff;
						.fs(13);
						.w(43);
						.h(50);
						.lh(50);
					}
				}
				.li1{
					background: @head;
					.mg(0,4,5,4);
				}
				.li2{
					background: #a4c639;
				}
			}
		}
	}
	}
</style>