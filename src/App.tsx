import React from 'react';
import './index.css';
import Accordion from "./components/Accordion";
import Rating from "./components/Rating";

 function App() {
  return (
      <>
        <PageTitle title={"This is App component"}/>
        <PageTitle title={"My friends"}/>
        Article 1
        {/*<Rating value={3}/>*/}
        <Accordion titleValue={"Menu"} collapsed={false}/>
        <Accordion titleValue={"Users"} collapsed={true}/>
        Article 2

        <Rating value={0}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>

      </>
  );
}


function PageTitle (props: any) {
  return <h1>{props.title}</h1>
}


export default App;
