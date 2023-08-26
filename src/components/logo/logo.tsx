import './logo.css';

interface FooterProps extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'children'> {
  element: 'div';
  children: string;
}

const Logo = ({ className, element, children, ...rest }: FooterProps) => {
  const Logo = element;

  return (
    <Logo {...rest} className={className}>
      {children}
    </Logo>
  );
};

export default Logo;
