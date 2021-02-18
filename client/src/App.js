import { Link, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseURL, baseURL2, config } from "./services";
import axios from "axios";
import "./App.css";
import Comments from "./components/Comments";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Nav from "./components/Nav";
import Results from "./components/Results";
import Vote from "./components/Vote";

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
      setFoods(resp2.data.records);
    };
    getComments();
    showResults();
  }, [toggleFetch]);

  return (
    <div className="App">
      <div>
        <Nav foods={foods} />
        <Route exact path="/">
          <div className="content">
            <img
              className="definition"
              src="https://imgur.com/XTC1a81.png"
              alt="definition of a sandwich"
            />
            <h2>VOTE button will go here</h2>
            <div className="comment-section">
              <h4>Join the conversation!</h4>
              <Form comments={comments} setToggleFetch={setToggleFetch} />
              {comments.map((comment) => (
                <Comments key={comment.id} comment={comment} />
              ))}
            </div>
          </div>
        </Route>
        <Route path="/results">
          <h3>THE PEOPLE HAVE SPOKEN!</h3>
          {foods.map((food) => (
            <Results key={food.id} food={food} />
          ))}
        </Route>
        <Route path={`/vote/:id`}>
          {/* <Link to={`/vote/${foods.id}`}>  */}
          <Vote foods={foods} setToggleFetch={setToggleFetch} />
          {/* </Link> */}
        </Route>
      </div>
      <Footer />
    </div>
  );
}

export default App;
