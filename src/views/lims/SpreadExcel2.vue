<template>
    <div class="app-container">
        <el-card>
            <el-row>
                <el-col style="margin-bottom:10px">
                    <el-upload action="" :before-upload="importExcelFile" style="display: inline-grid;margin:0 10px">
                        <el-button>导入Excel</el-button>
                    </el-upload>
                    <el-button @click="bind">绑定字段</el-button>
                    <el-button @click="load">加载数据</el-button>

                    <el-upload action="" :before-upload="importJsonFile" style="display: inline-grid;margin:0 10px">
                        <el-button>导入设计模板</el-button>
                    </el-upload>
                    <el-button @click="loadData">加载模板数据</el-button>
                    <el-button @click="getData">获取数据</el-button>
                    <el-button @click="addTempData">临时添加一个数据</el-button>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <gc-spread-sheets hostClass="spread-host" @workbookInitialized="initWorkbook">
                    </gc-spread-sheets>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
import '@grapecity/spread-sheets-vue'
import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css'
import GC from '@grapecity/spread-sheets'
import '@grapecity/spread-sheets-resources-zh'
GC.Spread.Common.CultureManager.culture("zh-cn");
import { IO } from "@grapecity/spread-excelio";
let spreadNS = GC.Spread.Sheets, SheetArea = spreadNS.SheetArea;

