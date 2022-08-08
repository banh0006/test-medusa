import { Router } from "express"
import vehicleRoute from "./vehicle"
import customProductRoute from "./customproduct"
import addProductService from "./addproducts"

export default () => {
    const router = Router()
    // middleware to set cors header
    router.use((req, res, next) => {
        const STORE_CORS = process.env.STORE_CORS || "http://localhost:3000"
        res.header('Access-Control-Allow-Origin', STORE_CORS)
        next()
    })
    vehicleRoute(router)
    customProductRoute(router)
    addProductService(router)

    return router
}