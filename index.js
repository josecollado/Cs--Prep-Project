let readlineSync = require('readline-sync');
// bigPotion + smallPotion camelCased for my function backpack
const user = {
  name: undefined,
  pokemon1: undefined,
  pokemon2: undefined,
  pokemon3: undefined,
  pokemon4: undefined,
  schmeckles: 2000,
  pokeball: 0,
  bigPotion: 0,
  smallPotion: 0
}

const rivalStart = {
  pokemon1: undefined,
} 
let rivalStartMove = "undefined";
let gameTriesLeft = 3;
///////////////////----------------------------
// might have to move this object down, not sure so that mons are initialized (no undefined error)
/*
const rivalEnd = {
 pokemon1: undefined,
 pokemon2: rattataRivalEnd,
 pokemon3: spearowRivalEnd,
 pokemon4: vulpixRivalEnd
}
//might have to move this object down, not sure so that mons are initialized (no undefined error)
const gymLeaderChris = {
  pokemon1: onyxGymLeader,
  pokemon2: sandshrewGymLeader,
  pokemon3: machopGymLeader,
}
*/
////////////////////----------------------------
const pokeMartInventory = {
  pokeball: 1,
  smallPotion: 1,
  bigPotion: 1,
  pokeballPrice: 20,
  smallPotionPrice: 20,
  bigPotionPrice: 50
}

class MoveSetCreator {
  constructor(name, damage, type, strength, weak)  {
    this.name = name,
    this.damage = damage,
    this.type = type,
    // strength types are the types the move is strong against, double damage
    this.strength = strength,
    // weak types are the types the move is weak against, half damage
    this.weak = weak
  }
}
const moveNormal = new MoveSetCreator("Tackle", 10, 'normal', [], ['fighting']);

const moveGrass = new MoveSetCreator("Vine Whip", 10, 'grass', ['water', 'ground', 'rock'], ['fire', 'grass', 'poison', 'flying', 'bug']);

const moveFire = new MoveSetCreator("Ember", 10, 'fire', ['grass', 'bug'], ['fire', 'water', 'rock']);

const moveWater = new MoveSetCreator("Water Gun", 10, 'water', ['fire', 'ground', 'rock'], ['water', 'grass']);

const movePoison = new MoveSetCreator("Acid", 10, 'poison', ['grass', 'bug'], ['poison', 'ground', 'rock']);

const moveFlying = new MoveSetCreator("Peck", 10, 'flying', ['grass', 'bug'], ['fire', 'water', 'rock']);

const moveBug = new MoveSetCreator("String Shot", 10, 'bug', ['grass', 'poison'], ['fire', 'fighting', 'flying']);

const moveGround = new MoveSetCreator("Sand Attack", 10, 'ground', ['fire', 'electric', 'poison', 'rock'], ['grass', 'flying', 'bug']);

const moveRock = new MoveSetCreator("Rock Throw", 10, 'rock', ['fire', 'flying', 'bug'], ['fighting', 'ground']);

const moveFighting = new MoveSetCreator("Karate Chop", 10, 'fight', ['normal', 'rock'], ['poison', 'flying', 'psychic', 'bug']);

const moveElectric = new MoveSetCreator("Thundershock", 10, 'electric', ['water', 'flying'], ['electric', 'grass']);

const moveDestroy = new MoveSetCreator("Obliterate", 1000, 'dark', [], [] ); // for missingNo.

class Pokemon {
  constructor(name, level, hp, type, move1, move2) {
  this.name = name
  this.level = level
  this.hp = hp
  this.type = type
  this.move1 = move1
  this.move2 = move2
}
  levelUp() {
    this.hp++
    this.level++;
    this.move1++;
    this.move2++;
  }
}

const bulbasaur = new Pokemon("bulbasaur", 1, 50, 'grass', moveNormal, moveGrass);

const charmander = new Pokemon("charmander", 1, 50, 'fire', moveNormal, moveFire);

const squirtle = new Pokemon("squirtle", 1, 50, 'water', moveNormal, moveWater);

const bulbasaurRivalStart = new Pokemon("bulbasaur", 1, 50, 'grass', moveNormal, moveGrass);

const bulbasaurRivalEnd = new Pokemon("bulbasaur", 8, 85, 'grass', moveNormal, moveGrass);

const charmanderRivalStart = new Pokemon("charmander", 1, 50, 'fire', moveNormal, moveFire);

const charmanderRivalEnd = new Pokemon("charmander", 8, 85, 'fire', moveNormal, moveFire);

const squirtleRivalStart = new Pokemon("squirtle", 1, 50, 'water', moveNormal, moveWater);

const squirtleRivalEnd = new Pokemon("squirtle", 1, 85, 'water', moveNormal, moveWater);

const pidgey = new Pokemon("pidgey", 1, 50, 'flying', moveNormal, moveFlying);

const caterpie = new Pokemon("caterpie", 1, 50, 'bug', moveNormal, moveBug);

const rattataRivalEnd = new Pokemon("rattata", 8, 85, 'normal', moveNormal, movePoison);

const jigglypuff = new Pokemon("jigglyPuff", 1, 50, 'normal', moveNormal, moveFighting);

const weedle = new Pokemon("weedle", 1, 50, 'poison', moveNormal, movePoison);

const spearowRivalEnd = new Pokemon("spearow", 8, 85, 'flying', moveNormal, moveFlying);

const ekans = new Pokemon("ekans", 1, 50, 'poison', moveNormal, movePoison);

const sandshrewGymLeader = new Pokemon("sandshrew", 7, 80, 'ground', moveNormal, moveGround);

const poliwag = new Pokemon("poliwag", 1, 50, 'water', moveNormal, moveWater);

const bellsprout = new Pokemon("bellsprout", 1, 50, 'grass', moveNormal, moveGrass);

const growlithe = new Pokemon("growlithe", 1, 50, 'fire', moveNormal, moveFire);

const pikachu = new Pokemon("pikachu", 1, 50, 'electric', moveNormal, moveElectric);

const geodude = new Pokemon("geodude", 1, 50, 'rock', moveNormal, moveRock);

const onyxGymLeader = new Pokemon("onyx", 7, 80, 'rock', moveNormal, moveRock);

const machopGymLeader = new Pokemon("machop", 7, 80, 'fighting', moveNormal, moveFighting);

const vulpixRivalEnd = new Pokemon("vulpix", 8, 85, 'fire', moveNormal, moveFire);

const ponyta = new Pokemon("ponyta", 1, 50, 'fire', moveNormal, moveFire);

const venonat = new Pokemon("venonat", 1, 50, 'bug', moveNormal, moveBug);

const missingno = new Pokemon("missingno", 10, 500, 'dark', moveDestroy, moveDestroy); 



///////////////////----------------------------
//had to move this object down, so that mons for npc are initialized (no undefined error)
const rivalEnd = {
 pokemon1: undefined,
 pokemon2: rattataRivalEnd,
 pokemon3: spearowRivalEnd,
 pokemon4: vulpixRivalEnd
}
//had to move this object down, so that mons for npc are initialized (no undefined error)
const gymLeaderChris = {
  pokemon1: onyxGymLeader,
  pokemon2: sandshrewGymLeader,
  pokemon3: machopGymLeader,
}


