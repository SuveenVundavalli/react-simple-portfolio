import styled from "styled-components";
import { CTAButton } from "../common/CTAButton.styled";

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

    ${CTAButton} {
      margin-top: 2rem;
    }
  }
`;
