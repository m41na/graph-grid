import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div className="header">
    <div className="link-item">
      <Link href="/">
        <a style={linkStyle}>Playing</a>
      </Link>
    </div>
    <div className="link-item">
      <Link href="/about">
        <a style={linkStyle}>How To Play</a>
      </Link>
    </div>
    <div className="link-item">
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
      .link-item{
        padding: 10px;
      }
      .link-item a {
        text-decoration: none;
      }
    `}</style>
  </div >
);

export default Header;