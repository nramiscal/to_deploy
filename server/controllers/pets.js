let mongoose = require('mongoose'),
    Pet = mongoose.model('Table'),
    path = require('path');

class PetController{

    noMatch(req, res){
        res.sendFile(path.resolve("./client/dist/index.html"))
    }

    all(req,res){
        Pet.find({}, (err,pets) => {
            if (!err){
                return res.status(200).json(pets);
            } else {
                return res.status(404).json({errors:"Failed to retrieve all"});
            }
        })
    }

    sortByType(req,res){
        console.log(`findall, sort by type...`);
        Pet.find({})
        .sort({
            type: 1
        })
        .exec((err,pets) => {
            if (pets){
                console.log(`returning objects...`);
                return res.status(200).json(pets);
            } else {
                console.log(`Failed to retrieve objects`);
                return res.status(404).json({errors:"Failed to retrieve objects"});
            }
        });
    }


    // CREATE - create / save / req.body
    create(req,res){

        Pet.create(req.body, (err,pet) => {
            console.log(`attempting to create object...`);
            console.log(`ERROR:  ${err}`);
            console.log(`OBJECT:  ${pet}`);
            if (!err){
                console.log("object was created succesfully");
                return res.json(pet);
            } else {
                console.log("there is an error");
                return res.json({error: err});
            }
        })

    }


    // READ - show / findById / req.params.id
    show(req,res){

        Pet.findOne({_id:req.params.id}, (err,pet) => {
            console.log(`attempting to find object...`);
            console.log(`ERROR:  ${err}`);
            console.log(`OBJECT:  ${pet}`);
            if(!err){
                return res.status(200).json(pet);
            } else {
                return res.status(404).json({errors:"Failed to retrieve object."});
            }
        })
    }


    // // UPDATE - update / findByIdAndUpdate / req.params.id
    update(req,res){
        Pet.findByIdAndUpdate(req.params.id, req.body, {new: true},(err,pet) => {
            if(err) {
                return res.json({errors: err});
            } else {
                return res.json(pet);
            }
        });

    }

    // DESTROY - destroy / findByIdAndRemove / req.params.id
    destroy(req,res){
        Pet.findByIdAndRemove({_id:req.params.id}, (err) => {
            if(err){
                return res.json({removed: false});
            } else {
                return res.json({removed: true});
            }
        });
    }

}

module.exports = new PetController();
