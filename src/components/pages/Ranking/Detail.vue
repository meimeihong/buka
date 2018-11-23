<template>
<div id="Detail">
    <Header></Header>
    <DetailNav :mid="data.mid"></DetailNav>
    <div class="mangadir-main">
        <div class="mangadir-top">
            <div></div>
            <div class="glass-info">
                <div class="glass-grade" >
                    <img src="http://m.buka.cn/static/img/star_2.png" alt="">
                    <p>4.9</p>
                </div>
                <div class="glass-img">
                    <img :src="data.logo">
                </div>
                <div class="glass-hot">
                    <img src="http://m.buka.cn/static/img/fire.png" alt="">
                  
                    <p>11.94亿</p>
                </div>
            </div>

        </div>
        <div class="mangadir-glass-text">
            <p class="mangadir-glass-name">{{data.name}}</p>
            <p class="mangadir-glass-author"><a href="">{{data.author}}</a></p>
        </div>
        <div class="mangadir-glass-btns">
            <a href="">立即观看</a>
        </div>
        <div class="description">
            <span class="description_intro">
                    【周五更、周五周日更、周五更……】我以为，闯荡江湖，只要武功高强，锄强扶弱，就能成为大侠的，哪怕我丑一点，我的武功偏一点也没关系的……或许，是我太丑了一点，武功太偏了一点？喜欢请关注新浪微博：@侠客行不通              
            </span>
            <span class="fa fa-angle-down"></span>
        </div>
        <div class="mangadir-glass-interact">
            <a href="javascript:0" class="share-btn btn">
                <span class="interact-icon ">
                    <img src="http://c-r7.ibuka.cn/static/m.buka.cn/img/share_icon.png" alt="">
                </span>
                <span class="interact-font">
                分享
                </span></a>
            <a href="javascript:0" class="toudi-btn btn">
                <span class="interact-icon ">
                     <img src="http://c-r7.ibuka.cn/static/m.buka.cn/img/toudi.png" alt="">
                </span>
                <span class="interact-font">投稿</span></a>
            <a href="javascript:0" class="comment-btn btn">
                <span class="interact-icon ">
                     <img src="http://c-r7.ibuka.cn/static/m.buka.cn/img/comment.png" alt="">
                </span>
                <span class="interact-font">评论</span></a>
        </div>
        <div class="chapter-area">
            <div class="chapter-top-title">
                <span class="top-title-left">
                    连载 (话)
                </span>
                <span class="top-title-right">
                    更新:2018-11-16                   </span>
                <span class="top-title-sort" id="sort" data-sort="desc">倒序↓</span>
            </div>
            <div class="chapter-center">
                 <span :class="active===item?'chapter-active':'' " v-for="item in sections">{{item}}</span>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import Vue from 'vue';
import Header from '../../commons/Header.vue';
import DetailNav from '../../commons/DetailNav.vue';
    export default{
        name:'Detail',
        components:{
            Header,
            DetailNav
        },
        data(){
            return{
                Detaillist:[],
                data:{},
                sections:[
               '第1话', '第2话','第3话','第4话','第5话','第6话','第7话','第7话','第8话','第9话','第10话','第11话','第12话','第13话','第14话','第15话','第16话','第17话','第18话','第18话','第20话','第21话','第22话','第23话','第24话','第25话','第26话','第27话','第28话'],
               active:'第1话'
            }
        },
        methods:{
        	GetCategoryListData(){
            var datas=JSON.parse(sessionStorage.getItem("data"));
   var mid=Number(datas.mid)
    var a=/\d{6}/.test(mid)?0:-1;
            	if(a==0){
            		this.data=datas
            	}else{
            		var homedata={};
            		homedata.name=datas.title;
            		homedata.logo=datas.pic_url;
            		homedata.author=datas.subtitle;
            		homedata.mid=datas.ctrlparam;
            		this.data=homedata;
            	}
            }
        } ,
        created(){
        	 this.GetCategoryListData();
        }
		
    }
