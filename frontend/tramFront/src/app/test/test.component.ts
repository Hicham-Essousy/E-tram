import { Component, OnInit } from '@angular/core';
import { Ligne } from '../model/model.ligne';
import { TestModel } from '../model/model.test';
import { CustomMap } from '../shared/model.customMap';
import { TestService } from '../shared/testService';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  ligne : any ;
  file :any;
  lat: number = 51.678418;
  lng: number = 7.809007;

  files: any[];

  constructor(private testService : TestService) { 
    
  }

  ngOnInit(): void {
    
  }

   getResponse(){
    
  }

sendPhoto(){
  this.testService.upload(this.files[0]).subscribe(data=>
    {
      console.log("good");
    })

}



onFileChange(event){
  this.files = event.target.files;
  console.log(event);
  console.log(this.files[0])
}




}
