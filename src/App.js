import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtilis" About="About TextUtilis"/>
    <div className="container my-3">
    <TextForm Heading="Enter Your Text Here"/>
    </div>
    
    </>
  );
}
export default App;