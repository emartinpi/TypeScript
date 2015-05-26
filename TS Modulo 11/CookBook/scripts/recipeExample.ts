//FROM MODULE 7&8:
//Modify the class below so that it implements the IExample interface
//and the constructor accepts a parameter typed as IExample.

import Interfaces = require("inter/interfaces");
import Ingredient = require("ingredient");

class Example implements Interfaces.IExample {
    name: string;
    ingredients: Ingredient[] = [];
    prepTime: string; 

    constructor(example: Interfaces.IExample) {
        this.name = example.name;
        this.ingredients = example.ingredients;
        this.prepTime = example.prepTime;
    }             
}

export = Example;
