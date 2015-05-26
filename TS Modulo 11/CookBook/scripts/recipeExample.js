//FROM MODULE 7&8:
//Modify the class below so that it implements the IExample interface
//and the constructor accepts a parameter typed as IExample.
define(["require", "exports"], function (require, exports) {
    var Example = (function () {
        function Example(example) {
            this.ingredients = [];
            this.name = example.name;
            this.ingredients = example.ingredients;
            this.prepTime = example.prepTime;
        }
        return Example;
    })();
    return Example;
});
//# sourceMappingURL=recipeExample.js.map