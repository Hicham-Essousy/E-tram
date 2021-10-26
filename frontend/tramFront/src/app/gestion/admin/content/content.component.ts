import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/service/admin-service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  horaire : any ={h1:"",h2:"",h3:"",h4:"",h5:"",h6:"",h7:"",h8:"",h9:"",h10:"",h11:"",h12:""};
  constructor(private adminService : AdminServiceService) { }

  ngOnInit(): void {
    this.getContent();
  }

  public getContent()
  {
    this.adminService.getHoraires().subscribe(data=>
      {
        this.horaire=data;
      })
  }

  public setContent()
  {
    this.adminService.setHoraires(this.horaire).subscribe(data=>
      {
        this.horaire=data;
        this.simpleAlert();
      })
  }

  simpleAlert(){
    Swal.fire("Merci"," opération réussite", "success")
  }

}
