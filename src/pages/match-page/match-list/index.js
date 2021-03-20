import React from "react";
import { Link } from "react-router-dom";

const MatchList = ({ match }) => {
  return (
    <tbody>
      <tr>
        <td>
          <Link to={`/squad/${match.id}`}>
            <div className="cell align-self-center two-leagues">
              <img src={match.t1_image} alt={match.t1_name} />
              {match.match_name}
              <img src={match.t2_image} alt={match.t2_name} />
            </div>
          </Link>
        </td>
        <td>
          <div className="cell align-self-center">{match.match_date}</div>
        </td>
      </tr>
    </tbody>
  );
};

export default MatchList;
