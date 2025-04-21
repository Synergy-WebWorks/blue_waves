import React from "react";
import { useSelector } from "react-redux";
import ViewActivityImageSection from "./view-activity-image-section";

// const activities = [
//     {
//         id: "1",
//         name: "Kayaking",
//         options: "Paddle through Paradise",
//         imageUrl:
//             "/images/kayak.jpeg",
//         bio: "Embark on a thrilling kayaking adventure across the tranquil waters of our resort. Glide through crystal-clear waters, with the sea breeze in your hair and stunning views of the coastline surrounding you. Whether you’re a beginner or a seasoned paddler, kayaking is a perfect way to explore hidden coves, serene beaches, and peaceful mangroves at your own pace."
//     },
//     {
//         id: "2",
//         name: "Diving",
//         options: "Dive into the Depths",
//         imageUrl:
//             "/images/diver.jpeg",
//         bio: "Discover the underwater world like never before with our world-class diving experiences. Dive into the vibrant marine life of our pristine reefs, where colorful fish, graceful sea turtles, and thriving coral gardens await. Our experienced diving instructors will guide you through each dive, ensuring you enjoy a safe and memorable underwater journey. Whether you're an experienced diver or a beginner eager to explore, there's a world beneath the waves waiting for you."
//     },
//     {
//         id: "3",
//         name: "Coral Watching",
//         options: "Explore the Coral Kingdom",
//         imageUrl:
//             "/images/diving.jpg",
//         bio: "Take a boat tour to witness the magical coral gardens that lie beneath the surface. With a guided coral watching experience, you'll explore the vibrant marine ecosystems teeming with life. Enjoy the view of delicate coral formations and colorful marine species without even getting your feet wet. Perfect for those who want to admire the ocean’s beauty from above the water, this experience will leave you in awe of the biodiversity beneath the waves."
//     },


//     // More people...
// ];
export default function ActivitySection() {
    const { activities } = useSelector((state) => state.activities)
    console.log('activitisses', activities)
    return (
        <>
            {/* Sale and testimonials */}
            <div className="relative overflow-hidden mt-5">
                {/* Decorative background image and gradient */}
                <div aria-hidden="true" className="absolute inset-0">
                    <div className="absolute inset-0 mx-auto max-w-full overflow-hidden xl:px-8">
                        <img
                            alt=""
                            src="/images/overlay3.jpg"
                            className="size-full object-cover rounded-md"
                        />
                    </div>
                    <div className="absolute inset-0 bg-white/50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white" />
                </div>

                {/* Sale */}
                <section
                    aria-labelledby="sale-heading"
                    className="relative mx-auto max-w-full flex flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
                >
                    <div className="mx-auto max-w-full lg:max-w-none">
                        <h2
                            id="sale-heading"
                            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
                        >
                            Island Adventures
                        </h2>
                        <p className="mx-auto mt-4 max-w-7xl text-xl text-gray-700">
                            At Blue Waves Resort, we offer an array of
                            unforgettable activities that allow you to embrace
                            the beauty of nature while creating lasting
                            memories. Whether you're seeking relaxation or
                            adventure, there's something for everyone to enjoy.
                        </p>

                    </div>
                </section>

                <section
                    aria-labelledby="testimonial-heading"
                    className="relative mx-auto max-w-screen-2xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
                >
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                        <ul
                            role="list"
                            className="mt-1 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0"
                        >
                            {activities?.result?.map((activity) => {
                                if (activity.status === "Active") {
                                    const plainText = activity.description
                                    return (
                                        <li key={activity.id}>
                                            <ViewActivityImageSection data={activity} />
                                            <h3 className="mt-6 text-lg/8 font-semibold text-gray-900">
                                                {activity.name}
                                            </h3>
                                            <p className="text-base/7 text-gray-600">
                                                {activity.intro}
                                            </p>
                                            <div className="prose prose-custom prose-sm mt-4 text-base/7">
                                                <div dangerouslySetInnerHTML={{ __html: plainText }} />
                                            </div>
                                            <ul
                                                role="list"
                                                className="mt-6 flex gap-x-6"
                                            >
                                            </ul>
                                        </li>
                                    );
                                }
                                return null;
                            })}
                        </ul>
                    </div>
                </section>
            </div>
        </>
    );
}
