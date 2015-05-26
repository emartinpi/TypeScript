//FROM MODULES 6-8: 
//Copy your BaseRecipeCategory class code

import Interfaces = require("inter/interfaces");
import FoodGroup = require("foodGroup");

class BaseRecipeCategory implements Interfaces.IBaseRecipeCategory {
    name: string;
    foodGroups: FoodGroup[] = [];

	constructor(name: string, foodGroups: FoodGroup[]) {
		this.name = name;
		this.foodGroups = foodGroups;
	}
} 

export = BaseRecipeCategory;