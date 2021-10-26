import { Ligne } from "./model.ligne";
import { TramSolde } from "./model.tramsolde";

export class Eticket{
    id : number;
    code : string ;
    prix : number ;
    date : Date ;
    status : string ;
    tramSolde : TramSolde ;
    ligne : Ligne ;
}