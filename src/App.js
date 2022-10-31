import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import GlobalStyles from "./accessories/GlobalStyles";
// importing components:
import { HomeFeed } from "./components/Feeds/HomeFeed";
import { Notifications } from "./components/Notifications";
import { Bookmarks } from "./components/Bookmarks";
import { Profile } from "./components/Profile";
import { SideBar } from "./components/SideBar";
import TweetDetails from "./components/TweetDetails";
import {
  CurrentUserContext,
  HomeFeedContext,
} from "./components/CurrentUserContext";
import { LoadingScreen } from "./accessories/LoadingScreen";
import { LargePostFormat } from "./components/Posts/LargePostFormat";

// ***ALL of the work for this project will be done in the 'client' folder.

const App = (props) => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <>
      {!currentUser ? (
        <LoadingScreen />
      ) : (
        <MainApplication>
          <GlobalStyles />
          <Router>
            <SideBar className="sideBar" />
            <Switch>
              <Route exact path="/">
                <HomeFeed currentUser={currentUser} />
              </Route>

              <Route exact path="/notifications">
                <Notifications />
              </Route>

              <Route exact path="/bookmarks">
                <Bookmarks />
              </Route>

              <Route path="/tweet/:tweetId">
                {/* <LargePostFormat currentUser={currentUser} /> */}
                <TweetDetails />
              </Route>

              {/* <Route path="/:profileId"> */}
              <Route path="/:handle">
                <Profile currentUser={currentUser} />
              </Route>
            </Switch>
          </Router>
        </MainApplication>
      )}
    </>
  );
};

const MainApplication = styled.div`
  display: grid;
  grid-template-columns: 1.75fr 2.5fr 2.25fr;
  grid-template-areas: "sideBar mainContent sideContent";
`;

export default App;
