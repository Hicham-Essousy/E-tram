import { Ligne } from "./model.ligne";

export class Station{
    id : number;
    label : string ;
    premierDepart : string ;
    dernierDepart : string ;
    ligne : Ligne ;
}