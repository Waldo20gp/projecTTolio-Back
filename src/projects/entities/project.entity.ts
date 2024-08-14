import { Diagram } from 'src/diagrams/entities/diagram.entity';
import { Repositories } from 'src/repositories/entities/repository.entity';
import { Technology } from 'src/technologies/entities/technology.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', {
    name: 'project_name',
  })
  projectName: string;

  @Column('date', {
    name: 'init_date',
  })
  initDate: Date;

  @Column('varchar', {
    name: 'short_description',
  })
  shortDescription: string;

  @Column('varchar', {
    name: 'version',
    nullable: true,
  })
  version: string;

  @Column('varchar', {
    name: 'large_description',
    nullable: true,
  })
  largeDescription?: string;

  @OneToMany(() => Repositories, (repositories) => repositories.projectID, {
    cascade: true,
    eager: true,
  })
  repositories?: Repositories[];

  @OneToMany(() => Technology, (technology) => technology.projectID, {
    cascade: true,
    eager: true,
  })
  technologies: Technology[];

  @OneToMany(() => Diagram, (diagram) => diagram.projectID, {
    cascade: true,
    eager: true,
  })
  diagrams: Diagram[];
}
