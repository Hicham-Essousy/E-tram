import { Component, OnInit } from '@angular/core';
import {Alimentation} from '../../../model/model.alimentation';
import {MyAlimentationService} from '../../../service/myAlimentaion.service';

@Component({
  selector: 'app-my-alimentations',
  templateUrl: './my-alimentations.component.html',
  styleUrls: ['./my-alimentations.component.css']
})
export class MyAlimentationsComponent implements OnInit {

  config:any;

  alimentations:Alimentation[]=[];


  constructor(private myAlimentationService:MyAlimentationService) { }

  ngOnInit(): void {
    //this.getMyAlimentations();
    for (var _i = 0; _i < 20; _i++) {
      let v : Alimentation =new Alimentation();
      v.montant = _i;
      this.alimentations.push(v);
    }
    this.config = {
      id: 'basicPaginate',
      itemsPerPage: 7,
      currentPage: 1,
      totalItems: this.alimentations.length
    };

  }

  public getMyAlimentations()
  {
    
    this.myAlimentationService.getMyAlimentations().subscribe(alimentations=>
      {
        this.alimentations = alimentations ;
      })
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

}
