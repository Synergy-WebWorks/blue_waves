import { useState, useEffect } from "react";
import HeroSection from "./sections/hero-section";
import RoomSection from "./sections/rooms-section";
import CottageSection from "./sections/cottage-section";
import ActivitySection from "./sections/activity-section";
import ContactSection from "./sections/contact-section";
import FooterSection from "./sections/footer-section";
import { ArrowUpIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import store from "@/app/store/store";
import { get_rent_thunk } from "@/app/redux/rent-thunk";
import { get_activity_thunk } from "@/app/redux/activity-thunk";
import {
    Dialog,
    Disclosure,
    // DisclosureButton,
    // DisclosurePanel,
} from "@headlessui/react";
import { Link } from "@inertiajs/react";
const navigation = [
    { name: "Rooms", href: "#rooms" },
    { name: "Cottages", href: "#cottages" },
    { name: "Activities", href: "#activities" },
    { name: "Contact Us", href: "#contact" },
];

export default function IndexPage() {
    const [activeSection, setActiveSection] = useState("");
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        store.dispatch(get_rent_thunk());
        store.dispatch(get_activity_thunk());
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
                        <Link
                            href="/user-login"
                            className="text-sm/6 font-semibold text-gray-100"
                        >
                            Log in <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                </nav>

                <Dialog
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                    className="lg:hidden"
                >
                    <div className="fixed inset-0 z-10" />
                    <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    alt=""
                                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                    className="h-8 w-auto"
                                />
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon
                                    aria-hidden="true"
                                    className="size-6"
                                />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <Disclosure as="div" className="-mx-3">
                                        {/* <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                            Product
                                            <ChevronDownIcon
                                                aria-hidden="true"
                                                className="size-5 flex-none group-data-open:rotate-180"
                                            />
                                        </DisclosureButton> */}
                                        <duv className="mt-2 space-y-2">
                                            {[
                                                ...navigation,
                                                // ...callsToAction,
                                            ].map((item) => (
                                                <Link
                                                    key={item.name}
                                                    as="a"
                                                    href={item.href}
                                                    className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </duv>
                                    </Disclosure>

                                </div>
                                <div className="py-6">
                                    <Link
                                        href="/user-login"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog>
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
