import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-new',
  templateUrl: './pet-new.component.html',
  styleUrls: ['./pet-new.component.css']
})
export class PetNewComponent implements OnInit {
  private pets: any;
  private pet: any;
  private savedPet: any;
  private errors: any;
  private data: any;

  constructor(private ps: PetService, private router: Router ) {}

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
      this.pets = [];
      this.errors = [];

  }

  goHome() {
    this.router.navigate(['/products']);
  }

  createPet(){
      let obs = this.ps.createPet(this.pet);
      obs.subscribe(
          (data)=>{
              console.log(`GOT BACK DATA`);
              // console.log(`DATA: ${data}`);

              if (data["error"]){
                  // for (let d in data["error"]){
                  //     console.log(`d is ${d}`);
                  //     console.log(`data["error"] is ${data["error"]}`);
                  //     console.log(typeof(data["error"][d]));
                  // }
                  // console.log(typeof(data["error"]["errors"]));

                  this.errors = [];

                  for (let x in data["error"]["errors"]){
                      console.log(data["error"]["errors"][x]); // object, object, object
                      console.log(data["error"]["errors"][x]["message"]);
                      this.errors.push(data["error"]["errors"][x]["message"]);
                  }
              }
              else {
                  this.data = data;
                  this.pet = {
                      title:"",
                      desc: "",
                      completed: false
                  };
                  this.goHome();


              }
          }
      );
  }


}
