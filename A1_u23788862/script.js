var pets = [
  { name: "Polly", species: "bird", age: 1, adopted: false, adoptedDate: "", adoptionFee: 560 },
  { name: "Fluffy", species: "dog", age: 4, adopted: true, adoptedDate: "2023-03-27",adoptionFee: 890 },
  { name: "Daisy", species: "dog", age: 9, adopted: true, adoptedDate: "2021-01-05", adoptionFee: 780 },
  { name: "Coco", species: "rabbit", age: 3, adopted: true, adoptedDate: "2019-01-30", adoptionFee: 615 },
  { name: "Simba", species: "cat", age: 4, adopted: true, adoptedDate: "2019-09-30", adoptionFee: 995 },
  { name: "Oreo", species: "rabbit", age: 4, adopted: false, adoptedDate: "", adoptionFee: 605 },
  { name: "Bella", species: "cat", age: 6, adopted: false, adoptedDate: "", adoptionFee: 810 },
  { name: "Milo", species: "bird", age: 3, adopted: false, adoptedDate: "", adoptionFee: 740 },
  { name: "Buddy", species: "dog", age: 10, adopted: true, adoptedDate: "2021-02-01", adoptionFee: 735 },
  { name: "Pebbles", species: "bird", age: 4, adopted: false, adoptedDate: "", adoptionFee: 505 },
];

class PetHandler 
{
  constructor(petArray)
  {
    this.pets = petArray;
  }

  findPetsInAgeRange(minAge, maxAge)
  {
    // return this.pets.filter(function(element) {
    //   return element.age >= minAge && element.age <= maxAge;
    // });

    return this.pets.filter(pet => pet.age >= minAge && pet.age <= maxAge);
  }

  listAdoptedPetsByDate()
  {
    // return this.pets.filter(function(element) {
    //   return element.adopted === true;
    // }).sort(function(a, b) {
    //   return new Date(b.adoptedDate) - new Date(a.adoptedDate)})

    return this.pets.filter(pet => pet.adopted)
    .sort((a,b) => new Date(b.adoptedDate) - new Date(a.adoptedDate));
  }

  listPets(...args)
  {
    //console.log(args.length);
    const list = args.length ? (Array.isArray(args[0]) ? args[0] : args) : this.pets;

    const createPetItem = pet => {
      return pet.adopted ?  `${pet.name} | ${pet.species} | Age: ${pet.age} | Adopted!`
      : `${pet.name} | ${pet.species} | Age: ${pet.age}`;
    }

    return list.map(createPetItem);
  }

  calculateUniqueAdoptionFee(...petNames)
  {
    // const uniquePets = this.pets.filter(pet => petNames.includes(pet.name));
    // return uniquePets.reduce((accumulator, pet) => accumulator + pet.adoptionFee, 0);

    const uniqueNames = [...new Set(petNames)];
    const uniquePets = this.pets.filter(pet => uniqueNames.includes(pet.name));
    return uniquePets.reduce((accumulator, pet) => accumulator + pet.adoptionFee, 0);
  }

}

Array.prototype.findPetsInAgeRange = function(minAge, maxAge)
{
  return this.filter(pet => pet.age >= minAge && pet.age <= maxAge);
}

Array.prototype.listAdoptedPetsByDate = function()
{
  return this.filter(pet => pet.adopted).sort((a,b) => new Date(b.adoptedDate) - new Date(a.adoptedDate));
}

Array.prototype.listPets = function(...args)
{
  const list = args.length ? (Array.isArray(args[0]) ? args[0] : args) : this;

  const createPetItem = pet => {
    return pet.adopted ?  `${pet.name} | ${pet.species} | Age: ${pet.age} | Adopted!`
    : `${pet.name} | ${pet.species} | Age: ${pet.age}`;
  }

  return list.map(createPetItem);
}

Array.prototype.calculateUniqueAdoptionFee = function(...petNames)
{
  // const uniquePets = this.filter(pet => petNames.includes(pet.name));
  // return uniquePets.reduce((accumulator, pet) => accumulator + pet.adoptionFee, 0);

    const uniqueNames = [...new Set(petNames)];
    const uniquePets = this.filter(pet => uniqueNames.includes(pet.name));
    return uniquePets.reduce((accumulator, pet) => accumulator + pet.adoptionFee, 0);
}

//**TESTING**//

// const handler = new PetHandler(pets);

// console.log(handler.findPetsInAgeRange(1, 5));
// console.log(handler.listAdoptedPetsByDate());
// console.log(handler.listPets());
// console.log(handler.calculateUniqueAdoptionFee('Milo', 'Coco', 'Milo'));

// // Chaining examples
// console.log(handler.findPetsInAgeRange(1, 5).listPets());
// console.log(handler.listAdoptedPetsByDate().findPetsInAgeRange(1, 5));
// console.log(handler.listAdoptedPetsByDate().findPetsInAgeRange(3, 10).listPets());


