import { Module } from '@nestjs/common';
import { RepositoriesService } from './repositories.service';
import { RepositoriesController } from './repositories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repositories } from './entities/repository.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Repositories])],
  controllers: [RepositoriesController],
  providers: [RepositoriesService],
})
export class RepositoriesModule {}
