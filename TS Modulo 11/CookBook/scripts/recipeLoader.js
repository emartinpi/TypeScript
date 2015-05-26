/// <reference path="typings/jquery.d.ts" />
define(["require", "exports", "recipeCategories", "recipeCategory", "recipeCategorySummary", "foodGroup", "recipeExample", "ingredient", "initializer"], function (require, exports, RecipeCategories, RecipeCategory, RecipeCategorySummary, FoodGroup, Example, Ingredient, initializer) {
    var RecipeLoader = (function () {
        function RecipeLoader(url) {
            this.url = url;
        }
        RecipeLoader.prototype.load = function () {
            var _this = this;
            $.getJSON(this.url, function (data) {
                _this.mapData(data);
            });
        };
        RecipeLoader.prototype.mapData = function (data) {
            var _this = this;
            if (data) {
                var categories = data.recipeCategories;
                //TODO
                //Change RecipeCategories to use the new generic type.
                //Pass IRecipeCategory as the type
                initializer.recipeCategories = new RecipeCategories();
                //TODO
                //Create a new RecipeCategories object named recipeCategoriesSummary
                //and pass an IRecipeCategorySummary as the generic value.
                var recipeCategoriesSummary = new RecipeCategories();
                categories.forEach(function (category) {
                    var recipeCategory = new RecipeCategory({
                        name: category.title,
                        foodGroups: _this.getFoodGroups(category),
                        description: category.details,
                        examples: _this.getExamples(category)
                    });
                    initializer.recipeCategories.items.push(recipeCategory);
                    //TODO
                    //Create a new RecipeCategorySummary instance and pass
                    //the category.title and category.details into the constructor.
                    //Once the class is created add it into the recipeCategoriesSummary
                    //object's items collection
                    //HINT: The constructor object passed must match the IRecipeCategorySummary interface
                    //HINT: Use the push() function
                    var recipeCategorySummary = new RecipeCategorySummary({
                        text: category.title,
                        title: category.details
                    });
                    recipeCategoriesSummary.items.push(recipeCategorySummary);
                });
                //Render the categories into the select
                initializer.renderer.renderCategories(recipeCategoriesSummary);
                initializer.renderer.renderCategory(initializer.recipeCategories.items[0]);
            }
            else {
                initializer.renderer.renderError();
            }
        };
        RecipeLoader.prototype.getFoodGroups = function (category) {
            //Map foodgroups data to TS object
            return category.foodGroups.map(function (foodGroup) {
                var group = new FoodGroup(foodGroup.title);
                return group;
            });
        };
        RecipeLoader.prototype.getExamples = function (category) {
            var _this = this;
            return category.examples.map(function (example) {
                return new Example({
                    name: example.name,
                    ingredients: _this.getIngredients(example),
                    prepTime: example.prepTime
                });
            });
        };
        RecipeLoader.prototype.getIngredients = function (example) {
            return example.ingredients.map(function (value) {
                return new Ingredient(value);
            });
        };
        return RecipeLoader;
    })();
    return RecipeLoader;
});
//# sourceMappingURL=recipeLoader.js.map