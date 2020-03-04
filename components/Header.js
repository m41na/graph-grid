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
        font-weight: bold;
        font-size: 1.5em;
        border: 1px solid;
        border-radius: 5px;
        font-size: 1.5em;
        padding: 3px;
        margin: 0 0 20px;
      } 
      .link-item{
        padding: 10px;
        background-color: aliceblue;
        text-align: center;
      }
      .link-item:not(:first-of-type) {
        border-left: 1px solid;
      }
      .link-item a {
        text-decoration: none;
      }
    `}</style>
  </div >
);

export default Header;