import { HEADING_COLORS } from "../Heading/styles";
import { TextContainer, TEXT_SIZES } from "./styles";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant: keyof typeof TEXT_SIZES;
  color: keyof typeof HEADING_COLORS;
  bold?: boolean;
  children: string;
}

export function Text({ variant, color, bold, children, ...props }: TextProps) {
  return (
    <TextContainer variant={variant} color={color} bold={bold} {...props}>
      {children}
    </TextContainer>
  );
}
