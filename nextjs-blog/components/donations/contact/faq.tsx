"use client";
import { Disclosure } from "@headlessui/react";
import { HiMinus, HiPlus } from "react-icons/hi2";

const faqs = [
    {
        question: "How do I schedule a donation?",
        answer: "To schedule a donation, you must first make an account with Monarch Donations. Afterward, you can navigate to the dashboard and create a donation. Please fill out the items you would like to donate and the time and date we should pickup the donation.",
    },
    {
        question: "I scheduled a donation. What now?",
        answer: "Please pack your donation items in a disposable container and leave it at the front of your house on the pickup date.",
    },
    // More questions...
];

const Faq = () => {
    return (
        <div>
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
                <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                    <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
                        Frequently asked questions
                    </h2>
                    <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                                <span className="text-base font-semibold leading-7">
                                                    {faq.question}
                                                </span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    {open ? (
                                                        <HiMinus className="h-6 w-6" aria-hidden="true" />
                                                    ) : (
                                                        <HiPlus className="h-6 w-6" aria-hidden="true" />
                                                    )}
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Faq;
