import React, { useState } from 'react'
import styles from '@/styles/Contact.module.css'


const contact = () => {

  const handlesubmit = (e)=>{
    e.preventDefault()            //this will not let the page reload 
    console.log(name,phone,email,desc)

    const data = {name, email, phone, desc};

    fetch('http://localhost:3000/api/postcontact/',{
      method:'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(data),
      })
      .then(response => response.text())
      .then(data => {
        console.log('Success: ',data);
        alert("Thanks for contacting us")
        setname('')
        setphone('')
        setemail('')
        setdesc('')
      })
      .catch((error)=>{
        console.error('Error',error);
      });
  }

  const handleChange = (e) =>{
    if(e.target.name == 'name'){
      setname(e.target.value)
    }
    else if(e.target.name == 'email'){
      setemail(e.target.value)
    }
    else if(e.target.name == 'phone'){
      setphone(e.target.value)
    }
    else if(e.target.name == 'desc'){
      setdesc(e.target.value)
    }
  }

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [desc, setdesc] = useState('');

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handlesubmit}>
      <div className={styles.mb3}>
        <label htmlFor="name" className={styles.formlabel}>Enter your name</label>
        <input type="text" className="form-control" id="name" value = {name} onChange={handleChange} name='name' aria-describedby="emailHelp" />
      </div>
      <div className={styles.mb3}>
        <label htmlFor="email" className={styles.formlabel}>Email Address</label>
        <input type="email" className="form-control" value = {email} onChange={handleChange} name='email' id="email" />
      </div>
      <div className={styles.mb3}>
        <label htmlFor="phone">Mobile Number</label>
        <input type="phone" className={styles.formlabel} id="phone" value = {phone} onChange={handleChange} name = "phone"  />
      </div>
      <div className={styles.mb3}>
        <label htmlFor="textarea">Comments</label>
        <textarea value = {desc} className="form-control" id="desc" name = 'desc' onChange={handleChange} rows="3" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
  )
}

export default contact
