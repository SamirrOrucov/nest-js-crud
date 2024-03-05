import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({


  imports: [UserModule,MongooseModule.forRoot('mongodb+srv://samir:samir@cluster0.ywgcy8n.mongodb.net/')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
