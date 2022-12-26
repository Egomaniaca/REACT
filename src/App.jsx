// import { Form } from './components/Form';
// import { Form as FormClass} from './class-components/Form';
import { Count } from "./components/Count";
import { ChildComponent } from "./components/ChildComponent";
import { useState } from "react";

export const App = () => {   
const [name, setName] = useState('geek')


  return (
    <div className='App'>
      my first app
      {/* <Form/>
      <FormClass/>
      <hr/>
      <Count count = {10}/> */}
      <Count/>
      <hr />
      <ChildComponent name = {name}/>
    </div>
  );
}