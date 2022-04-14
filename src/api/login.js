import http from '@utils/http'

export const Login = (data, headers) => http({
  url: '/login',
  method: 'post',
  data: data,
  headers: {
    Source: headers?.Source
  }
})

export function getLogin (data) {
  return http({
    url: '/login',
    method: 'post',
    data: data
  })
}
