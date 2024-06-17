import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/16/solid";
import PropTypes from "prop-types";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Autocomplete = ({ list, selected, onChange ,buttonClassNames}) => {
    return (
        <>
            <Listbox value={selected} onChange={onChange}>
                {({ open }) => (
                    <>
                        <div className="relative mt-2">
                            <ListboxButton className={`relative min-h-8 w-full mt-1 block px-3 py-2 border text-white bg-gray-700 border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md ${buttonClassNames}`}>
                                <span className="flex items-center">
                                    {/* <img
                                        src={selected.avatar}
                                        alt=""
                                        className="h-5 w-5 flex-shrink-0 rounded-full"
                                    /> */}
                                    <span className="ml-3 block truncate">{selected.name}</span>
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </ListboxButton>

                            <Transition
                                show={open}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md text-white bg-gray-700 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {list.map((person) => (
                                        <ListboxOption
                                            key={person.id}
                                            className={({ active }) =>
                                                classNames(
                                                    active ? "bg-indigo-600 text-white" : "",
                                                    !active ? "text-white bg-gray-700" : "",
                                                    "relative cursor-default select-none py-2 pl-3 pr-9"
                                                )
                                            }
                                            value={person}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <div className="flex items-center">
                                                        {/* <img
                                                            src={person.currency_symbol}
                                                            alt=""
                                                            className="h-5 w-5 flex-shrink-0 rounded-full"
                                                        /> */}
                                                        <span
                                                            className={classNames(
                                                                selected ? "font-semibold" : "font-normal",
                                                                "ml-3 block truncate"
                                                            )}
                                                        >
                                                            {person.name}
                                                        </span>
                                                    </div>

                                                    {selected ? (
                                                        <span
                                                            className={classNames(
                                                                active ? "text-white" : "text-indigo-600",
                                                                "absolute inset-y-0 right-0 flex items-center pr-4"
                                                            )}
                                                        >
                                                            <CheckIcon
                                                                className="h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </ListboxOption>
                                    ))}
                                </ListboxOptions>
                            </Transition>
                        </div>
                    </>
                )}
            </Listbox>
        </>
    );
};

Autocomplete.propTypes = {
    list: PropTypes.array.isRequired,
    selected: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    buttonClassNames: PropTypes.string.isRequired,
};
export default Autocomplete;
