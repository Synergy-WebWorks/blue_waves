const people = [
    {
        name: "Mary Joy C. Sari",
        role: "System Analyst",
        imageUrl: "/images/sari.png",
        contact: "+639691481638",
        email: "maryjoysari62@gmail.com",
    },
    {
        name: "Hann Samm A. Beleganio",
        role: "Full Stack Developer",
        imageUrl: "/images/hannsam.png",
        contact: "+639358627245",
        email: "hannsammbeleganio@gmail.com",
    },
    {
        name: "Luciana  O. Donal",
        role: "UI/UX Designer",
        imageUrl: "/images/yana.png",
        contact: "+639705342003",
        email: "donalluciana373@gmail.com",
    },
    // More people...
];

export default function ContactTeamSection() {
    return (
        <div className="bg-white py-32">
            <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-34l font-semibold tracking-tight text-balance text-cyan-600 sm:text-5xl">
                        Meet our Awesome Team
                    </h2>
                    <p className="mt-6 text-lg/8 text-gray-500">
                        We’re a dynamic group of individuals who are passionate
                        about what we do and dedicated to delivering the best
                        results for our clients.
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                >
                    {people.map((person) => (
                        <li key={person.name}>
                            <img
                                alt=""
                                src={person.imageUrl}
                                className="mx-auto size-56 rounded-full"
                            />
                            <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-cyan-600">
                                {person.name}
                            </h3>
                            <p className="text-sm italic font-bold text-gray-500">
                                {person.role}
                            </p>
                            <p className="mt-2 text-sm italic font-bold text-gray-400">
                                {person.email}
                            </p>
                            <p className="text-sm italic font-bold text-gray-400">
                                {person.contact}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
