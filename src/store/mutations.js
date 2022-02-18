const mutations = {
  addCart(state, info) {
    console.log(info);
    // 1.查看是否添加过
    const oldInfo = state.cartList.find(item => item.iid === info.iid)

    // 2.+1或者新添加
    if (oldInfo) {
      oldInfo.count += 1
    } else {
      info.count = 1
      info.checked = true
      state.cartList.push(info)
    }
  },
  GET_USER: (state, data) => {
    // 把用户名存起来
    state.user = data
    window.sessionStorage.setItem('user', data)
  },
  LOGOUT: (state) => {
    // 登出的时候要清除用户名
    state.user = null
    window.sessionStorage.removeItem('user')
  }
}

export default mutations

