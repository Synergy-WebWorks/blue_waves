import React from "react";
import {
    BuildingOffice2Icon,
    EnvelopeIcon,
    PhoneIcon,
} from "@heroicons/react/24/outline";
import { FaFacebook } from "react-icons/fa6";

const navigation = {
    social: [
        {
            name: "Facebook",
            href: "https://www.facebook.com/SipawayBeachResort?mibextid=ZbWKwL",
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
    ],
};

export default function ContactSection() {
    return (
        <div className="relative isolate">
        <div className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
          <div className="w-full">
            <div className="mx-auto w-full p-4 sm:px-6 lg:px-60">
              <h2 className="text-pretty text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Get in touch
              </h2>
              <p className="mt-6 text-lg text-gray-300 sm:text-xl">
                We’d love to hear from you! Whether you’re planning your next getaway, have a question about our services, or need assistance, our team is here to help. Reach out to us, and let’s make your stay unforgettable. Feel free to reach out to us using the contact details below or give us a call. We look forward to welcoming you soon!
              </p>
              <dl className="mt-10 space-y-4 text-base text-gray-200">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-200"
                    />
                  </dt>
                  <dd>
                    Brgy. Ermita, Sipaway Island
                    <br />
                    Negros Occidental
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-200"
                    />
                  </dt>
                  <dd>
                    <a
                      href="tel:+1 (555) 234-5678"
                      className="hover:text-gray-900"
                    >
                      +63 (956) 177-1701
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-200"
                    />
                  </dt>
                  <dd>
                    <a
                      href="mailto:bluewavesresort146@gmail.com"
                      className="hover:text-gray-900"
                    >
                      bluewavesresort146@gmail.com
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Facebook</span>
                    <FaFacebook
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-200"
                    />
                  </dt>
                  <dd>
                    <a
                      href="https://www.facebook.com/SipawayBeachResort?mibextid=ZbWKwL"
                      className="hover:text-gray-900"
                    >
                      https://www.facebook.com/SipawayBeachResort?mibextid=ZbWKwL
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          {/* Form Section */}
          {/* Uncomment this block if the form is needed */}
          {/* <form
            action="#"
            method="POST"
            className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-15"
          >
            <div className="lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold text-gray-900"
                  >
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="phone-number"
                      name="phone-number"
                      type="tel"
                      autoComplete="tel"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-900"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <EnvelopeIcon className="h-5 w-5 mr-2" />
                  Send message
                </button>
              </div>
            </div>
          </form> */}
        </div>
      </div>
      
    );
}
