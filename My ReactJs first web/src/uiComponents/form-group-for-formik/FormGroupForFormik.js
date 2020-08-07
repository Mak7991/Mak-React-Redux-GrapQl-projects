import {Form} from "react-bootstrap";
import React from "react";

const FormGroupForFormik = (props) => {
    const {label, type = 'text', placeholder = '', name, values, errors, touched, errorClass = 'error'} = props;
    return (
        <Form.Group>
            {label ? <Form.Label> {label} </Form.Label> : null}
            <div className="input-with-text">
                <Form.Control
                    required
                    {...props}
                    type={type}
                    placeholder={placeholder}
                    value={values && values[name]}
                    isValid={errors && !!errors[name]}
                    isInvalid={errors && errors[name]}
                    className={((touched && touched[name]) && (errors && errors[name])) ? errorClass : null}/>
                <Form.Control.Feedback type="invalid"> {errors && errors[name]} </Form.Control.Feedback>
            </div>
        </Form.Group>
    )
};

export default FormGroupForFormik;