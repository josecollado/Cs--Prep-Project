//Nachiket Pingle
//Jose Collado
//Joey Moschella
//Jose Borbon

// Codesmith Employees
// Will Sentance - Co-founder and CEO
// Phillip Troutman - Senior SWE & Executive LI NY
// Samantha Salley - Lead Engineer LA
// Kyle Combs - Senior SE & LI NY
// David O'Sullivan - Senior SE & LI LA
// Augustine Kim - Lead Technical Mentor LA
// Kate Matthews - Lead Technical Mentor NY

/*

Pokemon Intro to Game - https://www.youtube.com/watch?v=9giCebGY8-s

|--- setTimeOutFunction ---|
function delay(cb, wait) {
  let setTime;
 function inner(...arg) {
    setTime = setTimeout(cb, wait)
    return setTime
  } return inner;
}

start the game

// When we go into the forrest, the battles in the forest (variable potentially forestBattle) will run with the delay function
// delay(forestBattle, 3) will hopefully invoke the forestBattle function after waiting 3 seconds



------------Professor oak-------------------------------------- 
// starts talking introduction-
// asks whats the users name- store users name in object 
// explains layout of game
// gives advice - how to catch pokemon/how to battle/warnings/ how to win the game
// introduce immersive town/ talk about gym leader, mart and healing  
// gives pokeballs and money for your journey
  // tell them what to do with pokeballs and money

asks to choose 1 of 3 starter pokemon- store that starter pokemon into user object 

console.log these lines as intro:
Hello there!  Welcome to the world of Pokémon.
My name is OAK!  People call me the POKEMON PROF!

This world is inhabited by creatures called Pokémon!
For some people, Pokémon are pets.  
Others use them for fights.
Myself… I study Pokémon as a profession.

Have user choose pokemon 

let starterChoice;



// Wait for user's response.
while (starterChoice !== 'squirtle' || starterChoice !== 'bulbasaur' || starterChoice !== 'charmander') {
  starterChoice = readlineSync.question('Choose your starter : ');
  if (starterChoice.toLowerCase() === 'squirtle') {
  console.log(`Hey there ${starterChoice}!`);
  break;
  } else if (starterChoice.toLowerCase() === 'bulbasaur') {
  console.log(`Hey there ${starterChoice}!`);
  break;
  } else if (starterChoice.toLowerCase() === 'charmander') {
  console.log(`Hey there ${starterChoice}! `);
  break;
  } else console.log(`Your starters are squirtle,bulbasaur, or charmander choose one`)
}

console.log(starterChoice);



-----------------------Rival---------------------------------
// rival introduces himself ---rivals name = HackReactor AKA (HR)
rivals name = HackReactor(HR)
have rival choose starter pokemon that has the users pokemons weakness 

const rivalBeforeImmersiveTown = {
function opposite of what user chose () {
    if (user['pokemon1']['name'] === "squirtle") {
      return rivalBeforeImmersiveTown['pokemon1']['name'] === "bulbasaur"
    }
    else if (user['pokemon1']['name'] === "bulbasaur") {
      return rivalBeforeImmersiveTown['pokemon1']['name'] === "charmander"
    }
    return rivalBeforeImmersiveTown['pokemon1']['name'] === "squirtle"
  }
}

user and rival battle with starter pokemon 


when battle is over
// -give user option of going into forest or staying in starter town


----------------forest ---------------------------------

// if chooses forest, set timeout for a couple seconds until random pokemon shows for battle

choose random pokemon based on element and randomly set setting on why that one is battling 
// have user choose which pokemon to start with
  // user has option to run, attack,look in bag and switch pokemon 
    // if user runs, set another timeout until ANOTHER pokemon shows up 
    // if user chooses attack, open list of attacks and have them choose which one 
      //attack damage will vary based on if pokemon has certain weakness 
    // if user chooses bag, they can either heal or choose pokeball to capture pokemon
      // if user chooses to heal pokemon, heal and then lose turn 
    //if user chooses to switch pokemon, then give list of pokemon in bag and have them switch, user loses turn

  // if user captures pokemon, see if pokemon cap is full
    // if full, user can choose to keep pokemon and let go of existing ones 
    // or choose to let the recent capture go 
  
  // if user wins battle, level up pokemon by 1 and wins 10 (schmeckels)

  // if user loses battle,pokemon faints and has to switch over to next pokemon in list
    // if no more pokemon, user loses and gets sent to next town to pokecenter to heal pokemon 
        

after 3 battles, send to immersive town  


---------------------------immersive town-----------------------
introduce immersive town
 town will have a gym, pokemart and pokecenter(for health)

// ask user where they would like to go
  //go to gym(battle gym leader)--- warn user before going into gym that they are going into battle 
  // go to pokecenter, heal pokemon
  // go to pokemart (option to buy pokeballs or potions(small(heals half of life) or big(heals full life)))
  // go to forest, again
    // if they chose forest, run forest function
  // back to starter town 
    
    
  
-------------- Prep(starter) town--------------------------------
  user only has 2 options ,
    //go into forest 
    // talk to professor Oak
      // Oak will give advice on 
        // best level option to fight gym leader 
        //talk about weakness 
        // give a hint about rival whereabouts 
        //pokemon maintenance( what to do when they are weak, when to choose first pokemon to fight with, best ways to capture pokemon) 




----------------------gym leader--------------------------------
  // introduce himself, Chris
    // talk about why hes the best 
    // mention in order to win the game, he must be beaten by user 

  // if user wins battle  

      // upon defeating gym leader, he presents you a pass to the Special Immersive Program, a community of trainers looking to reach their dreams while helping others reach theirs
      // gives advice on life journey of learning and hints about our seeing our rival frustrated (HackReactor didn't get to a pass)
      // sends us directly to the PokeCenter
      // Pokemon heal automatically
      // Asks if you want to head to the Special Immersive Program

---------------------ending Rival battle-----------------------
  // talk about his journey and explain wh y hes the best etc... 
  // tell the user, that he MUST beat him in order to win game
    // go into battle 

  // if user loses battle to rival, game over rival is pokemon master 
    // ask user to start game over or quit game 

  // if user wins battle, user wins game and is congratualted as pokemon master
    // ask user to start game over or quit game


    ---------------- LOSING ENDING --------------------------
    console.log(WILL: "... I can't believe it.");
    console.log(WILL: "You lost to HackReactor..?");
    console.log(WILL: "I'm sorry, I really thought you were ready.");
    console.log(WILL: "It's time you brush up on your fundamentals and start taking this more seriously");
    console.log(WILL: "You can either start fresh, or quit and give it all up.");
    console.log(WILL: "What will it be?");  

    --------------WINNING ENDING --------------------------  
    console.log(`WILL: Congratulations, ${user.name}`);
    console.log("WILL: You're the best trainer in town! ");
    console.log("WILL: You've improved so much since Preptown! ");
    console.log("WILL: HackReactor didn't learn that you have to treat your Pokemon with trust and love. ");
    console.log("WILL: This isn't only your winning, it is also because of ");
    console.log(`${starterChoice}, ${pokemon1}, ${pokemon2}, ${pokemon3}! `);
    console.log("WILL: One last thing we can't forget!");
    console.log("WILL: You better thank Jose Borbon, Jose Collado, Joey Moschella, and Nachiket Pingle for this amazing game!");
    console.log(`WILL: Now go ${user.name}, aim to be the greatest trainer ever!`);  

*/

