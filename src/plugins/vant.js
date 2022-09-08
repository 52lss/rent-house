// 封装组件库
// 引入vant组件
import {
  Button,
  Tabbar,
  TabbarItem,
  NavBar,
  Form,
  Field,
  Toast,
  Grid,
  GridItem,
  Swipe,
  SwipeItem,
  Lazyload,
  Search,
  Icon,
  Image,
  Cell,
  CellGroup,
  DropdownMenu,
  DropdownItem,
  Area,
  Popup,
  IndexBar,
  IndexAnchor
} from 'vant'
// 设置数组
const components = [
  Button,
  Tabbar,
  TabbarItem,
  NavBar,
  Form,
  Field,
  Toast,
  Grid,
  GridItem,
  Swipe,
  SwipeItem,
  Lazyload,
  Search,
  Icon,
  Image,
  Cell,
  CellGroup,
  DropdownMenu,
  DropdownItem,
  Area,
  Popup,
  IndexBar,
  IndexAnchor
]
// 创建函数 对组件数组进行遍历 并暴露出去 在main.js 里面接收
const registerVant = (Vue) => {
  components.forEach((item) => Vue.use(item))
}
export default registerVant
