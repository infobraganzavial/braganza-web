import { useState } from "react";
import { toast } from 'react-toastify';
import styled from 'styled-components';

// Presentational Component
import Form from "../../components/form/Form";
// import Dialog from "../../components/dialog/Dialog";
import Loader from "../../components/loader/Loader";
import constans from "../../helpers/constans";

// Services
import { ContactUsService as _contactUsService } from "../../services/ContactUs";

const FormContainer = styled.div`
    min-height: calc(100vh - 100px);
    background-image: url('/assets/contactus/firm-handshake.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    width: 100%;
`

const FormWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: inherit;
    backdrop-filter: grayscale(100%);
    padding-bottom: 1rem;
`

const FormCard = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 590px;
    height: auto;
    background: rgba(255,255,255,0.8);
    border-radius: .5rem;
    border: 1px solid #cecdcd;
    box-shadow: 0 5px 35px rgba(0,0,0,.2);
    padding: 0 0 1rem 0;
`

const ContactUs = () => {

    const [loading, setLoading] = useState(false);

    const handleSubmit = async e => {
        setLoading(true);
        try{
            const response = await _contactUsService.contactUs(e);
            // Respuesta Ok
            if(response?.data?.data) toast.success(constans.messages.success);
            else toast.error(constans.messages.error);
            setLoading(false);
        } catch(err) {
            setLoading(false);
            toast.error(constans.messages.error);
        }
    };
    
    const handleChange = e => console.log(e);

    const defaultValues = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }
    
    const defaultValuesError = {...defaultValues}
    
    const fields = [
        {
            type: 'text',
            name: 'name',
            placeholder: 'Nombre',
            maxLength: 45,
            minLength: 0,
            handleChange,
            required: 'El Nombre es requerido.'
        },
        {
            type: 'text',
            name: 'email',
            placeholder: 'Correo electrónico',
            maxLength: 45,
            minLength: 0,
            handleChange,
            required: 'El Correo electrónico es requerido.'
        },
        {
            type: 'text',
            name: 'subject',
            placeholder: 'Asunto',
            maxLength: 45,
            minLength: 0,
            handleChange,
            required: 'La Asunto es requerido.'
        },
        {
            type: 'textarea',
            name: 'message',
            placeholder: 'Mensaje',
            maxLength: 45,
            minLength: 0,
            handleChange,
            required: 'El Mensaje es requerido.'
        },
        {
            type: 'submit',
            name: 'submit',
            label: 'Enviar',
        }
    ];

    if(loading) return <Loader />;

    return (
        <FormContainer  id="contacto"
                        className="form__container--contactUs">
            <FormWrapper>
                <FormCard className="form__card--contactUs">
                    <Form 
                        defaultValues={defaultValues}
                        defaultValuesError={defaultValuesError}
                        fields={fields}
                        handleSubmitForm={handleSubmit} 
                        title='Contacto' 
                    />
                </FormCard>
            </FormWrapper>
        </FormContainer>
    );
}

export default ContactUs;