let randomPokemon = [venonat,ponyta,geodude,pikachu,growlithe,bellsprout,poliwag,ekans,weedle,jigglypuff,caterpie,pidgey];



// const pokeMart = () => "Hi this is the pokemart";
// const pokeCenter = () => "Hi this is the pokecenter";
//  const gym = () => {
//    console.log("This is the gym!");
//    console.log("Leaving gym now...")
//    return immersiveTown();
// }

let atTheGym = false;
let beenToGym = false;
let userBeatChris = false;
let userBeatRivalEnd = false;
let userFoughtChris = false;
let userFountRivalEnd = false;
let goToSIP = false;


// starts talking introduction- make this introOne()
console.log("???: Hello there!  Welcome to the world of Pokémon.")
console.log("???: My name is WILL!  People call me the POKEMON PROF!(and the backpack guy)")
console.log("WILL: This world is inhabited by creatures called Pokémon!")
console.log("WILL: For some people, Pokémon are pets.")
console.log("WILL: Others use them for fights.")
console.log("WILL: Myself... I study Pokémon as a profession.")
//console.log("");
console.log("");
console.log("");
let starterChoice;
// Have user choose pokemon
while (starterChoice !== 'squirtle' || starterChoice !== 'bulbasaur' || starterChoice !== 'charmander' || starterChoice !== 'missingno') {
  starterChoice = readlineSync.question('Your starter choices are squirtle, bulbasaur, and charmander, Choose your starter : ');
  if (starterChoice.toLowerCase() === 'squirtle') {
      //console.log("");
console.log("");
console.log("");
  console.log(`Hey there ${starterChoice}!`);
  user.pokemon1 = squirtle;
  break;
  } else if (starterChoice.toLowerCase() === 'bulbasaur') {
      //console.log("");
console.log("");
console.log("");
  console.log(`Hey there ${starterChoice}!`);
  user.pokemon1 = bulbasaur; 
  break;
  } else if (starterChoice.toLowerCase() === 'charmander') {
      //console.log("");
console.log("");
console.log("");
  console.log(`Hey there ${starterChoice}! `);
  user.pokemon1 = charmander;
  break;
  } else if (starterChoice.toLowerCase() === 'missingno') {
      //console.log("");
console.log("");
console.log("");
  console.log(`Hey there ${starterChoice}! `);
  user.pokemon1 = missingno;
  break;
  } else console.log(`Your starters are squirtle, bulbasaur, or charmander choose one`)
}

// console.log(user.pokemon1);

// Have user enter their name

user.name = readlineSync.question('WILL: What is your name young one? ');

meetHackReactor();

if (starterChoice === 'bulbasaur') {
  rivalStart.pokemon1 = charmander;
} else if (starterChoice === 'charmander') {
  rivalStart.pokemon1 = squirtle;
} else if (starterChoice === 'squirtle') {
  rivalStart.pokemon1 = bulbasaur;
} else rivalStart.pokemon1 = squirtle;


if (rivalStart.pokemon1 === charmander) rivalStartMove = "Ember";
else if (rivalStart.pokemon1 === squirtle) rivalStartMove = "Water Gun";
else if (rivalStart.pokemon1 === bulbasaur) rivalStartMove = "Vine Whip";

// need to add rivalStart.move2 for each pokemon
// console.log(rivalStart.pokemon1); -- Show  Pokemon Object is in rivalStart Object
// ----------- DIALOGUE FUNCTIONS AND STARTING GAME---------
hackReactorChoice();
placesOption();

// from here on out, only use immersiveTown() for locations
//immersiveTown();

// going to gym invokes gymIntro() and that is where you can fight Chris
// then if user agrees to battle, it triggers the battle
// Battle against Chris
// if user does not agree to battle bring up location list
// assign these variables below vvv
// if user wins, userBeatChris = true, if lost, = false
// then invoke this postChrisFight()
// after dialogue it will auto send user to SIP, where user fights rivalEnd
// starts battle against HR.

// end of battle CODE IT to invoke rivalEndWin() or rivalEndLoss() based on result



// */












//------------ ALL FUNCTIONS GO BELOW THIS LINE SINCE THEY WILL BE HOISTED ------------\\
//--------  MAKE SURE THAT THEY ARE FUNCTION DECLARATIONS AND NOT EXPRESSIONS   --------\\
//---------------------- ANY QUESTIONS ABOUT THIS ASK JOSE BORBON ----------------------\\

//placesOption is to be used only for after user beats rivalStart 
function placesOption() {
  //select option
  let option = readlineSync.question(`You're currently in Prep Town, where would you like to go?\n forest or immersivetown?: `);
  while (option !== undefined) {
    console.log(option);
      if (option.toLowerCase() === 'forest') {
        console.log('Off to the forest you go!')
        return forest();
    } else if (option.toLowerCase() === 'immersivetown') {
        console.log('Off to immersivetown you go!')
        return immersiveTown();
    } else option = readlineSync.question(`Your only options are 'forest' or 'immersivetown': `);
  } 
}

function immersiveTown() {
  //select option pokeMart, pokeCenter, forest, or gym
  console.log("");
console.log("");
  console.log(`You are in immersiveTown`)
  let iTownOption = readlineSync.question(`Where would you like to go? \n The 'pokemart', 'pokecenter', the 'forest', the 'gym' or check your 'backpack'?: `);
  while (iTownOption !== undefined) {
      if (iTownOption.toLowerCase() === 'pokemart') {
        return pokeMart();
    } else if (iTownOption.toLowerCase() === 'pokecenter') {
        return pokeCenter();
    } else if (iTownOption.toLowerCase() === 'gym') {
        //return gym();
        atTheGym = true;
        return gymIntro();
    }
      else if (iTownOption.toLowerCase() === 'forest') {
        // console.log('Off to the forest you go!') //optional to console log this
        return forest();
    } else if (iTownOption.toLowerCase() === 'backpack') {
      return backPack();
    }
      else iTownOption = readlineSync.question(`Your only options are the 'pokeMart', 'pokeCenter', 'forest', 'gym' or 'backpack': `);
  }
}

// -------------------------- POKEMON MARKET ------------------------------ \\

//PokeMart needed to get to pokeMartYes if user types 'yes'
function pokeMart() {
  console.log("");
console.log("");
  console.log("Thane Saylor: Welcome to the pokeMart! Needa fill up your [[scope]] with goodies? Say No More! \n pokeballs and smallPotions are 20schmeckles each, and the bigPotions are 50schmeckles each.");
    let buyOrNotBuy = readlineSync.question(`Would you like to buy something? type 'yes' or 'no': `);
    while (buyOrNotBuy !== undefined) {
      if (buyOrNotBuy.toLowerCase() === 'no') return immersiveTown();
      if (buyOrNotBuy.toLowerCase() === 'yes') return pokeMartYes();
      else buyOrNotBuy = readlineSync.question("Thane Saylor: Hmm? what was that? did you say 'yes' or 'no'? ");
    }
}

