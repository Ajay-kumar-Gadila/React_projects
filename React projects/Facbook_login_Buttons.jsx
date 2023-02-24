import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

const FacebookButton = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  const handleFacebookLogin = (response) => {
    if (response.status === 'connected') {
      setLoggedIn(true);
      setUserData(response);
    } else {
      console.error(response);
    }
  };

  const handleFacebookLogout = () => {
    setLoggedIn(false);
    setUserData({});
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <p>Welcome {userData.name}!</p>
          <button onClick={handleFacebookLogout}>Log out</button>
        </div>
      ) : (
        <FacebookLogin
          appId={yourFacebookAppId}
          autoLoad={false}
          fields="name,email,picture"
          callback={handleFacebookLogin}
        />
      )}
    </div>
  );
};

export default FacebookButton;
