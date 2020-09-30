import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import DefaultPage from '../../components/DefaultPage';
import PageHeader from '../../components/PageHeader';
import Loader from '../../components/Loader';
import ArrowBack from '../../assets/images/icons/ArrowBack';
import FollowersRepo from '../../repositories/followers';
import FollowingRepo from '../../repositories/following';
import RelationCard from './components/RelationCard';
import './styles.css';

const Relations = () => {
  const history = useHistory();
  const backPage = () => {
    history.push('/');
  };

  const [pageType, setPageType] = useState();
  const [loading, setLoading] = useState(true);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

  const load = () => (
    <div className="loader-wrapper">
      <Loader />
    </div>
  );

  const renderData = () => {
    const data = pageType === '/following' ? following : followers;

    return (
      <div className="relations-wrapper">
        {data.map((item) => <RelationCard relation={item} />) }
      </div>
    );
  };

  const definePageType = (type) => {
    setPageType(type);
  };

  const loadData = async () => {
    setLoading(true);

    if (pageType === '/following') {
      await FollowingRepo.getByIdProfile(1).then((data) => {
        setFollowing(data);
      });
    } else if (pageType === '/followers') {
      await FollowersRepo.getByIdProfile(1).then((data) => {
        setFollowers(data);
      });
    }

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    definePageType(window.location.pathname);
  }, []);

  useEffect(() => {
    loadData();
  }, [pageType]);

  return (
    <DefaultPage id="relations">
      <PageHeader
        image={(
          <div className="arrow-back-wrapper">
            <ArrowBack className="arrow-back" onClick={backPage} />
          </div>
            )}
        headerItems={(
          <>
            <strong className="profile-name">Xostake</strong>
            <p className="profile-account">@msk_szostak</p>
          </>
            )}
      />
      <div className="relation-tabs">
        <Link to="/followers" onClick={() => { definePageType('/followers'); }} className={pageType === '/followers' ? 'relation-tabs-box' : 'relation-tabs-box-inactive'}><p>Followers</p></Link>
        <Link to="/following" onClick={() => { definePageType('/following'); }} className={pageType === '/following' ? 'relation-tabs-box' : 'relation-tabs-box-inactive'}><p>Following</p></Link>
      </div>

      {loading ? load() : renderData()}
    </DefaultPage>
  );
};

export default Relations;
