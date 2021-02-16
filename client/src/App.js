import { Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseURL, config } from "./services";
import axios from "axios";
import "./App.css";
import Comments from "./components/Comments";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Nav from "./components/Nav";

function App() {
  const [comments, setComments] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      const resp = await axios.get(baseURL, config);
      setComments(resp.data.records);
    };
    getComments();
  }, [toggleFetch]);

  return (
    <div className="App">
      <div className="content">
        <Nav />
        <img
          className="definition"
          src="https://imgur.com/XTC1a81.png"
          alt="definition of a sandwich"
        />
        <h2>VOTE button will go here</h2>
        <Route exact path="/">
          <div>
            <Form comments={comments} setToggleFetch={setToggleFetch} />
            {comments.map((comment) => (
              <Comments key={comment.id} comment={comment} />
            ))}
          </div>
        </Route>
        <Route path="/results">
          <h3>Is It A Sandwich? will go here</h3>
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
