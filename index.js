const arr = ["amid","ayxan","tural","mehemmed"]
function reverseArray(arr){
    let array= arr.reverse()
    return array
}
console.log(reverseArray(arr))
 

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
function greetAliens(aliens){
    aliens.forEach(element => {
        console.log("Oh powerfull "+element+", we humans offer our unconditional surrender!")
        
    });
        
    
}
greetAliens(aliens);


const coolStuff = [
    "gameboys",
    "skateboards",
    "backwards hats",
    "my room",
    "temporary tattoos"
  ];
  const myStuff = [
    "sweaters",
    "skateboards",
    "family-night",
    "my room",
  ];
  function justCoolStuff (coolStuff,myStuff){
    coolStuff.forEach((item)=>{
        myStuff.forEach((element)=>{
            if(item==element){
                console.log(item)
            }
        })
    })
}
  
justCoolStuff(myStuff, coolStuff)


const meal = [
    { name: "arugula", source: "plant" },
    { name: "tomatoes", source: "plant" },
    { name: "lemon", source: "plant" },
    { name: "olive oil", source: "plant" },
  ];
  const dinner = [
    { name: "hamburger", source: "meat" },
    { name: "cheese", source: "dairy" },
    { name: "ketchup", source: "plant" },
    { name: "bun", source: "plant" }
  ];
  function isTheDinnerVegan(item){
        for(let i = 0; i<arr.length; i++){
               if(item[i].source !== 'meat'){
                return false
               }else{
                return true
               }
        }
  }
  console.log(isTheDinnerVegan(meal));
  console.log(isTheDinnerVegan(dinner));
  