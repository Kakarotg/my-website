import { request1 } from "./request";

export function getProfileMultidata(){
  return request1({
    url:'/login'
  })
}