const SquadHead = ({ activeTab, updateActiveTab }) => {
  return (
    <div>
      <ul className="navbar-nav navbar-nav d-flex flex-row justify-content-around">
        <li className="nav-item" onClick={() => updateActiveTab('Batsman')}>
          <div
            className={`nav-link ${
              activeTab === 'Batsman' && 'bg-info active'
            }`}
          >
            Batsman
          </div>
        </li>
        <li
          className="nav-item"
          onClick={() => updateActiveTab('Wicket-Keeper')}
        >
          <div
            className={`nav-link ${
              activeTab === 'Wicket-Keeper' && 'bg-info active'
            }`}
          >
            WK
          </div>
        </li>
        <li className="nav-item" onClick={() => updateActiveTab('All-Rounder')}>
          <div
            className={`nav-link ${
              activeTab === 'All-Rounder' && 'bg-info active'
            }`}
          >
            All-rounder
          </div>
        </li>
        <li className="nav-item" onClick={() => updateActiveTab('Bowler')}>
          <div
            className={`nav-link ${activeTab === 'Bowler' && 'bg-info active'}`}
          >
            Bowler
          </div>
        </li>
      </ul>
    </div>
  )
}

export default SquadHead
