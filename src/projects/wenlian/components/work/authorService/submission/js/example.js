/**
 * Created by qinff on 2018/1/15.
 */
import component from '../Submission.vue';

const name = component.name;
const title = '作者服务组件';
const description = '作者服务组件，为作者提供：投稿方式、投稿说明、法律声明、征稿启事等导航与服务。';
const dev = {
  queryEditorList: {
    url: '/data/work_author_service_submission.json',
    params: {}
  }
};
const prod = {
  queryEditorList: {
    url: CONFIG.BASE_URL + 'spc/cms/publish/list.do',
    params: {
      conditions: '[{pub_col_id:226}]',
      pageNo: '1',
      pageSize: '15',
      orderBy: 'pub_a_order asc pub_lastmodified desc id asc',
      searchText: '',
      groupBy: 'pub_resource_id'
    }
  }
};

export {name, title, dev, prod, description};