function pokeMartYes() {
  // Grab Mart Choice pokeball/smallPotion or bigPotion
  let martChoice = readlineSync.question(`What would you like to buy? 'pokeball', 'smallPotion', 'bigPotion' \n or do you wish to 'leave'?: `);
  if (martChoice === 'leave') return immersiveTown();
  while (martChoice !== undefined) {
    if (martChoice.toLowerCase() === 'pokeball') {
      let amountBuy = readlineSync.question(`How many ${martChoice} would you like to buy? : `);
      while (typeof amountBuy !== undefined) {
      let totalCost = Number(amountBuy) * pokeMartInventory.pokeballPrice;
      console.log(`total cost is :`, totalCost);
        if (user.schmeckles >= totalCost ) {
          user.schmeckles -= totalCost;
          user.pokeball += Number(amountBuy) * pokeMartInventory.pokeball;
          // console.log(user.pokeball); // Log pokeballs in user object
          console.log(`Thane Saylor: Here you go, you have ${user.schmeckles} schmeckles left!`);
            let buyMore = readlineSync.question(`Thane Saylor: Would you like to buy anything else? type 'yes' or 'no': `);
            while (buyMore !== undefined) {
              if(buyMore.toLowerCase() === 'yes') return pokeMartYes();
              if(buyMore.toLowerCase() === 'no') return immersiveTown();
              else buyMore = readlineSync.question("Thane Saylor: Hmm? what was that? did you say 'yes' or 'no'? ");
            }
        } else console.log(`Thane Saylor: You do not have enough Schmeckles!`);
          return pokeMartYes();
        }
      } else if (martChoice.toLowerCase() === 'smallpotion') {
      let amountBuy = readlineSync.question(`How many ${martChoice} would you like to buy? : `);
      while (typeof amountBuy !== undefined) {
      let totalCost = Number(amountBuy) * pokeMartInventory.smallPotionPrice;
      console.log(`total cost is :`, totalCost);
        if (user.schmeckles >= totalCost ) {
          user.schmeckles -= totalCost;
          user.smallPotion += Number(amountBuy) * pokeMartInventory.smallPotion;
      // console.log(user.smallPotion); // Log smallPotions in user object
          console.log(`Thane Saylor: Here you go, you have ${user.schmeckles} schmeckles left!`);
            let buyMore = readlineSync.question(`Thane Saylor: Would you like to buy anything else? type 'yes' or 'no': `);
            while (buyMore !== undefined) {
              if(buyMore.toLowerCase() === 'yes') return pokeMartYes();
              if(buyMore.toLowerCase() === 'no') return immersiveTown();
              else buyMore = readlineSync.question("Thane Saylor: Hmm? what was that? did you say 'yes' or 'no'? ");
            }
        } else console.log(`Thane Saylor: You do not have enough Schmeckles!`);
          return pokeMartYes();
        }
      } else if (martChoice.toLowerCase() === 'bigpotion') {
      let amountBuy = readlineSync.question(`How many ${martChoice} would you like to buy? : `);
      while (typeof amountBuy !== undefined) {
      let totalCost = Number(amountBuy) * pokeMartInventory.bigPotionPrice;
      console.log(`total cost is :`, totalCost);
        if (user.schmeckles >= totalCost ) {
            user.schmeckles -= totalCost;
            user.bigPotion += Number(amountBuy) * pokeMartInventory.bigPotion;
      // console.log(user.bigPotion); // Log bigPotions in user object
          console.log(`Thane Saylor: Here you go, you have ${user.schmeckles} schmeckles left!`);
            let buyMore = readlineSync.question(`Thane Saylor: Would you like to buy anything else? type 'yes' or 'no': `);
            while (buyMore !== undefined) {
              if(buyMore.toLowerCase() === 'yes') return pokeMartYes();
              if(buyMore.toLowerCase() === 'no') return immersiveTown();
              else buyMore = readlineSync.question("Thane Saylor: Hmm? what was that? did you say 'yes' or 'no'? ");
            }
        } else console.log(`Thane Saylor: You do not have enough Schmeckles!`);
          return pokeMartYes();
      }
    }
    else martChoice = readlineSync.question(`Your options are 'pokeball', 'smallPotion', 'bigPotion' or 'leave': `);
    if (martChoice === 'leave') return immersiveTown();
  }
}
// -------------------------- END OF POKEMON MARKET ------------------------------ \\


// ------------------------------ POKEMON CENTER ------------------------------ \\
function pokeCenter() {
  let pokemonCenterOption = readlineSync.question(`Nurse Joy: Welcome to the PokeCenter, would you like to heal your pokemon? your options are 'yes' and 'no': `);
  while (pokemonCenterOption !== undefined) {
    if (pokemonCenterOption.toLowerCase() === 'yes') {
        return heal();
    } else if (pokemonCenterOption.toLowerCase() === 'no') {
      console.log(`Nurse Joy: Have a good day, and stay Corona free!`);
      return immersiveTown();
    } else pokemonCenterOption = readlineSync.question("Nurse Joy: Hmm? what was that dearie? did you say 'yes' or 'no'? ");
  } 
} 

function heal() {
  // full hp = level * 5 + 45;
  //create dummy object and call it missingno to test this
  user.pokemon1.hp = (user.pokemon1.level) * 5 + 45;
  console.log(`${user.pokemon1.name} is fully healed!`)
  if(user.pokemon2 !== undefined) {
    user.pokemon2.hp = (user.pokemon2.level) * 5 + 45;
    console.log(`${user.pokemon2.name} is fully healed!`)
  }
  if(user.pokemon3 !== undefined) { 
    user.pokemon3.hp = (user.pokemon3.level) * 5 + 45;
    console.log(`${user.pokemon3.name} is fully healed!`)
  }
  if(user.pokemon4 !== undefined) {
    user.pokemon4.hp = (user.pokemon4.level) * 5 + 45;
    console.log(`${user.pokemon4.name} is fully healed!`)
  }
  console.log(`Nurse Joy: Stay healthy and respect the Corona distance!`);
  return immersiveTown();
}

// -------------------------- END OF POKEMON CENTER ------------------------------ \\

function delay(cb, wait) {
  let setTime;
 function inner(...arg) {
    setTime = setTimeout(cb, wait)
    return setTime
  } return inner;
}


