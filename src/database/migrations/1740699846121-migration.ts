import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1740699846121 implements MigrationInterface {
    name = 'Migration1740699846121'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" text, "price" numeric NOT NULL DEFAULT '0', "slug" text NOT NULL, "stock" integer NOT NULL DEFAULT '0', "image" text, "thumbnail" text, "gender" text NOT NULL DEFAULT 'unisex', "status" boolean NOT NULL DEFAULT true, CONSTRAINT "UQ_8cfaf4a1e80806d58e3dbe69224" UNIQUE ("slug"), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
