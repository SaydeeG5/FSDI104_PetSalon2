//object literal notation
let petSalon = {
    //properties 
    name:"The Fashion Pet",
    address:{
        street:"University",
        number:"262",
        zip:"22408"
    },
    pets:[]
}

//create the constructor
// <------parameters (local variables)----->
// Pet is the object , name , age etc are the properties ( arrays) this is basically the boiler plate for each pet that the user(s) will want to register  
function Pet(name,age,gender,breed,service,owner,phone){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed;
    this.service=service;
    this.ownerName=owner; //***** 
    this.contactPhone=phone; //***** 
}

//create pets - this is for test purposes ; so we can test if delete or add ( so we wouldnt have to add in users field ) are working properly or even just to make sure that its working properly 
let pet1 = new Pet("Scooby",60,"Male","Dane","Grooming","Shaggy","555-555-5555");

let pet2 = new Pet("Nessa",3,"Female","Border Collie","Vaccine","Monica","555-444-5555");

let pet3 = new Pet("Shoyu",9,"Female","Hybrid Bully","Nail Cut","Clarissa","555-333-5555");

console.log(pet1,pet2,pet3);
petSalon.pets.push(pet1,pet2,pet3);

//getting the inputs ; this will get the values of the input fields that are entered by the user  ( important that html id and this id matches exactly)
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("selService");
let inputOwner = document.getElementById("txtOwner");
let inputContactPhone = document.getElementById("txtContactPhone");

//register function connected to the button in html ( register) this is the execution of that button  
function register(){
    //get the values this is just for testing purposes  
        //console.log(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputOwner.value,inputContactPhone.value);
    
        //create the object this is what is going to get the values form the user input this is from the boiler plate we created above , but this is the execution the one above is the set up    
    let thePet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputOwner.value,inputContactPhone.value);
    
        //display the object this just displays the object on the console for testing purposes 
    console.log(thePet);
    
        //push the object this is what is going to push the object ( the values from the users input ) to the array of thePet 
    petSalon.pets.push(thePet);
    
        //display the petSalon.pets 
    console.log(petSalon.pets);
    document.getElementById("registerForm").reset();
    
}



//console.log(petSalon.address.street);
//console.log(petSalon.pets)

// function displayNames(petSalon){
//     alert(petSalon.pets.length);
// }
// for(let i=0;i<petSalon.pets.length;i++){
//         console.log(petSalon.pets[i].name);
// }

// displayNames(petSalon)
