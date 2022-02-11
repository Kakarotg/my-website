<template>
  <div id="detail">
    <div class="navbar"><detail-nav-bar/></div>
    <detail-swiper :top-images="topImages"/>
    <detail-base-info :goods="goods"/>
    <detail-shop-info :shop="shop"/>
    <detail-goods-info :detail-info="detailInfo"/>
    <detail-param-info :param-info="paramInfo"/>
    <detail-comment-info :comment-info="commentInfo"/>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'

  import {getDetail,Goods,Shop,GoodsParam} from "@/network/detail"
  export default {
    name:'Detail',
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo
    },
    data() {
      return {
        iid: null,
        topImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        commentInfo:{}
      }
    },
    created() {
      //保存传入的iid，以后根据iid获取详情数据
      this.iid=this.$route.params.iid
      
      //根据iid获取详情数据
      getDetail(this.iid).then(res=>{
        console.log(res)
        const data=res.data.result
        //1.获取轮播图信息赋值
        this.topImages=data.itemInfo.topImages

        //2.获取轮播图下方商品信息赋值
        this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)

        //3.获取商家信息赋值
        this.shop=new Shop(data.shopInfo)

        //4.获取商品详细信息
        this.detailInfo=data.detailInfo

        //5获取商品参数信息
        this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)

        //6.获取评论信息
        if(data.rate.cRate!==0){
          this.commentInfo=data.rate.list[0]
        }
      })
    },
  }
</script>

<style scoped>
  .navbar{
    background-color: white;
    position: sticky;
    top: 0px;
    z-index: 9;
  }
</style>