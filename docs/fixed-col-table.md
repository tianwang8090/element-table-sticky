---
title: 固定列表格
order: 2
---

## 固定列表格

::: demo

```vue
<template>

  <div>
  <div style="width: 700px; height: 500px;overflow: auto; border: 1px solid #333;">
    <p style="height: 300px; ">占位元素 height: 300px</p>
    <el-table
      v-table-sticky
      stripe
      :data="showTableData">
        <el-table-column
              type="selection"
              fixed="left">
        </el-table-column>
        <el-table-column
              prop="date"
              label="日期"
              width="150">
        </el-table-column>
        <el-table-column
              prop="name"
              label="姓名"
              width="120">
        </el-table-column>
        <el-table-column
              prop="province"
              label="省份"
              width="120">
        </el-table-column>
        <el-table-column
              prop="city"
              label="市区"
              width="120">
        </el-table-column>
        <el-table-column
              prop="address"
              label="地址"
              width="300">
        </el-table-column>
        <el-table-column
              prop="zip"
              label="邮编"
              width="120"
              fixed="right">
        </el-table-column>
        <el-table-column
              fixed="right"
              label="操作"
              width="120">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="handleDelete(scope.$index)">
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        layout="prev, pager, next"
        :page-size="10"
        :current-page.sync="page"
        :total="tableData.length">
      </el-pagination>
      <p style="height: 800px; ">占位元素 height: 800px</p>
    </div>
  </div>
</template>

<script>
/**
 * title: 示例
 * desc: 上下滚动
 * */

export default {
  data() {
    return {
      tableData: [],
      page: 1
    }
  },
  computed: {
    showTableData() {
      return this.tableData.slice((this.page - 1) *10, this.page* 10)
    }
  },
  methods: {
    handleDelete(index) {
      this.tableData.splice(index, 1)
    }
  },
  mounted() {
    // 由于table组件原因，在指令 bind 时，固定列还未渲染。
    // 直接在data 中写静态数据，会使滚动按钮位置偏移。异步数据无影响。
    setTimeout(() => {
      this.tableData = [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
    }, 1000)
  }
}
</script>
<style>
table {
  margin: 0;
}
</style>
```

:::
