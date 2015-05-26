var RecipeData;
(function (RecipeData) {
    //TODO
    //Modify the class below named RecipeCategorySummary to do the following:
    //1. Implements the IRecipeCategorySummary
    //2. Defines two member variables:
    //   text - string
    //   title - string
    //3. Create a constructor that accepts a single parameter
    //   of type IRecipeCategorySummary
    //4. Assign the values from the constructor parameter to the member variables
    var RecipeCategorySummary = (function () {
        function RecipeCategorySummary(data) {
            this.text = data.text;
            this.title = data.title;
        }
        return RecipeCategorySummary;
    })();
    RecipeData.RecipeCategorySummary = RecipeCategorySummary;
})(RecipeData || (RecipeData = {}));
//# sourceMappingURL=recipeCategorySummary.js.map