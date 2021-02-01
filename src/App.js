import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './Components/header/Header';
import SideBar from './Components/header/sidebar/SideBar.js'
import './CSS/style.css'
import HomeScreen from './Screens/homeScreen/HomeScreen';
function App() {

  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSideBar = () => toggleSidebar(!sidebar);

  return (
    <>
      <Header handleToggleSideBar={handleToggleSideBar} />
      <div className="app__container border border-info">
        <SideBar sidebar={sidebar} handleToggleSideBar={toggleSidebar} />
        <Container fluid className="app__main border border-warning">
          <HomeScreen />
        </Container>
      </div>
    </>
  );
}

export default App;
