import React from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import ArrowBack from '../../assets/images/icons/ArrowBack';
import DefaultPage from '../../components/DefaultPage';
import './styles.css';

const Followers = () => {
  const history = useHistory();

  function backPage() {
    history.push('/');
  }

  return (
    <DefaultPage id="followers">
      <PageHeader
        image={(<div className="arrow-back-wrapper"><ArrowBack className="arrow-back" onClick={backPage} /></div>)}
        headerItems={(
          <>
            <strong className="profile-name">Xostakker</strong>
            <p className="profile-account">Followers</p>
          </>
      )}
      />
    </DefaultPage>
  );
};

export default Followers;
