import {get, post} from '/@/utils/http/axios';

enum URL {
    list = '/CSAA/index/notice/list_api',
}

const listApi = async (params: any) =>
    get<any>({url: URL.list, params: params, data: {}, headers: {}});

export {listApi};
