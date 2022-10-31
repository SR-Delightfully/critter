import React from 'react';
import { Button } from './Button';

export const Form = ({ requestType, setRequestType }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <Button 
                buttonText="users"
                requestType={requestType}
                setRequestType={setRequestType}
            />
            <Button 
                buttonText="posts"
                requestType={requestType}
                setRequestType={setRequestType}
            />
            <Button 
                buttonText="comments"
                requestType={requestType}
                setRequestType={setRequestType}
            />
        </form>
        )
}
