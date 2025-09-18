import React from 'react';

// =================================================================================
//  HomeClient Component (Centered with Side Spacing)
// =================================================================================
//  Modified to center the moving logos with space on left and right sides
//  while maintaining the seamless, continuous scroll functionality.
// =================================================================================

const HomeClient: React.FC = () => {

    // 1. Define the filenames of your logos from the `public/Logos` folder.
    const logoFileNames = [
        '19.png', '20.jpg', '21.jpg', '22.png', '23.jpg',
        '24.jpg', '25.png', '26.jpg', '27.png', '28.png'
    ];

    // 2. Create the full public paths for each logo.
    const half = Math.ceil(logoFileNames.length / 2);
    const logosTop = logoFileNames.slice(0, half).map(fileName => `/Logos/${fileName}`);
    const logosBottom = logoFileNames.slice(half).map(fileName => `/Logos/${fileName}`);

    // 3. Repeat the logo arrays multiple times to create a long, continuous track.
    //    This ensures the content is always wider than the screen, preventing gaps.
    const repeatedLogosTop = [...logosTop, ...logosTop, ...logosTop, ...logosTop];
    const repeatedLogosBottom = [...logosBottom, ...logosBottom, ...logosBottom, ...logosBottom];

    return (
        <>
            {/*
              4. Updated Embedded CSS for Marquee Animations.
                 - Maintains the same animation logic but now works within centered container
            */}
            <style>
                {`
                    @keyframes marquee-lr {
                        0% { transform: translateX(0%); }
                        100% { transform: translateX(-75%); }
                    }
                    .animate-marquee-lr {
                        animation: marquee-lr 80s linear infinite;
                    }

                    @keyframes marquee-rl {
                        0% { transform: translateX(-75%); }
                        100% { transform: translateX(0%); }
                    }
                    .animate-marquee-rl {
                        animation: marquee-rl 80s linear infinite;
                    }
                `}
            </style>

            {/* 5. Updated structure with centered container and side spacing */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 tracking-tight">Our Clients</h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
                            We are proud to have partnered with a diverse range of clients who trust us to deliver exceptional results.
                        </p>
                    </div>

                    {/* Centered Marquee Container with Side Spacing */}
                    <div className="relative mx-auto max-w-6xl px-8 overflow-hidden">
                        <div className="relative flex flex-col gap-8">
                            {/* Marquee 1 (Scrolls from Right to Left) */}
                            <div className="flex w-max animate-marquee-lr">
                                {repeatedLogosTop.map((logoSrc, index) => (
                                    <div key={`top-${index}`} className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-6">
                                        <img
                                            src={logoSrc}
                                            alt={`Client Logo ${index + 1}`}
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Marquee 2 (Scrolls from Left to Right) */}
                            <div className="flex w-max animate-marquee-rl">
                                {repeatedLogosBottom.map((logoSrc, index) => (
                                    <div key={`bottom-${index}`} className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-6">
                                        <img
                                            src={logoSrc}
                                            alt={`Client Logo ${index + logosTop.length + 1}`}
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeClient;