import React from "react";
import "./Score.css";

const Score = (props) => {
    //displays the score state in a table form 
    return (
        <table className="table table-sm table-borderless score-table">
            <div className="table-responsive">
                <table className="table align-middle">
                    <thead>
                        <tr className="score-table-line">
                            <td>Player (X)</td>
                            <td>Draw</td>
                            <td>Computer (O)</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="score-table-line">
                            <td>{props.score[0]}</td>
                            <td>{props.score[1]}</td>
                            <td>{props.score[2]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </table>
    );
};

export default Score;
