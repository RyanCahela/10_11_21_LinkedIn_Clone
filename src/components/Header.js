import HeaderOption from "./HeaderOption";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PeopleIcon from "@mui/icons-material/People";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SmsIcon from "@mui/icons-material/Sms";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Container = styled.header`
  display: flex;
  justify-content: space-evenly;
  border-bottom: 0.1px solid lightgray;
  padding-top: 10px;
  padding-bottom: 10px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;
`;

const HeaderLeft = styled.div`
  display: flex;
`;

const HeaderRight = styled.div`
  display: flex;
  justify-content: space-between;

  & > * + * {
    padding-left: 20px;
  }
`;

const LinkedInLogo = styled.img`
  object-fit: contain;
  width: 40px;
  margin-right: 10px;
`;

const HeaderSearch = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  height: 22px;
  color: gray;
  background-color: #eef3f8;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background: none;
`;

function Header() {
  return (
    <Container>
      <HeaderLeft>
        {/* linkedIn logo */}
        <LinkedInLogo src="./images/linkedin.svg" alt="linkedin logo" />
        <HeaderSearch>
          <SearchIcon />
          <SearchInput type="text" />
        </HeaderSearch>
      </HeaderLeft>
      <HeaderRight>
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={PeopleIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={SmsIcon} title="Messages" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
      </HeaderRight>
    </Container>
  );
}

export default Header;
