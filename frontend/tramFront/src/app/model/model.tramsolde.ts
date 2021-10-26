import { Alimentation } from "./model.alimentation";
import { Eticket } from "./model.eticket";
import { Voyageur } from "./model.voyageur";

export class TramSolde{
    id : number;
    solde : string ;
    voyageur : Voyageur ;
    alimentationList : Alimentation[];
    eticketList : Eticket[];
}