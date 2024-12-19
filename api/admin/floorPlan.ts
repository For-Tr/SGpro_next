import { get, post } from '/@/utils/http/axios';
enum FloorPlanURL {
    create = '/CSAA/projects/',
    update = '/CSAA/floor-plans/',
    delete = '/CSAA/floor-plans/',
}

export const createFloorPlanApi = async (basicInfoId: number, data: any) =>
    post<any>({ 
        url: `${FloorPlanURL.create}${basicInfoId}/floor-plans/create/`,
        data,
        headers: { 'Content-Type': 'multipart/form-data;charset=utf-8' } 
    });

export const updateFloorPlanApi = async (id: number, data: any) =>
    post<any>({ 
        url: `${FloorPlanURL.update}${id}/update/`,
        data,
        headers: { 'Content-Type': 'multipart/form-data;charset=utf-8' } 
    });

export const deleteFloorPlanApi = async (id: number) =>
    post<any>({ url: `${FloorPlanURL.delete}${id}/delete/` });