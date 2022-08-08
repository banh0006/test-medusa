import {MigrationInterface, QueryRunner} from "typeorm";

export class attributeTable1659560795686 implements MigrationInterface {
    name = 'attributeTable1659560795686'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "attribute" ("id" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "attribute_id" SERIAL NOT NULL, "value" character varying NOT NULL, CONSTRAINT "PK_b09a618cba6e686955b8cbdce02" PRIMARY KEY ("id", "attribute_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "attribute"`);
    }

}
