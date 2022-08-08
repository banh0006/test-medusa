import {MigrationInterface, QueryRunner} from "typeorm";

export class updateProductattributes1659637893015 implements MigrationInterface {
    name = 'updateProductattributes1659637893015'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_attributes" DROP COLUMN "attributes"`);
        await queryRunner.query(`ALTER TABLE "product_attributes" ADD "attributes" text`);
        await queryRunner.query(`ALTER TABLE "product_attributes" DROP COLUMN "filters"`);
        await queryRunner.query(`ALTER TABLE "product_attributes" ADD "filters" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_attributes" DROP COLUMN "filters"`);
        await queryRunner.query(`ALTER TABLE "product_attributes" ADD "filters" character`);
        await queryRunner.query(`ALTER TABLE "product_attributes" DROP COLUMN "attributes"`);
        await queryRunner.query(`ALTER TABLE "product_attributes" ADD "attributes" character`);
    }

}
