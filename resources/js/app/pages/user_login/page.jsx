import { useEffect } from "react";
import CarouselComponent from "./components/carousel-component";
import { Head, Link, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";

export default function Login({ status }) {

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    
    const slides = [
        "/images/2.png",
        "/images/1.jpg",
        "/images/3.jpg",
        "/images/4.jpg",
    ];

   
    const submit = (e) => {
        e.preventDefault();

        post(route('auth.login'), {
            onFinish: () => reset('password'),
        });
    };
    console.log('status',status)
    return (
        <>
            <div className="flex min-h-screen flex-1">
                <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-gradient-to-r from-indigo-500 to-10% via-sky-500 via-30% to-emerald-500 to-100%">
                    <div className="mx-auto w-full max-w-sm lg:w-96 ">
                        <div>
                            <div className="flex flex-row pb-3">
                                <img
                                    alt="Your Company"
                                    src="/images/blue_waves.png"
                                    className="h-16 w-16"
                                />
                                <h2 className="mt-5 ml-3 text-3xl font-bold tracking-tight text-white">
                                    Blue Waves Resort
                                </h2>
                            </div>
                            <hr />
                            <h2 className="mt-4 text-2xl/9 font-bold tracking-tight text-gray-100">
                                Sign in to your account
                            </h2>
                        </div>

                        {status && (
                            <div className="mb-4 font-medium text-sm text-green-600">
                                {status}
                            </div>
                        )}

                        <div className="mt-10">
                            <div>
                                {status && (
                                    <div className="mb-4 font-medium text-sm text-green-600">
                                        {status}
                                    </div>
                                )}

                                <form onSubmit={submit} className="space-y-6">
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm/6 font-medium text-gray-100"
                                        >
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={data.email}
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value
                                                    )
                                                }
                                                
                                                autoComplete="email"
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            />

                                            <InputError
                                                message={errors.email}
                                                className="mt-2"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="block text-sm/6 font-medium text-gray-100"
                                        >
                                            Password
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                value={data.password}
                                                onChange={(e) =>
                                                    setData(
                                                        "password",
                                                        e.target.value
                                                    )
                                                }
                                                
                                                autoComplete="current-password"
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            />

                                            <InputError
                                                message={errors.password}
                                                className="mt-2"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-3">
                                            <div className="flex h-6 shrink-0 items-center">
                                                <div className="group grid size-4 grid-cols-1">
                                                    <input
                                                        id="remember-me"
                                                        name="remember-me"
                                                        type="checkbox"
                                                        checked={data.remember}
                                                        onChange={(e) =>
                                                            setData(
                                                                "remember",
                                                                e.target.checked
                                                            )
                                                        }
                                                        className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                    />
                                                    <svg
                                                        fill="none"
                                                        viewBox="0 0 14 14"
                                                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                    >
                                                        <path
                                                            d="M3 8L6 11L11 3.5"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="opacity-0 group-has-[:checked]:opacity-100"
                                                        />
                                                        <path
                                                            d="M3 7H11"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <label
                                                htmlFor="remember-me"
                                                className="block text-sm/6 text-gray-100"
                                            >
                                                Remember me
                                            </label>
                                        </div>

                                        <div className="text-sm/6">
                                            <a
                                                href="#"
                                                className="font-semibold text-white hover:text-white"
                                            >
                                                Forgot password?
                                            </a>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                        disabled={processing}
                                            type="submit"
                                            className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                           {processing?"Loading...":"Sign in"} 
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative hidden flex-1 lg:block">
                    <div className="max-w-full">
                        <CarouselComponent autoSlide={true}>
                            {[
                                ...slides.map((s,i) => (
                                    <img
                                    key={i}
                                        src={s}
                                        className="w-full h-screen object-cover"
                                    />
                                )),
                            ]}
                        </CarouselComponent>
                    </div>
                </div>
            </div>
        </>
    );
}
