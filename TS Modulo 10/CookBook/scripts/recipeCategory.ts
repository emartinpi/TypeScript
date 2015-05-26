module RecipeData {

	//FROM MODULE 7&8:
	//Fill out the body of this class so it extends BaseRecipeCategory
	//and implements IRecipeCategory

	export class RecipeCategory extends BaseRecipeCategory implements Interfaces.IRecipeCategory {
		description: string;
		examples: Interfaces.IExample[];

		constructor(data: Interfaces.IRecipeCategory) {
			super(data.name, data.foodGroups);
			this.description = data.description;
			this.examples = data.examples;
		}
	}

}