import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                placeholder="Task name"
                name="Task name"
                ref={register({ required: true, min: 2, maxLength: 80 })}
            />
            <input
                type="text"
                placeholder="Description"
                name="Description"
                ref={register({ required: true, min: 3, maxLength: 100 })}
            />
            <input
                type="text"
                placeholder="User"
                name="User"
                ref={register({ required: true, min: 2, maxLength: 100 })}
            />

            <input type="submit" />
        </form>
    );
};

export default Form;