// ----- BackPack Function ----- \\
function backPack() {
let schmecklesString = user.schmeckles.toString();
if(user.schmeckles > 999) {
  schmecklesString = schmecklesString.split();
  schmecklesString.unshift(0);
  schmecklesString = schmecklesString.join("");
} else if (user.schmeckles > 99 ) {
  schmecklesString = schmecklesString.split();
  schmecklesString.unshift(0);
  schmecklesString.unshift(0);
  schmecklesString = schmecklesString.join("");
} else if (user.schmeckles > 10) {
  schmecklesString = schmecklesString.split();
  schmecklesString.unshift(0);
  schmecklesString.unshift(0);
  schmecklesString.unshift(0);
  schmecklesString = schmecklesString.join("");
}
let pokeballString = user.pokeball.toString();
if(user.pokeball > 9 && user.pokeball < 100 ) {
  pokeballString = pokeballString.split();
  pokeballString.unshift(0);
  pokeballString = pokeballString.join("");
} else if (user.pokeball < 10 ) {
  pokeballString = pokeballString.split();
  pokeballString.unshift(0);
  pokeballString.unshift(0);
  pokeballString = pokeballString.join("");
}

let smallPotionString = user.smallPotion.toString();
if(user.smallPotion > 9 && user.smallPotion < 100 ) {
  smallPotionString = smallPotionString.split();
  smallPotionString.unshift(0);
  smallPotionString = smallPotionString.join("");
} else if (user.smallPotion < 10 ) {
  smallPotionString = smallPotionString.split();
  smallPotionString.unshift(0);
  smallPotionString.unshift(0);
  smallPotionString = smallPotionString.join("");
}

let bigPotionString = user.bigPotion.toString();
if(user.bigPotion > 9 && user.bigPotion < 100 ) {
  bigPotionString = bigPotionString.split();
  bigPotionString.unshift(0);
  bigPotionString = bigPotionString.join("");
} else if (user.bigPotion < 10 ) {
  bigPotionString = bigPotionString.split();
  bigPotionString.unshift(0);
  bigPotionString.unshift(0);
  bigPotionString = bigPotionString.join("");
}

console.log(`  ___________________________`)
console.log(` /////"_________________"\\\\\\\\\\`);
console.log(`//   ||                 ||   \\\\`);
console.log(`||   ||pokeballs: ${pokeballString}   ||   ||`);
console.log(`||   ||smallPotion: ${smallPotionString} ||   ||`);
console.log(`||  /||bigPotion: ${bigPotionString}   ||\\  || `);
console.log(`|| /|||schmeckles: ${schmecklesString}|||\\ ||`);
console.log(`|||||||________________|||||\||| `);
console.log(`|_____________________________|`);

return immersiveTown();
}


// -----------------------Dialogue Functions-----------------------------

function meetHackReactor() {
  console.log("");
console.log("");
//console.log("");
console.log(`A long journey awaits young whippersnapper, off you go, ${user.name}!`);
console.log(` * ??? Walks inside of the lab * `);
console.log(`???: You're in my way! Get out!`);
console.log(`WILL: Now, now! You best relax in front of our guests, Hack Reactor!`);
console.log("");
console.log("");
//console.log("");
let apologizeHR;
while (apologizeHR !== 'yes' || apologizeHR !== 'no') {
  apologizeHR = readlineSync.question('Confront Hack Reactor? yes or no? ');
  if (apologizeHR.toLowerCase() === 'yes') {
    console.log("");
console.log("");
//console.log("");
  console.log(`${user.name}: C'mon man, you almost hit me.`);
  console.log(`Hack Reactor: My bad, I won't get in the way again. `);
  break;
  } else if(apologizeHR.toLowerCase() === 'no') {
    console.log("");
console.log("");
//console.log("");
  console.log(`${user.name}: ...`);
  break;
  } else console.log(`Try yes or no`)
}
console.log(`Hack Reactor: Time to choose my poke- WHAT??? YOU TOOK ${starterChoice}!`);
console.log(`Hack Reactor: Guess I'll have to pick another starter mon..`);
}

function hackReactorChoice() {
console.log(`Hack Reactor: Come to the best trainer in the world ${rivalStart.pokemon1.name}!`);
console.log(`Hack Reactor: Listen, from this day on, you're my Rival ${user.name}!`);
console.log(`Hack Reactor: That being said... I CHALLENGE YOU TO A POKEMON BATTLE!`);
console.log("");
console.log("");
//console.log("");
// do you fight? yes only
  let fightRivalNow;
  while (fightRivalNow !== 'yes' || fightRivalNow !== 'no') {
  fightRivalNow = readlineSync.question(`Battle Hack Reactor now? `);
    if (fightRivalNow.toLowerCase() === 'yes') {
      console.log("");
console.log("");
//console.log("");
        console.log(`${user.name}: YEAH!`)
        smallPreTalk();
        break;
    } else if (fightRivalNow.toLowerCase() === 'no') {
      console.log("");
console.log("");
//console.log("");
        console.log(`${user.name}: I'm okay!`)
        console.log("Hack Reactor: We are anyway!")
        smallPreTalk();
        break;
    } else console.log("yes or no...");
  }
}
// Battle Scene //
function smallPreTalk() {
console.log(`Hack Reactor: Go ${rivalStart.pokemon1.name}, prove your worth! `);
console.log(` * ${user.name} sends out ${starterChoice}. * `);
console.log(`${user.name}: Let's do this ${starterChoice}, I believe in you!`);
console.log(` * (Looks like we can only use Tackle effectively..) * `);
rivalBattleStart();
}

function rivalBattleStart() {
  console.log("");
console.log("");
//console.log("");
 let useTackleOne;
while (useTackleOne !== 'yes') {
  useTackleOne = readlineSync.question('Use Tackle? ');
  if (useTackleOne.toLowerCase() === 'yes') {
    console.log("");
console.log("");
//console.log("");
  console.log(`${user.name}: Okay, ${starterChoice}, use Tackle!`);
  break;
  } else console.log(`Try yes`)
}
console.log(` * Tackle did 10 damage, ${rivalStart.pokemon1.name} has 40 hp remaining * `);
console.log(`Hack Reactor: HA! That's it? Your Pokemon is weak to mine!`);
console.log(`Hack Reactor: Alright ${rivalStart.pokemon1.name}, use ${rivalStartMove}! `);
// should starterChoice dodge the attack?
console.log("");
console.log("");
//console.log("");
let useDodgeOne;
while (useDodgeOne !== 'yes') {
  useDodgeOne = readlineSync.question('Should the attack miss? ');
  if (useDodgeOne.toLowerCase() === 'yes') {
    console.log("");
console.log("");
//console.log("");
  console.log(` * It's a miss! * `);
  break;
  } else console.log(`Try yes`)
}
console.log(`${user.name}: Great job, ${starterChoice}, use Tackle again!`);
// should starterChoice get a critical hit?
console.log(` * It's a critical hit! * `);
console.log(` * Tackle did 20 damage, ${rivalStart.pokemon1.name} has 20 hp remaining * `);
console.log(`Hack Reactor: WHAT? How did you let that hit you ${rivalStart.pokemon1.name}?`);
console.log(`Hack Reactor: Use ${rivalStartMove}, and don't miss this time! `);
// should starterChoice dodge the attack? yes or Wrong answer, try yes.
console.log("");
console.log("");
//console.log("");
let useDodgeTwo;
while (useDodgeTwo !== 'yes') {
  useDodgeTwo = readlineSync.question('Dodge the attack? ');
  if (useDodgeTwo.toLowerCase() === 'yes') {
    console.log("");
console.log("");
//console.log("");
  console.log(` * ${starterChoice} dodged the attack! * `);
  break;
  } else console.log(`Try yes`)
}
console.log(`${user.name}: Great job ${starterChoice}, use tackle again!`);
// should starterChoice get another critical hit?
console.log("");
console.log("");
//console.log("");
let finishingTackle;
while (finishingTackle !== 'yes') {
  finishingTackle = readlineSync.question(`Finish ${rivalStart.pokemon1.name} off? `);
  if (finishingTackle.toLowerCase() === 'yes') {
  console.log(` * It's a critical hit! * `);
  break;
  } else console.log(`Try yes`)
}
console.log(` * Tackle did 20 damage, ${rivalStart.pokemon1.name} has 0 hp remaining * `);
console.log(` * ${rivalStart.pokemon1.name} has fainted. * `);
console.log(`${user.name}: You're the best ${starterChoice}!`);
console.log("");
console.log("");
//console.log("");
let backToBallOne;
while (backToBallOne !== 'yes') {
  backToBallOne = readlineSync.question(`Send ${starterChoice} back to its Pokeball? `);
  if (backToBallOne.toLowerCase() === 'yes') {
  console.log(` * ${starterChoice} goes back to its Pokeball. * `);
  break;
  } else console.log(`Try yes`)
}
postRivalBattleStart();
}

