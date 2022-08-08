// A service to get product by attributes
import { BaseService } from "medusa-interfaces"

class AddProductService extends BaseService {
    constructor({ productService, productRepository, manager }) {
        super()
        this.productService = productService
        this.productRepository = productRepository
        this.manager_ = manager
    }

    async addProducts() {
        console.log('service called')

        // const productRepository = this.manager_.getCustomRepository(this.productRepository)
        // await productRepository.update({status: 'draft'}, {status:"published"})

        // for(let i = 1; i < 1000000; i++) {
        //     const title="Test product" + i
            
        //     await this.productService.create({
        //         "title": title,
        //         // "subtitle": "Test Product",
        //         // "description": "string",
        //         // "is_giftcard": false,
        //         // "discountable": true,
        //         // "sales_channels": [
        //         // {}
        //         // ],
        //         "profile_id": "sp_01G9FBVQANPZP5C5JMTFY0P6A0"
               
        //         // "weight": 0,
        //         // "length": 0,
        //         // "height": 0,
        //         // "width": 0,
        //         // "hs_code": "string",
        //         // "origin_country": "string",
        //         // "mid_code": "string",
        //         // "material": "string",
        //         // "metadata": { }
        //     })
        // }

    }
}

export default AddProductService