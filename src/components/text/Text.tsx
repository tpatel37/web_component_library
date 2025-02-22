import React from 'react';
import styled from 'styled-components';

export type TextProps = {
  content: string;
  color?: string;
  size?: string;
  weight?: string;
};

// Styled component with prefixed props to avoid React warnings
const StyledText = styled.p<{ $color?: string; $size?: string; $weight?: string }>`
  font-size: ${(props) => props.$size || '16px'};
  color: ${(props) => props.$color || '#000'};
  font-weight: ${(props) => props.$weight || 'normal'};
`;

const Text: React.FC<TextProps> = ({ content, color, size, weight }) => {
  return <StyledText $color={color} $size={size} $weight={weight}>{content}</StyledText>;
};

export default Text;
