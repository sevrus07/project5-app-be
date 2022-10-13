const express = require('express');
const router  = express.Router();

const Song = require('../models/song');

// CRUD Functionalities
router.get('/', ( request, response ) => {
    Song.find().then( data => {
        response.send( data );
    });
  });
  
  router.get('/:id', ( request, response ) => {
    Song.findOne({ _id: request.params.id }).then( data => {
        response.send( data );
    });
  });
  router.get('/title', ( request, response ) => {
    Song.findOne({ title: request.params.title }).then( data => {
        response.send( data );
    });
  });
  
  
  router.delete('/:id', ( request, response ) => {
  
    Song.deleteOne({ _id: request.params.id }).then( data => {
        if( data.deletedCount === 1 ){
            response.send({message: `Task deleted!` });
        }else{
            response.send({error: `Task with id ${request.params.id} does not exist!` });
        }
    });
  });
  
  
  router.post('/', ( request, response ) => {
  
    const newSong = new Song( request.body );
  
    newSong.save().then( data => {
        if( data._id ){
            response.send( data );
        }else{
            response.send({ error: `Resource was not created!` });
        }
    });
  });
  
  router.put('/:id', ( request, response ) => {
    Song.updateOne({ _id: request.params.id }, [{ $set: request.body }] ).then( data => {
        // console.log( data );
        if( data.modifiedCount === 1 ){
            response.send({ message: `Resource has been updated!` });
        }else{
            response.send({ error: `Error in update!` });
        }
    });
  });


module.exports = router;