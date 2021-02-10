const data = require('./data.json');

function get(id) {
    return data.find(animal => animal.id == id)
}

function deleteAnimal(id) {
    let deletedAnimal;
    data.forEach(function(animal, index){
        
        if (animal.id == id){
            deletedAnimal = data.splice(index, index+1);
            console.log(animal)
        console.log(id)
        console.log(index)
        }
    })
    console.log('Animal eliminado')
    console.log(deletedAnimal)
    return deletedAnimal
}

function addAnimal(animalname,sexname ){
    data.push({id:data.length+1 ,animalname,sexname})
    
}

function updateAnimal(id, speciesname, puttosleep){
    get(id).speciesname = speciesname
    get(id).puttosleep = puttosleep
}

module.exports = {
    get: get,
    addAnimal: addAnimal,
    updateAnimal: updateAnimal,
    deleteAnimal: deleteAnimal,
    data: data,
}
// module.exports = getData()