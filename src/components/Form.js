import React from 'react';
import { useForm } from 'react-hook-form';

const Form = props => {
    const { handleSubmit, register, errors } = useForm();
    const { onSubmit } = props;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                placeholder="Task name"
                name="name"
                ref={register({ required: true, min: 2, maxLength: 80 })}
            />
            <input
                type="text"
                placeholder="User"
                name="user"
                ref={register({ required: true, min: 2, maxLength: 100 })}
            />

            <input type="submit" />
        </form>
    );
};

export default Form;
