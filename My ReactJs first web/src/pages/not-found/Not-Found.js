import React from 'react';
import './Not-Found.scss';
import {HeaderSection} from "../../uiComponents";

function NotFound() {
    return (
        <div className="NotFound">
            <HeaderSection
                style="inner-page-header"
                upperTitle="Opss!"
                title="404 not found"
            />
        </div>
    );
}

export default NotFound;
