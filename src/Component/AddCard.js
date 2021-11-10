import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { handeladd } from '../redux/action';

const AddCard = () => {
    const [newuni, setNewuni] = useState("")
    const [name, setName] = useState("")
    const [domains, setDomains] = useState("")
    const [country, setCountry] = useState("")
    const dispatch = useDispatch()
    //handelSubmit
    let handelSubmit=(e)=>{
        e.preventDefault()
        let newactionadd={
            name,domains,country
        }
        dispatch(handeladd(newactionadd))
        setNewuni("");
        setName("");
        setDomains("");
        setCountry("")
        closeModal()

    }
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }



  function closeModal() {
    setIsOpen(false);
  }
    return (
        <div>
            <button style={{backgroundColor:"#0C6EFD",color:"white", width: "200px",height: "60px", margin: "15px",borderRadius:"4px"}} onClick={openModal}>Add university</button>
      <Modal
        isOpen={modalIsOpen}
        
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <form className="form" onSubmit={handelSubmit} >
          <label style={{color:"white"}} >University Name</label>
          <input type="text" placeholder="write movie name" value={name} onChange={e=>setName(e.target.value)}/>
          <label style={{color:"white"}} >University Domains</label>
          <input type="text" placeholder="write university domains" value={domains} onChange={e=>setDomains(e.target.value)}/>
         
          <label style={{color:"white"}} >University Country</label>
          <input type="text" placeholder="write university Country" value={country} onChange={e=>setCountry(e.target.value)}/>
          <div>
          <button style={{backgroundColor:"rgb(15, 62, 119)",color:"white", width: "100px",height: "40px", margin: "15px",borderRadius:"4px"}}   type="submit">Save</button><button style={{backgroundColor:"rgb(15, 62, 119)",color:"white", width: "100px",height: "40px", margin: "15px",borderRadius:"4px"}} onClick={()=>closeModal()}>Cancel</button>
          </div>
      </form>
      </Modal>
        </div>
    )
}

export default AddCard
