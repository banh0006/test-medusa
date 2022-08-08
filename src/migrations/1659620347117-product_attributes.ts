import {MigrationInterface, QueryRunner} from "typeorm";

export class productAttributes1659620347117 implements MigrationInterface {
    name = 'productAttributes1659620347117'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "filter" ("id" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "filter_id" SERIAL NOT NULL, "attribute_id" integer NOT NULL, "attribute_value" character varying NOT NULL, CONSTRAINT "PK_d7f89572e15d2e787e0ed0c0b2d" PRIMARY KEY ("id", "filter_id"))`);
        await queryRunner.query(`CREATE TABLE "product_attributes" ("id" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "filter_id" SERIAL NOT NULL, "product_id" character varying NOT NULL, "attributes" character varying NOT NULL, "filters" character varying NOT NULL, CONSTRAINT "PK_5d2bf5848aa7225fe2b5936b19f" PRIMARY KEY ("id", "filter_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product_attributes"`);
        await queryRunner.query(`DROP TABLE "filter"`);
    }

}
