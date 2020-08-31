// console.log("Wake Byron the poodle");
// console.log("Leash Byron the poodle");
// console.log("Walk to the park with Byron the poodle");
// console.log("Throw the frisbee for Byron the poodle");
// console.log("Walk home with Byron the poodle");
// console.log("Unleash Byron the poodle");


    
function wakeDog(dogName, dogBreed) {
let strg = `Wake ${dogName} the ${dogBreed}`;
console.log(strg)
return strg
}
            
            function leashDog(dogName, dogBreed){
                let strg = `Leash ${dogName} the ${dogBreed}`;
                console.log(strg);
                return strg
            }
            
            function walkToPark(dogName, dogBreed){
                let strg = `Walk to the park with ${dogName} the ${dogBreed}`
                console.log(strg);
                return strg
            }
            
            function throwFrisbee(dogName, dogBreed){
                let strg = `Throw the frisbee for ${dogName} the ${dogBreed}`
                console.log(strg);
                return strg
            }
            
            function walkHome(dogName, dogBreed){
                let strg = `Walk home with ${dogName} the ${dogBreed}`
                console.log(strg);
                return strg
            }
        
            function unleashDog(dogName, dogBreed){
                let strg = `Unleash ${dogName} the ${dogBreed}`
                console.log(strg);
                return strg
            }

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed){
    const a = dogName;
    const b = dogBreed;
    return routine.map(f1 => f1(a, b));
}

