import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// As a placeholder, I'm using SVG icons. For a real project, you might want to use a library like 'react-icons'.
const AwardIcon = () => (
    <svg className="h-12 w-12 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ProjectsIcon = () => (
    <svg className="h-12 w-12 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h6m-6 4h6m-6 4h6m-6-8h6" />
    </svg>
);

const ClientsIcon = () => (
    <svg className="h-12 w-12 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const HomeAchivement: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // The animation will only trigger once
        threshold: 0.1, // Trigger when 10% of the component is visible
    });

    return (
        <section ref={ref} className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Our Proudest Milestones</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        We are committed to excellence and have a proven track record of delivering outstanding results. Here are some of our key accomplishments.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Achievement Card 1 */}
                    <div className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="flex items-center">
                            <ProjectsIcon />
                            <div className="ml-4">
                                <h3 className="text-2xl font-bold text-gray-800">
                                    {inView && <CountUp end={500} duration={2.5} />}+
                                </h3>
                                <p className="text-gray-600">Projects Delivered</p>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-600">
                            We have successfully completed a wide range of projects for clients across various industries, showcasing our versatility and expertise.
                        </p>
                    </div>

                    {/* Achievement Card 2 */}
                    <div className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="flex items-center">
                            <ClientsIcon />
                            <div className="ml-4">
                                <h3 className="text-2xl font-bold text-gray-800">
                                    {inView && <CountUp end={250} duration={2.5} />}+
                                </h3>
                                <p className="text-gray-600">Satisfied Clients</p>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-600">
                            Our client-centric approach has earned us the trust and loyalty of businesses, both large and small.
                        </p>
                    </div>

                    {/* Achievement Card 3 */}
                    <div className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="flex items-center">
                            <AwardIcon />
                            <div className="ml-4">
                                <h3 className="text-2xl font-bold text-gray-800">
                                    {inView && <CountUp end={50} duration={2.5} />}+
                                </h3>
                                <p className="text-gray-600">Awards and Recognitions</p>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-600">
                            Our commitment to quality and innovation has been recognized with numerous industry awards and accolades.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAchivement;