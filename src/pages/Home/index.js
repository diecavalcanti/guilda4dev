import React from 'react';
import imageProfile from '../../assets/images/xostake_profile.png';
import profileBanner from '../../assets/images/profile_banner.png';
import imageLogo from '../../assets/images/xostakker_bird.png';
import tweetsData from '../../data/tweets.json';
import './styles.css';

const Home = () => {
    return (
        <div id="home">
            <div className="home-wrapper">
                <div className="header-home">
                    <img src={imageLogo} alt="" />
                    <div className="header-text">
                        <strong>Marcelo Sxasotiooak</strong>
                        <p>6 Tweets</p>
                    </div>
                </div>
                <div className="profile">
                    <div className="profile-images">
                        <div className="profile-banner">
                            <img src={profileBanner} alt="" />
                        </div>
                        <div className="profile-photo">
                            <img src={imageProfile} alt="" />
                        </div>
                    </div>

                    <div className="profile-info">

                        <div className="profile-info-data">
                            <strong>Marcelo Szostak</strong>
                            <p className="profile-info-id">@msk_szostak</p>
                            <div className="profile-bio">
                                <p>Professor e Consultor para Desenvolvimento de Sistemas</p>
                            </div>
                        </div>

                        <div className="profile-details">
                            <div className="profile-details-info">
                                <span className="profile-details-info-location">
                                    <svg viewBox="0 0 24 24">
                                        <g>
                                            <path d="M12 14.315c-2.088 0-3.787-1.698-3.787-3.786S9.913 6.74 12 6.74s3.787 1.7 3.787 3.787-1.7 3.785-3.787 3.785zm0-6.073c-1.26 0-2.287 1.026-2.287 2.287S10.74 12.814 12 12.814s2.287-1.025 2.287-2.286S13.26 8.24 12 8.24z"></path>
                                            <path d="M20.692 10.69C20.692 5.9 16.792 2 12 2s-8.692 3.9-8.692 8.69c0 1.902.603 3.708 1.743 5.223l.003-.002.007.015c1.628 2.07 6.278 5.757 6.475 5.912.138.11.302.163.465.163.163 0 .327-.053.465-.162.197-.155 4.847-3.84 6.475-5.912l.007-.014.002.002c1.14-1.516 1.742-3.32 1.742-5.223zM12 20.29c-1.224-.99-4.52-3.715-5.756-5.285-.94-1.25-1.436-2.742-1.436-4.312C4.808 6.727 8.035 3.5 12 3.5s7.192 3.226 7.192 7.19c0 1.57-.497 3.062-1.436 4.313-1.236 1.57-4.532 4.294-5.756 5.285z"></path>
                                        </g>
                                    </svg>

                                    <p>São José dos Pinhais - Paraná</p>

                                    <svg viewBox="0 0 24 24" >
                                        <g>
                                            <path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path>
                                            <circle cx="7.032" cy="8.75" r="1.285"></circle>
                                            <circle cx="7.032" cy="13.156" r="1.285"></circle>
                                            <circle cx="16.968" cy="8.75" r="1.285"></circle>
                                            <circle cx="16.968" cy="13.156" r="1.285"></circle>
                                            <circle cx="12" cy="8.75" r="1.285"></circle>
                                            <circle cx="12" cy="13.156" r="1.285"></circle>
                                            <circle cx="7.032" cy="17.486" r="1.285"></circle>
                                            <circle cx="12" cy="17.486" r="1.285"></circle>
                                        </g>
                                    </svg>

                                    <p>Joined April 2011</p>
                                </span>

                                <span className="profile-details-info-connections">

                                    <a to="/following">
                                        <p><strong>58</strong> Following</p>
                                    </a>

                                    <a to="/followers">
                                        <p><strong>65</strong> Followers</p>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="tweets">
                        {tweetsData.tweets.map((t, i) => {
                            return <p key={i}>{t.tweet}</p>
                        })}
                    </div>
                </div>
                <div className="tweets"></div>
            </div>
        </div>
    );
}

export default Home;
