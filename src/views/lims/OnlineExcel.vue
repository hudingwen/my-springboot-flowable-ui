<template>
    <el-card class="box-card">
        <el-row :gutter="20">

            <el-col style="width:400px;">
                <el-link disabled>字段绑定</el-link>
                <!-- <el-link type="primary" @click="handleNodeRootAdd">添加</el-link> -->
                <vue-custom-scrollbar style="height:calc(100vh - 400px)">
                    <el-tree :data="config" node-key="id" ref="tree" :default-expanded-keys="[1]"
                        :highlight-current="true" :expand-on-click-node="false" :current-node-key="curKey"
                        @current-change="handleCurNodeChage" @node-drag-start="handleDragStart"
                        @node-click="handleNodeClick" @node-drag-enter="handleDragEnter"
                        @node-drag-leave="handleDragLeave" @node-drag-over="handleDragOver"
                        @node-drag-end="handleDragEnd" @node-drop="handleDrop" draggable :allow-drop="allowDrop"
                        :allow-drag="allowDrag">
                        <span class="custom-tree-node" slot-scope="{ node, data }">
                            <span>{{ node.label }}</span>
                            <span>
                                <!-- <el-button v-if="data.type === 'group'" type="text" @click="() => append(data)">
                                    添加
                                </el-button>
                                <el-button type="text" size="mini" @click="() => remove(node, data)">
                                    删除
                                </el-button> -->
                                <el-button v-if="data.type === 'item'" type="text" size="mini"
                                    @click="bind(data, node)">
                                    绑定
                                </el-button>
                            </span>
                        </span>
                    </el-tree>
                </vue-custom-scrollbar>
                <el-link disabled>操作区域</el-link>
                <vue-custom-scrollbar style="height:300px">
                    <el-row>
                        <el-col :span="6">
                            <el-upload action="" :before-upload="handleExcelImport" style="display:inline">
                                <el-button size="small" type="primary">导入Excel</el-button>
                            </el-upload>
                        </el-col>
                        <el-col :span="6">
                            <el-upload action="" :before-upload="handleJsonImport" style="display:inline">
                                <el-button size="small" type="primary">导入Json</el-button>
                            </el-upload>
                        </el-col>
                        <el-col :span="6">
                            <el-button size="small" type="primary" @click="exportExcel">导出Excel</el-button>
                        </el-col>
                        <el-col :span="6">
                            <el-button size="small" type="primary" @click="exportJson">导出Json</el-button>
                        </el-col>

                        <el-col :span="8" style="margin-top:10px">
                            <el-button size="small" type="primary" @click="importdata">套用样品数据</el-button>
                        </el-col>

                        <el-col :span="8" style="margin-top:10px">
                            <el-button size="small" type="primary" @click="importdata">读取结果数据</el-button>
                        </el-col>
                        <el-col :span="4" style="margin-top:10px">
                            <el-button size="small" type="primary" @click="test">测试<sup>1</sup></el-button>
                        </el-col>

                        <el-col :span="4" style="margin-top:10px">
                            <el-button size="small" type="primary" @click="test2">测试<sub>2</sub></el-button>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top:15px;">
                        <el-col>
                            <el-table :data="data.sample" height="150" border style="width: 100%">
                                <el-table-column prop="xh" label="序号" width="50px">
                                </el-table-column>
                                <el-table-column prop="ypbh" label="样品编号">
                                </el-table-column>
                                <el-table-column prop="sfhl" label="结果" width="100px">
                                </el-table-column>
                            </el-table>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top:15px;">
                        <el-col :span="8">
                            <el-row>
                                <el-col style="width:15px;">行</el-col>
                                <el-col style="width:calc(100% - 20px)"><el-input v-model="excel.x"
                                        placeholder="行"></el-input></el-col>
                            </el-row>
                        </el-col>
                        <el-col :span="8">
                            <el-row>
                                <el-col style="width:15px;">列</el-col>
                                <el-col style="width:calc(100% - 20px)"><el-input v-model="excel.y"
                                        placeholder="列"></el-input></el-col>
                            </el-row>
                        </el-col>
                        <el-col :span="8">
                            <el-row>
                                <el-col style="width:15px;">值</el-col>
                                <el-col style="width:calc(100% - 20px)"><el-input v-model="excel.v"
                                        placeholder="值"></el-input></el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                </vue-custom-scrollbar>
            </el-col>
            <el-col style="width:calc(100% - 400px)">
                <el-link disabled>预览区域</el-link>
                <vue-custom-scrollbar style="height:calc(100vh - 100px)">
                    <div id="luckysheet" style="width:100%;height:100%">
                    </div>
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

