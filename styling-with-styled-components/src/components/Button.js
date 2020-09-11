import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];

    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }

      ${(props) =>
        props.outline &&
        css`
          border: 1px solid ${selected};
          background: none;
          color: ${selected};
          &:hover {
            background : ${selected};
            color : white;
            };
          }
          &:active {
            background: ${darken(0.1, selected)};
            color: white;
            border: 1px solid ${selected};
          }
        `}
    `;
  }}
`;

const sizeStyles = css`
  ${({ size, fullWidth }) => {
    const sizes = {
      small: {
        height: "1.75rem",
        fontSize: "0.875rem;",
      },
      medium: {
        height: "2.25rem",
        fontSize: "1rem;",
      },
      large: {
        height: "3rem",
        fontSize: "1.25rem",
      },
    };

    return css`
      height: ${sizes[size].height};
      font-size: ${sizes[size].fontSize};
    `;
  }}
`;

const fullWidthStyle = css`
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      & + button {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
`;

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: white;
  outline: none;
  border-radius: 4px;
  border: none;
  font-weight: bold;

  padding-left: 1rem;
  padding-right: 1rem;

  height: 2.25rem;

  & + button {
    margin-left: 1rem;
  }

  ${colorStyles}
  ${sizeStyles}
  ${fullWidthStyle}
`;

function Button({ color, size, children, outline, fullWidth, ...rest }) {
  return (
    <StyledButton
      color={color}
      size={size}
      outline={outline}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: "blue",
  size: "medium",
};

export default Button;
