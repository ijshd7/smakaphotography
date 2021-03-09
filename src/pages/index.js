import React from "react";
import introImg from '../images/IMG_0004.jpg';


const background = {
  backgroundImage: `url(${introImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  backgroundRepeat: 'no-repeat',
  minHeight: '340px'
};

const IndexPage = () => {
  return (
    <main>
      <section className="h-screen w-full" style={background} />
      <section className="">
      </section>
    </main>
  )
}

export default IndexPage
