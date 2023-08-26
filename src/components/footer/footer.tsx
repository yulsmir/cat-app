import './footer.css';

interface FooterProps extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'children'> {
  element: 'footer';
  children: string;
}

const Footer = ({ className, element, children, ...rest }: FooterProps) => {
  const Footer = element;

  return (
    <Footer {...rest} className={className}>
      {children}
    </Footer>
  );
};

export default Footer;
