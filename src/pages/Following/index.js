import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import ArrowBack from '../../assets/images/icons/ArrowBack';
import DefaultPage from '../../components/DefaultPage';
import followingRepositories from '../../repositories/following';
import Loader from '../../components/Loader';
import './styles.css';

const Following = () => {
  const history = useHistory();
  const [following, setFollowing] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ok, setOk] = useState();

  function backPage() {
    history.push('/');
  }

  function load() {
    return (
      <div className="loader-wrapper">
        <Loader />
      </div>
    );
  }

  function content() {
    return (
      <div>
        {following.map((follow) => (
          <p>{follow.name}</p>
        ))}
      </div>
    );
  }

  useEffect(() => {
    setLoading(true);

    followingRepositories.getByIdProfile(1).then((dados) => {
      setFollowing(dados);
    });

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [ok]);

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
      <button onClick={() => { setOk(!ok); }}>Ok</button>
      {loading ? load() : content() }
    </DefaultPage>
  );
};

export default Following;
