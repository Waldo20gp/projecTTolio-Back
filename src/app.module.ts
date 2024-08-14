import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ProjectsModule } from './projects/projects.module';
import { TechnologiesModule } from './technologies/technologies.module';
import { RepositoriesModule } from './repositories/repositories.module';
import { DiagramsModule } from './diagrams/diagrams.module';

@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
    }),

    AuthModule,

    ProjectsModule,

    TechnologiesModule,

    RepositoriesModule,

    DiagramsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
