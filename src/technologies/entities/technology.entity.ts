import { Project } from 'src/projects/entities/project.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('technologies')
export class Technology {
  @PrimaryColumn()
  id: number;

  @ManyToOne(() => Project, (project) => project.technologies, {
    onDelete: 'CASCADE',
  })
  projectID: Project;

  @Column('varchar')
  language: string;

  @Column('varchar')
  type: string;
}
