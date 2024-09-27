import {EvaluationFormsGateway} from '../../infrastructure/gateways/evaluation-forms.gateway.ts';

export class ListEvaluationFormsUseCase
{
    static async handler(page: number, limit: number, search?: string, fieldsToSearch?: string[])
    {
        return await EvaluationFormsGateway.list(page, limit, search, fieldsToSearch);
    }
}