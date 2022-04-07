import { useState } from "react";
import styled from 'styled-components';

// Presentational Component
import Form from "../../components/form/Form";
// import Dialog from "../../components/dialog/Dialog";
import Loader from "../../components/loader/Loader";

// Theming
import colors from '../../theming/colors.js';

// Services
// import { ContactUsService } from "../../services/api/CountryService";

const FormContainer = styled.div`
    min-height: 100vh;
    /* background: linear-gradient(-27deg, ${colors.secundaryColorRgba} 50%, ${colors.primaryColorRgba} 50%); */
    background-image: url('/assets/contactus/firm-handshake.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
`

const FormWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    backdrop-filter: grayscale(100%);
    padding-bottom: 1rem;
`

const FormCard = styled.div`
    display: flex;
    justify-content: center;
    width: 40%;
    min-width: 380px;
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

    // const showToast = useRef(null);
    // let timer;

    const handleSubmit = async e => {
        setLoading(true);
        // try{
        //     setLoading(true);
        //     const response = await ContactUsService.contactUs(e);

        //     // Respuesta Ok
        //     if(response && response.data && !response.err) {
        //         showToast.current('success', 'Éxito', 'Se ha registrado el usuario exitosamente, se envio un email a su correo para verificación', 5000);
        //         // Navegamos a login
        //         timer = setTimeout(() => {
        //             setLoading(false);
        //             navigate('/ingresar');
        //         },7000);

        //         return () => clearTimeout(timer);
        //     }
        //     else showToast.current('error', 'Error Message', 'No se pudo crear el usuario', 3000);
        // } catch(err) {
        //     setLoading(false);
        //     const {response} = err;
        //     if(response && response.data && response.data.data && response.data.data.length)
        //         showToast.current('error', 'Error Message', response.data.data, 3000);
        // }
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

    if(loading) return (
        <>
        <Loader />
        {/* <Dialog 
                position='bottom-left'
                showToast={showToast}
                /> */}
        </>
    );

    return (
        <FormContainer className="form__container--contactUs">
            <FormWrapper>
                <FormCard className="form__card--contactUs">
                    <Form 
                        defaultValues={defaultValues}
                        defaultValuesError={defaultValuesError}
                        fields={fields}
                        handleSubmitForm={handleSubmit} 
                        title='Contacto' 
                    />
                    {/* <Dialog 
                            position='bottom-left'
                            showToast={showToast}
                            /> */}
                </FormCard>
            </FormWrapper>
        </FormContainer>
    );
}

export default ContactUs;