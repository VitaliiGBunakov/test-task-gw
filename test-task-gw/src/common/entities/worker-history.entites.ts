import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Job } from '../../modules/jobs/entities/job.entity';
import { Worker } from '../../modules/workers/entities/worker.entity';

export class WorkerHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Worker, (worker) => worker.id)
  workerId: number;

  @Column({ type: 'date' })
  hiredDate: Date;

  @Column({ type: 'date' })
  firedDate: Date;

  @ManyToOne(() => Job, (job) => job.id)
  jobId: Job;

  @Column()
  notes: string;
}
