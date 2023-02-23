<template>
  <div class="app-container">
    <el-row :gutter="20">
      <!--部门数据-->
      <!-- <el-col :span="4" >
        <el-link>仪器分类列表</el-link>
        <div class="head-container">
          <el-tree
            :data="deptOptions"
            :props="defaultProps"
            :expand-on-click-node="false"
            ref="tree"
            default-expand-all
            highlight-current
            @node-click="getInstrumentList"
          />
        </div>
      </el-col> -->
      <!--搜索-->
      <el-col :span="24" >
        <el-form :model="form" ref="queryForm" size="small" :inline="true" style="text-align: left;" label-width="68px">
          <el-form-item label="高级搜索" prop="userName">
            <el-input
              v-model="form.userName"
              placeholder="请输入搜索关键词"
              clearable
              style="width: 240px"
              @keyup.enter.native="getInstrumentList"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search" size="mini" @click="getInstrumentList">搜索</el-button> 
          </el-form-item>
        </el-form>

        <el-row :gutter="10" class="mb8">
          <el-col :span="1.5">
            <el-button
              type="primary"
              plain
              icon="el-icon-plus"
              size="mini"
              @click="handleAdd"
            >新增</el-button>
          </el-col>
          <el-col :span="1.5">
            <el-button
              type="danger"
              plain
              icon="el-icon-delete"
              size="mini"
              :disabled="multipleSelection.length != 1"
              @click="handleDelete"
            >删除</el-button>
          </el-col>
        </el-row>
        <!-- 数据 -->
        <el-table v-loading="loading" :data="userList" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="50" align="center" />
          <el-table-column label="序号" type="index" width="50"></el-table-column>
          <el-table-column label="设备编号" align="center" key="eqcode" prop="eqcode" />
          <el-table-column label="设备名称" align="center" key="eqname" prop="eqname" />
          <el-table-column label="序列号" align="center" key="serialnumber" prop="serialnumber" />
          <el-table-column label="品牌" align="center" key="brand" prop="brand" />
          <el-table-column label="型号" align="center" key="model" prop="model" />
          <el-table-column label="制造商" align="center" key="manufacturer" prop="manufacturer" />
          <el-table-column label="有效期" align="center" prop="warranty" width="100" show-overflow-tooltip/>
          <el-table-column
            label="操作"
            align="center"
            width="160"
            class-name="small-padding fixed-width"
          >
            <template slot-scope="scope" >
              <el-dropdown size="mini">
                <span class="el-dropdown-link">
                  <el-link type="primary">更多</el-link>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="handleAuthRole" icon="el-icon-circle-check" @click.native="editInstrument(scope.row)">编辑</el-dropdown-item>
                  <!-- <el-dropdown-item command="handleAuthRole" icon="el-icon-circle-check" @click.native="stopInstrument(scope.row)">停用</el-dropdown-item> -->
                  <!-- <el-dropdown-item command="handleResetPwd" icon="el-icon-circle-check" @click.native="checkInstrument(scope.row)">检定记录</el-dropdown-item>
                  <el-dropdown-item command="handleAuthRole" icon="el-icon-circle-check" @click.native="protectInstrument(scope.row)">保养记录</el-dropdown-item> -->
                </el-dropdown-menu>
              </el-dropdown>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>

    <!-- 设备 -->
    <el-dialog :title="title" :visible.sync="open" width="600px" append-to-body>
      <el-form ref="form" :model="form"  label-width="80px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="设备编号" prop="eqcode">
              <el-input v-model="form.eqcode" placeholder="请输入设备编号" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="设备名称" prop="eqname">
              <el-input v-model="form.eqname" placeholder="请输入设备名称" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
            
          <el-col :span="12">
            <el-form-item label="设备分类" prop="categoryid">
               <el-input v-model="form.categoryid" placeholder="请输入设备分类"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="序列号" prop="serialnumber">
              <el-input v-model="form.serialnumber" placeholder="请输入序列号"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="品牌" prop="brand">
              <el-input v-model="form.brand" placeholder="请输入品牌" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item  label="型号" prop="model">
              <el-input v-model="form.model" placeholder="请输入型号" />
            </el-form-item>
          </el-col>
        </el-row>
        
        <el-row>
          <el-col :span="12">
            <el-form-item label="制造商" prop="manufacturer">
              <el-input v-model="form.manufacturer" placeholder="请输入制造商" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item  label="有效期" prop="warranty">
              <el-date-picker style="width:100%" v-model="form.warranty" type="date" value-format=“yyyy-MM-dd” placeholder="请输入有效期"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="附件" prop="manufacturer">
                <el-button size="mini" type="primary" @click="selectFile">{{form.capacity == null?'点击上传':'重新上传'}}</el-button><label>{{form.fileName}}</label>
                <input v-show="false" type="file" ref="upload" @change="uploadFile($event)" >
                <el-link v-if="form.capacity != null" :href="'/api/test/download?fileid='+form.capacity" target="_blank">{{form.sensitivity}}</el-link>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm" size="mini">确 定</el-button>
        <el-button @click="open=false" size="mini">取 消</el-button>
      </div>
    </el-dialog>

    <!-- 设备检定 -->
    <el-dialog title="设备检定-添加" :visible.sync="openJD" width="750px" append-to-body>
        <el-form ref="formJD" :model="formJD"  label-width="100px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="检定时间" prop="ver_date">
               <el-date-picker style="width:100%" v-model="formJD.ver_date" type="date" placeholder="请输入检定时间"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="检定机构" prop="ver_institute">
              <el-input v-model="form.ver_institute" placeholder="请输入检定机构" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="检定审核人" prop="ver_approved_by">
              <el-input v-model="form.ver_approved_by" placeholder="请输入检定审核人"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="检定检验员" prop="ver_checked_by">
              <el-input v-model="form.ver_checked_by" placeholder="请输入检定检验员"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="检定检定人" prop="ver_verified_by">
              <el-input v-model="form.ver_verified_by" placeholder="请输入检定检定人" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item  label="检定结果" prop="ver_conclusion">
              <el-input v-model="form.ver_conclusion" placeholder="请输入检定结果" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="检定报告" prop="ver_note">
              <el-input v-model="form.ver_note" placeholder="请输入检定报告" />
            </el-form-item>
          </el-col>
           <el-col :span="12">
            <el-form-item label="检定附件" prop="ver_attachment">
              <el-input v-model="form.ver_attachment" placeholder="请输入检定附件" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="检定证书编号" prop="ver_certificate_num">
              <el-input v-model="form.ver_certificate_num" placeholder="请输入检定证书编号" />
            </el-form-item>
          </el-col>
           <el-col :span="12">
            <el-form-item label="有效期" prop="ver_valid_until">
              <el-date-picker style="width:100%" v-model="formJD.ver_valid_until" type="date" placeholder="请输入有效期"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitCheckInstrument" size="mini">确 定</el-button>
        <el-button @click="openJD = false" size="mini">取 消</el-button>
      </div>
    </el-dialog>

    <!-- 设备保养 -->
    <el-dialog title="设备保养-添加" :visible.sync="openBY" width="750px" append-to-body>
        <el-form ref="formJD" :model="formBY"  label-width="100px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="检定时间" prop="ver_date">
               <el-date-picker style="width:100%" v-model="formJD.ver_date" type="date" placeholder="请输入检定时间"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="检定机构" prop="ver_institute">
              <el-input v-model="form.ver_institute" placeholder="请输入检定机构" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="检定审核人" prop="ver_approved_by">
              <el-input v-model="form.ver_approved_by" placeholder="请输入检定审核人"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="检定检验员" prop="ver_checked_by">
              <el-input v-model="form.ver_checked_by" placeholder="请输入检定检验员"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="检定检定人" prop="ver_verified_by">
              <el-input v-model="form.ver_verified_by" placeholder="请输入检定检定人" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item  label="检定结果" prop="ver_conclusion">
              <el-input v-model="form.ver_conclusion" placeholder="请输入检定结果" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="检定报告" prop="ver_note">
              <el-input v-model="form.ver_note" placeholder="请输入检定报告" />
            </el-form-item>
          </el-col>
           <el-col :span="12">
            <el-form-item label="检定附件" prop="ver_attachment">
              <el-input v-model="form.ver_attachment" placeholder="请输入检定附件" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="检定证书编号" prop="ver_certificate_num">
              <el-input v-model="form.ver_certificate_num" placeholder="请输入检定证书编号" />
            </el-form-item>
          </el-col>
           <el-col :span="12">
            <el-form-item label="有效期" prop="ver_valid_until">
              <el-date-picker style="width:100%" v-model="formJD.ver_valid_until" type="date" placeholder="请输入有效期"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitprotectInstrument" size="mini">确 定</el-button>
        <el-button @click="openBY = false" size="mini">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