/*

-----------MOVE SETS--------------------------------------------

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
    this.hp++;
    this.level++;
    this.move1++;
    this.move2++;
  }
}

const bulbasaurRival1 = new Pokemon("Bulbasaur", 1, 50, 'grass', moveNormal, moveGrass);

const bulbasaurRival8 = new Pokemon("Bulbasaur", 8, 85, 'grass', moveNormal, moveGrass);

const charmanderStarter = new Pokemon("Charmander", 1, 50, 'fire', moveNormal, moveFire);

const charmanderRival1 = new Pokemon("Charmander", 1, 50, 'fire', moveNormal, moveFire);

const charmanderRival8 = new Pokemon("Charmander", 8, 85, 'fire', moveNormal, moveFire);

const squirtleStarter = new Pokemon("Squirtle", 1, 50, 'water', moveNormal, moveWater);

const squirtleRival1 = new Pokemon("Squirtle", 1, 50, 'water', moveNormal, moveWater);

const squirtleRival8 = new Pokemon("Squirtle", 1, 85, 'water', moveNormal, moveWater);

const pidgey = new Pokemon("Pidgey", 1, 50, 'flying', moveNormal, moveFlying);

const caterpie = new Pokemon("Caterpie", 1, 50, 'bug', moveNormal, moveBug);

const rattata = new Pokemon("Rattata", 8, 85, 'normal', moveNormal, movePoison);

const jigglypuff = new Pokemon("JigglyPuff", 1, 50, 'normal', moveNormal, moveFighting);

const weedle = new Pokemon("Weedle", 1, 50, 'poison', moveNormal, movePoison);

const spearow = new Pokemon("Spearow", 8, 85, 'flying', moveNormal, moveFlying);

const ekans = new Pokemon("Ekans", 1, 50, 'poison', moveNormal, movePoison);

const sandshrew = new Pokemon("Sandshrew", 7, 80, 'ground', moveNormal, moveGround);

const poliwag = new Pokemon("Poliwag", 1, 50, 'water', moveNormal, moveWater);

const bellsprout = new Pokemon("Bellsprout", 1, 50, 'grass', moveNormal, moveGrass);

const growlithe = new Pokemon("Growlithe", 1, 50, 'fire', moveNormal, moveFire);

const pikachu = new Pokemon("Pikachu", 1, 50, 'electric', moveNormal, moveElectric);

const geodude = new Pokemon("Geodude", 1, 50, 'rock', moveNormal, moveRock);

const onyx = new Pokemon("Onyx", 7, 80, 'rock', moveNormal, moveRock);

const machop = new Pokemon("Machop", 7, 80, 'fighting', moveNormal, moveFighting);

const vulpix = new Pokemon("Vulpix", 8, 85, 'fire', moveNormal, moveFire);

const ponyta = new Pokemon("Ponyta", 1, 50, 'fire', moveNormal, moveFire);

const venonat = new Pokemon("Venonat", 1, 50, 'bug', moveNormal, moveBug);

Bulbasaur(grass) / Tackle, Vine Whip(grass)
Charmander(fire) / Tackle, Ember(fire)
Squirtle(water) / Tackle, Water Gun(water)
Pidgey(flying) / Tackle, Peck (flying)
Caterpie(bug) / Tackle,  String Shot (bug) 
Rattata(normal) / Tackle
Weedle(poison) / Tackle, Acid(poison)
Spearow(flying) / Tackle, Peck (flying) 
Ekans(poison) / Tackle, Acid (poison)  
Sandscrew(ground) / Tackle, Sand-Attack(ground)
Poliwag(water) / Tackle, Water Gun (water)
Bellsprout(grass) / Tackle, Vine Whip (grass)
Growlithe(fire) / Tackle, Ember(fire)
Pikachu(electric) / Tackle, Thundershock(electric)
Geodude(rock) / Tackle, Rock Throw(rock)
Onyx(rock) / Tackle, Rock Throw(rock)
Machop(fighting) / Tackle, Karate Chop(fighting)
Vulpix(fire) / Tackle, Ember(fire)
Ponyta(fire) / Tackle, Ember(fire)

MOVESET NAMES

// Should moves be classes?
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
const moveNormal = new MoveSetCreator("Tackle", 10, normal, [], [fighting]);

const moveGrass = new MoveSetCreator("Vine Whip", 10, grass, [water, ground, rock], [fire, grass, poison, flying, bug]);

const moveFire = new MoveSetCreator("Ember", 10, fire, [grass, bug], [fire, water, rock]);

const moveWater = new MoveSetCreator("Water Gun", 10, water, [fire, ground, rock], [water, grass]);

const movePoison = new MoveSetCreator("Acid", 10, poison, [grass, bug], [poison, ground, rock]);

const moveFlying = new MoveSetCreator("Peck", 10, flying, [grass, bug], [fire, water, rock]);

const moveBug = new MoveSetCreator("String Shot", 10, bug, [grass, poison], [fire, fighting, flying]);

const moveGround = new MoveSetCreator("Sand Attack", 10, ground, [fire, electric, poison, rock], [grass, flying, bug]);

const moveRock = new MoveSetCreator("Rock Throw", 10, rock, [fire, flying, bug], [fighting, ground]);

const moveFight = new MoveSetCreator("Karate Chop", 10, fight, [normal, rock], [poison, flying, psychic, bug]);

const moveElectric = new MoveSetCreator("Thundershock", 10, electric, [], []);

// Potential use for fighting

// the chosen move sets the value of usedMove
let usedMove = fightMove
// checks to see if the usedMove (value of moveFight) contains the other pokemons type in strength or weak, does double/half damage, or just does regular damage
if (usedMove.strength includes(opponentPokemonType)) {
  damage = damage * 2
  return opponentPokemon.hp - damage
} else if (usedMove.weak includes(pokemonType)) {
  damage = damage/2
  return opponentPokemon.hp - damage
} else {
  return opponentPokemon.hp - damage
}


// OR MAYBE THIS?

 //  if (grassWeak === true) { 
  // grassStrength = pokemonType === water || pokemonType === ground || pokemonType === rock) 
    damage = damage * 2
  }
}

 // if (strength === true) {
   return damage*2
 } else if (weak === true) {
   return damage/2
 } else {
   return damage;
 }


*/


