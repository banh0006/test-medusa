import {MigrationInterface, QueryRunner} from "typeorm";

export class fileName1659629251807 implements MigrationInterface {
    name = 'fileName1659629251807'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vehicle_detail" ("id" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "year" character varying NOT NULL, "make" character varying NOT NULL, "model" character varying NOT NULL, "trim" character varying NOT NULL, "price" character varying NOT NULL, "specialname" character varying NOT NULL, CONSTRAINT "PK_58f443ab0fea24367038e235aaa" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "vehicle_detail"`);
    }

}
