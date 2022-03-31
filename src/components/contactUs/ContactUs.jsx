import { useState } from "react";

// Presentational Component
import Form from "../../components/form/Form";
// import Dialog from "../../components/dialog/Dialog";
import Loader from "../../components/loader/Loader";

// Services
// import { ContactUsService } from "../../services/api/CountryService";

const ContactUs = () => {

    const [loading, setLoading] = useState(true);

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
            label: 'Nombre:',
            maxLength: 45,
            minLength: 0,
            handleChange,
            required: 'El nombre de Nomnbre es requerido.'
        },
        {
            type: 'text',
            name: 'email',
            label: 'Correo electrónico:',
            maxLength: 45,
            minLength: 0,
            handleChange,
            required: 'El Correo electrónico es requerido.'
        },
        {
            type: 'text',
            name: 'subject',
            label: 'Asunto:',
            maxLength: 45,
            minLength: 0,
            handleChange,
            required: 'La Asunto es requerido.'
        },
        {
            type: 'textarea',
            name: 'message',
            label: 'Mensaje:',
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
        <div className="form__container--contactUs">
            <div className="form__card--contactUs">
                <Form 
                    defaultValues={defaultValues}
                    defaultValuesError={defaultValuesError}
                    fields={fields}
                    handleSubmitForm={handleSubmit} 
                    title='Registro' 
                />
                {/* <Dialog 
                        position='bottom-left'
                        showToast={showToast}
                        /> */}
            </div>
        </div>
    );
}

export default ContactUs;