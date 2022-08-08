import { EntityRepository, Repository } from "typeorm"

import { ProductAttributes } from "../models/productattributes"

@EntityRepository(ProductAttributes)
export class PostRepository extends Repository<ProductAttributes> { }