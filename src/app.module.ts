import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ProblemsModule } from './modules/problems/problems.module';
import { ProfileSettingsModule } from './modules/profile_settings/profile_settings.module';
import { ProblemActionsModule } from './modules/problem_actions/problem_actions.module';
import { ProblemDiscussionsModule } from './modules/problem_discussions/problem_discussions.module';
import { ReactionDiscussionsModule } from './modules/reaction_discussions/reaction_discussions.module';
import { ModemailerModule } from './modules/modemailer/modemailer.module';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal : true,
      envFilePath: '.env'
    }),
    DbModule,
    AuthModule,
    UsersModule,
    ProblemsModule,
    ProfileSettingsModule,
    ProblemActionsModule,
    ProblemDiscussionsModule,
    ReactionDiscussionsModule,
    ModemailerModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
