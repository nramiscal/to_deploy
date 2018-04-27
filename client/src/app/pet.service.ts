import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PetService {

  constructor(private _http:HttpClient) { }

    getAllPets(){
        return this._http.get("/api/pets");
    }
    createPet(pet){
        return this._http.post("/api/pets", pet);
    }
    showPet(id){
        return this._http.get(`/api/pets/${id}`, id); // YES!!!!!
    }
    updatePet(id, pet){
        // return this._http.put("/api/pets/:id", id ); // WRONG!!!!
        return this._http.put(`/api/pets/${id}`, pet ); // RIGHT!
    }
    removePet(id){
        return this._http.delete(`/api/pets/${id}`, id);
    }

}



// module.exports = (app) => {
//     // all my routes
//     app.get('/api/', Pets.index);
//     app.get('/api/pets', Pets.index);
//     app.post('/api/pets', Pets.create);
//     app.get('/api/pets/:id', Pets.show);
//     app.put('/api/pets/:id', Pets.update);
//     app.delete('/api/pets/:id', Pets.destroy);
//     app.all("*", Pets.all);
//
// }
