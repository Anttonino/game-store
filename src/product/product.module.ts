import { Module } from "@nestjs/common/decorators";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Product } from "./entities/product.entity";

@Module ({
    imports: [TypeOrmModule.forFeature([Product])],
    providers: [],
    controllers: [],
    exports: [TypeOrmModule]
})

export class ProductModule { }