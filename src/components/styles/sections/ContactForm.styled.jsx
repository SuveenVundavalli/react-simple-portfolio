import styled, { keyframes } from "styled-components";
import { CTAButton } from "../common/CTAButton.styled";

const fly = keyframes`
  from {
    transform: translate(0px, 0px);
  }

  65% {
    transform: translate(2px, -2px);
  }
`;

export const StyledContactForm = styled.div`
  width: 100%;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      margin-top: 2rem;
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      margin-top: 2rem;
      /* max-width: 100%;
      min-width: 100%; */
      width: 100%;
      /* max-height: 100px; */
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }

    .show {
      display: block;
    }

    .hide {
      display: none;
    }

    .icon {
      animation: ${fly} 3s ease-in-out infinite;
      margin-left: 5px;
    }

    ${CTAButton} {
      margin-top: 2rem;
      min-width: 8rem;
      text-align: center;
      display: table-cell;
      vertical-align: middle;
      /* text-align: center;
      vertical-align: middle; */
      /* padding: 0px; */
    }
  }
`;
