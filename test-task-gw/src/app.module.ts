import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { JobsModule } from './modules/jobs/jobs.module';
import { WorkersModule } from './modules/workers/workers.module';
import { EmployersModule } from './modules/employers/employers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rootpassword',
      database: 'tdb',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    EmployersModule,
    WorkersModule,
    JobsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