import request from '@/request'

export default {
  name: "UserNmae",
//   dicts: ['sys_normal_disable', 'sys_user_sex'],
  dicts:[],
   
  data() {
    return {
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 用户表格数据
      userList: null,
      // 弹出层标题
      title: "",
      // 部门树选项
      deptOptions: undefined,
      // 是否显示弹出层
      open: false,
      openJD:false,
      openBY:false,
      // 部门名称
      deptName: undefined,
      // 默认密码
      initPassword: undefined,
      // 日期范围
      dateRange: [],
      // 岗位选项
      postOptions: [],
      // 角色选项
      roleOptions: [],
      // 表单参数
      form: {
        capacity :":",
        sensitivity :""
      },
      formJD:{},
      formBY:{},
      defaultProps: {
        children: "children",
        label: "label"
      },
      multipleSelection:[],
      // 表单校验
      rules: {
        userName: [
          { required: true, message: "用户名称不能为空", trigger: "blur" },
          { min: 2, max: 20, message: '用户名称长度必须介于 2 和 20 之间', trigger: 'blur' }
        ],
        nickName: [
          { required: true, message: "用户昵称不能为空", trigger: "blur" }
        ],
        password: [
          { required: true, message: "用户密码不能为空", trigger: "blur" },
          { min: 5, max: 20, message: '用户密码长度必须介于 5 和 20 之间', trigger: 'blur' }
        ],
        email: [
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ],
        phonenumber: [
          {
            pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
            message: "请输入正确的手机号码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  watch: {
    
  },
  created() {
    // this.getInstrumentTypeTree();
    this.getInstrumentList();
  },
  methods: {
    handleSelectionChange(val) {
        this.multipleSelection = val;
    },
    selectFile(){
      console.log(this.$refs.upload)
      this.$refs.upload.dispatchEvent(new MouseEvent('click'))
    },
    uploadFile(event){
        var file = event.target.files;
        if(file.length != 1){ 
          this.$message({message: "请选择一个文件",type: 'warning'});
          return
        }
        console.log(event)
        console.log(file)
        // this.form.fileName = [0].name
        console.log(file[0])
        let formData = new FormData();
        formData.append("file", file[0]);
        return request({
          url: '/api/test/uploadfile.do',
          method: 'post',
          showLoading:true,
          showMessage:true,
          data: formData,
          params:{id:123}
        }).then(res=>{
          console.log(res)
          if(res.success){
            let msg = JSON.parse(res.msg)
            console.log(msg.data[0])
            this.form.capacity = msg.data[0].fileid
            this.form.sensitivity = msg.data[0].filename
          }
        })
    },
    checkInstrument(item){
        this.openJD = true
        this.formJD = {
            id:null,
            eqid:item.id,
            ver_date:'检定时间',
            ver_institute:'检定机构',
            ver_approved_by:'检定审核人',
            ver_checked_by:'检定检验员',
            ver_verified_by:'检定检定人',
            ver_conclusion:'检定结果',
            ver_note:'检定报告',
            ver_attachment:'检定附件',
            ver_certificate_num:'检定证书编号',
            ver_valid_until:''
        }
    },
    submitCheckInstrument(){

    },
    protectInstrument(item){
        this.openBY = true
        this.formBY = {
            id:null,
            eqid:item.id,
            
        }
    },
    submitprotectInstrument(){
        
    },
    editInstrument(item){
      this.title = '编辑'
      this.form = JSON.parse(JSON.stringify(item))
      this.open = true
    },
    stopInstrument(item){
        this.$confirm('确认要停用吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
           request({
                url: '/api/test/stopInstrument',
                method: 'post',
                showLoading:true,
                showMessage:true,
                data:item
            }).then((res)=>{
                console.log(res)
                if(res.success){
                    this.open = false
                    this.getInstrumentList()
                }
            })
        }).catch(() => {
                
        });
    },
    handleAdd() {
      this.title = '新增'
      this.form = {
            id:null,
            categoryid:"类编编号",
            eqcode:'设备编号',
            eqname:'设备名称',
            serialnumber:'序列号',
            brand:'品牌',
            model:'型号',
            manufacturer:'制造商',
            warranty:''
        }
      this.open = true
    },
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != undefined) {
            request({
                url: '/api/test/updateInstrument',
                method: 'post',
                showLoading:true,
                showMessage:true,
                data:this.form
            }).then((res)=>{
                console.log(res)
                if(res.success){
                    this.open = false
                    this.getInstrumentList()
                }
            })
          } else {
            request({
                url: '/api/test/addInstrument',
                method: 'post',
                showLoading:true,
                showMessage:true,
                data:this.form
            }).then((res)=>{
                console.log(res)
                if(res.success){
                    this.open = false
                    this.getInstrumentList()
                }
            })
          }
        }
      });
    },
    handleDelete() {
        this.$confirm('确认要删除选中数据?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            request({
                url: '/api/test/deleteInstrument',
                method: 'post',
                showLoading:true,
                showMessage:true,
                data:this.multipleSelection[0]
            }).then((res)=>{
                console.log(res)
                if(res.success){
                    this.open = false
                    this.getInstrumentList()
                }
            })
        }).catch(() => {
                
        });
    },
    getInstrumentList(){
         this.loading = true;
         request({
            url: '/api/test/getInstrumentList',
            method: 'post',
            showLoading:true,
            showMessage:true,
            params: null,
            data:{test:"test"}
        }).then((res)=>{
            console.log(res)
            if(res.success){
                this.userList = JSON.parse(res.data)
                console.info("this.userList",this.userList)
            }
        }).finally(()=>{
            this.loading = false;
        })
    },
    getInstrumentTypeTree(){
        request({
            url: '/api/test/getInstrumentTypeTree',
            method: 'get',
            showLoading:true,
            showMessage:true,
            params: null
        }).then((res)=>{
            console.log(res)
            if(res.success){
                this.deptOptions = res.data
            }
        })
    },
  }
};
</script>