import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'
import './App.css';
import Header from './Components/header/Header';
import SideBar from './Components/header/sidebar/SideBar.js'
import './CSS/style.css'
import HomeScreen from './Screens/homeScreen/HomeScreen';
import LoginScreen from './Screens/loginScreen/LoginScreen';



const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSideBar = () => toggleSidebar(!sidebar);
  return (
    <>
      <Header handleToggleSideBar={handleToggleSideBar} />
      <div className="app__container ">
        <SideBar sidebar={sidebar} handleToggleSideBar={toggleSidebar} />
        <Container fluid className="app__main ">
          {children}
        </Container>
      </div>
    </>
  )
}

function App() {

  const { accessToken, loading } = useSelector(state => state.auth)

  const history = useHistory()

  useEffect(() => {
    if (!loading && !accessToken) {
      history.push('/login')
    }
  }, [accessToken, loading, history])
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Layout>
            <HomeScreen />
          </Layout>
        </Route>

        <Route path="/login">
          <LoginScreen />
        </Route>

        <Route path="/search">
          <Layout>
            <h1>Search</h1>
          </Layout>
        </Route>

        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
