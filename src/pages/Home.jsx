import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../components/ui/button';
import ManPower from '@/assets/services/ManPower.jpg'

import facilitymanagement from '@/assets/services/facilitymanagement.jpg'
import contractEngineering from '@/assets/services/contractEngineering.jpg'
import tradingSupply from '@/assets/services/tradingSupply.jpg'
import ManPtransportationower from '@/assets/services/transportation.jpg'
import Realestate from '@/assets/services/Realestate.jpg'
import Client1 from '@/assets/logos/Client-1.png'
import Client2 from '@/assets/logos/Client-2.png'
import Client3 from '@/assets/logos/Client-3.png'
import Client4 from '@/assets/logos/Client-4.png'
import Client5 from '@/assets/logos/Client-5.png'
import Client6 from '@/assets/logos/Client-6.png'
import Client7 from '@/assets/logos/Client-7.png'
import Client8 from '@/assets/logos/Client-8.png'
import Client9 from '@/assets/logos/Client-9.png'
import Client10 from '@/assets/logos/Client-10.png'
import Client11 from '@/assets/logos/Client-11.png'

import Marquee from "react-fast-marquee";

// Import Leaflet components and CSS
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Home = () => {
    // Sample client logos for the carousel
    const clientLogos = [
        { id: 1, name: Client1 },
        { id: 2, name: Client2 },
        { id: 3, name: Client3 },
        { id: 4, name: Client4 },
        { id: 5, name: Client5 },
        { id: 6, name: Client6 },
        { id: 7, name: Client7 },
        { id: 8, name: Client8 },
        { id: 9, name: Client9 },
        { id: 10, name: Client10 },
        { id: 11, name: Client11 },
    ];

    // Core services data
    const coreServices = [
        {
            id: 1,
            title: "Manpower Support",
            description: "Skilled workforce solutions",
            image: ManPower
        },
        {
            id: 2,
            title: "Contracting & Engineering",
            description: "Construction and engineering services",
            image: contractEngineering
        },
        {
            id: 3,
            title: "Trading & Supply",
            description: "Building materials and equipment",
            image: tradingSupply
        },
        {
            id: 4,
            title: "Transportation & Limousine",
            description: "Corporate transport solutions",
            image: ManPtransportationower
        },
        {
            id: 5,
            title: "Corporate & Real Estate",
            description: "Business setup and property services",
            image: Realestate
        },
        {
            id: 6,
            title: "Facility Management",
            description: "Comprehensive facility services",
            image: facilitymanagement
        },
    ];

    // Statistics data
    const statistics = [
        { id: 1, value: "16", label: "Years of Experience", suffix: "+" },
        { id: 2, value: "1500", label: "Strong Workforce", suffix: "+" },
        { id: 3, value: "4", label: "Countries Served", suffix: "+" },
        { id: 4, value: "1000", label: "Projects Completed", suffix: "s" },
    ];

    // Auto counter effect
    const [counters, setCounters] = useState({});
    const [animated, setAnimated] = useState(false);
    const statsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !animated) {
                        setAnimated(true);
                        statistics.forEach((stat) => {
                            let start = 0;
                            const end = parseInt(stat.value);
                            const duration = 2000; // ms
                            const increment = end / (duration / 16); // 60fps

                            const timer = setInterval(() => {
                                start += increment;
                                if (start >= end) {
                                    setCounters(prev => ({ ...prev, [stat.id]: end }));
                                    clearInterval(timer);
                                } else {
                                    setCounters(prev => ({ ...prev, [stat.id]: Math.ceil(start) }));
                                }
                            }, 16);
                        });
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, [animated, statistics]);

    return (
        <div className="pt-16"> {/* Added padding top to account for fixed header */}
            {/* Hero Section */}
            <section className="relative text-gray-900 py-20 transition-colors h-screen flex items-center justify-center">
                <div className="absolute inset-0 overflow-hidden">
                    <video
                        autoPlay
                        muted
                        loop
                        className="w-full h-full object-cover opacity-50"
                    >
                        <source src="/videos/constructionfield.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Premier Integrated Business Solutions in the GCC</h1>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Delivering excellence in Manpower, Contracting, and Corporate Services with over 16 years of experience
                    </p>
                    <a href='/services'>
                        <Button variant="gold" className="font-bold py-3 px-8 text-lg">
                            Explore Our Services
                        </Button>
                    </a>
                </div>
            </section>

            {/* Core Services */}
            <section className="py-16 bg-gray-50 transition-colors duration-300 p-5 ">
                <div className=" ">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Core Services</h2>
                    <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {coreServices.map((service) => (
                            <div
                                key={service.id}
                                className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg 
             transition transform duration-300 ease-in-out 
             hover:-translate-y-5 hover:scale-105 group "
                            >
                                {/* Background Image */}
                                <img
                                    src={`${service.image}`}
                                    alt={service.title}
                                    className='h-[220px] object-cover w-full'
                                />

                                {/* Dark overlay for readability */}
                                <div className="absolute inset-0 bg-gray-900/30  group-hover:bg-black/30   "></div>

                                {/* Content above image */}
                                <div className="relative z-10 p-6 text-white">
                                    <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                                    <p className="mb-4">{service.description}</p>
                                    <a
                                        href={`/services`}
                                        className="font-medium hover:underline text-yellow-300"
                                    >
                                        Learn More →
                                    </a>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose MAS Group */}
            <section className="py-16 bg-white transition-colors duration-300" ref={statsRef}>
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose MAS Group?</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {statistics.map((stat) => (
                            <div key={stat.id} className="text-center">
                                <div className="text-4xl font-bold text-yellow-600 mb-2">
                                    {counters[stat.id] || 0}{stat.suffix}
                                </div>
                                <div className="text-gray-700">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trusted By Industry Leaders */}
            <section className="py-16  transition-colors duration-300 container mx-auto">
                <div className="px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Trusted By Industry Leaders
                    </h2>

                    <Marquee
                        speed={75} gradient={false} loop={0} autoFill={true}
                    >
                        {clientLogos.map((logo) => (
                            <div
                                key={logo.id}
                                className="flex items-center justify-center bg-white p-6 rounded-lg shadow-sm w-30 h-35 mx-6 border border-gray-200"
                            >
                                <span className="font-medium text-gray-700">
                                    <img src={logo.name} alt="" className='w-full h-full' />
                                </span>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </section>

            {/* Global Presence and Final CTA */}
            <section className="py-16 bg-white transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Global Presence - Map */}
                        <div>
                            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Global Presence</h2>
                            <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
                                <MapContainer
                                    center={[25.276987, 55.296249]}
                                    zoom={3}
                                    style={{ height: '100%', width: '100%' }}
                                    className="z-0"
                                >
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    />
                                    {/* Marker for Qatar */}
                                    <Marker position={[25.276987, 55.296249]}>
                                        <Popup>
                                            MAS Group HQ <br /> Qatar
                                        </Popup>
                                    </Marker>
                                    {/* Marker for UAE */}
                                    <Marker position={[24.453889, 54.377333]}>
                                        <Popup>
                                            MAS Group Branch <br /> UAE
                                        </Popup>
                                    </Marker>
                                    {/* Marker for Saudi Arabia */}
                                    <Marker position={[24.713552, 46.675296]}>
                                        <Popup>
                                            MAS Group Branch <br /> Saudi Arabia
                                        </Popup>
                                    </Marker>
                                    {/* Marker for Oman */}
                                    <Marker position={[23.588200, 58.382880]}>
                                        <Popup>
                                            MAS Group Branch <br /> Oman
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                            </div>
                        </div>

                        {/* Final CTA */}
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-center">
                                <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to start your next project?</h2>
                                <p className="text-lg mb-8 text-gray-700 max-w-md mx-auto">
                                    Contact us today for a free consultation and quote tailored to your business needs.
                                </p>
                                <Button variant="gold" className="font-bold py-3 px-8 text-lg">
                                    Get a Quote Today
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;