<template>
  <div>
    <el-form ref="form" :model="data" label-width="auto">
      <el-row :key="index_group" v-for="(item_group, index_group) in config">
        <el-col v-if="item_group.property == 'form'">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              {{ item_group.label }}
            </div>
            <el-row :gutter="20">
              <el-col :span="8" :key="index" v-for="(item, index) in item_group.children">
                <el-form-item :label="item.label">
                  <div v-if="item.property == 'echart'">
                    <div id="myChart" :style="{ width: '100%', height: '250px' }"></div>
                  </div>
                  <div v-else-if="item.property == 'date'">
                    <el-date-picker v-model="data[item.field]" type="date" placeholder="选择日期">
                    </el-date-picker>
                  </div>
                  <div v-else-if="item.property == 'number'">
                    <el-input-number v-model="data[item.field]" :precision="1" :step="0.1" :disabled="item.disabled"
                      :readonly="item.readonly">
                    </el-input-number>
                  </div>
                  <div v-else-if="item.property == 'select'">
                    <el-select v-model="data[item.field]" :disabled="item.disabled" :readonly="item.readonly"
                      placeholder="请选择">
                      <el-option label="方法1" value="1" />
                      <el-option label="方法2" value="2" />
                      <el-option label="方法3" value="3" />
                    </el-select>
                  </div>
                  <div v-else-if="item.property == 'textarea'">
                    <el-input type="textarea" v-model="data[item.field]" :disabled="item.disabled"
                      :readonly="item.readonly"></el-input>
                  </div>
                  <div v-else-if="item.property == 'check'" style="width:140px;">
                    <el-checkbox v-model="data[item.field]" false-label="" true-label="1"></el-checkbox>
                    <el-checkbox v-model="data[item.field]" false-label="" true-label="2"></el-checkbox>
                    <el-checkbox v-model="data[item.field]" false-label="" true-label="3"></el-checkbox>
                    <el-checkbox v-model="data[item.field]" false-label="" true-label="4"></el-checkbox>
                    <el-checkbox v-model="data[item.field]" false-label="" true-label="5"></el-checkbox>
                    <el-checkbox v-model="data[item.field]" false-label="" true-label="6"></el-checkbox>
                    <el-checkbox v-model="data[item.field]" false-label="" true-label="7"></el-checkbox>
                    <el-checkbox v-model="data[item.field]" false-label="" true-label="8"></el-checkbox>
                    <el-checkbox v-model="data[item.field]" false-label="" true-label="9"></el-checkbox>
                  </div>

                  <div v-else>
                    <el-input v-model="data[item.field]" :disabled="item.disabled" :readonly="item.readonly"></el-input>
                  </div>
                </el-form-item>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col v-if="item_group.property == 'table'">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              {{ item_group.label }}
            </div>
            <el-table :data="select" style="width: 100%;">
              <el-table-column type="selection" width="55">
              </el-table-column>
              <el-table-column type="index" width="50">
              </el-table-column>

              <!-- <el-table-column v-for="(item,index) in header" :key="index" :label="item.label" :property="item.property" :index="item.index" align="center" width="150">
          <template slot-scope="scope">
              <div>
                
                <el-input v-model="scope.row[item.property]" placeholder="请输入内容" :readonly="item.readonly" :disabled="item.readonly"></el-input>
              </div>
          </template>
      </el-table-column> -->

              <el-table-column v-for="(item, index) in item_group.children" :key="index" :label="item.label"
                :property="item.property" :index="item.index" align="center" width="150">
                <el-table-column v-show="item.children && item.children.length" :key="child_index"
                  v-for="(child, child_index) in item.children" :label="child.label" :property="child.property"
                  align="center" width="150">
                  <el-table-column v-show="child.children && child.children.length" :key="grandson_index"
                    v-for="(grandson, grandson_index) in child.children" :label="grandson.label"
                    :property="grandson.property" align="center">
                    <template slot-scope="scope">
                      <div>
                        <el-input v-model="scope.row[grandson.field]" placeholder="孙子节点" :readonly="grandson.readonly"
                          :disabled="grandson.readonly"></el-input>
                      </div>
                    </template>
                  </el-table-column>
                  <template slot-scope="scope">
                    <div>
                      <el-input v-show="child.calc == undefined"
                        @change="child.isTrigger ? trigger($event, scope.row, child) : empty()"
                        v-model="scope.row[child.field]" placeholder="子节点-无计算" :readonly="child.readonly"
                        :disabled="child.readonly"></el-input>
                      <el-input v-show="child.calc != undefined"
                        @change="child.isTrigger ? trigger($event, scope.row, child) : empty()"
                        v-model="scope.row[child.field]" placeholder="子节点-有计算" :readonly="child.readonly"
                        :disabled="child.readonly"></el-input>
                    </div>
                  </template>
                </el-table-column>
                <template slot-scope="scope">
                  <div v-show="!(item.children && item.children.length)">
                    <el-input v-model="scope.row[item.field]"
                      @change="item.isTrigger?trigger($event,scope.row,item):empty()" placeholder="根节点"
                      :readonly="item.readonly" :disabled="item.readonly"></el-input>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>
      </el-row>

    </el-form>

  </div>
