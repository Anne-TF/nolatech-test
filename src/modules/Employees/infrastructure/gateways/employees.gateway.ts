import {APIBasePath} from '@common/utils';
import {IEmployee} from '@modules/Employees/infrastructure/interfaces';
import {IAPIResponse} from '@common/interfaces';

export class EmployeesGateway {
    private static routes = {
        list: {
            url: '/employees',
            method: "GET"
        }
    };

    static async list(page: number, limit: number): Promise<IAPIResponse<IEmployee[]>> {
        const url = `${APIBasePath}${this.routes.list.url}`;
       const query = new URLSearchParams();
        query.append('_page', page.toString());
        query.append('_per_page', limit.toString());

        return fetch(url.concat('?', query.toString()), {
            method: this.routes.list.method,
        })
                .then(response => response.json())
                .then(data => { return data })
                .catch(error => { throw error });
        }
}