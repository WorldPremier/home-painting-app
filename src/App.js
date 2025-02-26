// Game concept you have Three tries to learn from this Piccaso Parrot. Afterward you have 0 lives lesson to learn from. After gameover reset initiates with new found knowledge.
import './App.css';
import React, {useState} from 'react';
// import JpgImage from './assets/picassoPainting.jpg';

// const policyMessage= ["firstName", "lastName", "address", "notes", "policies"]
// const paintedHouses=[
//   {id: 1, lat:35.2271, lng: -80.8431, address: "1234 Main St, Charlotte, NC", phoneNum: "704-555-5555", notes: "Painted the house with a blue color", policyMessage: "Painted the house with a blue color"},
//   {id: 2, lat:35.2271, lng: -80.8431, address: "4493 Elmo Ave, Concord, NC", phoneNum: "704-555-5555", notes: "Painted the house with a blue color", policyMessage: "Painted the house with a blue color"},
// ]
let paintType = "Super Paint Flat Finish"; 
let paintPolicy = "Scope of work: paint walls two quotes and baseboards on three rooms including masters, the right paint and amount of paint will be used to complete the job must be allocated prior to painting. Time frame: 2 days to complete the job. Payment: 30% upfront and remaining upon completion of the job. Warranty: 3 months warranty on the paint job. ";
const paintedHouses=[
  {id: 1, firstName: "Sean", lastName: "Jones", address: "1234 Main St, Charlotte, NC", phoneNum: "704-555-5555", notes: "Painted the house with a blue color", policyMessage: `Painted the house with a blue color with paint type: ${paintType} and ${paintPolicy}`},
  {id: 2, firstName: "Sonny", lastName: "Smith", address: "4493 Elmo Ave, Concord, NC", phoneNum: "704-555-5555", notes: "Painted the house with a tan color", policyMessage: `Painted the house with a grey color with paint type: ${paintType} and ${paintPolicy}`},
]
 export default function App() {
  return (
    <div className="AppHeader">
      <header className="App-header"> <h1>Hello Painters lets use...</h1>
      <CreateProfile data={paintedHouses} />
      {/* <Parrot icon="icon" namePath="../public/img/picassoPainting.jpg.jpg"/> */}
      {/* <Parrot icon="icon" namePath="./components/picassoPainting.jpg"/> */}
      {/* <img src='/Images/redGreenWingedMacaw.jpg' alt='parrot' /> */}
      {/* <img src={`${process.env.PUBLIC_URL}/redGreenWingedMacaw.png`} alt='parrot' /> */}



      </header>
    </div>
  );
}


function CreateProfile({data}) {
  return (
    <div className="container">
      {data.map((profile, i)=><ProfileItems 
      firstName={profile.firstName} lastName={profile.lastName} address={profile.address} phoneNum={profile.phoneNum} policyMessage={profile.policyMessage} notes={profile.notes}/>)}

    </div>
  );
}

function ProfileItems({firstName, lastName, address, phoneNum, notes, policyMessage}) {
  const imageStyle= {
    backgroundColor: 'lightgrey',
    position: 'relative',
    padding: '10px',
    width: '510px',
    height: '200px',
  };
  return (
    <div className="main">
      <h2 className="">{paintType}</h2>
      {/* <img src={`${process.env.PUBLIC_URL}/Images/redGreenWingedMacaw.png`} alt='parrot' style={{width: '200px', height: '200px'}}/>  */}
      {/* <img src='/Images/picassoPainting.png' alt='picasso' /> */}
      <div style={imageStyle}>
      <img src={`${process.env.PUBLIC_URL}/Images/greyFlying.png`} alt='bucket' style={{width: '200', height: '200px'}}/>
      <img src={'/Images/picassoPainting.jpg'} alt='picasso' style={{width: '200px', height: '200px'}}/>

      </div>

      <p className="">First Name: {firstName} </p>
      <p className="">Last Name: {lastName}</p>
      <p className="">Address: {address}</p>
      <p className="">phone num: {phoneNum} </p>
      <p className="canvas">Policies: {policyMessage} </p>
      <button className="button"><strong> continue </strong></button>
      {/* <p className="canvas">Notes: {notes} </p> */}
      {/* <img src='/Images/redGreenWingedMacaw.jpg' /> */}
      {/* <button className="button">Continue</button> */}

    </div>
  );
}



// function Parrot() {
//   // const img = {namePath};
//   const [fly, setFly] = useState(false);
//   return (
//       <div className='parrot-container' >
//         <div className='parrot'>
//         <div className='parrot' onClick={handleFly} >🦜
//           <img src={namePath} alt="parrot" />
//         </div>
//         </div>
//         {/* <div className='parrot'>{`(o'>`}🦜</div>
//         <div className='parrot'>`//\`🦜</div>
//         <div className='parrot'>{`V_/_`}🦜</div> */}

//         {/* <img src={namePath} alt="parrot" /> */}
//         </div>
// )
// function handleFly() {
//   setFly((fly)=>!fly);
// }
// }

































