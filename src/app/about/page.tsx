'use client'
import { cardHover, cardHoverSmall, fadeIn, fadeInDown, fadeInUp, staggerContainer } from "@/utils/animations";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode } from "react-icons/fa";

const AboutPage = () => {
    return (
        <div className="container mx-auto p-4 max-w-7xl py-20">
            <motion.h1
                {...fadeInDown}
                className="text-4xl font-bold mb-8 text-center">About Me</motion.h1>
            <motion.section
                {...fadeInUp}
                className="mb-16">
                <p className="text-lg max-w-3xl text-secondary mx-auto text-center"> Motivated Software Engineer with 3 years of experience in frontend and
                    full-stack development using React.js, Ember.js, Node.js, and modern web
                    technologies. Skilled in building responsive, scalable applications with a
                    focus on clean code and timely delivery. A fast learner and adaptable team
                    player, committed to continuous learning and contributing effectively in
                    agile environments.
                </p>
            </motion.section>

            <motion.section
                {...fadeIn}
                transition={{ delay: 0.2 }}
                className="mb-16">
                <motion.h2
                    {...fadeInUp}
                    className="section-title">Skills</motion.h2>
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
                    <motion.div
                        variants={fadeInUp}
                        {...cardHover}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
                        <FaCode className="w-8 h-8 text-primary mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Frontend</h3>
                        <ul>
                            <li className="mb-1">React/ Next.js</li>
                            <li className="mb-1">TypeScript</li>
                            <li className="mb-1">Ember.js</li>
                            <li className="mb-1">Tailwind CSS</li>
                            <li className="mb-1">HTML5 & CSS3</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        variants={fadeInUp}
                        {...cardHover}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
                        <FaLaptopCode className="w-8 h-8 text-primary mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Backend</h3>
                        <ul>
                            <li className="mb-1">Node.js</li>
                            <li className="mb-1">Express</li>
                            <li className="mb-1">PostgreSQL</li>
                            <li className="mb-1">MongoDB</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        variants={fadeInUp}
                        {...cardHover}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
                        <FaCode className="w-8 h-8 text-primary mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Tools and Others</h3>
                        <ul>
                            <li className="mb-1">Git/Bit bucket/SVN</li>
                            <li className="mb-1">AWS</li>
                            <li className="mb-1">Docker</li>
                            <li className="mb-1">CI/CD</li>
                        </ul>
                    </motion.div>
                </motion.div>
            </motion.section>

            <motion.section
                {...fadeIn}
                transition={{ delay: 0.4 }}
                className="mb-16">
                <motion.h2
                    {...fadeInUp}
                    className="section-title">Experiences</motion.h2>
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="max-w-3xl mx-auto space-y-6">
                    <motion.div
                        variants={fadeInUp}
                        {...cardHoverSmall}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Software Engineer</h3>
                        <p className="text-primary mb-2">Pelican cube (Outsourced ) (MAR 2025 - PRESENT)</p>
                        <ul className="list-disc list-inside text-secondary space-y-2">
                            <li>Developed SMART Ticketing & Seat Reservation Solution for Sri Lanka Railway across frontend & backend.</li>
                            <li>Created RESTful APIs and built responsive UIs aligned with Figma designs.</li>
                            <li>Built and optimized Back-Office modules: Engine, Carriage Inventory, Profile
                                Management, Warrant & Season Approval.</li>
                            <li>Implemented role-based User Management and KYC features, improving
                                security & compliance.
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div variants={fadeInUp}
                        {...cardHoverSmall}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Software Engineer</h3>
                        <p className="text-primary mb-2">DirectFN (Outsourced )  (May 2023- Jan 2025)</p>
                        <ul className="list-disc list-inside text-secondary space-y-2">
                            <li>Developed DirectFN Pro 11 trading web app, enhancing trading performance
                                & UI responsiveness.</li>
                            <li>Optimized Ember.js code, reducing load times & improving stability.</li>
                            <li>Built and optimized UA CORE Mobile app, boosting mobile performance.</li>
                            <li>Collaborated on scalable component architecture, ensuring maintainability &
                                faster feature delivery.
                            </li>

                        </ul>
                    </motion.div>
                    <motion.div
                        variants={fadeInUp}
                        {...cardHoverSmall}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Software Engineer</h3>
                        <p className="text-primary mb-2">Hatchyard (Pvt) Ltd (Oct 2022 - Present)</p>
                        <ul className="list-disc list-inside text-secondary space-y-2">
                            <li>Promoted from Intern to Full-time Engineer in 3 months.</li>
                            <li>Designed & developed B4U and Bookezy appointment & employee
                                management platforms.</li>
                            <li>Built reusable React/React Native components & implemented design system
                                for consistent UI.</li>
                            <li>Improved frontend performance & streamlined Git workflows.</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        variants={fadeInUp}
                        {...cardHoverSmall}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Intern Software Engineer</h3>
                        <p className="text-primary mb-2">Bellvantage (Pvt) Ltd  (Sep 2021 - Feb 2022)</p>
                        <ul className="list-disc list-inside text-secondary space-y-2">
                            <li>Enhanced life insurance modules using ASP.NET MVC & Oracle.</li>
                            <li>Delivered user-friendly interfaces for claims & premium payments, reducing
                                support queries.</li>
                        </ul>
                    </motion.div>
                </motion.div>
            </motion.section>

            <motion.section
                {...fadeIn}
                transition={{ delay: 0.6 }}
                className="mb-16">
                <motion.h2
                    {...fadeInUp}
                    className="section-title">Education</motion.h2>
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="max-w-3xl mx-auto space-y-6">
                    <motion.div
                        variants={fadeInUp}
                        {...cardHoverSmall}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">B.Sc. (Hons.) in Software Engineering</h3>
                        <p className="text-primary mb-2">University of Kelaniya, Sri Lanka  (2019 - 2023)</p>
                        <ul className="list-disc list-inside text-secondary space-y-2">
                            <li>Web Development</li>
                            <li>Data Science</li>
                            <li>Mobile App Development</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        variants={fadeInUp}
                        {...cardHoverSmall}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">G.C.E. Advanced Level Examination</h3>
                        <p className="text-primary mb-2">Royal College, Colombo 07, Sri Lanka  (2017)</p>
                        <ul className="list-disc list-inside text-secondary space-y-2">
                            <li>Combined Mathematics - A</li>
                            <li>Physics - B</li>
                            <li>Chemistry - B</li>
                        </ul>
                    </motion.div>
                </motion.div>
            </motion.section>
        </div>
    )
}
export default AboutPage;