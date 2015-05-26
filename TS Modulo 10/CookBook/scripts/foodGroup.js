var RecipeData;
(function (RecipeData) {
    var FoodGroup = (function () {
        function FoodGroup(name) {
            //FROM MODULES 6-8:
            //Assign the "name" parameter to the 
            //"name" member variable
            this.name = name;
        }
        return FoodGroup;
    })();
    RecipeData.FoodGroup = FoodGroup;
})(RecipeData || (RecipeData = {}));
//# sourceMappingURL=foodGroup.js.map