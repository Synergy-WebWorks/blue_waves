import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Datepicker from "react-tailwindcss-datepicker";
import BookingDetailsComponent from "../components/booking-details-component";
import { FaHouseCircleCheck } from "react-icons/fa6";

const NEXT_MONTH = new Date();
NEXT_MONTH.setMonth(NEXT_MONTH.getMonth() + 1);

const navigation = [
    { name: "Rooms", href: "#rooms" },
    { name: "Cottages", href: "#cottages" },
    { name: "Activities", href: "#activities" },
    { name: "Contact Us", href: "#contact" },
];

export default function IndexPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dateRange, setDateRange] = useState({
        startDate: new Date(),
        endDate: null,
    });
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return (
        <div className="bg-gradient-to-r from-indigo-500 to-10% via-sky-500 via-30% to-emerald-500 to-100%">
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
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-md/8 font-semibold text-gray-200 hover:text-white"
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
                <div className="relative isolate">
                    <div className="overflow-hidden">
                        <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                                    <h1 className="text-pretty text-5xl font-semibold tracking-tight text-gray-200 sm:text-7xl">
                                        Your Oceanfront Getaway Awaits
                                    </h1>
                                    <p className="mt-8 text-pretty text-lg font-medium text-gray-50 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                                        Leave the world behind and discover a
                                        sanctuary by the sea. From tranquil
                                        mornings on the beach to vibrant
                                        evenings under the stars, our resort is
                                        your gateway to unforgettable moments,
                                        where the ocean becomes your haven and
                                        time slows down.
                                    </p>
                                    <div className="mt-10 w-full max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-6 ring-1 ring-gray-900/5">
                                        <h3 className="text-lg font-semibold text-teal-600 mb-4">
                                            <FaHouseCircleCheck className="size-6 float-left text-teal-600 mr-2"/>
                                            Room/Cottages Availability
                                        </h3>

                                        <div className="flex flex-wrap sm:flex-nowrap gap-2 w-full">
                                            {/* Datepicker - Full width on small screens */}
                                            <div className="w-full flex-1">
                                                <Datepicker
                                                    primaryColor={"teal"}
                                                    value={dateRange}
                                                    onChange={(newValue) =>
                                                        setDateRange(newValue)
                                                    }
                                                    minDate={today}
                                                    separator="to"
                                                    displayFormat="MM/DD/YYYY"
                                                    popoverDirection="up"
                                                    showShortcuts={false}
                                                    className="w-full"
                                                />
                                            </div>

                                            {/* Booking Details Component - Full width on small screens */}
                                            <div className="w-full flex-1">
                                                <BookingDetailsComponent />
                                            </div>

                                            {/* Search Button */}
                                            <div className="w-full sm:w-auto">
                                                <button className="w-full sm:w-auto px-6 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition">
                                                    Search
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                                    <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                        <div className="relative">
                                            <img
                                                alt=""
                                                src="images/Activities/Floating Cottage (1pc)/1.jpeg"
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                    </div>
                                    <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                        <div className="relative">
                                            <img
                                                alt=""
                                                src="images/Bluewaves Background/FB_IMG_1737372686066.jpg"
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                        <div className="relative">
                                            <img
                                                alt=""
                                                src="/images/Bluewaves Background/FB_IMG_1737372650357.jpg"
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                    </div>
                                    <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                        <div className="relative">
                                            <img
                                                alt=""
                                                src="/images/Bluewaves Background/FB_IMG_1737372756507.jpg"
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                        <div className="relative">
                                            <img
                                                alt=""
                                                src="/images/overlay.jpg"
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
