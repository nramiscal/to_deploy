import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {

    private pet: any;
    private id: any;
    private errors: any;
    private data: any;
    private liked: any;
    private adopted: Boolean;

    constructor(private route: ActivatedRoute, private ps: PetService, private router: Router) {
    }

    ngOnInit() {
        this.liked = false;
        this.adopted = false;
        this.route.params.subscribe( params => {
            // console.log(typeof(params['id'])); // string! -> use this!!!! :)
            this.id = +params['id'];
            // console.log(typeof(this.id)); // number! but becomes NaN!!!! :(
            let obs = this.ps.showPet(params['id']);

            // console.log(obs); // Observable{...}

            obs.subscribe( data => {
                console.log("GOT BACK DATA");

                if (data["error"]){
                    console.log(data["error"]);
                    this.errors = [];

                    for (let x in data["error"]["errors"]){
                        console.log(data["error"]["errors"][x]); // object, object, object
                        console.log(data["error"]["errors"][x]["message"]);
                        this.errors.push(data["error"]["errors"][x]["message"]);
                    }

                    console.log(this.errors);
                }
                else {
                    console.log(data);
                    this.pet = data;
                }
            })
        });
    }

    addLike(){
        console.log(`liked!`);
        this.liked = true;
        this.pet.likes++;
        this.updatePet();
    }

    adoptPet(){
        console.log(`adopting pet...soon to remove from database`);
        this.route.params.subscribe( params => {
            let obs = this.ps.removePet(params['id']);
            obs.subscribe( data => {
                console.log("receiving data from db...");
                if (data){
                    console.log(`dog successfully removed from database`);
                    this.adopted = true;
                    this.waitThenGoHome();
                }
                else {
                    console.log(`there was an error in removing dog`);
                }
            })
        });
    }

    updatePet(){

        console.log(`beginning to update pet...`);
        console.log(`current pet is ${this.pet}`);
        this.route.params.subscribe( params => {
            let obs = this.ps.updatePet(params['id'], this.pet);
            obs.subscribe( data => {
                console.log("receiving data from db...");
                if (data["error"]){
                    console.log(`there was an error`);
                }
                else {
                    console.log(`DATA: ${data}`);
                    this.pet = data;
                }
            })
        });
    }

    goToDetailsPage(){
        this.router.navigate([`/details/${this.id}`]);
    }

    goHome() {
      this.router.navigate(['/products']);
    }

    waitThenGoHome() {
        setTimeout(()=>{ this.goHome() }, 2000);
    }

}
