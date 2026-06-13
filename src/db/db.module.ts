import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'node:process';

@Module({
  imports : [
    MongooseModule.forRootAsync({
      imports : [ConfigModule],
      inject : [ConfigService],
      useFactory:(configservice : ConfigService)=>({
        uri : configservice.get('DB_URI')
      })
    }),
  ],
  controllers: [],
  providers: [],
})
export class DbModule {}
