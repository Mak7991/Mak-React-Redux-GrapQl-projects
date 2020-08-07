import React, {Fragment} from 'react';
import './Job.scss';
import {HeaderSection, FormGroupForFormik} from "../../../uiComponents";
import Background from '../../../assets/images/career-header-background.jpg';
import {Col, Container, Row, Form, Button} from "react-bootstrap";
import {Formik} from "formik";
import {applicationForApply} from "../../../utils/schema";
import {MdGroup, MdLocationOn, MdSchedule} from 'react-icons/md';


const ApplyForm = () => {

    let payload = {
        fullName: '',
        email: '',
        phone: '',
        profileLink: '',
        coverLetter: ''
    };

    return (
        <Formik
            validationSchema={applicationForApply}
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
                        <FormGroupForFormik
                            label="Full Name"
                            name="fullName"
                            values={values}
                            errors={errors}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <FormGroupForFormik
                            label="email"
                            name="email"
                            type="email"
                            values={values}
                            errors={errors}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <FormGroupForFormik
                            label="Phone"
                            name="phone"
                            type="number"
                            values={values}
                            errors={errors}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <FormGroupForFormik
                            label="Profile Link"
                            name="profileLink"
                            type="text"
                            values={values}
                            errors={errors}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <FormGroupForFormik
                            label="Cover Letter"
                            name="coverLetter"
                            as="textarea"
                            rows="3"
                            values={values}
                            errors={errors}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <div className="button-container">
                            <Button className="normal-button" type='submit'>
                                Apply
                            </Button>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
};

function Job({location}) {
    console.log('location', location);
    const {state = {}} = location;

    function renderDetail(key){
        return (
            <Fragment>
                <h4>{key}</h4>
                <p>{state[key]}</p>
            </Fragment>
        )
    }

    return (
        <div className="job">
            <HeaderSection
                image={Background}
                style="inner-page-header"
                upperTitle="Career"
                title={state.designation}
            />

            <section className="normal-section">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={7}>
                            <div className="content">
                                <h1>{state ? state.designation : ''}</h1>
                                <div className="locationAndRole">
                                    {state && state.location ? <span> <MdLocationOn/> {state.location} </span> : null}
                                    {state && state.role ? <span> <MdGroup/> {state.role} </span> : null}
                                    {state && state.position ? <span> <MdSchedule/> {state.position} </span> : null}
                                </div>
                                {state && state.description ? <p>{state.description}</p> : null}
                                {state && state.requirement ? renderDetail('requirement') : null}
                                {state && state.responsibilities ? renderDetail('responsibilities') : null}
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={5}>
                            <div className="form-section">
                                <h6>Apply for this position</h6>
                                <ApplyForm/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </div>
    );
}

export default Job;