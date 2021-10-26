import { Component, OnInit } from '@angular/core';
import { Alimentation } from 'src/app/model/model.alimentation';
import { MyAlimentationService } from 'src/app/service/myAlimentaion.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.css']
})
export class PayementComponent implements OnInit {

  alimenterRequest : any = {montant:0,cardNumber:""}
  config : any ;
  alimentations:Alimentation[]=[];
  

  constructor(private alimentationService:MyAlimentationService) { }

  ngOnInit(): void {
    
    this.getAlimentations();
    this.config = {
      id: 'basicPaginate',
      itemsPerPage: 4,
      currentPage: 1,
      totalItems: this.alimentations.length
    };
    
  }

  public onAlimente()
  {
    console.log(this.alimenterRequest.cardNumber);
    this.alimentationService.alimenter(this.alimenterRequest).subscribe(alimentation=>
      {
        console.log("transition successful");
        this.simpleAlert();
      },error=>{
this.dingerAlert();
      })

  }

  public getAlimentations()
  {
    this.alimentationService.getMyAlimentations().subscribe(alimentations=>{
      this.alimentations=alimentations;
      console.log("working");
    })
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }
simpleAlert(){
  Swal.fire("Merci","opération réussite ", "success")
}


dingerAlert(){
  Swal.fire("Erreur","operation echouée", "error")
}
 

}
