import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { EnclosureService } from './enclosure.service';
import { CreateEnclosureDto } from './dto/create-enclosure.dto';
import { UpdateEnclosureDto } from './dto/update-enclosure.dto';

@Controller()
export class EnclosureController {
  constructor(private readonly enclosureService: EnclosureService) {}

  @MessagePattern('createEnclosure')
  create(@Payload() createEnclosureDto: CreateEnclosureDto) {
    return this.enclosureService.create(createEnclosureDto);
  }

  @MessagePattern('findAllEnclosure')
  findAll() {
    return this.enclosureService.findAll();
  }

  @MessagePattern('findOneEnclosure')
  findOne(@Payload() id: string) {
    return this.enclosureService.findOne(id);
  }

  @MessagePattern('updateEnclosure')
  update(@Payload() updateEnclosureDto: UpdateEnclosureDto) {
    return this.enclosureService.update(updateEnclosureDto.id, updateEnclosureDto);
  }

  @MessagePattern('removeEnclosure')
  remove(@Payload() id: string) {
    return this.enclosureService.remove(id);
  }
}
