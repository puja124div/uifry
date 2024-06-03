import react from 'react';
import {createRoot} from 'react-dom/client'
import Front from './components/Front';
import Feature from './components/Feature';
import Next from './components/Next';



const Applayout=()=>{
    return(
        <div className=' bg-gray-100 md:w-[1240px] mx-auto'>
           
            <Front/>
            <Feature/>
            <Next/>
        </div>
    )
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<Applayout/>);