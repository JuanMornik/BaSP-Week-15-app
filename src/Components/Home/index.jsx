import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import { LOGOUT_SUCCESS } from '../../../redux/auth/constants';
// import { logout } from '../../../redux/auth/thunks';
import { Button } from '../Shared';
import styles from './home.module.css'

const Home = () => {
  // const dispatch = useDispatch();
  // const history = useHistory();

  // const onLogout = () => {
  //   dispatch(logout()).then((response) => {
  //     if (response.type === LOGOUT_SUCCESS) {
  //       history.push('/auth/login');
  //     }
  //   });
  // };

  console.log('holaaaa')

  return (
    <div className={styles.container}>
      {/* <Button onClick={onLogout} text="Logout" /> */}
      {/* <div className={styles.container}> */}
        <Button text="Logout" />
      {/* </div> */}
    </div>
  );
};

export default Home;