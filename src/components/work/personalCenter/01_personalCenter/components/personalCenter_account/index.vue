<template>
  <section class="personalcenter_account">
    <!--账户首页-->
    <div class="center_ad" v-show="currentShow=='main'">
      <div v-if="siteId == 1 || 8 ">
        <ul>
          <li>
            <span class="center_te">{{getStaticText('myAccount') ? getStaticText('myAccount') :'我的账户'}}</span>:
            <span>{{account && account.loginName}}</span>
            <div class="wzdh_all" style="float:right">
              <div class="wdzh_zhuangtai_tx">
                <img v-bind:src="account.avatar || defaultPic" :alt="getStaticText('noAvatar') ? getStaticText('noAvatar') : '暂无头像'" />
              </div>
            </div>
          </li>
          <li>
            <span class="center_te">{{getStaticText('accountLevel') ? getStaticText('accountLevel') : '账户等级'}}</span>:
            <span>{{account && account.userRank || "LV1"}}</span>
          </li>
          <li>
            <span class="center_te">{{getStaticText('currentIntegral') ? getStaticText('currentIntegral') : '当前积分'}}</span>:
            <span>{{account && account.payPoints || "0"}}</span>
            <el-button type="primary" @click="showCurrent(1)" class="butt">{{getStaticText('viewTheIntegral') ? getStaticText('viewTheIntegral') : '查看积分'}}</el-button>
          </li>
          <li>
            <span class="center_te">{{getStaticText('downloadedCurrency') ? getStaticText('downloadedCurrency') : '下载币'}}</span>:
            <span>{{account && account.virtualCoin || "0" }}</span>
            <el-button type="primary" @click="showCurrent(2)" class="butt">{{getStaticText('viewDownloadCurrency') ? getStaticText('viewDownloadCurrency') : '查看下载币'}}</el-button>
          </li>
        </ul>
        <hr>
        <div class="center_cl">
          <el-button type="primary" @click="showCurrent(3) ">{{getStaticText('managingReceiptAddress') ? getStaticText('managingReceiptAddress') : '管理收货地址'}}</el-button>
          <el-button type="primary" @click="showCurrent(4)">{{getStaticText('modifyPersonalInformation') ? getStaticText('modifyPersonalInformation') : '修改个人信息'}}</el-button>
        </div>

      </div>
      <!-- 文联 -->
      <div v-if="siteId == 2 || siteId == 4">
        <div class="wzdh_all">
          <div class="wdzh_zhuangtai">
            <div class="fl wdzh_zhuangtai_tx">
              <img v-bind:src="account.avatar || defaultPic" :alt="getStaticText('noAvatar') ? getStaticText('noAvatar') : '暂无头像'" />
              <p class="wdzh_zhuangtai_tx_zhmc pt10 pb15 fs12">{{getStaticText('titleOfAccount') ? getStaticText('titleOfAccount') : '账户名称'}}：
                <span>{{account && account.loginName}}</span>
              </p>
              <el-button type="primary" @click="showCurrent(4)">{{getStaticText('modifyInformation') ? getStaticText('modifyInformation') : '修改信息'}}</el-button>
            </div>
            <div class="fr wdzh_zhuangtai_sj">
              <div class="wdzh_zhuangtai_sj_two" v-if="account.userRank=='LV2'"></div>
              <div class="wdzh_zhuangtai_sj_three" v-else-if="account.userRank=='LV3'"></div>
              <div class="wdzh_zhuangtai_sj_four" v-else-if="account.userRank=='LV4'"></div>
              <div class="wdzh_zhuangtai_sj_five" v-else-if="account.userRank=='LV5'"></div>
              <div class="wdzh_zhuangtai_sj_one" v-else></div>
              <div class="wdzh_zhuangtai_sj_ddsm f14 pt28">
                <span class="wdzh_zhuangtai_sj_ddsm_01 mr30">{{getStaticText('accountLevel') ? getStaticText('accountLevel') : '账户等级'}}：
                  <i>
                    <span>{{ account && account.userRank || "LV1"}}</span>
                  </i>
                </span>
                <span class="wdzh_zhuangtai_sj_ddsm_02 mr30">{{getStaticText('accountIntegral') ? getStaticText('accountIntegral') : '账户积分'}}：
                  <span>{{account && account.payPoints|| "0"}}</span>
                </span>
                <span class="wdzh_zhuangtai_sj_ddsm_03" v-if="siteId == 2">{{getStaticText('coupon') ? getStaticText('coupon') : '优惠券'}}：
                  <span>{{account && account.couponNum || "0"}}</span>{{getStaticText('piece') ? getStaticText('piece') : '张'}}</span>
              </div>
            </div>
          </div>
        </div>
        <!--书籍评论列表 wenlian-->
        <div class="wdzh_dongtai_hyzy fl commentListsWrapper mgt20">
          <div class="wdzh_dongtai_name f16 color_fff pl15 el-button--primary">
            <span class="pl25">{{getStaticText('dynamic') ? getStaticText('dynamic') : '动态'}}</span>
          </div>
          <div class="wdzh_dongtai_all_hyzy commentListsWrapper">
            <!--分享图书-->
            <div class="wdzh_dongtai_fxts cl">
              <div class="wdzh_dongtai_fxts_name line-h25">
                <span class="el-button--text f16">{{getStaticText('commentListOfBooks') ? getStaticText('commentListOfBooks') : '评论图书列表'}}</span>
              </div>
              <ul class="wdzh_dongtai_fxts_list pt20">
                <li v-for="list in myComment">
                  <div>
                    <a href="javascript:void(0)" class="scoped_imgBox" @click="toBookDetail(list.pubId)"><img class="scoped_img p_img" v-bind:src="list.bigPic" onload="DrawImage(this,106,142)" :alt="getStaticText('noPicture') ? getStaticText('noPicture') : '暂无图片'" /></a>
                  </div>
                  <div class="jieshao">
                    <p class="title">
                      <a class="scoped_text" href="javascript:void(0)" @click="toBookDetail(list.pubId)" v-text="list.resourceName" :title="list.resourceName"></a>
                    </p>
                    <p class="author authorL scoped_text" v-text="list.author" :title="list.author"></p>
                    <p class="commentScore">
                      <el-rate v-if="show_star" :value="list.starNum | toNum" :max="5" disabled text-color="#c50000"></el-rate>
                      <span class="color_515">{{list.commentNums}}{{getStaticText('comment') ? getStaticText('comment') : '条评论'}}</span>
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
        <el-table-column type="index" width="150" :label="getStaticText('serialNumber') ? getStaticText('serialNumber') : '序号'" align="center">
        </el-table-column>
        <el-table-column :label="getStaticText('getIntegralPath') ? getStaticText('getIntegralPath') : '获取积分路径'" prop="operName" align="center">
        </el-table-column>
        <el-table-column :label="getStaticText('integralValue') ? getStaticText('integralValue') : '积分值'" prop="ruleValue" align="center" sortable>
        </el-table-column>
        <el-table-column :label="getStaticText('time') ? getStaticText('time') : '时间'" prop="createTime" align="center" sortable>
        </el-table-column>
      </el-table>
      <ui_pagination :pageMessage="{totalCount: this.pointRecords.data && this.pointRecords.totalCount - 0 || 0}" :excuteFunction="pointRecordPaging" :page-sizes="[8,16,32,64]" style="margin-top: 40px;"></ui_pagination>

      <el-button type="primary" @click="showCurrent(0)" class="butt_back">{{getStaticText('back') ? getStaticText('back') : '返回'}}</el-button>
    </div>

    <!--管理收获地址-->
    <div v-show="currentShow=='addressDetails'">
      <el-button type="primary" @click="addNewAddress()" style="margin:0px 0 20px 0;" id="ff">{{getStaticText('newReceiptAddress') ? getStaticText('newReceiptAddress') : '新增收货地址'}}</el-button>
      <el-dialog :title="getStaticText('newReceiptAddress') ? getStaticText('newReceiptAddress') : '新增收货地址'" :visible.sync="addAddressDialog" class="newAddAddress tdialog">
        <div class="newWrapper">
          <div>{{getStaticText('consignee') ? getStaticText('consignee') : '收货人'}}：</div>
          <input id="s_contactor" type="text" maxlength="40" v-model="newAddAddress.contactor" @blur="checkContactor()">
          <span class="warningInfo" v-if="emptyContactor">{{contactorError}}</span>
        </div>
        <div class="newWrapper">
          <div>{{getStaticText('receivingArea') ? getStaticText('receivingArea') : '收货地区'}}：</div>
          <div class="selectPCC">
            <!--<select id="s_province" name="s_province" @blur="checkArea()"></select>
            <select id="s_city" name="s_city" @blur="checkArea()"></select>
            <select id="s_county" name="s_county" @blur="checkArea()"></select>-->
            <!--edit by ma.jw-->
            <span id="s_province">{{form.city | myAddressCity}}</span>
            <span id="s_city">{{form.erae | myAddressErae}}</span>
            <span id="s_county">{{form.minerae | myAddressMinerae}}</span>
            <personalCenter_address v-if="addAddressDialog"></personalCenter_address>
          </div>
          <span class="warningInfo" v-if="emptyPCC">{{getStaticText('pleaseImproveProvincialAndMunicipalInformation') ? getStaticText('pleaseImproveProvincialAndMunicipalInformation') : '请完善省市信息'}}</span>
        </div>
        <div class="newWrapper">
          <div>{{getStaticText('detailedAddress') ? getStaticText('detailedAddress') : '详细地址'}}：</div>
          <input id="s_address" type="text" v-model="newAddAddress.address" @blur="checkDetail()">
          <span class="warningInfo" v-if="emptyDetail">{{getStaticText('pleaseFillInTheDetailedAddress') ? getStaticText('pleaseFillInTheDetailedAddress') : '请填写详细地址'}}</span>
        </div>
        <div class="newWrapper">
          <div>{{getStaticText('contactNumber') ? getStaticText('contactNumber') : '联系电话'}}：</div>
          <input id="s_phone" v-model="newAddAddress.phone" @blur="checkPhone()" maxlength="11">
          <span class="warningInfo" v-if="emptyPhone">{{phoneError}}</span>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="confirmNewAdd(false)">{{getStaticText('cancel') ? getStaticText('cancel') : '取 消'}}</el-button>
          <el-button type="primary" @click="confirmNewAdd(true)">{{getStaticText('confirm') ? getStaticText('confirm') : '确 定'}}</el-button>
        </div>
      </el-dialog>

      <el-table border :data="addresses" style="width: 100%" max-height="500">
        <el-table-column prop="contactor" :label="getStaticText('consignee') ? getStaticText('consignee') : '收货人'" width="140px">
        </el-table-column>
        <el-table-column :label="getStaticText('receivingAddress') ? getStaticText('receivingAddress') : '收货地址'" width="349px">
          <template slot-scope="scope">
            <span>{{ scope.row.province }}&nbsp{{ scope.row.city }}&nbsp{{ scope.row.county }}&nbsp{{ scope.row.address }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="phone" :label="getStaticText('phone') ? getStaticText('phone') :'电话'" width="130px">
        </el-table-column>
        <el-table-column :label="getStaticText('operation') ? getStaticText('operation') : '操作'" prop="action" width="250px">
          <template slot-scope="scope">
            <el-button @click="editClick(scope.$index, scope.row)" type="success" size="small">{{getStaticText('edit') ? getStaticText('edit') : '编辑'}}</el-button>
            <el-button type="danger" :disabled="true" size="small" v-show="scope.row.isDefault === '1'">{{getStaticText('delete') ? getStaticText('delete') : '删除'}}</el-button>
            <el-button @click="deleteAddress(scope.row.id)" type="danger" size="small" v-show="scope.row.isDefault === '0'">{{getStaticText('delete') ? getStaticText('delete') : '删除'}}
            </el-button>
            <el-button @click="setDefaultAddress(scope.row.id)" v-show="scope.row.isDefault === '0'" type="error" size="small">{{getStaticText('setAsDefault') ? getStaticText('setAsDefault') : '设为默认'}}
            </el-button>
            <el-button v-show="scope.row.isDefault === '1'" type="info" size="small">{{getStaticText('defaultAddress') ? getStaticText('defaultAddress') : '默认地址'}}</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog :title="getStaticText('modifyReceivingAddress') ? getStaticText('modifyReceivingAddress') : '修改收货地址'" :visible.sync="updateAddressDialog" class="newAddAddress tdialog">
        <div class="addressContent">
          <div class="newWrapper">
            <div>{{getStaticText('consignee') ? getStaticText('consignee') : '收货人'}}：</div>
            <input id="t_contactor" type="text" maxlength="40" v-model="address.contactor" @blur="checkContactor()">
            <span class="warningInfo" v-if="emptyContactor">{{getStaticText('pleaseFillInTheConsignee') ? getStaticText('pleaseFillInTheConsignee') : '请填写收货人'}}</span>
          </div>

          <div>
            <div>
              <span>{{getStaticText('receivingArea') ? getStaticText('receivingArea') : '收货地区'}}：</span>
              <span id="tt_city"></span>
              <span id="tt_erae"></span>
              <span id="tt_minerae"></span>
            </div>
            <el-form ref="form" :model="form">
              <el-form-item>
                <div>
                  <span> {{getStaticText('changeTo') ? getStaticText('changeTo') : '更 改 为'}} ：</span>
                  <span id="t_city">{{form.city | myAddressCity}}</span>
                  <span id="t_erae">{{form.erae | myAddressErae}}</span>
                  <span id="t_minerae">{{form.minerae | myAddressMinerae}}</span>
                  <!--<el-cascader :options="CityInfo" v-model="form.selectedOptions" :change-on-select="true" :clearable="true" :filterable="true" @change="handleChange">
                  </el-cascader>-->
                  <personalCenter_address v-if="updateAddressDialog"></personalCenter_address>
                </div>
              </el-form-item>
            </el-form>
            <span class="warningInfo" v-if="emptyPCC">{{getStaticText('pleaseImproveProvincialAndMunicipalInformation') ? getStaticText('pleaseImproveProvincialAndMunicipalInformation') : '请完善省市信息'}}</span>
          </div>
          <div class="newWrapper">
            <div>{{getStaticText('detailedAddress') ? getStaticText('detailedAddress') : '详细地址'}}：</div>
            <input id="t_address" type="text" v-model="address.address" @blur="checkDetail()">
            <span class="warningInfo" v-if="emptyDetail">{{getStaticText('pleaseFillInTheDetailedAddress') ? getStaticText('pleaseFillInTheDetailedAddress') : '请填写详细地址'}}</span>
          </div>
          <div class="newWrapper">
            <div>{{getStaticText('contactNumber') ? getStaticText('contactNumber') : '联系电话'}}：</div>
            <input id="t_phone" type="number" v-model="address.phone" @blur="checkPhone()" @keypress="checkNumberType($event)" maxlength="11">
            <span class="warningInfo" v-if="emptyPhone">{{getStaticText('pleaseFillInTheContactNumber') ? getStaticText('pleaseFillInTheContactNumber') : '请填写联系电话'}}</span>
          </div>
        </div>

        <div slot="footer" class="dialog-footer">
          <el-button @click="confirmUpdateAddress(false)">{{getStaticText('cancel') ? getStaticText('cancel') : '取 消'}}</el-button>
          <el-button type="primary" @click="confirmUpdateAddress(true)">{{getStaticText('confirm') ? getStaticText('confirm') : '确 定'}}</el-button>
        </div>
      </el-dialog>
      <el-button type="primary" @click="showCurrent(0)" class="butt_back">{{getStaticText('back') ? getStaticText('back') : '返回'}}</el-button>
    </div>
    <!--修改个人信息-->
    <div v-show="currentShow=='accountEdit'">

      <div class="main_right fl">
        <div class="wzdh_xgxx f14 color_6f6" style="padding:20px 120px 100px 220px">
          <div class="wzdh_xgxx_tx">
            <!--头像上传-->
            <el-upload class="avatar-uploader" :action="uploadUrl()" name="headPicUrl" :show-file-list="false" :on-progress="avatarLoading" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload" :headers="uploadHeader">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <img v-else v-bind:src="account.avatar || defaultPic" :alt="getStaticText('noAvatar') ? getStaticText('noAvatar') : '暂无头像'" />
            </el-upload>
          </div>
          <div class="mt15">
            <i class="wzdh_xgxx_bdmc mr08"></i>{{getStaticText('titleOfAccount') ? getStaticText('titleOfAccount') : '账户名称'}}:
            <span v-text="account && account.loginName"></span>
            <el-button type="primary" @click="cryptoguar = true" class="butt" v-if="CONFIG.secretQuestionBtnHide==undefined || CONFIG.secretQuestionBtnHide == false && account.questions == ''">{{getStaticText('settingUpSecretProtection') ? getStaticText('settingUpSecretProtection') : '设置密保问题'}}</el-button>
          </div>
          <div class="mt30 mb30">
            <div v-if="account && account.email">
              <i class="wzdh_xgxx_bdyx mr08"></i>{{getStaticText('bindTheMailbox') ? getStaticText('bindTheMailbox') : '绑定邮箱'}}:
              <span v-text="account && account.email"></span>
              <el-button type="primary" @click="modifyInformation(3)" class="butt">{{getStaticText('amendTheMailbox') ? getStaticText('amendTheMailbox') : '修改邮箱'}}</el-button>
            </div>
            <div v-if="!account.email">
              <i class="wzdh_xgxx_bdyx mr08"></i>{{getStaticText('bindTheMailbox') ? getStaticText('bindTheMailbox') : '绑定邮箱'}}:
              <span>{{getStaticText('temporaryBinding') ? getStaticText('temporaryBinding') : '暂未绑定'}}</span>
              <el-button type="primary" @click="emailDialog = true" class="butt">{{getStaticText('bindTheMailbox') ? getStaticText('bindTheMailbox') : '绑定邮箱'}}</el-button>
            </div>
          </div>

          <div class="mt30 mb30">
            <div v-if="account && account.mobileno">
              <i class="wzdh_xgxx_bdhm mr08"></i>{{getStaticText('phoneNumber') ? getStaticText('phoneNumber') : '手机号码'}}:
              <span v-text="account && account.mobileno"></span>
              <el-button type="primary" class="butt" @click="modifyInformation(2)">{{getStaticText('modifyCellPhoneNumber') ? getStaticText('modifyCellPhoneNumber') :'修改手机号'}}</el-button>
            </div>

            <div v-if="account.mobileno ==''">
              <el-button type="primary" @click="setMobileDialog = true" class="butt">{{getStaticText('bindCellPhoneNumber') ? getStaticText('bindCellPhoneNumber') :'绑定手机号'}}</el-button>
            </div>
          </div>

          <div class="wzdh_xgxx_tj modifyInfo">
            <el-button type="primary " @click="modifyInformation(1)" class="f14">{{getStaticText('changePassword') ? getStaticText('changePassword') : '修改密码'}}</el-button>
          </div>
          <div class="wzdh_xgxx_tj">
            <!--<el-button type="primary" @click="modifyInformation(1)" class="f14">修改密码</el-button>-->
            <!--<el-button type="primary" @click="modifyInformation(1)" class="f14">{{getStaticText('changePassword') ? getStaticText('changePassword') : '修改密码'}}</el-button>-->
            <el-button type="primary" @click="modifyInfor(10)" class="f14" v-if="CONFIG.staticText&&CONFIG.staticText.editInfo?true:false">{{getStaticText('editInfoText') ? getStaticText('editInfoText') :'编辑信息'}}</el-button>
          </div>
        </div>
        <el-button type="primary" @click="showCurrent(0)" class="butt_back">{{getStaticText('return') ? getStaticText('return') :'返回'}}</el-button>
        <!-- 设置密保问题弹窗 -->
        <el-dialog :title="getStaticText('settingUpSecretProtection') ? getStaticText('settingUpSecretProtection') : '设置密保问题'" :visible.sync="cryptoguar">
          <el-form ref="cryptoguarForm" :model="cryptoguarForm" :rules="cryptoguarRules" style="margin-top: 15px;">
            <el-form-item prop="answer">
              <el-input :placeholder="getStaticText('pleaseInputTheAnswersToTheSelectedConfidentialQuestions') ? getStaticText('pleaseInputTheAnswersToTheSelectedConfidentialQuestions') : '请输入所选密保问题答案'" v-model="cryptoguarForm.answer">
                <el-select v-model="cryptoguarForm.questionId" slot="prepend" :placeholder="getStaticText('pleaseSelectSecretInsurance') ? getStaticText('pleaseSelectSecretInsurance') : '请选择密保问题'" style="width: 160px;">
                  <el-option :label="getStaticText('whichCityWereYouBornIn') ? getStaticText('whichCityWereYouBornIn') : '您出生地是哪个城市'+'？'" value="1"></el-option>
                  <el-option :label="getStaticText('yourFatherName') ? getStaticText('yourFatherName') :'您父亲的名字是'+'？'" value="2"></el-option>
                  <el-option :label="getStaticText('yourMotherName') ? getStaticText('yourMotherName') : '您母亲的名字是'+'？'" value="3"></el-option>
                </el-select>
              </el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="cryptoguar = false">{{getStaticText('cancel') ? getStaticText('cancel') : '取 消'}}</el-button>
            <el-button type="primary" @click="submitCryptoguarForm('cryptoguarForm')">{{getStaticText('confirm') ? getStaticText('confirm') : '确 定'}}</el-button>
          </div>
        </el-dialog>
        <!-- 设置手机号弹窗-->
        <!---->
        <el-dialog :title="getStaticText('bindCellPhoneNumber') ? getStaticText('bindCellPhoneNumber') : '绑定手机号'" :visible.sync="setMobileDialog">
          <div style="margin:20px 170px 0 200px">
            <el-form ref="setMobileDialogForm" :model="setMobileDialogForm" :rules="setMobileDialogRules" style="margin-top: 15px;">
              <el-form-item prop="number" class="bindPhone">
                <div class="bangding_con_1_sj mt30">
                  <i class="sj_01 mr05"></i>
                  <span class="sj_02 f14 color_727 mr15">{{getStaticText('phoneNum') ? getStaticText('phoneNum') : '手机号'}}:</span>
                  <el-input type="text" v-model="setMobileDialogForm.number" :placeholder="getStaticText('pleaseEnterCellPhoneNumber') ? getStaticText('pleaseEnterCellPhoneNumber') :'请输入手机号'" style="width:200px;height:35px;"></el-input>
                  <el-button @click="getCode(setMobileDialogForm.number)" class="yzm_04 color_7e7">{{getStaticText('sendVerificationCode') ? getStaticText('sendVerificationCode') : '发送验证码'}}</el-button>
                </div>
              </el-form-item>
              <el-form-item prop="sendNum" class="bindPhone">
                <i class="yzm_01 mr05"></i>
                <span class="yzm_02 f14 color_727 mr15">{{getStaticText('checkNumber') ? getStaticText('checkNumber') : '验证码'}}:</span>
                <el-input type="text" v-model="setMobileDialogForm.sendNum" :placeholder="getStaticText('pleaseEnterYourPhoneVerificationCode') ? getStaticText('pleaseEnterYourPhoneVerificationCode') : '请输入手机验证码'" style="width:200px;height:35px;"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div slot="footer" class="dialog-footer">
            <el-button @click="setMobileDialog = false">{{getStaticText('cancel') ? getStaticText('cancel') : '取 消'}}</el-button>
            <el-button type="primary" @click="submitSetMobileWindowForm('setMobileDialogForm')">{{getStaticText('confirm') ? getStaticText('confirm') : '确 定'}}</el-button>
          </div>
        </el-dialog>

        <!-- 修改密码弹窗 -->
        <el-dialog :title="getStaticText('changePassword') ? getStaticText('changePassword') :'修改密码'" :visible.sync="dialogFormVisible">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item :label="getStaticText('oldPassword') ? getStaticText('oldPassword') : '旧密码'" prop="oldPass" :label-width="formLabelWidth">
              <el-input type="password" v-model="ruleForm.oldPass" auto-complete="off" :placeholder="getStaticText('pleaseChooseTheOldPassword') ? getStaticText('pleaseChooseTheOldPassword') : '请选择旧密码'"></el-input>
            </el-form-item>
            <el-form-item :label="getStaticText('newPassword') ? getStaticText('newPassword') : '新密码'" prop="pass" :label-width="formLabelWidth">
              <el-input type="password" v-model="ruleForm.pass" auto-complete="off" :placeholder="getStaticText('pleaseSelectTheNewPassword') ? getStaticText('pleaseSelectTheNewPassword') : '请选择新密码'"></el-input>
            </el-form-item>
            <el-form-item :label="getStaticText('repeatTheNewPassword') ? getStaticText('repeatTheNewPassword') : '重复新密码'" prop="checkPass" :label-width="formLabelWidth">
              <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" :placeholder="getStaticText('pleaseChooseTheNewPasswordAgain') ? getStaticText('pleaseChooseTheNewPasswordAgain') : '请再次选择新密码'"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">{{getStaticText('cancel') ? getStaticText('cancel') : '取 消'}}</el-button>
            <el-button @click="resetForm('ruleForm')">{{getStaticText('reset') ? getStaticText('reset') : '重置'}}</el-button>
            <el-button type="primary" @click="submitForm('ruleForm'),dialogFormVisible = false">{{getStaticText('confirm') ? getStaticText('confirm') : '确 定'}}</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
    <!-- 邮箱弹出框  -->
    <el-dialog :title="getStaticText('mailbox') ? getStaticText('mailbox') : '邮箱'" :visible.sync="emailDialog" width="600px">
      <el-form :model="emailForm" :rules="emailRules" ref="emailForm">
        <el-form-item v-if="!getShowEmailPostfix()" :label="getStaticText('mailbox') ? getStaticText('mailbox') : '邮箱'" prop="email">
          <el-input id="center_account-input-email" class="center_account-input-email" type="text" v-model="emailForm.email" auto-complete="off" :placeholder="getStaticText('pleaseInputTheMailbox') ? getStaticText('pleaseInputTheMailbox') : '请输入邮箱'"></el-input>
        </el-form-item>
        <el-form-item v-if="getShowEmailPostfix()" :label="getStaticText('mailbox') ? getStaticText('mailbox') : '邮箱'" prop="emailSubfix">
          <el-input class="center_account_subfix-email_input" type="text" v-model="emailForm.emailSubfix" :placeholder="getStaticText('pleaseInputTheMailbox') ? getStaticText('pleaseInputTheMailbox') : '请输入邮箱'"></el-input>
          @
          <el-select class="center_account-postfix_email_select" v-model="emailForm.emailPostfix" :placeholder="getStaticText('mailbox') ? getStaticText('mailbox') : '邮箱'">
            <el-option v-for="(item,index) in GLOBLE_CONFIG.EMAIL_CONFIG.postfix" :key="index" :label="item" :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="emailDialog = false">{{getStaticText('cancel') ? getStaticText('cancel') : '取 消'}}</el-button>
        <el-button type="primary" @click="changeEmail">{{getStaticText('confirm') ? getStaticText('confirm') : '确 定'}}</el-button>
      </span>
    </el-dialog>

    <!--验证身份-->
    <div v-show="currentShow=='Verification'" style="width:900px;">
      <el-tabs v-model="activeName">
        <el-tab-pane :label="getStaticText('mailboxVerification') ? getStaticText('mailboxVerification') : '邮箱验证'" name="first">
          <div class="main_right fl">
            <div class="wzdh_xgyx f14 color_6f6">
              <div class="wzdh_xgyx_ico account_modify-icon"></div>
              <div class="account_modify-form">
                <div v-if="account.email ==''">
                  <span style="display:inline-block;margin:20px;">{{getStaticText('pleaseBindTheMailboxFirst') ? getStaticText('pleaseBindTheMailboxFirst') : '请先绑定邮箱'}}</span>
                  <el-button type="primary" @click="emailDialog = true">{{getStaticText('bindTheMailbox') ? getStaticText('bindTheMailbox') : '绑定邮箱'}}</el-button>
                </div>
                <el-form :model="emailValidateNum" :rules="emailValidateNumRules" ref="emailValidateNum" v-if="account.email !=''">
                  <el-form-item :label="getStaticText('bindTheMailbox') ? getStaticText('bindTheMailbox') : '绑定邮箱'+':'" prop="email">
                    <span>{{account && account.email}}</span>
                    <el-button type="primary" @click="submitEmailValidateForm" size="small" v-show="vcodeButt">{{getStaticText('sendVerificationCode') ? getStaticText('sendVerificationCode') : '发送验证码'}}</el-button>
                  </el-form-item>
                  <el-form-item :label="(getStaticText('mailboxVerificationCode') ? getStaticText('mailboxVerificationCode') : '邮箱验证码')+':'" prop="emailnum" v-if="butt">
                    <el-input type="text" v-model="emailValidateNum.emailnum" auto-complete="off" :placeholder="getStaticText('pleaseEnterTheMailboxVerificationCode') ? getStaticText('pleaseEnterTheMailboxVerificationCode') : '请输入邮箱验证码'" style="display:inline-block;width:220px;"></el-input>
                    <span style="margin-left:10px;color:red" v-show="!!emailTime">{{emailTime}}{{getStaticText('seconds') ? getStaticText('seconds') : 's'}}</span>
                  </el-form-item>
                  <div>
                    <el-button type="primary" @click="submitEmailValidateNum('emailValidateNum')" v-if="butt">{{getStaticText('next') ? getStaticText('next') : '下一步'}}</el-button>
                    <el-button type="text" :disabled="true" class="button" v-show="!butt">{{getStaticText('theVerificationCodeIsInvalid') ? getStaticText('theVerificationCodeIsInvalid') : '验证码已失效，请重新验证'}}</el-button>
                  </div>
                </el-form>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <!-- 手机号验证 -->
        <el-tab-pane :label="getStaticText('mobilePhoneNumberVerification') ? getStaticText('mobilePhoneNumberVerification') : '手机号验证'" name="second" v-if="account.mobileno !=''">
          <div class="main_right fl">
            <div class="wzdh_yzsjh f14 color_6f6">
              <div class="wzdh_yzsjh_ico account_modify-icon"></div>
              <div class="account_modify-form">
                <el-form :model="oldMobileValidateForm" :rules="oldMobileValidateFormRules" ref="oldMobileValidateForm">
                  <el-form-item :label="(getStaticText('bindCellPhoneNumber') ? getStaticText('bindCellPhoneNumber') : '绑定手机号')+':'">
                    <span>{{account && account.mobileno}}</span>
                    <el-button type="primary" size="small" @click="getOldCode(account.mobileno)">{{getStaticText('sendVerificationCode') ? getStaticText('sendVerificationCode') : '发送验证码'}}</el-button>
                  </el-form-item>
                  <el-form-item :label="getStaticText('mobileVerificationCode') ? getStaticText('mobileVerificationCode') : '手机验证码'+':'" prop="oldSendNum">
                    <el-input type="text" v-model="oldMobileValidateForm.oldSendNum" auto-complete="off" :placeholder="getStaticText('pleaseEnterYourPhoneVerificationCode') ? getStaticText('pleaseEnterYourPhoneVerificationCode') : '请输入手机验证码'" style="display:inline-block;width:220px;"></el-input>
                    <span style="margin-left:10px;color:red" v-if="butt_phone" v-show="!!phoneTime">{{phoneTime}}{{getStaticText('seconds') ? getStaticText('seconds') : 's'}}</span>
                  </el-form-item>
                  <div>
                    <el-button type="primary" @click="submitMobileValidateNum('oldMobileValidateForm')" v-if="butt">{{getStaticText('next') ? getStaticText('next') : '下一步'}}</el-button>
                  </div>
                </el-form>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <!-- 密保问题验证  -->
        <el-tab-pane :label="getStaticText('securityQuestionVerify') ? getStaticText('securityQuestionVerify') : '密保问题验证'" name="third"  v-if="CONFIG.secretQuestionBtnHide == undefined || CONFIG.secretQuestionBtnHide == false && account.questions !=''">
          <div class="main_right fl">
            <div class="wzdh_bmwtyz f14 color_6f6">
              <div class="wzdh_bmwtyz_ico account_modify-icon"></div>
              <div class="account_modify-form">
                <el-form :model="questionsValidateForm" :rules="questionsValidateRules" ref="questionsValidateForm">
                  <el-form-item :label="(getStaticText('securityQuestion') ? getStaticText('securityQuestion') : '密保问题')+':'">
                    <div v-if="account.questions==1">{{getStaticText('whichCityWereYouBornIn') ? getStaticText('whichCityWereYouBornIn') : '您出生地是哪个城市'}}？</div>
                    <div v-if="account.questions==2">{{getStaticText('yourFatherName') ? getStaticText('yourFatherName') : '您父亲的名字是'}}？</div>
                    <div v-if="account.questions==3">{{getStaticText('yourMotherName') ? getStaticText('yourMotherName') : '您母亲的名字是'}}？</div>
                  </el-form-item>
                  <el-form-item :label="(getStaticText('answerToTheSecretInsurance') ? getStaticText('answerToTheSecretInsurance') : '密保答案') +':'" prop="answer">
                    <el-input type="text" v-model="questionsValidateForm.answer" auto-complete="off" :placeholder="getStaticText('pleaseEnterTheAnswerToSecretInsurance') ? getStaticText('pleaseEnterTheAnswerToSecretInsurance') : '请输入密保问题答案'" style="display:inline-block;width:200px;"></el-input>
                  </el-form-item>
                  <div>
                    <el-button type="primary" @click="submitQuestionsValidateNum('questionsValidateForm')">{{getStaticText('next') ? getStaticText('next') : '下一步'}}</el-button>
                  </div>
                </el-form>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <!-- 金融二期（pc）密码验证 -->
        <el-tab-pane :label="getStaticText('passwordVerify') ? getStaticText('passwordVerify') : '密码验证'" name="forth" v-if="CONFIG.pswVerifyOption == true">
          <div class="main_right fl">
            <div class="wzdh_bmwtyz f14 color_6f6">
              <div class="account_modify-form">
                <el-form :model="passwordValidateForm" :rules="passwordValidateFormRules" ref="passwordValidateForm">
                  <el-form-item :label="(getStaticText('passwordValidate') ? getStaticText('passwordValidate') : '密码') +':'" prop="passwordValidate">
                    <el-input type="password" v-model="passwordValidateForm.passwordValidate" auto-complete="off" style="display:inline-block;width:200px;"></el-input>
                    <div>
                      忘记原密码？可以
                      <a style="color: #2e6da4;cursor: pointer;" @click="changeActiveName('second')">手机号验证</a>
                      或
                      <a style="color: #2e6da4;cursor: pointer;" @click="changeActiveName('first')">邮箱验证</a>
                    </div>
                  </el-form-item>
                  <div>
                    <el-button type="primary" @click="submitPasswordValidateNum('passwordValidateForm')">{{getStaticText('next') ? getStaticText('next') : '下一步'}}</el-button>
                  </div>
                </el-form>
              </div>
            </div>
          </div>
        </el-tab-pane>

      </el-tabs>
      <el-button type="primary" @click="back" class="butt_back">{{getStaticText('return') ? getStaticText('return') : '返回'}}</el-button>
    </div>
    <!-- 通过验证身份修改密码 -->
    <div v-show="currentShow=='modifyPassword'">
      <div class="main_right fl">
        <div class="wzdh_xgmm f14 color_6f6">
          <div class="wzdh_xgmm_ico account_modify-icon"></div>
          <div class="account_modify-form ">
            <el-form :model="modifyPassword" :rules="modifyPasswordrules" ref="modifyPassword">
              <el-form-item :label="(getStaticText('pleaseSetNewPwd') ? getStaticText('pleaseSetNewPwd') : '请设置新密码')+':'" prop="pass">
                <el-input type="password" v-model="modifyPassword.pass" auto-complete="off" :placeholder="(getStaticText('pleaseSetNewPwd') ? getStaticText('pleaseSetNewPwd') : '请设置新密码')" style="display:inline-block;width:200px;"></el-input>
              </el-form-item>
              <el-form-item :label="(getStaticText('pleaseConfirmTheNewPassword') ? getStaticText('pleaseConfirmTheNewPassword') : '请确认新密码')+':'" prop="checkPass">
                <el-input type="password" v-model="modifyPassword.checkPass" auto-complete="off" :placeholder="(getStaticText('pleaseConfirmTheNewPassword') ? getStaticText('pleaseConfirmTheNewPassword') : '请确认新密码')+':'" style="display:inline-block;width:200px;"></el-input>
              </el-form-item>
              <div>
                <el-button type="primary" @click="submitModifyPassword('modifyPassword')">{{getStaticText('submit') ? getStaticText('submit') :'提交'}}</el-button>
              </div>
            </el-form>
          </div>
        </div>
      </div>
      <el-button type="primary" @click="back" class="butt_back">{{getStaticText('return') ? getStaticText('return') : '返回'}}</el-button>
    </div>
    <!-- 通过验证身份修改手机号 -->
    <!---->
    <div v-show="currentShow=='modifyMobile'">
      <div class="main_right fl">
        <div class="wzdh_yzsjh f14 color_6f6">
          <div class="wzdh_yzsjh_ico account_modify-icon"></div>
          <div class="account_modify-form" style="width:505px;">
            <el-form ref="setMobileDialogForm" :model="setMobileDialogForm" :rules="setMobileDialogRules" style="margin-top: 15px;">
              <el-form-item prop="number" class="newPhoneNum">
                <div class="bangding_con_1_sj mt30">
                  <i class="sj_01 mr05"></i>
                  <span class="sj_02 f14 color_727 mr15">{{getStaticText('newPhoneNumber') ? getStaticText('newPhoneNumber') :'新手机号'}}:</span>
                  <el-input type="text" v-model="setMobileDialogForm.number" :placeholder="getStaticText('pleaseEnterCellPhoneNumber') ? getStaticText('pleaseEnterCellPhoneNumber') :'请输入手机号'" style="width:200px;height:35px;"></el-input>
                  <el-button @click="getCode(setMobileDialogForm.number)" class="yzm_04 color_7e7">{{getStaticText('sendVerificationCode') ? getStaticText('sendVerificationCode') : '发送验证码'}}</el-button>
                </div>
              </el-form-item>
              <el-form-item prop="sendNum" class="newPhoneNum">
                <i class="yzm_01 mr05"></i>
                <span class="yzm_02 f14 color_727 mr15" style="margin-right:15px;">{{getStaticText('checkNumber') ? getStaticText('checkNumber') : '验证码'}}:</span>
                <el-input type="text" v-model="setMobileDialogForm.sendNum" :placeholder="getStaticText('pleaseEnterYourPhoneVerificationCode') ? getStaticText('pleaseEnterYourPhoneVerificationCode') : '请输入手机验证码'" style="width:200px;height:35px;"></el-input>
              </el-form-item>
              <el-button type="primary" @click="submitChangeMobile('setMobileDialogForm')">{{getStaticText('bind') ? getStaticText('bind') : '绑 定'}}</el-button>
            </el-form>
          </div>
        </div>
      </div>
      <el-button type="primary" @click="back" class="butt_back">{{getStaticText('return') ? getStaticText('return') : '返回'}}</el-button>
    </div>
    <!-- 通过验证身份修改邮箱 -->
    <div v-show="currentShow == 'modifyEmail'">
      <div class="main_right fl">
        <div class="wzdh_xgyx f14 color_6f6">
          <div class="wzdh_xgyx_ico account_modify-icon"></div>
          <div class="account_modify-form" style="width:505px;">
            <el-form :model="emailForm" :rules="emailRules" ref="emailForm">
              <el-form-item v-if="!getShowEmailPostfix()" :label="'新邮箱：'" prop="email">
                <el-input id="center_account-input-email" class="center_account-input-email" type="text" v-model="emailForm.email" auto-complete="off" :placeholder="'请输入邮箱'"></el-input>
              </el-form-item>
              <el-form-item v-if="getShowEmailPostfix()" :label="'新邮箱：'" prop="emailSubfix">
                <el-input class="center_account_subfix-email_input" type="text" v-model="emailForm.emailSubfix" :placeholder="getStaticText('pleaseInputTheMailbox') ? getStaticText('pleaseInputTheMailbox') : '请输入邮箱'"></el-input>
                @
                <el-select class="center_account-postfix_email_select" v-model="emailForm.emailPostfix" :placeholder="getStaticText('mailbox') ? getStaticText('mailbox') : '邮箱'">
                  <el-option v-for="(item,index) in GLOBLE_CONFIG.EMAIL_CONFIG.postfix" :key="index" :label="item" :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="changeEmail">{{getStaticText('confirm') ? getStaticText('confirm') : '确 定'}}</el-button>
            </span>
          </div>
        </div>
      </div>
      <el-button type="primary" @click="back" class="butt_back">{{getStaticText('return') ? getStaticText('return') : '返回'}}</el-button>
    </div>
    <!--查看下载币-->
    <div v-show="currentShow=='virtualMoney'">
      <div class="num">
        <ul>
          <el-radio-group v-model="virtualValue">
            <li>
              <el-radio :label="5">5{{getStaticText('yuan') ? getStaticText('yuan') : '元'}} &nbsp&nbsp &nbsp &nbsp &nbsp &nbsp{{getStaticText('exchange') ? getStaticText('exchange') : '兑换'}}500{{getStaticText('downloadedCurrency') ? getStaticText('downloadedCurrency') : '下载币'}}</el-radio>
            </li>
            <li>
              <el-radio :label="10">10{{getStaticText('yuan') ? getStaticText('yuan') : '元'}} &nbsp &nbsp &nbsp &nbsp {{getStaticText('exchange') ? getStaticText('exchange') : '兑换'}}1000{{getStaticText('downloadedCurrency') ? getStaticText('downloadedCurrency') : '下载币'}}</el-radio>
            </li>
            <li>
              <el-radio :label="20">20{{getStaticText('yuan') ? getStaticText('yuan') : '元'}} &nbsp &nbsp &nbsp &nbsp {{getStaticText('exchange') ? getStaticText('exchange') : '兑换'}}2000{{getStaticText('downloadedCurrency') ? getStaticText('downloadedCurrency') : '下载币'}}</el-radio>
            </li>
            <li>
              <el-radio :label="50">50{{getStaticText('yuan') ? getStaticText('yuan') : '元'}} &nbsp &nbsp &nbsp &nbsp {{getStaticText('exchange') ? getStaticText('exchange') : '兑换'}}5000{{getStaticText('downloadedCurrency') ? getStaticText('downloadedCurrency') : '下载币'}}</el-radio>
            </li>
            <li>
              <el-radio :label="100">100{{getStaticText('yuan') ? getStaticText('yuan') : '元'}} &nbsp &nbsp &nbsp {{getStaticText('exchange') ? getStaticText('exchange') : '兑换'}}10000{{getStaticText('downloadedCurrency') ? getStaticText('downloadedCurrency') : '下载币'}}</el-radio>
            </li>
          </el-radio-group>
        </ul>
        <div class="butt">
          <el-button type="primary" size="large" @click="showCurrent(5)">{{getStaticText('confirmTheRecharge') ? getStaticText('confirmTheRecharge') : '确认充值'}}</el-button>
        </div>
      </div>

      <div class="addressDetails">
        <el-table border :data="virtualMoneyList.data" style="width: 100%">
          <el-table-column type="index" width="150" :label="getStaticText('serialNumber') ? getStaticText('serialNumber') : '序号'" align="center">
          </el-table-column>
          <el-table-column :label="getStaticText('type') ? getStaticText('type') : '类型'" prop="flag" align="center" :formatter="typeFormat">
          </el-table-column>
          <el-table-column :label="getStaticText('value') ? getStaticText('value') : '数值'" prop="price" align="center" sortable>
          </el-table-column>
          <el-table-column :label="getStaticText('time') ? getStaticText('time') : '时间'" prop="chargeTime" align="center" sortable>
          </el-table-column>
        </el-table>
        <ui_pagination :pageMessage="{totalCount: this.virtualMoneyList.data && this.virtualMoneyList.totalCount - 0 || 0}" :page-sizes="[8,16,32,64]" :excuteFunction="virtualPaging"></ui_pagination>
      </div>
      <el-button type="primary" @click="showCurrent(0)" class="butt_back">{{getStaticText('return') ? getStaticText('return') : '返回'}}</el-button>
    </div>
    <!--下载币充值-->
    <div v-show="currentShow=='virtualPay'">
      <div class="pay">
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple">&nbsp &nbsp &nbsp{{getStaticText('paymentProject') ? getStaticText('paymentProject') : '支付项目'}}</div>
          </el-col>
        </el-row>
        <div class="ml30">{{getStaticText('rechargeDownloadCurrency') ? getStaticText('rechargeDownloadCurrency') : '充值下载币'}} {{this.virtualValue}}00</div>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple">&nbsp &nbsp &nbsp {{getStaticText('paymentMethod') ? getStaticText('paymentMethod') : '支付方式'}}</div>
          </el-col>
        </el-row>
        <div v-if="paymentList.length==0" class="ml30">
          {{getStaticText('noPaymentMethod') ? getStaticText('noPaymentMethod') : '暂无支付方式'}}
        </div>
        <div v-else>
          <el-radio-group v-model="payWay" size="small" fill="#f6163c">
            <span v-for="(pay, index) in paymentList" :key="index" @click="selectPayWay(pay.payCode)">
              <el-radio :label="index">{{pay.payName}}</el-radio>
            </span>
          </el-radio-group>
          <div class="paybutt">
            <p>{{getStaticText('amountPayable') ? getStaticText('amountPayable') : '应付金额'}}：{{this.virtualValue}}.00{{getStaticText('yuan') ? getStaticText('yuan') : '元'}}</p>
            <el-button type="primary" class="butt_back" @click="RechargeVirtual">{{getStaticText('placeOrder') ? getStaticText('placeOrder') : '提交订单'}}</el-button>
          </div>
        </div>
      </div>
    </div>
    <!--修改个人信息-->
    <div v-if="currentShow=='modifyInfo'">
      <el-radio v-model="userMode" label="1">{{getStaticText('ordinaryUserText') ? getStaticText('ordinaryUserText') :'普通用户'}}</el-radio>
      <el-radio v-model="userMode" label="2">{{getStaticText('teacherUserText') ? getStaticText('teacherUserText') :'教师用户'}}</el-radio>
      <div>
        <el-form  ref="form" :model="modifyUserNav" label-width="80px">
          <el-form-item label="姓名" v-if="userMode==1||userMode==2" >
            <el-input v-model="modifyUserNav.loginName"></el-input>
          </el-form-item>
          <div v-if="userMode==2">
            <el-form-item label="职务">
              <el-input v-model="modifyUserNav.job"></el-input>
            </el-form-item>
            <el-form-item label="职称">
              <el-select v-model="modifyUserNav.positio" placeholder="职称">
                <el-option v-for="(item,index) in modifyUser.positio"  :key="index" :label="item" :value="item">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="电话">
              <el-input v-model="modifyUserNav.mobileNo"></el-input>
            </el-form-item>
          </div>
          <div v-if="userMode==1">
            <el-form-item label="行业" >
              <el-select v-model="modifyUserNav.industry" placeholder="请选择行业">
                <el-option v-for="(item,index) in modifyUser.industry"  :key="index" :label="item" :value="item">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="教育程度" >
              <el-select v-model="modifyUserNav.educated" placeholder="请选择教育程度" >
                <el-option v-for="(item,index) in modifyUser.educated"  :key="index" :label="item" :value="item">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div v-if="userMode==1||userMode==2" >
            <el-form-item label="所在省份" >
              <el-select v-model="modifyUserNav.areainfo" placeholder="请选择所在省份" >
                <el-option v-for="(item,index) in modifyUser.areainfo"  :key="index" :label="item" :value="item">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="具体地址">
              <el-input type="textarea" v-model="modifyUserNav.address" ></el-input>
            </el-form-item>
          </div>
          <div v-if="userMode==2">
            <el-form-item label="执教学校">
              <el-input  v-model="modifyUserNav.company"></el-input>
            </el-form-item>
            <el-form-item label="所属院系">
              <el-input  v-model="modifyUserNav.faculty"></el-input>
            </el-form-item>
            <el-form-item label="教研室">
              <el-input  v-model="modifyUserNav.staffRoom"></el-input>
            </el-form-item>
            <el-form-item label="教学层次">
              <el-select v-model="modifyUserNav.teachLevel" placeholder="请选择所在省份" >
                <el-option v-for="(item,index) in modifyUser.teachLevel"  :key="index" :label="item" :value="item">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="教学专业" v-if="userMode==2">
              <el-input  v-model="modifyUserNav.subject"></el-input>
            </el-form-item>
            <el-form-item label="教学课程" v-if="userMode==2">
              <el-input type="textarea" v-model="modifyUserNav.teachCourse" ></el-input>
            </el-form-item>
          </div>

          <el-form-item label="邮政编码" v-if="userMode==2||userMode==1">
            <el-input type="textarea" v-model="modifyUserNav.postcode" ></el-input>
          </el-form-item>
          <el-form-item label="关注图书分类" prop="type" v-if="userMode==1||userMode==2">
            <el-checkbox-group v-model="modifyUserNav.bookClassifyConcerned">
              <el-checkbox v-for="(item,index) in modifyUser.bookClassifyConcerned" :key="index" :label="item" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-button type="primary"  class="butt_back" @click="ordinaryUserSave(modifyUserNav)">保存</el-button>
          <el-button type="primary" @click="showCurrent(0)" class="butt_back">返回</el-button>
        </el-form>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
import { Get, Token } from "@common";
import api from "../../api/personalCenterApi";
import $ from "jquery";
import { CityInfo } from "../../assets/js/city-data.js";
import * as interfaces from '@work/login/common/interfaces.js';

Vue.use(Vuex);
Vue.prototype.$ajax = axios;

export default {
  name: "personalCenter_account",
  reused: true,
  props: {
    namespace: String,
    parentConfig: Object,
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
        callback(
          new Error(
            this.getStaticText("pleaseInputTheOldPassword")
              ? this.getStaticText("pleaseInputTheOldPassword")
              : "请输入旧密码"
          )
        );
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(
          new Error(
            this.getStaticText("pleaseEnterNewPassword")
              ? this.getStaticText("pleaseEnterNewPassword")
              : "请输入新密码"
          )
        );
      } else if (value === this.ruleForm.oldPass) {
        callback(
          new Error(
            this.getStaticText("consistentWithTheOriginalPassword")
              ? this.getStaticText("consistentWithTheOriginalPassword")
              : "与原密码一致"
          )
        );
      } else if (value.length <= 5) {
        callback(
          new Error(
            this.getStaticText("thePasswordIsAtLeast6Digits")
              ? this.getStaticText("thePasswordIsAtLeast6Digits")
              : "密码至少为6位数"
          )
        );
      } else if (value.length >= 16) {
        callback(
          new Error(
            this.getStaticText("theMaximumNumberOfPasswordsIs16Digits")
              ? this.getStaticText("theMaximumNumberOfPasswordsIs16Digits")
              : "密码最多为16位数"
          )
        );
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass3 = (rule, value, callback) => {
      if (value === "") {
        callback(
          new Error(
            this.getStaticText("pleaseInputTheNewPasswordAgain")
              ? this.getStaticText("pleaseInputTheNewPasswordAgain")
              : "请再次输入新密码"
          )
        );
      } else if (value !== this.ruleForm.pass) {
        callback(
          new Error(
            this.getStaticText("twoInputPasswordIsInconsistent")
              ? this.getStaticText("twoInputPasswordIsInconsistent")
              : "两次输入密码不一致!"
          )
        );
      } else {
        callback();
      }
    };
    var validateAnswer = (rule, value, callback) => {
      if (value === "") {
        callback(
          new Error(
            this.getStaticText("pleaseSetUpTheAnswerToSecretInsurance")
              ? this.getStaticText("pleaseSetUpTheAnswerToSecretInsurance")
              : "请设置密保问题答案"
          )
        );
      } else if (this.cryptoguarForm.questionId == "") {
        callback(
          new Error(
            this.getStaticText("pleaseSelectSecretInsurance")
              ? this.getStaticText("pleaseSelectSecretInsurance")
              : "请选择密保问题"
          )
        );
      } else {
        this.cryptoguar = false;
        callback();
      }
    };

    var validateEmailFull = (rule, value, callback) => {
      if (value === "") {
        callback(
          new Error(
            this.getStaticText("pleaseInputTheMailbox")
              ? this.getStaticText("pleaseInputTheMailbox")
              : "请输入邮箱"
          )
        );
      } else if (
        !/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(
          value
        )
      ) {
        callback(
          new Error(
            this.getStaticText("incorrectMailboxFormat")
              ? this.getStaticText("incorrectMailboxFormat")
              : "邮箱格式不正确"
          )
        );
      } else {
        callback();
      }
    };

    var validateEmailSubfix = (rule, value, callback) => {
      if (value === "") {
        callback(
          new Error(
            this.getStaticText("pleaseInputTheMailbox")
              ? this.getStaticText("pleaseInputTheMailbox")
              : "请输入邮箱"
          )
        );
      } else if (!/^[A-Za-z\d_]+$/.test(value)) {
        callback(
          new Error(
            this.getStaticText("incorrectMailboxFormat")
              ? this.getStaticText("incorrectMailboxFormat")
              : "邮箱格式不正确"
          )
        );
      } else {
        callback();
      }
    };
    var validateEmailnum = (rule, value, callback) => {
      if (value === "") {
        callback(
          new Error(
            this.getStaticText("pleaseEnterTheMailboxVerificationCode")
              ? this.getStaticText("pleaseEnterTheMailboxVerificationCode")
              : "请输入邮箱验证码"
          )
        );
      } else if (value != this.findNum) {
        callback(
          new Error(
            this.getStaticText("verificationCodeError")
              ? this.getStaticText("verificationCodeError")
              : "验证码错误"
          )
        );
      } else {
        callback();
      }
    };
    var questionsValidateForm = (rule, value, callback) => {
      if (value === "") {
        callback(
          new Error(
            this.getStaticText("pleaseEnterTheAnswerToSecretInsurance")
              ? this.getStaticText("pleaseEnterTheAnswerToSecretInsurance")
              : "请输入密保问题答案"
          )
        );
      } else {
        callback();
      }
    };
    var passwordValidateForm = (rule, value, callback) => {
      if (value === "") {
        callback(
          new Error(
            this.getStaticText("pleaseEnterTheAccountPassword")
              ? this.getStaticText("pleaseEnterTheAccountPassword")
              : "请输入账户密码"
          )
        );
      } else {
        callback();
      }
    };
    var mobileValidateForm = (rule, value, callback) => {
      if (value === "") {
        callback(
          new Error(
            this.getStaticText("pleaseEnterYourPhoneVerificationCode")
              ? this.getStaticText("pleaseEnterYourPhoneVerificationCode")
              : "请输入手机验证码"
          )
        );
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
        callback(
          new Error(
            this.getStaticText("formattingError")
              ? this.getStaticText("formattingError")
              : '格式错误，密码仅支持汉字、字母、数字、"-"、"_"的组合'
          )
        );
      } else if (value === "") {
        callback(
          new Error(
            this.getStaticText("pleaseInputPassword")
              ? this.getStaticText("pleaseInputPassword")
              : "请输入密码"
          )
        );
      } else if (value.length <= 5) {
        callback(
          new Error(
            this.getStaticText("thePasswordIsAtLeast6Digits")
              ? this.getStaticText("thePasswordIsAtLeast6Digits")
              : "密码至少为6位数"
          )
        );
      } else if (value.length >= 17) {
        callback(
          new Error(
            this.getStaticText("theMaximumNumberOfPasswordsIs16Digits")
              ? this.getStaticText("theMaximumNumberOfPasswordsIs16Digits")
              : "密码最多为16位数"
          )
        );
      } else {
        callback();
      }
    };
    var validateCheckPass = (rule, value, callback) => {
      if (value === "") {
        callback(
          new Error(
            this.getStaticText("pleaseInputTheNewPasswordAgain")
              ? this.getStaticText("pleaseInputTheNewPasswordAgain")
              : "请再次输入密码"
          )
        );
      } else if (value !== this.modifyPassword.pass) {
        callback(
          new Error(
            this.getStaticText("twoInputPasswordIsInconsistent")
              ? this.getStaticText("twoInputPasswordIsInconsistent")
              : "两次输入密码不一致!"
          )
        );
      } else {
        callback();
      }
    };
    var validateSetMobile = (rule, value, callback) => {
      if (value === "") {
        callback(
          new Error(
            this.getStaticText("pleaseEnterCellPhoneNumber")
              ? this.getStaticText("pleaseEnterCellPhoneNumber")
              : "请输入手机号"
          )
        );
      } else if (value != value.match(/^[1][3,4,5,6,7,8,9][0-9]{9}$/)) {
        callback(
          new Error(
            this.getStaticText("pleaseEnterCorrectCellPhoneNumber")
              ? this.getStaticText("pleaseEnterCorrectCellPhoneNumber")
              : "请输入正确的手机号"
          )
        );
      } else {
        callback();
      }
    };
    var validateSendNum = (rule, value, callback) => {
      if (value === "") {
        callback(
          new Error(
            this.getStaticText("pleaseEnterYourPhoneVerificationCode")
              ? this.getStaticText("pleaseEnterYourPhoneVerificationCode")
              : "请输入手机验证码"
          )
        );
      } else if (value != this.cbsendNum) {
        callback(
          new Error(
            this.getStaticText("verificationCodeError")
              ? this.getStaticText("verificationCodeError")
              : "验证码错误"
          )
        );
      } else {
        callback();
      }
    };
    var validateOldSendNum = (rule, value, callback) => {
      if (value === "") {
        callback(
          new Error(
            this.getStaticText("pleaseEnterYourPhoneVerificationCode")
              ? this.getStaticText("pleaseEnterYourPhoneVerificationCode")
              : "请输入手机验证码"
          )
        );
      } else if (value != this.cbOldSendNum) {
        callback(
          new Error(
            this.getStaticText("verificationCodeError")
              ? this.getStaticText("verificationCodeError")
              : "验证码错误"
          )
        );
      } else {
        callback();
      }
    };
    let token = Token();
    return {
      modifyUserNav:{
        bookClassifyConcerned:[],//关注图书分类
        loginName:"",//用户名
        industry:"",//
        educated:"",//
        areainfo:"",//
        address:"",//
        job:"",//职务
        positio:"",
        mobileNo:"",
        staffRoom:"",
        teachLevel:"",
        subject:"",
        faculty:"",
        company:"",
        teachCourse:"",
        postcode:""
      },
      userMode:"1",//判断是普通用户还是教师用户
      CONFIG: null,
      GLOBLE_CONFIG: null,
      modifyUser:null,//完善个人信息
      defaultPic: "",
      emailDialog: false /* 邮箱弹窗 */,
      uploadHeader: {
        token: token
      },
      title: [
        "main",
        "pointRecords",
        "virtualMoney",
        "addressDetails",
        "accountEdit",
        "virtualPay",
        "Verification",
        "modifyPassword",
        "modifyMobile",
        "modifyEmail",
        "modifyInfo",
      ],
      // 计时器
      emailTime: "",
      phoneTime: "",
      // 验证码发送状态
      vcodeType: 0,
      vcodeButt: true,
      // 修改类型 1密码 2手机 3邮箱
      modifyType: "",
      butt: true,
      butt_phone: true,
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
      /* 邮箱表单 */
      emailForm: {
        email: "",
        emailSubfix: "",
        emailPostfix: ""
      },
      emailRules: {
        email: [{ validator: validateEmailFull, trigger: "blur" }],
        emailSubfix: [{ validator: validateEmailSubfix, trigger: "blur" }]
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
      //验证身份--密码验证
      passwordValidateForm:{
        passwordValidate:''
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
      //身份验证--密码验证
      passwordValidateFormRules: {
        passwordValidate: [{ validator: passwordValidateForm, trigger: "blur" }]
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
      virtualValue: 5,
      addAddressDialog: false, // 新增地址模态弹框
      completeAddress: "",
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
      payMethodCode: "",
      siteId: "",
      imageUrl: "",
      fullLoading: "", //全屏加载框
      phoneError: "", //新建收货地址--联系电话验证信息
      contactorError: "", //新建收货地址--收货人验证信息
      goodsInfo: [], //新建收货地址--验证信息
      paymentList: [], //支付方式
    };
  },
  created() {
	  this.$bus.$on("handleChange",this.handleChange);
    this.defaultPic = require("../../assets/img/timg.jpg"); // webpack静态资源打包问题
    this.CONFIG = this.parentConfig.account;
    this.modifyUser=this.parentConfig.modifyUser;
    this.GLOBLE_CONFIG = CONFIG;
    this.getShowEmailPostfix()
      ? (this.emailForm.emailPostfix = CONFIG.EMAIL_CONFIG.postfix[0])
      : "";
    this.completeAddress = this.getStaticText("thisIsACompleteAddress")
      ? this.getStaticText("thisIsACompleteAddress")
      : "这是一条完整的地址";

  },
  watch:{
    account(nv,ov){
      if(nv.loginName){
        var modifyarr=this.modifyUserNav
        for(var y in modifyarr){
          for(var x in nv){
            if(y==x&&y!="bookClassifyConcerned"&&nv[x]!="undefined"){
              modifyarr[y]=nv[x];
            }else if(y==x&&y=="bookClassifyConcerned"&&nv[x]!="undefined"){
              nv[x].split(",");
              modifyarr[y]=nv[x];
            }

          }
        }

        }

    }
  },
  mounted() {
    this.siteId = CONFIG.SITE_CONFIG.siteId;
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
      myComment: "getMyComment",
      member:"getMember"
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
    // typeFormat: function(row, column) {
    //   var date = row[column.property];
    //   if (date == 0) {
    //     return "充值";
    //   } else {
    //     return "消费";
    //   }
    // },
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
    ...mapActions('login', {
      action_login: interfaces.ACTION_LOGIN,
    }),
    ordinaryUserSave(msg){
     let data=JSON.parse(JSON.stringify(msg));
     data.bookClassifyConcerned=data.bookClassifyConcerned.join();

      axios.post(
          CONFIG.BASE_URL +
          "user/editMemberByName.do?",data)
        .then(function(response) {
          console.log("成功")
//          var data = response.data.substring(
//            response.data.indexOf("<a>") + 3,
//            response.data.indexOf("</a>")
//          );
//          var orderCode = response.data.substring(
//            response.data.indexOf("<div>") + 5,
//            response.data.indexOf("</div>")
//          );
//          window.location.href =
//            "./qrcode.html?data=" + data + "&orderCode=" + orderCode;
        });

    },
    //个人信息编辑信息
    modifyInfor(type){
      this.showCurrent(type);
    },
    /*帐号信息加载完毕回调*/
    loadedCallBack() {
      this.$store.dispatch("personalCenter/queryPointRecord", {});
      this.$store.dispatch("personalCenter/queryVirtualMoney", {});
      this.$store.dispatch("personalCenter/queryAddress", {});
      this.$store.dispatch("personalCenter/getMyComment", {});
      api.queryPaymentList(this.siteId).then(response => {
        this.paymentList = response.data.data;
        this.payMethodCode = this.paymentList[0].payCode;
      });
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
    // typeFormat: function(row, column) {
    //   var date = row[column.property];
    //   if (date == 0) {
    //     return "充值";
    //   } else {
    //     return "消费";
    //   }
    // },
    /*显示状态*/
    showCurrent(index) {
      this.currentShow = this.title[index];
    },
    /*下载币分页*/
    virtualPaging({ pageNo, pageSize }) {
      var param = {
        loginName: "",
        pageIndex: pageNo,
        pageSize: pageSize
      };
      this.$store.dispatch("personalCenter/queryVirtualMoney", param);
    },
    /*修改地址*/
	  handleChange(value) {
      /*this.form.city = this.form.selectedOptions[0];
      this.form.erae = this.form.selectedOptions[1];
      this.form.minerae = this.form.selectedOptions[2];*/
      if(value.length == 1){
	      this.form.city = value[0];
      }else if(value.length==2){
	      this.form.city = value[0];
	      this.form.erae = value[1];
      }else{
	      this.form.city = value[0];
	      this.form.erae = value[1];
	      this.form.minerae = value[2];
      };
    },
    /*重置校验表单*/
    initRules() {
      this.emptyContactor = false;
      this.emptyDetail = false;
      this.emptyPhone = false;
      this.emptyPCC = false;
      this.newAddAddress.phone = "";
      this.newAddAddress.address = "";
      this.newAddAddress.contactor = "";
    },
    /*地址管理模块*/
    editClick(index, row) {
      this.initRules();
      this.newAddAddress.isDefault = row.isDefault;
      var _this = this;
      this.updateAddressDialog = true;
      initDom();

      function initDom() {
        setTimeout(function() {
          if ($(document.getElementById("t_contactor")).length > 0) {
            //解决弹框出来的时候DOM可能还没有加载完成问题
            _this.address = JSON.parse(JSON.stringify(_this.addresses[index]));
            (_this.form.city = _this.address.province),
              (_this.form.erae = _this.address.city),
              (_this.form.minerae = _this.address.county),
              (_this.form.selectedOptions = []), //地区筛选数组
              $("#tt_city").html(_this.address.province);
            $("#tt_erae").html(_this.address.city);
            $("#tt_minerae").html(_this.address.county);
            if (_this.modalState) {
              _init_area(document);
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
      var _this = this;
      if (updateStatus == 1) {
        this.$message({
          type: "success",
          message: _this.getStaticText("modifiedAddressSuccessfully")
            ? _this.getStaticText("modifiedAddressSuccessfully")
            : "修改地址成功!"
        });
        this.$store.dispatch("personalCenter/queryAddress", {});
      } else {
        this.$message({
          type: "error",
          message: _this.getStaticText("failedToChangeAddress")
            ? _this.getStaticText("failedToChangeAddress")
            : "修改地址失败!"
        });
      }
    },
    /*删除收货地址*/
    deleteAddress: function(id) {
      var _this = this;
      this.$confirm(
        _this.getStaticText("areYouSureYouWantToDeleteTheReceiptAddress")
          ? _this.getStaticText("areYouSureYouWantToDeleteTheReceiptAddress")
          : "您确定要删除该收货地址吗?",
        this.getStaticText("systemHints")
          ? this.getStaticText("systemHints")
          : "系统提示",
        {
          confirmButtonText: _this.getStaticText("confirm")
            ? _this.getStaticText("confirm")
            : "确定",
          cancelButtonText: _this.getStaticText("cancel")
            ? _this.getStaticText("cancel")
            : "取消",
          type: "warning"
        }
      ).then(function() {
        var param = {
          ids: id,
          cb: _this.deleteAddresscb
        };
        _this.$store.dispatch("personalCenter/deleteAddress", param);
      });
    },
    deleteAddresscb: function(deleteStatus) {
      var _this = this;
      if (deleteStatus == 1) {
        this.$message({
          type: "success",
          message: _this.getStaticText("deleteSuccess")
            ? _this.getStaticText("deleteSuccess")
            : "删除成功!"
        });
        this.$store.dispatch("personalCenter/queryAddress", {});
      } else {
        this.$message({
          type: "error",
          message: _this.getStaticText("deleteFailure")
            ? _this.getStaticText("deleteFailure")
            : "删除失败!"
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
        if (
          this.goodsInfo.find(function(item) {
            return item == "false";
          }) === undefined
        ) {
          // 都不为空
          this.emptyPCC = false;
          var param = {
            loginName: this.account.loginName,
            contactor: $("#s_contactor").val(),
            phone: $("#s_phone").val(),
            /*province: $("#s_province").val(),
            city: $("#s_city").val(),
            county: $("#s_county").val(),*/
            //edit by ma.jw
	          province: $("#s_province").text(),
	          city: $("#s_city").text(),
	          county: $("#s_county").text(),
            address: $("#s_address").val(),
            post: this.newAddAddress.post,
            createTime: this.newAddAddress.createTime,
            updateTime: this.newAddAddress.updateTime,
            id: this.newAddAddress.id,
            isDefault: this.newAddAddress.isDefault,
            cb: this.addAddressCallback
          };
          this.$store.dispatch("personalCenter/addAddress", param);
          this.newAddAddress.contactor = ""; // 点击取消的时候初始化数据
          this.newAddAddress.phone = "";
          this.newAddAddress.province = "";
          this.newAddAddress.city = "";
          this.newAddAddress.county = "";
          this.newAddAddress.address = "";
          this.addAddressDialog = false;
/*	        $("#s_province").text("");
	        $("#s_city").text("");
	        $("#s_county").text("");*/
          // this.$refs[form].resetFields();
        }
      } else {
        this.addAddressDialog = false;
      }
    },
    addAddressCallback(addStatus) {
      var _this = this;
      if (addStatus == 1) {
        this.$store.dispatch("personalCenter/queryAddress", {});
        this.$message({
          type: "success",
          message: _this.getStaticText("newAddressSucceeded")
            ? _this.getStaticText("newAddressSucceeded")
            : "新增地址成功!"
        });
      } else {
        this.$message({
          type: "error",
          message: _this.getStaticText("newAddressFailed")
            ? _this.getStaticText("newAddressFailed")
            : "新增地址失败!"
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
        this.contactorError = this.getStaticText("pleaseFillInTheConsignee")
          ? this.getStaticText("pleaseFillInTheConsignee")
          : "请填写收货人";
      }
      if (contactorVal.length > 40) {
        this.contactorError = this.contactorError = this.getStaticText(
          "consigneeMustNotExceed40Characters"
        )
          ? this.getStaticText("consigneeMustNotExceed40Characters")
          : "收货人不能超过40个字符";
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
        this.phoneError = this.getStaticText("pleaseInputPhoneNum")
          ? this.getStaticText("pleaseInputPhoneNum")
          : "请填写联系电话";
      }
      // if (!String.fromCharCode(event.keyCode).match(/\d/)) {
      if (!phoneVal.match(/^[0-9]*$/)) {
        // 控制只能输入数字
        this.phoneError = this.getStaticText("pleaseEnterNumber")
          ? this.getStaticText("pleaseEnterNumber")
          : "请输入数字";
      }
      if (phoneVal.length > 11) {
        this.phoneError = this.getStaticText("telephoneLengthIsTooLong")
          ? this.getStaticText("telephoneLengthIsTooLong")
          : "电话长度过长";
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
    checkArea: function() {
      this.emptyPCC = false;
      if (
        $("#s_province").text() === "" ||
        $("#s_city").text() === "" ||
        $("#s_county").text() === ""
      ) {
        // 省市区没有选择或者没有选择完全
        this.emptyPCC = true;
        this.goodsInfo.push("false");
      } else {
        this.goodsInfo.push("true");
      }
    },
    addNewAddress: function() {
      this.initRules();
      this.addAddressDialog = true;
      this.form.city = "";
      this.form.erae = "";
      this.form.minerae = "";
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
      var _this = this;
      if (setStatus == 1) {
        this.$message({
          type: "success",
          message: _this.getStaticText("setDefaultAddressSuccessfully")
            ? _this.getStaticText("setDefaultAddressSuccessfully")
            : "设置默认地址成功!"
        });
        this.$store.dispatch("personalCenter/queryAddress", {});
      } else {
        this.$message({
          type: "error",
          message: _this.getStaticText("failedToSetDefaultAddress")
            ? _this.getStaticText("failedToSetDefaultAddress")
            : "设置默认地址失败!"
        });
      }
    },
    /* 输入邮箱是否可选后缀 */
    getShowEmailPostfix() {
      let vconfig = CONFIG.EMAIL_CONFIG;
      if (vconfig && vconfig.showPostfix) {
        return true;
      } else {
        return false;
      }
    },
    changeEmail() {
      var _this = this;
      this.$refs["emailForm"].validate(valid => {
        if (valid) {
          let email = this.getShowEmailPostfix()
            ? this.emailForm.emailSubfix + "@" + this.emailForm.emailPostfix
            : this.emailForm.email;
          var param = {
            value: email,
            cb: this.changeEmailCallb
          };
          this.fullLoading = this.$loading({
            fullscreen: true,
            text: _this.getStaticText("verificationCodeSending")
              ? _this.getStaticText("verificationCodeSending")
              : "验证码发送中..."
          });
          this.$store.dispatch("personalCenter/updateEmail", param);
        }
      });
    },
    /*修改邮箱*/
    // changeEmail () {
    //   this.$prompt("请输入邮箱", "修改邮箱", {
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消",
    //     inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
    //     inputErrorMessage: "邮箱格式不正确"
    //   }).then(({ value }) => {
    //     var param = {
    //       value: value,
    //       cb: this.changeEmailCallb
    //     };
    //     this.fullLoading = this.$loading({
    //       fullscreen: true,
    //       text: "验证码发送中..."
    //     });
    //     this.$store.dispatch("personalCenter/updateEmail", param);
    //   });
    // },
    changeEmailCallb(idata, rep) {
      var _this = this;
      this.fullLoading.close();
      if (idata == 1) {
        this.$message({
          type: "success",
          message: _this.getStaticText(
            "theVerificationCodeHasBeenSentToYourMailbox"
          )
            ? _this.getStaticText("theVerificationCodeHasBeenSentToYourMailbox")
            : "已发送至您的邮箱，请点击链接绑定邮箱"
        });
        this.emailDialog = false;
        if (this.modifyType == 3) {
          window.setTimeout(function() {
            window.location.reload();
          }, 2000);
        }
      } else {
        this.$message({
          type: "error",
          message: _this.getStaticText("mailboxBindingFailed")
            ? _this.getStaticText("mailboxBindingFailed")
            : "邮箱绑定失败：" + rep.data.error.errorMsg
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
      var _this = this;
      if (idata == 1) {
        this.$store.dispatch("personalCenter/queryUser");
        this.$message({
          type: "success",
          message: _this.getStaticText("secretInsuranceIsSetUpSuccessfully")
            ? _this.getStaticText("secretInsuranceIsSetUpSuccessfully")
            : "密保问题设置成功"
        });
      } else {
        this.$message({
          type: "info",
          message: _this.getStaticText("failureOfSecretProtectionSettings")
            ? _this.getStaticText("failureOfSecretProtectionSettings")
            : "密保问题设置失败" + rep.data.error.errorMsg
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
      var _this = this;
      if (number === "") {
        this.$message({
          type: "error",
          message: _this.getStaticText("pleaseEnterCellPhoneNumber")
            ? _this.getStaticText("pleaseEnterCellPhoneNumber")
            : "请输入手机号"
        });
      } else if (number != number.match(/^[1][3,4,5,6,7,8,9][0-9]{9}$/)) {
        this.$message({
          type: "error",
          message: _this.getStaticText("pleaseEnterCorrectCellPhoneNumber")
            ? _this.getStaticText("pleaseEnterCorrectCellPhoneNumber")
            : "请输入正确的手机号"
        });
      } else {
        var params = {
          text: number,
          type: 3
        };
        api.checkUserInfo(params).then(response => {
          let result = response.data.result;
          if (result == 1) {
            var params = {
              url: this.CONFIG.getMobileCode.url,
              mobileNum: number,
              cb: this.MobileCallback
            };
            this.$store.dispatch("personalCenter/sendToMobile", params);
          } else {
            this.$message({
              type: "info",
              message: _this.getStaticText("thePhoneNumberHasBeenBound")
                ? _this.getStaticText("thePhoneNumberHasBeenBound")
                : "抱歉，手机号已被绑定"
            });
            return false;
          }
        });
      }
    },
    MobileCallback(sendStatus, sendNum) {
      var _this = this;
      if (sendStatus == 1) {
        this.cbsendNum = sendNum;
        this.$message({
          type: "success",
          message: _this.getStaticText(
            "theMobilePhoneVerificationCodeHasBeenSent"
          )
            ? _this.getStaticText("theMobilePhoneVerificationCodeHasBeenSent")
            : "手机验证码已发送，请注意查收"
        });
      } else {
        this.$message({
          type: "info",
          message: _this.getStaticText("networkTimeout")
            ? _this.getStaticText("networkTimeout")
            : "网络超时"
        });
      }
    },
    // 旧手机获取验证码
    getOldCode(number) {
      var params = {
        url: this.CONFIG.getMobileCode.url,
        mobileNum: number,
        cb: this.oldMobileCallback
      };
      this.$store.dispatch("personalCenter/sendToMobile", params);
      this.butt_phone = true;
      this.times(120, "phone");
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
          } else if (this.modifyType == 2) {
            this.showCurrent(8);
          } else {
            this.showCurrent(9);
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
      var _this = this;
      if (idata == 1) {
        this.$message({
          type: "success",
          message: _this.getStaticText("passwordModifiedSuccessfully")
            ? _this.getStaticText("passwordModifiedSuccessfully")
            : "密码修改成功"
        });
      } else {
        this.$message({
          type: "info",
          message: _this.getStaticText("passwordModificationFailed")
            ? _this.getStaticText("passwordModificationFailed")
            : "密码修改失败：" + rep.data.error.errorMsg
        });
      }
    },
    /*密码输入框重置*/
    resetForm(formName) {
      this.$nextTick(function() {
        this.$refs[formName].resetFields();
      });
    },
    /*下载币充值*/
    selectPayWay: function(payCode) {
      this.payMethodCode = payCode;
    },
    RechargeVirtual() {
      var _this = this;
      this.$confirm(
        _this.getStaticText("clickConfirmationPayment")
          ? _this.getStaticText("clickConfirmationPayment")
          : "点击确认支付",
        _this.getStaticText("tips") ? _this.getStaticText("tips") : "提示",
        {
          confirmButtonText: _this.getStaticText("confirm")
            ? _this.getStaticText("confirm")
            : "确定",
          cancelButtonText: _this.getStaticText("cancel")
            ? _this.getStaticText("cancel")
            : "取消",
          type: "warning"
        }
      )
        .then(() => {
          var params = {
            price: this.virtualValue,
            loginName: this.account.loginName,
            payMethodCode: this.payMethodCode,
            siteId: this.siteId
          };
          if (this.payMethodCode === "Alipay") {
            //   // 支付宝支付
            window.open(
              CONFIG.BASE_URL +
                "epay/getVirtualCoinPayForm.do?price=" +
                params.price +
                "&loginName=" +
                params.loginName +
                "&payMethodCode=" +
                params.payMethodCode +
                "&siteId=" +
                params.siteId,
              "_self"
            );
            window.history.pushState(null, null, "./errorpage.html"); // 添加历史记录
          } else if (this.payMethodCode === "Weixin") {
            // 微信支付
            axios
              .get(
                CONFIG.BASE_URL +
                  "epay/getVirtualCoinPayForm.do?price=" +
                  params.price +
                  "&loginName=" +
                  params.loginName +
                  "&payMethodCode=" +
                  params.payMethodCode +
                  "&siteId=" +
                  params.siteId
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
                  "./qrcode.html?data=" + data + "&orderCode=" + orderCode;
              });
          }
        })
        .catch(err => {
          console.log(err);
          this.$message({
            type: "info",
            message: this.getStaticText("cancelledPayment")
              ? this.getStaticText("cancelledPayment")
              : "已取消支付"
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
          message: _this.getStaticText("theAvatarHasBeenChangedSuccessfully")
            ? _this.getStaticText("theAvatarHasBeenChangedSuccessfully")
            : "头像更改成功"
        });
      } else {
        this.loading.close();
        this.$message({
          type: "info",
          message: _this.getStaticText("theHeaderChangeFailed")
            ? _this.getStaticText("theHeaderChangeFailed")
            : "头像更改失败，请重试"
        });
      }
    },
    avatarLoading() {
      var _this = this;
      this.loading = this.$loading({
        lock: true,
        text: _this.getStaticText("uploading")
          ? _this.getStaticText("uploading")
          : "正在上传...",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
        target: document.querySelector(".div1")
      });
    },
    beforeAvatarUpload(file) {
      var _this = this;
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error(
          _this.getStaticText("uploadHeadPictureCanOnlyBeJPGFormat")
            ? _this.getStaticText("uploadHeadPictureCanOnlyBeJPGFormat")
            : "上传头像图片只能是 JPG 格式!"
        );
      }
      if (!isLt2M) {
        this.$message.error(
          _this.getStaticText("uploadHeadImageSizeCanNotExceed2MB")
            ? _this.getStaticText("uploadHeadImageSizeCanNotExceed2MB")
            : "上传头像图片大小不能超过 2MB!"
        );
      }
      return isJPG && isLt2M;
    },
    uploadUrl: function() {
      return (
        CONFIG.BASE_URL +
        "/user/uploadHeadPic.do?loginName=" +
        this.account.loginName
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
      var _this = this;
      this.vcodeButt = false;
      if (this.vcodeType == 1) {
        this.butt = true;
      }
      var params = {
        email: this.account.email,
        cb: this.emailValidateCallb
      };
      this.fullLoading = this.$loading({
        fullscreen: true,
        text: _this.getStaticText("verificationCodeSending")
          ? _this.getStaticText("verificationCodeSending")
          : "验证码发送中..."
      });
      this.$store.dispatch("personalCenter/findPassword", params);
    },
    emailValidateCallb(findStatus, findNum, rep) {
      var _this = this;
      this.fullLoading.close();
      this.findNum = findNum;
      if (findStatus == 1) {
        this.$message({
          type: "success",
          message: _this.getStaticText(
            "theVerificationCodeHasBeenSentToYourMailbox"
          )
            ? _this.getStaticText("theVerificationCodeHasBeenSentToYourMailbox")
            : "已发送验证码至您邮箱,请在2分钟内输入验证"
        });
        this.times(120, "email");
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
          } else if (this.modifyType == 2) {
            this.showCurrent(8);
          } else {
            this.showCurrent(9);
          }
        } else {
          return false;
        }
      });
    },
    modifyInformation(type) {
      this.showCurrent(6);
      this.modifyType = type;
    },
    // 邮箱验证码倒计时
    times(num, type) {
      var self = this;
      var countTime = num;
      if (type == "email") {
        var t1 = setInterval(function() {
          self.emailTime = countTime;
          Vue.set([self.emailTime], "emailTime", countTime);
          countTime--;
          if (countTime <= 0) {
            self.butt = false;
            countTime = 0;
            self.vcodeType = 1;
            self.vcodeButt = true;
            clearInterval(t1);
          }
        }, 1000);
      } else if (type == "phone") {
        var t2 = setInterval(function() {
          self.phoneTime = countTime;
          Vue.set([self.phoneTime], "phoneTime", countTime);
          countTime--;
          if (countTime <= 0) {
            self.butt_phone = false;
            countTime = 0;
            clearInterval(t2);
          }
        }, 1000);
      }
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
    changeActiveName(tag) {
      this.activeName = tag;
    },
    //密码验证
    submitPasswordValidateNum() {
      this.$refs.passwordValidateForm.validate(valid => {
        if (valid) {
          this.action_login({
            member: {
              loginName: this.member.loginName,
              password: this.passwordValidateForm.passwordValidate,
              flag: 'pc'
            }
          }).then((rep) => {
            if (rep.data.result && rep.data.result == '1') {
              if (this.modifyType == 1) {
                this.showCurrent(7);
              } else if (this.modifyType == 2) {
                this.showCurrent(8);
              } else {
                this.showCurrent(9);
              }
            } else if (rep.data.result && rep.data.result == '0') {
              this.$message({
                type: "error",
                message: rep.data.error && rep.data.error.errorMsg ? rep.data.error.errorMsg : (this.getStaticText('verifyFailed') ? this.getStaticText('verifyFailed') : '验证失败')
              });
            }
            return false;
          });
        } else {
          return false;
        }
      });

    },
    questionsValidateCallb(idata, rep) {
      if (idata == 201) {
        if (this.modifyType == 1) {
          this.showCurrent(7);
        } else if (this.modifyType == 2) {
          this.showCurrent(8);
        } else {
          this.showCurrent(9);
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
        window.setTimeout(function() {
          Get(CONFIG.BASE_URL + "logout.do").then(rep => {
            if (Number(rep.status) === 200) {
              window.location.href =
                this.CONFIG && this.CONFIG.toLoginHref
                  ? this.CONFIG.toLoginHref
                  : "./login.html";
            }
          });
        }, 3000);
      } else {
        console.log("error submit!!");
        return false;
      }
    },
    open() {
      var _this = this;
      this.$alert(
        _this.getStaticText("passwordResetSuccessfully")
          ? _this.getStaticText("passwordResetSuccessfully")
          : "密码重置成功,请重新登录",
        _this.getStaticText("congratulations")
          ? _this.getStaticText("congratulations")
          : "恭喜",
        {
          confirmButtonText: _this.getStaticText("confirm")
            ? _this.getStaticText("confirm")
            : "确定"
        }
      );
    },
    back() {
      window.location.reload();
    },
    getStaticText(text) {
      if (
        this.CONFIG &&
        this.CONFIG.staticText &&
        this.CONFIG.staticText[text]
      ) {
        return this.CONFIG.staticText[text];
      } else {
        return false;
      }
    },
    typeFormat: function(row, column) {
      var date = row[column.property];
      if (date == 0) {
        return this.getStaticText("recharge")
          ? this.getStaticText("recharge")
          : "充值";
      } else {
        return this.getStaticText("consumption")
          ? this.getStaticText("consumption")
          : "消费";
      }
    }
  }
};
</script>
<style>
.newPhoneNum .el-form-item__error {
  padding-left: 80px;
}
.bindPhone .el-form-item__error {
  padding-left: 60px;
}
.center_account-input-email {
  width: 300px;
}
.center_account_subfix-email_input {
  width: 200px;
}
.center_account-postfix_email_select {
  width: 108px;
}
.account_modify-form {
  margin: 20px auto;
  width: 500px;
}
.account_modify-icon {
  margin: 20px auto;
}
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
.ml30 {
  margin-left: 30px;
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
  display: block;
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
  /*width: 60% !important;*/
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
.main_right {
  width: 880px;
  overflow: hidden;
  margin: 0 auto;
}
/*修改邮箱*/
.main_right .wzdh_yzsjh,
.main_right .wzdh_xgyx,
.main_right .wzdh_bmwtyz,
.main_right .wzdh_yzsjh,
.main_right .wzdh_xgmm {
  text-align: center;
  border: 1px solid #d9d9d9;
}

.wzdh_xgyx .wzdh_xgyx_ico {
  background-position: -94px -405px;
  width: 74px;
  height: 74px;
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
.newPhoneNum {
  text-align: left;
}
</style>
