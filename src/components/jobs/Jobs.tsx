import React, { useEffect } from 'react';
import axios from "axios";
// import { Card } from 'antd';
//
// const JobCard = ({short_description, stack, created_at}) => {
//     return (
//         <Card title={short_description}>
//             {stack.}
//         </Card>
//     );
// };

const Jobs = () => {

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/adverts/list')
            .then(function (response) {
                console.log(response);
            })
    },[])

    return (
        <div></div>
    );
};

export default Jobs;