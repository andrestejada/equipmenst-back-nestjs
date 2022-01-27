import {MigrationInterface, QueryRunner} from "typeorm";

export class UsuariosMigracion1642257801744 implements MigrationInterface {
    name = 'UsuariosMigracion1642257801744'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "equipo" ("id" SERIAL NOT NULL, CONSTRAINT "PK_a545d29b4870688c462189447da" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "usuario" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "clave" character varying NOT NULL, "fechaCreacion" TIMESTAMP NOT NULL, CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "usuario"`, undefined);
        await queryRunner.query(`DROP TABLE "equipo"`, undefined);
    }

}
