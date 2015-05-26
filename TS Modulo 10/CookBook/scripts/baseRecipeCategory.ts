module RecipeData {

	//FROM MODULES 6-8: 
	//Copy your BaseRecipeCategory class code
	export class BaseRecipeCategory implements Interfaces.IBaseRecipeCategory {
		name: string;
		foodGroups: FoodGroup[] = [];

		constructor(name: string, foodGroups: FoodGroup[]) {
			this.name = name;
			this.foodGroups = foodGroups;
		}
	}

}