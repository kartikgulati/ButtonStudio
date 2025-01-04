
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import ButtonShowcase from './components/sections/ButtonShowcase';
import ContactForm from './components/forms/ContactForm';
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <ButtonShowcase />
      <Features />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
