import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class Employee {
  @Field((type) => ID, { nullable: true })
  @Directive('@shareable')
  id: string;

  @Field((type) => String, { nullable: true })
  @Directive('@shareable')
  name: string;

  @Field((type) => String, { nullable: true })
  @Directive('@shareable')
  agency: string;

  @Field((type) => String, { nullable: true })
  @Directive('@shareable')
  email: string;

  @Field((type) => [String], { nullable: true })
  @Directive('@shareable')
  role: string[];

  @Field((type) => String, { nullable: true })
  @Directive('@shareable')
  creationDate: Date;
}
