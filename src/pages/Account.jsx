import React from 'react';
import { UserAuth } from '../context/AuthContext';

const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex justify-end border'>
       <div>
        <p className='flex justify-end'>Welcome, {user?.displayName}</p>
      </div>
      
    </div>
  );
};

export default Account;