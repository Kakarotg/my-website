import { request1 } from "./request";

function getProfileMultidata(username,password){
  return request1({
    url:'/login',
    data:{
      username,
      password
    }
  })
}
function Register(username,password){
  return request1({
    url:'/regUser',
    data:{
      username,
      password
    }
  })
}

export {getProfileMultidata,Register}