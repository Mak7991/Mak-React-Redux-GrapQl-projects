import React from "react";
import {Formik} from "formik";
import {contactUs} from "../../utils/schema";
import {Button, Container, Form} from "react-bootstrap";
import {FormGroupForFormik} from "../index";
import './ContactUs.scss';

const CForm = () => {

    let payload = {
        fullName: '',
        email: '',
        phone: '',
        message: ''
    };

    return (
        <Formik
            validationSchema={contactUs}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                // When button submits form and form is in the process of submitting, submit button is disabled
                setSubmitting(true);
                // Sets setSubmitting to false after form is reset
                setSubmitting(false);
                console.log('values', values)
            }}
            initialValues={payload}>
            {(props) => {
                const {handleSubmit, handleChange, handleBlur, values, touched, isValid, errors} = props;
                return (
                    <Form onSubmit={handleSubmit}>
                        <div className="two-inputs">
                            <FormGroupForFormik
                                placeholder="Full Name"
                                name="fullName"
                                values={values}
                                errors={errors}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <FormGroupForFormik
                                placeholder="Email"
                                name="email"
                                type="email"
                                values={values}
                                errors={errors}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <FormGroupForFormik
                            placeholder="Phone"
                            name="phone"
                            type="number"
                            values={values}
                            errors={errors}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />

                        <FormGroupForFormik
                            placeholder="Message"
                            name="message"
                            as="textarea"
                            rows="5"
                            values={values}
                            errors={errors}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <div className="button-container">
                            <Button className="normal-button" type='submit'>
                                Submit
                            </Button>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
};

function ContactUs() {
    return (
        <section className="normal-section contact-us">
            <Container>
                <div className="form-container">
                    <h1 className="heading"> Contact us </h1>
                    <CForm/>
                </div>
            </Container>
        </section>
    );
}

export default ContactUs;