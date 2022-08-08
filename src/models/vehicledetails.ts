import { BeforeInsert, Column, Entity } from "typeorm"
import { BaseEntity } from "@medusajs/medusa"
import { generateEntityId } from "@medusajs/medusa/dist/utils"
import { Vehicle } from "./vehicle";

@Entity()
export class VehicleDetail extends Vehicle {
    
    @Column({type: 'varchar'})
    trim: string | null;

    @Column({type: 'varchar'})
    price: string | null;

    @Column({type: 'varchar'})
    specialname: string | null;
}