/* 


-- 3 Starters --
Bulbasaur (grass)
Charmander (fire)
Squirtle  (water)


-- Grass Land Forrest --
Caterpie(bug)
Pidgey(flying)
Ekans(poison)
Pikachu(electric)
Jigglypuff(normal)
Bellsprout(grass)
Venonat(bug)
Weedle(poison)
Geodude(rock)
-------------- Sun Area (Random Encounter ) ----------
Growlithe(fire)
Ponyta(fire)
----------- Water Area (Random Encounter ) -------------
Poliwag(water)
Horsea(water)

-------------Rival and Gym Leader Only Pokemon-----------
Rattata(normal) Rival LVL 8
Spearow(flying) Rival LVL 8
Vulpix(fire) Rival LVL 8

Onyx(rock) Gym Leader LVL 7
Sandscrew(ground) Gym Leader LVL 7
Machop(fighting) Gym Leader LVL 7

*/


/** -- Set Pokemon For Rival + Gym Leader -- 
 * rivalBeforeImmersiveTown
   Opposite pokemon type of what the user chose
 
 * rivalAfterImmersiveTown - 4 Level 8 Pokemon
    Opposite pokemon type of what user chose
    Rattata
    Spearow
    Vulpix
    
 * Gym Leader Chris - 3 Level 7 Pokemon
   Onyx
   Geodude
   Machop

/**

|--- Pokemon Creator Class ---|

class PokemonCreator {
  constructor(name,pokemonType,hp,level,move1,move2) {
    this.name = name;
    this.pokemonType = pokemonType;
    this.hp = hp;
    this.level = level;
    this.move1 = 
    this.move2 = 
  }
  level () {
    this.level++;
    this.move1++;
    this.move2++;
  }
}


Identify type weakness
PokeMart to buy items

Choose one of 3 starter pokemon (Bulbasaur, Squirtle, Charmander)
start adventure after choosing starter mon
User vs Rival 
choose to go to specific areas
set timeout 2 seconds fight pidgey or other mons
train even more to level up pokemon or go straight to gym 1st Gym Leader Hack Reactor
  //If they don't beat the gym leader and they want to quit the game
    //Quit the game
  //other wise give option to go back to the grass and level up pokemon

Attack / Pokemon / Run / Items - In an Array
Function Faint () {
  if hp <= 0;
  
}



Pokemon cap is 4, based on how many they can carry at once 

User and their Pokemons(Mons Weakness) -In an Object
-- Name
-- How many items they got
-- Money


Gym Leader - In an Object

If you beat Gym Leader, then vs the Rival Again
If you beat the Rival, you win the game


Concepts Covered - OOP, HOF, Time Complexities,Closure
 */



// const monSelection = prompt("Choose your starter").toLowerCase();
// console.log(monSelection);
// for (let i = 0; i < selectionArray.length; i++) {
//   if (monSelection !== selectionArray[i]) {
//     console.log("Please select the correct input.");
//   } // else continue...
// }

let pokemonStartersArr = ["squirtle","bulbasaur","charmander"];

// Using readline():
// let selectionArray = ["..."];
// let putstr = ("Enter a name to search for: ");
// let name = readline();
// let position = names.indexOf(name);
// if (position >= 0) {
// print("Found " + name + " at position " + position);
// } else {
//        print(name + " not found in array.");
//     }



// const PokemonCreator(name, pokemonType,hp,level,move1,move2);

const PokemonCreator('squirtle', 'water',hp(num value),level(num value),move1( ??),move2( ??);
const PokemonCreator('bulbasaur', 'grass',hp(num value),level(num value),move1( ??),move2( ??);
const PokemonCreator('charmander', 'fire',hp(num value),level(num value),move1( ??),move2( ??);


