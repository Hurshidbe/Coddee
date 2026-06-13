import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger('AllExceptionsFilter');

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message: any = 'Internal server error';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const res = exception.getResponse();
      if (typeof res === 'object' && res !== null) {
        message = (res as any).message || JSON.stringify(res);
      } else {
        message = res;
      }
      this.logger.warn(`HTTP Exception: ${status} [${request.method} ${request.url}] - Message: ${JSON.stringify(message)}`);
    } else if (exception instanceof Error) {
      message = 'Internal server error';
      this.logger.error(
        `Unexpected error: ${exception.message} [${request.method} ${request.url}]`,
        exception.stack,
      );
    } else {
      this.logger.error(`Unknown exception type [${request.method} ${request.url}]: ${JSON.stringify(exception)}`);
    }

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: message,
    });
  }
}
