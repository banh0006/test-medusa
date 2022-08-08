import { BaseService } from "medusa-interfaces"

class VehicleService extends BaseService {
  constructor({ vehicleRepository, manager }) {
    super({ vehicleRepository, manager })

    this.vehicleRepository = vehicleRepository
    this.manager_ = manager
  }

  async list() {
    const vehicleRepository = this.manager_.getCustomRepository(this.vehicleRepository)
    return await vehicleRepository.find()
  }

  async addVehicle(vehicleInfo) {
    // should create data from the vehicleInfo params
    const vehicleRepository = this.manager_.getCustomRepository(this.vehicleRepository)

    return await vehicleRepository.save(
        vehicleRepository.create({
            id: '123',
            year: '2022',
            make: 'Audi',
            model: 'A20'
        })
    )
  }
}

export default VehicleService