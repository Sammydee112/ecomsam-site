import Header from './components/Header'
import Hero from './components/Hero'
import ProofStrip from './components/ProofStrip'
import LiveDemo from './components/LiveDemo'
import AutomationCase from './components/AutomationCase'
import Process from './components/Process'
import About from './components/About'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import StackSection from './components/StackSection'

function App() {
  return (
    <div className="bg-near-black relative">
      <Header />

      <StackSection index={1}><Hero /></StackSection>
      <StackSection index={2} light><ProofStrip /><LiveDemo /></StackSection>
      <StackSection index={3}><AutomationCase /><Process /></StackSection>
      <StackSection index={4} light><About /></StackSection>
      <StackSection index={5} light><Pricing /></StackSection>
      <StackSection index={6}><FAQ /></StackSection>
      <StackSection index={7}><Contact /><Footer /></StackSection>
    </div>
  )
}

export default App