import React, { Component } from 'react';
import cross from '../../images/cross.svg';
import circle from '../../images/circle.svg';
import './Cell.css';

function Cell(props) {

    function convertImage () {
        const keys = Object.keys(props.state);
        const values = Object.values(props.state);
        const searchedKey = keys.indexOf(props.ID);
        const searchedValue = values[searchedKey];
        if (searchedValue == 0) {
            return (<></>);
        } else if (searchedValue > 0) {
            if (searchedValue == 1) {
                return (
                    <>
                        <img src={cross} alt="sign"/>
                    </>
                );
            } else if (searchedValue == 2) {
                return (
                    <>
                        <img src={circle} alt="sign"/>
                    </>
                );
            }
        }
        
    }
    return (
        <>
            {convertImage()}
        </>
    );
  }

export default Cell;