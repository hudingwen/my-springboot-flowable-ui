<template>
    <el-card class="box-card">
        <el-row :gutter="20">

            <el-col style="width:375px;">
                <el-link disabled>导航区域</el-link> <el-link type="primary" @click="handleNodeRootAdd">添加</el-link>

                <vue-custom-scrollbar style="height:calc(100vh - 100px)">
                    <el-tree :data="config" node-key="id" ref="tree" :highlight-current="true"
                        :expand-on-click-node="false" :current-node-key="curKey" @current-change="handleCurNodeChage"
                        @node-drag-start="handleDragStart" @node-click="handleNodeClick"
                        @node-drag-enter="handleDragEnter" @node-drag-leave="handleDragLeave"
                        @node-drag-over="handleDragOver" @node-drag-end="handleDragEnd" @node-drop="handleDrop"
                        draggable :allow-drop="allowDrop" :allow-drag="allowDrag">
                        <span class="custom-tree-node" slot-scope="{ node, data }">
                            <span>{{ node.label }}</span>
                            <span>
                                <el-button v-if="data.type === 'group'" type="text" @click="() => append(data)">
                                    添加
                                </el-button>
                                <el-button type="text" size="mini" @click="() => remove(node, data)">
                                    删除
                                </el-button>
                            </span>
                        </span>
                    </el-tree>
                </vue-custom-scrollbar>
            </el-col>



            <el-col style="width:375px;">
                <el-link disabled>编辑区域</el-link>
                <vue-custom-scrollbar style="height:calc(100vh - 100px)">
                    <el-form v-if="form.type" ref="form" :model="form" label-width="80px">
                        <el-row>

                            <el-col>
                                <el-form-item label="分组分项">
                                    <!-- <el-input v-model="form.type"></el-input> -->
                                    <el-select @change="handleChangeType" v-model="form.type" placeholder="请选择标识">
                                        <el-option label="分组" value="group"></el-option>
                                        <el-option label="分项" value="item"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col>
                                <el-form-item label="字段类型">
                                    <!-- <el-input v-model="form.property"></el-input> -->
                                    <el-select v-if="form.type === 'item'" v-model="form.property"
                                        placeholder="请选择字段类型">
                                        <el-option label="文本" value="text"></el-option>
                                        <el-option label="日期" value="date"></el-option>
                                        <el-option label="下拉" value="select"></el-option>
                                        <el-option label="数值" value="number"></el-option>
                                        <el-option label="多行文本" value="textarea"></el-option>
                                    </el-select>
                                    <el-select v-if="form.type === 'group'" v-model="form.property"
                                        placeholder="请选择字段类型">
                                        <el-option label="表单" value="form"></el-option>
                                        <el-option label="表格" value="table"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col>
                                <el-form-item label="字段名称">
                                    <el-input v-model="form.label"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col v-if="form.type === 'item'">
                                <el-form-item label="字段绑定">
                                    <el-input v-model="form.field"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col v-if="form.type === 'item'">
                                <el-form-item label="是否只读">
                                    <!-- <el-input v-model="form.readonly"></el-input> -->
                                    <el-checkbox v-model="form.readonly"></el-checkbox>
                                </el-form-item>
                            </el-col>
                            <el-col v-if="form.type === 'item'">
                                <el-form-item label="是否禁用">
                                    <!-- <el-input v-model="form.disabled"></el-input> -->
                                    <el-checkbox v-model="form.disabled"></el-checkbox>
                                </el-form-item>
                            </el-col>
                            <!-- <el-col>
                            <el-form-item>
                                <el-button type="primary" @click="formSave">保存</el-button>
                                <el-button @click="formReset">重置</el-button>
                            </el-form-item>
                        </el-col> -->
                        </el-row>
                    </el-form>
                </vue-custom-scrollbar>
            </el-col>

            <el-col style="width:calc(100% - 750px)">
                <el-link disabled>预览区域</el-link>
                <vue-custom-scrollbar style="height:calc(100vh - 100px)">
                    <Sample :config="config" :data="data"></Sample>
                </vue-custom-scrollbar>
            </el-col>
        </el-row>

        <el-dialog title="" :visible.sync="dialogVisibleTree" width="30%">
            <pre>{{ config }}</pre>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisibleTree = false">关 闭</el-button>
            </span>
        </el-dialog>
    </el-card>
