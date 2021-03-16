import React from "react";
import introImg from '../images/IMG_0004.jpg';
import heroImg from '../images/IMG_0003-small.jpg';
import aboutMe from '../images/aboutMe2.jpg'

const introBackground = {
  backgroundImage: `url(${introImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  // backgroundAttachment: 'fixed',
  backgroundRepeat: 'no-repeat',
  minHeight: '340px'
};

const heroBackground = {
  background: `linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,0.2)),url('${heroImg}')`,
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
          Capturing the Moment
        </h1>
        <p className="text-center text-white mx-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus mollis sapien vel 
        imperdiet. Fusce tincidunt molestie tincidunt. In hac habitasse platea dictumst. Donec 
        vel fermentum magna. Etiam quis sapien varius, sollicitudin velit ac, fermentum diam. 
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
        Nunc erat ligula, fermentum non elit dictum, luctus porta nunc. Mauris sit amet 
        elit pellentesque, tincidunt augue quis, condimentum ex. Vestibulum ante ipsum primis 
        in faucibus orci luctus et ultrices posuere cubilia curae; Mauris faucibus mollis lacinia.
        Sed vestibulum purus in arcu facilisis aliquam. Donec tempus leo sed vehicula ultricies. 
        Fusce at lacus velit. Aliquam condimentum dolor at congue suscipit. Nam pretium, risus 
        quis auctor consequat, mauris turpis laoreet arcu, ut maximus erat purus vel arcu. 
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Suspendisse sed metus sed enim tristique ornare. Maecenas nec leo id tellus ornare 
        placerat. Proin rutrum rhoncus est sed consectetur. Proin consectetur massa in enim
        molestie rutrum. Pellentesque faucibus dignissim tellus. Donec vel nibh in magna rutrum
        euismod. Aliquam molestie condimentum placerat. Nam eget odio ut mauris tincidunt
        tincidunt. Aliquam sit amet dui orci. In hac habitasse platea dictumst. Nulla vehicula,
        ante in ullamcorper ultricies, risus tellus molestie lectus, et auctor sem nulla eget
        ligula. Suspendisse vestibulum, lectus tristique blandit ultricies, turpis lorem 
        vestibulum urna, in eleifend quam purus ac est. Praesent rhoncus non est id malesuada.
        Aliquam ornare placerat tortor, eget facilisis nunc aliquet nec. Vivamus id sapien
        libero. Mauris ut accumsan ex. Proin semper gravida molestie. Aenean porta sem
        venenatis nunc feugiat congue. Praesent laoreet turpis at pretium ultrices. 
        </p>
      </section>
      <section className="">
        <img className="" src={aboutMe} alt="about me"/>
        <h1 className="uppercase text-2xl text-center text-yellow-400 italic underline">About Me</h1>
        <p className="text-center mx-4 font-serif italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus mollis sapien vel 
          imperdiet. Fusce tincidunt molestie tincidunt. In hac habitasse platea dictumst. Donec 
          vel fermentum magna. Etiam quis sapien varius, sollicitudin velit ac, fermentum diam. 
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
          Nunc erat ligula, fermentum non elit dictum, luctus porta nunc. Mauris sit amet 
          elit pellentesque, tincidunt augue quis, condimentum ex. Vestibulum ante ipsum primis 
          in faucibus orci luctus et ultrices posuere cubilia curae; Mauris faucibus mollis lacinia.
          Sed vestibulum purus in arcu facilisis aliquam. Donec tempus leo sed vehicula ultricies.
        </p>
      </section>
    </main>
  )
}

export default IndexPage
