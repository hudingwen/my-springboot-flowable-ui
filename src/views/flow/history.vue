<template>
  <div class="app-container">
    <el-row :gutter="20">
      <!--部门数据-->
      <!-- <el-col :span="4">
        <el-link>仪器分类列表</el-link>
        <div class="head-container">
          <el-tree :data="deptOptions" :props="defaultProps" :expand-on-click-node="false" ref="tree" default-expand-all
            highlight-current @node-click="getInstrumentList" />
        </div>
      </el-col> -->
      <!--搜索-->
      <el-col :span="24">
        <el-form :model="form" ref="queryForm" size="small" :inline="true" style="text-align: left;" label-width="68px">
          <el-form-item label="高级搜索" prop="userName">
            <el-input v-model="form.userName" placeholder="请输入搜索关键词" clearable style="width: 240px"
              @keyup.enter.native="getInstrumentList" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search" size="mini" @click="getInstrumentList">搜索</el-button>
          </el-form-item>
        </el-form>

        <el-row :gutter="10" class="mb8">
          <el-col :span="1.5">
            <!-- <el-button type="primary" plain icon="el-icon-plus" size="mini" @click="handleAdd">新增</el-button> -->
          </el-col>
        </el-row>
        <!-- 数据 -->
        <el-table v-loading="loading" :data="userList" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="50" align="center" />
          <el-table-column label="序号" type="index" width="50"></el-table-column>
          <el-table-column label="流程实例id" show-overflow-tooltip align="left" prop="id" />
          <el-table-column label="流程实例名称" show-overflow-tooltip align="left"  prop="name" />
          <el-table-column label="发起人" show-overflow-tooltip align="left" prop="startUserId" />
          <el-table-column label="发起时间" show-overflow-tooltip align="left" prop="startTime" />
          <el-table-column label="流程实例状态" show-overflow-tooltip align="left" key="curTask.name" prop="curTask.name" />

           
          
          <el-table-column label="流程定义名称" show-overflow-tooltip align="left" prop="processDefinitionName" />
          <!-- <el-table-column label="操作" align="center" width="160" class-name="small-padding fixed-width">
            <template slot-scope="scope">
              <el-dropdown size="mini">
                <span class="el-dropdown-link">
                  <el-link type="primary">更多</el-link>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="handleAuthRole" icon="el-icon-circle-check"
                    @click.native="editInstrument(scope.row)">编辑</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </template>
          </el-table-column> -->
        </el-table>
      </el-col>
    </el-row>

    <!-- 设备 -->
    <el-dialog :title="multipleSelection[0].name" :visible.sync="open" v-if="open" width="600px" append-to-body>
      <el-image style="width: 100%;" :src="'/api/test/imageByInstanceid?instanceid=' + multipleSelection[0].id"
        :preview-src-list="['/api/test/imageByProcessid?processid=' + multipleSelection[0].id]">
      </el-image>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="open = false" size="mini">关 闭</el-button>
      </div>
    </el-dialog>

     
  </div>
</template>

<script>

import request from '@/request'

