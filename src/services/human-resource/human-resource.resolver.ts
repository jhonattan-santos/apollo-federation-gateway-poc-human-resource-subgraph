import {
  Args,
  Resolver,
  Query,
  ResolveField,
  Parent,
  ResolveReference,
} from '@nestjs/graphql';
import { HumanResourceService } from './human-resource.service';
import { NotFoundException } from '@nestjs/common';
import { Employee } from './entities/employee.entities';

@Resolver((of) => Employee)
export class HumanResourceResolver {
  constructor(private readonly humanResourceService: HumanResourceService) {}

  @Query((returns) => [Employee])
  async employee(@Args('id') id: string): Promise<Employee[]> {
    const employee = await this.humanResourceService.findEmployeeById(id);
    if (!employee) {
      throw new NotFoundException(id);
    }
    return employee;
  }

  @Query((returns) => [Employee])
  employees(): Promise<Employee[]> {
    return this.humanResourceService.findAllEmployee();
  }

  @ResolveReference()
  async resolveReference(reference: { __typename: string; id: string }) {
    const employee = await this.humanResourceService.findEmployeeById(
      reference.id,
    );
    if (!employee) {
      throw new NotFoundException(reference.id);
    }
    return employee[0];
  }
}
