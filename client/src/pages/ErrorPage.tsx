import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage: React.FC = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <h1>404 Page Error?  Well, gee!</h1>
            <p>Gosh, our aplogies, an unexpected error has ocurred!</p>
        </div>
    );
};

export default ErrorPage;