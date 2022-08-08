import {MigrationInterface, QueryRunner} from "typeorm";

export class UserChanged1659536025160 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE vehicle_info(vehicle_id varchar, info varchar)`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DELETE TABLE vehicle_info`,
        )
    }

}
