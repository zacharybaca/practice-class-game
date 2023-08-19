const { Food } = require('./food');

class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {
        // Picks up an item from the current room into the player's inventory

        if (this.currentRoom.items.includes(itemName)) {
            this.items.push(itemName);
            console.log(itemName)
        } else {
            console.log(itemName);
            console.log(`Sorry, ${itemName} is not available in this room. Please pick a different item.`)
        }
    }

    dropItem(itemName) {
        // Drops an item the player is holding into their current room
        // Your code here
        if (this.items.includes(itemName)) {

        }
    }

    eatItem(itemName) {
        // Allow the player to eat food items, but not non-food items

        // Your code here
    }

    getItemByName(name) {
        // Retrieves an item from a player's inventory by item name
        // Your code here
        if (this.items.includes(name)) {
            return name;
        } else {
            throw new Error(`Sorry, ${name} is currently not available in your inventory. Please select a different item.`)
        }
    }
}

module.exports = {
  Player,
};