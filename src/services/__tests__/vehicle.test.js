import VehicleService from "../vehicle";
import { MockRepository, MockManager } from "medusa-test-utils"

// test list function 
describe("ProductService", () => {
    const vehicleRepo = MockRepository({
        create: (s) => {
            return Promise.resolve(s)
        },
        save: (s) => {
            return Promise.resolve(s)
        },
        update: (s) => {
            return Promise.resolve(s)
        },
    })

    const vehicleService = new VehicleService({
        manager: MockManager,
        vehicleRepository: vehicleRepo,
    })

    beforeEach(async () => {
        jest.clearAllMocks()
    })

    it("successfully create a vehicle", async () => {
        await vehicleService.addVehicle({
            id: '0202',
            year: '2021',
            make: 'Audi',
            model: 'A20',
        })

        expect(vehicleService.vehicleRepository.save).toHaveBeenCalledTimes(1)
        // expect(vehicleService.vehicleRepository.update).toHaveBeenCalledTimes(1)
    })
})