</template>

<script>
import Sample from './components/Sample.vue'

import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"

export default {
    name: "testSample",
    components: {
        Sample,
        vueCustomScrollbar
    },
    mounted() {

    },
    data() {
        return {
            dialogVisibleTree: false,
            dialogVisibleData: false,
            curKey: null,
            curRow: null,
            form: {
                "id": "",				    //主键
                "field": "",		        //字段
                "label": "",		        //名称 
                "property": "",		        //文本属性  text-文本 date-日期 ......
                "index": 0,				    //排序
                "type": "",			        //标识类型  group-组别 item-项
                "readonly": false,		    //是否只读
                "disabled": false,          //是否禁用
                "trigger": false,           //是否触发
                "calc": "",                 //计算公式
            },
            data: {
                // cydwsyt: []
            },
            config: [
                {
                    id: 1,
                    label: '基础信息',
                    type: 'group',
                    property: "form",
                    children: [
                        {
                            "id": "001",				//主键
                            "field": "rwmc",		    //字段
                            "label": "任务名称：",		 //名称 
                            "index": 1,				    //排序
                            "property": "text",			//文本类型
                            "readonly": false,		    //是否只读
                            "disabled": false,          //是否禁用
                            "type": 'item'
                        },
                        {
                            "id": "002",
                            "field": "jcrq",
                            "label": "采样/监测日期：",
                            "index": 2,
                            "property": "date",
                            "readonly": false,
                            "disabled": false,
                            "type": 'item'
                        },
                        {
                            "id": "003",
                            "field": "tq",
                            "label": "天 气：",
                            "index": 3,
                            "property": "text",
                            "readonly": false,
                            "disabled": false,
                            "type": 'item'
                        },
                        {
                            "id": "004",
                            "field": "cyff",
                            "label": "采样方法：",
                            "index": 4,
                            "property": "select",
                            "readonly": false,
                            "disabled": false,
                            "type": "item",
                        },
                        {
                            "id": "005",
                            "field": "qw",
                            "label": "气温（℃）：",
                            "index": 5,
                            "property": "number",
                            "readonly": false,
                            "disabled": false,
                            "type": "item",
                        },
                        {
                            "id": "006",
                            "field": "qy",
                            "label": "气压（kpa）：",
                            "index": 6,
                            "property": "number",
                            "readonly": false,
                            "disabled": false,
                            "type": "item",
                        },
                    ]
                },
                {
                    id: 2,
                    label: '环境监测',
                    type: 'group',
                    property: "form",
                    children: [
                        {
                            "id": "007",
                            "field": "stmc",
                            "label": "水体名称",
                            "index": 1,
                            "property": "text",
                            "readonly": false,
                            "disabled": false,
                            "type": "",
                        },
                        {
                            "id": "008",
                            "field": "dwmc",
                            "label": "点位名称",
                            "index": 2,
                            "property": "text",
                            "readonly": false,
                            "disabled": false,
                            "type": "item",
                        },
                        {
                            "id": "009",
                            "field": "hdlb",
                            "label": "划定类别",
                            "index": 3,
                            "property": "text",
                            "readonly": false,
                            "disabled": false,
                            "type": "item",
                        },
                        {
                            "id": "010",
                            "field": "jd",
                            "label": "经度",
                            "index": 6,
                            "property": "text",
                            "readonly": false,
                            "disabled": false,
                            "type": "item",
                        },
                        {
                            "id": "011",
                            "field": "wd",
                            "label": "纬度",
                            "index": 6,
                            "property": "text",
                            "readonly": false,
                            "disabled": false,
                            "type": "item",
                        },
                        {
                            "id": "012",
                            "field": "hk",
                            "label": "河宽（m）",
                            "index": 6,
                            "property": "number",
                            "readonly": false,
                            "disabled": false,
                            "type": "item",
                        },
                        {
                            "id": "013",
                            "field": "ss",
                            "label": "水深（m）",
                            "index": 6,
                            "property": "number",
                            "readonly": false,
                            "disabled": false,
                            "type": "item",
                        },
                        {
                            "id": "014",
                            "label": "断面水质表观",
                            "index": 6,
                            "property": "textarea",
                            "readonly": false,
                            "disabled": false,
                            "type": "item",
                        },
                        {
                            "id": "015",
                            "field": "ypggms",
                            "label": "样品感官描述",
                            "index": 6,
                            "property": "textarea",
                            "readonly": false,
                            "disabled": false,
                            "type": "item",
                        },
                        {
                            "id": "016",
                            "field": "dmzbhjms",
                            "label": "断面周边环境描述",
                            "index": 6,
                            "property": "textarea",
                            "readonly": false,
                            "disabled": false,
                            "type": "item",
                        },
                        {
                            "id": "017",
                            "field": "bz",
                            "label": "备注",
                            "index": 6,
                            "property": "textarea",
                            "readonly": false,
                            "disabled": false,
                            "type": "item",
                        },
                        {
                            "id": "018",
                            "field": "cydwsyt",
                            "label": "采样点位示意图",
                            "index": 5,
                            "property": "check",
                            "readonly": false,
                            "disabled": false,
                            "type": "item",
                        },
                    ]
                },
                {
                    id: 3,
                    label: '现场测定',
                    type: 'group',
                    property: "table",
                    children: [
                        {
                            "id": "018",
                            "field": "cdxm",
                            "label": "测定项目",
                            "index": 1,
                            "property": "text",
                            "readonly": false,
                            "disabled": false,
                            "type": "item",
                        },
                        {
                            "id": "020",
                            "field": "fxff",
                            "label": "分析方法",
                            "index": 1,
                            "property": "text",
                            "readonly": false,
                            "disabled": false,
                            "type": "item",
                        },
                        {
                            "id": "021",
                            "field": "syyq",
                            "label": "使用仪器",
                            "index": 1,
                            "property": "text",
                            "readonly": false,
                            "disabled": false,
                            "type": "item",
                        },
                        {
                            "id": "022",
                            "field": "cdjg",
                            "label": "测定结果",
                            "index": 1,
                            "property": "text",
                            "readonly": false,
                            "disabled": false,
                            "type": "item",
                        },
                        {
                            "id": "023",
                            "field": "jgdw",
                            "label": "结果单位",
                            "index": 1,
                            "property": "text",
                            "readonly": false,
                            "disabled": false,
                            "type": "item",
                        },
                        {
                            "id": "024",
                            "field": "bz",
                            "label": "备注",
                            "index": 1,
                            "property": "text",
                            "readonly": false,
                            "disabled": false,
                            "type": "item",
                        }
                    ]
                },
                {
                    id: 4,
                    label: '采样信息',
                    type: 'group',
                    property: "table",
                    children: [
                        {
                            "id": "025",
                            "field": "ypbh",
                            "label": "样品编号",
                            "index": 1,
                            "property": "text",
                            "readonly": false,
                            "disabled": false,
                            "type": "item",
                        },
                        {
                            "id": "026",
                            "field": "jcxm",
                            "label": "监测项目",
                            "index": 2,
                            "property": "number",
                            "readonly": false,
                            "disabled": false,
                            "type": "item",
                        },
                        {
                            "id": "027",
                            "field": "rqcz",
                            "label": "容器材质",
                            "index": 3,
                            "property": "number",
                            "readonly": false,
                            "disabled": false,
                            "trigger": false,
                            "calc": "",
                            "type": "item",
                        },
                        {
                            "id": "028",
                            "field": "cytj",
                            "label": "采样体积（mL）",
                            "index": 3,
                            "property": "number",
                            "readonly": false,
                            "disabled": false,
                            "trigger": false,
                            "calc": "",
                            "type": "item",
                        },
                        {
                            "id": "029",
                            "field": "ypys",
                            "label": "样品保存与运输",
                            "index": 3,
                            "property": "number",
                            "readonly": false,
                            "disabled": false,
                            "trigger": false,
                            "calc": "",
                            "type": "item",
                        },
                        {
                            "id": "030",
                            "field": "sl",
                            "label": "数量（瓶）",
                            "index": 3,
                            "property": "number",
                            "readonly": false,
                            "disabled": false,
                            "trigger": false,
                            "calc": "",
                            "type": "item",
                        },
                        {
                            "id": "031",
                            "field": "px",
                            "label": "平行（瓶）",
                            "index": 3,
                            "property": "number",
                            "readonly": false,
                            "disabled": false,
                            "calc": "",
                            "type": "item",
                        },
                        {
                            "id": "032",
                            "field": "kb",
                            "label": "空白（瓶）",
                            "index": 3,
                            "property": "number",
                            "readonly": false,
                            "disabled": false,
                            "calc": "",
                            "type": "item",
                        },
                        {
                            "id": "033",
                            "field": "bz",
                            "label": "备注",
                            "index": 3,
                            "property": "number",
                            "readonly": false,
                            "disabled": false,
                            "calc": "",
                            "type": "item",
                        },
                    ]
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        };
    },
    methods: {
        uuid() {
            var s = [];
            var hexDigits = "0123456789abcdef";
            for (var i = 0; i < 36; i++) {
                s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
            }
            s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
            s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
            s[8] = s[13] = s[18] = s[23] = "-";

            var uuid = s.join("");
            return uuid;
        },
        handleNodeRootAdd() {
            let newChild = { id: this.uuid(), label: '新增项', children: [], type: 'group' };
            this.config.push(newChild)
            setTimeout(() => {
                // this.curKey = newChild.id
                this.$refs['tree'].setCurrentKey(newChild.id)
                this.curRow = newChild;
                // this.form = JSON.parse(JSON.stringify(this.curRow))
                this.form = this.curRow
            }, 200)
        },
        append(data) {
            let newChild = { id: this.uuid(), label: '新增项', children: [], type: 'item' };
            if (!data.children) {
                this.$set(data, 'children', []);
            }
            data.children.push(newChild);
            console.log(this.$refs['tree'])
            this.curKey = newChild.id
            setTimeout(() => {
                // this.curKey = newChild.id
                this.$refs['tree'].setCurrentKey(newChild.id)
                this.curRow = newChild;
                // this.form = JSON.parse(JSON.stringify(this.curRow))
                this.form = this.curRow

            }, 200)
        },
        remove(node, data) {
            const parent = node.parent;
            const children = parent.data.children || parent.data;
            const index = children.findIndex(d => d.id === data.id);
            children.splice(index, 1);
            if (data === this.curRow) {
                this.curRow = null;
                this.curKey = null;
                this.form = {};
            }
        },
        formReset() {
            this.form = JSON.parse(JSON.stringify(this.curRow))
        },
        formSave() {
            for (let item in this.form) {
                if (item === 'children') continue;
                this.curRow[item] = this.form[item]
            }
        },
        handleChangeType() {
            this.form.property = ''
        },
        handleCurNodeChage(data, node) {
            this.curRow = data;
            // this.form = JSON.parse(JSON.stringify(this.curRow))
            this.form = this.curRow
        },
        handleNodeClick(data, node) {
            this.curRow = data;
            // this.form = JSON.parse(JSON.stringify(this.curRow))
            this.form = this.curRow
        },
        handleDragStart(node, ev) {
            console.log('drag start', node);
        },
        handleDragEnter(draggingNode, dropNode, ev) {
            console.log('tree drag enter: ', dropNode.label);
        },
        handleDragLeave(draggingNode, dropNode, ev) {
            console.log('tree drag leave: ', dropNode.label);
        },
        handleDragOver(draggingNode, dropNode, ev) {
            console.log('tree drag over: ', dropNode.label);
        },
        handleDragEnd(draggingNode, dropNode, dropType, ev) {
            console.log('tree drag end: ', dropNode && dropNode.label, dropType);
        },
        handleDrop(draggingNode, dropNode, dropType, ev) {
            console.log('tree drop: ', dropNode.label, dropType);
        },
        allowDrop(draggingNode, dropNode, type) {
            // if (dropNode.data.label === '二级 3-1') {
            //     return type !== 'inner';
            // } else {
            //     return true;
            // }
            return true;
        },
        allowDrag(draggingNode) {
            // return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
            return true;
        }
    }

}
</script>

<style slot-scope>
.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
}
</style>