import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"

export default {
    name: "testSample",
    components: {
        vueCustomScrollbar
    },
    mounted() {
        window.vue = this;
        console.info("luckysheet", luckysheet)
        $(function () {
            luckysheet.create({
                lang: 'zh',
                container: 'luckysheet', // luckysheet is the container id
                gridKey: 'test',
                plugins: ['chart'],
                hook: {
                    cellMousedown: function (cell, postion, sheetFile, ctx) {
                        console.info("cell", cell);
                        console.info("postion", postion);
                        window.vue.excel.x = postion.r + 1
                        window.vue.excel.y = postion.c + 1
                        window.vue.excel.v = luckysheet.getCellValue(postion.r, postion.c)
                    },
                }
            });
        });

    },
    data() {
        return {
            show: true,
            excel: {
                x: 1,
                y: 1
            },
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
                base: {
                    wtsbh: 'xxxxxx00001',
                    fxxm: '地表水',
                    fxff: '重量法',
                    fxrq: '2023-01-10',
                    yplb: '一般<sup>1</sup>',
                    yqjbh: '称重天平-0001',
                    yqhzrq: '2023-01-09',
                    yphgwd: '75℃',
                    hgsj: '30分钟',
                    lqsj: '60分钟'
                },
                sample: [
                    {
                        xh: '1',
                        ypbh: 'YP202202010001',
                        sfhl: ''
                    },
                    {
                        xh: '2',
                        ypbh: 'YP202202010002',
                        sfhl: ''
                    },
                    {
                        xh: '1',
                        ypbh: 'YP202202010003',
                        sfhl: ''
                    }
                ]
            },
            config: [
                {
                    id: 1,
                    label: '基础信息',
                    type: 'group',
                    table: "base",
                    property: "form",
                    children: [
                        {
                            "id": "001",				//主键
                            "field": "wtsbh",		    //字段
                            "label": "委托书编号",		 //名称 
                            "index": 1,				    //排序
                            "property": "text",			//文本类型
                            "readonly": false,		    //是否只读
                            "disabled": false,          //是否禁用
                            "type": 'item'
                        },
                        {
                            "id": "003",
                            "field": "fxxm",
                            "label": "分析项目",
                            "index": 3,
                            "property": "text",
                            "readonly": false,
                            "disabled": false,
                            "type": 'item'
                        },
                        {
                            "id": "004",
                            "field": "fxff",
                            "label": "分析方法",
                            "index": 4,
                            "property": "select",
                            "readonly": false,
                            "disabled": false,
                            "type": "item",
                        },
                        {
                            "id": "002",
                            "field": "fxrq",
                            "label": "分析日期",
                            "index": 2,
                            "property": "date",
                            "readonly": false,
                            "disabled": false,
                            "type": 'item'
                        },
                        {
                            "id": "005",
                            "field": "yplb",
                            "label": "样品类别",
                            "index": 5,
                            "property": "text",
                            "readonly": false,
                            "disabled": false,
                            "type": "item",
                        },
                        {
                            "id": "006",
                            "field": "yqjbh",
                            "label": "仪器名称及编号",
                            "index": 6,
                            "property": "text",
                            "readonly": false,
                            "disabled": false,
                            "type": "item",
                        },
                        {
                            "id": "0061",
                            "field": "yqhzrq",
                            "label": "容器恒重日期",
                            "index": 6,
                            "property": "date",
                            "readonly": false,
                            "disabled": false,
                            "type": "item",
                        },
                        {
                            "id": "0062",
                            "field": "yphgwd",
                            "label": "样品烘干温度",
                            "index": 6,
                            "property": "date",
                            "readonly": false,
                            "disabled": false,
                            "type": "item",
                        },
                        {
                            "id": "0063",
                            "field": "hgsj",
                            "label": "烘干时间",
                            "index": 6,
                            "property": "date",
                            "readonly": false,
                            "disabled": false,
                            "type": "item",
                        },
                        {
                            "id": "0064",
                            "field": "lqsj",
                            "label": "冷却时间",
                            "index": 6,
                            "property": "date",
                            "readonly": false,
                            "disabled": false,
                            "type": "item",
                        },
                        {
                            "id": "0065",
                            "field": "bz",
                            "label": "备注",
                            "index": 6,
                            "property": "text",
                            "readonly": false,
                            "disabled": false,
                            "type": "item",
                        },

                    ]
                },
                {
                    id: 4,
                    label: '样品信息',
                    table: "sample",
                    type: 'group',
                    property: "table",
                    children: [
                        {
                            "id": "0251",
                            "field": "xh",
                            "label": "序号",
                            "index": 1,
                            "property": "text",
                            "readonly": false,
                            "disabled": false,
                            "type": "item",
                        },
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
                            "field": "sfhl",
                            "label": "水分含量(%)",
                            "index": 1,
                            "property": "text",
                            "readonly": false,
                            "disabled": false,
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
        test() {
            luckysheet.setRangeShow({ row: [0, 0], column: [0, 59] })
            setTimeout(() => {
                console.log("触发复制了")
                $("#luckysheet-cols-copy-btn").trigger("click")
            }, 2000);
        },
        test2() {
            luckysheet.setRangeShow({ row: [1, 1], column: [0, 59] })
            setTimeout(() => {
                console.log("触发粘贴了")
                $("#luckysheet-cols-paste-btn").trigger("click")
            }, 100);
        },
        exportExcel() {
            exportSheetExcel(luckysheet, "原始记录单");
        },
        exportJson() {
            let data = luckysheet.getAllSheets()
            console.info("data", data)
            exportSheetToJson(luckysheet, "原始记录单")
        },
        importdata() {
            luckysheet.exitEditMode()
            for (let index = 0; index < this.config.length; index++) {
                let group = this.config[index];
                console.info("group", group)
                if (group.property === 'form') {
                    //表单处理
                    console.log("form处理")
                    for (let k = 0; k < group.children.length; k++) {
                        let item = group.children[k];
                        let findCells = luckysheet.find(item.field, { type: 'field' })
                        if (findCells && findCells.length > 0) {
                            console.info(item.label, findCells)
                            for (let t = 0; t < findCells.length; t++) {
                                let cell = findCells[t];
                                luckysheet.setCellValue(cell.row, cell.column, this.data[group.table][item.field])
                            }
                        }
                    }
                } else if (group.property === 'table') {
                    //表格处理
                    console.log("table处理")

                    if (this.data[group.table] && this.data[group.table].length > 0) {
                        //有数据

                        for (let k = 0; k < group.children.length; k++) {
                            let item = group.children[k];
                            let findCells = luckysheet.find(item.field, { type: 'field' })
                            if (findCells && findCells.length > 0) {
                                if (this.data[group.table].length > 1) {
                                    luckysheet.insertRow(findCells[0].row + 1, { number: this.data[group.table].length - 1 })


                                    let parentHeight = luckysheet.getRowHeight([findCells[0].row])[findCells[0].row]
                                    let curRowIndex = findCells[0].row + 1; //0
                                    let lastRowIndex = curRowIndex + this.data[group.table].length - 2;
                                    while (lastRowIndex >= curRowIndex) {
                                        let op = {}//curRowIndex: parentHeight 
                                        op["" + curRowIndex] = parentHeight
                                        console.info("op", op)

                                        luckysheet.setRowHeight(op)
                                        curRowIndex++
                                    }

                                }

                            }
                            break;//找到一行就不在添加行了
                        }

                    } else {
                        //无数据

                    }
                } else {
                    //其他暂定类型为实现的处理
                    console.log("未实现")
                }

            }
            luckysheet.exitEditMode()
        },
        bind(data, node) {
            console.info("data", data)
            console.info("node", node)
            luckysheet.exitEditMode()
            let x = this.excel.x - 1
            let y = this.excel.y - 1
            // luckysheet.setCellValue(x, y, node.parent.data.label + "." + data.label)
            luckysheet.setCellFormat(x, y, "m", node.parent.data.label + "." + data.label)
            luckysheet.setCellFormat(x, y, "fc", "#3d85c6")//字体颜色
            luckysheet.setCellFormat(x, y, "tb", 0)//换行截断




            luckysheet.setCellFormat(x, y, "property", node.parent.data.property)
            luckysheet.setCellFormat(x, y, "field", data.field)
            luckysheet.setCellFormat(x, y, "table", node.parent.data.table)
            // let cell = luckysheet.getCell(x, y)
            // cell.property = node.parent.data.property
            // cell.field = data.field
            // cell.table = node.parent.data.table
            luckysheet.exitEditMode()
        },
        handleJsonImport(file) {
            this.handleJsonImportFile(file)
            return false;
        },
        handleJsonImportFile(file) {
            //导入Json文件
            //获取选择的文件对象
            // 检测浏览器对FileReader的支持
            if (window.FileReader) {
                // 创建FileReader对象(文件对象)
                const reader = new FileReader();


                /*----------    6种事件模型    ---------*/
                // 开始读取时：
                reader.onloadstart = function (e) {
                    console.log("开始读取", e);
                };
                // 正在读取：
                reader.onprogress = function (e) {
                    console.log("正在读取", e);
                };
                // 读取出错时：
                reader.onerror = function (e) {
                    console.log("读取出错", e);
                };
                // 读取中断时：
                reader.onabort = function (e) {
                    console.log("读取中断", e);
                };
                // 读取成功时：
                reader.onload = function (e) {
                    console.log("读取成功", e);

                    let data = JSON.parse(e.target.result)
                    console.info("luckysheet", luckysheet)
                    luckysheet.create({
                        lang: 'zh',
                        container: 'luckysheet', // luckysheet is the container id
                        gridKey: 'test',
                        data: data,
                        plugins: ['chart'],
                        hook: {
                            cellMousedown: function (cell, postion, sheetFile, ctx) {
                                console.info("cell", cell);
                                console.info("postion", postion);
                                window.vue.excel.x = postion.r + 1
                                window.vue.excel.y = postion.c + 1
                                window.vue.excel.v = luckysheet.getCellValue(postion.r, postion.c)
                            },
                        }
                    });

                };
                // 读取完成，无论成功失败：
                reader.onloadend = function (e) {

                };

                console.log("文件类型", file.type)
                if (/image\/\w+/.test(file.type)) {
                    reader.readAsDataURL(file);
                } else {
                    // 输出文件
                    reader.readAsText(file, "utf-8");
                };
            } else {
                alert("Not supported by your browser!");
            };

        },
        handleExcelImport(file) {
            this.handleExcelImportFile(file)
            return false;
        },
        handleExcelImportFile(file) {
            //导入Excel文件
            LuckyExcel.transformExcelToLucky(
                file,
                function (exportJson, luckysheetfile) {
                    console.info("exportJson", exportJson)
                    // After obtaining the converted table data, use luckysheet to initialize or update the existing luckysheet workbook
                    // Note: Luckysheet needs to introduce a dependency package and initialize the table container before it can be used
                    luckysheet.create({
                        lang: 'zh',
                        container: 'luckysheet', // luckysheet is the container id
                        data: exportJson.sheets,
                        title: exportJson.info.name,
                        userInfo: exportJson.info.name.creator,
                        plugins: ['chart'],
                        hook: {
                            cellMousedown: function (cell, postion, sheetFile, ctx) {
                                console.info("cell", cell);
                                console.info("postion", postion);
                                window.vue.excel.x = postion.r + 1
                                window.vue.excel.y = postion.c + 1
                                window.vue.excel.v = luckysheet.getCellValue(postion.r, postion.c)
                            },
                        }
                    });
                },
                function (err) {
                    logger.error('Import failed. Is your fail a valid xlsx?');
                });
        },
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
