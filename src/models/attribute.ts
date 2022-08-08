import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { BaseEntity} from "@medusajs/medusa"
import { generateEntityId } from "@medusajs/medusa/dist/utils"

@Entity()
export class Attribute extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    attribute_id: number;

    @Column({type: 'varchar'})
    value: string | null;

    @BeforeInsert()
    private beforeInsert(): void {
      this.id = generateEntityId(this.id, "attribute")
    }
}