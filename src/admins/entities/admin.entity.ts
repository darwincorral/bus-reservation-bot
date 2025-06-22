import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Admin {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'admin@example.com' })
  @Column({ unique: true })
  email: string;

  @ApiProperty({ example: 'hashedpassword' })
  @Column()
  password: string;
}
