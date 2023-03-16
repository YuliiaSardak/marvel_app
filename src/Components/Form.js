import React,  { useState }  from 'react'

export default function Form() {

const [userInput, setUserInput] = useState({
    inputName:'',
    inputEmail:''
  });
  
const nameInputHandler = (event) => {
    setUserInput((prevState)=>{
      return {
        ...prevState,
        inputName: event.target.value
      }
    })
    console.log(userInput)
};
const emailInputHandler = (event) => {
  setUserInput((prevState)=>{
    return {
      ...prevState,
      inputEmail: event.target.value
    }
  })
  console.log(userInput)
};

const submitFormHandler = (event)=>{
  event.preventDefault();
  alert(JSON.stringify(userInput));
}
  return (
    <>
    <section className='form__block'>
        <h2 className='form__block-title'>Subscribe</h2>
            <div className='form__block-main'>
                <form onSubmit={submitFormHandler} className='form__block-main-form' action='' method='' name='' >
                    <p className='label'>Enter your name:</p>
                    <input onChange={nameInputHandler} className='form__block-main-form-email' type="name" required ></input>
                    <p className='label'>Enter your email:</p>
                    <input onChange={emailInputHandler} className='form__block-main-form-email' type="email" required ></input>
                    <button className='form__block-main-form-button btn' type="Submit">SEND</button>  
                </form>
            </div>
    </section>
    </>
  )
}
