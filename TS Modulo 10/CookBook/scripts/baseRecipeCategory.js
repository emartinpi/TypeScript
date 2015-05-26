var RecipeData;
(function (RecipeData) {
    //FROM MODULES 6-8: 
    //Copy your BaseRecipeCategory class code
    var BaseRecipeCategory = (function () {
        function BaseRecipeCategory(name, foodGroups) {
            this.foodGroups = [];
            this.name = name;
            this.foodGroups = foodGroups;
        }
        return BaseRecipeCategory;
    })();
    RecipeData.BaseRecipeCategory = BaseRecipeCategory;
})(RecipeData || (RecipeData = {}));
//# sourceMappingURL=baseRecipeCategory.js.map