export default {
    components: {},
    props: [],
    computed: {

    },
    data() {
        return {
            spread: null,
            sheet: null,
            tables: [],
            data: { name: 'Peter Winston', age: 25, gender: 'Male', address: { postcode: '10001' } },
            hitTestResult: '',
            row: 0,
            col: 0,
            value: '',
            dataSource2: null,
            dataSource1: null,
            formData: {
                cydh: 'CDHJ20220606017-W176',
                jcrw: 'xxxxx专项（中旬）（2022年6月）',
                jcxz: '环境质量检测',
                ypxz: '地表水',
                jcdw: 'xxx街桥',
                jd: '',
                weidu: '',
                qymc: '',
                qydz: '',
                cyff: '地表水和污水监测技术规范（HJ/T 91-2002）',
                cyrq: '2022-06-15',
                ghlx: 'Ⅲ类',
                stmc: '名称1',
                dwmc: '点位1',
                qw: '',
                tq: '晴天',
                qw: '27℃',
                qy: '1000kpa',
                xccdxm: [
                    {
                        cdxm: 'PH',
                        pc: '1',
                        fxff: 'HJ/T 91-2002',
                        jg: 0,
                        bz: ''
                    },
                    {
                        cdxm: '氨氮',
                        pc: '1',
                        fxff: 'HJ/T 91-2002',
                        jg: 0,
                        bz: ''
                    },
                    {
                        cdxm: 'COD',
                        pc: '1',
                        fxff: 'HJ/T 91-2002',
                        jg: 0,
                        bz: ''
                    }
                ],
                snst: '',
                hk: '',
                ss: '',
                clsb: '',
                stggms: '',
                ypggms: '',
                bz: '',
                ypdwsyt: [],
                ypxx: [
                    {
                        ypbh: 'CDHJ20220606017-W176',
                        pc: 1,
                        cysj: '2022-8-27 14:31',
                        zk: '无',
                        jcxm: '[共22项]铅，氨氮，总氧化物...',
                        xccdxm: '[共4项] 水温，PH值，溶解氧，电导率',
                        ypsl: '1瓶',
                        sftjbcj: '是',
                        bdjc: '否',
                        ypcj: '',
                        zt: '',
                        bz: ''

                    },
                    {
                        ypbh: 'CDHJ20220606017-W177',
                        pc: 1,
                        cysj: '2022-8-27 14:31',
                        zk: '无',
                        jcxm: '[共22项]铅，氨氮，总氧化物...',
                        xccdxm: '[共4项] 水温，PH值，溶解氧，电导率',
                        ypsl: '1瓶',
                        sftjbcj: '是',
                        bdjc: '否',
                        ypcj: '',
                        zt: '',
                        bz: ''

                    },
                    {
                        ypbh: 'CDHJ20220606017-W178',
                        pc: 1,
                        cysj: '2022-8-27 14:31',
                        zk: '无',
                        jcxm: '[共22项]铅，氨氮，总氧化物...',
                        xccdxm: '[共4项] 水温，PH值，溶解氧，电导率',
                        ypsl: '1瓶',
                        sftjbcj: '是',
                        bdjc: '否',
                        ypcj: '',
                        zt: '',
                        bz: ''

                    }
                ],
                sfgsys: '',
                dbfs: '通用打包',
                lz: [
                    {
                        jxr: '',
                        lxr: '',
                        jssj: ''
                    },
                    {
                        jxr: '',
                        lxr: '',
                        jssj: ''
                    },
                    {
                        jxr: '',
                        lxr: '',
                        jssj: ''
                    }
                ],
                sy: {
                    jxr: '',
                    lxr: '',
                    jssj: '',
                    bz: ''
                },
                jb: {
                    cy: '',
                    sy: '',
                    cysh: '',
                    sysh: '',
                    cybz: '',
                    sybz: ''
                },
                sh: {
                    shzt: '',
                    shbz: ''
                },
                ph: {
                    value: '无量',
                    ly: '水质 氨氮监测 火焰原子分光光度法（HJ/T 2013）',
                    yq: '便携式多参数检测器（2022-06-01）',
                    ls: [
                        {
                            pc: 1,
                            fxjg: 7.98,
                            jgdw: '无量',
                            bz: ''
                        }
                    ]
                },
                ddl: {
                    value: '无量',
                    ly: '水质 氨氮监测 火焰原子分光光度法（HJ/T 2013）',
                    yq: '便携式多参数检测器（2022-06-01）',
                    ls: [
                        {
                            pc: 1,
                            fxjg: 7.98,
                            jgdw: '无量',
                            bz: ''
                        }
                    ]
                },
                wd: {
                    value: '℃',
                    ly: '水质 氨氮监测 火焰原子分光光度法（HJ/T 2013）',
                    yq: '便携式多参数检测器（2022-06-01）',
                    ls: [
                    ]
                },
                rjy: {
                    value: 'mg/L',
                    ly: '水质 氨氮监测 火焰原子分光光度法（HJ/T 2013）',
                    yq: '便携式多参数检测器（2022-06-01）',
                    ls: [
                    ]
                },
                picture: {
                    srcList:
                        [
                            {
                                checked: false,
                                edit: false,
                                name: '图片1',
                                url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                            },
                            {
                                edit: false,
                                name: '图片2',
                                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
                            }
                        ]
                },
                fpxx: [
                    {
                        xh: 1,
                        jcwz: '悬浮物',
                        cyl: '500ml',
                        rq: 'P',
                        sl: 2,
                        bcff: '加入XXX进行固定',
                        bcsj: '2022-8-27 16:48:32',
                        bcdd: '分析室'
                    },
                    {
                        xh: 2,
                        jcwz: '六阶铬',
                        cyl: '500ml',
                        rq: 'P',
                        sl: 2,
                        bcff: '加入XXX进行固定',
                        bcsj: '2022-8-27 16:48:32',
                        bcdd: '分析室'
                    },
                    {
                        xh: 3,
                        jcwz: '氰化物',
                        cyl: '500ml',
                        rq: 'P',
                        sl: 2,
                        bcff: '加入XXX进行固定',
                        bcsj: '2022-8-27 16:48:32',
                        bcdd: '分析室'
                    },
                    {
                        xh: 4,
                        jcwz: '甲苯',
                        cyl: '500ml',
                        rq: 'P',
                        sl: 2,
                        bcff: '加入XXX进行固定',
                        bcsj: '2022-8-27 16:48:32',
                        bcdd: '分析室'
                    }
                ]


            },
        }
    },
    watch: {},
    created() {

    },
    mounted() { },
    methods: {
        load() {
            let dataSource = new spreadNS.Bindings.CellBindingSource(this.formData)
            let sheet = this.spread.getActiveSheet();
            sheet.setDataSource(dataSource);
            this.spread.resumePaint();
            console.log("加载数据")
        },
        bind() {
            let sheet = this.spread.getActiveSheet();
            var spreadNS = GC.Spread.Sheets;
            var data = {
                name: 'Jones', region: 'East',
                sales: [
                    { orderDate: '1/6/2013', item: 'Pencil', units: 95, cost: 1.99, isMakeMoney: true },
                    { orderDate: '4/1/2013', item: 'Binder', units: 60, cost: 4.99, isMakeMoney: false },
                    { orderDate: '6/8/2013', item: 'Pen Set', units: 16, cost: 15.99, isMakeMoney: false }
                ]
            };
            var convert = function (item) {
                return item['cost'] + '$';
            }
            sheet.addRows(10 + 1, 3);
            var table = sheet.tables.add('tableSales', 10, 0, 4, 5);

            var tableColumn1 = new spreadNS.Tables.TableColumn(1, "orderDate", "Order Date", "d/M/yy");
            var tableColumn2 = new spreadNS.Tables.TableColumn(2, "item", "Item");
            var tableColumn3 = new spreadNS.Tables.TableColumn(3, "units", "Units");
            var tableColumn4 = new spreadNS.Tables.TableColumn(4, "cost", "Cost", null, null, convert);
            var tableColumn5 = new spreadNS.Tables.TableColumn(5, "isMakeMoney", "IsMakeMoney", null, new GC.Spread.Sheets.CellTypes.CheckBox());
            table.autoGenerateColumns(false);
            table.bind([tableColumn1, tableColumn2, tableColumn3, tableColumn4, tableColumn5], 'sales', data);

        },
        bind2() {
            let spread = this.spread
            //定义绑定
            function BindingPathCellType() {
                spreadNS.CellTypes.Text.call(this);
            }
            BindingPathCellType.prototype = new spreadNS.CellTypes.Text();
            // BindingPathCellType.prototype.paint = function (ctx, value, x, y, w, h, style, context) {
            //     if (value === null || value === undefined) {
            //         var sheet = context.sheet, row = context.row, col = context.col;
            //         if (sheet && (row === 0 || !!row) && (col === 0 || !!col)) {
            //             var bindingPath = sheet.getBindingPath(context.row, context.col);
            //             let sp = bindingPath.split('|');
            //             console.info("sp", sp)
            //             if (sp.length === 3) {
            //                 value = "[\"" + sp[0] + "\"]" + "[" + sp[1] + "]" + "[\"" + sp[2] + "\"]";
            //             } else {
            //                 value = "[" + bindingPath + "]";
            //             }
            //             console.info("value", value)
            //         }
            //     }
            //     spreadNS.CellTypes.Text.prototype.paint.apply(this, arguments);
            // };
            spread.suspendPaint();
            var sheet = spread.getActiveSheet();
            sheet.name("原始记录单");
            //绑定字段
            var bindingPathCellType = new BindingPathCellType();
            sheet.getCell(1, 1).bindingPath("cydh").cellType(bindingPathCellType);
            sheet.getCell(1, 4).bindingPath("cyrq").cellType(bindingPathCellType);
            sheet.getCell(1, 6).bindingPath("tq").cellType(bindingPathCellType);
            sheet.getCell(1, 8).bindingPath("cyff").cellType(bindingPathCellType);
            sheet.getCell(1, 10).bindingPath("qw").cellType(bindingPathCellType);
            sheet.getCell(1, 12).bindingPath("qy").cellType(bindingPathCellType);
            sheet.getCell(4, 0).bindingPath("stmc").cellType(bindingPathCellType);
            sheet.getCell(4, 1).bindingPath("dwmc").cellType(bindingPathCellType);


            // var table = sheet.tables.add("现场测定", 10, 0, 1, 1, spreadNS.Tables.TableThemes.light1);
            // table.autoGenerateColumns(true);
            // var tableColumn1 = new spreadNS.Tables.TableColumn();
            // tableColumn1.name("测定项目");
            // tableColumn1.dataField("cdxm");
            // var tableColumn2 = new spreadNS.Tables.TableColumn();
            // tableColumn2.name("频次");
            // tableColumn2.dataField("pc");
            // var tableColumn3 = new spreadNS.Tables.TableColumn();
            // tableColumn3.name("方法名称及来源");
            // tableColumn3.dataField("fxff");
            // table.bindColumns([tableColumn1, tableColumn2, tableColumn3]);
            // table.bindingPath("xccdxm"); 
            let order = 9;
            for (let index = 0; index < this.formData.xccdxm.length; index++) {
                const element = this.formData.xccdxm[index];
                sheet.addRows(order + 1, 1);
                // sheet.copyTo(order, 13, order + 1, 13, 1, 1, GC.Spread.Sheets.CopyToOptions.span)
                order += 1;


                //sheet.setValue(order, 0, element.cdxm);
                sheet.getCell(order, 0).bindingPath("xccdxm|" + index + "|cdxm").cellType(bindingPathCellType);
                // sheet.addSpan(order, 0, order, 2, GC.Spread.Sheets.SheetArea.viewport);
            }

            //加载数据
            let dataSource = new spreadNS.Bindings.CellBindingSource(this.formData)
            sheet.setDataSource(dataSource);
            this.spread.resumePaint();

            console.log("加载模板")
        },
        importExcelFile(file) {
            let spread = this.spread;
            let excelIo = new IO();
            let excelFile = file;
            // let password = this.password;

            // here is excel IO API
            excelIo.open(excelFile, (json) => {
                let workbookObj = json;
                spread.fromJSON(workbookObj);
                console.log("导入Excel文件")
                this.showTabstrip()
                this.showScrollbar()
                let sheet = spread.getActiveSheet();
                sheet.scroll(-99999, -99999);
                this.bindEvent()
            }, (e) => {
                // process error
                alert(e.errorMessage);
            }, {
                // password: password
            });
            return false;
        },
        bindEvent() {
            let sheet = this.spread.getActiveSheet();
            this.spread.bind(GC.Spread.Sheets.Events.TableRowsChanged, (sender, args) => {
                let { row, col, rowCount, colCount } = sheet.tables.all()[0].dataRange()
                for (let i = 1; i < rowCount; i++) {
                    sheet.copyTo(row, col, row + i, col, 1, colCount, GC.Spread.Sheets.CopyToOptions.span)
                }
                console.log("变化了")
            })
        },
        initWorkbook(spread) {
            this.spread = spread
            this.sheet = this.spread.getActiveSheet()
            setTimeout(() => {
                spread.suspendPaint();
                spread.resumePaint();
            }, 1000);
        },
        showScrollbar() {
            this.spread.options.showHorizontalScrollbar = false
            this.spread.options.showVerticalScrollbar = false
        },
        showTabstrip() {
            this.spread.options.tabStripVisible = false
            this.spread.invalidateLayout();
            this.spread.repaint();
        },
        deletePicture() {
            let ls = this.formData.picture.srcList.filter(t => t.checked)
            for (let index = 0; index < ls.length; index++) {
                const element = ls[index];
                for (let i = 0; i < this.formData.picture.srcList.length; i++) {
                    if (this.formData.picture.srcList[i] === element) {
                        this.formData.picture.srcList.splice(i, 1);
                    }

                }
            }
        },
        editPicture(row) {
            row.edit = true
        },
        savePicture(row) {
            row.edit = false
        },
        submitAudit() {
            if (this.type == 'edit') {
                this.iscysh = false
                this.$router.push({ path: "/take/own" });
            }
            if (this.type == 'audit') {
                if (this.formData.sh.shzt == '') {
                    this.$modal.msgError("请选择审核意见");
                    return
                }
                if (this.formData.sh.shzt == '未通过' && this.formData.sh.shbz == '') {
                    this.$modal.msgError("请填写未通过意见");
                    return
                }
                this.iscysh = false
                this.$router.push({ path: "/take/audit" });
            }
        },
        handleClose() {
            this.$modal.confirm('确定要关闭?').then(() => {
                this.iscysh = false
            }).catch(function () {

            });
        },
        submitForm() {
            this.$refs['elForm'].validate(valid => {
                if (!valid) return
                // TODO 提交表单
            })
        },
        resetForm() {
            this.$refs['elForm'].resetFields()
        },
        test() {

        },
        importJsonFile(file) {
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
                reader.onload = (e) => {

                    let jsonStr = e.target.result
                    console.info("jsonStr", jsonStr)
                    var jsonOptions = {
                        ignoreFormula: false,
                        ignoreStyle: false,
                        frozenColumnsAsRowHeaders: false,
                        frozenRowsAsColumnHeaders: false,
                        doNotRecalculateAfterLoad: false
                    };
                    this.spread.fromJSON(JSON.parse(jsonStr), jsonOptions);
                    this.bindEvent();
                }
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
            return false;
        },
        bindEvent() {
            let sheet = this.spread.getActiveSheet();
        },
        loadPre() {
            debugger
            this.tables = [];
            let sheet = this.spread.getActiveSheet();
            let tables = sheet.tables.all();
            for (let index = 0; index < tables.length; index++) {
                let opt = {}
                let table = tables[index]
                opt.table = table;
                opt.data = []
                this.tables.push(opt)
                let { row, col, rowCount, colCount } = table.dataRange()
                for (let i = 0; i < colCount; i++) {
                    var formula = sheet.getFormula(row, col + i, GC.Spread.Sheets.SheetArea.viewport);
                    let pos = {}
                    pos.row = row
                    pos.col = col + i
                    pos.formula = formula
                    if (formula) opt.data.push(pos)
                }
            }
        },
        loadData() {
            this.loadPre();
            let sheet = this.spread.getActiveSheet();
            let dataSource = new spreadNS.Bindings.CellBindingSource(this.formData)
            sheet.addRows(sheet.getRowCount(), 3 - 1);
            sheet.setDataSource(dataSource);
            this.formatTable()
            this.loadAfter();
            console.log("加载数据")
        },
        loadAfter() {
            debugger
            let sheet = this.spread.getActiveSheet();
            for (let index = 0; index < this.tables.length; index++) {
                let opt = this.tables[index]
                let table = opt.table
                let { row, col, rowCount, colCount } = table.dataRange()

                for (let i = 0; i < rowCount; i++) {
                    if (i === 0) {
                        //第一行设置格式
                        for (let k = 0; k < opt.data.length; k++) {
                            let curData = opt.data[k];
                            sheet.setFormula(row + i, curData.col, curData.formula, GC.Spread.Sheets.SheetArea.viewport);
                        }
                    } else {
                        //其他情况拷贝格式
                        sheet.copyTo(row, col, row + i, col, 1, colCount, GC.Spread.Sheets.CopyToOptions.formula)
                    }

                }
            }
        },
        getData() {
            let sheet = this.spread.getActiveSheet();
            let formdata = sheet.getDataSource().getSource()
            console.info("formdata", formdata)
            console.info(this.formData === formdata)
        },
        addTempData() {
            this.formData.xccdxm.push({
                cdxm: 'test'
            })
        },
        formatTable() {
            let sheet = this.spread.getActiveSheet();
            let tables = sheet.tables.all();
            for (let index = 0; index < tables.length; index++) {
                let table = tables[index]
                let { row, col, rowCount, colCount } = table.dataRange()
                for (let i = 1; i < rowCount; i++) {
                    sheet.copyTo(row, col, row + i, col, 1, colCount, GC.Spread.Sheets.CopyToOptions.span)
                    sheet.copyTo(row, col, row + i, col, 1, colCount, GC.Spread.Sheets.CopyToOptions.style)
                    sheet.copyTo(row, col, row + i, col, 1, colCount, GC.Spread.Sheets.CopyToOptions.formula)
                }
            }


        }
    }
}
</script>
<style scoped>
.spread-host {
    width: 100%;
    height: calc(100vh - 125px);
}
</style>