import { personalInfo } from '@/data/personal-info';

export default function HeroSection() {

    return (
        <section id="intro" className="mt-6 sm:mt-10 mb-10 sm:mb-16 relative">

            <div className="mb-8 sm:mb-10 lg:mb-12 relative z-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                    hi, i'm <span className="highlight">sujit kumar</span>
                </h1>

                <div className="mb-6 sm:mb-8">
                    <div className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-400 max-w-3xl space-y-4 sm:space-y-5">

                        <p>
                            i'm a <span className="text-accent">software developer</span> who fell in love with code when i saw it fix real problems. what began as simple javascript grew into web apps, browser extensions, and mobile screens people use every day :p
                        </p>

                        <p>
                            today i run <span className="text-accent">microservices</span> that stay reliable under load. turborepo keeps the repo tidy, docker wraps each deploy, and consul helps services talk without drama. i linked cashfree, phonepe and other payment gateways so a shop could take payments while its owner slept ^-^
                        </p>

                        <p>
                            my linux story started when windows froze my old laptop. ubuntu rescued me, then i tried kali, parrot, fedora, and garuda. i finally stopped hopping when i met <span className="text-accent">arch</span>—rolling updates, nothing extra. i still trim nginx configs until they feel just right and write scrapers that never wake me at 3 am :D
                        </p>

                        <p>
                            in my free hours i refine my <span className="text-accent">dotfiles</span>, keeping my setup consistent across machines and tuned to how i like to work. i also write blogs about linux, docker, git, and anything else that might save someone else an hour.
                        </p>

                    </div>
                </div>
            </div>


            {/* Creative sections layout */}
            <div className="space-y-8 sm:space-y-10 lg:space-y-12">
                {/* Writing Topics - Creative card layout */}
                <div>
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <span className="text-sm font-mono text-amber-400 bg-amber-500/10 px-2.5 py-1.5 rounded">01</span>
                        <h3 className="text-lg sm:text-xl font-medium text-white">i write about</h3>
                        <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {personalInfo.topics.map((topic, index) => (
                            <div
                                key={topic}
                                className="group p-2 sm:p-2.5 rounded-sm bg-gray-900/20 border border-gray-800/50 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300 cursor-default"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-mono text-gray-500 w-5 sm:w-6">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="text-sm sm:text-base text-gray-300 group-hover:text-amber-300 transition-colors">
                                        {topic}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills - Interactive tag cloud style */}
                <div>
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <span className="text-sm font-mono text-amber-400 bg-amber-500/10 px-2.5 py-1.5 rounded">02</span>
                        <h3 className="text-lg sm:text-xl font-medium text-white">mainly i work with</h3>
                        <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent"></div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {personalInfo.skills.map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-1.5 text-sm rounded-sm bg-gray-900/30 border border-gray-800/50 text-gray-400 hover:border-amber-500/40 hover:text-amber-300 hover:bg-amber-500/5 transition-all duration-300 cursor-default"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}