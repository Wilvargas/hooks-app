import { useEffect, useState } from "react";


export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username:'Yosef',
        email: 'yosef@gmail.com'
    }); 

    const { username, email } =  formState;
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        console.log({name, value});
        setformState({
            ...formState, 
            [ name ]: value
        });   
    }


    useEffect( () => {
        console.log('useEffect called');
        
    });


  return (
    <> 
        <h1>Simple Form</h1>
        <hr />
        <input 
           type="text" 
           className="form-control"
           placeholder="Username"
           name="username"
           value={ username }
           onChange={ onInputChange }
        />
        <input 
           type="email" 
           className="form-control mt-2"
           placeholder="yosef@gmail.com"
           name="email"
           value={ email }
           onChange={ onInputChange }
        />
    </>
  );
};
