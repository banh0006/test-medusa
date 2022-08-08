import { BeforeInsert, Column, Entity } from "typeorm"
import { BaseEntity } from "@medusajs/medusa"
import { generateEntityId } from "@medusajs/medusa/dist/utils"

@Entity()
export class Vehicle extends BaseEntity {
    @Column({type: 'varchar'})
    year: string | null;

    @Column({type: 'varchar'})
    make: string | null;

    @Column({type: 'varchar'})
    model: string | null;

    @BeforeInsert()
    private beforeInsert(): void {
      this.id = generateEntityId(this.id, "attribute")
    }
}