import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private pets: any;
  private pet: any;
  private savedPet: any;

  constructor(private ps: PetService) {}

  ngOnInit() {
      this.pet = {
          name:"",
          type: "",
          desc: "",
          skill1: "",
          skill2: "",
          skill3: ""
      };

      this.savedPet = {};

      this.pets = this.getAllPets();

  }

  getAllPets(){
      let obs = this.ps.getAllPets();
      obs.subscribe(
            (data) => {
                this.pets = data;
            }
        )
  }

  createPet(){
      let obs = this.ps.createPet(this.pet);
      obs.subscribe(
          (data)=>{
              console.log(data);
              this.savedPet = data;
              this.pet = {
                  title:"",
                  desc: "",
                  completed: false
              };
          }
      );
  }


}
