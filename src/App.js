import React, { useState, useEffect } from "react";
import SubChapter from "./Components/SubChapter";
import ChapterOneP from "./Components/ChapterOneP";
import ChapterTwo from "./Components/ChapterTwo";
import ChapterThree from "./Components/ChapterThree";
import ChapterZero from "./Components/ChapterZero";
import ChapterFour from "./Components/ChapterFour";
import NavBar from "./Components/NavBar";
import ErrorPage from "./Components/ErrorPage";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [loadedData, setLoadedData] = useState([]);
  const [siteLoading, setSiteLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setSiteLoading(true);
      const response = await fetch(
        "https://semiconductor-physics-backend.herokuapp.com/API/ChapterData"
      );

      const responseData = await response.json();
      setLoadedData(responseData.subChapters);
      setSiteLoading(false);
    };

    fetchData();
  }, []);

  const [Chapter1, setChapter1] = useState(false);

  const [Chapter2, setChapter2] = useState(false);
  const chapter2Options = [
    {
      key: "2.1",
      path: "Chapter2_1",
      name: "2.1 Principles of Quantum Mechanics",
    },
    { key: "2.2", path: "Chapter2_2", name: "2.2 Schrodinger's equation" },
  ];

  const [Chapter3, setChapter3] = useState(false);
  const chapter3Options = [
    { key: "3.1", path: "Chapter3_1", name: "3.1 Energy Bands" },
  ];

  const [Chapter4, setChapter4] = useState(false);
  const chapter4Options = [
    {key:"4.1", path:"Chapter4_1", name: "4.1 Charge Carriers in Semiconductors"}
  ]

  const chapters = [
    {
      name: "Chapter1",
      toggle: Chapter1,
      set: setChapter1,
      options: loadedData
    },
    {
      name: "Chapter2",
      toggle: Chapter2,
      set: setChapter2,
      options: chapter2Options,
    },
    {
      name: "Chapter3",
      toggle: Chapter3,
      set: setChapter3,
      options: chapter3Options,
    },
    {
      name: "Chapter4",
      toggle: Chapter4,
      set: setChapter4,
      options: chapter4Options
    }
  ];

  function close() {
    return setChapter1(false), setChapter2(false), setChapter3(false);
  }

  return (
    <Router>
      {siteLoading && 
      <Switch>
        <Route path="/">
          <div className="main">
            <h1 className="text-4xl dark:text-white">
              PLEASE WAIT, SITE LOADING!
            </h1>
          </div>
        </Route>
      </Switch>
      }
      {!siteLoading && (
        <div
          className="main"
          onClick={() => close()}
        >
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
              <ChapterFour/>
            </Route>
            <Route
              exact
              path="/:subChapter"
              render={({ match }) => {
                const subChapter = match.params.subChapter;
                const foundSubChapter = loadedData.find(
                  (sub) => sub.path === subChapter
                );
                if (foundSubChapter !== undefined) {
                  return (
                    <SubChapter
                      key={foundSubChapter.key}
                      data={foundSubChapter}
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
      )}
    </Router>
  );
}

export default App;
