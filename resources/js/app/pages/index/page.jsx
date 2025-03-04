import { useState, useEffect } from "react";
import HeroSection from "./sections/hero-section";
import RoomSection from "./sections/rooms-section";
import CottageSection from "./sections/cottage-section";
import ActivitySection from "./sections/activity-section";
import ContactSection from "./sections/contact-section";
import FooterSection from "./sections/footer-section";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import store from "@/app/store/store";
import { get_rent_thunk } from "@/app/redux/rent-thunk";
import { get_activity_thunk } from "@/app/redux/activity-thunk";

const navigation = [
    { name: "Rooms", href: "#rooms" },
    { name: "Cottages", href: "#cottages" },
    { name: "Activities", href: "#activities" },
    { name: "Contact Us", href: "#contact" },
];

export default function IndexPage() {
    const [activeSection, setActiveSection] = useState("");
    const [showScrollToTop, setShowScrollToTop] = useState(false);


    useEffect(() => {
        store.dispatch(get_rent_thunk())
        store.dispatch(get_activity_thunk())
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollToTop(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavigationClick = (e, target) => {
        e.preventDefault(); // Prevent default link behavior

        const targetSection = document.querySelector(target); // Get section by ID
        if (targetSection) {
            const headerOffset = 80; // Adjust this value if needed (depends on navbar height)
            const elementPosition =
                targetSection.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            <header className="absolute inset-x-0 top-0 z-50">
                <nav
                    aria-label="Global"
                    className="mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-8"
                >
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Blue Waves Resort</span>
                            <div className="flex flex-row gap-x-3">
                                <img
                                    alt=""
                                    src="/images/blue_waves.png"
                                    className="h-12 w-12"
                                />
                                <div className="flex flex-col">
                                    <h3 className="text-lg text-white font-medium">
                                        Blue Waves Resort
                                    </h3>
                                    <p className="text-gray-100 text-xs font-medium italic">
                                        Brgy. Ermita, Sipaway Island, San Carlos
                                        City
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) =>
                                    handleNavigationClick(e, item.href)
                                }
                                className={`text-md/8 font-semibold text-gray-200 hover:text-white ${activeSection === item.href.slice(1)
                                        ? "text-white"
                                        : ""
                                    }`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a
                            href="/user-login"
                            className="text-sm/6 font-semibold text-gray-100"
                        >
                            Log in <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </nav>
            </header>
            <main>
                <section id="home">
                    <HeroSection />
                </section>
                <section id="rooms">
                    <RoomSection />
                </section>
                <section id="cottages">
                    <CottageSection />
                </section>
                <section id="activities">
                    <ActivitySection />
                </section>
                <section id="contact">
                    <ContactSection />
                </section>
                <FooterSection />
            </main>

            {showScrollToTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-3 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
                >
                    <ArrowUpIcon className="size-4" />
                </button>
            )}
        </div>
    );
}
