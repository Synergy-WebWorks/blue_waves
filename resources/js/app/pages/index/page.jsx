import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import HeroSection from "./sections/hero-section";
import RoomSection from "./sections/rooms-section";
import CottageSection from "./sections/cottage-section";

const navigation = [
    { name: "Rooms", href: "#" },
    { name: "Cottages", href: "#" },
    { name: "Activities", href: "#" },
    { name: "Contact Us", href: "#" },
];

export default function IndexPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div>
            <HeroSection />
            <RoomSection />
            <CottageSection/>
        </div>
    );
}
