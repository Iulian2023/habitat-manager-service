import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Habitat } from "./entities/habitat.entity";
import { CreateHabitatDto } from "./dto/create-habitat.dto";
import { UpdateHabitatDto } from "./dto/update-habitat.dto";
import { RpcException } from "@nestjs/microservices";

@Injectable()
export class HabitatService {
  constructor(
    @InjectRepository(Habitat)
    private readonly habitatRepository: Repository<Habitat>,
  ) {}

  async create(createHabitatDto: CreateHabitatDto): Promise<Habitat> {
    try {
      const habitat = this.habitatRepository.create(createHabitatDto);
      const saved = await this.habitatRepository.save(habitat);

      return saved;
    } catch {
      throw new RpcException({
        status: 404,
        message: "Failed to create habitat",
      });
    }
  }

  async findAll(): Promise<Habitat[]> {
    return this.habitatRepository.find();
  }

  async findOne(id: string): Promise<Habitat> {
    const habitat = await this.habitatRepository.findOneBy({ id });
    if (!habitat) {
      throw new RpcException({ status: 404, message: "Habitat not found" });
    }
    return habitat;
  }

  async update(id: string, updateHabitatDto: UpdateHabitatDto): Promise<Habitat> {
    try {
      await this.habitatRepository.update(id, updateHabitatDto);
      const updated = await this.habitatRepository.findOneBy({ id });
      if (!updated) {
        throw new RpcException({ status: 404, message: "Habitat not found" });
      }
      return updated;
    } catch {
      throw new RpcException({
        status: 404,
        message: "Failed to update habitat",
      });
    }
  }

  async remove(id: string): Promise<{ deleted: boolean }> {
    try {
      const result = await this.habitatRepository.delete(id);
      if (result.affected === 0) {
        throw new RpcException({ status: 404, message: "Habitat not found" });
      }
      return { deleted: true };
    } catch {
      throw new RpcException({
        status: 404,
        message: "Failed to delete habitat",
      });
    }
  }
}
