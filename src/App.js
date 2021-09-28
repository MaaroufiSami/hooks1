import './App.css';
import { NavBar } from './component/NavBar';
import { ListFilm } from './component/ListFilm';
import {useState} from 'react'
import { AddFilm } from './component/AddFilm';
import {Route} from "react-router-dom";
import { DescreptionPage } from './component/DescreptionPage';
import { WordJs } from './component/WordJs';

 

function App() {

  const [film,setFilm]=useState(
    [ {
    img: "https://i.stack.imgur.com/NPcbv.jpg",
    name: "The Green Mile",
    year: "1999",
    star: 5,
    duration: "189 minutes",
    discription: "The Green Mile is a 1999 American fantasy crime drama film written and directed by Frank Darabont and adapted from Stephen King’s 1996 novel of the same name.",
    id:1

},
{
    img: "https://static.mmzstatic.com/wp-content/uploads/2016/02/room-film-critique.jpg",
    name: "Your Name",
    year: "2016",
    star: 4,
    duration: "107 minutes",
    discription: "Your Name (Kimi no na wa)Is a Japanese animated film directed by Makoto Shinkai, released on August 26 , 2016 in Japan. It is adapted from Makoto Shinkai's novel, published on June 18, 2016 in Japan by Kadokawa.",
    id:2

},
{
    img: "https://images-na.ssl-images-amazon.com/images/I/914I-VXn3cL._RI_.jpg",
    name: "I Origin",
    year: "2014",
    star: 2,
    duration: "106 minutes",
    discription: "I Origins is an independent drama sci-fi , written, produced and directed by Mike Cahill, released in 2014.",
    id:3

},
{
    img: "http://fr.web.img2.acsta.net/c_215_290/medias/nmedia/18/65/29/04/18939066.jpg",
    name: "Wanted",
    year: "2008",
    star: 4,
    duration: "110 minutes",
    discription: "Wanted is a German-American film directed by Timur Bekmambetov, released in 2008. It is the adaptation of the Wanted comicsseries written by Mark Millarand drawn by JG Jones ",
    id:4

},
{
    img: "https://images-na.ssl-images-amazon.com/images/I/51TfUWh5N9L._SY445_.jpg",
    name: "Inception",
    year: "2010",
    star: 5,
    duration: "148 minutes",
    discription: "Inception is a thriller of science fiction American-British written, directed and produced by Christopher Nolan, released in 2010.",
    id:5

},
{
    img: "data:image/jpeg;base64,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",
    name: "Captain marvel",
    year: "2019",
    star: 5,
    duration: "148 minutes",
    discription: "captai marvel is a thriller of science fiction American-British written, directed and produced by Christopher Nolan, released in 2010.",
    id:10
}

])
const [searchInput, setSearchInput] = useState("")
const [searchRate, setSearchRate] = useState(0)


const add =(newfilm) => {
  setFilm([...film,newfilm])
}




  return (
    <div className="App">
      <NavBar setSearchInput={setSearchInput} setSearchRate={setSearchRate} searchRate={searchRate} /> 
      
        <Route  path="/home" render={()=><p>home page</p>} />

      <Route exact path="/" render={()=> <>
        <ListFilm  film={film.filter(el =>
        el.star >= searchRate &&
        el.name.toUpperCase().includes(searchInput.toUpperCase().trim()))}  />
      <AddFilm
      add={add}/>

      </>} />
      <Route
        path="/:id"
        render={(props) => <DescreptionPage  {...props} film={film} /> }
      />

    </div>
  );
}

export default App;
