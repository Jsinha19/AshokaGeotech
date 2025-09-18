/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

// Data for services with attached images
type Service = {
  image: string;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    image: "/1.jpg",
    title: "NABL",
    description:
      "NABL (National Accreditation Board for Testing and Calibration Laboratories) ensures laboratories meet rigorous quality and technical standards. Accreditation covers a wide range of tests and calibrations for diverse sectors including healthcare, manufacturing, and research. Achieving NABL certification demonstrates a commitment to accuracy, reliability, and competence in lab results, enhancing credibility with clients and regulators.",
  },
  {
    image: "/2.jpg",
    title: "NDT",
    description:
      "Non-Destructive Testing (NDT) is crucial for quality assurance in industries such as construction, oil & gas, and aerospace. Our NDT services utilize ultrasonic, magnetic particle, radiographic, and liquid penetrant testing to assess material and structural integrity without causing damage. With certified personnel and advanced technology, we help clients ensure safety, minimize downtime, and comply with industry standards.",
  },
  {
    image: "/3.jpg",
    title: "Geotechnical",
    description:
      "Geotechnical services include comprehensive site investigations, soil analysis, and foundation recommendations for safe and cost-effective construction. Our team provides borehole drilling, geophysical surveys, and slope stability analysis for infrastructure, buildings, and industrial projects. We deliver actionable data and engineering advice to help mitigate risks associated with ground conditions.",
  },
];

function ScrollItem({ image, title, description }: Service) {
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll progress of individual element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "center 60%"],
  });

  // Animation transforms
  const xLeft = useTransform(scrollYProgress, [0, 1], [-40, 0]);
  const xRight = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <motion.div ref={ref} className="p-6 text-center">
        <motion.div
          className="rounded-lg overflow-hidden md:w-[400px] w-[100%] mx-auto"
          style={{
            height: "300px",
            boxShadow:
              "0 8px 40px 0 rgba(0,0,0,0.38), 0 2px 8px 0 rgba(0,0,0,0.35)",
            filter: "blur(0.2px)",
            x: xLeft,
            opacity,
          }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
      <motion.div
        ref={ref}
        style={{
          x: xRight,
          opacity,
        }}
      >
        <h3 className="text-2xl py-2 font-bold mb-4 text-left">{title}</h3>
        <p className="mb-3 font-light text-left">{description}</p>
      </motion.div>
    </>
  );
}

const ServicesMain: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Simple heading */}
      <h2 className="text-3xl font-bold mt-10 mb-8 text-center">
        Our Services
      </h2>
      <div className="container mx-auto p-6 mb-16">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((item, index) => (
            <React.Fragment key={index}>
              <ScrollItem
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesMain;
