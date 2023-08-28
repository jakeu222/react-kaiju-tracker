// // React
// import React, { useState } from 'react'
// // Components
// import EditKaijuForm from './EditKaijuForm'

// const KaijuCard = ({ kaiju, editKaiju, deleteKaiju }) => {

//   // Edit form open state
//   const [editOpen, setEditOpen] = useState(false)
//   const toggleEditOpen = () => setEditOpen(!editOpen)

//   const renderEdit = () => {
//     if (!editOpen) {
//       return <button className='kaiju-card-edit-button' onClick={toggleEditOpen}>Edit</button>
//     }

//     return (
//       <>
//         <EditKaijuForm {...{ kaiju, editKaiju, deleteKaiju }} />
//         <button className='kaiju-card-edit-button' onClick={toggleEditOpen}>Nevermind</button>
//       </>
//     )
//   }

//   return (
//     <div className='kaiju-card'>

//       <h2 className='kaiju-card-name'>{kaiju.name}</h2>
//       <h3 className='kaiju-card-power'>Power: {kaiju.power}</h3>

//       <img className='kaiju-card-image' src={kaiju.image} alt={kaiju.name} />

//       {renderEdit()}

//     </div>
//   )
// }

// export default KaijuCard

// React
import React from 'react'
// Components
import EditKaijuForm from './EditKaijuForm'

class KaijuCard extends React.Component {

  // How can we show the edit form conditionally?
  render() {
    return (
      <div className='kaiju-card'>

        <h2 className='kaiju-card-name'>{/* Kaiju name goes here */}</h2>
        <h3 className='kaiju-card-power'>Power: {/* Kaiju power goes here */}</h3>

        <img className='kaiju-card-image' src={null /* Kaiju image goes here */} alt={"Maybe something should go here"} />

        {/* What should this edit button do? */}
        <button className='kaiju-card-edit-button'>Edit</button>

      </div>
    )
  }
}

export default KaijuCard