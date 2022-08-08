import { EntityRepository, Repository } from "typeorm"

import { Attribute } from "../models/attribute"

@EntityRepository(Attribute)
export class PostRepository extends Repository<Attribute> { }