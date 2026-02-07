import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { HabitatService } from './habitat.service';
import { CreateHabitatDto } from './dto/create-habitat.dto';
import { UpdateHabitatDto } from './dto/update-habitat.dto';

@Controller()
export class HabitatController {
  constructor(private readonly habitatService: HabitatService) {}

  @MessagePattern('createHabitat')
  create(@Payload() createHabitatDto: CreateHabitatDto) {
    return this.habitatService.create(createHabitatDto);
  }

  @MessagePattern('findAllHabitat')
  findAll() {
    return this.habitatService.findAll();
  }

  @MessagePattern('findOneHabitat')
  findOne(@Payload() id: string) {
    return this.habitatService.findOne(id);
  }

  @MessagePattern('updateHabitat')
  update(@Payload() updateHabitatDto: UpdateHabitatDto) {
    return this.habitatService.update(updateHabitatDto.id, updateHabitatDto);
  }

  @MessagePattern('removeHabitat')
  remove(@Payload() id: string) {
    return this.habitatService.remove(id);
  }
}
