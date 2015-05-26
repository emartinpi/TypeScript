//FROM MODULES 6-8: 
//Copy your BaseRecipeCategory class code
define(["require", "exports"], function (require, exports) {
    var BaseRecipeCategory = (function () {
        function BaseRecipeCategory(name, foodGroups) {
            this.foodGroups = [];
            this.name = name;
            this.foodGroups = foodGroups;
        }
        return BaseRecipeCategory;
    })();
    return BaseRecipeCategory;
});
//# sourceMappingURL=baseRecipeCategory.js.map