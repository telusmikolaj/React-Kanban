import React from 'react';

const Form = () => {
    const handleChange = e => {
        e.preventDefault();
    };
    return (
        <div>
            <h3>Add Task</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">
                        Task Name
                        <input id="name" type="text" name="name" onChange={handleChange} value={name} />
                    </label>
                </div>
                <div>
                    <label htmlFor="user">
                        User
                        <input id="user" type="text" name="user" onChange={handleChange} value={user} />
                    </label>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Form;
