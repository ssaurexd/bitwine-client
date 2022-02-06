import { IShipment, IStoreItem } from './storeIntergaces';
import { IUserAddress } from './user';

export interface IAPISaleAddNewOneResponse {
	ok: boolean,
	msg: string,
	sale: ISalesResponse
}

export interface IAPIGetPendingSales {
	ok: boolean,
	msg?: string,
	sales: ISalesResponse[]
}

export interface IProcessPayment { 
	items: IStoreItem[], 
	shipment: IShipment, 
	email: string, 
	uid?: string ,
	address: IUserAddress
}

export interface ISalesResponse  {
	address: IUserAddress,
	products: string[],
	createdAt: Date,
	updatedAt: Date,
	shipment: IShipment,
	total: number,
	totalItems: number,
	_id: string,
	email: string
	uid?: string,
	status: ISalesStatus 
}

export type ISalesStatus = 'pending' | 'sent' | 'late' | 'done'