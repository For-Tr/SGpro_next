import { get, post } from '/@/utils/http/axios';
enum TransactionURL {
    create = '/CSAA/projects/',
    update = '/CSAA/transactions/',
    delete = '/CSAA/transactions/',
}

export const createTransactionApi = async (basicInfoId: number, data: any) =>
    post<any>({ 
        url: `${TransactionURL.create}${basicInfoId}/transactions/create/`,
        data,
        headers: { 'Content-Type': 'multipart/form-data;charset=utf-8' } 
    });

export const updateTransactionApi = async (id: number, data: any) =>
    post<any>({ 
        url: `${TransactionURL.update}${id}/update/`,
        data,
        headers: { 'Content-Type': 'multipart/form-data;charset=utf-8' } 
    });

export const deleteTransactionApi = async (id: number) =>
    post<any>({ url: `${TransactionURL.delete}${id}/delete/` });