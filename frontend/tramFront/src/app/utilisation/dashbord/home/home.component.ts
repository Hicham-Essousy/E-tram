import { Component, OnInit } from '@angular/core';
import { VoyageurService } from 'src/app/service/voyageur.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class Home2Component implements OnInit {
globalInformation ={solde:0,ticket_v:0,ticket_nv:0,nom:"",prenom:"",imageUrl:""};
points : Array<number>=[1,2,3,4,5,6,7,8,0,0,0,0,0];
user :any= {nom:"",prenom:"",role:"",imageUrl:""} ;

  /********************************/
  
  title = 'Pourcentage des tickets valides et non-valides';
   type = 'PieChart';
   data = [
      ['Tickets Valide', 45.0],
      ['Tickets Non-valide', 26.8], 
   ];
   columnNames = ['Browser', 'Percentage'];
   options = {    
   };

   width = 500;
   height = 300;
  /****************************** */
  title1 = 'Nombre des alimentations par mois';
   type1 = 'LineChart';
   data1 = [
        ["Jan", this.points[1] ],
        ["Feb", +this.points[2] ],
        ["Mar", +this.points[3] ],
        ["Apr",this.points[4]  ],
        ["May",+this.points[5]  ],
        ["Jun", +this.points[6] ],
        ["Jul", this.points[7] ],
        ["Aug",this.points[8]  ],
        ["Sep",+this.points[9]  ],
        ["Oct", +this.points[10] ],
        ["Nov", +this.points[11] ],
        ["Dec", +this.points[12] ]
   ];
   columnNames1 = ["Month", "Tokyo", "New York","Berlin", "Paris"];
   options1 = {   
      hAxis: {
         title: 'Mois'
      },
      vAxis:{
         title: 'Nombre'
      },
	  pointSize:5
   };
  

  constructor(private voyageurService:VoyageurService) { } 

  ngOnInit(): void {
    this.getInformations();
    console.log("work");
    
    
    
  }

  public getInformations()
  {
    this.voyageurService.getGlobalInformations().subscribe(data=>{
      this.globalInformation=data;
      this.points=data.points;
      console.log(data);
      console.log(data.points);
      console.log(this.points);
      this.data1= [
        ["Jan", this.points[1] ],
        ["Feb", +this.points[2] ],
        ["Mar", +this.points[3] ],
        ["Apr",this.points[4]  ],
        ["May",+this.points[5]  ],
        ["Jun", +this.points[6] ],
        ["Jul", this.points[7] ],
        ["Aug",this.points[8]  ],
        ["Sep",+this.points[9]  ],
        ["Oct", +this.points[10] ],
        ["Nov", +this.points[11] ],
        ["Dec", +this.points[12] ]
   ];

   this.data=[
    ['Tickets Valide', data.ticket_v],
    ['Tickets Non-valide', data.ticket_nv], 
 ];
      
    })
  }



}
