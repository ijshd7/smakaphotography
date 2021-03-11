import React from "react";
import introImg from '../images/IMG_0004.jpg';
import heroImg from '../images/IMG_0003-small.jpg';

const introBackground = {
  backgroundImage: `url(${introImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  // backgroundAttachment: 'fixed',
  backgroundRepeat: 'no-repeat',
  minHeight: '340px'
};

const heroBackground = {
  backgroundImage: `url(${heroImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'right',
  backgroundAttachment: 'fixed',
  backgroundRepeat: 'no-repeat',
  minHeight: '340px'
};


const IndexPage = () => {
  return (
    <main>
      <section className="h-screen w-full" style={introBackground}/>
      <section className="h-auto w-full py-4 font-sans" style={heroBackground}>
        <h1 className="pb-2 text-yellow-400 text-3xl text-center italic underline uppercase">
          Welcome/Capturing the Moment
        </h1>
        <p className="text-center text-white mx-4">
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Proin at feugiat dolor, vitae
          ornare ex. Donec sit amet
          ipsum ultrices, venenatis
          diam in, sagittis libero.
          Donec sit amet pellentesque
          turpis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Proin at feugiat dolor, vitae
          ornare ex. Donec sit amet
          ipsum ultrices, venenatis
          diam in, sagittis libero.
          Donec sit amet pellentesque
          turpis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Proin at feugiat dolor, vitae
          ornare ex. Donec sit amet
          ipsum ultrices, venenatis
          diam in, sagittis libero.
          Donec sit amet pellentesque
          turpis.
        </p>
      </section>
      <section className="">
        <h1 className="uppercase text-2xl text-center text-yellow-400 italic underline">About Me</h1>
        <p className="text-center mx-4 font-serif italic">
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Proin at feugiat dolor, vitae
          ornare ex. Donec sit amet
          ipsum ultrices, venenatis
          diam in, sagittis libero.
          Donec sit amet pellentesque
          turpis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Proin at feugiat dolor, vitae
          ornare ex. Donec sit amet
          ipsum ultrices, venenatis
          diam in, sagittis libero.
          Donec sit amet pellentesque
          turpis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Proin at feugiat dolor, vitae
          ornare ex. Donec sit amet
          ipsum ultrices, venenatis
          diam in, sagittis libero.
          Donec sit amet pellentesque
          turpis.
        </p>
      </section>
    </main>
  )
}

export default IndexPage
