<template>
  <el-col :span="19">
    <!--账户首页-->
    <div class="center_ad" v-show="currentShow=='main'">
      <div v-if="siteId == 1">
        <ul>
          <li>
            <span class="center_te">我的账户</span>:
            <span>{{account && account.loginName}}</span>
          </li>
          <li>
            <span class="center_te">账户等级</span>:
            <span>{{account && account.userRank  || "LV1"}}</span>
          </li>
          <li>
            <span class="center_te">当前积分</span>:
            <span>{{account && account.payPoints || "0"}}</span>
            <el-button type="primary" @click="showCurrent(1)" class="butt">查看积分</el-button>
          </li>
          <li>
            <span class="center_te">虚拟币</span>:
            <span>{{account && account.virtualCoin || "0" }}</span>
            <el-button type="primary" @click="showCurrent(2)" class="butt">查看虚拟币</el-button>
          </li>
        </ul>
        <hr>
        <div class="center_cl">
          <el-button type="primary" @click="showCurrent(3) ">管理收货地址</el-button>
          <el-button type="primary" @click="showCurrent(4)">修改个人信息</el-button>
        </div>

      </div>
      <!-- 文联 -->
      <div v-if="siteId == 2 || siteId == 4">
        <div class="wzdh_all">
          <div class="wdzh_zhuangtai">
            <div class="fl wdzh_zhuangtai_tx">
              <img v-bind:src="account.avatar || '../../assets/img/timg.jpg'"  alt="暂无头像"/>
              <p class="wdzh_zhuangtai_tx_zhmc pt10 pb15 fs12">账户名称：<span>{{account && account.loginName}}</span></p>
              <el-button type="primary" @click="showCurrent(4)">修改信息</el-button>
            </div>
            <div class="fr wdzh_zhuangtai_sj">
              <div class="wdzh_zhuangtai_sj_two"   v-if="account.userRank=='LV2'"></div>
              <div class="wdzh_zhuangtai_sj_three" v-else-if="account.userRank=='LV3'"></div>
              <div class="wdzh_zhuangtai_sj_four"  v-else-if="account.userRank=='LV4'"></div>
              <div class="wdzh_zhuangtai_sj_five"  v-else-if="account.userRank=='LV5'"></div>
              <div class="wdzh_zhuangtai_sj_one"   v-else></div>
              <div class="wdzh_zhuangtai_sj_ddsm f14 pt28">
                <span class="wdzh_zhuangtai_sj_ddsm_01 mr30">账户等级：<i><span>{{ account && account.userRank || "LV1"}}</span></i></span>
                <span class="wdzh_zhuangtai_sj_ddsm_02 mr30">账户积分：<span>{{account && account.payPoints|| "0"}}</span></span>
                <span class="wdzh_zhuangtai_sj_ddsm_03" v-if="siteId == 2">优惠券：<span>{{account && account.couponNum || "0"}}</span>张</span>
              </div>
            </div>
          </div>
        </div>
        <!--书籍评论列表 wenlian-->
        <div class="wdzh_dongtai_hyzy fl commentListsWrapper mgt20">
          <div class="wdzh_dongtai_name f16 color_fff pl15 el-button--primary"><span class="pl25">动态</span></div>
          <div class="wdzh_dongtai_all_hyzy commentListsWrapper">
            <!--分享图书-->
            <div class="wdzh_dongtai_fxts cl">
              <div class="wdzh_dongtai_fxts_name line-h25"><span class="el-button--text f16">评论图书列表</span></div>
              <ul class="wdzh_dongtai_fxts_list pt20">
                <li v-for="list in myComment">
                  <div><a href="javascript:void(0)" class="scoped_imgBox" @click="toBookDetail(list.pubId)"><img
                    class="scoped_img p_img"
                    v-bind:src="list.bigPic" onload="DrawImage(this,106,142)" alt="暂无图片"/></a></div>
                  <div class="jieshao">
                    <p class="title">
                      <a class="scoped_text" href="javascript:void(0)" @click="toBookDetail(list.pubId)"
                         v-text="list.resourceName" :title="list.resourceName"></a>
                    </p>
                    <p class="author authorL scoped_text" v-text="list.author" :title="list.author"></p>
                    <p class="commentScore">
                      <el-rate v-if="show_star" :value="list.starNum | toNum" :max="5" disabled
                               text-color="#c50000"></el-rate>
                      <span class="color_515">{{list.commentNums}}条评论</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <!--分享图书-->
          </div>
        </div>
      </div>
    </div>


    <!--查看积分-->
    <div v-show="currentShow=='pointRecords'">
      <el-table border :data="pointRecords.data" style="width: 100%">
        <el-table-column type="index" width="150" label="序号" align="center">
        </el-table-column>
        <el-table-column label="获取积分路径" prop="operName" align="center">
        </el-table-column>
        <el-table-column label="积分值" prop="ruleValue" align="center" sortable>
        </el-table-column>
        <el-table-column label="时间" prop="createTime" align="center" sortable>
        </el-table-column>
      </el-table>
      <ui_pagination :pageMessage="{totalCount: this.pointRecords.data && this.pointRecords.totalCount - 0 || 0}" :excuteFunction="pointRecordPaging" :page-sizes="[8,16,32,64]" style="margin-top: 40px;"></ui_pagination>


      <el-button type="primary" @click="showCurrent(0)" class="butt_back">返回</el-button>
    </div>

    <!--管理收获地址-->
    <div v-show="currentShow=='addressDetails'">
      <el-button type="primary" @click="addNewAddress()" style="margin:0px 0 20px 0;" id="ff">新增收货地址</el-button>
      <el-dialog title="新增收货地址" :visible.sync="addAddressDialog" class="newAddAddress tdialog">
        <div class="newWrapper">
          <div>收货人：</div>
          <input id="s_contactor" type="text" maxlength="40" v-model="newAddAddress.contactor" @blur="checkContactor()">
          <span class="warningInfo" v-if="emptyContactor">{{contactorError}}</span>
        </div>
        <div class="newWrapper">
          <div>收货地区：</div>
          <div class="selectPCC">
            <select id="s_province" name="s_province" @blur="checkArea()"></select>
            <select id="s_city" name="s_city" @blur="checkArea()"></select>
            <select id="s_county" name="s_county" @blur="checkArea()"></select>
          </div>
          <span class="warningInfo" v-if="emptyPCC">请完善省市信息</span>
        </div>
        <div class="newWrapper">
          <div>详细地址：</div>
          <input id="s_address" type="text" v-model="newAddAddress.address" @blur="checkDetail()">
          <span class="warningInfo" v-if="emptyDetail">请填写详细地址</span>
        </div>
        <div class="newWrapper">
          <div>联系电话：</div>
          <input id="s_phone" v-model="newAddAddress.phone" @blur="checkPhone()" maxlength="11">
          <span class="warningInfo" v-if="emptyPhone">{{phoneError}}</span>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="confirmNewAdd(false)">取 消</el-button>
          <el-button type="primary" @click="confirmNewAdd(true)">确 定</el-button>
        </div>
      </el-dialog>

      <el-table border :data="addresses" style="width: 100%" max-height="500">
        <el-table-column prop="contactor" label="收货人" width="140px">
        </el-table-column>
        <el-table-column label="收货地址" width="349px">
          <template slot-scope="scope">
            <span>{{ scope.row.city }}{{ scope.row.county }}{{ scope.row.address }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="phone" label="电话" width="130px">
        </el-table-column>
        <el-table-column label="操作" prop="action" width="250px">
          <template slot-scope="scope">
            <el-button @click="editClick(scope.$index, scope.row)" type="success" size="small">编辑</el-button>
            <el-button type="danger" :disabled="true" size="small" v-show="scope.row.isDefault === '1'">删除</el-button>
            <el-button @click="deleteAddress(scope.row.id)" type="danger" size="small"
                       v-show="scope.row.isDefault === '0'">删除
            </el-button>
            <el-button @click="setDefaultAddress(scope.row.id)" v-show="scope.row.isDefault === '0'" type="error"
                       size="small">设为默认
            </el-button>
            <el-button v-show="scope.row.isDefault === '1'" type="info" size="small">默认地址</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog title="修改收货地址" :visible.sync="updateAddressDialog" class="newAddAddress tdialog">
        <div class="addressContent">
          <div class="newWrapper">
            <div>收货人：</div>
            <input id="t_contactor" type="text" maxlength="40" v-model="address.contactor" @blur="checkContactor()">
            <span class="warningInfo" v-if="emptyContactor">请填写收货人</span>
          </div>

          <div>
            <div>
              <span>收货地区：</span>
              <span id="tt_city"></span>
              <span id="tt_erae"></span>
              <span id="tt_minerae"></span>
            </div>
            <el-form ref="form" :model="form">
              <el-form-item>
                <div>
                  <span> 更 改 为 ：</span>
                  <span id="t_city">{{form.city | myAddressCity}}</span>
                  <span id="t_erae">{{form.erae | myAddressErae}}</span>
                  <span id="t_minerae">{{form.minerae | myAddressMinerae}}</span>
                  <el-cascader
                    :options="CityInfo"
                    v-model="form.selectedOptions"
                    :change-on-select="true"
                    :clearable="true"
                    :filterable="true"
                    @change="handleChange">
                  </el-cascader>
                </div>
              </el-form-item>
            </el-form>
            <span class="warningInfo" v-if="emptyPCC">请完善省市信息</span>
          </div>
          <div class="newWrapper">
            <div>详细地址：</div>
            <input id="t_address" type="text" v-model="address.address" @blur="checkDetail()">
            <span class="warningInfo" v-if="emptyDetail">请填写详细地址</span>
          </div>
          <div class="newWrapper">
            <div>联系电话：</div>
            <input id="t_phone" type="number" v-model="address.phone" @blur="checkPhone()"
                   @keypress="checkNumberType($event)" maxlength="11">
            <span class="warningInfo" v-if="emptyPhone">请填写联系电话</span>
          </div>
        </div>

        <div slot="footer" class="dialog-footer">
          <el-button @click="confirmUpdateAddress(false)">取 消</el-button>
          <el-button type="primary" @click="confirmUpdateAddress(true)">确 定</el-button>
        </div>
      </el-dialog>
      <el-button type="primary" @click="showCurrent(0)" class="butt_back">返回</el-button>
    </div>
    <!--修改个人信息-->
    <div v-show="currentShow=='accountEdit'">

      <div class="main_right fl">
        <div class="wzdh_xgxx f14 color_6f6" style="padding:20px 120px 100px 220px">
          <div class="wzdh_xgxx_tx" v-if="siteId === 2 || siteId === 4 ">
            <!--头像上传-->
            <el-upload
              class="avatar-uploader"
              :action="uploadUrl()"
              name="headPicUrl"
              :show-file-list="false"
              :on-progress="avatarLoading"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <img v-else v-bind:src="account.avatar || '../../assets/img/timg.jpg'" alt="暂无头像"/>
            </el-upload>
          </div>
          <div class="mt15">
            <i class="wzdh_xgxx_bdmc mr08"></i>账户名称:
            <span v-text="account && account.loginName"></span>
            <el-button type="primary" @click="cryptoguar = true" class="butt" v-if="account.questions == ''">设置密保问题</el-button>
          </div>
          <div class="mt30 mb30">
            <div v-if="account && account.email">
            <i class="wzdh_xgxx_bdyx mr08"></i>绑定邮箱:
            <span v-text="account && account.email"></span>
            <el-button type="primary" @click="changeEmail" class="butt">修改邮箱</el-button>
          </div>
          <div v-if="account.email ==''">
            <i class="wzdh_xgxx_bdyx mr08"></i>绑定邮箱:
            <span>暂未绑定</span>
            <el-button type="primary" @click="changeEmail" class="butt" >绑定邮箱</el-button>
          </div>
          </div>

          <div class="mt30 mb30">
          <!-- <div v-if="account && account.mobileno">
            <i class="wzdh_xgxx_bdhm mr08"></i>手机号码:
            <span v-text="account && account.mobileno"></span>
            <el-button type="primary" class="butt" @click="modifyMobile">修改手机号</el-button>
          </div>

          <div v-if="account.mobileno ==''">
            <el-button type="primary" @click="setMobileDialog = true" class="butt">设置手机号</el-button>
          </div> -->
          </div>


          <div class="wzdh_xgxx_tj">
            <el-button type="primary" @click="modifyPass" class="f14">修改密码</el-button>
          </div>

        </div>
        <el-button type="primary" @click="showCurrent(0)" class="butt_back">返回</el-button>
          <!-- 设置密保问题弹窗 -->
          <el-dialog title="设置密保问题" :visible.sync="cryptoguar">
            <el-form ref="cryptoguarForm" :model="cryptoguarForm" :rules="cryptoguarRules" style="margin-top: 15px;">
              <el-form-item prop="answer">
                <el-input placeholder="请输入所选密保问题答案" v-model="cryptoguarForm.answer">
                  <el-select v-model="cryptoguarForm.questionId" slot="prepend" placeholder="请选择密保问题" style="width: 160px;">
                    <el-option label="您出生地是哪个城市？" value="1"></el-option>
                    <el-option label="您父亲的名字是？" value="2"></el-option>
                    <el-option label="您母亲的名字是？" value="3"></el-option>
                  </el-select>
                </el-input>
              </el-form-item>
            </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="cryptoguar = false">取 消</el-button>
            <el-button type="primary" @click="submitCryptoguarForm('cryptoguarForm')">确 定</el-button>
         </div>
        </el-dialog>
        <!-- 设置手机号弹窗-->
        <el-dialog title="绑定手机号" :visible.sync="setMobileDialog">
          <div style="margin:20px 0 0 200px">
            <el-form ref="setMobileDialogForm" :model="setMobileDialogForm" :rules="setMobileDialogRules" style="margin-top: 15px;">
              <el-form-item prop="number">
                <div class="bangding_con_1_sj mt30"><i class="sj_01 mr05"></i><span class="sj_02 f14 color_727 mr15">手机号:</span>
                <el-input type="text" v-model="setMobileDialogForm.number" placeholder="请输入手机号"  style="width:200px;height:35px;"></el-input>
                  <el-button @click="getCode(setMobileDialogForm.number)" class="yzm_04 color_7e7">发送验证码</el-button>
                </div>
              </el-form-item>
                <el-form-item prop="sendNum"><i class="yzm_01 mr05"></i><span class="yzm_02 f14 color_727 mr15">验证码:</span>
                  <el-input type="text" v-model="setMobileDialogForm.sendNum" placeholder="请输入手机验证码"  style="width:200px;height:35px;"></el-input>
          </el-form-item>
            </el-form>
          </div>
          <div slot="footer" class="dialog-footer">
            <el-button @click="setMobileDialog = false">取 消</el-button>
            <el-button type="primary" @click="submitSetMobileWindowForm('setMobileDialogForm')">确 定</el-button>
         </div>
        </el-dialog>

        <!-- 修改密码弹窗 -->
        <el-dialog title="修改密码" :visible.sync="dialogFormVisible">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item label="旧密码" prop="oldPass" :label-width="formLabelWidth">
              <el-input type="password" v-model="ruleForm.oldPass" auto-complete="off" placeholder="请选择旧密码"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="pass" :label-width="formLabelWidth">
              <el-input type="password" v-model="ruleForm.pass" auto-complete="off" placeholder="请选择新密码"></el-input>
            </el-form-item>
            <el-form-item label="重复新密码" prop="checkPass" :label-width="formLabelWidth">
              <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"
                        placeholder="请再次选择新密码"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            <el-button type="primary" @click="submitForm('ruleForm'),dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>
    </div>

    <!--验证身份-->
    <div v-show="currentShow=='Verification'" style="width:900px;">
        <el-tabs v-model="activeName"  >
          <el-tab-pane label="邮箱验证" name="first">
          <div class="main_right fl">
            <div class="wzdh_xgyx f14 color_6f6" >
              <div class="wzdh_xgyx_ico"></div>
              <div style="margin:20px 0 0 70px;">
                <div v-if="account.email ==''">
                <span style="display:inline-block;margin:20px;" >请先绑定邮箱</span>
                <el-button type="primary" @click="changeEmail">绑定邮箱</el-button>
                </div>
                <el-form :model="emailValidateNum" :rules="emailValidateNumRules" ref="emailValidateNum" v-if="account.email !=''">
                  <el-form-item label="绑定邮箱:" prop="email">
                  <span>{{account && account.email}}</span>
                  <el-button type="primary" @click="submitEmailValidateForm"  size="small" v-show="vcodeButt">发送验证码</el-button>
                </el-form-item>
                    <el-form-item label="邮箱验证码:" prop="emailnum"  v-if="butt">
                      <el-input type="text" v-model="emailValidateNum.emailnum" auto-complete="off"
                                placeholder="请输入邮箱验证码" style="display:inline-block;width:220px;"></el-input>
                      <span style="margin-left:10px;color:red">{{time}}</span>
                    </el-form-item>
                    <div  style="margin-left:100px;">
                        <el-button type="primary"  @click="submitEmailValidateNum('emailValidateNum')" v-if="butt">下一步</el-button>
                        <el-button  type="text" :disabled="true" class="button" v-show="!butt">验证码已失效，请重新验证</el-button>
                    </div>
                </el-form>
                </div>
            </div>
          </div>
          </el-tab-pane>
          <el-tab-pane label="手机号验证" name="second" v-if="account.mobileno !=''">
            <div class="main_right fl">
            <div class="wzdh_yzsjh f14 color_6f6">
              <div class="wzdh_yzsjh_ico"></div>
              <div style="margin:20px 0 0 70px;">
                <el-form :model="oldMobileValidateForm" :rules="oldMobileValidateFormRules" ref="oldMobileValidateForm">
                  <el-form-item label="绑定手机号:">
                    <span>{{account && account.mobileno}}</span>
                    <el-button type="primary" size="small" @click="getOldCode(account.mobileno)">发送验证码</el-button>
                    </el-form-item>
                    <el-form-item label="手机验证码:" prop="oldSendNum">
                    <el-input type="text" v-model="oldMobileValidateForm.oldSendNum" auto-complete="off" placeholder="请输入手机验证码" style="display:inline-block;width:220px;"></el-input>
                  </el-form-item>
                  <div style="margin-left:100px;">
                        <el-button type="primary"    @click="submitMobileValidateNum('oldMobileValidateForm')">下一步</el-button>
                  </div>
                </el-form>
              </div>
            </div>
          </div>
          </el-tab-pane>

          <el-tab-pane label="密保问题验证" name="third" v-if="account.questions !=''">
            <div class="main_right fl">
              <div class="wzdh_bmwtyz f14 color_6f6">
                <div class="wzdh_bmwtyz_ico"></div>
                <div style="margin:20px 0 0 70px;">
                <el-form :model="questionsValidateForm" :rules="questionsValidateRules" ref="questionsValidateForm">
                  <el-form-item label="密保问题:">
                    <div v-if="account.questions==1">您出生地是哪个城市？</div>
                    <div v-if="account.questions==2">您父亲的名字是？</div>
                    <div v-if="account.questions==3">您母亲的名字是？</div>
                    </el-form-item>
                    <el-form-item label="密保答案:" prop="answer">
                    <el-input type="text" v-model="questionsValidateForm.answer" auto-complete="off" placeholder="请输入密保问题答案" style="display:inline-block;width:200px;"></el-input>
                  </el-form-item>
                  <div style="margin-left:100px;" >
                    <el-button type="primary"  @click="submitQuestionsValidateNum('questionsValidateForm')">下一步</el-button>
                  </div>
                </el-form>
                </div>
              </div>
            </div>
          </el-tab-pane>

          </el-tabs>
      <el-button type="primary" @click="back" class="butt_back">返回</el-button>
    </div>
    <!-- 通过验证身份修改密码 -->
    <div v-show="currentShow=='modifyPassword'">
      <div class="main_right fl">
			<div class="wzdh_xgmm f14 color_6f6">
				<div class="wzdh_xgmm_ico"></div>
        <div style="margin:30px 0 0 30px;">
            <el-form :model="modifyPassword" :rules="modifyPasswordrules" ref="modifyPassword" >
                <el-form-item label="请设置新密码:" prop="pass">
                    <el-input type="password" v-model="modifyPassword.pass" auto-complete="off" placeholder="请设置新密码" style="display:inline-block;width:200px;"></el-input>
                </el-form-item>
                <el-form-item label="请确认新密码:" prop="checkPass">
                    <el-input type="password" v-model="modifyPassword.checkPass" auto-complete="off" placeholder="请确认新密码" style="display:inline-block;width:200px;"></el-input>
                </el-form-item>
                <div style="margin-left:140px;">
                    <el-button type="primary" @click="submitModifyPassword('modifyPassword')">提交</el-button>
                </div>
            </el-form>
          </div>
      </div>
		</div>
      <el-button type="primary" @click="back" class="butt_back">返回</el-button>
    </div>
    <!-- 通过验证身份修改手机号 -->
    <div v-show="currentShow=='modifyMobile'">
          <div class="main_right fl">
            <div class="wzdh_yzsjh f14 color_6f6">
              <div class="wzdh_yzsjh_ico"></div>
              <div style="margin:20px 0 0 50px;">

            <el-form ref="setMobileDialogForm" :model="setMobileDialogForm" :rules="setMobileDialogRules" style="margin-top: 15px;">
              <el-form-item prop="number">
                <div class="bangding_con_1_sj mt30"><i class="sj_01 mr05"></i><span class="sj_02 f14 color_727 mr15">新手机号:</span>
                <el-input type="text" v-model="setMobileDialogForm.number" placeholder="请输入手机号"  style="width:200px;height:35px;"></el-input>
                  <el-button @click="getCode(setMobileDialogForm.number)" class="yzm_04 color_7e7">发送验证码</el-button>
                </div>
              </el-form-item>
                <el-form-item prop="sendNum"><i class="yzm_01 mr05"></i><span class="yzm_02 f14 color_727 mr15" style="margin-right:30px;">验证码:</span>
                  <el-input type="text" v-model="setMobileDialogForm.sendNum" placeholder="请输入手机验证码"  style="width:200px;height:35px;"></el-input>
          </el-form-item>
            </el-form>
            <el-button type="primary" @click="submitChangeMobile('setMobileDialogForm')" style="margin-left:130px;">绑 定</el-button>

              </div>
            </div>
          </div>
      <el-button type="primary" @click="back" class="butt_back">返回</el-button>
    </div>
    <!--查看虚拟币-->
    <div v-show="currentShow=='virtualMoney'">
      <div class="num">
        <ul>
          <el-radio-group v-model="value">
            <li>
              <el-radio :label="5">5元 &nbsp&nbsp &nbsp &nbsp &nbsp &nbsp兑换500虚拟币</el-radio>
            </li>
            <li>
              <el-radio :label="10">10元 &nbsp &nbsp &nbsp &nbsp 兑换1000虚拟币</el-radio>
            </li>
            <li>
              <el-radio :label="20">20元 &nbsp &nbsp &nbsp &nbsp 兑换2000虚拟币</el-radio>
            </li>
            <li>
              <el-radio :label="50">50元 &nbsp &nbsp &nbsp &nbsp 兑换5000虚拟币</el-radio>
            </li>
            <li>
              <el-radio :label="100">100元 &nbsp &nbsp &nbsp 兑换10000虚拟币</el-radio>
            </li>
          </el-radio-group>
        </ul>
        <div class="butt">
          <el-button type="primary" size="large" @click="showCurrent(5)">确认充值</el-button>
        </div>
      </div>

      <div class="addressDetails">
        <el-table border :data="virtualMoneyList.data" style="width: 100%">
          <span v-text="virtualMoneyList"></span>
          <el-table-column type="index" width="150" label="序号" align="center">
          </el-table-column>
          <el-table-column label="类型" prop="flag" align="center" :formatter="typeFormat">
          </el-table-column>
          <el-table-column label="数值" prop="price" align="center" sortable>
          </el-table-column>
          <el-table-column label="时间" prop="chargeTime" align="center" sortable>
          </el-table-column>
        </el-table>
        <ui_pagination :pageMessage="{totalCount: this.virtualMoneyList.data && this.virtualMoneyList.totalCount - 0 || 0}" :page-sizes="[8,16,32,64]" :excuteFunction="virtualPaging"></ui_pagination>

      </div>
      <el-button type="primary" @click="showCurrent(0)" class="butt_back">返回</el-button>
    </div>
    <!--虚拟币充值-->
    <div v-show="currentShow=='virtualPay'">
      <div class="pay">
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple">&nbsp &nbsp &nbsp支付项目</div>
          </el-col>
        </el-row>
        <h3>&nbsp &nbsp &nbsp充值虚拟币 {{this.value}}0</h3>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple">&nbsp &nbsp &nbsp支付方式</div>
          </el-col>
        </el-row>
        <el-radio-group v-model="payWay" size="small" fill="#f6163c">
					<span v-for="(pay, index) in paymentList" @click="selectPayWay(pay, pay.id)">
						<el-radio :label="index">{{pay.payName}}</el-radio>
					</span>
        </el-radio-group>
        <div class="paybutt">
          <p>应付金额：{{this.value}}.00元</p>
          <el-button type="primary" class="butt_back" @click="RechargeVirtual">提交订单</el-button>
        </div>
      </div>
    </div>
  </el-col>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
Vue.use(Vuex);
Vue.prototype.$ajax = axios;

export default {
  name: "personalCenter_account",
  reused: true,
  props: ["namespace"],
  props: {
    detailUrl: {
      type: String
    },
    show_star: {
      type: Boolean,
      default: true
    }
  },
  data: function() {
    /*修改密码*/
    var validatePass1 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入旧密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入新密码"));
      } else if (value === this.ruleForm.oldPass) {
        callback(new Error("与原密码一致"));
      } else if (value.length <= 5) {
        callback(new Error("密码至少为6位数"));
      } else if (value.length >= 16) {
        callback(new Error("密码最多为16位数"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass3 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入新密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var validateAnswer = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请设置密保问题答案"));
      } else if (this.cryptoguarForm.questionId == "") {
        callback(new Error("请选择密保问题"));
      } else {
        this.cryptoguar = false;
        callback();
      }
    };
    var validateEmailnum = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱验证码"));
      } else if (value != this.findNum) {
        callback(new Error("验证码错误"));
      } else {
        callback();
      }
    };
    var questionsValidateForm = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密保问题答案"));
      } else {
        callback();
      }
    };
    var mobileValidateForm = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机验证码"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      var i;
      var char;
      var badword;
      badword = ';|<>`&!*(~^)#?:"/$=\\' + "'";
      for (i = 0; i < value.length; i++) {
        char = value.charAt(i);
      }
      if (badword.indexOf(char) >= 0) {
        callback(new Error('格式错误，密码仅支持汉字、字母、数字、"-"、"_"的组合'));
      } else if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length <= 5) {
        callback(new Error("密码至少为6位数"));
      } else if (value.length >= 17) {
        callback(new Error("密码最多为16位数"));
      } else {
        callback();
      }
    };
    var validateCheckPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.modifyPassword.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var validateSetMobile = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else if (value != value.match(/^[1][3,4,5,6,7,8,9][0-9]{9}$/)) {
        callback(new Error("请输入正确的手机号"));
      } else {
        callback();
      }
    };
    var validateSendNum = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机验证码"));
      } else if (value != this.cbsendNum) {
        callback(new Error("验证码错误"));
      } else {
        callback();
      }
    };
    var validateOldSendNum = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机验证码"));
      } else if (value != this.cbOldSendNum) {
        console.log("校验" + this.cbOldSendNum);
        console.log("输入" + value);
        callback(new Error("验证码错误"));
      } else {
        console.log("校验" + this.cbOldSendNum);
        console.log("输入" + value);
        callback();
      }
    };
    return {
      title: [
        "main",
        "pointRecords",
        "virtualMoney",
        "addressDetails",
        "accountEdit",
        "virtualPay",
        "Verification",
        "modifyPassword",
        "modifyMobile"
      ],
      // 计时器
      time: "",
      // 验证码发送状态
      vcodeType: 0,
      vcodeButt: true,
      // 修改类型 1密码 2手机
      modifyType: "",
      butt: true,
      /*修改密码*/
      dialogFormVisible: false,
      // 修改密保问题弹窗状态
      cryptoguar: false,
      // 修改密保问题弹窗状态
      setMobileDialog: false,

      activeName: "first",
      formLabelWidth: "120px",
      // 修改密码表单
      ruleForm: {
        oldPass: "",
        pass: "",
        checkPass: ""
      },
      emailValidateNum: {
        emailnum: ""
      },
      //验证身份--手机验证码验证
      mobileValidateForm: {
        mobilenum: ""
      },
      //验证身份--密保问题验证
      questionsValidateForm: {
        answer: ""
      },
      // 验证身份--设置密保问题
      cryptoguarForm: {
        questionId: "",
        answer: ""
      },
      // 验证身份--设置手机号
      setMobileDialogForm: {
        number: "",
        sendNum: ""
      },
      // 验证身份--修改密码
      modifyPassword: {
        pass: "",
        checkPass: ""
      },
      //验证身份--旧手机号验证码
      oldMobileValidateForm: {
        oldSendNum: ""
      },
      loading: "", //头像上传loading
      rules: {
        oldPass: [{ validator: validatePass1, trigger: "blur" }],
        pass: [{ validator: validatePass2, trigger: "blur" }],
        checkPass: [{ validator: validatePass3, trigger: "blur" }]
      },
      // 密保问题答案
      cryptoguarRules: {
        answer: [{ validator: validateAnswer, trigger: "blur" }]
      },
      // 设置手机号校验
      setMobileDialogRules: {
        number: [{ validator: validateSetMobile, trigger: "blur" }],
        sendNum: [{ validator: validateSendNum, trigger: "blur" }]
      },
      //身份验证--邮箱校验
      emailValidateNumRules: {
        emailnum: [{ validator: validateEmailnum, trigger: "blur" }]
      },
      //身份验证--手机验证码验证
      mobileValidateRules: {
        mobilenum: [{ validator: mobileValidateForm, trigger: "blur" }]
      },
      //身份验证--密保问题验证
      questionsValidateRules: {
        answer: [{ validator: questionsValidateForm, trigger: "blur" }]
      },
      // 身份验证--修改密码
      modifyPasswordrules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validateCheckPass, trigger: "blur" }]
      },
      //身份验证--旧手机号验证
      oldMobileValidateFormRules: {
        oldSendNum: [{ validator: validateOldSendNum, trigger: "blur" }]
      },
      currentShow: "main",
      cryptoguardAnswer: "",
      select: "",
      value: 5,
      addAddressDialog: false, // 新增地址模态弹框
      completeAddress: "这是一条完整的地址",
      /*数据源*/
      CityInfo: CityInfo,
      form: {
        city: "",
        erae: "",
        minerae: "",
        selectedOptions: [] //地区筛选数组
      },
      newAddAddress: {
        // 最新地址信息
        /*loginName: "",*/
        contactor: "",
        phone: "",
        province: "",
        city: "",
        county: "",
        address: "",
        post: "",
        createTime: null,
        updateTime: null,
        id: 0,
        isDefault: "0"
      },
      emptyContactor: false,
      emptyDetail: false,
      emptyPhone: false,
      emptyPCC: false,
      address: "",
      updateAddressDialog: false,
      modalState: true,
      payWay: 0,
      payMethod: "1", // 支付方式 0 微信支付 1 支付宝支付
      siteId: "",
      imageUrl: "",
      fullLoading: "", //全屏加载框
      phoneError: '',//新建收货地址--联系电话验证信息
      contactorError: '',//新建收货地址--收货人验证信息
      goodsInfo: []//新建收货地址--验证信息
    };
  },
  mounted() {
    this.siteId = SITE_CONFIG.siteId;
    this.$store.dispatch("personalCenter/queryUser", {
      loadedCallBack: this.loadedCallBack
    });
  },
  computed: {
    ...mapGetters("personalCenter/", {
      account: "getAccount",
      pointRecords: "getPointRecord",
      virtualMoneyList: "getVirtualMoney",
      addresses: "getAddresses",
      paymentList: "getPaymentList",
      myComment: "getMyComment"
    })
  },
  filters: {
    toNum: function(value) {
      return parseFloat(value);
    },
    //  手机号中间隐藏
    toTel: function(str) {
      if (str) {
        return str.slice(0, 3) + "******" + str.slice(-4);
      }
    },
    //时间格式化
    dateFormat: function(row, column) {
      var date = row[column.property];
      if (date == undefined) {
        return "";
      }
      return moment(date).format("YYYY-MM-DD HH:mm:ss");
    },
    //类型格式化
    typeFormat: function(row, column) {
      var date = row[column.property];
      if (date == 0) {
        return "充值";
      } else {
        return "消费";
      }
    },
    myAddressCity: function(value) {
      for (var y = 0; y < CityInfo.length; y++) {
        if (CityInfo[y].value == value) {
          return CityInfo[y].label;
        }
      }
    },
    myAddressErae: function(value) {
      for (var y = 0; y < CityInfo.length; y++) {
        for (var z = 0; z < CityInfo[y].children.length; z++) {
          if (CityInfo[y].children[z].value == value && value != undefined) {
            return CityInfo[y].children[z].label;
          }
        }
      }
    },
    myAddressMinerae: function(value) {
      for (var y = 0; y < CityInfo.length; y++) {
        for (var z = 0; z < CityInfo[y].children.length; z++) {
          for (var i = 0; i < CityInfo[y].children[z].children.length; i++) {
            if (
              CityInfo[y].children[z].children[i].value == value &&
              value != undefined
            ) {
              return CityInfo[y].children[z].children[i].label;
            }
          }
        }
      }
    }
  },
  methods: {
    /*帐号信息加载完毕回调*/
    loadedCallBack() {
      this.$store.dispatch("personalCenter/queryPointRecord", {});
      this.$store.dispatch("personalCenter/queryVirtualMoney", {});
      this.$store.dispatch("personalCenter/queryAddress", {});
      this.$store.dispatch("personalCenter/queryPaymentList", {});
      this.$store.dispatch("personalCenter/getMyComment", {});
    },
    /*积分分页*/
    pointRecordPaging({ pageNo, pageSize }) {
      var param = {
        loginName: "",
        pageIndex: pageNo,
        pageSize: pageSize
      };
      this.$store.dispatch("personalCenter/queryPointRecord", param);
    },
    typeFormat: function(row, column) {
      var date = row[column.property];
      if (date == 0) {
        return "充值";
      } else {
        return "消费";
      }
    },
    /*显示状态*/
    showCurrent(index) {
      this.currentShow = this.title[index];
    },
    /*虚拟币分页*/
    virtualPaging({ pagesNo, pageSize }) {
      var param = {
        loginName: "",
        pageIndex: pagesNo,
        pageSize: pageSize
      };
      this.$store.dispatch("personalCenter/queryVirtualMoney", param);
    },
    /*修改地址*/
    handleChange(value) {
      this.form.city = this.form.selectedOptions[0];
      this.form.erae = this.form.selectedOptions[1];
      this.form.minerae = this.form.selectedOptions[2];
    },
    /*地址管理模块*/
    editClick(index, row) {
      var _this = this;
      this.updateAddressDialog = true;
      initDom();

      function initDom() {
        setTimeout(function() {
          if ($(document.getElementById("t_contactor")).length > 0) {
            //解决弹框出来的时候DOM可能还没有加载完成问题
            _this.address = JSON.parse(JSON.stringify(_this.addresses[index]));
            console.log(_this.address);

            (_this.form.city = _this.address.province),
              (_this.form.erae = _this.address.city),
              (_this.form.minerae = _this.address.county),
              (_this.form.selectedOptions = []), //地区筛选数组
              $("#tt_city").html(_this.address.province);
            $("#tt_erae").html(_this.address.city);
            $("#tt_minerae").html(_this.address.county);
            if (_this.modalState) {
              // _init_area(document);
              _this.modalState = false; // 初始化第二遍会出错
            }
          } else {
            initDom();
          }
        }, 150);
      }
    },
    /*编辑收货地址*/
    confirmUpdateAddress: function(flag) {
      // 点击确定/取消添加地址按钮
      var _this = this;
      let isAllNull =
        $("#t_city").html() === "" &&
        $("#t_minerae").html() === "" &&
        $("#t_erae").html() === "";
      if (flag) {
        // 点击确定
        if ($("#t_contactor").val() === "") {
          // 收件人为空
          this.emptyContactor = true;
          return false;
        } else if ($("#t_address").val() === "") {
          // 详细地址为空
          this.emptyDetail = true;
          this.emptyPCC = false;
          return false;
        } else if ($("#t_phone").val() === "") {
          // 联系方式为空
          this.emptyPhone = true;
          this.emptyPCC = false;
          return false;
        } else if ($("#t_city").html() && !$("#t_minerae").html()) {
          this.emptyPCC = true;
          return false;
        } else if (
          $("#t_city").html() &&
          $("#t_minerae").html() &&
          !$("#t_erae").html()
        ) {
          this.emptyPCC = true;
          return false;
        } else {
          // 都不为空
          this.emptyPCC = false;
          var param = {
            loginName: this.account.loginName,
            contactor: $("#t_contactor").val(),
            phone: $("#t_phone").val(),
            province: isAllNull ? $("#tt_city").html() : $("#t_city").html(),
            city: isAllNull ? $("#tt_erae").html() : $("#t_erae").html(),
            county: isAllNull
              ? $("#tt_minerae").html()
              : $("#t_minerae").html(),
            address: $("#t_address").val(),
            post: this.newAddAddress.post,
            createTime: this.newAddAddress.createTime,
            updateTime: this.newAddAddress.updateTime,
            id: this.address.id,
            isDefault: this.newAddAddress.isDefault,
            cb: this.updateAddressCallback
          };
          this.$store.dispatch("personalCenter/updateAddress", param);
          this.updateAddressDialog = false;
        }
      } else {
        // 点击取消 关闭弹窗
        this.updateAddressDialog = false;
      }
    },

    updateAddressCallback: function(updateStatus) {
      if (updateStatus == 1) {
        this.$message({
          type: "success",
          message: "修改地址成功!"
        });
        this.$store.dispatch("personalCenter/queryAddress", {});
      } else {
        this.$message({
          type: "error",
          message: "修改地址失败!"
        });
      }
    },
    /*删除收货地址*/
    deleteAddress: function(id) {
      var _this = this;
      this.$confirm("您确定要删除该收货地址吗?", "系统提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(function() {
        var param = {
          ids: id,
          cb: _this.deleteAddresscb
        };
        _this.$store.dispatch("personalCenter/deleteAddress", param);
      });
    },
    deleteAddresscb: function(deleteStatus) {
      if (deleteStatus == 1) {
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.$store.dispatch("personalCenter/queryAddress", {});
      } else {
        this.$message({
          type: "error",
          message: "删除失败!"
        });
      }
    },
    /*新增收获地址*/
    confirmNewAdd: function(flag) {
      // 点击确定/取消添加地址按钮
      var _this = this;
      if (flag) {
        this.goodsInfo = [];
        this.checkContactor();
        this.checkPhone();
        this.checkDetail();
        this.checkArea();
        if (this.goodsInfo.find(function (item) {
            return item == "false";
          }) === undefined) {
          // 都不为空
          this.emptyPCC = false;
          var param = {
            loginName: this.account.loginName,
            contactor: $("#s_contactor").val(),
            phone: $("#s_phone").val(),
            province: $("#s_province").val(),
            city: $("#s_city").val(),
            county: $("#s_county").val(),
            address: $("#s_address").val(),
            post: this.newAddAddress.post,
            createTime: this.newAddAddress.createTime,
            updateTime: this.newAddAddress.updateTime,
            id: this.newAddAddress.id,
            isDefault: this.newAddAddress.isDefault,
            cb: this.addAddressCallback
          };
          this.$store.dispatch("personalCenter/addAddress", param);
          this.addAddressDialog = false;
          // this.$refs[form].resetFields();
        }
      }else{
        this.addAddressDialog = false;
      }
      this.newAddAddress.contactor = ""; // 点击取消的时候初始化数据
      this.newAddAddress.phone = "";
      this.newAddAddress.province = "";
      this.newAddAddress.city = "";
      this.newAddAddress.county = "";
      this.newAddAddress.address = "";
    },
    addAddressCallback(addStatus) {
      if (addStatus == 1) {
        this.$store.dispatch("personalCenter/queryAddress", {});
        this.$message({
          type: "success",
          message: "新增地址成功!"
        });
      } else {
        this.$message({
          type: "error",
          message: "新增地址失败!"
        });
      }
    },
    checkContactor: function() {
      // 联系人失去焦点校验
      // this.emptyContactor = $("#s_contactor").val() === "" ? true : false;
      // 联系人失去焦点校验
      let contactorVal = $("#s_contactor").val();
      this.emptyContactor = false;
      if (contactorVal === "") {
        this.contactorError = "请填写收货人";
      }
      if (contactorVal.length > 40) {
        this.contactorError = "收货人不能超过40个字符";
      }
      if (contactorVal === "" || contactorVal.length > 40) {
        this.emptyContactor = true;
        this.goodsInfo.push("false");
      } else {
        this.goodsInfo.push("true");
      }
    },
    checkDetail: function() {
      // 详细地址失去焦点校验
      // this.emptyDetail = $("#s_address").val() === "" ? true : false;
      // 详细地址失去焦点校验
      this.emptyDetail = false;
      if ($("#s_address").val() === "") {
        this.emptyDetail = true;
        this.goodsInfo.push("false");
      } else {
        this.goodsInfo.push("true");
      }
    },
    checkPhone: function() {
      // 联系方式失去焦点校验
      // this.emptyPhone = $("#s_phone").val() === "" ? true : false;
      // 联系号码格式校验 只能是数字 并且不能超过11位 ??? input type="number" 踩坑
      this.emptyPhone = false;
      let phoneVal = $("#s_phone").val();
      if (!phoneVal) {
        this.phoneError = "请填写联系电话";
      }
      // if (!String.fromCharCode(event.keyCode).match(/\d/)) {
      if (!phoneVal.match(/^[0-9]*$/)) {
        // 控制只能输入数字
        this.phoneError = "请输入数字";
      }
      if (phoneVal.length > 11) {
        this.phoneError = "电话长度过长";
      }
      if (!phoneVal || !phoneVal.match(/^[0-9]*$/) || phoneVal.length > 11) {
        this.emptyPhone = true;
        this.goodsInfo.push("false");
      } else {
        this.goodsInfo.push("true");
      }
    },
    checkNumberType: function(event) {
      // 联系号码不得超过11位
      if (!String.fromCharCode(event.keyCode).match(/\d/)) {
        event.preventDefault();
      }
      if ($("#s_phone").val().length > 11) {
        event.preventDefault();
      }
    },
    checkArea:function(){
      this.emptyPCC = false;
      if (
        $("#s_province").val() === "省份" ||
        $("#s_city").val() === "地级市" ||
        $("#s_county").val() === "市、县级市"
      ) {
        // 省市区没有选择或者没有选择完全
        this.emptyPCC = true;
        this.goodsInfo.push("false");
      } else {
        this.goodsInfo.push("true");
      }
    },
    addNewAddress: function() {
      this.addAddressDialog = true;
      initDom();
      function initDom() {
        setTimeout(function() {
          if (document.getElementById("s_province")) {
            //解决弹框出来的时候DOM可能还没有加载完成问题
            _init_area(document);
          } else {
            initDom();
          }
        }, 50);
      }
    },
    /*设置默认地址*/
    setDefaultAddress: function(id) {
      var params = {
        id: id,
        cb: this.setDefaultCallback
      };
      this.$store.dispatch("personalCenter/defaultAddress", params);
    },
    setDefaultCallback(setStatus) {
      if (setStatus == 1) {
        this.$message({
          type: "success",
          message: "设置默认地址成功!"
        });
        this.$store.dispatch("personalCenter/queryAddress", {});
      } else {
        this.$message({
          type: "error",
          message: "设置默认地址失败!"
        });
      }
    },
    /*修改邮箱*/
    changeEmail() {
      this.$prompt("请输入邮箱", "修改邮箱", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: "邮箱格式不正确"
      }).then(({ value }) => {
        var param = {
          value: value,
          cb: this.changeEmailCallb
        };
        this.fullLoading = this.$loading({
          fullscreen: true,
          text: "验证码发送中..."
        });
        this.$store.dispatch("personalCenter/updateEmail", param);
      });
    },
    changeEmailCallb(idata, rep) {
      this.fullLoading.close();
      if (idata == 1) {
        this.$message({
          type: "success",
          message: "已发送至您的邮箱，请点击链接绑定邮箱"
        });
      } else {
        this.$message({
          type: "error",
          message: "邮箱绑定失败：" + rep.data.error.errorMsg
        });
      }
    },
    /*设置密保问题*/
    submitCryptoguarForm(cryptoguarForm) {
      this.$refs.cryptoguarForm.validate(valid => {
        if (valid) {
          var params = {
            cb: this.submitCryptoguarCallb,
            pswId: this.cryptoguarForm.questionId,
            answer: this.cryptoguarForm.answer
          };
          this.$store.dispatch("personalCenter/setPswQuestion", params);
        } else {
          return false;
        }
      });
    },
    submitCryptoguarCallb(idata, rep) {
      if (idata == 1) {
        this.$store.dispatch("personalCenter/queryUser");
        this.$message({
          type: "success",
          message: "密保问题设置成功"
        });
      } else {
        this.$message({
          type: "info",
          message: "密保问题设置失败" + rep.data.error.errorMsg
        });
      }
    },

    /*个人中心更改手机号*/
    submitChangeMobile(setMobileDialogForm) {
      this.$refs.setMobileDialogForm.validate(valid => {
        if (valid) {
          var params = {
            loginName: this.account.loginName,
            mobileNum: this.setMobileDialogForm.number,
            cb: this.changeMobileCallback
          };
          this.$store.dispatch("personalCenter/changeBindMobile", params);
        } else {
          return false;
        }
      });
    },
    changeMobileCallback(sendStatus, rep) {
      if (sendStatus) {
        this.$message({
          type: "error",
          message: rep.data.data.msg
        });
        this.$refs.setMobileDialogForm.resetFields();
      } else {
        this.$store.dispatch("personalCenter/queryUser");
        this.$message({
          type: "success",
          message: rep.data.data.msg
        });
        window.setTimeout(function() {
          window.location.reload();
        }, 1000);
      }
    },

    /*个人中心设置手机号*/
    submitSetMobileWindowForm(setMobileDialogForm) {
      this.$refs.setMobileDialogForm.validate(valid => {
        if (valid) {
          var params = {
            loginName: this.account.loginName,
            mobileNum: this.setMobileDialogForm.number,
            cb: this.setMobileCallback
          };
          this.$store.dispatch("personalCenter/bindMobile", params);
        } else {
          return false;
        }
      });
    },
    setMobileCallback(sendStatus, rep) {
      if (sendStatus) {
        this.setMobileDialog = false;
        this.$refs.setMobileDialogForm.resetFields();
        this.$message({
          type: "error",
          message: rep.data.data.msg
        });
      } else {
        this.$store.dispatch("personalCenter/queryUser");
        this.setMobileDialog = false;
        this.$message({
          type: "success",
          message: rep.data.data.msg
        });
      }
    },

    // 设置手机号获取验证码
    getCode(number) {
      if (number === "") {
        this.$message({
          type: "error",
          message: "请输入手机号"
        });
      } else if (number != number.match(/^[1][3,4,5,6,7,8,9][0-9]{9}$/)) {
      } else {
        this.$message({
          type: "success",
          message: "手机验证码已发送，请注意查收"
        });
        var params = {
          mobileNum: number,
          cb: this.MobileCallback
        };
        this.$store.dispatch("personalCenter/sendToMobile", params);
      }
    },
    MobileCallback(sendStatus, sendNum) {
      if (sendStatus == 1) {
        this.cbsendNum = sendNum;
        this.$message({
          type: "success",
          message: "手机验证码已发送，请注意查收"
        });
      } else {
        this.$message({
          type: "info",
          message: rep.data.error.errorMsg
        });
      }
    },
    // 旧手机获取验证码
    getOldCode(number) {
      var params = {
        mobileNum: number,
        cb: this.oldMobileCallback
      };
      this.$store.dispatch("personalCenter/sendToMobile", params);
    },
    oldMobileCallback(sendStatus, oldSendNum) {
      if (sendStatus == 1) {
        this.cbOldSendNum = oldSendNum;
      }
    },
    // 验证身份--手机号验证通过
    submitMobileValidateNum(oldMobileValidateForm) {
      this.$refs.oldMobileValidateForm.validate(valid => {
        if (valid) {
          if (this.modifyType == 1) {
            this.showCurrent(7);
          } else {
            this.showCurrent(8);
          }
        } else {
          return false;
        }
      });
    },
    /*修改密码*/
    submitForm(ruleForm) {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          var param = {
            cb: this.changePasswordCallb,
            oldPass: this.ruleForm.oldPass,
            checkPass: this.ruleForm.checkPass
          };
          this.$store.dispatch("personalCenter/updatePassWord", param);
        } else {
          return false;
        }
      });
    },
    changePasswordCallb(idata, rep) {
      if (idata == 1) {
        this.$message({
          type: "success",
          message: "密码修改成功"
        });
      } else {
        this.$message({
          type: "info",
          message: "密码修改失败：" + rep.data.error.errorMsg
        });
      }
    },
    /*密码输入框重置*/
    resetForm(formName) {
      this.$nextTick(function() {
        this.$refs[formName].resetFields();
      });
    },
    /*虚拟币充值*/
    selectPayWay: function(item, id) {
      console.log(item);
      this.payWay = id;
      this.payMethod = item.id;
    },
    RechargeVirtual() {
      var _this = this;
      this.$confirm("点击确认支付", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          var param = {
            paynum: this.value
          };
          console.log(_this.payMethod);

          if (_this.payMethod === "1") {
            // 支付宝支付
            window.open(
              BASE_URL +
                "epay/getVirtualCoinPayForm.do?price=" +
                this.value +
                "&loginName=" +
                this.account.loginName +
                "&payMethodId=" +
               _this.payMethod +
                "&siteId=" +
                this.siteId,
              "_self"
            );
            window.history.pushState(null, null, "./errorpage.html"); // 添加历史记录
          } else if (_this.payMethod === "0") {
            // 微信支付
            axios
              .get(
               BASE_URL +
                  "epay/getVirtualCoinPayForm.do?price=" +
                  this.value +
                  "&loginName=" +
                  this.account.loginName +
                  "&payMethodId=" +
                  _this.payMethod +
                  "&siteId=" +
                  this.siteId
              )
              .then(function(response) {
                var data = response.data.substring(
                  response.data.indexOf("<a>") + 3,
                  response.data.indexOf("</a>")
                );
                var orderCode = response.data.substring(
                  response.data.indexOf("<div>") + 5,
                  response.data.indexOf("</div>")
                );
                window.location.href =
                  "./qrcode.html?data=" +
                  data +
                  "&orderCode=" +
                  orderCode;
              });
          }
        })
        .catch(err => {
          console.log(err);
          this.$message({
            type: "info",
            message: "已取消支付"
          });
        });
    },
    // 头像上传
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      if (res.result == 1) {
        this.loading.close();
        this.$message({
          type: "success",
          message: "头像更改成功"
        });
      } else {
        this.$message({
          type: "info",
          message: "头像更改失败，请重试"
        });
      }
    },
    avatarLoading() {
      this.loading = this.$loading({
        lock: true,
        text: "正在上传...",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
        target: document.querySelector(".div1")
      });
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    uploadUrl: function() {
      return (
        BASE_URL + "/user/uploadHeadPic.do?loginName=" + this.account.loginName
      );
    },
    //详情页
    toBookDetail(pubId) {
      let toBookDetailUrl = locationUtils.addParams(
        { pubId: pubId },
        this.detailUrl
      );
      window.location.href = toBookDetailUrl;
    },
    // 身份验证--邮箱验证获取验证码
    submitEmailValidateForm() {
      this.vcodeButt = false;
      if (this.vcodeType == 1) {
        this.butt = true;
      }
      var params = {
        email: this.account.email,
        cb: this.emailValidateCallb
      };
      this.fullLoading = this.$loading({ fullscreen: true, text: "验证码发送中..." });
      this.$store.dispatch("personalCenter/findPassword", params);
    },
    emailValidateCallb(findStatus, findNum, rep) {
      this.fullLoading.close();
      this.findNum = findNum;
      if (findStatus == 1) {
        this.$message({
          type: "success",
          message: "已发送验证码至您邮箱,请在2分钟内输入验证"
        });
        this.times();
      } else {
        this.$message({
          type: "info",
          message: rep.data.error.errorMsg
        });
      }
    },
    // 验证身份--邮箱验证通过
    submitEmailValidateNum(emailValidateNum) {
      this.$refs.emailValidateNum.validate(valid => {
        if (valid) {
          if (this.modifyType == 1) {
            this.showCurrent(7);
          } else {
            this.showCurrent(8);
          }
        } else {
          return false;
        }
      });
    },
    modifyPass() {
      this.showCurrent(6);
      this.modifyType = 1;
    },
    modifyMobile() {
      this.showCurrent(6);
      this.modifyType = 2;
    },
    // 邮箱验证码倒计时
    times() {
      var self = this;
      var countTime = 120;
      var t = setInterval(function() {
        self.time = countTime;
        Vue.set([self.time], "time", countTime);
        countTime--;
        if (countTime <= 0) {
          self.butt = false;
          countTime = 0;
          self.vcodeType = 1;
          self.vcodeButt = true;
          clearInterval(t);
        }
      }, 1000);
    },
    //密保问题请求发送
    submitQuestionsValidateNum() {
      this.$refs.questionsValidateForm.validate(valid => {
        if (valid) {
          var params = {
            answer: this.questionsValidateForm.answer,
            cb: this.questionsValidateCallb,
            pswId: this.account.questions
          };
          this.$store.dispatch("personalCenter/checkPswQuestion", params);
        } else {
          return false;
        }
      });
    },
    questionsValidateCallb(idata, rep) {
      if (idata == 201) {
        if (this.modifyType == 1) {
          this.showCurrent(7);
        } else {
          this.showCurrent(8);
        }
      } else {
        this.$message({
          type: "info",
          message: rep.data.data.errorMsg
        });
      }
    },
    //验证身份--密码修改
    submitModifyPassword(modifyPassword) {
      this.$refs.modifyPassword.validate(valid => {
        if (valid) {
          var params = {
            checkPass: this.modifyPassword.checkPass,
            cb: this.setPasswordCallb
          };
          this.$store.dispatch("personalCenter/modifyPassword", params);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    setPasswordCallb(setStatus) {
      if (setStatus == 1) {
        this.open();
        // this.showCurrent(0);
        window.setTimeout(function() {
          window.location.reload();
        }, 1000);
      } else {
        console.log("error submit!!");
        return false;
      }
    },
    open() {
      this.$alert("密码重置成功", "恭喜", {
        confirmButtonText: "确定"
      });
    },
    back() {
      window.location.reload();
    }
  }
};
</script>
<style>
.wdzh_hy .wdzh_yqhy i,
.wdzh_hy .wdzh_hy_tx,
.wzdh_xgxx i,
.wzdh_xgyx .wzdh_xgyx_ico,
.wzdh_xgyx .wzdh_xgyx_bdyx i,
.wzdh_xgyx .wzdh_xgyx_yzm i,
.wzdh_yzsf_sj i,
.wdsj_name i.wdsj_name_wz,
.wdsj_name i.wdsj_name_tp,
.wzdh_yzsjh .wzdh_yzsjh_ico,
.wzdh_yzsjh .wzdh_yzsjh_jsj i,
.wzdh_yzsjh .wzdh_yzsjh_yzm i,
.wzdh_bmwtyz .wzdh_bmwtyz_ico,
.wzdh_bmwtyz .wzdh_bmwtyz_wt i,
.wzdh_bmwtyz .wzdh_bmwtyz_da i,
.wzdh_xgmm .wzdh_xgmm_ico,
.wzdh_xgmm .wzdh_xgmm_xmm i,
.wzdh_xgmm .wzdh_xgmm_cf i,
.wzdh_jf .wzdh_jf_duih_01 i.jf_duih_03,
.wzdh_yhq_con_list_tab_con table tr td div.yhq_con_01,
.wzdh_jsb .wzdh_jsb_con i,
.jlxq_con span i,
.jlxq_con .jlxq_nr i,
.wzdh_wddd_sel .wzdh_wddd_sel_02 i,
.wzdh_ddxq_ddxx .wzdh_ddxq_ddxx_con i,
.wzdh_jrgwcts .wzdh_jrgwcts_cg_01 i,
.wzdh_gwctjcg .wzdh_gwctjcg_cg_dingdan i,
.wzdh_gwctjcg .wzdh_gwctjcg_cg_zffs i,
.wzdh_gwctjcg_cg_zffs_list table.bank_xq i {
  background: url(../../assets/img/bg_10.png) no-repeat;
  display: inline-block;
  vertical-align: middle;
}
.el-table .cell {
  padding-right: 0px !important;
}
.mr08 {
  margin-right: 8px;
}
.mr30 {
  margin-right: 30px;
}
.mt30 {
  margin-top: 30px;
}
.mb30 {
  margin-bottom: 30px;
}
.pl25 {
  padding-left: 25px;
}
.pl15 {
  padding-left: 15px;
}
.pt10 {
  padding-top: 10px;
}
.pt28 {
  padding-top: 28px;
}
.pb15 {
  padding-bottom: 15px;
}
</style>
<style scoped>
/*单行自动换行处理*/
.scoped_text {
  display: inline-block;
  max-width: 150px;
  line-height: 25px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.scoped_imgBox {
  position: relative;
  display: block !important;
  width: 100% !important;
  height: 142px !important;
  margin: 0 !important;
  padding: 0 !important;
  line-height: 106px !important;
  text-align: center;
}

.scoped_img {
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-block;
  margin: 0 !important;
  padding: 0 !important;
  transform: translate(-50%, -50%);
}
.btu136 {
  width: 136px;
}
.fs12 {
  font-size: 12px;
}

.center_ad {
  font-size: 16px;
  overflow: hidden;
}

.center_ad li {
  margin: 20px;
}

.center_te {
  display: inline-block;
  padding: 10px;
}

.center_cl {
  margin: 50px;
}

.butt {
  float: right;
}

.addressDetails {
  margin-top: 32px;
}

.butt_back {
  float: right;
  margin: 30px 20px 0 0;
}

.num {
  width: 100%;
  position: relative;
}

.num .butt {
  position: absolute;
  left: 750px;
  top: 300px;
}

.num ul {
  width: 500px;
}

.num li {
  margin: 40px;
}

.addressDetails {
  margin-top: 32px;
}

#orderWrapper .newAddAddress .el-dialog__body {
  padding: 16px 80px;
}

#orderWrapper .newAddAddress .newWrapper {
  margin-bottom: 10px;
}

.newAddAddress .el-dialog__body .newWrapper input {
  width: 85%;
  height: 30px;
  line-height: 30px;
  padding-left: 15px;
  border: 1px solid #bfcbd9;
  margin-top: 5px;
}

.addressDetails .newAddAddress .newWrapper .selectPCC {
  display: inline-block;
  margin-top: 5px;
}

.addressDetails .newAddAddress .newWrapper select {
  min-width: 100px;
  height: 30px;
  line-height: 30px;
  padding-left: 5px;
  border: 1px solid #bfcbd9;
  margin-right: 10px;
}

.addressDetails .newAddAddress .el-dialog__body {
  padding: 16px 80px;
}

.addressDetails .newAddAddress .newWrapper {
  margin-bottom: 10px;
}

.warningInfo {
  font-size: 12px;
  color: red !important;
  text-align: left !important;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type="number"] {
  -moz-appearance: textfield;
}

.line {
  margin-bottom: 10px;
}

.pay {
  margin: 32px;
  line-height: 36px;
  font-size: 16px;
}

.pay el-col div {
  padding-left: 20px;
}

.paybutt {
  float: right;
}

.el-row {
  margin: 20px auto;
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

/* 头像 */
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #20a0ff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

/* 评论 */
.mgt20 {
  margin-top: 20px;
}

.commentListsWrapper {
  width: 870.83px !important;
}

.commentListsWrapper .wdzh_dongtai_all_hyzy {
  box-sizing: border-box;
  border: 1px solid #d4d4d4;
  border-top: none;
  padding: 20px 15px;
  overflow: hidden;
}

.commentListsWrapper .wdzh_dongtai_fxts ul.wdzh_dongtai_fxts_list {
  border-bottom: none;
}

.commentListsWrapper .commentScore i {
  font-size: 12px;
}

.commentListsWrapper .jieshao p {
  font-size: 14px;
}

.authorL {
  font-size: 14px;
  line-height: 23px;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 159px;
}

.tdialog {
  width: 60% !important;
  margin: 0 auto;
}

.p_img {
  line-height: 135px;
}

/*我的账号*/
.wzdh_all {
}
.wdzh_zhuangtai {
  padding: 30px;
  border: 1px solid #d4d4d4;
  overflow: hidden;
}
.wzdh_all .wdzh_zhuangtai_tx {
  width: 136px;
  text-align: center;
}
.wzdh_all .wdzh_zhuangtai_tx img {
  width: 70px;
  height: 70px;
  border: 1px solid #eeeeee;
  border-radius: 50%;
  padding: 2px;
}
.wzdh_all .wdzh_zhuangtai_tx .wdzh_zhuangtai_tx_zhmc {
  color: #515151;
}
.wzdh_all .wdzh_zhuangtai_tx .wdzh_zhuangtai_tx_xgxx {
  background: #ca0000;
  line-height: 35px;
}
.wzdh_all .wdzh_zhuangtai_sj .wdzh_zhuangtai_sj_one,
.wzdh_all .wdzh_zhuangtai_sj .wdzh_zhuangtai_sj_two,
.wzdh_all .wdzh_zhuangtai_sj .wdzh_zhuangtai_sj_three,
.wzdh_all .wdzh_zhuangtai_sj .wdzh_zhuangtai_sj_four,
.wzdh_all .wdzh_zhuangtai_sj .wdzh_zhuangtai_sj_five {
  background: url(../../assets/img/bg_009.png) no-repeat;
  width: 600px;
  height: 100px;
}
.wzdh_all .wdzh_zhuangtai_sj .wdzh_zhuangtai_sj_one {
  background-position: 0px -9px;
}
.wzdh_all .wdzh_zhuangtai_sj .wdzh_zhuangtai_sj_two {
  background-position: 0px -109px;
}
.wzdh_all .wdzh_zhuangtai_sj .wdzh_zhuangtai_sj_three {
  background-position: 0px -209px;
}
.wzdh_all .wdzh_zhuangtai_sj .wdzh_zhuangtai_sj_four {
  background-position: 0px -312px;
}
.wzdh_all .wdzh_zhuangtai_sj .wdzh_zhuangtai_sj_five {
  background-position: 0px -425px;
}
.wzdh_all .wdzh_zhuangtai_sj .wdzh_zhuangtai_sj_ddsm {
}
.wzdh_all .wdzh_zhuangtai_sj .wdzh_zhuangtai_sj_ddsm .wdzh_zhuangtai_sj_ddsm_01,
.wzdh_all .wdzh_zhuangtai_sj .wdzh_zhuangtai_sj_ddsm .wdzh_zhuangtai_sj_ddsm_02,
.wzdh_all
  .wdzh_zhuangtai_sj
  .wdzh_zhuangtai_sj_ddsm
  .wdzh_zhuangtai_sj_ddsm_03 {
  padding: 6px 25px;
  border: 1px solid #f11511;
  color: #494949;
  border-radius: 25px;
}
.wzdh_all
  .wdzh_zhuangtai_sj
  .wdzh_zhuangtai_sj_ddsm
  .wdzh_zhuangtai_sj_ddsm_01 {
  margin-left: 70px;
}
.wzdh_all
  .wdzh_zhuangtai_sj
  .wdzh_zhuangtai_sj_ddsm
  .wdzh_zhuangtai_sj_ddsm_01
  i {
  color: #c60001;
}

.wdzh_dongtai {
  width: 672px;
  overflow: hidden;
}
.wdzh_dongtai_name span,
.wdzh_dongtai_fxts_name a.shanchu,
.wdzh_dongtai_fbjs_name a.shanchu {
  background: url(../../assets/img/bg_008.png) no-repeat;
}
.wdzh_dongtai_fxts_name a.shanchu,
.wdzh_dongtai_fbjs_name a.shanchu {
  background-position: -8px -222px;
  color: #c60001;
  padding: 3px 10px 3px 30px;
}
.wdzh_dongtai .wdzh_dongtai_name {
  height: 31px;
  line-height: 31px;
  overflow: hidden;
  background-color: #c50000;
}
.wdzh_dongtai_name span {
  background-position: -8px -250px;
}
.wdzh_dongtai .wdzh_dongtai_all {
  border: 1px solid #d4d4d4;
  border-top: none;
  padding: 20px 15px;
  width: 640px;
  overflow: hidden;
}
.wdzh_dongtai_fxts ul.wdzh_dongtai_fxts_list {
  border-bottom: 1px solid #f3caca;
  overflow: hidden;
  padding-bottom: 25px;
}
.wdzh_dongtai_fxts ul.wdzh_dongtai_fxts_list li {
  float: left;
  text-align: center;
  width: 159px;
}
.wdzh_dongtai_fxts ul.wdzh_dongtai_fxts_list li img {
  width: 106px;
  height: 142px;
  box-shadow: 0 0 10px #dcdcd8;
}
.wdzh_dongtai_fxts ul.wdzh_dongtai_fxts_list div.jieshao {
}
.wdzh_dongtai_fxts ul.wdzh_dongtai_fxts_list li p.title {
  font-size: 14px;
  padding-top: 5px;
}
.wdzh_dongtai_fxts ul.wdzh_dongtai_fxts_list li p.title a {
  color: #4a4a4a;
}
.wdzh_dongtai_fxts ul.wdzh_dongtai_fxts_list li p.author {
  color: #aaaaaa;
  line-height: 23px;
  height: 23px;
}
.wdzh_dongtai_fxts ul.wdzh_dongtai_fxts_list li p.xing {
  padding: 3px 0 5px 0px;
}
.wdzh_dongtai_fbjs .wdzh_dongtai_fbjs_list .wdzh_dongtai_fbjs_list_con {
  color: #8d8c8c;
}

.wdzh_hy {
  overflow: hidden;
  text-align: center;
  width: 183px;
}
.wdzh_hy .wdzh_hy_title {
  height: 31px;
  line-height: 31px;
  background-color: #c50000;
}
.wdzh_hy .wdzh_hy_list {
  border: 1px solid #d4d4d4;
  border-top: none;
}
.wdzh_hy .wdzh_yqhy i {
  background-position: -560px -75px;
  width: 15px;
  height: 18px;
}
.wdzh_hy .wdzh_yqhy_mc {
  color: #717171;
  font-weight: 400;
  border-bottom: 1px dashed #eeeeee;
}
.wdzh_hy .wdzh_hy_tx {
  width: 55px;
  height: 55px;
  background-position: -546px -206px;
}
.wdzh_hy p img {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  padding: 4px 2px 0 0;
}

.wdzh_jgyh .wdzh_jgyh_title {
  height: 31px;
  line-height: 31px;
  background-color: #c50000;
}
.wdzh_jgyh .wdzh_jgyh_list {
  border: 1px solid #d4d4d4;
  border-top: none;
}
.wdzh_jgyh .wdzh_jgyh_list dl.wdzh_jgyh_con {
  border-bottom: 1px dashed #5a5d63;
}
.wdzh_jgyh .wdzh_jgyh_list dl.wdzh_jgyh_con img {
  width: 70px;
  height: 70px;
  border: 1px solid #eeeeee;
  border-radius: 50%;
  padding: 2px;
}
.wdzh_jgyh .wdzh_jgyh_list dl.wdzh_jgyh_con dd.yhmc {
  color: #515151;
}
.wdzh_jgyh .wdzh_jgyh_list dl.wdzh_jgyh_con dd.author {
  color: #2c3138;
  padding-bottom: 10px;
  background: url(../../assets/img/bg_002.png) repeat-x center 40%;
  width: 134px;
  margin: 0 auto;
}
.wdzh_jgyh .wdzh_jgyh_list dl.wdzh_jgyh_con dd.author a {
  color: #2c3138;
  padding: 0 20px;
  background: #fff;
  color: #515151;
}
/*修改信息*/
.wzdh_xgxx .wzdh_xgxx_tx {
  padding-left: 65px;
}
.wzdh_xgxx .wzdh_xgxx_tx img {
  border: 1px solid #eeeeee;
  border-radius: 50%;
  height: 105px;
  padding: 2px;
  width: 105px;
}
.wzdh_xgxx i.wzdh_xgxx_bdmc {
  background-position: -5px -142px;
  height: 18px;
  width: 15px;
}
.wzdh_xgxx i.wzdh_xgxx_bdyx {
  background-position: -8px -294px;
  height: 15px;
  width: 17px;
}
.wzdh_xgxx i.wzdh_xgxx_bdhm {
  background-position: -5px -264px;
  height: 18px;
  width: 15px;
}
input.bdmc,
input.bdyx,
input.bdhm {
  outline: none;
  border: 0px;
  width: 190px;
  height: 32px;
  line-height: 32px;
  padding-left: 25px;
  color: #9a9a9a;
  font-size: 12px;
}
.wzdh_xgxx .wzdh_xgxx_04 {
  background: #f2f1f1;
  border: 1px solid #d8d8d8;
  margin-left: 28px;
  padding: 9px 15px;
}
.wzdh_xgxx .wzdh_xgxx_tj {
  padding-left: 100px;
}
.wzdh_xgxx .wzdh_xgxx_btn {
  width: 85px;
  height: 32px;
  line-height: 32px;
  background: #c50000;
  border: 0px;
}
.main_right { width:880px; overflow:hidden; margin:0 auto;}
/*修改邮箱*/
.main_right .wzdh_yzsjh,
.main_right .wzdh_xgyx,
.main_right .wzdh_bmwtyz,
.main_right .wzdh_yzsjh,
.main_right .wzdh_xgmm {
  padding: 20px 120px 100px 240px;
  border: 1px solid #d9d9d9;
  /* width: 518px; */
}

.wzdh_xgyx .wzdh_xgyx_ico {
  background-position: -94px -405px;
  width: 74px;
  height: 74px;
  margin: 50px 0 0px 170px;
}
.wzdh_xgyx .wzdh_xgyx_bdyx i.xgyx_01 {
  background-position: -8px -294px;
  height: 15px;
  width: 17px;
}
.wzdh_xgyx .wzdh_xgyx_bdyx i.xgyx_03 {
  background-position: -8px -207px;
  height: 18px;
  width: 17px;
}
.wzdh_xgyx .wzdh_xgyx_bdyx input.xgyx_02 {
  border: 1px solid #e1e1e1;
  height: 35px;
  padding-left: 10px;
  width: 220px;
  color: #9a9a9a;
}
.wzdh_xgyx .wzdh_xgyx_yzm i.xgyx_yzm_01 {
  background-position: -7px -176px;
  height: 18px;
  width: 17px;
}
.wzdh_xgyx .wzdh_xgyx_yzm input.xgyx_yzm_02 {
  border: 1px solid #e1e1e1;
  height: 35px;
  padding-left: 10px;
  width: 100px;
  color: #9a9a9a;
}
.wzdh_xgyx .wzdh_xgyx_yzm .xgyx_yzm_03 {
  display: inline-block;
  margin: -2px 5px 0;
  vertical-align: middle;
}
.wzdh_xgyx input.wzdh_xgyx_btn {
  background-color: #c50000;
  border: 0 none;
  cursor: pointer;
  height: 30px;
  line-height: 30px;
  margin-left: 95px;
  margin-top: 20px;
  width: 234px;
  text-align: center;
}
/*手机号验证*/
.wzdh_yzsjh .wzdh_yzsjh_ico {
  background-position: -185px -415px;
  width: 62px;
  height: 85px;
  margin: 50px 0 0px 170px;
}
.wzdh_yzsjh .wzdh_yzsjh_jsj i.yzsjh_jsj_01 {
  background-position: -8px -264px;
  height: 19px;
  width: 17px;
}
.wzdh_yzsjh .wzdh_yzsjh_jsj i.yzsjh_jsj_03 {
  background-position: -8px -207px;
  height: 18px;
  width: 17px;
}
.wzdh_yzsjh .wzdh_yzsjh_jsj input.yzsjh_jsj_02 {
  border: 1px solid #e1e1e1;
  height: 35px;
  padding-left: 10px;
  width: 220px;
  color: #9a9a9a;
}
.wzdh_yzsjh .wzdh_yzsjh_yzm i.yzsjh_yzm_01 {
  background-position: -7px -176px;
  height: 18px;
  width: 17px;
}
.wzdh_yzsjh .wzdh_yzsjh_yzm input.yzsjh_yzm_02 {
  border: 1px solid #e1e1e1;
  height: 35px;
  padding-left: 10px;
  width: 108px;
  color: #9a9a9a;
}
.wzdh_yzsjh .wzdh_yzsjh_yzm a.yzsjh_yzm_03 {
  background: #f2f1f1;
  border: 1px solid #d8d8d8;
  padding: 8px 15px;
}
.wzdh_yzsjh input.wzdh_yzsjh_btn {
  background-color: #c50000;
  border: 0 none;
  cursor: pointer;
  height: 30px;
  line-height: 30px;
  margin-left: 110px;
  margin-top: 20px;
  width: 234px;
}

/*保密问题验证*/
.wzdh_bmwtyz .wzdh_bmwtyz_ico {
  background-position: -263px -415px;
  width: 64px;
  height: 60px;
  margin: 50px 0 0px 170px;
}
.wzdh_bmwtyz .wzdh_bmwtyz_wt i.bmwtyz_wt_01 {
  background-position: -263px -486px;
  height: 18px;
  width: 20px;
}
.wzdh_bmwtyz .wzdh_bmwtyz_wt input.bmwtyz_wt_02,
.wzdh_bmwtyz .wzdh_bmwtyz_da input.bmwtyz_da_02 {
  border: 1px solid #e1e1e1;
  height: 35px;
  padding-left: 10px;
  width: 220px;
  color: #9a9a9a;
}
.wzdh_bmwtyz .wzdh_bmwtyz_da i.bmwtyz_da_01 {
  background-position: -303px -486px;
  height: 18px;
  width: 20px;
}
.wzdh_bmwtyz input.wzdh_bmwtyz_btn {
  background-color: #c50000;
  border: 0 none;
  cursor: pointer;
  height: 30px;
  line-height: 30px;
  margin-left: 90px;
  margin-top: 20px;
  width: 234px;
}

/*修改密码*/
.wzdh_xgmm .wzdh_xgmm_ico {
  background-position: -184px -504px;
  width: 66px;
  height: 78px;
  margin: 50px 0 0px 170px;
}
.wzdh_xgmm .wzdh_xgmm_xmm i.xgmm_xmm_01 {
  background-position: -8px -324px;
  height: 16px;
  width: 15px;
}
.wzdh_xgmm .wzdh_xgmm_xmm input.xgmm_xmm_02,
.wzdh_xgmm .wzdh_xgmm_cf input.xgmm_cf_02 {
  border: 1px solid #e1e1e1;
  height: 35px;
  padding-left: 10px;
  width: 220px;
  color: #9a9a9a;
}
.wzdh_xgmm .wzdh_xgmm_cf i.xgmm_cf_01 {
  background-position: -8px -354px;
  height: 18px;
  width: 17px;
}
.wzdh_xgmm input.wzdh_xgmm_btn {
  background-color: #c50000;
  border: 0 none;
  cursor: pointer;
  height: 30px;
  line-height: 30px;
  margin-left: 120px;
  margin-top: 20px;
  width: 234px;
}
</style>

