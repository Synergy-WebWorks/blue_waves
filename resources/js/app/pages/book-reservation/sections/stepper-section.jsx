import React, { useEffect, useState } from "react";
import {
    CheckIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/react/24/outline";
import BookFirstFormSection from "./book-first-form-section";
import BookSecondFormSection from "./book-second-form-section";
import BookThirdFormSection from "./book-third-form-section";
import { useSelector } from "react-redux";
import store from "@/app/store/store";
import { create_booking_info_thunk } from "@/app/redux/booking-info-thunk";
import moment from "moment";
import { router } from "@inertiajs/react";
import { get_term_by_id_thunk } from "@/app/redux/term-thunk";

export default function StepperSection() {
    const [currentStep, setCurrentStep] = useState(1); // Set the first step as current (1-based index)

    const { selected, customer, search } = useSelector((store) => store.app);
    const [loading, setLoading] = useState(false);
    const params = new URLSearchParams(window.location.search);
    const start = params.get("start");
    const end = params.get("end");
    const [accept, setAccept] = useState(false);
    const steps = [
        { id: "01", name: "Booking Order", description: "Completed" },
        { id: "02", name: "Confirm Booking", description: "Current" },
        { id: "03", name: "Terms & Condition", description: "Upcoming" },
        // { id: "04", name: "Booking Review", description: "Upcoming" },
        // { id: "05", name: "Payment Section", description: "Upcoming" },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    const id = 1
    useEffect(() => {
        store.dispatch(get_term_by_id_thunk(id))
    }, []);

    // Determine the dynamic status of each step
    const updateStepStatus = () =>
        steps.map((step, index) => ({
            ...step,
            status:
                index + 1 < currentStep
                    ? "complete"
                    : index + 1 === currentStep
                        ? "current"
                        : "upcoming",
        }));

    const stepsWithStatus = updateStepStatus();

    const handleNext = () => {
        if (currentStep < steps.length) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        }
    };
    function getDayGap(startDate, endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const difference = (end - start) / (1000 * 60 * 60 * 24);
        return difference == 0 ? 1 : difference;
    }
    const gap = getDayGap(search.start, search.end);

    const totalRate =
        selected.reduce((sum, item) => sum + Number(item.rate), 0) * gap;

    const adults_rate = customer.adults;
    const children_rate = customer.children;
    const overall = parseInt(totalRate) + customer.children + customer.adults;
    const down_payment =
        (parseInt(totalRate) + customer.children + customer.adults) / 2;

    async function submitHandler(params) {
        setLoading(true);
        try {
            const reference_id = moment().format("MDDYYYYHHmmss");
            await store.dispatch(
                create_booking_info_thunk({
                    ...customer,
                    selected,
                    reference_id: reference_id,
                    submitted_date: moment().format("LLL"),
                    start: start,
                    end: end,
                    adults: adults_rate,
                    children: children_rate,
                    total: overall,
                    initial: down_payment,
                    status: "pending",
                    gap: gap,
                })
            );
            setLoading(false);
            router.visit(`/online-payment?reference_id=${reference_id}`);
        } catch (error) {
            setLoading(false);
        }
    }
    const handleStepClick = (stepIndex) => {
        setCurrentStep(stepIndex + 1);
    };

    // Render the current form based on the current step
    const renderCurrentForm = () => {
        switch (currentStep) {
            case 1:
                return <BookFirstFormSection />;
            case 2:
                return <BookSecondFormSection />;
            case 3:
                return <BookThirdFormSection setAccept={setAccept} />;
            // case 4:
            //     return <FourthFormSection />;
            // case 5:
            //     return <FifthFormSection />;
            default:
                return null;
        }
    };

    return (
        <div>
            <div className="lg:border-b lg:border-t lg:border-gray-200 mt-5 mb-5">
                <nav aria-label="Progress" className="hidden lg:block">
                    <ol
                        role="list"
                        className="overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-b lg:border-gray-200"
                    >
                        {stepsWithStatus.map((step, stepIdx) => (
                            <li
                                key={step.id}
                                className="relative overflow-hidden lg:flex-1"
                            >
                                {/* Separator for all steps except the first */}
                                {stepIdx > 0 && (
                                    <div
                                        aria-hidden="true"
                                        className="absolute inset-0 left-0 top-0 hidden w-3 lg:block"
                                    >
                                        <svg
                                            fill="none"
                                            viewBox="0 0 12 82"
                                            preserveAspectRatio="none"
                                            className="size-full text-gray-300"
                                        >
                                            <path
                                                d="M0.5 0V31L10.5 41L0.5 51V82"
                                                stroke="currentColor"
                                                vectorEffect="non-scaling-stroke"
                                            />
                                        </svg>
                                    </div>
                                )}
                                <div
                                    className={classNames(
                                        stepIdx === 0
                                            ? "rounded-t-md border-b-0"
                                            : "",
                                        stepIdx === steps.length - 1
                                            ? "rounded-b-md border-t-0"
                                            : "",
                                        "overflow-hidden border  border-gray-200 lg:border-0"
                                    )}
                                >
                                    <button
                                        // onClick={() => handleStepClick(stepIdx)}
                                        className="group w-full text-left:"
                                    >
                                        {step.status === "complete" ? (
                                            <>
                                                <span
                                                    aria-hidden="true"
                                                    className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                                                />
                                                <span
                                                    className={classNames(
                                                        stepIdx !== 0
                                                            ? "lg:pl-9"
                                                            : "",
                                                        "flex items-start px-6 py-5 text-sm font-medium"
                                                    )}
                                                >
                                                    <span className="shrink-0">
                                                        <span className="flex size-10 items-center justify-center rounded-full bg-cyan-600">
                                                            <CheckIcon
                                                                aria-hidden="true"
                                                                className="size-6 text-white"
                                                            />
                                                        </span>
                                                    </span>
                                                    <span className="ml-4 mt-0.5 flex min-w-0 flex-col">
                                                        <span className="text-sm font-medium">
                                                            {step.name}
                                                        </span>
                                                        <span className="text-sm font-medium text-gray-500">
                                                            Completed
                                                        </span>
                                                    </span>
                                                </span>
                                            </>
                                        ) : step.status === "current" ? (
                                            <>
                                                <span
                                                    aria-hidden="true"
                                                    className="absolute left-0 top-0 h-full w-1 bg-cyan-600 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                                                />
                                                <span
                                                    className={classNames(
                                                        stepIdx !== 0
                                                            ? "lg:pl-9"
                                                            : "",
                                                        "flex items-start px-6 py-5 text-sm font-medium"
                                                    )}
                                                >
                                                    <span className="shrink-0">
                                                        <span className="flex size-10 items-center justify-center rounded-full border-2 border-cyan-600">
                                                            <span className="text-cyan-600">
                                                                {step.id}
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span className="ml-4 mt-0.5 flex min-w-0 flex-col">
                                                        <span className="text-sm font-medium text-cyan-600">
                                                            {step.name}
                                                        </span>
                                                        <span className="text-sm font-medium text-gray-500">
                                                            Current
                                                        </span>
                                                    </span>
                                                </span>
                                            </>
                                        ) : (
                                            <>
                                                <span
                                                    aria-hidden="true"
                                                    className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                                                />
                                                <span
                                                    className={classNames(
                                                        stepIdx !== 0
                                                            ? "lg:pl-9"
                                                            : "",
                                                        "flex items-start px-6 py-5 text-sm font-medium"
                                                    )}
                                                >
                                                    <span className="shrink-0">
                                                        <span className="flex size-10 items-center justify-center rounded-full border-2 border-gray-300">
                                                            <span className="text-gray-500">
                                                                {step.id}
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span className="ml-4 mt-0.5 flex min-w-0 flex-col">
                                                        <span className="text-sm font-medium text-gray-500">
                                                            {step.name}
                                                        </span>
                                                        <span className="text-sm font-medium text-gray-500">
                                                            Upcoming
                                                        </span>
                                                    </span>
                                                </span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ol>
                </nav>

                <div className="mb-8 mt-4 p-4">{renderCurrentForm()}</div>
                <div className="fixed bottom-0 mt-14 h-0 flex items-center justify-between w-full p-16">
                    <button
                        onClick={handlePrevious}
                        className="px-6 py-2 bg-[rgba(45,55,72,0.6)] hover:bg-[rgba(45,55,72,0.8)] text-white rounded-md "
                        disabled={currentStep === 1}
                    >
                        Previous
                    </button>
                    <button
                        onClick={
                            currentStep === steps.length
                                ? () => submitHandler()
                                : handleNext
                        }
                        disabled={
                            selected.length == 0 ||
                            loading ||
                            (!accept && currentStep == 3)
                        }
                        className={`px-6 py-2 text-white ${selected.length == 0 ||
                            loading ||
                            (!accept && currentStep == 3)
                            ? "bg-[rgba(45,55,72,0.6)] hover:bg-[rgba(45,55,72,0.8)] text-white"
                            : "bg-cyan-600 hover:bg-cyan-700 text-white"
                            }}  rounded-md `}
                    >
                        {loading ? (
                            <>Loading...</>
                        ) : currentStep === steps.length - 1 ? (
                            "Proceed to Checkout"
                        ) : currentStep === steps.length ? (
                            "Proceed to Online Payment"
                        ) : (
                            "Proceed"
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
