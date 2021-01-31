import { Container } from 'react-bootstrap';
import './App.css';
import Header from './Components/header/Header';
import SideBar from './Components/header/sidebar/SideBar.js'
import './CSS/style.css'
import HomeScreen from './Screens/homeScreen/HomeScreen';
function App() {
  return (
    <>
      <Header />
      <div className="app_container border border-info">
        <SideBar />
        <Container fluid className="app__main border border-warning">
          <HomeScreen />
        </Container>
      </div>
    </>
  );
}

export default App;
