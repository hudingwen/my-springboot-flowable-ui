<!--Add designer tag into the template-->
<template>
    <div class="app-container">
        <el-card>


            <el-row>
                <el-col style="margin-bottom:10px">
                    <el-button @click="load">导入字段</el-button>
                    <el-button @click="exportJson">导出模板</el-button>
                    <el-upload action="" :before-upload="importJsonFile" style="display: inline-grid;margin:0 10px">
                        <el-button>导入模板</el-button>
                    </el-upload>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <gc-spread-sheets-designer :styleInfo='styleInfo' :config='config'
                        @designerInitialized="designerInitialized">
                    </gc-spread-sheets-designer>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>
<script>

// import the required modules
import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css'
import '@grapecity/spread-sheets-designer/styles/gc.spread.sheets.designer.min.css'
import '@grapecity/spread-sheets-designer-resources-cn'
import '@grapecity/spread-sheets-designer-vue'
import '@grapecity/spread-sheets-vue'

import GC from '@grapecity/spread-sheets'
import '@grapecity/spread-sheets-resources-zh'
GC.Spread.Common.CultureManager.culture("zh-cn");


export default {
    name: 'App',
    data: function () {
        return {
            styleInfo: { height: 'calc(100vh - 100px)' },
            config: null,
            designer: null,
            bindSchema: {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "properties": {
                    "cydh": {
                        "dataFieldType": "text",
                        "type": "string"
                    },
                    "jcrw": {
                        "dataFieldType": "text",
                        "type": "string"
                    },
                    "jcxz": {
                        "dataFieldType": "text",
                        "type": "string"
                    },
                    "ypxz": {
                        "dataFieldType": "text",
                        "type": "string"
                    },
                    "jcdw": {
                        "dataFieldType": "text",
                        "type": "string"
                    },
                    "jd": {
                        "dataFieldType": "text",
                        "type": "string"
                    },
                    "weidu": {
                        "dataFieldType": "text",
                        "type": "string"
                    },
                    "cyff": {
                        "dataFieldType": "text",
                        "type": "string"
                    },
                    "cyrq": {
                        "dataFieldType": "text",
                        "type": "string"
                    },
                    "ghlx": {
                        "dataFieldType": "text",
                        "type": "string"
                    },
                    "stmc": {
                        "dataFieldType": "text",
                        "type": "string"
                    },
                    "dwmc": {
                        "dataFieldType": "text",
                        "type": "string"
                    },
                    "tq": {
                        "dataFieldType": "text",
                        "type": "string"
                    },
                    "qw": {
                        "dataFieldType": "text",
                        "type": "string"
                    },
                    "xccdxm": {
                        "dataFieldType": "table",
                        "type": "string",
                        "properties": {
                            "cdxm": {
                                "type": "string"
                            },
                            "pc": {
                                "type": "string"
                            },
                            "dev": {
                                "type": "string"
                            },
                            "fxff": {
                                "type": "string"
                            },
                            "jg": {
                                "type": "string"
                            },
                            "bz": {
                                "type": "string"
                            }
                        }
                    },
                },
                "type": "object"
            }
        }
    },
    methods: {
        designerInitialized(value) {
            this.designer = value
        },
        load() {
            this.designer.setData("treeNodeFromJson", JSON.stringify(this.bindSchema))
            this.designer.setData("oldTreeNodeFromJson", JSON.stringify(this.bindSchema))
            this.designer.setData('updatedTreeNode', JSON.stringify(this.bindSchema))
        },
        exportJson() {
            this.designer.getData('treeNodeFromJson')
            this.designer.getData('updatedTreeNode')
            this.designer.getData('oldTreeNodeFromJson')
            if (!GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.DesignMode).getState(this.designer)) {
                //没有打开的时候打开，已经打开了就不用去管了。
                GC.Spread.Sheets.Designer.getCommand(GC.Spread.Sheets.Designer.CommandNames.DesignMode).execute(this.designer)
            }
            let spread = this.designer.getWorkbook()
            var jsonStr = JSON.stringify(spread.toJSON());

            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonStr));
            element.setAttribute('download', "导出Json");

            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        },
        importJsonFile(file) {
            let spread = this.designer.getWorkbook()
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
                    spread.fromJSON(JSON.parse(jsonStr), jsonOptions);
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
    }
}
</script>