function postRivalBattleStart() {
  console.log("");
console.log("");
//console.log("");
console.log(`Hack Reactor: Hmm. You just got lucky my stupid ${rivalStart.pokemon1.name} missed! `);
console.log(`Hack Reactor: It doesn't matter though, ${rivalStart.pokemon1.name} will be way better than your ${starterChoice}! `);
console.log("Hack Reactor: Just you wait! ");
console.log(" * Hack Reactor storms off, throwing his PokeBall into his backpack in anger. * ");
// talk to will?
console.log("");
console.log("");
//console.log("");
let speakToWill;
while (speakToWill !== 'yes') {
  speakToWill = readlineSync.question(`Speak to WILL? `);
  if (speakToWill.toLowerCase() === 'yes') {
  console.log(`WILL: You see that, ${user.name}? That's not how you handle failure. `);
  break;
  } else console.log(`Try yes`)
}
console.log("WILL: Anyway, congratulations on winning your first battle!");
console.log("WILL: Oh and I almost forgot!");
console.log("WILL: Here is your Closures Backpack.");
//do you want items
console.log("");
console.log("");
//console.log("");
let wantFreeItems;
while (wantFreeItems !== 'yes') {
  wantFreeItems = readlineSync.question(`Want free items from WILL? `);
  if (wantFreeItems.toLowerCase() === 'yes') {
  console.log("WILL: You can store Pokéballs, potions, and your caught Pokémon in there.");
  break;
  } else console.log(`Try yes`)
}
// user receives 3 PokeBalls, 3 small potions, and 3 large potions 
console.log(" * You receive 3 Pokeballs, 3 Big Potions, and 3 Small Potions * ")
user.pokeball = 3;
user.bigpotion = 3;
user.smallpotion = 3;
// console.log(`pokeball: ${user.pokeball}, bigpotion: ${user.bigpotion}, smallpotion: ${user.smallpotion}`)
console.log("WILL: Head to the forest, and watch out for Pokemon!");
console.log("");
console.log("");
//console.log("");
}

function gymIntro() {
   if (beenToGym == false) {
     // console.log("");
     console.log("");
     console.log(""); 
  console.log(`???: Hello, ${user.name}. My name is Chris. `);
  console.log("CHRIS: I have been sent here from the Special Immersive Program. ");
  console.log("CHRIS: The SIP is a community of trainers going after their dreams while helping others reach theirs. ");
  console.log("CHRIS: If you want to get in, you will need a pass. ");
  console.log(`CHRIS: I warn you though... you only have ${gameTriesLeft} tries to get the pass.`);
  beenToGym = true; 
  battleChris();
  } else if (beenToGym == true) {
    battleChris();
  }
  } 

  function battleChris() {
    console.log("");
console.log("");
//console.log("");
  let battleChrisChoice;
while (battleChrisChoice !== 'yes' || battleChrisChoice !== 'no') {
  battleChrisChoice = readlineSync.question('CHRIS: Are you ready to battle? yes or no? ');
  if (battleChrisChoice.toLowerCase() === 'yes') {
  console.log(`CHRIS: Alright, let's do this!`);
    console.log("");
  console.log("");
  //console.log("");
  // trigger battle against Chris
battle(user, gymLeaderChris);
  break;
  } else if (battleChrisChoice.toLowerCase() === 'no') {
        console.log("");
  console.log("");
  //console.log("");
  console.log(`CHRIS: Alright, come back when you are ready.`);
  atTheGym = false
  immersiveTown();
  break;
  } else console.log(`CHRIS: C'mon ${user.name}, it's a yes or no question.`)
}   
}

function postChrisFight() {
if (userBeatChris == true) {
  console.log("");
  console.log("");
  //console.log("");
console.log(`CHRIS: Congratulations, ${user.name}! `);
console.log("CHRIS: I knew you could do it! ");
console.log("CHRIS: Here is your pass to the Special Immersive Program! ");
console.log("CHRIS: We will show you what it takes to be the best. ");
// have you seen hack reactor
console.log("CHRIS: Be on the lookout for Hack Reactor...");
console.log("CHRIS: He's pretty angry that he didn't get a pass.");
console.log("CHRIS: He might be jealous when he finds out you did.");
// do you want to heal
console.log("CHRIS: I'm sending you to the PokeCenter to heal up now.");
console.log("CHRIS: Don't forget to subscribe to my YouTube channel, Code Tour!");
//do you subscribe
console.log(` * ${user.name} opens up the YouTube app, finds Code Tour, and subscribes. * `);
console.log("Time to go to the Special Immersive Program!")
goToSIP = true;
chrisHeal();
goingToSIP();
} else if (userBeatChris == false && gameTriesLeft>1) {
gameTriesLeft-=1;
// heal()
console.log(`CHRIS: Well ${user.name}, you're strong... but you're not strong enough. `);
 console.log(`CHRIS: You have ${gameTriesLeft} tries left.`); 
 
 if (user.pokemon4 === undefined) {
     console.log("CHRIS: You know you can have up to 4 Pokemon, right? ");
     console.log("CHRIS: I recommend a full team if you want to win! ");
 } else {
   console.log("CHRIS: Level up your Pokemon if you want to win.")
 }  
 
}
 else if (userBeatChris == false && gameTriesLeft===1) {
     console.log("CHRIS: You used up all of your chances... ");
     console.log("CHRIS: YOU LOSE! CLEAR THE CONSOLE!");
 }
}

function goingToSIP() {
if (goToSIP == true) {
  console.log("");
  console.log("");
  //console.log("");
console.log(` * ${user.name} is heading to the SIP, when suddenly...  * `);
console.log("Hack Reactor: WHAT!? YOU GOT A PASS!?");
console.log("Hack Reactor: How is this even possible?");
console.log("Hack Reactor: I don't care what WILL or the CIRR says, I am better than you!");
console.log("Hack Reactor: I will prove it. I am not #2!");
battle(user, rivalEnd);
}
}

