
import Vue from 'vue';

function initVueComponents () {
	Vue.component("ui_advert_01" , () => import("@components/UI/advert/01_advert/01_advert.vue"));
	Vue.component("ui_information_02" , () => import("@components/UI/information/02_content/content.vue"));
	Vue.component("ui_list_pic_21" , () => import("@components/UI/list_pic/21_pic_list_activity/picListActivity.vue"));
	Vue.component("ui_list_pic_22" , () => import("@components/UI/list_pic/22_pic_list_column/picListcolumn.vue"));
	Vue.component("ui_list_pic_28" , () => import("@components/UI/list_pic/28_pic_list_information/informationLists.vue"));
	Vue.component("ui_pagination" , () => import("@components/UI/pagination/pagination/pagination.vue"));
	Vue.component("ui_list_pic_29" , () => import("@components/UI/list_pic/29_pic_list_information/information.vue"));
	Vue.component("ui_list_pic_30" , () => import("@components/UI/list_pic/30_pic_list_info/infoList.vue"));
	Vue.component("ui_list_word_01" , () => import("@components/UI/list_word/01_list_word_info/activityInfoList.vue"));
	Vue.component("ui_navigation_03" , () => import("@components/UI/navigation/03_column_headnav/columnnav.vue"));
	Vue.component("ui_navigation_04" , () => import("@components/UI/navigation/04_sidebar/04_sidebar.vue"));
	Vue.component("ui_navigation_05" , () => import("@components/UI/navigation/05_common_navigation/commonnav.vue"));
	Vue.component("ui_navigation_06" , () => import("@components/UI/navigation/06_column_nav_sub/columnnav.vue"));
	Vue.component("ui_pagination_01" , () => import("@components/UI/pagination/pagination_01/ui_pagination_01.vue"));
	Vue.component("ui_swiper_01_pic" , () => import("@components/UI/swiper/01_pic/Pic_Swiper.vue"));
	Vue.component("ui_swiper_07" , () => import("@components/UI/swiper/07_pic_activity/activityswiper.vue"));
	Vue.component("ui_swiper_08" , () => import("@components/UI/swiper/08_pic_adv/advertisementList.vue"));
	Vue.component("work_activitydetail_01" , () => import("@components/work/activityDetail/01_detail/activityDetail.vue"));
	Vue.component("work_bookreview_02" , () => import("@components/work/bookReview/activityReview_02/activityReview.vue"));
	Vue.component("work_activitydetail_06" , () => import("@components/work/activityDetail/06_teacher_list/teacherList.vue"));
	Vue.component("work_activitydetail_09" , () => import("@components/work/activityDetail/09_candidate_list/candidateList.vue"));
	Vue.component("work_activitydetail_03" , () => import("@components/work/activityDetail/03_news_list/newsList.vue"));
	Vue.component("work_activitydetail_02" , () => import("@components/work/activityDetail/02_fuwen/fuwen.vue"));
	Vue.component("work_activitydetail_08" , () => import("@components/work/activityDetail/08_activity_vote/voteTab.vue"));
	Vue.component("work_bookdetail_03" , () => import("@components/work/bookDetail/03_work_detail/workdetail.vue"));
	Vue.component("work_common_04" , () => import("@components/work/common/04_register_status/register_status.vue"));
	Vue.component("work_common_06" , () => import("@components/work/common/06_col_detail/06_col_detail.vue"));
	Vue.component("work_contestants_01" , () => import("@components/work/contestants/01_contestants/contestants.vue"));
	Vue.component("work_crumbs_02" , () => import("@components/work/crumbs/crumbs_02/crumbs_02.vue"));
	Vue.component("work_findpassword_01" , () => import("@components/work/findPassword/01_findPassword/retrievePassword.vue"));
	Vue.component("ui_share_01" , () => import("@components/UI/share/01_share/shareInfo.vue"));
	Vue.component("work_informationdetail_01" , () => import("@components/work/informationDetail/01_detail/infoDetail.vue"));
	Vue.component("work_informationdetail_02" , () => import("@components/work/informationDetail/02_detail/newsDetail.vue"));
	Vue.component("work_login_01" , () => import("@components/work/login/01_login/01_login_loading.vue"));
	Vue.component("work_login_03_login" , () => import("@components/work/login/03_login/login.vue"));
	Vue.component("work_login_04" , () => import("@components/work/login/04_get_member/getMember.vue"));
	Vue.component("work_personalcenter_01" , () => import("@components/work/personalCenter/01_personalCenter/personalCenter.vue"));
	Vue.component("work_register_03" , () => import("@components/work/register/03_register/register.vue"));

}
export default initVueComponents;
