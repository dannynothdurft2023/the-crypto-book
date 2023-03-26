import styled from "styled-components";

export const Nav = styled.div`
  padding: 14px 0;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 1;
  color: rgba(255, 255, 255, 0.8);
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  transition: all 0.5s;
  z-index: 999;

  div {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    align-items: center;
    display: flex;
    justify-content: space-between;
    a {
      color: #ffffff;
      text-decoration: none;
    }
  }
`;
