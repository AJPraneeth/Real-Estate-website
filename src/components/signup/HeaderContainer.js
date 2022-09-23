import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import linksUnlog from "../constants/routes/nav-links-unlog";
import linksUserlog from "../constants/routes/nav-links-Userlog";
import linksAdminlog from "../constants/routes/nav-links-Adminlog";
import { HeaderWrapper, Banner, Jumbotron } from "../components";

import { AdvancedSearchContainer, SideNavigationContainer } from "./index";

const HeaderContainer = ({ bg, source, isAdmin, isLoggedIn }) => {
  const history = useHistory();

  const [sideNavShown, setSideNavShown] = useState(false);
  const [sideNavHidden, setSideNavHidden] = useState(true);
  const [fixed, setFixed] = useState(false);

  const Admin = localStorage.getItem("isAdmin");
  const LoggedIn = localStorage.getItem("isLoggedIn");

  const logout = () => {
    const logout = window.confirm("Do you want log out");
    if (logout) {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      localStorage.setItem("isLoggedIn", false);
      localStorage.setItem("isAdmin", false);

      history.push("/");
    }
  };

  const changeBackgroundColorAndPosition = () => {
    if (window.pageYOffset > 100) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  window.addEventListener("scroll", changeBackgroundColorAndPosition);

  const handleSideNavigation = () => {
    setSideNavHidden((prevState) => !prevState);
    setSideNavShown((prevState) => !prevState);
  };

  return (
    <Banner bg={bg} source={source}>
      <HeaderWrapper bg={bg} fixed={fixed}>
        <HeaderWrapper.Container>
          <HeaderWrapper.Title bg={bg}>
            <HeaderWrapper.Link bg={bg} fixed={fixed} to="/">
              Prime Home
            </HeaderWrapper.Link>
          </HeaderWrapper.Title>
          <HeaderWrapper.LinksContainer>
            {LoggedIn === "true" ? (
              <HeaderWrapper.List links="links">
                {Admin === "true" ? (
                  <HeaderWrapper.List links="links">
                    {linksAdminlog.map((link) => (
                      <HeaderWrapper.Item key={link.to}>
                        <HeaderWrapper.Anchor
                          bg={bg}
                          fixed={fixed}
                          to={`${link.to}`}
                        >
                          {link.name}
                        </HeaderWrapper.Anchor>
                      </HeaderWrapper.Item>
                    ))}
                    <HeaderWrapper.Item>
                      <HeaderWrapper.Anchor
                        bg={bg}
                        fixed={fixed}
                        onClick={logout}
                      >
                        logout
                      </HeaderWrapper.Anchor>
                    </HeaderWrapper.Item>

                    <HeaderWrapper.Item>
                      <HeaderWrapper.Anchor to="/dashboard" special="true">
                        Dashboard
                      </HeaderWrapper.Anchor>
                    </HeaderWrapper.Item>
                  </HeaderWrapper.List>
                ) : (
                  <HeaderWrapper.List links="links">
                    {linksUserlog.map((link) => (
                      <HeaderWrapper.Item key={link.to}>
                        <HeaderWrapper.Anchor
                          bg={bg}
                          fixed={fixed}
                          to={`${link.to}`}
                        >
                          {link.name}
                        </HeaderWrapper.Anchor>
                      </HeaderWrapper.Item>
                    ))}

                    <HeaderWrapper.Item>
                      <HeaderWrapper.Anchor
                        bg={bg}
                        fixed={fixed}
                        onClick={logout}
                      >
                        logout
                      </HeaderWrapper.Anchor>
                    </HeaderWrapper.Item>

                    <HeaderWrapper.Item>
                      <HeaderWrapper.Anchor to="/profile" special="true">
                        My profile
                      </HeaderWrapper.Anchor>
                    </HeaderWrapper.Item>
                  </HeaderWrapper.List>
                )}
              </HeaderWrapper.List>
            ) : (
              <HeaderWrapper.List links="links">
                {linksUnlog.map((link) => (
                  <HeaderWrapper.Item key={link.to}>
                    <HeaderWrapper.Anchor
                      bg={bg}
                      fixed={fixed}
                      to={`${link.to}`}
                    >
                      {link.name}
                    </HeaderWrapper.Anchor>
                  </HeaderWrapper.Item>
                ))}
              </HeaderWrapper.List>
            )}

            <HeaderWrapper.List></HeaderWrapper.List>
            <HeaderWrapper.List side="side">
              <HeaderWrapper.Item>
                <HeaderWrapper.Button onClick={handleSideNavigation}>
                  <HeaderWrapper.Icon name="fa fa-bars" />
                </HeaderWrapper.Button>
              </HeaderWrapper.Item>
            </HeaderWrapper.List>
          </HeaderWrapper.LinksContainer>
        </HeaderWrapper.Container>
      </HeaderWrapper>
      {bg === "true" && (
        <Jumbotron>
      
          <Jumbotron.Left>
            <Jumbotron.Title>Find The Home You Deserve With Us</Jumbotron.Title>
          </Jumbotron.Left>
          <Jumbotron.Right>
            {/* <AdvancedSearchContainer
                category={category}
                listedIn={listedIn}
                province={province}
                bedroom={bedroom}
                bathroom={bathroom}
                floor={floor}
                price={price}
                isHome={isHome}
                // setSearchedProperties={setSearchedProperties}
            /> */}
               <div class="row" >
              
                <div class="text-center">
                  <h2 class="text-uppercase">Download App</h2>

                  <div class="buttons row-cols-1 justify-content-center mt-3">
                    <div class="col">
                    <button class="btn btn-dark app-button mb-2 col-lg-6 col-md-9  col-sm-9" >
                      
                  <Jumbotron.Icon>   <i class="fa fa-apple fa-2x"></i></Jumbotron.Icon> 
                      <span class="text-uppercase ml-2" >Apple store</span>
                    </button>
                    </div>
                    <div class="col">
                    <button class="btn btn-dark app-button mb-2 col-lg-6 col-md-9  col-sm-9">
                    <Jumbotron.Icon> <i class="fa fa-play fa-2x"></i></Jumbotron.Icon> 
                      <span class="text-uppercase ml-2">Google store</span>
                    </button>
                    </div>
                  </div>
                </div>
        
            </div>

          </Jumbotron.Right>
        </Jumbotron>
      )}
      <SideNavigationContainer
        sideNavShown={sideNavShown}
        sideNavHidden={sideNavHidden}
        setSideNavHidden={setSideNavHidden}
        setSideNavShown={setSideNavShown}
        isAdmin={Admin}
        token={LoggedIn}
      />
    </Banner>
  );
};

export default HeaderContainer;
