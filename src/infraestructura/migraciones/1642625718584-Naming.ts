import {MigrationInterface, QueryRunner} from "typeorm";

export class Naming1642625718584 implements MigrationInterface {
    name = 'Naming1642625718584'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "equipo" RENAME COLUMN "fechaMantenimiento" TO "fecha_mantenimiento"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "equipo" RENAME COLUMN "fecha_mantenimiento" TO "fechaMantenimiento"`, undefined);
    }

}
