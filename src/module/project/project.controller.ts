import {
	Controller,
	Get,
	HttpCode,
	Header,
	Redirect,
	Param,
	Query,
	Post,
	Body,
} from '@nestjs/common';
import { ProjectService } from './project.service';

import SearchProjectDto from './dto/search-project.dto';
import CreateProjectDto from './dto/create-project.dto';

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

	@Get()
	search(@Query() searchProjectDto: SearchProjectDto): Object {
		return this.projectService.findByParams(searchProjectDto);
	}

	@Post()
	createProject(@Body() createProjectDto: CreateProjectDto): Object {
		return this.projectService.create(createProjectDto);
	}
}
