/*
 * @Author: yancm 
 * @Date: 2018-11-02 11:27:22 
 * @Last Modified by: yancm
 * @Last Modified time: 2018-11-21 13:39:30
 */
import { Get } from '@common'

let shaishuRead = {
    /* type : pdf epub swf */
    free: function (resourceId = '482512', resourceType = 'BOOK', type = 'pdf') {
        let params = {
            resourceId,
            resourceType,
            type
        }
        return Get(CONFIG.BASE_URL + '/user/getShaiShuUrl.do', { params }).then(resp => {
            let data = resp.data;
            if (!data.error) {
                if (CONFIG && CONFIG.SHAISHU_READ && CONFIG.SHAISHU_READ.openPageUrl) {
                    window.location.href = CONFIG.SHAISHU_READ.openPageUrl +
                        '?back=' + window.location.href +
                        '&to=' + data.data
                } else {
                    window.open(data.data)
                }
            } else {
                if (CONFIG && CONFIG.SHAISHU_READ) {
                    alert(CONFIG.SHAISHU_READ.errorText || '暂无阅读地址');
                }
            }
            return resp
        })
    },
    full: function (resourceId = '482512', resourceType = 'BOOK', type = 'pdf', productType = '94', siteId) {
        let params = {
            resourceId,
            resourceType,
            type,
            productType

        }
        if (siteId) {
            params.siteId = siteId;
        }
        return Get(CONFIG.BASE_URL + '/user/getShaiShuFullUrl.do', { params }).then(resp => {
            let data = resp.data;
            if (!data.error) {
                if (CONFIG && CONFIG.SHAISHU_READ && CONFIG.SHAISHU_READ.openPageUrl) {
                    window.location.href = CONFIG.SHAISHU_READ.openPageUrl +
                        '?back=' + window.location.href +
                        '&to=' + data.data
                } else {
                    window.open(data.data)
                }
            } else {
                if (CONFIG && CONFIG.SHAISHU_READ) {
                    alert(CONFIG.SHAISHU_READ.errorText || '暂无阅读地址');
                }
            }
            return resp
        })
    }
}


let readUtils = {
    shaishuRead
}

export default readUtils