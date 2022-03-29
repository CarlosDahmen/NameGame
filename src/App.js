import Header from './components/Header';
import Routes from './Routes'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
      <Provider store= {store}>
        <Header />
        <Routes />
      </Provider>
  );
}

export default App;
