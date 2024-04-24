import { Module } from '@nestjs/common';
import { TelegramController } from './telegram.controller';
import { TelegramService } from './telegram.service';
import { TelegrafModule } from 'nestjs-telegraf';
import vars from 'src/const/vars';

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: vars.telegramApiKey,
    }),
  ],
  controllers: [TelegramController],
  providers: [TelegramService]
})
export class TelegramModule {}
