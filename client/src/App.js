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
      <div className="content">
        <Nav foods={foods} />
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
          <h3>THE PEOPLE HAVE SPOKEN!</h3>
          {foods.map((food) => (
            <Results key={food.id} food={food} />
          ))}
        </Route>
        <Route path={`/vote/:id`}>
          {/* {foods.map((food) => (
          <Vote key={food.id} food={food} setToggleFetch={setToggleFetch}/>
          ))} */}
          {/* Take links below away, refreshes page when yes/no buttons are clicked */}
          {/* <Link to={`/vote/${foods.id}`}>  */}
          <Link to={`/vote/rec7IYq3xD6pnefVO`}>
            <Vote foods={foods} />
          </Link>
        </Route>
      </div>
      <Footer />
    </div>
  );
}

export default App;
