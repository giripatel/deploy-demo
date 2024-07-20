import './App.css'
import { AuroraBackgroundDemo } from './components/AuroraBackgroundDemo'
import { motion } from 'framer-motion'

function App() {

  return (
    <>
      
        <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}>
        <div className="text-3xl md:text-5xl fixed top-5 flex justify-center left-2 font-bold text-neutral-700 dark:text-white text-center">
          <p>Giridhar</p>
        </div>
        </motion.div>
      <AuroraBackgroundDemo />
    </>
  )
}

export default App
