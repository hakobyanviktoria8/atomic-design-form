import { useState } from 'react';
import './App.css';
import Button from './components/atoms/Button/Button';
import Label from './components/molecules/Label/Label';

function App() {
  const [formData, setFormData] = useState({fullName: '', email: ''})
  const [errors, setErrors]  = useState({fullName: '', email: ''})
  const sendDataUrl = 'https://e890494c-90a1-400d-961d-c129ee65fc70.mock.pstmn.io/request'

  const handleChangeData = (e) => {
    const { name, value } = e.target
    setFormData({
        ...formData,
        [name]: value,
    })
  }

  const validate =(name)=>{
    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
    const fullNameValidation = /^[a-z]+[a-z\-]*$/i;
    // console.log("validate name", name, formData[name])

    if(name === "email" && !emailValidation.test(formData[name])){
      setErrors(err => {
         return {
            ...err,
            [name]: 'Email is invalid or not exist',
         }
      })
    }

    if(name === "fullName" && !fullNameValidation.test(formData[name])){
      setErrors(err => {
         return {
            ...err,
            [name]: 'Full name is in wrong format',
         }
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    Object.keys(formData).forEach(key => {
      if(!formData[key]){
        setErrors(err => {
          return {
              ...err,
              [key]: 'Field is required!',
          }
        })
      } else {
        setErrors(err => {
          return {
             ...err,
             [key]: validate(key),
          }
       })
      }

      if(formData[key] && !errors[key]){
        // console.log("formData",formData);
        // console.log("errors",errors)

         fetch(sendDataUrl, { method: 'POST', body: formData })
          .then(res => res.json())
          .then(json => 
            setErrors(err => {
              return {
                 ...err,
                 email: json.error.message,
              }
           })
          )
      }

    })
  }

  const handleReset = () => {
    setFormData({fullName: '', email: ''})
    setErrors({fullName: '', email: ''})
  }

  return (
    <div className="App">
      <form>        
        <Label 
          title="Full Name" 
          name="fullName" 
          value={formData.fullName} 
          handleChange={handleChangeData}
          error={errors.fullName}
        />
        <Label 
          title="Email" 
          name="email" 
          value={formData.email} 
          handleChange={handleChangeData}
          error={errors.email}
        />      
      </form>

      <div className='buttons'>
        <Button text="Reset" event={handleReset}/>
        <Button text="Submit" event={handleSubmit}/>
      </div>

    </div>
  );
}

export default App;
