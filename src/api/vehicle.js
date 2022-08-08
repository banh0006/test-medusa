export default (router) => {
    router.get("/store/getvehicle", (req, res) => {
        const productService = req.scope.resolve("vehicleService")
    
        productService.addVehicle('something').then((data) => {
            res.json({
                message: "Succesfully insert a vehicle",
            })
        })
    })
}