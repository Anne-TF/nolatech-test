const required = () => 'This field is required';
const maxLength = (length: number) => `This field must be less than ${length} characters`;
const minLength = (length: number) => `This field must be at least ${length} characters`;
const email = () => 'You must enter a valid email address';

export const messages = {
    required,
    maxLength,
    minLength,
    email
}