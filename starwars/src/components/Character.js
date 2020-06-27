// Write your Character component here
import React from "react";
import { Card,  CardHeader, CardBody, CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Character = ({name, gender,height,haircolor,skincolor,mass}) => {
//    return(
//        <div className="charList">
//            <h2>Character Name: {name}</h2>
//            <h3>Gender: {gender}</h3>
//            <h3>Height: {height} </h3>
//            <h3>Hair Color: {haircolor}</h3>
//            <h3>Skin Color: {skincolor}</h3>
//            <h3>Mass: {mass}</h3>
//        </div>
//    ) 
   return (
    <div className="cardContainer">
      <Card>
      <CardHeader> <h2>Name: {name}</h2></CardHeader>
        <CardBody>
          <h4> Gender: {gender}</h4>
          <h4>Height: {height}</h4>
          <h4>Hair Color: {haircolor}</h4>
          <h4>Skin Color: {skincolor}</h4>
          <h4>Mass: {mass}</h4>
          </CardBody>
      </Card>
      
    </div>
  );
}


export  default Character;