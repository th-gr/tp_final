import styled from "styled-components";
import { Outlet } from "react-router-dom";

// Styled Components
const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 200px;
  background-color: #2B2C28;
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    padding: 5px;
  }

  li {
    text-align: left;
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
    font-weight: bold;
    color: #EFEFEF;

  }

  a:hover {
    color: #c12d18;
  }
`;

const MainContent = styled.div`
  flex-grow: 1;
  padding: 1em;
`;

const SmallImage = styled.img`
  height: 128px;
  width: 128px;
  padding: 10px;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Root() {
  return (
    <Container>
      <Sidebar>
        <Navigation>
          <Center>
            <SmallImage src="../../public/pokeball.png" />
          </Center>
          <ul>
            <li>
              <a href={`/pokemon`}>Pokemon</a>
            </li>
            <li>
              <a href={`/create-pokemon`}>Create Pokemon</a>
            </li>
          </ul>
        </Navigation>
      </Sidebar>
      <MainContent>
        <Outlet />
      </MainContent>
    </Container>
  );
}

export default Root;
