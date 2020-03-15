let readlineSync = require('readline-sync');

const user = {
  name: undefined,
  pokemon1: undefined,
  pokemon2: undefined,
  pokemon3: undefined,
  pokemon4: undefined,
  money: 200
}


const rivalBeforeImmersiveTown = {

} 

const rivalAfterImmersiveTown = {

}

const gymLeaderChris = {
  
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

const bulbasaur = new Pokemon("Bulbasaur", 1, 50, 'grass', moveNormal, moveGrass);

const charmander = new Pokemon("Charmander", 1, 50, 'fire', moveNormal, moveFire);

const squirtle = new Pokemon("Squirtle", 1, 50, 'water', moveNormal, moveWater);

const bulbasaurRivalStart = new Pokemon("Bulbasaur", 1, 50, 'grass', moveNormal, moveGrass);

const bulbasaurRivalEnd = new Pokemon("Bulbasaur", 8, 85, 'grass', moveNormal, moveGrass);

const charmanderRivalStart = new Pokemon("Charmander", 1, 50, 'fire', moveNormal, moveFire);

const charmanderRivalEnd = new Pokemon("Charmander", 8, 85, 'fire', moveNormal, moveFire);

const squirtleRivalStart = new Pokemon("Squirtle", 1, 50, 'water', moveNormal, moveWater);

const squirtleRivalEnd = new Pokemon("Squirtle", 1, 85, 'water', moveNormal, moveWater);

const pidgey = new Pokemon("Pidgey", 1, 50, 'flying', moveNormal, moveFlying);

const caterpie = new Pokemon("Caterpie", 1, 50, 'bug', moveNormal, moveBug);

const rattataRivalEnd = new Pokemon("Rattata", 8, 85, 'normal', moveNormal, movePoison);

const jigglypuff = new Pokemon("JigglyPuff", 1, 50, 'normal', moveNormal, moveFighting);

const weedle = new Pokemon("Weedle", 1, 50, 'poison', moveNormal, movePoison);

const spearowRival = new Pokemon("Spearow", 8, 85, 'flying', moveNormal, moveFlying);

const ekans = new Pokemon("Ekans", 1, 50, 'poison', moveNormal, movePoison);

const sandshrewGymLeader = new Pokemon("Sandshrew", 7, 80, 'ground', moveNormal, moveGround);

const poliwag = new Pokemon("Poliwag", 1, 50, 'water', moveNormal, moveWater);

const bellsprout = new Pokemon("Bellsprout", 1, 50, 'grass', moveNormal, moveGrass);

const growlithe = new Pokemon("Growlithe", 1, 50, 'fire', moveNormal, moveFire);

const pikachu = new Pokemon("Pikachu", 1, 50, 'electric', moveNormal, moveElectric);

const geodude = new Pokemon("Geodude", 1, 50, 'rock', moveNormal, moveRock);

const onyxGymLeader = new Pokemon("Onyx", 7, 80, 'rock', moveNormal, moveRock);

const machopGymLeader = new Pokemon("Machop", 7, 80, 'fighting', moveNormal, moveFighting);

const vulpixRivalEnd = new Pokemon("Vulpix", 8, 85, 'fire', moveNormal, moveFire);

const ponyta = new Pokemon("Ponyta", 1, 50, 'fire', moveNormal, moveFire);

const venonat = new Pokemon("Venonat", 1, 50, 'bug', moveNormal, moveBug);


// starts talking introduction-
console.log("???: Hello there!  Welcome to the world of Pokémon.")
console.log("???: My name is WILL!  People call me the POKEMON PROF!(and the backpack guy)")
console.log("WILL: This world is inhabited by creatures called Pokémon!")
console.log("WILL: For some people, Pokémon are pets.")
console.log("WILL: Others use them for fights.")
console.log("WILL: Myself… I study Pokémon as a profession.")

let starterChoice;
// Have user choose pokemon
while (starterChoice !== 'squirtle' || starterChoice !== 'bulbasaur' || starterChoice !== 'charmander') {
  starterChoice = readlineSync.question('Your starter choices are squirtle, bulbasaur, and charmander, Choose your starter : ');
  if (starterChoice.toLowerCase() === 'squirtle') {
  console.log(`Hey there ${starterChoice}!`);
  user.pokemon1 = squirtle;
  break;
  } else if (starterChoice.toLowerCase() === 'bulbasaur') {
  console.log(`Hey there ${starterChoice}!`);
  user.pokemon1 = bulbasaur; 
  break;
  } else if (starterChoice.toLowerCase() === 'charmander') {
  console.log(`Hey there ${starterChoice}! `);
  user.pokemon1 = charmander;
  break;
  } else console.log(`Your starters are squirtle, bulbasaur, or charmander choose one`)
}

// console.log(user.pokemon1);

// Have user enter their name
user.name = readlineSync.question('WILL: What is your name young one? ');
console.log(`A long journey awaits young whippersnapper, off you go! ${user.name}`);

console.log(`*??? Walks inside of the lab*`);
console.log(`???: You're in my way! Get out!`);
console.log(`WILL: Now, now! You best relax infront of our guests Hack Reactor!`);
console.log(`Hack Reactor: All right, i'm sorry I won't get in the way again`);
console.log(`Hack Reactor: Listen, from this day on you're my Rival ${user.name}!`);
console.log(`Hack Reactor: That being said I CHALLENGE YOU TO A POKEMON BATTLE!!`);

// Battle Scene //


