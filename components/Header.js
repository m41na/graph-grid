import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div className="header">
    <div className="header-links">
      <Link href="/">
        <a style={linkStyle}>Playing</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>How To Play</a>
      </Link>
      <Link href="/history">
        <a style={linkStyle}>History</a>
      </Link>
    </div>
    <style jsx>{`
      .header{
        display: grid;
        grid-auto-flow: column;
        padding: 0 0 20px;
        font-weight: bold;
        font-size: 1.5em;
      } 
      .header-links {
        padding: 10px;
      }
      .header-links a {
        text-decoration: none;
      }
    `}</style>
  </div>
);

export default Header;