import { Component, OnInit } from '@angular/core';
import {ResponsableGuichet} from '../../../model/model.responsableguichet';
import {ResponsableService} from '../../../service/responsable.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-responsables',
  templateUrl: './responsables.component.html',
  styleUrls: ['./responsables.component.css']
})
export class ResponsablesComponent implements OnInit {

  config : any ;
  responsables : ResponsableGuichet[] = [] ;
  createRespoRequest :any = {gmail:"",nom:""};
  createError :any = {gmail:"",nom:""};

  constructor(private responsableService : ResponsableService ,private router :Router) { }

  ngOnInit(): void {
    this.getRespos();
    
    this.config = {
      id: 'basicPaginate',
      itemsPerPage: 11,
      currentPage: 1,
      totalItems: this.responsables.length
    };
  }

  public getRespos()
  {
    this.responsableService.getRespos().subscribe(responsables=>{
      this.responsables = responsables ;
      console.log(this.responsables.length);
    })
  }

  public creerRespo()
  {
    this.responsableService.creerRespo(this.createRespoRequest).subscribe(data=>{
      console.log("great Work");
      this.onCloseModal();
      this.router.navigateByUrl("/gestion/admin/responsables");
      
    },error=>
    {
      this.createError=error.error;
      console.log(error.error);
      console.log(this.createError);
    })
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  public onOpenModal()
 {
  
  document.getElementById("overlay").style.visibility="visible";
  document.getElementById("overlay").style.opacity="1";
  document.getElementById("modal").style.visibility="visible";
  document.getElementById("modal").style.top="50%";
 }

 public onCloseModal()
 {
  
  document.getElementById("overlay").style.visibility="hidden";
  document.getElementById("overlay").style.opacity="0";
  document.getElementById("modal").style.visibility="hidden";
  document.getElementById("modal").style.top="-50%";
 }

}
