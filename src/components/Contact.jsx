import React, { useEffect,useState } from 'react'
import '../Styles/Contact.css'
// import {useNavigate,Routes, Route,} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Tables from './Tables';


const columns =  [
        
          {
            Header: "First Name",
            accessor: "firstName",
          },
          {
            Header: "Last Name",
            accessor: "lastName",
          },
          {
            Header: "Phone_No",
            accessor: "phone",
          },
          {
            Header: "Status",
            accessor: "status",
          },
         
      ]
    



 

const Contact = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const handleButtonClick = () => {
      // Replace '/destination' with the path you want to redirect to
      navigate('/Create');
    };
    const getContact = async () => {
        try{
       const response= await axios.get("https://contacts-app-api.vercel.app/Contacts");
         setData(response.data);
        }catch(error){
            console.log(error); 
        }
    }
    
    useEffect(()=>{
        getContact();
    })



  return (
   <>
    <div className='contact'>
    <button className='btn' onClick={handleButtonClick}>
        Create Contact
    </button>
  <Tables cols={columns} tableData={data}/>
    </div>
   </>
  )
}

export default Contact