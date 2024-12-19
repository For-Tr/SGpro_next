
import { get, post } from '/@/utils/http/axios';


enum AmenitiesURL {
    create = '/CSAA/projects/',
    update = '/CSAA/amenities/',
}

export const createAmenitiesApi = async (basicInfoId: number, data: any) =>
    post<any>({ 
        url: `${AmenitiesURL.create}${basicInfoId}/amenities/create/`,
        data,
        headers: { 'Content-Type': 'application/json;charset=utf-8' } 
    });

export const updateAmenitiesApi = async (id: number, data: any) =>
    post<any>({ 
        url: `${AmenitiesURL.update}${id}/update/`,
        data,
        headers: { 'Content-Type': 'application/json;charset=utf-8' } 
    });
