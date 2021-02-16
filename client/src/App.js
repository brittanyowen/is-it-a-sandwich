import { Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseURL, baseURL2, config } from "./services";
import axios from "axios";
import "./App.css";
import Comments from "./components/Comments";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Nav from "./components/Nav";
import Results from "./components/Results";

function App() {
  const [comments, setComments] = useState([]);
  const [foods, setFoods] = useState([]); 
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      const resp = await axios.get(baseURL, config);
      setComments(resp.data.records);
    };

    const showResults = async () => {
      const resp2 = await axios.get(baseURL2, config); 
      setFoods(resp2.data.records)
    }
    getComments();
    showResults(); 
  }, [toggleFetch]);

  return (
    <div className="App">
      <div className="content">
        <Nav />
        <Route exact path="/">
          <div>
            <img
              className="definition"
              src="https://imgur.com/XTC1a81.png"
              alt="definition of a sandwich"
            />
            <h2>VOTE button will go here</h2>
            <Form comments={comments} setToggleFetch={setToggleFetch} />
            {comments.map((comment) => (
              <Comments key={comment.id} comment={comment} />
            ))}
          </div>
        </Route>
        <Route path="/results">
          {foods.map((food) => (
            <Results key={food.id} food={food}/>
          ))}
          {/* <Results foods={foods}/> */}
        </Route>
        <Route path="/vote">
          <h3>Voting goes here</h3>
        </Route>
      </div>
      <Footer />
    </div>
  );
}

export default App;
