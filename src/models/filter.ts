import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { BaseEntity } from "@medusajs/medusa"
import { generateEntityId } from "@medusajs/medusa/dist/utils"

@Entity()
export class Filter extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    filter_id: number;

    @Column({type: 'int'})
    attribute_id: number;

    @Column({type: 'varchar'})
    attribute_value: string;

    @BeforeInsert()
    private beforeInsert(): void {
      this.id = generateEntityId(this.id, "attribute")
    }
}