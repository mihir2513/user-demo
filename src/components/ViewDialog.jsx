import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectUserById } from "../features/user/userSlice";

const ViewDialog = ({ isOpen, onClose, userId }) => {
    const userProfile = useSelector((state) => selectUserById(state, userId));
    const { email, firstName, lastName, age, gender, hobbies, country, state, city } = userProfile;

    return (
        <>
            <Transition show={isOpen}>
                <Dialog
                    className="relative z-10"
                    onClose={() => {
                        onClose();
                    }}
                >
                    {/* Overlay */}
                    <TransitionChild
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-400 bg-opacity-55 transition-opacity" />
                    </TransitionChild>

                    {/* Dialog Content */}
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <TransitionChild
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl lg:max-w-4xl bg-opacity-100">
                                    <div className="bg-gray-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="w-full ">
                                            <div className="mt-3 w-full text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <DialogTitle
                                                    as="h3"
                                                    className="text-base font-semibold leading-6 text-white"
                                                >
                                                    View User
                                                </DialogTitle>
                                            </div>
                                            <div>
                                                <div className="mt-6 border-t border-gray-100">
                                                    <dl className="divide-y divide-gray-100">
                                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                            <dt className="text-sm font-medium leading-6 text-gray-100">
                                                                Full name
                                                            </dt>
                                                            <dd className="mt-1 text-sm leading-6 font-semibold text-gray-400 sm:col-span-2 sm:mt-0">
                                                                {`${firstName} ${lastName}`}
                                                            </dd>
                                                        </div>
                                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                            <dt className="text-sm font-medium leading-6 text-gray-100">
                                                                Email address
                                                            </dt>
                                                            <dd className="mt-1 text-sm leading-6 font-semibold text-gray-400 sm:col-span-2 sm:mt-0">
                                                                {email}
                                                            </dd>
                                                        </div>
                                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                            <dt className="text-sm font-medium leading-6 text-gray-100">
                                                                Age
                                                            </dt>
                                                            <dd className="mt-1 text-sm leading-6 font-semibold text-gray-400 sm:col-span-2 sm:mt-0">
                                                                {age}
                                                            </dd>
                                                        </div>
                                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                            <dt className="text-sm font-medium leading-6 text-gray-100">
                                                                Gender
                                                            </dt>
                                                            <dd className="mt-1 text-sm leading-6 font-semibold text-gray-400 sm:col-span-2 sm:mt-0">
                                                                {gender}
                                                            </dd>
                                                        </div>
                                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                            <dt className="text-sm font-medium leading-6 text-gray-100">
                                                                Hobbies
                                                            </dt>
                                                            <dd className="mt-1 text-sm leading-6 font-semibold text-gray-400 sm:col-span-2 sm:mt-0">
                                                                {hobbies}
                                                            </dd>
                                                        </div>
                                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                            <dt className="text-sm font-medium leading-6 text-gray-100">
                                                                Country
                                                            </dt>
                                                            <dd className="mt-1 text-sm leading-6 font-semibold text-gray-400 sm:col-span-2 sm:mt-0">
                                                                {country}
                                                            </dd>
                                                        </div>
                                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                            <dt className="text-sm font-medium leading-6 text-gray-100">
                                                                State
                                                            </dt>
                                                            <dd className="mt-1 text-sm leading-6 font-semibold text-gray-400 sm:col-span-2 sm:mt-0">
                                                                {state}
                                                            </dd>
                                                        </div>
                                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                            <dt className="text-sm font-medium leading-6 text-gray-100">
                                                                City
                                                            </dt>
                                                            <dd className="mt-1 text-sm leading-6 font-semibold text-gray-400 sm:col-span-2 sm:mt-0">
                                                                {city}
                                                            </dd>
                                                        </div>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

ViewDialog.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    userId: PropTypes.number.isRequired,
};
export default ViewDialog;
