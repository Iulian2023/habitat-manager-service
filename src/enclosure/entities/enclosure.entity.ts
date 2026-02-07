import { Habitat } from "src/habitat/entities/habitat.entity";
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Index } from "typeorm";

@Entity('ENCLOSURE')
export class Enclosure {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column()
    name?: string;

    @Index({ unique: true })
    @Column({ type: 'varchar', length: 100 })
    codeEnclosure?: string;

    @Column({ type: 'varchar', length: 255 })
    description?: string;

    @Column({ type: 'int' })
    capacity?: number;

    @ManyToOne(() => Habitat)
    @JoinColumn({ name: 'habitatId' })
    habitat?: Habitat;

    @Column()
    habitatId?: string;

    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;

    @Column({ type: 'boolean', default: false })
    IsSynchronized?: boolean;

    @Column({ type: 'timestamptz', nullable: true })
    synchronizedAt?: Date;
}
