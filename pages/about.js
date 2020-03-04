import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div>
        <ol>
          <li><span>1.</span><p>Reminiscent of the classic <strong>Minesweeper</strong> game, you need to navigate the grid without tripping on a red box. </p></li>
          
          <li><span>2.</span><p>Reminiscent of the classic <strong>Minesweeper</strong> game, you need to navigate the grid without tripping on a red box. </p></li>
          
          <li><span>3.</span><p>Reminiscent of the classic <strong>Minesweeper</strong> game, you need to navigate the grid without tripping on a red box.  </p></li>
        </ol> 
      </div>
      <style jsx>{`
        div {
          padding: 20px 0;
          background-color: ghostwhite;
        }
        
        ol {
          color: #ccc;
          list-style-type: none;
        }
        
        ol li {
          margin-bottom: 20px;
        }
        
        li p {
          font: 12px/1.5 Helvetica, sans-serif;
          color: #555;
        }
        
        span {
          position: absolute;
        }
      `}</style>
    </Layout>
  );
}