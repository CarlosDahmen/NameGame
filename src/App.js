import Header from './components/Header';
import Routes from './Routes'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
    <div>
      <Provider store= {store}>
        <Header />
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
