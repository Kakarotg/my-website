<template>
  <div id="detail">
    <ul>
      <li v-for="item in $store.state.cartList" :key="item.title">
        {{item}}
      </li>
    </ul>
    <div class="navbar"><detail-nav-bar @titleClick="titleClick"/></div>
    <detail-swiper :top-images="topImages"/>
    <detail-base-info :goods="goods"/>
    <detail-shop-info :shop="shop"/>
    <detail-goods-info :detail-info="detailInfo"/>
    <detail-param-info :param-info="paramInfo"/>
    <detail-comment-info :comment-info="commentInfo"/>
    <goods-list :goods="recommendList"/>
    <detail-bottom-bar @addCart="addToCart"/>
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
  import DetailBottomBar from './childComps/DetailBottomBar'

  import GoodsList from '@/components/content/goods/GoodsList'

  import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "@/network/detail"
  export default {
    name:'Detail',
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar
    },
    data() {
      return {
        iid: null,
        topImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        commentInfo:{},
        recommendList:[]
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

      //请求推荐数据
      getRecommend().then(res=>{
        this.recommendList=res.data.data.list
      })
    },
    methods:{
      //点击导航滑动到指定部分
      titleClick(index){
        console.log(index)
      },
      addToCart(){
        // 1.创建对象
        const product = {}
        // 2.对象信息
        product.iid = this.iid;
        product.imgURL = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc;
        product.newPrice = this.goods.nowPrice;
        // 3.添加到Store中
        this.$store.commit('addCart', product)
      }
    }
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