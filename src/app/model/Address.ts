import { IGeo } from './geo';

export interface IAddress{
    street:String;
    suite:String;
    city:String;
    zipCode:String;
    geo:IGeo;
}