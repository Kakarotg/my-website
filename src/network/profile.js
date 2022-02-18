import { request1 } from "./request";

export function getProfileMultidata(username,password){
  return request1({
    url:'/login',
    data:{
      username,
      password
    }
  })
}