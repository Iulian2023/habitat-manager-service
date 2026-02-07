import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Index,
  } from 'typeorm';

@Entity('HABITAT')
export class Habitat {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Index({ unique: true })
  @Column({ type: 'varchar', length: 50, unique: true })
  habitatCode?: string;

  @Index()
  @Column({ type: 'varchar', length: 100 })
  name?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description?: string;

  @Column({
    type: 'enum',
    enum: ['FOREST', 'DESERT', 'WETLAND', 'GRASSLAND', 'MOUNTAIN', 'OCEAN', 'SAVANNA', 'JUNGLE'],
  })
  climate?: string;

  @Column({ type: 'boolean', default: false })
  IsSynchronized?: boolean;

  @Column({ type: 'timestamptz', nullable: true })
  synchronizedAt?: Date;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
