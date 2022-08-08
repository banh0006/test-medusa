export default (router) => {
    router.get("/store/getProductsBy", (req, res) => {
        const cProductService = req.scope.resolve("customproductService")
    
        cProductService.getProductBySeason('Winter').then((data) => {
            // console.log(data)
            res.json(data)
        })
    })
}