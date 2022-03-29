import http from '@utils/http'

export const Login = (data, header) => http({
  url: '/user/getLogin',
  method: 'post',
  data: data,
  headers: {
    Source: header.Source
  }
})

export function getLogin (data, headers) {
  return http({
    url: '/user/getLogin',
    method: 'post',
    data: data,
    headers: {
      Source: headers.Source
    }
  })
}
