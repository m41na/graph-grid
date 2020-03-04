import Layout from '../components/Layout';

export default function History() {
  return (
    <Layout>
      <div>
        <h2>Score history</h2>
        <ul>
          <li><a href="#">6000 on 02 Fe 2020</a></li>
          <li><a href="#">6200 on 03 Fe 2020</a></li>
          <li><a href="#">5600 on 02 Fe 2020</a></li>
          <li><a href="#">1200 on 05 Fe 2020</a></li>
          <li><a href="#">3000 on 06 Fe 2020</a></li>
        </ul>
      </div>
      <style jsx>{`
        div {
          background-color: ghostwhite;
          padding: 20px 10px;
        }
         
        h2 {
          font: 400 40px/1.5 Helvetica, Verdana, sans-serif;
          margin: 0;
          padding: 0;
        }
         
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
         
        li {
          font: 200 20px/1.5 Helvetica, Verdana, sans-serif;
          border-bottom: 1px solid #ccc;
          margin: 20px 0;
        }
         
        li:last-child {
          border: none;
        }
         
        li a {
          text-decoration: none;
          color: #000;
          display: block;
         
          -webkit-transition: font-size 0.3s ease, background-color 0.3s ease;
          -moz-transition: font-size 0.3s ease, background-color 0.3s ease;
          -o-transition: font-size 0.3s ease, background-color 0.3s ease;
          -ms-transition: font-size 0.3s ease, background-color 0.3s ease;
          transition: font-size 0.3s ease, background-color 0.3s ease;
        }
         
        li a:hover {
          font-size: 30px;
          background: #f6f6f6;
        }
      `}</style>
    </Layout>
  );
}