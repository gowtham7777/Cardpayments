import { ICompany } from './company';
import { IAddress } from './Address';

export interface IStudent {
    id: number;
    name: string;
    username: string;
    email: string;
    address:IAddress;
    phone:String;
    website:String;
    company:ICompany;
    }

    export class Students{
        students:IStudent[];
    }