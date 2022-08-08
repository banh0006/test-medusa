// A service to get product by attributes
import { BaseService } from "medusa-interfaces"

class CustomProductService extends BaseService {
  constructor({ productattributesRepository, filterRepository, attributeRepository, manager }) {
    super({ productattributesRepository, filterRepository, attributeRepository, manager })

    this.productattributesRepository = productattributesRepository
    this.filterRepository = filterRepository
    this.attributeRepository = attributeRepository
    this.manager_ = manager
  }

  async getProductBySeason(season) {
    const filterRepository = this.manager_.getCustomRepository(this.filterRepository)
    const attributeRepository = this.manager_.getCustomRepository(this.attributeRepository)
    const productattributesRepository = this.manager_.getCustomRepository(this.productattributesRepository)

    const seasonAttr = await attributeRepository.findOne({
        where: {
            value: 'Season'
        }
    })

    const seasonAttrId = seasonAttr.attribute_id

    // console.log(seasonAttrId)

    const filter = await filterRepository.findOne({
        where: {
            attribute_id: seasonAttrId,
            attribute_value: season
        }
    })

    console.log(filter)

    

    // const products = await productattributesRepository.find({
    //     // select: ["product_id"]
    //     // where: {
    //     //     // filters: Like(`%${filter.filter_id}#%`)
    //     // }
    // })

    // console.log('product', products)

    const filterId = filter.filter_id

    const filteredProducts = await productattributesRepository
                                .createQueryBuilder()
                                .where("filters like :filter_id", { filter_id:`%${filterId}%` })
                                // .where("ProductAttributes.filters = :filter_id", { filter_id: filter.filter_id })
                                .getMany();
                                // .getSql()


    // console.log('filtered products',filteredProducts)

    return filteredProducts
    // return await vehicleRepository.save(
    //     vehicleRepository.create({
    //         id: '123',
    //         year: '2022',
    //         make: 'Audi',
    //         model: 'A20'
    //     })
    // )
  }
}

export default CustomProductService