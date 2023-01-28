/**
 * el-table 表头固定指令
 * 在 el-table 表头向上滚动超出页面时，固定表头在页面顶部
 * ----------------------------
 * 由于table组件原因，在指令 bind 时，固定列还未渲染。
 * 直接在data 中写静态数据，会使滚动按钮位置偏移。异步数据无影响。
 *
 * 参数说明
 * @param {Boolean} on 启用指令，默认 true,启用
 */
const elTableSticky = {
  /**
   * 只调用一次，指令第一次绑定到元素时调用。在这里可以惊醒一次性的初始化设置。
   */
  bind() { },
  /**
   * 被绑定元素插入父节点时调用（仅保证父节点存在，但不一定已被插入文档中）。
   */
  inserted(el, binding, vnode) {
    if (binding.value && !binding.value.on) return;
    const uid = vnode.componentInstance._uid;
    const tableEle = el.className.includes('el-table') ? el : el.querySelector('.el-table');
    const tableHeader = tableEle.querySelector('.el-table__header-wrapper');

    tableEle.setAttribute('v-el-table-sticky', uid);
    tableEle.style.overflow = 'initial';
    tableHeader.style.position = 'sticky';
    tableHeader.style.top = 0;
    tableHeader.style.zIndex = 4;

    let hasStyle = !!document.querySelector('style#v-el-table-sticky-style');
    if (hasStyle) return;

    let styleNode = document.createElement('style');
    styleNode.setAttribute('type', 'text/css');
    styleNode.setAttribute('id', 'v-el-table-sticky-style');
    styleNode.innerHTML = `
      .el-table[v-el-table-sticky] .el-table__body-wrapper ~ .el-table__fixed::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: -1px;
        right: 0px;
        width: 20px;
        transform: translateX(100%);
        transition: box-shadow .3s;
        box-shadow: inset 10px 0 8px -8px rgb(5 5 5 / 23%);
        z-index: 4;
        pointer-events: none;
      }
      .el-table[v-el-table-sticky] .el-table__body-wrapper.is-scrolling-left ~ .el-table__fixed::after {
        display: none;
      }
      .el-table[v-el-table-sticky] .el-table__body-wrapper ~ .el-table__fixed-right::after {
        position: absolute;
        top: 0;
        bottom: -1px;
        left: 0;
        width: 30px;
        transform: translateX(-100%);
        transition: box-shadow .3s;
        content: "";
        pointer-events: none;
        box-shadow: inset -10px 0 8px -8px rgb(5 5 5 / 23%);
        z-index: 4;
      }
      .el-table[v-el-table-sticky] .el-table__body-wrapper.is-scrolling-right ~ .el-table__fixed-right::after {
        display: none;
      }`;

    document.head.appendChild(styleNode);
  },
  /**
   * 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。
   * 指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值，来忽略不必要的模块更新
   */
  // eslint-disable-next-line no-unused-vars
  update(el, binding, vnode) {
    if (binding.value && !binding.value.on) return;
    const tableEle = el.className.includes('el-table') ? el : el.querySelector('.el-table');
    const fixedRight = tableEle.querySelector('.el-table__fixed-right');
    const fixedRightHeaderWrapper = tableEle.querySelector('.el-table__fixed-right .el-table__fixed-header-wrapper');
    const fixedRightBodyWrapper = tableEle.querySelector('.el-table__fixed-right .el-table__fixed-body-wrapper');
    const fixedLeft = tableEle.querySelector('.el-table__fixed');
    const fixedLeftHeaderWrapper = tableEle.querySelector('.el-table__fixed .el-table__fixed-header-wrapper');
    const fixedLeftBodyWrapper = tableEle.querySelector('.el-table__fixed .el-table__fixed-body-wrapper');

    if (fixedRightHeaderWrapper) {
      fixedRightHeaderWrapper.style.position = 'sticky';
      fixedRightHeaderWrapper.style.zIndex = 4;
      fixedRightHeaderWrapper.style.overflow = 'hidden';
      fixedRightHeaderWrapper.firstChild.style.float = 'right';
    }

    if (fixedRightBodyWrapper) {
      fixedRightBodyWrapper.style.position = 'initial';
      fixedRightBodyWrapper.firstChild.style.float = 'right';
    }

    if (fixedRight) {
      fixedRight.style.overflow = 'initial';
      fixedRight.style.boxShadow = 'none';
    }

    if (fixedLeftHeaderWrapper) {
      fixedLeftHeaderWrapper.style.position = 'sticky';
      fixedLeftHeaderWrapper.style.zIndex = 4;
      fixedLeftHeaderWrapper.style.overflow = 'hidden';
    }

    if (fixedLeftBodyWrapper) {
      fixedLeftBodyWrapper.style.position = 'initial';
    }

    if (fixedLeft) {
      fixedLeft.style.overflow = 'initial';
      fixedLeft.style.boxShadow = 'none';
    }
  },
  /**
   * 指令所在组件的 VNode 及其子 VNode 全部更新后调用
   */
  componentUpdated() { },
  /**
   * 只调用一次，指令与元素解绑时调用
   */
  // eslint-disable-next-line no-unused-vars
  unbind(el, binding, vnode) { }
};

export default elTableSticky;
