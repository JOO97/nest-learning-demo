import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectService {
	findAll(): string[] {
		return ['findAll'];
	}

	findOneById(id: string): string[] {
		return ['findOneById', id];
	}
}
