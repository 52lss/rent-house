// module.exports = {
//   plugins: {
//     'postcss-pxtorem': {
//       rootValue: 75, // 按照vant的样式来转换  vant是基于375写的
//       // rootValue 支持两种类型
//       // 数字：估计的数值
//       // 函数： 可以动态处理返回
//       //     postcss-pxtorem处理每个css文件的时候都会来调用它会把被处理的css文件相关的信息通过参数传递给该函数
//       // rootValue({ file}){
//       //   console.log('处理的css文件:',flie);
//       //   return 37.5
//       // },
//       rootValue({ file }) {
//         return file.indexOf('vant') !== -1 ? 37.5 : 75
//       },
//       propList: ['*']
//     }
//     //     rootValue({ file }) {
//     //         return file.indexOf('vant') !== -1 ? 37.5 : 75;
//     //       },
//     //       propList: ['*'],
//     //   },
//   }
// }
