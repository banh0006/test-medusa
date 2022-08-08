import { EntityRepository, Repository } from "typeorm"

import { Filter } from "../models/filter"

@EntityRepository(Filter)
export class PostRepository extends Repository<Filter> { }