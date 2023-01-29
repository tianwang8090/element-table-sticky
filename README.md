# element-table-sticky

A directive for Element(Vue@2.x) to sticky el-table when scrolling.

Element UI 库表格表头固定指令。

> Another brother directive 这个工具还有个兄弟 [element-table-scroll](https://tianwang8090.github.io/element-table-scroll/)

![demo](./demo.gif)

## Usage 使用

1. Install 安装

    ```sh
    npm i element-table-sticky
    ```

2. Register 注册指令

    ```js
    import ElTableSticky from 'element-table-sticky';
    Vue.directive('table-sticky', ElTableSticky);
    ```

3. Using 使用

    ```vue
    <el-table
      v-table-sticky
      ...
    >
    ...
    </el-table>
    ```
