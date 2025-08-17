import { personalInfo } from '@/data/personal-info';

export default function HeroSection() {
    return (
        <section id="intro" className="mt-4 sm:mt-6 relative">

            <div className="space-y-6 sm:space-y-8">
                
                {/* Creative name display */}
                <div className="space-y-4 sm:space-y-6">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 sm:mb-10">
                            Hey, I'm <span className="highlight">{personalInfo.name}</span>
                        </h1>
                    </div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                    <div className="max-w-4xl">
                        <div className="group">
                            <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                                <span className="text-green-400 font-mono text-base sm:text-md">$</span>
                                <span className="text-cyan-400 font-mono text-base sm:text-md">cat</span>
                                <span className="text-yellow-400 font-mono text-base sm:text-md">~/about</span>
                            </div>
                            <div className="ml-2 sm:ml-4 text-gray-300/90 leading-relaxed text-base sm:text-lg">
                                i'm a <span className="text-accent">software developer</span> who fell in love with code when i saw it fix real problems. what began as simple javascript grew into web apps, browser extensions, and mobile screens people use every day :p
                            </div>
                            <div className="ml-2 sm:ml-4 text-gray-300/90 leading-relaxed text-base sm:text-lg mt-2 sm:mt-3">
                                today i run <span className="text-accent">microservices</span> that stay reliable under load. turborepo keeps the repo tidy, docker wraps each deploy, and consul helps services talk without drama. i linked cashfree, phonepe and other payment gateways so a shop could take payments while its owner slept ^-^
                            </div>
                            <div className="ml-2 sm:ml-4 text-gray-300/90 leading-relaxed text-base sm:text-lg mt-2 sm:mt-3">
                                my linux story started when windows froze my old laptop. ubuntu rescued me, then i tried kali, parrot, fedora, and garuda. i finally stopped hopping when i met <span className="text-accent">arch</span>—rolling updates, nothing extra. i still trim nginx configs until they feel just right and write scrapers that never wake me at 3 am :D
                            </div>
                            <div className="ml-2 sm:ml-4 text-gray-300/90 leading-relaxed text-base sm:text-lg mt-2 sm:mt-3">
                                in my free hours i refine my <span className="text-accent">dotfiles</span>, keeping my setup consistent across machines and tuned to how i like to work. i also write blogs about linux, docker, git, and anything else that might save someone else an hour.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills - Categorized terminal style */}
                <div>
                    <div className="max-w-4xl">
                        <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                            <span className="text-green-400 font-mono text-base sm:text-md">$</span>
                            <span className="text-cyan-400 font-mono text-base sm:text-md">cat</span>
                            <span className="text-yellow-400 font-mono text-base sm:text-md">~/skills</span>
                            </div>
                        <div className="ml-1.5 sm:ml-3 space-y-1">
                            {Object.entries(personalInfo.skills).map(([category, skills]) => (
                                <div key={category} className="group relative">
                                    <div className="relative flex items-start gap-1 sm:gap-2 px-1 sm:px-2 py-1.5 sm:py-2.5 transition-all duration-300 hover:bg-amber-500/5 rounded-md">
                                        <span className="absolute inset-y-1 left-0 w-[2px] rounded bg-amber-400/0 group-hover:bg-amber-400/50 transition-all duration-300 pointer-events-none" aria-hidden />
                                        <span className="text-amber-400 font-mono text-sm sm:text-base flex-shrink-0 mt-0.5">▸</span>
                                        <div className="flex-1 min-w-0">
                                            <span className="text-amber-400 font-medium text-sm sm:text-base">{category}:</span>
                                            <span className="text-gray-300 text-sm sm:text-base ml-1 sm:ml-2 break-words">
                                                {skills.map((skill, index) => (
                                                    <span key={skill.name}>
                                                        <span className={skill.highlight ? 'text-gray-400 opacity-70' : ''}>
                                                            {skill.name}
                                                        </span>
                                                        {index < skills.length - 1 && <span className="text-gray-500">, </span>}
                                                    </span>
                                                ))}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
