
import { Button } from '@mui/material';
import React, { useState } from 'react';
import "./Home.css";

function Modify_Demande_Mission() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nDate: ${date}\nDescription: ${description}`);
    setName('');
    setDate('');
    setDescription('');
  }
  return (
    
    <form onSubmit={handleSubmit}>
      <div className="input-zone ">
            <label className="input-label">Nom:</label>
            <input className="input-field w-1/2" type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
      <br />
      <div className="input-zone ">
            <label className="input-label">Date:</label>
            <input className="input-field w-1/2" type="text" value={date} onChange={e => setDate(e.target.value)} />
        </div>
      <div className="input-zone ">
            
      <label className="input-label">Description :</label>
            <div
              contentEditable={true}
              className={`  border-2 outline-white bg-white w-1/2 border-gray-500/70 p-2 min-height: 20vh`}
              value={description} onChange={e => setDescription(e.target.value)}
              style={{ fontSize: "Left", fontFamily: "Times New Roman", textAlign: "16px"}}
              ></div>
        </div>

        <Button
              variant="contained"
              sx={{
                //backgroundColor: COLORS.myGreen,
                backgroundColor: "#A9CAAA",
                marginTop: "20px",
                marginRight: "26px",
                marginLeft: "50%",
              }}
            >
              Valider
            </Button>

            <Button
              variant="contained"
              sx={{
                //backgroundColor: COLORS.myGreen,
                backgroundColor: "red",
                marginTop: "20px",
                marginRight: "26px",
                marginLeft: "50%",
              }}
            >
              Refuser
            </Button>
    </form>
  );
}

export default Modify_Demande_Mission;

