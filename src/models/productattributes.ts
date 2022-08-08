import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { BaseEntity} from "@medusajs/medusa"
import { generateEntityId } from "@medusajs/medusa/dist/utils"

@Entity()
export class ProductAttributes extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    filter_id: number;

    @Column({type: 'varchar'})
    product_id: string;

    @Column("simple-array")
    attributes: string[] | null;

    @Column("simple-array")
    filters: string[] | null;

    @BeforeInsert()
    private beforeInsert(): void {
      this.id = generateEntityId(this.id, "product_attributes")
    }
}