import { Column, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Employer } from '../../employers/entities/employer.entity';
import { Worker } from '../../workers/entities/worker.entity';

export enum Status {
  DRAFT,
  ACTIVE,
  ARCHIVED,
}

export class Job {
  /**
   * ● Workers (працівники, оформлені на дану вакансію)
   */

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.DRAFT,
  })
  status: Status;

  @Column({ type: 'date' })
  creationDate: Date;

  @Column()
  salary: number;

  @OneToMany(() => Worker, (worker) => worker.id)
  workers: Worker[];

  @ManyToOne(() => Employer, (employer) => employer.id)
  owner: Employer;
}
