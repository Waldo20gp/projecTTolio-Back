import { Project } from 'src/projects/entities/project.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('diagrams')
export class Diagram {
  @PrimaryColumn()
  id: number;

  @ManyToOne(() => Project, (project) => project.diagrams, {
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
