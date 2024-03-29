"use client";

import { Menu, Transition } from "@headlessui/react";
import { Fragment, useTransition } from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import LoadingSpinner from "../general/loadingSpinner";
import { deleteDonation } from "./actions";
import Link from "next/link";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

const DonationListActions = ({ donationId }: { donationId: string }) => {
    const [isPending, startTransition] = useTransition();
    return (
        <Menu as="div" className="relative ml-auto">
            <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Open options</span>
                <HiEllipsisVertical className="h-5 w-5" aria-hidden="true" />
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                    {isPending ? (
                        <Menu.Item>
                            <LoadingSpinner />
                        </Menu.Item>
                    ) : (
                        <>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        href={`./dashboard/donations/${donationId}`}
                                        className={classNames(
                                            active ? "bg-gray-200" : "",
                                            "block px-3 py-1 text-sm leading-6 text-gray-900"
                                        )}
                                    >
                                        Edit<span className="sr-only"> donation</span>
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={classNames(
                                            active ? "bg-gray-200" : "",
                                            "block w-full text-left px-3 py-1 text-sm leading-6 text-gray-900"
                                        )}
                                        onClick={() => startTransition(() => deleteDonation(donationId))}
                                    >
                                        Delete<span className="sr-only"> donation</span>
                                    </button>
                                )}
                            </Menu.Item>
                        </>
                    )}
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default DonationListActions;
