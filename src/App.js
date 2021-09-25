import React, { useState } from 'react';
import ChapterOne from './ChapterOne';
import ChapterTwo from './ChapterTwo';
import ChapterThree from './ChapterThree';
import ChapterZero from './ChapterZero';
import NavBar from './NavBar';
import {BrowserRouter as Router,
Switch,
Route} from "react-router-dom";


function App() {

  const [Chapter1, setChapter1] = useState(false);
  const chapter1Options = [
    {path:"Chapter1_1", name:"1.1 Semiconductor materials"},
    {path:"Chapter1_2", name:"1.2 Types of Solids"},
    {path:"Chapter1_3", name:"1.3 Space Lattices"},
    {path:"Chapter1_4", name:"1.4 The Diamond Structure"},
    {path:"Chapter1_5", name:"1.5 Atomic Bonding"},
    {path:"Chapter1_6", name:"1.6 Imperfections and Impurities"},
    {path:"Chapter1_7", name:"1.7 Semiconductor Growth"},
    {path:"Chapter1P", name:"1.P Practice Problems"}    
];

  const [Chapter2, setChapter2] = useState(false);
  const chapter2Options = [
    {path:"Chapter2_1", name:"2.1 Principles of Quantum Mechanics"},
    {path:"Chaapter2_2", name:"2.2 Schrodinger's equation"}
  ];

  const [Chapter3, setChapter3] = useState(false);
  const chapter3Options = [
    {path:"Chapter3_1", name:"3.1 Energy Bands"}
  ]

  const chapters = [
    {name: "Chapter1", toggle: Chapter1, set:setChapter1, options: chapter1Options},
    {name: "Chapter2", toggle: Chapter2, set:setChapter2, options: chapter2Options},
    {name: "Chapter3", toggle: Chapter3, set:setChapter3, options: chapter3Options}
  ];

  function close()  {
    return(
      setChapter1(false),
      setChapter2(false),
      setChapter3(false)
    )
  }

  return (
    <Router>
      <div className="h-screen w-full flex flex-col items-center space-y-16 bg-blue-500 dark:bg-blue-900" onClick={() => close()}>
        <NavBar chapters={chapters}/>
        <Switch>
          <Route path="/Chapter1">
            <ChapterOne/>
          </Route>
          <Route path="/Chapter2">
            <ChapterTwo/>
          </Route>
          <Route path="/Chapter3">
            <ChapterThree/>
          </Route>
          <Route path="/">
            <ChapterZero/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
