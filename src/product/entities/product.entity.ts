import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity ({name: "tb_product"})
export class Product {

    @PrimaryGeneratedColumn ()
    id: number;

    @IsNotEmpty ()
    @Column ({length: 100, nullable: false})
    product_name: string;

    @IsNotEmpty ()
    @Column ('decimal', {precision: 7, scale: 2, nullable: false})
    price: number;

    @IsNotEmpty ()
    @Column ({nullable: false})
    available: boolean;   
}
