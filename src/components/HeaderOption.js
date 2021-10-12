import "../css/HeaderOption.css";
import styled from "styled-components";

const Option = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: dimgray;

  &:hover {
    cursor: pointer;
    color: #333;
  }
`;

const OptionTitle = styled.span`
  font-size: 0.75rem;
  font-weight: 400;
`;

function HeaderOption({ Icon, title, avatar }) {
  return (
    <Option>
      {Icon && <Icon />}

      <OptionTitle>{title}</OptionTitle>
    </Option>
  );
}

export default HeaderOption;
