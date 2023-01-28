import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ElTableSticky from '../../src/index'

export default async ({
  Vue
}) => {
  if (typeof process === 'undefined') {
    Vue.use(ElementUI);
    Vue.directive('table-sticky', ElTableSticky);
  }
}