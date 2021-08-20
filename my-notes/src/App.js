import './App.css';
import Cards from './components/cards'
import CardsGet from './components/cardsGet'
import Header from './components/header'
import AddNote from './components/addNote'
import AddNotePost from './components/addNotePost'
import HeaderPost from './components/headerPost'

function App() {
  return (
    <div class="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen">
      <HeaderPost/>
      <AddNotePost/>
      <CardsGet/>
    </div>
  );
}

export default App;
