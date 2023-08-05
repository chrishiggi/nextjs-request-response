import { Injectable, Logger } from '@nestjs/common';
import { RequestService } from './services/request.service';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  constructor(private readonly requestService: RequestService) {}
  getHello(): string {
    const userId = this.requestService.getUserId();
    this.logger.log('getHello userId', userId);
    return `Hello ${userId}`;
  }
}
