import './App.css';
import SearchField from './components/SearchField'
import ProductsWindow from './components/ProductsWindow'

function App() {
  return (
    <div className="flexColumn">
            <SearchField />
            <ProductsWindow />
        </div>
  );
}

export default App;
