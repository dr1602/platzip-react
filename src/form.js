import React from "react";
import styled from 'styled-components'

const StyledForm = styled.form`
  
  font-family: courier;
  margin: 0 36px 27px;
  text-align: center;

  &:hover {
    animation: ${(p) => p.theme.animation} 2s linear infinite;
  }

  @keyframes grow {
    0%, {
      transform: scale(1.2);
    }
    }
    25% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.75);
    }
    75% {
      transform: rotateZ(scale(1.50));
    }
    100% {
      transform: rotateZ(2.1);
    }
  }

  @keyframes wiggle {
    0%, 7% {
      transform: rotateZ(0);
    }
    15% {
      transform: rotateZ(-15deg);
    }
    20% {
      transform: rotateZ(10deg);
    }
    25% {
      transform: rotateZ(-10deg);
    }
    30% {
      transform: rotateZ(6deg);
    }
    35% {
      transform: rotateZ(-4deg);
    }
    40%, 100% {
      transform: rotateZ(0);
    }
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  padding: 6px 6px;
  margin: auto 1.2vw;
  border: 1px solid transparent;
  border-radius: 9px;
  transition: 150ms border-color;

  &:hover {
    border-color: ${(p) => p.theme.color};
  }

  &[disabled]: {
    background: ${(p) => p.theme.color};
  }
`;

export default function Form(props) {
  const [count, setCount] = React.useState(0);
  const { movie } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  return (
    <StyledForm onSubmit={handleSubmit} onMouseEnter={() => props.updateTheme()}>
      <p>{movie.name}</p>
      <StyledButton
        type="submit"
        onClick={() => setCount(count - 1)}
        disabled={count <= 0}
      >
        {" "}
        -{" "}
      </StyledButton>
      {count}
      <StyledButton
        type="submit"
        onClick={() => setCount(count + 1)}
        disabled={count >= movie.maxTickets}
      >
        {" "}
        +{" "}
      </StyledButton>
    </StyledForm>
  );
}
