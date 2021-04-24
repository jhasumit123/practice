import { render } from '@testing-library/react';
import React from 'react';
import Exam from './Exam';
function App(){
    return(
        <>
        <Exam data={{name:"sumit",age:"21"}}/>
        </>
    );
}
export default App;