function rivalEndWin() {
userFoughtRivalEnd = true;
userBeatRivalEnd = true;
justFacedRival()
}
function rivalEndLoss() {
userFoughtRivalEnd = true;
userBeatRivalEnd = false;
justFacedRival()
}

function justFacedRival() {
if (userBeatRivalEnd == true) {
  console.log("");
  console.log("");
  //console.log("");
  console.log("Hack Reactor: I can't believe I lost...");
console.log("Hack Reactor: This whole time I really thought I was better...");
console.log("Hack Reactor: The CIRR is right... I am #2...");
console.log("Hack Reactor runs away, tears pouring from his face ");
//talk to will?
    console.log(`WILL: Congratulations, ${user.name}`);
    console.log("WILL: You're the best trainer in town! ");
    console.log("WILL: You've improved so much since Prep Town! ");
    //Why do you think you won?
  
    console.log("WILL: Yes, and Hack Reactor didn't learn that you have to treat your Pokemon with trust and love. ");
    console.log("WILL: This isn't only your winning, it is also because of your Pokemon! ");
    console.log(`${user.pokemon1.name}`) // Log this
    //, ${user.pokemon2.name}, ${user.pokemon3.name}, ${user.pokemon4.name}! `);
    console.log("WILL: One last thing we can't forget!");
    console.log("WILL: You better thank Jose Borbon, Jose Collado, Joey Moschella, and Nachiket Pingle for this amazing game!");
    console.log(`WILL: Now go ${user.name}, YOU BEAT THE GAME!`);  
}

if (userBeatRivalEnd == false) {
    console.log("");
  console.log("");
  //console.log("");
  console.log("Hack Reactor: I KNEW IT!");
console.log("Hack Reactor: Give me that pass.");
console.log("Hack Reactor: I'm officially THE BEST TRAINER IN TOWN!");
console.log(" * Hack Reactor steals your Closures Backpack with your Pokemon and money inside. * ");
console.log("Hack Reactor: runs away, laughing menacingly. ");
console.log(" * WILL appears and approaches you. * ");
    console.log("WILL: ... I can't believe it.");
    console.log("WILL: You lost to Hack Reactor..?");
    console.log("WILL: I'm sorry, I really thought you were ready.");
    console.log("WILL: It's time you brush up on your fundamentals and start taking this more seriously. ");
    console.log("WILL: You can either start fresh, or quit and give it all up.");
    console.log("WILL: clear the console...");  
}
}
function chrisHeal() {
  // full hp = level * 5 + 45;
  //create dummy object and call it missingno to test this
  user.pokemon1.hp = (user.pokemon1.level) * 5 + 45;
  console.log(`${user.pokemon1.name} is fully healed!`)
  if(user.pokemon2 !== undefined) {
    user.pokemon2.hp = (user.pokemon2.level) * 5 + 45;
    console.log(`${user.pokemon2.name} is fully healed!`)
  }
  if(user.pokemon3 !== undefined) { 
    user.pokemon3.hp = (user.pokemon3.level) * 5 + 45;
    console.log(`${user.pokemon3.name} is fully healed!`)
  }
  if(user.pokemon4 !== undefined) {
    user.pokemon4.hp = (user.pokemon4.level) * 5 + 45;
    console.log(`${user.pokemon4.name} is fully healed!`)
  }
}
function battle(main, enemy){  
    let currentEnemyList = [];
        for(let key in enemy){
            if(key === 'pokemon1' || key === 'pokemon2'|| key === 'pokemon3' || key === 'pokemon4'){
                if(enemy[key] !== undefined) {
                    currentEnemyList.push(enemy[key])
                }
            }
        }
    let currentPokemon = currentEnemyList[0]
    currentEnemyList.shift()
    console.log(`${currentPokemon.name}, is ready for battle!  HP:${currentPokemon.hp}`)
    let currentUserPokemonNames = [];
    let currentUserPokemon = [];
    for(let key in user){
        if(key === 'pokemon1' || key === 'pokemon2'|| key === 'pokemon3' || key === 'pokemon4'){
            if(user[key] !== undefined) {
                currentUserPokemonNames.push(user[key]['name'])
                currentUserPokemon.push(user[key])
            }    
        }
    }

    let battleChoice;
    if(battleChoice === undefined){
        while(!currentUserPokemonNames.includes(battleChoice) ){
            battleChoice =  readlineSync.question(`
        Heres a list of all your pokemon - ${currentUserPokemonNames}
        Choose a pokemon to start the battle with : `);
        if(!currentUserPokemonNames.includes(battleChoice) ) console.log(`   
            Please choose from the list`)
        else console.log(`
        GO!!! ${battleChoice.toUpperCase()}!`)
        }
    }
    let currUserPokemon = undefined;
    let currentMoves = [];
    currentUserPokemon.forEach((el) => (battleChoice === el.name)? currUserPokemon = el:null )
    for(let key in currUserPokemon){
        (key === 'move1' || key === 'move2') ? currentMoves.push(currUserPokemon[key]) : null
    }
    let choice;
    while(choice !== 'run' || choice !== 'switch' ||choice !== 'attack' ||choice !== 'bag'){
        choice = readlineSync.question(`
        What do you want to do now? Please enter-- Attack, Bag, Run, Switch:  `)

        if(choice.toLowerCase() === 'bag'){
            let counter = 0;
            while (bagChoice !== 'pokeball' || bagChoice !== 'potion(big)' || bagChoice !== 'potion(small)' || bagChoice !== 'exit'){
                pack(enemy);
                counter++
                if (bagChoice === 'pokeball' || bagChoice === 'potion(big)' || bagChoice === 'potion(small)' || bagChoice === 'exit') break
                if(counter === 3){
                    console.log('Too many tries, Returning to Menu selection');
                    setTimeout(() => '', 1500)
                    choice = '';
                    break  
                }
            }
        }
        if(choice.toLowerCase() === 'switch'){
            battleChoice = undefined;
            while(!currentUserPokemon.includes(battleChoice) ){
                battleChoice =  readlineSync.question(`
            Heres a list of all your pokemon - ${currentUserPokemonNames}
            Choose a pokemon to switch to : `);
            if(!currentUserPokemonNames.includes(battleChoice) ) console.log(`   
            Please choose from the list`)
            else console.log(`
            GO!!! ${battleChoice.toUpperCase()}!`)
            choice = ''
            break
            }
            
        }
        if(choice.toLowerCase() === 'run' && randomPokemon.includes(enemy)){
            console.log(`
            Cannot run anywhere! `)
            choice = '';
        }        
        if(choice.toLowerCase() === 'attack'){
            
            let enemyMoves = [];
                for(let key in currentPokemon){
                    (key === 'move1' || key === 'move2') ? enemyMoves.push(currentPokemon[key]) : null
                }
        
            console.log(`
            You have ${currentMoves.length} types of attacks : ${currentMoves[0].name}, ${currentMoves[1].name} 
            type 1 for ${currentMoves[0].name} and 2 for ${currentMoves[1].name}`)
            let attackChoice;
            while(attackChoice!== '1' || attackChoice !== '2'){
                attackChoice = readlineSync.question(`Which attack move do you want to use? : `)
                break
            }
            if(attackChoice === '1'){
                if(currentMoves[0].strength.includes(currentPokemon.type)){
                    currentPokemon.hp = (currentPokemon.hp - (currentMoves[0].damage * 2 ));
                }
                if(currentMoves[0].weak.includes(currentPokemon.type)){
                    currentPokemon.hp = (currentPokemon.hp - (currentMoves[0].damage / 2 ));
                } else{
                    currentPokemon.hp = (currentPokemon.hp - currentMoves[0].damage );
                }  
                console.log(`${currentPokemon.name} was hit !    HP: ${currentPokemon.hp}  `) 
            } 
            if(attackChoice === '2'){
                    if(currentMoves[0].strength.includes(currentPokemon.type)){
                        currentPokemon.hp = (currentPokemon.hp - (currentMoves[0].damage * 2 ));
                    }
                    if(currentMoves[0].weak.includes(currentPokemon.type)){
                        currentPokemon.hp = (currentPokemon.hp - (currentMoves[0].damage / 2 ));
                    } else{
                        currentPokemon.hp = (currentPokemon.hp - currentMoves[0].damage );
                    }  
                    console.log(`${currentPokemon.name} was hit !    HP: ${currentPokemon.hp}  `)
            } 
            if (currentPokemon.hp <= 0){
                if(currentEnemyList.length === 0){
                    userBeatChris = true;
                    postChrisFight();
                    break
                }else{
                    console.log(`${currentPokemon.name} has fainted! `)
                    currentPokemon = currentEnemyList[0]
                    currentEnemyList.shift()
                    console.log(`${enemy.name} has chose ${currentPokemon.name} `)
                }
            }else {
                    let randomMove = enemyMoves[Math.floor(Math.random() * 1.5)]
                    console.log(`${currentPokemon.name} uses ${randomMove.name} as their move`)
                    if(randomMove.strength.includes(currUserPokemon.type)){
                        currUserPokemon.hp = currUserPokemon.hp - (randomMove.damage * 2)
                    }else if (randomMove.weak.includes(currUserPokemon.type)){
                        currUserPokemon.hp = currUserPokemon.hp - (randomMove.damage / 2)
                    } else {
                        currUserPokemon.hp = currUserPokemon.hp - randomMove.damage
                    }

                    console.log(`${currUserPokemon.name} was hit,    ${currUserPokemon.name} has HP: ${currUserPokemon.hp}`)
                    if(currUserPokemon.hp <= 0){
                        console.log(`${currUserPokemon.name} has fainted ! please choose another pokemon`)
                        
                        currentUserPokemonNames = currentUserPokemonNames.filter(el => el !== currUserPokemon.name)     
                        currentUserPokemon = currentUserPokemon.filter(el => el !== currUserPokemon)
                        battleChoice = undefined;
                        while(!currentUserPokemon.includes(battleChoice) ){
                        battleChoice =  readlineSync.question(`
                        Heres a list of all your pokemon - ${currentUserPokemonNames}
                        Choose a pokemon to switch to : `);
                        if(!currentUserPokemonNames.includes(battleChoice) ) console.log(`   
                        Please choose from the list`)
                        else console.log(`
                        GO!!! ${battleChoice.toUpperCase()}!`)
                        choice = ''
                        break
                        }
                    }
                }    
            }

        }
    }


