const Router = require("express");
const { drinkController } = require("../Controllers/drink.controllers");
const router = Router();

router.get("/drinks", drinkController.getDrink);
router.get("/drinks/instock", drinkController.getInstock);
router.get("/drinks/:id", drinkController.getIdDrink);
router.post("/drinks", drinkController.postDrink);
router.delete("/drinks/:id", drinkController.deleteDrink);
router.patch("/drinks/:id", drinkController.patchDrink);


module.exports = router;
