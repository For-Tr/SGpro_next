import { get, post } from '/@/utils/http/axios';

enum BasicInfoURL {
    list = '/CSAA/projects/',
    detail = '/CSAA/projects/',
    create = '/CSAA/projects/create/',
    update = '/CSAA/projects/',
    delete = '/CSAA/projects/',
}

export const listBasicInfoApi = async (params: any) => 
    get<any>({ url: BasicInfoURL.list, params });

export const getBasicInfoDetailApi = async (id: number) => 
    get<any>({ url: `${BasicInfoURL.detail}${id}/` });

export const createBasicInfoApi = async (data: any) =>
    post<any>({ 
        url: BasicInfoURL.create, 
        data,
        headers: { 'Content-Type': 'multipart/form-data;charset=utf-8' } 
    });

export const updateBasicInfoApi = async (id: number, data: any) =>
    post<any>({ 
        url: `${BasicInfoURL.update}${id}/update/`, 
        data,
        headers: { 'Content-Type': 'multipart/form-data;charset=utf-8' } 
    });

export const deleteBasicInfoApi = async (id: number) => 
    post<any>({ url: `${BasicInfoURL.delete}${id}/delete/` });