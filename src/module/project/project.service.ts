import { Injectable } from '@nestjs/common';
import SearchProjectDto from './dto/search-project.dto';
import CreateProjectDto from './dto/create-project.dto';

@Injectable()
export class ProjectService {
	findAll(): string[] {
		return ['findAll'];
	}

	findOneById(id: string): string[] {
		return ['findOneById', id];
	}

	findByParams(searchProjectDto: SearchProjectDto): any {
		return ['findByParams', searchProjectDto];
	}

	create(createProjectDto: CreateProjectDto): any {
		return ['create', createProjectDto];
	}
}
