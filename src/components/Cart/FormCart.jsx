import { useFormik } from 'formik'

import * as Yup from 'yup';

export const FormCart = ({onSendOrder}) => {   

      const formik = useFormik({
        initialValues: {
            name: "",
            address: "",
            email: "",
            tel: ""
        },

        validationSchema: Yup.object({
            name: Yup.string()
                .required(" * Este campo es requerido")
                .min(5, " * El nombre debe contener al menos 5 caracteres"),

            address: Yup.string()
                .required(" * Este campo es requerido")
                .min(5, " * La dirección debe contener al menos 5 caracteres"),

            email: Yup.string()
                .email(" * Email incorrecto")
                .required(" * Este campo es requerido"),

            tel: Yup.number()  
                .min(9999, " * El telefono debe contener al menos 4 números")              
                .required(" * Este campo es requerido")                
                .typeError(' * Debe ingresar números')
               
        }),

        onSubmit: (formData) => {           
            onSendOrder(formData)                    
        },

    })


    return (
        <> 
        <div className="col-lg-4 border ps-3">
                                <h3 className="bg-dark text-white py-1 text-center">Formulario de compra</h3>
            <form 
                className="ms-4" 
                onSubmit={formik.handleSubmit}
                autoComplete='off'
                >
                <div className="form-group mb-3">
                    <label className=" h5 mt-2">Nombre:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre..."
                        name='name'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />

                    {formik.touched.name &&
                        <h6 className='text-danger'>{formik.errors.name} </h6>
                    }

                </div>
                <div className="form-group mb-3">
                    <label className="h5">Dirección:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Dirección..."
                        name='address'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.address}
                    />

                    {formik.touched.address &&
                        <h6 className='text-danger'>{formik.errors.address} </h6>
                       
                    }

                </div>
                <div className="form-group mb-3">
                    <label className="h5">Email:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Email..."
                        name='email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />

                    {formik.touched.email &&
                        <h6 className='text-danger'>{formik.errors.email} </h6>
                    }

                </div>
                <div className="form-group mb-3">
                    <label className="h5">Teléfono:</label>
                    <input
                        type="tel"
                        className="form-control"
                        placeholder="Teléfono..."
                        name='tel'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.tel}
                    />

                    { formik.touched.tel &&
                        <h6 className='text-danger'>{formik.errors.tel} </h6>
                    }

                </div>
                <div className="text-end">

                    <button
                        type="submit"
                        className="btn btn-success mt-2 mb-2 px-5 fs-5"                       
                    >
                        Comprar
                    </button>

                </div>

            </form>
            </div>
        </>
    )
}
