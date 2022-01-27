import {MigrationInterface, QueryRunner} from "typeorm";

export class Naming21642625837610 implements MigrationInterface {
    name = 'Naming21642625837610'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "equipos" ("id" SERIAL NOT NULL, "codigo" integer NOT NULL, "descripcion" character varying NOT NULL, "ubicacion" character varying NOT NULL, "fecha_mantenimiento" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_451fffd8d175b5b7aadbf5ba760" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "equipos"`, undefined);
    }

}
