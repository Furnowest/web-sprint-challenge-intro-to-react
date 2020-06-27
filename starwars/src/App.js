import React, {useState, useEffect} from 'react'
import Character from "./components/Character"
import axios from "axios";
import './App.css';
import {  CardFooter, Card} from 'reactstrap';
const App = () => {

  const [character, setCharacter] = useState([]);

useEffect(() => {
  axios
    .get("https://swapi.py4e.com/api/people/")
    .then(response => {
      console.log(response.data.results[0])
      setCharacter(response.data.results)
    })
    .catch(err => {
      console.log('err')
    })
}, []);


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    
    <div className="App">
     <h1>Starwars Characters</h1>
      {character.map(element=> {
        return(
          <Character
            name ={element.name}
            gender ={element.gender}
            height = {element.height}
            haircolor ={element.hair_color}
            skincolor ={element.skin_color}
            mass ={element.mass}
          />
        )
      })}
      <Card>
       <CardFooter>Copy Right Furno West</CardFooter>
       </Card>
    </div>
    
  );
}

export default App;
