var RecipeData;
(function (RecipeData) {
    //TODO:
    //Modify class to support a single generic parameter that is applied
    //to the items property
    var RecipeCategories = (function () {
        function RecipeCategories() {
            this.items = [];
        }
        return RecipeCategories;
    })();
    RecipeData.RecipeCategories = RecipeCategories;
})(RecipeData || (RecipeData = {}));
//# sourceMappingURL=recipeCategories.js.map