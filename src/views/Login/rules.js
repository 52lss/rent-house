// 校验规则
export const userFormRules = {
  username: [
    { required: true, message: '账号不能为空' },
    { pattern: /^[a-zA-Z0-9]{4,16}$/, message: '账号格式错误' }
  ],
  password: [
    { required: true, message: '请填写验证码' },
    { patter: /^[a-zA-Z0-9_-]{4,12}$/, message: '验证码格式错误' }
  ]
}
