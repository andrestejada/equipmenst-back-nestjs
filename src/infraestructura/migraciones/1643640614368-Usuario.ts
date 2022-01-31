import {MigrationInterface, QueryRunner} from "typeorm";

export class Usuario1643640614368 implements MigrationInterface {
    name = 'Usuario1643640614368'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "usuario" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "apellido" character varying NOT NULL, "correo" character varying NOT NULL, "clave" character varying NOT NULL, "create_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "update_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_349ecb64acc4355db443ca17cbd" UNIQUE ("correo"), CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "equipos" ("id" SERIAL NOT NULL, "codigo" integer NOT NULL, "descripcion" character varying NOT NULL, "ubicacion" character varying NOT NULL, "fecha_mantenimiento" TIMESTAMP WITH TIME ZONE, "user_id" integer, CONSTRAINT "PK_451fffd8d175b5b7aadbf5ba760" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "equipos" ADD CONSTRAINT "FK_de6c2a69c2fb1500ae90c3bf17b" FOREIGN KEY ("user_id") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "equipos" DROP CONSTRAINT "FK_de6c2a69c2fb1500ae90c3bf17b"`, undefined);
        await queryRunner.query(`DROP TABLE "equipos"`, undefined);
        await queryRunner.query(`DROP TABLE "usuario"`, undefined);
    }

}
