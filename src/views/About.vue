<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li v-for="item in dataShow">{{ item }}</li>
    </ul>
    <button @click="back()">上一页</button>{{ currentPage + 1 }}
    <button @click="next()">下一页</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [], //模拟后端的数据
      //所有页面的数据
      totalPage: [],
      //每页显示数量
      pageSize: 10,
      //页数
      pageNum: 1,
      //当前页显示数据
      dataShow: "",
      // 默认第一页
      currentPage: 0,
    };
  },
  methods: {
    // 计算页数
    count() {
      for (let i = 0; i < 987; i++) {
        this.data.push(i);
      }
      this.pageNum = Math.ceil(this.data.length / this.pageSize);
    },
    //将数据存到每一页
    saveData() {
      for (let i = 0; i < this.pageNum; i++) {
        this.totalPage[i] = this.data.slice(
          i * this.pageSize,
          (i + 1) * this.pageSize
        );
      }
      // 显示第一页数据
      this.dataShow = this.totalPage[this.currentPage];
    },
    back() {
      if (this.currentPage === 0) return;
      this.dataShow = this.totalPage[--this.currentPage];
    },
    next() {
      if (this.currentPage === this.pageNum - 1) return;
      this.dataShow = this.totalPage[++this.currentPage];
    },
  },
  created() {
    this.count();
    this.saveData();
  },
};
</script>
