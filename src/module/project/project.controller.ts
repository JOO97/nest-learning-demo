import { Controller, Get, HttpCode, Header, Redirect, Param } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
	constructor(private readonly projectService: ProjectService) {}

	// @Get('li*st')
	@Get('list')
	@HttpCode(200)
	@Header('Cache-Control', 'none')
	@Header('Set-Cookie', 'name=joo')
	// @Redirect('http://127.0.0.1:3001/joo', 301)
	findAll(): string[] {
		return this.projectService.findAll();
	}

	@Get(':id')
	getProject(@Param('id') id: string): Object {
		return this.projectService.findOneById(id);
	}
}
