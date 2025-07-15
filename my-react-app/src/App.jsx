import Card from './Card.jsx'
import List from './List.jsx'

import biplavProfile from './assets/biplavProfile.jpg'
import rohanProfile from './assets/rohanProfile.jpg'
import khemProfile from './assets/khemProfile.jpg'
import lilaProfile from './assets/lilaProfile.jpg'


function App() {
  const arrayFruits=[{id: 1,name: 'Apple', calories:62},
    {id: 2,name: 'Mango', calories:110},
    {id: 3,name: 'Banana', calories:102},
    {id: 4,name: 'Orange', calories:72},
    {id: 5,name: 'Pineapple', calories:82}
  ]
  return (
    <>
    <Card name="Biplav" occupation="Engineer" age={22} profileImage={biplavProfile}/> {/*cards */}
    <Card name="Rohan" occupation="Student" age={17} profileImage={rohanProfile}/>
    <Card isMarried="true" profileImage={khemProfile}/>
    <Card name="Lila" occupation='Housewife' age={41} profileImage={lilaProfile} isMarried='true'/> 
    {arrayFruits.length>0 && <List array={arrayFruits} category="Fruits"/>} {/*Rendering List*/}
    </>

  );
}

export default App
