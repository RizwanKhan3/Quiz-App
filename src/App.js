
import './App.css';
import QuizForm from './components/QuizForm';
import { quiz } from './Data/QuizData'
function App() {
  return (
    <div className="App">
      <QuizForm quiz={ quiz } />
    </div>
  );
}

export default App;
