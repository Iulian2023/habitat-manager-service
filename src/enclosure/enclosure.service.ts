import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import{ Repository } from 'typeorm';
import { CreateEnclosureDto } from './dto/create-enclosure.dto';
import { UpdateEnclosureDto } from './dto/update-enclosure.dto';
import { Enclosure } from './entities/enclosure.entity';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class EnclosureService {
  constructor(
    @InjectRepository(Enclosure)
    private readonly enclosureRepository: Repository<Enclosure>,
  ) {}

  async create(createEnclosureDto: CreateEnclosureDto): Promise<Enclosure> {
    try {
      const enclosure = this.enclosureRepository.create(createEnclosureDto);
      const saved = await this.enclosureRepository.save(enclosure);

      return saved;
    } catch {
      throw new RpcException({
        status: 404,
        message: 'Failed to create enclosure',
      });
    }
  }

  async findAll(): Promise<Enclosure[]> {
    return this.enclosureRepository.find();
  }

  async findOne(id: string): Promise<Enclosure> {
    const enclosure = await this.enclosureRepository.findOneBy({ id });
    if (!enclosure) {
      throw new RpcException({ status: 404, message: 'Enclosure not found' });
    }
    return enclosure;
  }

  async update(id: string, updateEnclosureDto: UpdateEnclosureDto): Promise<Enclosure> {
    try {
      await this.enclosureRepository.update(id, updateEnclosureDto);
      const updated = await this.enclosureRepository.findOneBy({ id });
      if (!updated) {
        throw new RpcException({ status: 404, message: 'Enclosure not found' });
      }
      return updated;
    } catch {
      throw new RpcException({
        status: 404,
        message: 'Failed to update enclosure',
      });
    }
  }

  async remove(id: string): Promise<{ deleted: boolean }> {
    try {
      const result = await this.enclosureRepository.delete(id);
      if (result.affected === 0) {
        throw new RpcException({ status: 404, message: 'Enclosure not found' });
      }
      return { deleted: true };
    } catch {
      throw new RpcException({
        status: 404,
        message: 'Failed to delete enclosure',
      });
    }
  }
}
