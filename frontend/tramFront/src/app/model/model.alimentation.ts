import { TramSolde } from "./model.tramsolde";
import { Voyageur } from "./model.voyageur";

export class Alimentation{
    id : number ;
    montant :number;
    dateAlimentation : Date;
    tramSolde : TramSolde ;
    voyageur : Voyageur ;
}