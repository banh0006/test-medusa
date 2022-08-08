export default (router) => {
    router.get("/store/addProducts", (req, res) => {
        const aProductService = req.scope.resolve("addproductService")
    
        aProductService.addProducts().then((data) => {
            // console.log(data)
            res.json(data)
        })
    })
}