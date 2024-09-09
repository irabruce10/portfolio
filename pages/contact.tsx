import Head from 'next/head';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-test-id="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              quas accusantium, nihil enim, quam numquam non earum voluptatibus
              ab id harum provident a itaque dolorum modi cumque, fugiat unde
              minima!
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: irabruce20@gmail.com</li>
              <li className="contact-item">Phone: +43 681 10842361</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
