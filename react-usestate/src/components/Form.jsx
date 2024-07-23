import React from 'react'
import {useForm} from "react-hook-form";

const Form = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    function onSubmit(data){
         console.log(data);
    }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
           <div>
            <label htmlFor="name">Name</label>
            <input id="name"
            {...register('name', {required: 'Name is required'})}
            />
           {errors.name && <p>{errors.name.message}</p>}
           </div>
           
           <div>
            <label htmlFor="email">email</label>
            <input type="email"
            {...register('email', {required: 'Email is required',
                pattern:{
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Invalid email address'
                      }
            })}
            />
            {errors.email && <p>{errors.email.message}</p>}
           </div>

           <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form
