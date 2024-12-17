// Part 1: Humble Beginnings
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


