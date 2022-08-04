import { post } from './AxiosService.js';
import constans from '../helpers/constans.js';

export const ContactUsService = {
    contactUs: (data) => post(constans.user.contactUs, data)
}