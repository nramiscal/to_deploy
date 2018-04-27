import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {

    private pet: any;
    private original: any;
    // private id: any;
    // private _route: ActivatedRoute;
    private _router: Router;
    private errors: any;
    private data: any;
    private id: any;
    private valid: Boolean;

    constructor(private route: ActivatedRoute, private ps: PetService, private router: Router) {
        this.errors = [];
        this.valid = false;
    }

    ngOnInit() {
        console.log(`inside Edit constructor...`);

        this.route.params.subscribe( params => {
            this.id = params['id'];
            // console.log(typeof(params['id'])); // string! -> use this!!!! :)
            // this.id = +params['id'];
            // console.log(typeof(this.id)); // number! but becomes NaN!!!! :(
            let obs = this.ps.showPet(params['id']);

            // console.log(obs); // Observable...

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
                    console.log(`no errors. successfully received data`);
                    console.log(data);
                    this.pet = data;
                    this.original = data;
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
                    console.log(`redirecting to Details page...`);
                    this.goHome();
                }
            })
        });
    }


    goHome(){
        this.router.navigate([`/products`]);
    }

    // reset(){
    //     this.pet = this.original;
    // }

    reset(){
        this.router.navigate([`/products/${this.pet._id}`]);
        // this.router.navigate([`/products/edit/${this.pet._id}`]);
    }

}
