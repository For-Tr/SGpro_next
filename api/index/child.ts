import {get, post} from '/@/utils/http/axios';

enum URL {
    create='/CSAA/index/child/create',
    list = '/CSAA/index/child/list',

}

const createApi = async (data: any) =>
    post<any>({url: URL.create, data: data, headers: {}});

const listApi = async (params: any) =>
    get<any>({url: URL.list, params: params, data: {}, headers: {}});



export {createApi, listApi};
