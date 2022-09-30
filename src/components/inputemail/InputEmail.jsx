import React from 'react'
import { useDispatch} from 'react-redux';
import { saveEmails } from '../../redux/actions';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Swal from 'sweetalert2'
import style from './InputEmail.module.css'

export default function InputEmail() {

    const dispatch = useDispatch();
    

  return (
    <div>
        <div className={style.text}>
            <h1>NEWSLETTER</h1>
            <h2>SUSCRIBETE</h2>
            <p>Y enterate de todas las novedades</p>
        </div>
        <div className={style.inputcontainer}>
            <Formik 
                initialValues={{email:''}}
                validate={values =>{
                const errors = {};
                    if(!values.email){
                        errors.email = 'Por favor ingresa un correo'
                    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                        errors.email = 'Por favor ingresa un email valido'
                    }
                    return errors;
                }}  
                onSubmit={(values,{resetForm}) =>{

                    Swal.fire({
                        title: 'Exito!',
                        text: `Te has suscrito correctamente con el correo ${values.email}, espera nuestras novedades pronto !`,
                        icon: 'done',
                        confirmButtonText: 'Cool'
                    })    
                    dispatch(saveEmails(values.email))
                    resetForm();
                }}
            >
                {(errors)=>(
                    <Form>
                        <div className={style.inputfield}>
                            <Field className={style.input} type="email" name="email" placeholder="Ingresa tu email" />
                            <button className={style.inputbutton} type="submit"> → </button> 
                        </div>
                        <div className={style.errorcontainer}>
                            <ErrorMessage className={style.error} name="email" component="div" />
                        </div>
                    </Form>
                )}

            </Formik>
        </div>

    </div>
  )
}
