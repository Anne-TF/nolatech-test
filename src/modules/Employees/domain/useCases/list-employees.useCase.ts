import {EmployeesGateway} from '@modules/Employees/infrastructure/gateways/employees.gateway.ts';

export class ListEmployeesUseCase
{
    static async handler(page: number, limit: number)
    {
        return await EmployeesGateway.list(page, limit);
    }
}