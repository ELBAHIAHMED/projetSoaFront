
import { Button } from '@mui/material';
import React, { useState } from 'react';
import "./Home.css";
import { useEffect } from 'react';
import axios from 'axios';

function Modify_Demande_Rembourssement(props) { 
  
const [name, setName] = useState("title");
const [day, setDay] = useState("date");
const [deteal, setDeteal] = useState("description");

const handleSubmit = async (e) => {
  e.preventDefault();
  const data = { name, day, deteal };
  try {
      const response = await axios.put('https://your-server-url.com/update-route', data);
      console.log(response.data);
  } catch (error) {
      console.error(error);
  }
  setName('');
  setDay('');
  setDeteal('');
}

console.log(props);
  return (
  
    <form onSubmit={handleSubmit}>
      <div className="input-zone ">
            <label className="input-label">ahmed:</label>
            <input className="input-field w-1/2" type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
      <br />
      <div className="input-zone ">
            <label className="input-label">Date:</label>
            <input className="input-field w-1/2" type="text" value={day} onChange={e => setDay(e.target.value)} />
        </div>
      <div className="input-zone ">
            
      <label className="input-label">Description :</label>
            <div
              contentEditable={true}
              className={`  border-2 outline-white bg-white w-1/2 border-gray-500/70 p-2 min-height: 20vh`}
              value={deteal} onChange={e => setDeteal(e.target.value)}
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

export default Modify_Demande_Rembourssement;

/*import { Button } from '@mui/material';
import React, { useState } from 'react';
import "./Home.css";
import { useEffect } from 'react';

function Modify_Demande_Rembourssement(props) { 
  const { location } = props;
    const { id, title, description,date } = location.state;
  const [name, setName] = useState(title);
const [date2, setDate2] = useState(date);
const [description2, setDescription2] = useState(description);
const handleSubmit = (e) => {
  e.preventDefault();
  alert(`Name: ${name}\nDate: ${date}\nDescription: ${description}`);
  setName('');
  setDate2('');
  setDescription2('');
}
useEffect(() => {
  console.log(id,title, description);
}, []);

  return (
  
    <form onSubmit={handleSubmit}>
      <div className="input-zone ">
            <label className="input-label">Nom:</label>
            <input className="input-field w-1/2" type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
      <br />
      <div className="input-zone ">
            <label className="input-label">Date:</label>
            <input className="input-field w-1/2" type="text" value={2} onChange={e => setDate2(e.target.value)} />
        </div>
      <div className="input-zone ">
            
      <label className="input-label">Description :</label>
            <div
              contentEditable={true}
              className={`  border-2 outline-white bg-white w-1/2 border-gray-500/70 p-2 min-height: 20vh`}
              value={description2} onChange={e => setDescription2(e.target.value)}
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
                backgroundColor: "#A9CAAA",
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

export default Modify_Demande_Rembourssement;
*/

/*
import { Button } from '@mui/material';
import React, { useState } from 'react';
import "./Home.css";
import { useEffect } from 'react';

function Modify_Demande_Rembourssement() { 
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

export default Modify_Demande_Rembourssement;*/