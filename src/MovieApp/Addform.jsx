import { useState } from "react";
import { useFormik } from "formik";

import { object, string, number, date, InferType } from 'yup';

const Addform =()=>{

    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

const movievalidation = object({
    name : string().required().min(6),
    password:string().required().min(6).matches(regularExpression, "please enter valid password"),
})


const {handleSubmit, values, handleChange, handleBlur , errors, touched} = useFormik({

    initialValues: {name : '', password : ""},
    validationSchema:movievalidation,
    onSubmit : (values, actions)=>{
        console.log(values);
        actions.resetForm();
    },
})

    return(
        <div>
            

                   <form onSubmit={handleSubmit} >
                    <div>
                    Name <input
                          value={values.name}
                          onChange={handleChange}                        
                          onBlur={handleBlur}   
                          name="name"
                                    />
                    {touched.name && errors.name ? <p>{errors.name }</p>: null}
                    </div>
                    <div>
                    password <input
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}   

                        name="password"

/>                    <p>{touched.password && errors.password ? errors.password : null}</p>

                    </div>
                       <button type="submitt">submitt</button>
                    </form> 


            </div>
    )
}

export default Addform;