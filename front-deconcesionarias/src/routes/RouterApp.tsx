import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import styled from 'styled-components';
import Header from '../components/Header';
import { Api } from '../pages/Api';
import { Properties } from '../pages/Properties';
import { Footer } from '../components/Footer';


export const RouterApp = () => {
    return (
        <Router>
            <StyledContainer>
            <Header />
            
            <main>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path="/api">
                    <Api />
                </Route>
                <Route exact path="/properties">
                    <Properties />
                </Route>
            </Switch>
            </main>
            <Footer />
            </StyledContainer>
        </Router>
    )
}

const StyledContainer = styled.div`
    width: 100%;
`;

