const express = require('express');
const Joi = require('joi');
const router = express.Router();
const animalsAPI = require('../animalsAPI.js')

const schema = Joi.object({
  animalname: Joi.string().min(3),
  sexname: Joi.string().min(3)
});

//funciona
router.get('/', (req, res) => {
  const {orderBy} = req.query;

  res.send({animalsAPI, orderBy});
});

//funciona
router.get('/:id', (req, res) => {
  const {id} = req.params;
  res.send(animalsAPI.get(id));
});

//funciona
router.post('/', (req, res) => {
  const {animalname , sexname} = req.body;

  const result = schema.validate({animalname, sexname});
  if (result.error) return res.status(400).send(result.error.details[0].message);
  animalsAPI.addAnimal(sexname, animalname);
  
  res.send(console.log('Animal agregado'));
});

//funciona
router.put('/:id', (req, res, next) => {
  const {id} = req.params;
  const {nameanimal = '', puttosleep = ''} = req.body;
  
  res.send(animalsAPI.updateAnimal(id, nameanimal, puttosleep));
});

//funciona
router.delete('/:id', (req, res) => { 
  const {id} = req.params;
  const animal = animalsAPI.deleteAnimal(id);

  res.send(animal);
});

module.exports = router;