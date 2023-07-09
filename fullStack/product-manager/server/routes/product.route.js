const ProductController = require("../controllers/product.controller");
module.exports = (app) =>{
    app.post("/api/product/new",ProductController.create);
    app.get("/api/product",ProductController.readAll);
    app.get("/:id",ProductController.findOne);
    app.put("/edit/:id",ProductController.update);
    app.delete("/delete/:id", ProductController.delete);

}