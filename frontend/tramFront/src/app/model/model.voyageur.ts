import { Alimentation } from "./model.alimentation";
import { TramSolde } from "./model.tramsolde";
import { User } from "./model.user";

export class Voyageur extends User{

    tramSolde : TramSolde ;
    alimentationList : Alimentation[];
}