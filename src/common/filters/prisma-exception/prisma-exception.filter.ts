import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client';
import { Response } from 'express';

@Catch(PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {

  private errorResponse(
    response: Response,
    statusCode: HttpStatus,
    message: string,
    error: string,
  ) {
    return response.status(statusCode).json({
      success: false,
      statusCode,
      message,
      error,
    });
  }

  // field extractor for Prisma  driver adapter errors
  private extractFields(exception: PrismaClientKnownRequestError): string {
    const driverError = exception.meta?.driverAdapterError as any;
    return driverError?.cause?.constraint?.fields?.join(', ') ?? 'Field';
  }

  // model name extractor
  private extractModel(exception: PrismaClientKnownRequestError): string {
    return (exception.meta?.modelName as string) ?? 'Record';
  }

  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();

    switch (exception.code) {
      case 'P2002': // Unique constraint violation
        return this.errorResponse(
          response,
          HttpStatus.CONFLICT,
          `${this.extractFields(exception)} already exists`,
          'Conflict',
        );

      case 'P2025': // Record not found
        return this.errorResponse(
          response,
          HttpStatus.NOT_FOUND,
          `${this.extractModel(exception)} not found`,
          'Not Found',
        );

      case 'P2003': // Foreign key constraint
        return this.errorResponse(
          response,
          HttpStatus.BAD_REQUEST,
          'Related record not found',
          'Bad Request',
        );

      case 'P2014': // Relation violation
        return this.errorResponse(
          response,
          HttpStatus.BAD_REQUEST,
          'Relation constraint violation',
          'Bad Request',
        );

      default:
        return this.errorResponse(
          response,
          HttpStatus.INTERNAL_SERVER_ERROR,
          exception.message,
          'Internal Server Error',
        );
    }
  }
}