import React, { useState, useEffect } from 'react';
import { OrgChartComponent } from './OrgChart';
import * as d3 from 'd3';





export const StructureMain = props => {


    const [data, setData] = useState(null);
    const handlePush=()=>{

    }






    useEffect(() => {
        d3.csv(
            'https://raw.githubusercontent.com/bumbeishvili/sample-data/main/org.csv'
        ).then(data => {
            setData(data);
        });
    }, []);
    return (


            <OrgChartComponent
                setClick={click => ( click)}
                onNedeClick={handlePush}
                data={data}
            />

    );
};

