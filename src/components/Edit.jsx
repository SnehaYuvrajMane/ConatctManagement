import React from 'react'
import '../Styles/Create.css'

const Edit = () => {
  return (
    <>
         <div className='form-style'>
        <form>
            <h1>EDIT CONTACT</h1>
           {/* create fields with lables the fields are firstname,lastname,phone and active or inactive selector */}
            <label>First Name</label>
            <input type='text' placeholder='First Name'/>
            <label>Last Name</label>
            <input type='text' placeholder='Last Name'/>
            <label>Phone</label>
            <input type='text' placeholder='Phone'/>
            <label>Status</label>
            <select>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
            </select>
            <button className='btn'>Submit</button>
            
        </form>
    </div>
    </>
  )
}

export default Edit