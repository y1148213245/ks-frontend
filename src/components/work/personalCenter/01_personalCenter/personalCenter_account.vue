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
            <span>{{account && account.userRank}}</span>
          </li>
          <li>
            <span class="center_te">当前积分</span>:
            <span>{{account && account.payPoints}}</span>
            <el-button type="primary" @click="showCurrent(1)" class="butt">查看积分</el-button>
          </li>
          <li>
            <span class="center_te">虚拟币</span>:
            <span>{{account && account.virtualCoin}}</span>
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
              <p class="wdzh_zhuangtai_tx_xgxx">
                <el-button class="color_fff btu136" type="primary" @click="showCurrent(4)">修改信息</el-button>
              </p>
            </div>
            <div class="fr wdzh_zhuangtai_sj">

              <!--注意说明:共5级，每一级的样式是不一样的，第1级wdzh_zhuangtai_sj_one;第2级wdzh_zhuangtai_sj_two;第3级wdzh_zhuangtai_sj_three;的，第4级wdzh_zhuangtai_sj_four;第5级wdzh_zhuangtai_sj_five -->
              <div class="wdzh_zhuangtai_sj_two"   v-if="account.userRank=='LV2'"></div>
              <div class="wdzh_zhuangtai_sj_three" v-else-if="account.userRank=='LV3'"></div>
              <div class="wdzh_zhuangtai_sj_four"  v-else-if="account.userRank=='LV4'"></div>
              <div class="wdzh_zhuangtai_sj_five"  v-else-if="account.userRank=='LV5'"></div>
              <div class="wdzh_zhuangtai_sj_one"   v-else></div>
              <div class="wdzh_zhuangtai_sj_ddsm f14 pt28">
                <span
                  class="wdzh_zhuangtai_sj_ddsm_01 ">账户等级：<i><span>{{ account && account.userRank || "LV1"}}</span></i></span>
                <span
                  class="wdzh_zhuangtai_sj_ddsm_02 ml30 mr30">账户积分：<span>{{account && account.payPoints|| "0"}}</span></span>
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
          <span class="warningInfo" v-if="emptyContactor">请填写收货人</span>
        </div>
        <div class="newWrapper">
          <div>收货地区：</div>
          <div class="selectPCC">
            <select id="s_province" name="s_province"></select>
            <select id="s_city" name="s_city"></select>
            <select id="s_county" name="s_county"></select>
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
          <input id="s_phone" type="number" v-model="newAddAddress.phone" @blur="checkPhone()"
                 @keypress="checkNumberType($event)" maxlength="11">
          <span class="warningInfo" v-if="emptyPhone">请填写联系电话</span>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="confirmNewAdd(false)">取 消</el-button>
          <el-button type="primary" @click="confirmNewAdd(true)">确 定</el-button>
        </div>
      </el-dialog>

      <el-table border :data="addresses" style="width: 100%" max-height="500">
        <el-table-column prop="contactor" label="收货人" width="150px">
        </el-table-column>
        <el-table-column label="收货地址">
          <template slot-scope="scope">
            <span>{{ scope.row.city }}{{ scope.row.county }}{{ scope.row.address }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="phone" label="电话" width="150px">
        </el-table-column>
        <el-table-column label="操作" prop="action" width="220px">
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
            <i class="wzdh_xgxx_bdyx mr08"></i>绑定邮箱:
            <span v-text="account && account.email"></span>
            <el-button type="primary" @click="changeEmail" class="butt">修改邮箱</el-button>
          </div>

          <div class="mb30" v-if="account && account.mobileno">
            <i class="wzdh_xgxx_bdhm mr08"></i>手机号码:
            <span v-text="account && account.mobileno"></span>
            <el-button type="primary" class="butt" @click="modifyMobile">修改手机号</el-button>
          </div>

          <!-- <div class="mb30" v-if="account.mobileno ==''">
            <el-button type="primary" @click="setMobile" class="butt" v-if="account.mobileno == ''">设置手机号</el-button>
          </div> -->

          <div class="wzdh_xgxx_tj">
            <el-button type="primary" @click="modifyPass" class="f14">修改密码</el-button>
          </div>

        </div>
        <el-button type="primary" @click="showCurrent(0)" class="butt_back">返回</el-button>

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
        <el-tabs v-model="activeName">
          <el-tab-pane label="邮箱验证" name="first">
          <div class="main_right fl">
            <div class="wzdh_xgyx f14 color_6f6">
              <div class="wzdh_xgyx_ico"></div>
              <div style="margin:20px 0 0 70px;">
                <el-form :model="emailValidateNum" :rules="emailValidateNumRules" ref="emailValidateNum" >
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
                <el-form :model="mobileValidateForm" :rules="mobileValidateRules" ref="mobileValidateForm">
                  <el-form-item label="绑定手机号:">
                    <span>{{account && account.mobileno}}</span>
                    <el-button type="primary" size="small">发送验证码</el-button>
                    </el-form-item>
                    <el-form-item label="手机验证码:" prop="mobilenum">
                    <el-input type="text" v-model="mobileValidateForm.mobilenum" auto-complete="off" placeholder="请输入手机验证码" style="display:inline-block;width:220px;"></el-input> <span style="margin-left:10px;color:red">{{time}}</span>
                  </el-form-item>
                  <div style="margin-left:100px;">
                        <el-button type="primary"  v-if="butt">下一步</el-button>
                        <el-button  type="text" :disabled="true" class="button" v-show="!butt">验证码已失效，请重新验证</el-button>
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
                    <el-button type="primary"  @click="submitQuestionsValidateNum('questionsValidateForm')" v-if="butt">下一步</el-button>
                  </div>
                </el-form>
                </div>
              </div>
            </div>
          </el-tab-pane>

          </el-tabs>
      <el-button type="primary" @click="showCurrent(0)" class="butt_back">返回</el-button>
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
      <el-button type="primary" @click="showCurrent(0)" class="butt_back">返回</el-button>
    </div>
    <!-- 通过验证身份修改手机号 -->
    <div v-show="currentShow=='modifyMobile'">
          <div class="main_right fl">
            <div class="wzdh_yzsjh f14 color_6f6">
              <div class="wzdh_yzsjh_ico"></div>
              <div style="margin:20px 0 0 50px;">
                <el-form :model="mobileValidateForm" :rules="mobileValidateRules" ref="mobileValidateForm">
                  <el-form-item label="绑定手机号:">
                    <el-input type="text" v-model="emailValidateNum.emailnum" auto-complete="off" placeholder="请输入新手机号" style="display:inline-block;width:200px;"></el-input> <span style="margin-left:10px;color:red">{{time}}</span>
                    <el-button type="primary" size="small">发送验证码</el-button>
                    </el-form-item>
                    <el-form-item label="手机验证码:" prop="mobilenum">
                    <el-input type="text" v-model="mobileValidateForm.mobilenum" auto-complete="off" placeholder="请输入手机验证码" style="display:inline-block;width:200px;"></el-input> <span style="margin-left:10px;color:red">{{time}}</span>
                  </el-form-item>
                  <div style="margin-left:120px;">
                        <el-button type="primary"  v-if="butt">提交</el-button>
                        <el-button  type="text" :disabled="true" class="button" v-show="!butt">验证码已失效，请重新验证</el-button>
                  </div>
                </el-form>
              </div>
            </div>
          </div>
      <el-button type="primary" @click="showCurrent(0)" class="butt_back">返回</el-button>
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
  import Vuex from 'vuex'
  import axios from 'axios'
  import {mapGetters, mapActions} from "vuex";
  import CityInfo from './assets/js/city-data.js'

  Vue.use(Vuex)
  Vue.prototype.$ajax = axios

  export default {
    name: "account",
    reused: true,
    props: ["namespace"],
    props: {
      detailUrl: {
        type: String,
      },
      show_star: {
        type: Boolean,
        default: true
      }
    },
    data: function () {
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
      var validateAnswer= (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请设置密保问题答案"));
        } else if (this.cryptoguarForm.questionId=="") {
          callback(new Error("请选择密保问题"));
        }else {
          this.cryptoguar = false
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
      }else {
        callback();
      }
    };
    var mobileValidateForm = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机验证码"));
      }else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      var i;
      var char;
      var badword;
      badword=';|<>`&!*(~^)#?:"/$=\\'+"'"
      for(i=0;i<value.length;i++){
      char=value.charAt(i);}
      if(badword.indexOf(char)>=0){
        callback(new Error('格式错误，密码仅支持汉字、字母、数字、"-"、"_"的组合'));
      }
      else if (value === "") {
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
        vcodeType:0,
        vcodeButt:true,
        // 修改类型 1密码 2手机
        modifyType:"",
        butt:true,
        /*修改密码*/
        dialogFormVisible: false,
        cryptoguar:false,
        activeName:"first",
        formLabelWidth: "120px",
        // 修改密码表单
        ruleForm: {
          oldPass: "",
          pass: "",
          checkPass: ""
        },
        emailValidateNum:{
         emailnum:""
        },
        //验证身份--手机验证码验证
        mobileValidateForm:{
          mobilenum:""
        },
        //验证身份--密保问题验证
        questionsValidateForm:{
          answer:""
        },
        // 验证身份--设置密保问题
        cryptoguarForm:{
          questionId:"",
          answer:""
        },
        // 验证身份--修改密码
        modifyPassword:{
          pass:"",
          checkPass:"",
        },
        loading:"",//头像上传loading
        rules: {
          oldPass: [{validator: validatePass1, trigger: "blur"}],
          pass: [{validator: validatePass2, trigger: "blur"}],
          checkPass: [{validator: validatePass3, trigger: "blur"}]
        },
        // 密保问题答案
        cryptoguarRules:{
          answer:[{validator: validateAnswer, trigger: "blur"}]
        },
        emailValidateNumRules:{
          emailnum: [{ validator: validateEmailnum, trigger: "blur" }],
        },
        //身份验证--手机验证码验证
        mobileValidateRules:{
          mobilenum: [{ validator: mobileValidateForm, trigger: "blur" }],
        },
        //身份验证--密保问题验证
        questionsValidateRules:{
          answer: [{ validator: questionsValidateForm, trigger: "blur" }],
        },
        // 身份验证--修改密码
        modifyPasswordrules:{
          pass: [{ validator: validatePass, trigger: "blur" }],
          checkPass: [{ validator: validateCheckPass, trigger: "blur" }]
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
          selectedOptions: [],//地区筛选数组
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
        payMethod: '0',  // 支付方式 0 微信支付 1 支付宝支付
        siteId: "",
        imageUrl: "",
        fullLoading: '',//全屏加载框
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
      toNum: function (value) {
       return parseFloat(value);
      },
      //  手机号中间隐藏
      toTel:function (str) {
        if(str){
           return str.slice(0,3)+'******'+str.slice(-4);
        }
      },
      //时间格式化
      dateFormat: function (row, column) {
        var date = row[column.property];
        if (date == undefined) {
          return "";
        }
        return moment(date).format("YYYY-MM-DD HH:mm:ss");
      },
      //类型格式化
      typeFormat: function (row, column) {
        var date = row[column.property];
        if (date == 0) {
          return "充值";
        } else {
          return "消费";
        }
      },
      myAddressCity: function (value) {
        for (var y = 0; y < CityInfo.length; y++) {
          if (CityInfo[y].value == value) {
            return CityInfo[y].label
          }
        }
      },
      myAddressErae: function (value) {
        for (var y = 0; y < CityInfo.length; y++) {
          for (var z = 0; z < CityInfo[y].children.length; z++) {
            if (CityInfo[y].children[z].value == value && value != undefined) {
              return CityInfo[y].children[z].label;
            }
          }
        }
      },
      myAddressMinerae: function (value) {
        for (var y = 0; y < CityInfo.length; y++) {
          for (var z = 0; z < CityInfo[y].children.length; z++) {
            for (var i = 0; i < CityInfo[y].children[z].children.length; i++) {
              if (CityInfo[y].children[z].children[i].value == value && value != undefined) {
                return CityInfo[y].children[z].children[i].label
              }
            }
          }
        }
      },
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
      pointRecordPaging({pageNum, pageSize}) {
        var param = {
          loginName: "",
          pageIndex: pageNum,
          pageSize: pageSize
        };
        this.$store.dispatch("personalCenter/queryPointRecord", param);
      },
      typeFormat: function (row, column) {
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
      virtualPaging({pageNum, pageSize}) {
        var param = {
          loginName: "",
          pageIndex: pageNum,
          pageSize: pageSize
        };
        this.$store.dispatch("personalCenter/queryVirtualMoney", param);
      },
      /*修改地址*/
      handleChange(value) {
        this.form.city = this.form.selectedOptions[0];
        this.form.erae = this.form.selectedOptions[1]
        this.form.minerae = this.form.selectedOptions[2]
      },
      /*地址管理模块*/
      editClick(index, row) {
        var _this = this;
        this.updateAddressDialog = true;
        initDom();

        function initDom() {
          setTimeout(function () {
            if ($(document.getElementById("t_contactor")).length > 0) {
              //解决弹框出来的时候DOM可能还没有加载完成问题
              _this.address = JSON.parse(JSON.stringify(_this.addresses[index]));
              console.log(_this.address);

              _this.form.city = _this.address.province,
                _this.form.erae = _this.address.city,
                _this.form.minerae = _this.address.county,
                _this.form.selectedOptions = [],//地区筛选数组
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
      confirmUpdateAddress: function (flag) {
        // 点击确定/取消添加地址按钮
        var _this = this;
        let isAllNull = $("#t_city").html() === "" && $("#t_minerae").html() === "" && $("#t_erae").html() === "";
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
          }
          else if (
            $("#t_city").html() &&
            !$("#t_minerae").html()
          ) {
            this.emptyPCC = true;
            return false;
          }
          else if (
            $("#t_city").html() &&
            $("#t_minerae").html() &&
            !$("#t_erae").html()
          ) {
            this.emptyPCC = true;
            return false;
          }
          else {
            // 都不为空
            this.emptyPCC = false;
            var param = {
              loginName: this.account.loginName,
              contactor: $("#t_contactor").val(),
              phone: $("#t_phone").val(),
              province: isAllNull ? $("#tt_city").html() : $("#t_city").html(),
              city: isAllNull ? $("#tt_erae").html() : $("#t_erae").html(),
              county: isAllNull ? $("#tt_minerae").html() : $("#t_minerae").html(),
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

      updateAddressCallback: function (updateStatus) {
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
      deleteAddress: function (id) {
        var _this = this;
        this.$confirm("您确定要删除该收货地址吗?", "系统提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function () {
          var param = {
            ids: id,
            cb: _this.deleteAddresscb
          };
          _this.$store.dispatch("personalCenter/deleteAddress", param);
        });
      },
      deleteAddresscb: function (deleteStatus) {
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
      confirmNewAdd: function (flag) {
        // 点击确定/取消添加地址按钮
        var _this = this;
        if (flag) {
          // 点击确定
          if ($("#s_contactor").val() === "") {
            // 收件人为空
            this.emptyContactor = true;
            return false;
          } else if (
            $("#s_province").val() === "省份" ||
            $("#s_city").val() === "地级市" ||
            $("#s_county").val() === "市、县级市"
          ) {
            // 省市区没有选择或者没有选择完全
            this.emptyPCC = true;
            return false;
          } else if ($("#s_address").val() === "") {
            // 详细地址为空
            this.emptyDetail = true;
            this.emptyPCC = false;
            return false;
          } else if ($("#s_phone").val() === "") {
            // 联系方式为空
            this.emptyPhone = true;
            this.emptyPCC = false;
            return false;
          } else {
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
        }
        this.addAddressDialog = false;
        this.newAddAddress.contactor = ''; // 点击取消的时候初始化数据
        this.newAddAddress.phone = '';
        this.newAddAddress.province = '';
        this.newAddAddress.city = '';
        this.newAddAddress.county = '';
        this.newAddAddress.address = '';
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
      checkContactor: function () {
        // 联系人失去焦点校验
        this.emptyContactor = $("#s_contactor").val() === "" ? true : false;
      },
      checkDetail: function () {
        // 详细地址失去焦点校验
        this.emptyDetail = $("#s_address").val() === "" ? true : false;
      },
      checkPhone: function () {
        // 联系方式失去焦点校验
        this.emptyPhone = $("#s_phone").val() === "" ? true : false;
      },
      checkNumberType: function (event) {
        // 联系号码不得超过11位
        if (!String.fromCharCode(event.keyCode).match(/\d/)) {
          event.preventDefault();
        }
        if ($("#s_phone").val().length > 11) {
          event.preventDefault();
        }
      },
      addNewAddress: function () {
        this.addAddressDialog = true;
        initDom();
        function initDom() {
          setTimeout(function () {
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
      setDefaultAddress: function (id) {
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
        }).then(({value}) => {
          var param = {
            value: value,
            cb: this.changeEmailCallb
          };
          this.fullLoading = this.$loading({fullscreen: true, text: '验证码发送中...'})
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
      submitCryptoguarForm(cryptoguarForm){
        this.$refs.cryptoguarForm.validate(valid => {
          if (valid) {
            var params = {
              cb: this.submitCryptoguarCallb,
              pswId: this.cryptoguarForm.questionId,
              answer: this.cryptoguarForm.answer,
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
      /*修改手机*/
      setMobile() {
        alert("接口等待中...");
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
      this.payWay = id;
      this.payMethod = item.id + "";
    },
      RechargeVirtual() {
        var _this = this;
        var url = type.API_CONFIG.baseURL;
        this.$confirm("点击确认支付", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            var param = {
              paynum: this.value,
            };
            if (_this.payMethod === "1") {         // 支付宝支付
              window.open(url + '/epay/getVirtualCoinPayForm.do?price=' + this.value + '&loginName=' + this.account.loginName + '&payMethodId=' + this.payWay + '&siteId=' + this.siteId, '_self');
              window.history.pushState(null, null, '../errorPage/errorpage.html'); // 添加历史记录
            } else if (_this.payMethod === "0") {  // 微信支付
              axios.get(url + '/epay/getVirtualCoinPayForm.do?price=' + this.value + '&loginName=' + this.account.loginName + '&payMethodId=' + this.payWay + '&siteId=' + this.siteId).then(function(response) {
                var data = response.data.substring(response.data.indexOf('<a>') + 3, response.data.indexOf('</a>'));
                var orderCode = response.data.substring(response.data.indexOf('<div>') + 5, response.data.indexOf('</div>'));
                window.location.href = '../shoppingCart/QRcode.html?data=' + data + '&orderCode=' + orderCode;
              })
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
      avatarLoading(){
        this.loading = this.$loading({
            lock: true,
            text: '正在上传...',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)',
            target: document.querySelector('.div1')
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
      uploadUrl: function () {
        var url = type.API_CONFIG.baseURL;
        return url + '/user/uploadHeadPic.do?loginName=' + this.account.loginName;
      },
      //详情页
      toBookDetail(pubId) {
        let toBookDetailUrl = locationUtils.addParams({pubId: pubId}, this.detailUrl);
        window.location.href = toBookDetailUrl;
      },
      // 身份验证--邮箱验证获取验证码
      submitEmailValidateForm() {
        this.vcodeButt = false;
        if(this.vcodeType==1){
            this.butt=true;
        }
        var params = {
          email: this.account.email,
          cb: this.emailValidateCallb
        };
        this.fullLoading = this.$loading({fullscreen: true, text: '验证码发送中...'})
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
      submitEmailValidateNum(emailValidateNum) {
        this.$refs.emailValidateNum.validate(valid => {
          if (valid) {
            this.showCurrent(7);
          } else {
            return false;
          }
        });
      },
      modifyPass(){
        this.showCurrent(6);
        this.modifyType=1;
      },
      modifyMobile(){
        this.showCurrent(6);
        this.modifyType=2;
      },
      // 邮箱验证码倒计时
      times() {
        var self = this;
        var countTime = 120;
        var t =setInterval(function() {
          self.time = countTime;
          Vue.set([self.time], "time", countTime);
          countTime--;
          if (countTime <= 0) {
            self.butt=false;
            countTime = 0;
            self.vcodeType = 1;
            self.vcodeButt = true;
            clearInterval(t)
          }
        }, 1000);
      },
      //密保问题请求发送
      submitQuestionsValidateNum(){
        this.$refs.questionsValidateForm.validate(valid => {
          if (valid) {
            var params = {
              answer: this.questionsValidateForm.answer,
              cb: this.questionsValidateCallb,
              pswId:this.account.questions
            };
            this.$store.dispatch("personalCenter/checkPswQuestion", params);
          } else {
            return false;
          }
        });
      },
      questionsValidateCallb(idata, rep) {
          if (idata == 201) {
            if(this.modifyType==1){
                this.showCurrent(7);
            }else{
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
            window.location.reload()
          }, 1000);
        } else {
          console.log("error submit!!");
          return false;
        }
      },
      open() {
      this.$alert("密码重置成功", "恭喜", {
        confirmButtonText: "确定",
        });
      },
    }
  };
</script>
<style>
  .el-table .cell {
    padding-right: 0px !important;
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
    width: 80%;
    height: 30px;
    line-height: 30px;
    padding-left: 5px;
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

  .mb30 {
    margin-bottom: 30px;
  }

  .tdialog {
    width: 65% !important;
    margin: 0 auto;
  }

  .p_img{
    line-height: 135px;
  }
</style>
