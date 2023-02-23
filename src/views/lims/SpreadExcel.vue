<template>
  <div class="app-container">
    <el-card>
      <el-row :gutter="20" style="margin-bottom:10px;">
        <el-col>
          行:<el-input style="width:100px" v-model="row"></el-input>
          列:<el-input style="width:100px" v-model="col"></el-input>
          值:<el-input style="width:300px" v-model="value"></el-input>
        </el-col>
        <el-col style="margin-top:10px;">

          <el-button @click="test">测试</el-button>
          <el-button @click="test2">测试2</el-button>
          <el-button @click="test3">测试3</el-button>
          <el-button @click="test4">测试4</el-button>
          <el-button @click="showTabstrip">底部tab隐藏</el-button>
          <el-button @click="showScrollbar">滚动条隐藏</el-button>

          <el-upload action="" :before-upload="importJsonFile" style="display: inline-grid;margin:0 10px">
            <el-button>导入Json</el-button>
          </el-upload>
          <el-button @click="exportJsonFile">导出Json</el-button>

          <el-upload action="" :before-upload="importExcelFile" style="display: inline-grid;margin:0 10px">
            <el-button>导入Excel</el-button>
          </el-upload>
          <el-button @click="exportExcelFile">导出Excel</el-button>

          <el-button @click="addRow">添加行</el-button>
          <el-button @click="addColumn">添加列</el-button>

          <el-button @click="showGridLine">网格隐藏</el-button>

          <el-button @click="copyRow">复制单元格</el-button>

          <el-button @click="loadSheet">加载表格</el-button>

          <el-button @click="loadData">加载数据</el-button>

          <el-button @click="addMyFunc">添加自定义公式</el-button>

          <el-button @click="merge">合并行</el-button>



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
  name: 'test',
  data() {
    return {
      spread: null,
      sheet: null,
      data: { name: 'Peter Winston', age: 25, gender: 'Male', address: { postcode: '10001' } },
      hitTestResult: '',
      row: 0,
      col: 0,
      value: '',
      dataSource2: null,
      dataSource1: null,
      mergeData: [
        {
          "Country": "Canada",
          "State": "Ontario",
          "City": "Ottawa",
          "Product": "Kraft Grated Parmesan Cheese"
        },
        {
          "Country": "Canada",
          "State": "Ontario",
          "City": "Belleville",
          "Product": "KIND Bars Almond & Coconut Gluten Free"
        },
        {
          "Country": "Canada",
          "State": "Ontario",
          "City": "Alliston",
          "Product": "Kraft Grated Parmesan Cheese"
        },
        {
          "Country": "Canada",
          "State": "Saskatchewan",
          "City": "Prince Albert",
          "Product": "Smartfood Popcorn"
        },
        {
          "Country": "Canada",
          "State": "Alberta",
          "City": "Red Deer",
          "Product": "Smartfood Popcorn"
        },
        {
          "Country": "Canada",
          "State": "Alberta",
          "City": "Calgary",
          "Product": "Planters Deluxe Whole Cashew"
        },
        {
          "Country": "Canada",
          "State": "Alberta",
          "City": "Calgary",
          "Product": "Kraft Grated Parmesan Cheese"
        },
        {
          "Country": "Canada",
          "State": "Alberta",
          "City": "Okotoks",
          "Product": "Smartfood Popcorn"
        },
        {
          "Country": "India",
          "State": "Andhra Pradesh",
          "City": "Hyderabad",
          "Product": "Teddy Grahams Crackers"
        },
        {
          "Country": "South Africa",
          "State": "Gauteng",
          "City": "Roodepoort",
          "Product": "Jaybee's Gourmet Nuts Gift Pack (3 Lb)"
        },
        {
          "Country": "Finland",
          "State": "Ita-Suomen Laani",
          "City": "Kuopio",
          "Product": "Planters Deluxe Whole Cashew"
        },
        {
          "Country": "Switzerland",
          "State": "Geneve",
          "City": "Vesenaz",
          "Product": "KIND Bars Almond & Coconut Gluten Free"
        },
        {
          "Country": "Switzerland",
          "State": "Vaud",
          "City": "Lausanne",
          "Product": "Smartfood Popcorn"
        },
        {
          "Country": "Switzerland",
          "State": "Vaud",
          "City": "Morges",
          "Product": "Kraft Real Mayo"
        },
        {
          "Country": "Denmark",
          "State": "Frederiksborg",
          "City": "Helsingor",
          "Product": "Planters Deluxe Whole Cashew"
        },
        {
          "Country": "Denmark",
          "State": "Kobenhavn",
          "City": "Kobenhavn",
          "Product": "Kraft Grated Parmesan Cheese"
        },
        {
          "Country": "Denmark",
          "State": "Storstrom",
          "City": "Nakskov",
          "Product": "Kraft Grated Parmesan Cheese"
        }
      ]
    }
  },
  methods: {
    test() {
      console.info("this.sheet", this.sheet)
      console.info("this.spread", this.spread)
    },
    test2() {
      this.sheet = this.spread.getActiveSheet();
      //Setting Values - Text
      this.sheet.setValue(1, 1, "Setting Values");
      //Setting Values - Number
      this.sheet.setValue(2, 1, "Number");
      this.sheet.setValue(2, 2, 23);
      this.sheet.setValue(3, 1, "Text");
      this.sheet.setValue(3, 2, "GrapeCity");
      this.sheet.setValue(4, 1, "Datetime");
      //Setting Values - DateTime
      this.sheet.getCell(4, 2).value(new Date(2020, 10, 7)).formatter("mm-dd-yyyy");

      this.sheet.getRange(1, 1, 1, 1).backColor("rgb(130, 188, 0)").foreColor("rgb(255, 255, 255)");
    },
    test3() {
      this.sheet = this.spread.getActiveSheet();

      var source = new GC.Spread.Sheets.Bindings.CellBindingSource(this.data);
      this.sheet.setBindingPath(2, 2, 'name');
      this.sheet.setBindingPath(3, 2, 'age');
      this.sheet.setBindingPath(4, 2, 'gender');
      this.sheet.setBindingPath(5, 2, 'address.postcode');
      this.sheet.setDataSource(source);
    },
    test4() {
      console.info("this.data", this.data)
    },
    showTabstrip() {
      this.spread.options.tabStripVisible = !this.spread.options.tabStripVisible
      this.spread.invalidateLayout();
      this.spread.repaint();
    },
    showScrollbar() {
      this.spread.options.showHorizontalScrollbar = !this.spread.options.showHorizontalScrollbar
      this.spread.options.showVerticalScrollbar = !this.spread.options.showVerticalScrollbar
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
    exportJsonFile() {

      var serializationOption = {
        ignoreFormula: false,
        ignoreStyle: false,
        rowHeadersAsFrozenColumns: false,
        columnHeadersAsFrozenRows: false
      };
      var jsonStr = JSON.stringify(this.spread.toJSON(serializationOption));
      console.info("jsonStr", jsonStr)
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonStr));
      element.setAttribute('download', "导出Json");

      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);

    },
    importExcelFile(file) {
      let spread = this.spread;
      let excelIo = new IO();
      let excelFile = file;
      // let password = this.password;

      // here is excel IO API
      excelIo.open(excelFile, function (json) {
        let workbookObj = json;
        spread.fromJSON(workbookObj);
      }, function (e) {
        // process error
        alert(e.errorMessage);
      }, {
        // password: password
      });
      return false;
    },
    exportExcelFile() {
      let spread = this.spread;
      let excelIo = new IO();

      let fileName = "导出Excel.xlsx"
      // let password = this.password; 

      let json = spread.toJSON();

      // here is excel IO API
      excelIo.save(json, function (blob) {
        saveAs(blob, fileName);
      }, function (e) {

        // process error
        alert(e.errorMessage);
      }, {
        // password: password
      });

    },
    addRow() {
      let spread = this.spread;
      let sheet = spread.getActiveSheet();

      if (sheet) {
        //sheet.getRowCount(SheetArea.viewport) 最后一行

        sheet.addRows(this.row + 1, 1);
      }
    },
    addColumn() {
      let spread = this.spread;
      let sheet = spread.getActiveSheet();

      if (sheet) {
        //sheet.getColumnCount(SheetArea.viewport) 最后一列

        sheet.addColumns(this.col + 1, 1);
      }
    },
    showGridLine() {
      let sheet = this.spread.getActiveSheet();
      sheet.suspendPaint();
      sheet.options.gridline.showHorizontalGridline = !sheet.options.gridline.showHorizontalGridline;
      sheet.options.gridline.showVerticalGridline = !sheet.options.gridline.showVerticalGridline;
      sheet.resumePaint();
    },

    copyRow() {
      this.sheet = this.spread.getActiveSheet()
      // sheet.copyTo(0, 0, 14, 14, 7, 7, GC.Spread.Sheets.CopyToOptions.all);
      this.sheet.addRows(2, 4);
      for (let index = 0; index < 4; index++) {
        this.sheet.copyTo(1, 0, 2, 0, 4, 5, GC.Spread.Sheets.CopyToOptions.all);

      }
    },
    loadSheet() {
      let spread = this.spread
      //define BindingPathCellType
      function BindingPathCellType() {
        spreadNS.CellTypes.Text.call(this);
      }
      BindingPathCellType.prototype = new spreadNS.CellTypes.Text();
      BindingPathCellType.prototype.paint = function (ctx, value, x, y, w, h, style, context) {
        if (value === null || value === undefined) {
          var sheet = context.sheet, row = context.row, col = context.col;
          if (sheet && (row === 0 || !!row) && (col === 0 || !!col)) {
            var bindingPath = sheet.getBindingPath(context.row, context.col);
            if (bindingPath) {
              value = "[" + bindingPath + "]";
            }
          }
        }
        spreadNS.CellTypes.Text.prototype.paint.apply(this, arguments);
      };
      //Generate two data source
      function Company(name, logo, slogan, address, city, phone, email) {
        this.name = name;
        this.logo = logo;
        this.slogan = slogan;
        this.address = address;
        this.city = city;
        this.phone = phone;
        this.email = email;
      }
      function Customer(id, name, company) {
        this.id = id;
        this.name = name;
        this.company = company;
      }
      function Record(description, quantity, amount) {
        this.description = description;
        this.quantity = quantity;
        this.amount = amount;
      }
      function Invoice(company, number, date, customer, receiverCustomer, records) {
        this.company = company;
        this.number = number;
        this.date = date;
        this.customer = customer;
        this.receiverCustomer = receiverCustomer;
        this.records = records;
      }
      let company1 = new Company("Baidu", null, "XXX原始记录单", "Beijing 1st road", "Beijing", "010-12345678", "baidu@baidu.com")
      let company2 = new Company("Tecent", null, "XXX原始记录单", "Shenzhen 2st road", "Shenzhen", "0755-12345678", "tecent@qq.com")
      let company3 = new Company("Alibaba", null, "XXX原始记录单", "Hangzhou 3rd road", "Hangzhou", "0571-12345678", "alibaba@alibaba.com")
      let customer1 = new Customer("A1", "employee 1", company2)
      let customer2 = new Customer("A2", "employee 2", company3)
      let records1 = [new Record("Finance charge on overdue balance at 1.5%", 1, 150), new Record("Invoice #100 for $1000 on 2014/1/1", 1, 150)]
      let records2 = [new Record("Purchase server device", 2, 15000), new Record("Company travel", 100, 1500), new Record("Company Dinner", 100, 200)]
      let invoice1 = new Invoice(company1, "00001", new Date(2014, 0, 1), customer1, customer1, records1)
      let invoice2 = new Invoice(company2, "00002", new Date(2014, 6, 6), customer2, customer2, records2)
      this.dataSource1 = new spreadNS.Bindings.CellBindingSource(invoice1)
      this.dataSource2 = new spreadNS.Bindings.CellBindingSource(invoice2);

      //Get sheet instance
      spread.suspendPaint();
      var sheet = spread.sheets[0];
      sheet.name("原始记录单");

      //Set value or bindingPath and style
      var bindingPathCellType = new BindingPathCellType();
      sheet.getCell(1, 2).bindingPath("company.slogan").cellType(bindingPathCellType).vAlign(spreadNS.VerticalAlign.bottom);
      sheet.getCell(3, 1).bindingPath("company.name").cellType(bindingPathCellType).foreColor("#58B6C0").font("bold 20px Arial");
      sheet.getCell(5, 1).bindingPath("company.address").cellType(bindingPathCellType);
      sheet.getCell(5, 3).value("INVOICE NO.").font("bold 15px Arial");
      sheet.getCell(5, 4).bindingPath("number").cellType(bindingPathCellType);
      sheet.getCell(6, 1).bindingPath("company.city").cellType(bindingPathCellType);
      sheet.getCell(6, 3).value("DATE").font("bold 15px Arial");
      sheet.getCell(6, 4).bindingPath("date").cellType(bindingPathCellType).formatter("MM/dd/yyyy").hAlign(spreadNS.HorizontalAlign.left);
      sheet.getCell(7, 1).bindingPath("company.phone").cellType(bindingPathCellType);
      sheet.getCell(7, 3).value("CUSTOMER ID").font("bold 15px Arial");
      sheet.getCell(7, 4).bindingPath("customer.id").cellType(bindingPathCellType);
      sheet.getCell(8, 1).bindingPath("company.email").cellType(bindingPathCellType);
      sheet.getCell(10, 1).value("TO").font("bold 15px Arial");
      sheet.getCell(10, 3).value("SHIP TO").font("bold 15px Arial");
      sheet.getCell(11, 1).bindingPath("customer.name").cellType(bindingPathCellType).textIndent(10);
      sheet.getCell(12, 1).bindingPath("customer.company.name").cellType(bindingPathCellType).textIndent(10);
      sheet.getCell(13, 1).bindingPath("customer.company.address").cellType(bindingPathCellType).textIndent(10);
      sheet.getCell(14, 1).bindingPath("customer.company.city").cellType(bindingPathCellType).textIndent(10);
      sheet.getCell(15, 1).bindingPath("customer.company.phone").cellType(bindingPathCellType).textIndent(10);
      sheet.getCell(11, 4).bindingPath("receiverCustomer.name").cellType(bindingPathCellType);
      sheet.getCell(12, 4).bindingPath("receiverCustomer.company.name").cellType(bindingPathCellType);
      sheet.getCell(13, 4).bindingPath("receiverCustomer.company.address").cellType(bindingPathCellType);
      sheet.getCell(14, 4).bindingPath("receiverCustomer.company.city").cellType(bindingPathCellType);
      sheet.getCell(15, 4).bindingPath("receiverCustomer.company.phone").cellType(bindingPathCellType);
      sheet.addSpan(17, 1, 1, 2);
      sheet.getCell(17, 1).value("JOB").foreColor("#58B6C0").font("bold 12px Arial");
      sheet.addSpan(17, 3, 1, 2);
      sheet.getCell(17, 3).value("PAYMENT TERMS").foreColor("#58B6C0").font("bold 12px Arial");
      sheet.addSpan(18, 1, 1, 2);
      sheet.getCell(18, 1).backColor("#DDF0F2");
      sheet.addSpan(18, 3, 1, 2);
      sheet.getCell(18, 3).value("Due on receipt").backColor("#DDF0F2").foreColor("#58B6C0").font("12px Arial");
      sheet.getRange(17, 1, 2, 4).setBorder(new spreadNS.LineBorder("#58B6C0", spreadNS.LineStyle.thin), { top: true, bottom: true, innerHorizontal: true });
      var table = sheet.tables.add("tableRecordds", 20, 1, 4, 4, spreadNS.Tables.TableThemes.light6);
      table.autoGenerateColumns(false);
      var tableColumn1 = new spreadNS.Tables.TableColumn();
      tableColumn1.name("DESCRIPTION");
      tableColumn1.dataField("description");
      var tableColumn2 = new spreadNS.Tables.TableColumn();
      tableColumn2.name("QUANTITY");
      tableColumn2.dataField("quantity");
      var tableColumn3 = new spreadNS.Tables.TableColumn();
      tableColumn3.name("AMOUNT");
      tableColumn3.dataField("amount");
      table.bindColumns([tableColumn1, tableColumn2, tableColumn3]);
      table.bindingPath("records");
      table.showFooter(true);
      table.setColumnName(3, "TOTAL");
      table.setColumnValue(2, "TOTAL DUE");
      table.setColumnDataFormula(3, "=[@QUANTITY]*[@AMOUNT]");
      table.setColumnFormula(3, "=SUBTOTAL(109,[TOTAL])");
      sheet.getCell(26, 1).formula('="Make all checks payable to "&B4&". THANK YOU FOR YOUR BUSINESS!"').foreColor("gray").font("italic 14px Arial");
      sheet.setRowHeight(26, 48, GC.Spread.Sheets.SheetArea.viewport);
      sheet.options.allowCellOverflow = true;
      //Adjust row height and column width
      sheet.setColumnWidth(0, 5);
      sheet.setColumnWidth(1, 300);
      sheet.setColumnWidth(2, 115);
      sheet.setColumnWidth(3, 125);
      sheet.setColumnWidth(4, 155);
      sheet.setRowHeight(0, 5);
      sheet.setRowHeight(1, 40);
      sheet.setRowHeight(2, 10);
      sheet.setRowHeight(3, 28);
      sheet.setRowHeight(17, 0);
      sheet.setRowHeight(18, 0);
      sheet.setRowHeight(19, 0);
      sheet.setRowHeight(25, 10);
      sheet.options.gridline = { showHorizontalGridline: false, showVerticalGridline: false };

      spread.resumePaint();
    },
    loadData() {
      var sheet = this.spread.getActiveSheet();
      if (sheet.getDataSource() === this.dataSource1) {
        sheet.setDataSource(this.dataSource2);
      } else {
        sheet.setDataSource(this.dataSource1);
      }
    },
    addMyFunc() {

      var activeSheet = this.spread.getActiveSheet();
      //  添加自定义函数
      // Type =myfunc(1)
      //  在单元格中查看结果
      function myfunc() {
      }
      myfunc.prototype = new GC.Spread.CalcEngine.Functions.Function("myfunc", 1, 1, { name: "myfunc", description: "This is my first function" });
      myfunc.prototype.evaluate = function (args) {


        console.log(args)
        if (args > 100) {
          return 1
          
        } else {
          return 0
        }

      }
      this.spread.addCustomFunction(new myfunc());
    },
    merge() {
      //获取活跃表单
      var activeSheet = this.spread.getActiveSheet();

      // 绑定数据源
      activeSheet.setRowHeight(0, 30, 1);
      activeSheet.autoGenerateColumns = true;
      activeSheet.setDataSource(this.mergeData);

      // 当AutoMergeDirection设置为Column AutoMergeMode设置为受限模式时，合并完整的表格单元格
      var range = new GC.Spread.Sheets.Range(-1, -1, -1, -1);

      // 自动合并SelectionMode为merged
      activeSheet.autoMerge(range, GC.Spread.Sheets.AutoMerge.AutoMergeDirection.column, GC.Spread.Sheets.AutoMerge.AutoMergeMode.restricted, GC.Spread.Sheets.SheetArea.viewport, GC.Spread.Sheets.AutoMerge.SelectionMode.merged);

      // 设置列宽
      for (var c = 0; c < activeSheet.getColumnCount(); c++)
        activeSheet.setColumnWidth(c, 130.0, GC.Spread.Sheets.SheetArea.viewport);
    },
    initWorkbook(spread) {
      this.spread = spread
      this.sheet = this.spread.getActiveSheet()
      this.bind()
    },
    bind() {
      console.log("绑定事件")
      var spreadNS = GC.Spread.Sheets;
      let spread = this.spread;
      spread.bind(spreadNS.Events.ActiveSheetChanged, (e, args) => {
        // _getElementById("showSpreadEvents").value =
        //   'SpreadEvent: ' + GC.Spread.Sheets.Events.ActiveSheetChanged + ' event called' + '\n' +
        //   'oldSheetName: ' + args.oldSheet.name() + '\n' +
        //   'newSheetName: ' + args.newSheet.name();
      });
      spread.bind(spreadNS.Events.CellClick, (e, args) => {
        var sheetArea = args.sheetArea === 0 ? 'sheetCorner' : args.sheetArea === 1 ? 'columnHeader' : args.sheetArea === 2 ? 'rowHeader' : 'viewPort';
        // _getElementById("showSpreadEvents").value =
        //   'SpreadEvent: ' + GC.Spread.Sheets.Events.CellClick + ' event called' + '\n' +
        //   'sheetArea: ' + sheetArea + '\n' +
        //   'row: ' + args.row + '\n' +
        //   'col: ' + args.col;

        this.row = args.row
        this.col = args.col
      });

      spread.bind(spreadNS.Events.SelectionChanging, (e, args) => {
        var selection = args.newSelections.pop();
        var sheetArea = args.sheetArea === 0 ? 'sheetCorner' : args.sheetArea === 1 ? 'columnHeader' : args.sheetArea === 2 ? 'rowHeader' : 'viewPort';
        // _getElementById("showSpreadEvents").value =
        //   'SpreadEvent: ' + GC.Spread.Sheets.Events.SelectionChanging + ' event called' + '\n' +
        //   'sheetArea: ' + sheetArea + '\n' +
        //   'row: ' + selection.row + '\n' +
        //   'column: ' + selection.col + '\n' +
        //   'rowCount: ' + selection.rowCount + '\n' +
        //   'colCount: ' + selection.colCount;

        this.row = selection.row
        this.col = selection.col
      });
      spread.bind(spreadNS.Events.SelectionChanged, (e, args) => {
        var selection = args.newSelections.pop();
        if (selection.rowCount > 1 && selection.colCount > 1) {
          var sheetArea = args.sheetArea === 0 ? 'sheetCorner' : args.sheetArea === 1 ? 'columnHeader' : args.sheetArea === 2 ? 'rowHeader' : 'viewPort';
          // _getElementById("showSpreadEvents").value =
          //   'SpreadEvent: ' + GC.Spread.Sheets.Events.SelectionChanged + ' event called' + '\n' +
          //   'sheetArea: ' + sheetArea + '\n' +
          //   'row: ' + selection.row + '\n' +
          //   'column: ' + selection.col + '\n' +
          //   'rowCount: ' + selection.rowCount + '\n' +
          //   'colCount: ' + selection.colCount;

          this.row = selection.row
          this.col = selection.col
        }
      });
      spread.bind(spreadNS.Events.EditStarting, (e, args) => {
        // _getElementById("showSpreadEvents").value =
        //   'SpreadEvent: ' + GC.Spread.Sheets.Events.EditStarting + ' event called' + '\n' +
        //   'row: ' + args.row + '\n' +
        //   'column: ' + args.col;

        this.row = args.row
        this.col = args.col
      });
      spread.bind(spreadNS.Events.EditEnded, (e, args) => {
        // _getElementById("showSpreadEvents").value =
        //   'SpreadEvent: ' + GC.Spread.Sheets.Events.EditEnded + ' event called' + '\n' +
        //   'row: ' + args.row + '\n' +
        //   'column: ' + args.col + '\n' +
        //   'text: ' + args.editingText;

        this.row = args.row
        this.col = args.col
      });
    }
  },
  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.spread-host {
  width: 100%;
  height: calc(100vh - 135px);
}
</style>
