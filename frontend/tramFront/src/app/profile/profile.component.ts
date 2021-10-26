import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user : any = {nom:"",prenom:"",gmail:"",cin:"",phone:"",sexe:""};
  files: any[];

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  public getCurrentUser()
  {
    this.userService.getCurrentUser().subscribe(user=>
      {
        this.user=user;
      })
  }

  public onUpdate()
  {
    this.userService.updateProfile(this.user,this.files[0]).subscribe(user=>
      {
        this.user=user;
        console.log("successful opration");
        this.simpleAlert();
      })

  }

  onFileChange(event){
    this.files = event.target.files;
    console.log(event);
    console.log(this.files[0])
  }

  simpleAlert(){
    Swal.fire("Merci","opération réussite ", "success")
  }

}
