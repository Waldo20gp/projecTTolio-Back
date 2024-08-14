import { Project } from 'src/projects/entities/project.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('repositories')
export class Repositories {
  @PrimaryColumn()
  id: number;

  @ManyToOne(() => Project, (project) => project.repositories, {
    onDelete: 'CASCADE',
  })
  projectID: Project;

  @Column('varchar')
  platform: string;

  @Column('varchar')
  type: string;

  @Column('varchar')
  observations: string;

  @Column('varchar')
  url: string;
}