</script>
<style lang="less" scoped>
@import '../../../styles/main.less';
#Detail{
    position: relative;
    .mangadir-main{
        position:absolute;
        .position(79px,0px);
        left:0px;
        overflow:auto;
        .mangadir-top{
            .w(375px);
            .h(154px);
            background:radial-gradient(#eeb63e 1%,#444 99%,);
            opacity: 0.8;
            border:1px solid #ccc;
            .glass-info{
                width:100%;
                height:100%;
                .fs(14px);
                position:relative;
                display:flex;
                justify-content:space-around;
                flex-flow:row wrap;
                align-content:flex-start;
                .glass-grade{
                    flex:30%;
                    text-align:center;
                    color:#fff;
                    .fs(14);
                    img{
                        .mg(50px ,0,0,0);
                        .w(30px);
                        .h(30px);
                        
                    }
                }
                .glass-img{
                    flex:40%;
                    img{
                        .mg(20px ,0,0,22px);
                        text-align:center;
                        .w(106px);
                        .h(159px);
                        border:2px solid #fff;
                    }
                }
                .glass-hot{
                    flex:30%;
                    text-align:center;
                    color:#fff;
                    .fs(14px);
                    img{
                        .mg(50px ,0,0,0);
                        .w(30px);
                        .h(30px);
                    }
                }
            }
        }
        .mangadir-glass-text{
            .w(375px);
            .h(60px);
            text-align: center;
            .mangadir-glass-name{
                .h(20px);
                .lh(20px);
                .mg(25px,0,0,0);
                color:#333;
                .fs(15px);
                font-weight:700;
                
            }
            .mangadir-glass-author{
               .h(14px);
                .lh(14px);
                a{
                color:#80cece;
                .fs(14px);
                }
            }
        }
        .mangadir-glass-btns{
            .w(345px);
            .h(50px);
            .mg(0, 0, 0, 15px);
            a{
                display: block;
                width:100%;
                .h(32px);
                color:#fff;
                .fs(16px);
                .lh(32px);
                background:#fe960e;
                border-radius: 5px;
                text-align: center;
            }
        }
        .description{
            position:relative;
            .w(345px);
            .h(20px);
            .mg(0, 0, 0, 15px);
            .description_intro{
                display:block;
                .w(345px);
                .h(20px);
                overflow:hidden;
                white-space:nowrap;
                text-overflow:ellipsis;
                color:#333;
                .fs(14px);
            }
            
            .fa{
               
                position:absolute;
                .position-right(5px);
                .position-top(20px);
                color:#333;
                .fs(22px);
                .mg(0,0,15px,0);
            }
            .fa :target .description_intro{
                height:100px;
                
            } 
        }
        .mangadir-glass-interact{
            .w(375px);
            .h(96px);
            .fs(14px);
            display:flex;
            justify-content:space-around;
            
            .btn{
                 display:block;
                .w(115px);
                .h(65px);
                flex:33%;
                text-align: center;
                color:#333;
                .interact-icon{
                    img{
                    display:block;
                    .w(42px);
                    .h(42px);
                    .pd(28px,0,6px,41px);
                    color:orange;
                    .fs(40px); 
                    }
                }
                .interact-font{
                    text-align: center;
                    color:#333;
                }
            }
           
        }
        .chapter-area{
            .pd(0,0,50px,0);
            .chapter-top-title{
                .w(375px);
                .h(21px);
                 .fs(14px);
                 .mg(25px,0,10px,0);
                 .top-title-left{
                    color:#333;
                    .pd(0,0px,0,20px);
                 }
                 .top-title-right{
                    color:#999;
                    .pd(0,0px,0,10px);
                 }
                 .top-title-sort{
                    color:#fe960e;
                    float: right;
                    .pd(0,20px,0,0);
                 }
            }
            .chapter-center{
                display:flex;
                justify-content:flex-start;
                flex-flow:row wrap;
                align-content:flex-start;
                .mg(10px,10px,0,10px);
                span{
                    width:20%;
                    .h(32px);
                    .lh(32px);
                    .fs(13px);
                    .mg(10px,7px,0,7px);
                    border:1px solid #ccc;
                    text-align: center;
                    border-radius: 5px;
                    color: #666;
                    border: 1px solid #ccc;
                    background: #fff;
                }
                 .chapter-active{
                    background: #fe960e;
                    color:#fff;
                    border:none;
                }
            }
        }
    }
}
</style>