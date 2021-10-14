import React, { useState, useEffect } from "react";
import SubChapter from "./Components/SubChapter";
import ChapterOneP from "./Components/ChapterOneP";
import ChapterTwo from "./Components/ChapterTwo";
import ChapterThree from "./Components/ChapterThree";
import ChapterZero from "./Components/ChapterZero";
import ChapterFour from "./Components/ChapterFour";
import NavBar from "./Components/NavBar";
import NewChapter from "./Pages/NewChapter";
import ChapterFive from "./Pages/ChapterFive";
import ErrorPage from "./Components/ErrorPage";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  

  const [chapters, setChapters] = useState([])
  const [Chapter1, setChapter1] = useState(false);
  const [Chapter2, setChapter2] = useState(false);
  const [Chapter3, setChapter3] = useState(false);
  const [Chapter4, setChapter4] = useState(false);
  const [Chapter5, setChapter5] = useState(false);

  
  const chapter1Options = [
    {
      key: "1.1",
      path: "Chapter1_1",
      name: "1.1 yes",
    },
  ];

  
  const chapter2Options = [
    {
      key: "2.1",
      path: "Chapter2_1",
      name: "2.1 Principles of Quantum Mechanics",
    },
    {
      key: "2.2",
      path: "Chapter2_2",
      name: "2.2 Schrodinger's equation",
    },
  ];

  
  const chapter3Options = [
    {
      key: "3.1",
      path: "Chapter3_1",
      name: "3.1 Energy Bands",
    },
  ];

  
  const chapter4Options = [
    {
      key: "4.1",
      path: "Chapter4_1",
      name: "4.1 Charge Carriers in Semiconductors",
    },
  ];
  
  const subChapters = [
    {
      key: "1.1",
      path: "Chapter1_1",
      name: "1.1 yes",
    },
    {
      key: "2.1",
      path: "Chapter2_1",
      name: "2.1 Principles of Quantum Mechanics",
    },
    {
      key: "2.2",
      path: "Chapter2_2",
      name: "2.2 Schrodinger's equation",
    },
    {
      key: "3.1",
      path: "Chapter3_1",
      name: "3.1 Energy Bands",
    },
    {
      key: "4.1",
      path: "Chapter4_1",
      name: "4.1 Charge Carriers in Semiconductors",
    }
  ]

  function close() {
    setChapter1(false);
    setChapter2(false);
    setChapter3(false);
    setChapter4(false);
    setChapter5(false);
  }

  useEffect(() => {
    
    const toggles = [Chapter1, Chapter2, Chapter3, Chapter4, Chapter5];
    const sets = [setChapter1, setChapter2, setChapter3, setChapter4, setChapter5];
    const desiredUrl = "https://semiconductor-physics-backend.herokuapp.com/api/v1/chapters/";
    const fetchOptions = {
      method: "GET",
      mode:"cors",
      cache: "default",
      referrerPolicy: "no-referrer"
    };

      async function getData(){
        try{
          const response = await fetch(desiredUrl, fetchOptions)
          const data = await response.json()
          const iterate = data.chapters
          for(let i = 0; i < iterate.length; i++) {
            iterate[i].toggle = toggles[i];
            iterate[i].set = sets[i];
          }
          setChapters(iterate);
        } catch(error){
          console.log("oops")
          console.error(`Error: ${error}`);
        }
      }
      getData();
  },[]);

  return (
    <Router>
      <div className="main" onClick={() => close()}>
        <NavBar chapters={chapters} close={close} />
        <Switch>
          <Route path="/Chapter1">
            <ChapterOneP />
          </Route>
          <Route path="/Chapter2">
            <ChapterTwo />
          </Route>
          <Route path="/Chapter3">
            <ChapterThree />
          </Route>
          <Route path="/Chapter4">
            <ChapterFour />
          </Route>
          <Route path="/NewChapter">
            <NewChapter/>
          </Route>
          <Route path="/ChapterFive">
            <ChapterFive/>
          </Route>
          <Route
            exact
            path="/:subChapter"
            render={({ match }) => {
              const subChapter = match.params.subChapter;
              const foundSubChapter = subChapters.find(
                (sub) => sub.path === subChapter
              );
              if (foundSubChapter !== undefined) {
                return (
                  <SubChapter
                    key={foundSubChapter.key}
                    title={foundSubChapter.name}
                  />
                );
              } else {
                return <ErrorPage />;
              }
            }}
          />
          <Route path="/">
            <ChapterZero />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