</template>

<script>
import request from '@/request'

export default {
  name: "testSample",
  props: {
    config: {
      required: true,
      type: [Array],
    },
    data: {
      required: true,
      type: [Object],
    }
  },
  data() {
    return {
      txt: "测试",
      select: [
        {
          ybbh: '001'
        },
        {
          ybbh: '002'
        },
        {
          ybbh: '003'
        }
      ],
      // data: {
      //   cydwsyt: []
      // },
      header: [

      ],
      // form: [],
      eachartData: [
        [8.3, 143], [8.6, 214], [8.8, 251], [10.5, 26], [10.7, 86], [10.8, 93], [11.0, 176], [11.0, 39], [11.1, 221], [11.2, 188], [11.3, 57], [11.4, 91], [11.4, 191], [11.7, 8], [12.0, 196], [12.9, 177], [12.9, 153], [13.3, 201], [13.7, 199], [13.8, 47], [14.0, 81], [14.2, 98], [14.5, 121], [16.0, 37], [16.3, 12], [17.3, 105], [17.5, 168], [17.9, 84], [18.0, 197], [18.0, 155], [20.6, 125]
      ],

    }
  },
  components: {

  },
  created() {
    // this.test();
  },
  mounted() {
  },
  methods: {
    drawLine() {
      // // 基于刚刚准备好的 DOM 容器，初始化 EChart 实例
      // let myChart = this.$echarts.init(document.getElementById('myChart'))
      // // 绘制图表
      // myChart.setOption({
      //     title: { text: '太阳系八大行星的卫星数量' },
      //     tooltip: {},
      //     xAxis: {
      //         data: ["水星","金星","地球","火星","木星","土星","金王星","海王星"]
      //     },
      //     yAxis: {},
      //     series: [{
      //         name: '数量',
      //         type: 'bar',
      //         data: [0, 0, 1, 2, 79, 82, 27, 14]
      //     }]
      // });
      //this.$ecStat.transform


      var chart = this.$echarts.init(document.getElementById('myChart'));
      var myRegression = this.$ecStat.regression('linear', this.eachartData);
      console.info("myRegression", myRegression)
      // myRegression.parameter = {
      //     gradient: 1.695,
      //     intercept: 3.008
      // };
      // myRegression.expression = 'y = 1.7x + 3.01';
      chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        xAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          },
        },
        yAxis: {
          type: 'value',
          min: 1.5,
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          },
        },
        series: [{
          name: 'scatter',
          type: 'scatter',
          label: {
            emphasis: {
              show: true
            }
          },
          data: this.eachartData
        }, {
          name: 'line',
          type: 'line',
          showSymbol: false,
          data: myRegression.points,
          markPoint: {
            itemStyle: {
              normal: {
                color: 'transparent'
              }
            },
            label: {
              normal: {
                show: true,
                formatter: myRegression.expression,
                textStyle: {
                  color: '#333',
                  fontSize: 14
                }
              }
            },
            data: [{
              coord: myRegression.points[myRegression.points.length - 1]
            }]
          }
        }]
      });

    },
    test() {
      request({
        url: '/api/test',
        method: 'get',
        params: {},//url参数
        data: {}//body参数,如果是get则不需要
      }).then(res => {
        console.log("res", res)
        this.form = res.data
        console.log("this.form ", this.form)
        this.$nextTick()
          .then(() => {
            //this.drawLine()
          })

      }).catch(err => {
        console.log("err", err)
      })
    },
    result() {
      console.info("this.data", this.data)
    },
    trigger(event, item, property) {
      console.info("event", event)
      console.info("item", item)
      console.info("property", property)

      let calcs = property.calc.split('/')
      if (calcs.length == 2) {
        this.$set(item, "nd", item[calcs[0]] / item[calcs[1]])
      }
    },
    empty() {

    }
  },
}
</script>

<style slot-scope>
.box-card {
  margin-top: 15px;
}
</style>
