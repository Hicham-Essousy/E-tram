import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { Eticket } from 'src/app/model/model.eticket';
import { AdminServiceService } from 'src/app/service/admin-service.service';
import { TicketService } from 'src/app/service/ticket.service';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  etickets : Eticket[] = []
  config : any ;
  horaire : any ={h1:"",h2:"",h3:"",h4:"",h5:"",h6:"",h7:"",h8:"",h9:"",h10:"",h11:"",h12:""};
  

  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  
  value = 'Techiediaries';
  

  constructor(private ticketService : TicketService,private adminService : AdminServiceService) { }

  ngOnInit(): void {
    this.getTickets();
    this.getContent();
    this.config = {
      id: 'basicPaginate',
      itemsPerPage: 2,
      currentPage: 1,
      totalItems: this.etickets.length
    };
  }

  public getTickets()
  {
    this.ticketService.getTickets().subscribe(tickets=>{
      this.etickets = tickets ;
      console.log(tickets);
    })
  }

  public getContent()
  {
    this.adminService.getHoraires().subscribe(data=>
      {
        this.horaire=data;
      })
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

}
