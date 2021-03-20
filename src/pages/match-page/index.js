import React from 'react'
import { Link } from 'react-router-dom'
import UpcomingMatch from './match'
import ProfileImg from '../../images/profile.png'
import BatImg from '../../images/bat.svg'
import HowToImg from '../../images/abt.svg'
import ContactImg from '../../images/cont.svg'
import './index.scss'

const MatchPage = (params) => (
  <>
    <div className="col-1 row justify-content-center">
      <div className="nav scroll-bar d-flex flex-column justify-content-evenly">
        <div className="nav-links-item">
          <Link to="#" className="d-flex flex-column">
            <img src={ProfileImg} alt="user" />
            <span className="item-name m-3">user</span>
          </Link>
        </div>
        <div className="menu-links-item">
          <Link to="/" className="d-flex flex-column">
            <img src={BatImg} alt="all league" />
            <span className="item-name m-3">all league</span>
          </Link>
        </div>
        <div className="menu-links-item">
          <Link to="#" className="d-flex flex-column">
            <img src={HowToImg} alt="how to play" />
            <span className="item-name m-3">How to play</span>
          </Link>
        </div>
        <div className="menu-links-item">
          <Link to="#" className="d-flex flex-column">
            <img src={ContactImg} alt="contact" />
            <span className="item-name m-3">Contact</span>
          </Link>
        </div>
      </div>
    </div>
    <UpcomingMatch />
  </>
)

export default MatchPage
