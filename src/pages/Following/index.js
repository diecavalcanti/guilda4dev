import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import ArrowBack from '../../assets/images/icons/ArrowBack';
import DefaultPage from '../../components/DefaultPage';
import './styles.css';

const Following = () => {
  const history = useHistory();

  function backPage() {
    history.push('/');
  }

  const [following, setFollowing] = useState([{
    id: 1,
    idProfile: 1,
    name: 'Chevette',
    account: '@chevette',
    bio: 'tectectectec',
  }]);

  return (
    <DefaultPage id="following">
      <PageHeader
        image={(<div className="arrow-back-wrapper"><ArrowBack className="arrow-back" onClick={backPage} /></div>)}
        headerItems={(
          <>
            <strong className="profile-name">Xostakker</strong>
            <p className="profile-account">Following</p>
          </>
        )}
      />
      <div>
        {following.map((follow) => (
          <p>{follow.name}</p>
        ))}
      </div>
      <button onClick={() => {
        setFollowing([...following,
          {
            id: 1,
            idProfile: 1,
            name: 'Chevette',
            account: '@chevette',
            bio: 'tectectectec',
          },
          {
            id: 2,
            idProfile: 1,
            name: 'Pabllo Vittar',
            account: '@pabllo',
            bio: 'Eu mesma',
          },
        ]);
      }}
      >
        OK
      </button>
    </DefaultPage>
  );
};

export default Following;
