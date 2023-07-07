import Header from "./components/Header";
import Content from "./components/Content";
import hero_image from "./img/hero-image.svg"
import Form from "./components/Form";
import Footer from "./components/Footer";


function App() {

  const scrollToDiv = () => {
    const destinationDiv = document.getElementById('footer');
    destinationDiv.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='bg-black w-full h-full flex justify-center'>
      <img src={hero_image} alt="hero" className='z-0 absolute top-0 right-0 ' />
      <Header scroll={scrollToDiv}/>
      <div>
      <div className='w-[80%]'>
      <Content />
      </div>
      <div id="footer" className="bg-white">
        <Form />
        <Footer />
        <div>

        </div>
      </div>

      </div>
    </div>
  );
}

export default App;
