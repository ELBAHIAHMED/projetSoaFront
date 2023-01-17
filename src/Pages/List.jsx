import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

function List() {
    const [data, setData] = useState([
        {id: '1', title: "100", description:"...", date:"12/03/2023"},
        {id: '2', title: "100", description:"...", date:"12/03/2023"},
        {id: '3', title: "100", description:"...", date:"12/03/2023"},
        {id: '4', title: "100", description:"...", date:"12/03/2023"},
        {id: '5', title: "100", description:"...", date:"12/03/2023"},
        {id: '6', title: "100", description:"...", date:"12/03/2023"},
    ]);
/*
    useEffect(() => {
        axios.get('https://your-api-endpoint.com/data')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);*/

    const handleModify = (id) => {
        // code to handle modify function
    }

    return (
        <div className="card-container">
            {data.map(item => (
                <Card key={item.id} item={item} handleModify={handleModify} />
            ))}
        </div>
    );
}

export default List;
