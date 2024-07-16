import { Column, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Employer } from '../../employers/entities/employer.entity';
import { WorkerHistory } from '../../../common/entities/worker-history.entites';
import { Job } from '../../jobs/entities/job.entity';

export class Worker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ type: 'integer' })
  salary: number;

  @ManyToOne(() => Employer, (employer) => employer.id)
  owner: Employer;

  @ManyToOne(() => Job, (job) => job.id)
  job: Job;

  @OneToMany(() => WorkerHistory, (workerHistory) => workerHistory.workerId)
  history: WorkerHistory[];
}
