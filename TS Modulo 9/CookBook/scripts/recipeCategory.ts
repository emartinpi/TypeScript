//FROM MODULE 7&8:
//Fill out the body of this class so it extends BaseRecipeCategory
//and implements IRecipeCategory

class RecipeCategory extends BaseRecipeCategory implements IRecipeCategory  {
    description: string;
	examples: IExample[];

	constructor(data: IRecipeCategory) {
		super(data.name, data.foodGroups);
		this.description = data.description;
		this.examples = data.examples;
	}
} 