// -----------------------Part 1: Humble Beginnings

// Let’s model a simple adventurer with basic properties such as health and an inventory. 
// We will call the adventurer “Robin.”



// From the adventurer object, we can access Robin’s inventory using a combination of dot notation and square bracket syntax. 
// For example, we could find a sword at adventurer.inventory[0].
// As an additional practice exercise, create a loop that logs each item in Robin’s inventory.

// Nested arrays are useful, but so are nested objects. 
// Let’s give Robin a companion to travel with – a furry friend they call “Leo.”

// Next, give Robin’s feline friend a friend of his own:
// Add a “companion” sub-object to “Leo” with the following properties:

//      The companion’s name is “Frank.”
//      The companion’s type is “Flea.”
//      The companion has its own belongings, which includes a small hat and sunglasses.

/**
 * 

const adventurer = {
    name: "Robin",
   health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            belongings: ["smal hat", "sunglasses"]
        }
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }

}


adventurer.roll();
adventurer.roll();
adventurer.roll();


 */

// ----------------------------Part 2: Class Fantasy


// Start with a Character class, which will define generic character entities. 
// Robin and their companions all have a name, so the Character class should definitely include name as one of its properties. 
// At this stage, we will also make the decision that every character should have health (which we will standardize 
// to a maximum of 100, and an inventory (even if the inventory is empty).

// Here is what the basic Character class looks like so far, including a constructor function that 
// allows us to create new characters with whatever name we would like:

class Character {
  constructor (name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
  roll (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`)
    }
}

// Every character should also be able to make rolls. 
// Add the roll method to the Character class.

// Now, we can re-create Robin using the Character class!
/*
*
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

// Even the companions can roll now; give it a try! 
robin.roll();
robin.companion.roll();
robin.companion.companion.roll();
*/

// -----------------Part 3: Class Features

// When extending a class, the “child” class inherits all properties of its parents. 
// This means that we do not need to account for the name, health, inventory, 
// or roll method of Character children classes.

// Let’s begin by creating an Adventurer class. 
// What attributes might be specific to an adventure, but that not all characters have? 
// Take a look at our example below, and expand upon it with your own properties and methods.

class Adventurer extends Character {
    constructor (name, role, inventory) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
}

// Next, create a Companion class with properties and methods specific to the companions.

class Companion extends Character {
    constructor (name, type, inventory) {
      super(name, inventory);
      // Companions have specialized types.
      this.type = type;
      
    }
    // Companions have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
}

// Finally, change the declaration of Robin and the companions to use the new Adventurer and Companion classes.