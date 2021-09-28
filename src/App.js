import React, { useState, useEffect } from "react";
import SubChapter from "./Components/SubChapter";
import ChapterTwo from "./Components/ChapterTwo";
import ChapterThree from "./Components/ChapterThree";
import ChapterZero from "./Components/ChapterZero";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [loadedData, setLoadedData] = useState([]);
  const [siteLoading, setSiteLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setSiteLoading(true);
      const response = await fetch("http://Brocktho.github.io/SemiconductorPhysicsSite/API/ChapterData");

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

  const chapters = [
    {
      name: "Chapter1",
      toggle: Chapter1,
      set: setChapter1,
      options: loadedData,
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
  ];

  function close() {
    return setChapter1(false), setChapter2(false), setChapter3(false);
  }

  return (
    <Router>
      <div
        className="h-screen w-full flex flex-col items-center space-y-16 bg-blue-500 dark:bg-blue-900"
        onClick={() => close()}
      >
        <NavBar chapters={chapters} />
        <Switch>
          <Route path="/SemiconductorPhysicsSite/:subChapter" render={({match}) => {
            const subChapter = match.params.subChapter
            const foundSubChapter = loadedData.find(sub => sub.path === subChapter)
            return <SubChapter data={foundSubChapter}/>
          }}/>
          <Route path="/SemiconductorPhysicsSite/Chapter1">
            <div></div>
          </Route>
          <Route path="/SemiconductorPhysicsSite/Chapter2">
            <ChapterTwo />
          </Route>
          <Route path="/SemiconductorPhysicsSite/Chapter3">
            <ChapterThree />
          </Route>
          <Route path="/SemiconductorPhysicsSite/">
            <ChapterZero />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
