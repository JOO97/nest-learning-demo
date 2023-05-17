import { Module } from '@nestjs/common';
// import { DevtoolsModule } from '@nestjs/devtools-integration';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './module/project/project.module';

@Module({
	imports: [
		// DevtoolsModule.register({
		// 	http: true,
		// 	port: 3002,
		// }),
		ProjectModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
