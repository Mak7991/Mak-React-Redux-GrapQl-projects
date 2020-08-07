import React from 'react';
import './Career.scss';
import {HeaderSection} from "../../uiComponents";
import Background from '../../assets/images/career-header-background.jpg';
import {Container, Image} from "react-bootstrap";
import {benefits, jobs, recruitment} from "../../assets/dummy-data/Career";
import {Link} from "react-router-dom";
import {MdGroup, MdLocationOn, MdArrowForward} from 'react-icons/md';
import {createSlug} from "../../utils/CommoFunction";

function Career() {

    function renderJobs(jobs) {
        if (jobs && jobs.length) {
            return jobs.map((job, index) => {
                let slug = createSlug(job.designation);
                return (
                    <Link to={{pathname: `/career/${slug}`, state: job}} className="job" key={index}>
                        <div className="job-header">
                            <h6>{job.designation}</h6>
                            <h6>{}</h6>
                        </div>
                        <div className="job-body">
                            <span> <MdGroup/> {job.role} </span>
                            <span> <MdLocationOn/> {job.location} </span>
                            <span> More Detail <MdArrowForward/>  </span>
                        </div>
                    </Link>
                )
            })
        }
        return null;
    }

    function renderListItem(array) {
        if (array && array.length) {
            return array.map((object, index) => {
                return (
                    <li key={index}>
                        <Image draggable={false} src={object.image}/>
                        <h6>{object.title}</h6>
                        {object.description ? <p>{object.description}</p> : null}
                    </li>
                )
            })
        }
        return null;
    }

    return (
        <div className="career">
            <HeaderSection
                image={Background}
                style="inner-page-header"
                upperTitle="Welcome To"
                title="Career"
                downArrowShow={true}
            />

            <section className="current-job-section normal-section">
                <Container>
                    <div className="normal-section-heading">
                        <h1>Current Job Openings</h1>
                    </div>
                    <ul className="jobs" data-aos="fade-up" data-aos-duration="4000">
                        {renderJobs(jobs)}
                    </ul>
                </Container>
            </section>

            <section className="our-recruitment-section normal-section">
                <Container>
                    <div className="normal-section-heading">
                        <h1>Our Recruitment Process</h1>
                    </div>
                    <ul className="process-steps">
                        {renderListItem(recruitment)}
                    </ul>
                </Container>
            </section>

            <section className="our-benefits-section normal-section">
                <Container>
                    <div className="normal-section-heading">
                        <h1>Our Benefits</h1>
                    </div>
                    <ul className="benefits">
                        {renderListItem(benefits)}
                    </ul>
                </Container>
            </section>
        </div>
    );
}

export default Career;