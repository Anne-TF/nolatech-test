import {APIBasePath} from '@common/utils';
import {IUser} from '../interfaces/user.interface.ts';

export class AuthGateway {
    private static routes = {
        getUser: {
            url: '/users/:id',
            method: "GET"
        }
    };

    static async getUser(id: number): Promise<IUser> {
        const url = `${APIBasePath}${this.routes.getUser.url}`;

        return fetch(url.replace(':id', id.toString()), {
            method: this.routes.getUser.method,
        })
                .then(response => response.json())
                .then(data => { return data })
                .catch(error => { throw error });
        }
}