
export default {
  login: config => {
    console.log(config)
    debugger
    const { password, username } = JSON.parse(config.body)
    if (username === 'admin' && password === '123456') {
      return {
        code: 200,
        token: 'admin-token',
        data: '登录成功！'
      }
    } else if (username === 'editor' && password === '123456') {
      return {
        code: 200,
        token: 'editor-token',
        data: '登录成功！'
      }
    } else if (username === 'test' && password === '123456') {
      return {
        code: 200,
        token: 'test-token',
        data: '登录成功！'
      }
    }
  }
}
