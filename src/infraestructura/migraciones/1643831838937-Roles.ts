import {MigrationInterface, QueryRunner} from "typeorm";

export class Roles1643831838937 implements MigrationInterface {
    name = 'Roles1643831838937'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TYPE "usuario_role_enum" AS ENUM('Administrador', 'Consultor', 'Editor')`, undefined);
        await queryRunner.query(`ALTER TABLE "usuario" ADD "role" "usuario_role_enum" NOT NULL DEFAULT 'Administrador'`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "role"`, undefined);
        await queryRunner.query(`DROP TYPE "usuario_role_enum"`, undefined);
    }

}
