// Libraries
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

// CSS
import './Form.css';
// FIXME: El boton de submit agregar una transicion para cuando este lleno el formulario.
const Form = ({title, handleSubmitForm, fields, defaultValues, defaultValuesError}) => {

    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues });

    const [errorWhiteSpaces, setErrorWhiteSpaces] = useState({...defaultValuesError});

    const [isPass, setPass] = useState(true);

    /**
     * 
     * @description Construye los campos del formulario
     * @returns JSX.Element
     */
     const buildFields = (field) => {
         return {
            // EL id() del shortid, para componentes que cambian en el render
            // no debe usarse, ya que al momento de renderizar por segunda vez
            // llama nuevamente al id() y este le asigna otro diferente, por lo que react
            // crea y retorna otro componente distinto, en conclusion, sobrescribe totalmente
            // el componente.
            'text' : function isText() {
                return <label key={field.name} 
                              className="form__label"
                              htmlFor={field.name}>
                            { field.label && <span className="form__name-input">{field.label}</span>}
                            <input id={field.name}
                                    className="form__input" 
                                    type="text" 
                                    maxLength={field.maxLength}
                                    minLength={field.minLength}
                                    onChange={(e)=> {console.log(e)}}
                                    disabled={field.disabled}
                                    placeholder={field.placeholder}
                                    {...register(field.name, {
                                        required : field.required,
                                        validate : (value) => {
                                            setErrorWhiteSpaces({
                                                ...errorWhiteSpaces,
                                                [field.name] : !!value.trim() ? '' : field.required
                                            });
                                            return !!value.trim();
                                        }
                                    })}
                            />
                            <small className="form__error">{errors[field.name]?.message || errorWhiteSpaces[field.name]}</small>
                        </label>;
            },
            'textarea' : function isTextarea() {
                return <label key={field.name} 
                              className="form__label"
                              htmlFor={field.name}>
                            { field.label && <span className="form__name-input">{field.label}</span>}
                            <textarea id={field.name}
                                    className="form__input" 
                                    maxLength={field.maxLength}
                                    minLength={field.minLength}
                                    cols={field.cols}
                                    rows={field.rows}
                                    onChange={(e)=> {console.log(e)}}
                                    disabled={field.disabled}
                                    placeholder={field.placeholder}
                                    {...register(field.name, {
                                        required : field.required,
                                        validate : (value) => {
                                            setErrorWhiteSpaces({
                                                ...errorWhiteSpaces,
                                                [field.name] : !!value.trim() ? '' : field.required
                                            });
                                            return !!value.trim();
                                        }
                                        })}>
                            </textarea>
                            <small className="form__error">{errors[field.name]?.message || errorWhiteSpaces[field.name]}</small>
                        </label>;
            },
            'number': function isNumber() {
                return <label key={field.name} 
                             className="form__label"
                             htmlFor={field.name}>
                            { field.label && <span className="form__name-input">{field.label}</span>}
                            <input 
                                    id={field.name}
                                    className="form__input" 
                                    type="number" 
                                    min={field.min}
                                    max={field.max}
                                    onChange={field.handleChange}
                                    disabled={field.disabled}
                                    placeholder={field.placeholder}
                                    {...register(field.name, {
                                        required : field.required,
                                        validate : (value) => {
                                            setErrorWhiteSpaces({
                                                ...errorWhiteSpaces,
                                                [field.name] : !!value.trim() ? '' : field.required
                                            });
                                            return !!value.trim();
                                        }
                                    })}
                            />
                            <small className="form__error">{errors[field.name]?.message || errorWhiteSpaces[field.name]}</small>
                        </label>
            },
            'date': function isDate() {
                return <label key={field.name} 
                        className="form__label"
                        htmlFor={field.name}>
                    { field.label && <span className="form__name-input">{field.label}</span>}
                    <input  id={field.name}
                            className="form__input" 
                            type="date" 
                            min={field.min}
                            max={field.max}
                            onChange={field.handleChange}
                            disabled={field.disabled}
                            placeholder={field.placeholder}
                            {...register(field.name, {
                                required : field.required,
                                validate : (value) => {
                                    setErrorWhiteSpaces({
                                        ...errorWhiteSpaces,
                                        [field.name] : !!value.trim() ? '' : field.required
                                    });
                                    return !!value.trim();
                                }
                            })}
                    />
                    <small className="form__error">{errors[field.name]?.message || errorWhiteSpaces[field.name]}</small>
                </label>
            },
            'month': function isMonth() {
                return <label key={field.name} 
                        className="form__label"
                        htmlFor={field.name}>
                    { field.label && <span className="form__name-input">{field.label}</span>}
                    <input  id={field.name}
                            className="form__input" 
                            type="month" 
                            min={field.min}
                            max={field.max}
                            onChange={field.handleChange}
                            disabled={field.disabled}
                            placeholder={field.placeholder}
                            {...register(field.name, {
                                required : field.required,
                                validate : (value) => {
                                    setErrorWhiteSpaces({
                                        ...errorWhiteSpaces,
                                        [field.name] : !!value.trim() ? '' : field.required
                                    });
                                    return !!value.trim();
                                }
                            })}
                    />
                    <small className="form__error">{errors[field.name]?.message || errorWhiteSpaces[field.name]}</small>
                </label>
            },
            'email': function isEmail() {
                return <label key={field.name}
                        className="form__label"
                        htmlFor={field.name}>
                    { field.label && <span className="form__name-input">{field.label}</span>}
                    <input id={field.name}
                            className="form__input" 
                            type="email"
                            pattern={field.pattern}
                            onChange={field.handleChange}
                            disabled={field.disabled}
                            placeholder={field.placeholder}
                            {...register(field.name, {
                                required : field.required,
                                validate : (value) => {
                                    setErrorWhiteSpaces({
                                        ...errorWhiteSpaces,
                                        [field.name] : !!value.trim() ? '' : field.required
                                    });
                                    return !!value.trim();
                                }
                            })}
                    />
                    <small className="form__error">{errors[field.name]?.message || errorWhiteSpaces[field.name]}</small>
                </label>
            },
            'select': function isSelect() {
                return <div key={field.name} className="form__label">
                    { field.label && <span className="form__name-input">{field.label}</span>}
                    <select id={field.name}
                        className="form__input form__select" 
                        onChange={field.handleChange}
                        disabled={field.disabled}
                        {...register(field.name, {required : field.required})}
                        >
                            <option 
                                    key='defaultOpt' 
                                    className="form__opt"
                                    value={0}
                                    disabled>Seleccione</option>
                            {field.options.map(opt => <option key={opt.name} className="form__opt" value={opt.value}>{opt.label}</option>)}
                    </select>
                    <small className="form__error">{errors[field.name]?.message}</small>
                    </div>
            },
            'password': function isPassword() {
                return <label key={field.name} 
                        className="form__label"
                        htmlFor={field.name}>
                    { field.label && <span className="form__name-input">{field.label}</span>}
                    <span className="form_view-password">
                        <input id={field.name}
                                className="form__input" 
                                type={isPass ? 'password' : 'text'}
                                onChange={field.handleChange}
                                disabled={field.disabled}
                                {...register(field.name, {
                                    required : field.required,
                                    validate : (value) => {
                                        setErrorWhiteSpaces({
                                            ...errorWhiteSpaces,
                                            [field.name] : !!value.trim() ? '' : field.required
                                        });
                                        return !!value.trim();
                                    },
                                    pattern : {
                                        value: field.pattern,
                                        message: 'Minimum eight characters, at least one letter, one number and one special character'
                                    }
                                })}
                                maxLength={field.maxLength}
                                minLength={field.minLength}
                        />
                        <img 
                            alt={field.label} 
                            className="form__view-icon" 
                            onClick={() => setPass(!isPass)}
                            src={isPass ? field.hidden : field.view} 
                            />
                    </span>
                    <small className="form__error">{errors[field.name]?.message || errorWhiteSpaces[field.name]}</small>
                </label>
            },
            'span': function isSpan() {
                return <div className="form__link" key={field.name}>
                    <Link className="form__span" to={field.name}>
                        {field.label}
                    </Link>
                </div>
            }, 
            'submit': function isSubmit(){
                return <input key={field.name}
                       id={field.name}
                       className="form__button" 
                       type="submit"
                       value={field.label}
                       disabled={field.disabled}/>
            }, 
         }[field.type]();
    }

    return (
        <form className="form" onSubmit={handleSubmit(handleSubmitForm)}>
            <h2 className="form__title">{title}</h2>
            {
                fields.map(field => buildFields(field))
            }
        </form>
    );
}

export default Form;