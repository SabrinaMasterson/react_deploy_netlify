//const Header = (props) => {//props come from the parent
  //props hold all of the properties from the parent component
const Header = ({title}) => {
  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
}

/*
//This is deprecated, use TypeScript instead
Header.defaultProps = {
  title: "Default Title"
};
*/

export default Header;