import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function Card({ item, handleModify }) {
    return (
        <div className="card">
            <div className="card-content">
                <h2>{item.title}</h2>
                <p>{item.date}</p>
                <p>{item.description}</p>

            </div>
            
            <Link
    to={{
        pathname: "/modify-demande-remboursement",
        state: { id: item.id, title: item.title, description: item.description, date: item.date }
    }}
>
    <Button
        className="modify-btn"
        sx={{
            //backgroundColor: COLORS.myGreen,
            backgroundColor: "#A9CAAA",
            marginTop: "2px",
            marginRight: "26px",
            marginLeft: "auto",
        }}
    >
        Modify
    </Button>
</Link>

        </div>
    );
}

export default Card;
