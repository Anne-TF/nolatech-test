import {AuthGateway} from '@modules/Auth/infrastructure/gateways/auth.gateway.ts';

export class LoginUseCase
{
    static async handler(id: number)
    {
        return await AuthGateway.getUser(id);
    }
}