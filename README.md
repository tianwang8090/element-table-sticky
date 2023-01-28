# element-table-sticky

a directive for Element to sticky el-table when scrolling.

Element UI 库表格表头固定指令。

![demo](./demo.gif)

## Usage 使用

1. Install 安装

    `npm i element-table-sticky`

2. Register 注册指令

    ```js
    import ElTableSticky from 'element-table-sticky';
    Vue.directive('table-sticky', ElTableSticky);
    ```

3. Using 使用

    ```js
    <el-table
      v-table-sticky
      ...
    >
    ...
    </el-table>
    ```
