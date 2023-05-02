import React from 'react';

const ErrorPage = () => {
    return (
        <div className=' py-44 bg-gradient-to-b from-green-500 to-green-400 text-white text-center'>
            <h1 className='text-9xl font-extrabold'>404</h1>
            <p className='text-4xl'>You might have entered a wrong <i>Route</i></p>
        </div>
    );
};

export default ErrorPage;