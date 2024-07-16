import { Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Job } from '../../jobs/entities/job.entity';
import { Worker } from '../../workers/entities/worker.entity';

export enum Status {
  ACTIVE,
  INACTIVE,
}

export class Employer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.INACTIVE,
  })
  status: Status;

  @OneToMany(() => Job, (job) => job.id)
  jobs: Job[];

  @OneToMany(() => Worker, (worker) => worker.id)
  workers: string;
}
