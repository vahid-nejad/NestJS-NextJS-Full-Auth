import { RoleEnum } from './../../drizzle/schema/users.schema';
import { pgEnum } from 'drizzle-orm/pg-core';
import { Role } from '../enums/role.enum';

export type CurrentUser = {
  id: number;
  role: RoleEnum;
};