export default {
  name: "UserNmae",
  //   dicts: ['sys_normal_disable', 'sys_user_sex'],
  dicts: [],

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
      openJD: false,
      openBY: false,
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
        capacity: "",
        sensitivity: "",
        processid: ''
      },
      formJD: {},
      formBY: {},
      defaultProps: {
        children: "children",
        label: "label"
      },
      multipleSelection: [],
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
        ],
      },
      tasks: []
    };
  },
  watch: {

  },
  created() {
    console.info(this.$route.query)
    this.form.processid = this.$route.query.processid
    this.getInstrumentList();
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    selectFile() {
      console.log(this.$refs.upload)
      this.$refs.upload.dispatchEvent(new MouseEvent('click'))
    },
    uploadFile(event) {
      var file = event.target.files;
      if (file.length != 1) {
        this.$message({ message: "请选择一个文件", type: 'warning' });
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
        showLoading: true,
        showMessage: true,
        data: formData,
        params: { id: 123 }
      }).then(res => {
        console.log(res)
        if (res.success) {
          let msg = JSON.parse(res.msg)
          console.log(msg.data[0])
          this.form.capacity = msg.data[0].fileid
          this.form.sensitivity = msg.data[0].filename
        }
      })
    },
    checkInstrument(item) {
      this.openJD = true
      this.formJD = {
        id: null,
        eqid: item.id,
        ver_date: '检定时间',
        ver_institute: '检定机构',
        ver_approved_by: '检定审核人',
        ver_checked_by: '检定检验员',
        ver_verified_by: '检定检定人',
        ver_conclusion: '检定结果',
        ver_note: '检定报告',
        ver_attachment: '检定附件',
        ver_certificate_num: '检定证书编号',
        ver_valid_until: ''
      }
    },
    submitCheckInstrument() {

    },
    protectInstrument(item) {
      this.openBY = true
      this.formBY = {
        id: null,
        eqid: item.id,

      }
    },
    submitprotectInstrument() {

    },
    editInstrument(item) {
      this.title = '编辑'
      this.form = JSON.parse(JSON.stringify(item))
      this.open = true
    },
    stopInstrument(item) {
      this.$confirm('确认要停用吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        request({
          url: '/api/test/stopInstrument',
          method: 'post',
          showLoading: true,
          showMessage: true,
          data: item
        }).then((res) => {
          console.log(res)
          if (res.success) {
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
        id: null,
        categoryid: "类编编号",
        eqcode: '设备编号',
        eqname: '设备名称',
        serialnumber: '序列号',
        brand: '品牌',
        model: '型号',
        manufacturer: '制造商',
        warranty: ''
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
              showLoading: true,
              showMessage: true,
              data: this.form
            }).then((res) => {
              console.log(res)
              if (res.success) {
                this.open = false
                this.getInstrumentList()
              }
            })
          } else {
            request({
              url: '/api/test/addInstrument',
              method: 'post',
              showLoading: true,
              showMessage: true,
              data: this.form
            }).then((res) => {
              console.log(res)
              if (res.success) {
                this.open = false
                this.getInstrumentList()
              }
            })
          }
        }
      });
    },
    handleAudit() {
      this.$confirm('你确定要提交?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        request({
          url: '/api/test/excute',
          method: 'get',
          showLoading: true,
          showMessage: true,
          params: { instanceid: this.multipleSelection[0].id },
          data: {}
        }).then((res) => {
          console.log(res)
          if (res.success) {
            this.open = false
            this.getInstrumentList()
          }
        })
      }).catch(() => {

      });
    },
    handleView() {
      this.open = true;
    },
    handleDelete() {
      this.$confirm('确认要删除选中数据?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        request({
          url: '/api/test/deleteInstance',
          method: 'get',
          showLoading: true,
          showMessage: true,
          params: { instanceid: this.multipleSelection[0].id },
          data: {}
        }).then((res) => {
          console.log(res)
          if (res.success) {
            this.open = false
            this.getInstrumentList()
          }
        })
      }).catch(() => {

      });
    },
    getInstrumentList() {
      this.loading = true;
      request({
        url: '/api/test/instanceAll',
        method: 'get',
        showLoading: true,
        showMessage: true,
        params: this.form,
        data: {}
      }).then((res) => {
        console.log(res)
        this.userList = res.data;
      }).finally(() => {
        this.loading = false;
      })
    },
    getTask(instanceid) {
      this.loading = true;
      request({
        url: '/api/test/task',
        method: 'get',
        showLoading: true,
        showMessage: true,
        params: { instanceid: instanceid },
        data: {}
      }).then((res) => {
        console.log(res)
        this.tasks = res.data
        this.open = true;
      }).finally(() => {
        this.loading = false;
      })
    },
    getInstrumentTypeTree() {
      request({
        url: '/api/test/getInstrumentTypeTree',
        method: 'get',
        showLoading: true,
        showMessage: true,
        params: null
      }).then((res) => {
        console.log(res)
        if (res.success) {
          this.deptOptions = res.data
        }
      })
    },
  }
};
</script>