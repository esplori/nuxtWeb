<template>
  <div class="container">
    <homeHeader></homeHeader>
    <div class="home-body">
      <a
        class="tbk-item"
        v-for="(item, index) in list"
        :key="index"
        :href="'/tbk/detail/' + item.id"
        target="_blank"
      >
        <div>
          <a
            ><img :src="item.pict_url" alt="" width="197px" height="197px"
          /></a>
          <a class="item-title">{{ item.title }}</a>
          <div class="item-sale-info">
            <div>
              <a class="zk_final_price"
                ><span class="rmbicon">¥</span>{{ item.zk_final_price }}</a
              >
              <a class="reserve_price"
                ><span class="rmbicon">¥</span>{{ item.reserve_price }}</a
              >
            </div>
            <div class="volume">月销{{ item.volume }}笔</div>
          </div>
        </div>
      </a>
    </div>
    <div style="text-align: center">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="page"
        :page-size="10"
        layout="total, pager"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getShopListApi } from "../api/index";
export default {
  components: {
    homeHeader: () => import("../../components/homeHeader.vue"),
  },
  data() {
    return {
      data: 0
    };
  },
  head() {
    return {};
  },
  async asyncData({ $axios, route }) {
    // this.page = route.params.id || 1
    let [res] = await Promise.all([getShopListApi({})]);
    // console.log("res.data---------", res.data);
    return {
      list: res.data.result,
      total: res.data.total || 80,
      page: parseInt(route.params.id || 1)
    };
  },
  methods: {
    handleCurrentChange(page) {
      window.location.href = "/tbk/page/" + page;
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  background: #fff;
  .home-body {
    max-width: 1190px;
    margin: 10px auto;
    display: flex;
    flex-wrap: wrap;
    .tbk-item:hover {
      border: 1px solid #ff5000;
    }
    .tbk-item {
      display: inline-block;
      width: 235px;
      padding: 20px;
      border: 1px solid #f4f4f4;
      cursor: pointer;
      .item-title {
        display: block;
        height: 40px;
        line-height: 20px;
        overflow: hidden;
        margin: 8px 0;
        color: #666;
        font-size: 14px;
      }
      .item-sale-info {
        color: #999;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        .zk_final_price {
          color: #ff5000;
          font-size: 22px;
        }
        .reserve_price {
          color: #999;
          font-size: 12px;
          text-decoration: line-through;
        }
        .rmbicon {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
