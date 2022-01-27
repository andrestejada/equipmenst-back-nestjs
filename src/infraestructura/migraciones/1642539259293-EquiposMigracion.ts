import {MigrationInterface, QueryRunner} from "typeorm";

export class EquiposMigracion1642539259293 implements MigrationInterface {
    name = 'EquiposMigracion1642539259293'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "equipo" ADD "fechaMantenimiento" TIMESTAMP WITH TIME ZONE`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "equipo" DROP COLUMN "fechaMantenimiento"`, undefined);
    }

}
