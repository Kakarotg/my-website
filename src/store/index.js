import Vue from 'vue'
import Vuex from 'vuex'

//import mutations from './mutations'
//import actions from './actions'
//import getters from './getters'

Vue.use(Vuex)

//const state = {
  //cartList: []
//}

const store = new Vuex.Store({
  state:{
    cartList:[]
  },
  mutations:{
    addCart(state,payload){
      let oldProduct=state.cartList.find(function(item){
        return item.iid===payload.iid
      })

      //判断oldproduct
      if(oldProduct){
        oldProduct.count+=1
      }else{
        payload.count=1
        state.cartList.push(payload)
      }
    }
  },
//  actions,
//  getters
})

export default store
