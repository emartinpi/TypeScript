define(["require", "exports", "recipeCategory", "renderer", "recipeLoader"], function (require, exports, RecipeCategory, Renderer, RecipeLoader) {
    exports.recipeCategories;
    exports.renderer = null;
    (function () {
        var categoriesSelect = document.getElementById('RecipeCategory');
        //FROM MODULES 6-8
        //categoriesSelect.onchange currently doesn't do anything.
        //Assign a lambda expression to "onchange" that when called, 
        //invokes the "loadRecipes" function that you'll see below. 
        //The lambda parentheses will be empty.
        //HINT: Refer to Module 4:Functions if you need help writing the lambda.
        categoriesSelect.onchange = function () { return loadRecipes(); };
        //FROM MODULES 6-8
        //Create a new RecipeLoader instance and name it "loader".
        //Pass the following string into the RecipeLoader's constructor:
        //  '/JSON/recipeTypes.json'
        //HINT: Use the "new" keyword to create the instance.
        var loader = new RecipeLoader('/JSON/recipeTypes.json');
        //FROM MODULES 6-8 
        //Call the loader object's load() function ("loader" is the object 
        //you created in the previous TODO)
        loader.load();
        exports.renderer = new Renderer();
    })();
    function loadRecipes() {
        var el = document.getElementById('RecipeCategory');
        try {
            var category = exports.recipeCategories.items
                .filter(function (item) { return item.name === el.value; })
                .reduce(function (item) { return new RecipeCategory({
                name: el.value,
                foodGroups: item.foodGroups,
                description: item.description,
                examples: item.examples
            }); });
            exports.renderer.renderCategory(category);
        }
        catch (ex) {
            alert(ex.message);
        }
    }
});
//# sourceMappingURL=initializer.js.map