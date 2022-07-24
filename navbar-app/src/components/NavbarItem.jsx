export const NavbarItem = ({ url, text }) => {
  return (
    <li>
      <a href={url}>{text}</a>
    </li>
  );
};
