import { EntityRepository, Repository } from "typeorm"

import { Vehicle } from "../models/vehicle"

@EntityRepository(Vehicle)
export class PostRepository extends Repository<Vehicle> { }