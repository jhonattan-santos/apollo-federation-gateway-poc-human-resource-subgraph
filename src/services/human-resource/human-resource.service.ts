import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { ResolveReference } from '@nestjs/graphql';
import { Employee } from './entities/employee.entities';

@Injectable()
export class HumanResourceService {
  private readonly logger = new Logger(HumanResourceService.name);

  constructor(private readonly httpService: HttpService) {}

  baseURL = 'http://localhost:4001';

  async findEmployeeById(id: string): Promise<Employee[]> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<Employee[]>(`${this.baseURL}/human-resource?id=${id}`)
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw 'An error happened!';
          }),
        ),
    );
    return data;
  }

  async findAllEmployee(): Promise<Employee[]> {
    const { data } = await firstValueFrom(
      this.httpService.get<Employee[]>(`${this.baseURL}/human-resource`).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }

  @ResolveReference()
  async resolveReference(reference: { __typename: string; id: string }) {
    const { data } = await firstValueFrom(
      this.httpService
        .get<Employee[]>(`${this.baseURL}/human-resource?id=${reference.id}`)
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw 'An error happened!';
          }),
        ),
    );
    return data;
  }
}
