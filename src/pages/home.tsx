import { motion } from "framer-motion"

export function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="h-full flex items-center justify-center"
    >
      <div className="max-w-[800px] mx-auto px-4">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">
            Grégoire Geoffroy
          </h1>
          
          <div className="space-y-4 text-xl">
            <p>
              <strong>Front-end Developer</strong>
            </p>
            
            <p className="text-muted-foreground">
              Obsessed with crafting exceptional digital experiences
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 