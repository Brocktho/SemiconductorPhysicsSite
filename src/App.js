import React, { useState } from 'react';
import ChapterOne from './ChapterOne';
import ChapterOneOne from './ChapterOneOne';
import ChapterOneTwo from './ChapterOneTwo';
import ChapterOneThree from './ChapterOneThree';
import ChapterOneFour from './ChapterOneFour';
import ChapterOneFive from './ChapterOneFive';
import ChapterOneSix from './ChapterOneSix';
import ChapterOneSeven from './ChapterOneSeven';
import ChapterTwo from './ChapterTwo';
import ChapterThree from './ChapterThree';
import ChapterZero from './ChapterZero';
import NavBar from './NavBar';
import {BrowserRouter as Router,
Switch,
Route} from "react-router-dom";


function App() {
  const imgPath = "/src/images/"
  const [Chapter1, setChapter1] = useState(false);
  const chapter1Options = [
    {key:"1.1", path:"Chapter1_1", name:"1.1 Semiconductor materials"},
    {key:"1.2", path:"Chapter1_2", name:"1.2 Types of Solids"},
    {key:"1.3", path:"Chapter1_3", name:"1.3 Space Lattices"},
    {key:"1.4", path:"Chapter1_4", name:"1.4 The Diamond Structure"},
    {key:"1.5", path:"Chapter1_5", name:"1.5 Atomic Bonding"},
    {key:"1.6", path:"Chapter1_6", name:"1.6 Imperfections and Impurities"},
    {key:"1.7", path:"Chapter1_7", name:"1.7 Semiconductor Growth"},
    {key:"1.8", path:"Chapter1P", name:"1.P Practice Problems"}    
];

  const [Chapter2, setChapter2] = useState(false);
  const chapter2Options = [
    {key:"2.1", path:"Chapter2_1", name:"2.1 Principles of Quantum Mechanics"},
    {key:"2.2", path:"Chaapter2_2", name:"2.2 Schrodinger's equation"}
  ];

  const [Chapter3, setChapter3] = useState(false);
  const chapter3Options = [
    {key:"3.1", path:"Chapter3_1", name:"3.1 Energy Bands"}
  ]

  const chapters = [
    {name: "Chapter1", toggle: Chapter1, set:setChapter1, options: chapter1Options},
    {name: "Chapter2", toggle: Chapter2, set:setChapter2, options: chapter2Options},
    {name: "Chapter3", toggle: Chapter3, set:setChapter3, options: chapter3Options}
  ];
  console.log()
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
          <Route path="/SemiconductorPhysicsSite/Chapter1_1">
            <ChapterOneOne imgPath={imgPath}/>
          </Route>
          <Route path="/SemiconductorPhysicsSite/Chapter1_2">
            <ChapterOneTwo imgPath={imgPath}/>
          </Route>
          <Route path="/SemiconductorPhysicsSite/Chapter1_3">
            <ChapterOneThree imgPath={imgPath}/>
          </Route>
          <Route path="/SemiconductorPhysicsSite/Chapter1_4">
            <ChapterOneFour imgPath={imgPath}/>
          </Route>
          <Route path="/SemiconductorPhysicsSite/Chapter1_5">
            <ChapterOneFive imgPath={imgPath}/>
          </Route>
          <Route path="/SemiconductorPhysicsSite/Chapter1_6">
            <ChapterOneSix imgPath={imgPath}/>
          </Route>
          <Route path="/SemiconductorPhysicsSite/Chapter1_7">
            <ChapterOneSeven imgPath={imgPath}/>
          </Route>
          <Route path="/SemiconductorPhysicsSite/Chapter1">
            <ChapterOne/>
          </Route>
          <Route path="/SemiconductorPhysicsSite/Chapter2">
            <ChapterTwo/>
          </Route>
          <Route path="/SemiconductorPhysicsSite/Chapter3">
            <ChapterThree/>
          </Route>
          <Route path="/SemiconductorPhysicsSite/">
            <ChapterZero/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
