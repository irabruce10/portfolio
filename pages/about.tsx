import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-test-id="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              fugiat itaque odit non iusto sapiente cupiditate aut rem, libero,
              mollitia officia! Doloremque quod dolorem autem obcaecati, est
              molestias mollitia optio? Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Nam illo, quia eos tempora cum ad et ipsam quod
              maxime eligendi dicta laudantium placeat explicabo voluptas vel
              illum ratione repellendus iure. Id cumque iure ipsam
              exercitationem repellat commodi quidem quisquam voluptate
              repudiandae adipisci quam optio ipsum asperiores nihil, eaque
              neque itaque deleniti, debitis numquam autem ducimus placeat
              laboriosam sunt saepe! Dicta? Quis, autem doloremque dicta maiores
              similique fugit quisquam aspernatur, architecto, velit sequi
              voluptatibus accusantium iusto. Atque beatae ducimus,
              necessitatibus quod nam incidunt quibusdam sunt odio quos optio
              minus, mollitia expedita? Eius ipsa veniam rem blanditiis
              voluptate, reiciendis labore libero error perspiciatis deserunt
              aperiam autem atque hic maxime voluptates similique cumque numquam
              dolorem a natus aliquam! Dignissimos minus necessitatibus quam
              nesciunt? Ducimus laborum tempora at maiores aliquid quia
              recusandae omnis temporibus assumenda mollitia, consectetur nobis
              odit incidunt, harum repellat ad animi aliquam amet qui
              consequatur neque. Voluptatibus modi ab voluptate labore! Odio
              atque asperiores culpa deserunt nobis optio commodi iure, est
              distinctio fugiat aliquid, facere, nulla iste. Reiciendis
              obcaecati, quae veritatis praesentium quo veniam assumenda modi
              odio suscipit dolor omnis eveniet!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
