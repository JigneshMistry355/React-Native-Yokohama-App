import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Logout: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const handleLogout = () => {
      navigation.navigate('Login' as never);
      // Optionally, you may want to clear any user authentication state or perform other logout-related tasks here.
    };

    handleLogout();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  // Return null as there's no UI element to render
  return null;
};

export default Logout;

