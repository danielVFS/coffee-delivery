import { HeadingContainer, HEADING_COLORS, HEADING_SIZES } from "./styles";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant: keyof typeof HEADING_SIZES;
  color: keyof typeof HEADING_COLORS;
  children: string;
}

export function Heading({ variant, color, children, ...props }: HeadingProps) {
  return (
    <HeadingContainer variant={variant} color={color} {...props}>
      {children}
    </HeadingContainer>
  );
}
