import { IsString, IsNotEmpty } from 'class-validator';

export default class ProjectDto {
	@IsString()
	@IsNotEmpty({ message: '项目名称不能为空' })
	name: string;

	@IsString()
	@IsNotEmpty({ message: '项目前缀不能为空' })
	prefix: string;

	@IsString()
	desc?: string;
}
