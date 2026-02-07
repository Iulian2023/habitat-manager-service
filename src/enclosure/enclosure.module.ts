import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnclosureService } from './enclosure.service';
import { EnclosureController } from './enclosure.controller';
import { Enclosure } from './entities/enclosure.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Enclosure])],
  controllers: [EnclosureController],
  providers: [EnclosureService],
})
export class EnclosureModule {}
