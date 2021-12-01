import React, { useState, useEffect } from 'react';
import './style.css';
import { OrgChartComponent } from './OrgChart';
import * as d3 from 'd3';





export const Structure = props => {


    const [data, setData] = useState(null);






    useEffect(() => {
        d3.csv(
            'https://raw.githubusercontent.com/bumbeishvili/sample-data/main/org.csv'
        ).then(data => {
            setData(data);
        });
    }, []);
    return (
        <div>

            <OrgChartComponent
                setClick={click => ( click)}
                data={data}
            />
        </div>
    );
};

