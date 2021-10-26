import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/service/ticket.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  generateTicketRequest ={nombre : "",ligne : "Ligne 1",prix:8};

  lignes = [
    { name: "Ligne 1", value: "Ligne 1" },
    { name: "Ligne 2", value: "Ligne 2" }
  ];

  constructor(private ticketService : TicketService,private router :Router) { }

  ngOnInit(): void {
  }

  generateTicket(){

    this.ticketService.generateTickets(this.generateTicketRequest).subscribe(data=>{
      this.onCloseModal();
      this.router.navigateByUrl("/public/dashbord/tickets");
      console.log("working");
      console.log(data);
    })
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

  public logOut()
  {
    localStorage.clear();
    this.router.navigateByUrl("/public/home");
  }

}
