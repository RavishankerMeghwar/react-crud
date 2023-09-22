import {Routes ,Route} from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Student from '../pages/Student';
import StudentCreate from '../pages/StudentCreate';
import StudentEdit from '../pages/StudentEdit';
function MyRouter(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/users' element={<Student/>}/>
            <Route path='/users/:id/edit' element={<StudentEdit/>}/>
            <Route path='/users/:id/delete' element={<Student/>}/>
            <Route path='/users/create' element={<StudentCreate/>}/>
        </Routes>
        
    );
}
export default MyRouter;