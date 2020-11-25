<template>
  <div class="container">
    <homeHeader></homeHeader>
    <div class="home-body">
      <el-row :gutter="10">
        <el-col :span="17">
          <div class="left-body">
            <ul>
              <li v-for="(item, index) in list" :key="index">
                 <a :href="item.content" target="_blank">{{item.title}}</a>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="7">
          <sideBar></sideBar>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// import {mapState,mapMutations}from 'vuex'
import {getListApi} from '../api/navigation'

export default {
  components: {
    homeHeader: () => import('../../components/homeHeader.vue'),
    sideBar: () => import('../../components/sideBar.vue'),
    homeFooter: () => import('../../components/homeFooter.vue')
  },
  data() {
    return {
    };
  },
  async asyncData({query,store,$axios}) {
    let res = await getListApi({})
    return {
      list: res.data.result
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  .home-body{
    width: 80%;
    margin: 10px auto;
    .left-body{
      background: #fff;
      box-shadow: 0 1px 3px rgba(27, 95, 160, .1);
      ul {
        li {
          display: inline-block;
          padding: 20px;
          .item-list{
            display: flex;
          }
        }
      }
    }
  }
}

</style>