function forestBattle(main, enemy){
    console.log(`${enemy.name}, is ready for battle! HP:${enemy.hp}`)
     let currentUserPokemonNames = [];
    let currentUserPokemon = [];
    for(let key in user){
        if(key === 'pokemon1' || key === 'pokemon2'|| key === 'pokemon3' || key === 'pokemon4'){
            if(user[key] !== undefined) {
                currentUserPokemonNames.push(user[key]['name'])
                currentUserPokemon.push(user[key])
            }    
        }
    }
    let battleChoice;
    if(battleChoice === undefined){
        while(!currentUserPokemonNames.includes(battleChoice) ){
            battleChoice =  readlineSync.question(`
        Heres a list of all your pokemon - ${currentUserPokemonNames}
        Choose a pokemon to start the battle with : `);
        if(!currentUserPokemonNames.includes(battleChoice) ) console.log(`   
            Please choose from the list`)
        else console.log(`
        GO!!! ${battleChoice.toUpperCase()}!`)
        }
    }
    
    let currUserPokemon = undefined;
    let currentMoves = [];
    currentUserPokemon.forEach((el) => (battleChoice === el.name)? currUserPokemon = el:null )
    for(let key in currUserPokemon){
        (key === 'move1' || key === 'move2') ? currentMoves.push(currUserPokemon[key]) : null
    }
    let choice;
    while(choice !== 'run' || choice !== 'switch' ||choice !== 'attack' ||choice !== 'bag'){
        choice = readlineSync.question(`
        What do you want to do now? Please enter-- Attack, Bag, Run, Switch:  `)

        if(choice.toLowerCase() === 'bag'){
            let counter = 0;
            while (bagChoice !== 'pokeball' || bagChoice !== 'potion(big)' || bagChoice !== 'potion(small)' || bagChoice !== 'exit'){
                pack(enemy);
                counter++
                if (bagChoice === 'pokeball' || bagChoice === 'potion(big)' || bagChoice === 'potion(small)' || bagChoice === 'exit') break
                if(counter === 3){
                    console.log('Too many tries, Returning to Menu selection');
                    setTimeout(() => '', 1500)
                    choice = '';
                    break  
                }
            }
        }


        if(choice.toLowerCase() === 'switch'){
            battleChoice = undefined;
            while(!currentUserPokemon.includes(battleChoice) ){
                battleChoice =  readlineSync.question(`
            Heres a list of all your pokemon - ${currentUserPokemonNames}
            Choose a pokemon to switch to : `);
            if(!currentUserPokemonNames.includes(battleChoice) ) console.log(`   
            Please choose from the list`)
            else console.log(`
            GO!!! ${battleChoice.toUpperCase()}!`)
            choice = ''
            break
            }
            
        }


        if(choice === 'run'){
            let runChoice;
            while (runChoice !== 'town'|| runChoice !== 'forest'){
                runChoice = readlineSync.question(`Would you like to go back to the forest or town?
                please enter forest or town:  `)
                  if (runChoice === 'forest'){
                  console.log(`
              Returning back to the Forest`)
                  return forest();
                  break
              } else if (runChoice === 'town'){
                  return immersiveTown();
                  break
              }
            }
            
            
            break
        } 

        if(choice.toLowerCase() === 'attack'){
            
            let enemyMoves = []
            if(randomPokemon.includes(enemy)){
                for(let key in enemy){
                    (key === 'move1' || key === 'move2') ? enemyMoves.push(enemy[key]) : null
                }
            }    
            
        
            console.log(`
            You have ${currentMoves.length} types of attacks : ${currentMoves[0].name}, ${currentMoves[1].name} 
            type 1 for ${currentMoves[0].name} and 2 for ${currentMoves[1].name}`)
            let attackChoice;
            while(attackChoice!== '1' || attackChoice !== '2'){
                attackChoice = readlineSync.question(`Which attack move do you want to use? : `)
                break
            }
            if(attackChoice === '1'){
                    if(currentMoves[0].strength.includes(enemy.type)){
                        enemy.hp = (enemy.hp - (currentMoves[0].damage * 2 ));
                    }
                    if(currentMoves[0].weak.includes(enemy.type)){
                        enemy.hp = (enemy.hp - (currentMoves[0].damage / 2 ));
                    } else{
                        enemy.hp = (enemy.hp - currentMoves[0].damage );
                    }  
                    console.log(`${enemy.name} was hit !    HP: ${enemy.hp}  `)
            } 
            if(attackChoice === '2'){
            
                    if(currentMoves[0].strength.includes(enemy.type)){
                        enemy.hp = (enemy.hp - (currentMoves[0].damage * 2 ));
                    }
                    if(currentMoves[0].weak.includes(enemy.type)){
                        enemy.hp = (enemy.hp - (currentMoves[0].damage / 2 ));
                    } else{
                        enemy.hp = (enemy.hp - currentMoves[0].damage );
                    }  
                    console.log(`${enemy.name} was hit !    HP: ${enemy.hp}  `)
            } 
            
            if(enemy.hp <= 0){
                console.log(`${enemy.name} has fainted,    
                 ....returning back to forest`)
                 forest();
                 break
            }else {
                    let randomMove = enemyMoves[Math.floor(Math.random() * 1.5)]
                    console.log(`${enemy.name} uses ${randomMove.name} as their move`)
                    if(randomMove.strength.includes(currUserPokemon.type)){
                        currUserPokemon.hp = currUserPokemon.hp - (randomMove.damage * 2)
                    }else if (randomMove.weak.includes(currUserPokemon.type)){
                        currUserPokemon.hp = currUserPokemon.hp - (randomMove.damage / 2)
                    } else {
                        currUserPokemon.hp = currUserPokemon.hp - randomMove.damage
                    }

                    console.log(`${currUserPokemon.name} was hit,    ${currUserPokemon.name} has HP: ${currUserPokemon.hp}`)
                    if(currUserPokemon.hp <= 0){
                        console.log(`${currUserPokemon.name} has fainted ! please choose another pokemon`)
                        currentUserPokemonNames = currentUserPokemonNames.filter(el => el !== currUserPokemon.name)     
                        currentUserPokemon = currentUserPokemon.filter(el => el !== currUserPokemon)
                        battleChoice = undefined;
                        while(!currentUserPokemon.includes(battleChoice) ){
                        battleChoice =  readlineSync.question(`
                        Heres a list of all your pokemon - ${currentUserPokemonNames}
                        Choose a pokemon to switch to : `);
                        if(!currentUserPokemonNames.includes(battleChoice) ) console.log(`   
                        Please choose from the list`)
                        else console.log(`
                        GO!!! ${battleChoice.toUpperCase()}!`)
                        choice = ''
                        break
                        }
                    } 
            }

        }
    }
} 
// ---------------- Forest function--------------------------
// when entering forest, it will delay and a random pokemon will pop up with a dialouge for its location and then it will enter a battle scene
function forest () {
      // this variable is used for when the forest function is choosing a random pokemon by type
    let typesOfPokemon = ['grass','fire','water','flying', 'bug', 'normal','poison', 'electric', 'rock','fighting']
    // this variable is for when the forest pokemon is being chose at random
    
    let randomizeTypes = typesOfPokemon[Math.floor(Math.random() * 9)];
    let forestPokemon = '';
    randomPokemon.forEach((el) => {
        (randomizeTypes === el.type) ? forestPokemon = el: null
    })
    setTimeout(() => {
        if(forestPokemon.type === ('flying'|| 'bug' || 'poison' || 'normal' || 'grass')) console.log(`You came across a ${forestPokemon.name} roaming around the grass`)
        else if(forestPokemon.type === 'water') console.log(`You came across a ${forestPokemon.name} roaming near the pond`)
        else console.log(`You came across a ${forestPokemon.name} roaming around the mountain side`)
    }, 1500)
    setTimeout(() => {
        forestBattle(user, forestPokemon)
    }, 2500);
    
}









