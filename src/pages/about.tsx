import { motion } from "framer-motion"

export function About() {
  return (
    <div className="space-y-12">
      {/* Intro Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:gap-8">
        <div className="md:w-1/2">
          <img
            src="/avatar.jpg" // Add your image
            alt="Gregoire Geoffroy"
            className="rounded-lg w-full max-w-[336px] mx-auto md:mx-0"
          />
        </div>
        
        <div className="md:w-1/2 space-y-4 mt-6 md:mt-0">
          <p className="text-lg">
            <strong>Hey, I'm Gregoire Geoffroy</strong>
          </p>
          
          <p className="text-muted-foreground">
            I'm a <strong className="text-foreground">front end developer</strong> based in France. 
            Currently working as a freelancer, where I focus on building 
            accessible, human-centered products.
          </p>
          
          <p className="text-muted-foreground">
            I'm passionate about <strong className="text-foreground">web development</strong>, 
            open source, and creating intuitive user experiences. When I'm not coding, 
            you can find me exploring new places, learning languages,
            or experimenting with creative personal projects.
          </p>
        </div>
      </div>

      {/* Career Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Career</h2>
        
        <div className="space-y-8">
          {[
            {
              title: "Front End Developer",
              company: "Freelance",
              location: "Remote",
              period: "2021 - Present",
              duration: "3 yrs"
            },
            {
              title: "Educational Platform Manager and Media Coordinator",
              company: "Paris 1 University Pantheon - Sorbonne",
              location: "Paris, France",
              period: "2012 - 2021",
              duration: "9 yrs"
            },
            // Add more career items
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-1"
            >
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                <span>{item.company}</span>
                <span className="mx-2">•</span>
                <span>{item.location}</span>
              </p>
              <p className="text-sm text-muted-foreground">
                <span>{item.period}</span>
                <span className="mx-2">•</span>
                <span>{item.duration}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Skills & Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "JavaScript", "TypeScript", "React", "React Native", "Next.js", "Node.js", "Tailwind CSS"   
            // Add more skills
          ].map((skill) => (
            <span 
              key={skill}
              className="px-3 py-1 text-sm bg-muted rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
} 