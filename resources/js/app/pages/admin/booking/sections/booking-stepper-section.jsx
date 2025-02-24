import React, { useState } from "react";
import { CheckIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import FirstFormSection from "./first-form-section";
import SecondFormSection from "./second-form-section";
import store from "@/app/store/store";
import { create_booking_info_thunk } from "@/app/redux/booking-info-thunk";
import moment from "moment";
import { router } from "@inertiajs/react";
import { useSelector } from "react-redux";

export default function RegistrationStepperSection() {
    const [currentStep, setCurrentStep] = useState(1); // Set the first step as current (1-based index)

    const { selected, customer } = useSelector((store) => store.app);
    const [loading, setLoading] = useState(false);
    const steps = [
        { id: "01", name: "Booking Order", description: "Completed" },
        { id: "02", name: "Confirm Booking", description: "Current" },
    ];
    const params = new URLSearchParams(window.location.search);
    const start = params.get("start");
    const end = params.get("end");
    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

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

    const handleStepClick = (stepIndex) => {
        setCurrentStep(stepIndex + 1);
    };

    // Render the current form based on the current step
    const renderCurrentForm = () => {
        switch (currentStep) {
            case 1:
                return <FirstFormSection />;
            case 2:
                return <SecondFormSection />;
            // case 3:
            //     return <ThirdFormSection />;
            // case 4:
            //     return <FourthFormSection />;
            // case 5:
            //     return <FifthFormSection />;
            default:
                return null;
        }
    };

    const totalRate = selected.reduce(
        (sum, item) => sum + Number(item.rate),
        0
    );
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
                    ...selected,
                    reference_id: reference_id,
                    submitted_date: moment().format("LLL"),
                    start: start,
                    end: end,
                    adults: adults_rate,
                    children: children_rate,
                    total: overall,
                    initial: down_payment,
                    status: "pending",
                    processed_by:'admin'
                })
            );
            setLoading(false);
              router.visit(`/admin/booking`)
        } catch (error) {
            setLoading(false);
        }
    }
    return (
        <div>
            <div className="lg:border-b lg:border-t lg:border-gray-200 mt-5 mb-5">
                <nav aria-label="Progress" className="">
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

                <div className="mb-8 mt-4 p-4 rounded-lg shadow-md">
                    {renderCurrentForm()}
                </div>
                <div className="fixed bottom-0 mt-4 flex items-center justify-between w-[75vw] p-3">
                    <button
                        onClick={handlePrevious}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
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
                        disabled={loading}
                        className="px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700"
                        // disabled={currentStep === steps.length}
                    >
                        {loading ? (
                            <>Loading...</>
                        ) : currentStep === steps.length ? (
                            "Place Booking Request"
                        ) : (
                            "Proceed to Checkout"
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
