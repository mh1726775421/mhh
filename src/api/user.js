import request from "@/utils/request"
export const login = (data) =>{
    return request({
        method:'POST',
        url:'/mp/v1_0/authorizations',
        data
      })
}
export const getProfile = () =>{
  return request({
    method:'GET',
    url:'/mp/v1_0/user/profile',
    headers: {
      // 属性名和值都得看接口的要求
      // 属性名：Authorization，接口要求的
      // 属性值：Bearer空格token数据
      // Bearer 就是持票人的意思，就好比你的学生证上写了学生证三个字
      Authorization:'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU'
    }
  })
}