//------------------potion function-------------------
// function is invoked when the user chooses to use a potion

function potion(input){
    if( input  === ''){
        return console.log(`You have ${user['smallPotion']} small potions & ${user['bigPotion']} big potions left, Please choose which one `)
    } 
    if (input  === 'small' && user['smallPotion'] > 0){
        user['smallPotion'] -- 
        currUserPokemon.hp += (currUserPokemon.maxHp / 2)
        (currUserPokemon.hp > currUserPokemon.maxHp) ? currUserPokemon.hp = currUserPokemon.maxHp : null
        return console.log('Using small potion') 
    }else if (input  === 'big' && user['bigPotion'] > 0){
        user['bigPotion'] --
        currUserPokemon.hp += currUserPokemon.maxHp
        (currUserPokemon.hp > currUserPokemon.maxHp) ? currUserPokemon.hp = currUserPokemon.maxHp : null
        return console.log('Using big potion')
    }else if(user['smallPotion'] === 0 || user['bigPotion'] === 0){
        return console.log('No more of those potions left')
    }else {
        return console.log('Need to choose either small or big potion, by entering small or big in prompt')
    } 
}



//-----------------------battle bag options-----------------
// this funciton is called when the user is in battle and chooses to look in the bag for pokemon/potions
let bagChoice;
function pack(enemy) {
    bagChoice = readlineSync.question(`
What do you want to get in your bag? Pokeball or Potion? 
    Choose Pokeball, if you feel ready to capture pokemon
        To choose potion, please enter potion(big or small) to decide which one to choose: `)
    if (bagChoice.toLowerCase() === 'pokeball' && (!randomPokemon.includes(enemy)) ){
        console.log(`
        Cannot capture pokemon that belongs to trainers`)
        return choice = '';
    }
    if(bagChoice.toLowerCase() === 'pokeball'){
        if(user['pokeballs'] > 0 && enemy.hp < 50){ 
            console.log('Capturing Pokemon....');
            setTimeout(()=> console.log('Pokemon Captured'), 3000)
            return 
        } else if(user['pokeballs'] =  0){
            console.log('You have no more pokeballs please choose another option');
        }else console.log(`
        Pokemon needs to be weaker `)
    }else if(bagChoice.toLowerCase() === 'potion(small)'){
        potion('small')
        choice = '';
        return 
    }else if(bagChoice.toLowerCase() === 'potion(big)'){
        potion('big')
        choice = '';
        return
    }
    if(bagChoice.toLowerCase() === 'exit') return // need to send back to menu 
    else {
        console.log(`
Please choose between a pokeball, a potion size or to exit the bag, enter exit
`)
    }  
}