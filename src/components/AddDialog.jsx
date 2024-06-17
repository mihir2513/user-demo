import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { GetCity, GetCountries, GetState } from "react-country-state-city";
import * as Yup from "yup";
import Autocomplete from "./Autocomplete";
import { useDispatch } from "react-redux";
import { addUser } from "../features/user/userSlice";

const AddDialog = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();

    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [countriesList, setCountriesList] = useState([]);
    const [countryid, setCountryid] = useState(0);
    const [stateList, setStateList] = useState([]);
    const [cityList, setCityList] = useState([]);

    const initialValues = {
        email: "",
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        hobbies: "",
        country: "",
        state: "",
        city: "",
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email address").required("Email is required"),
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        age: Yup.number()
            .typeError("Age must be a number")
            .integer("Age must be an integer")
            .min(0, "Age must be at least 0")
            .required("Age is required"),
        gender: Yup.string().required("Gender is required"),
        hobbies: Yup.string().required("Hobbies are required"),
        country: Yup.string().required("Country is required"),
        state: Yup.string().required("State is required"),
        city: Yup.string().required("City is required"),
    });

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            console.log("Form submitted with values:", values);
            dispatch(addUser(values)); // Dispatch addUser action with form values
            onClose(); // Close the dialog after form submission
            resetForm(); // Optionally reset the form after successful submission
        },
    });

    useEffect(() => {
        GetCountries().then((result) => {
            setCountriesList(result);
        });
    }, []);

    return (
        <Transition show={isOpen}>
            <Dialog
                className="relative z-10"
                onClose={() => {
                    onClose();
                    formik.resetForm();
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
                                    <div className="w-full sm:flex sm:items-start">
                                        <div className="mt-3 w-full text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <DialogTitle
                                                as="h3"
                                                className="text-base font-semibold leading-6 text-white"
                                            >
                                                Add User
                                            </DialogTitle>
                                            {/* Formik Form */}
                                            <form
                                                className="w-full flex gap-4 flex-wrap"
                                                onSubmit={formik.handleSubmit}
                                            >
                                                {/* Email */}
                                                <div className="mt-2 w-full sm:w-[48%]">
                                                    <label
                                                        htmlFor="email"
                                                        className="block text-sm font-medium text-gray-200"
                                                    >
                                                        Email
                                                    </label>
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        className={`mt-1 block w-full px-3 py-2 border text-white bg-gray-700 border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md ${
                                                            formik.touched.email &&
                                                            formik.errors.email &&
                                                            "border-red-600 focus:ring-red-500 focus:border-red-500"
                                                        }`}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.email}
                                                    />
                                                    {formik.touched.email && formik.errors.email ? (
                                                        <p className="mt-1 text-xs text-red-500">
                                                            {formik.errors.email}
                                                        </p>
                                                    ) : null}
                                                </div>
                                                {/* First Name */}
                                                <div className="mt-2 w-full sm:w-[48%]">
                                                    <label
                                                        htmlFor="firstName"
                                                        className="block text-sm font-medium text-gray-200"
                                                    >
                                                        First Name
                                                    </label>
                                                    <input
                                                        id="firstName"
                                                        name="firstName"
                                                        type="text"
                                                        className={`mt-1 block w-full px-3 py-2 border text-white bg-gray-700 border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md ${
                                                            formik.touched.firstName &&
                                                            formik.errors.firstName &&
                                                            "border-red-600 focus:ring-red-500 focus:border-red-500"
                                                        }`}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.firstName}
                                                    />
                                                    {formik.touched.firstName && formik.errors.firstName ? (
                                                        <p className="mt-1 text-xs text-red-500">
                                                            {formik.errors.firstName}
                                                        </p>
                                                    ) : null}
                                                </div>
                                                {/* Last Name */}
                                                <div className="mt-2 w-full sm:w-[48%]">
                                                    <label
                                                        htmlFor="lastName"
                                                        className="block text-sm font-medium text-gray-200"
                                                    >
                                                        Last Name
                                                    </label>
                                                    <input
                                                        id="lastName"
                                                        name="lastName"
                                                        type="text"
                                                        className={`mt-1 block w-full px-3 py-2 border text-white bg-gray-700 border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md ${
                                                            formik.touched.lastName &&
                                                            formik.errors.lastName &&
                                                            "border-red-600 focus:ring-red-500 focus:border-red-500"
                                                        }`}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.lastName}
                                                    />
                                                    {formik.touched.lastName && formik.errors.lastName ? (
                                                        <p className="mt-1 text-xs text-red-500">
                                                            {formik.errors.lastName}
                                                        </p>
                                                    ) : null}
                                                </div>
                                                {/* Age */}
                                                <div className="mt-2 w-full sm:w-[48%]">
                                                    <label
                                                        htmlFor="age"
                                                        className="block text-sm font-medium text-gray-200"
                                                    >
                                                        Age
                                                    </label>
                                                    <input
                                                        id="age"
                                                        name="age"
                                                        type="number"
                                                        className={`mt-1 block w-full px-3 py-2 border text-white bg-gray-700 border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md ${
                                                            formik.touched.age &&
                                                            formik.errors.age &&
                                                            "border-red-600 focus:ring-red-500 focus:border-red-500"
                                                        }`}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.age}
                                                    />
                                                    {formik.touched.age && formik.errors.age ? (
                                                        <p className="mt-1 text-xs text-red-500">
                                                            {formik.errors.age}
                                                        </p>
                                                    ) : null}
                                                </div>
                                                {/* Gender */}
                                                <div className="mt-2 w-full">
                                                    <fieldset>
                                                        <legend className="block text-sm font-medium text-gray-200">
                                                            Gender
                                                        </legend>
                                                        <div className="mt-1 grid grid-cols-3 gap-4">
                                                            <div className="flex items-center">
                                                                <input
                                                                    id="gender_male"
                                                                    name="gender"
                                                                    type="radio"
                                                                    value="male"
                                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                                    onChange={formik.handleChange}
                                                                    onBlur={formik.handleBlur}
                                                                    checked={formik.values.gender === "male"}
                                                                />
                                                                <label
                                                                    htmlFor="gender_male"
                                                                    className="ml-2 text-sm text-gray-200"
                                                                >
                                                                    Male
                                                                </label>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <input
                                                                    id="gender_female"
                                                                    name="gender"
                                                                    type="radio"
                                                                    value="female"
                                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                                    onChange={formik.handleChange}
                                                                    onBlur={formik.handleBlur}
                                                                    checked={
                                                                        formik.values.gender === "female"
                                                                    }
                                                                />
                                                                <label
                                                                    htmlFor="gender_female"
                                                                    className="ml-2 text-sm text-gray-200"
                                                                >
                                                                    Female
                                                                </label>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <input
                                                                    id="gender_other"
                                                                    name="gender"
                                                                    type="radio"
                                                                    value="other"
                                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                                    onChange={formik.handleChange}
                                                                    onBlur={formik.handleBlur}
                                                                    checked={formik.values.gender === "other"}
                                                                />
                                                                <label
                                                                    htmlFor="gender_other"
                                                                    className="ml-2 text-sm text-gray-200"
                                                                >
                                                                    Other
                                                                </label>
                                                            </div>
                                                        </div>
                                                        {formik.touched.gender && formik.errors.gender ? (
                                                            <p className="mt-1 text-xs text-red-500">
                                                                {formik.errors.gender}
                                                            </p>
                                                        ) : null}
                                                    </fieldset>
                                                </div>

                                                {/* Hobbies */}
                                                <div className="mt-2 w-full">
                                                    <label
                                                        htmlFor="hobbies"
                                                        className="block text-sm font-medium text-gray-200"
                                                    >
                                                        Hobbies
                                                    </label>
                                                    <textarea
                                                        id="hobbies"
                                                        name="hobbies"
                                                        rows={3}
                                                        className={`mt-1 block w-full px-3 py-2 border text-white bg-gray-700 border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md ${
                                                            formik.touched.hobbies &&
                                                            formik.errors.hobbies &&
                                                            "border-red-600 focus:ring-red-500 focus:border-red-500"
                                                        }`}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.hobbies}
                                                    />
                                                    <p className="mt-3 text-sm leading-6 text-gray-300">
                                                        Write Down your hobbies with comma seperated values.
                                                    </p>
                                                    {formik.touched.hobbies && formik.errors.hobbies ? (
                                                        <p className="mt-1 text-xs text-red-500">
                                                            {formik.errors.hobbies}
                                                        </p>
                                                    ) : null}
                                                </div>
                                                {/* Country */}
                                                <div className="mt-2 w-full sm:w-[48%]">
                                                    <label
                                                        htmlFor="country"
                                                        className="block text-sm font-medium text-gray-200"
                                                    >
                                                        Country
                                                    </label>
                                                    <Autocomplete
                                                        list={countriesList}
                                                        className={` ${
                                                            formik.touched.country &&
                                                            formik.errors.country &&
                                                            "border-red-600 focus:ring-red-500 focus:border-red-500"
                                                        }`}
                                                        selected={country}
                                                        onChange={(value) => {
                                                            setCountry(value);
                                                            setCountryid(value?.id);
                                                            formik.setFieldValue("country", value?.name);
                                                            GetState(value.id).then((result) => {
                                                                setStateList(result);
                                                            });
                                                            setCityList([]);
                                                        }}
                                                    />
                                                    {formik.touched.country && formik.errors.country ? (
                                                        <p className="mt-1 text-xs text-red-500">
                                                            {formik.errors.country}
                                                        </p>
                                                    ) : null}
                                                </div>
                                                {/* State */}
                                                {stateList && stateList.length > 0 && (
                                                    <div className="mt-2 w-full sm:w-[48%]">
                                                        <label
                                                            htmlFor="state"
                                                            className="block text-sm font-medium text-gray-200"
                                                        >
                                                            State
                                                        </label>
                                                        <Autocomplete
                                                            list={stateList}
                                                            className={` ${
                                                                formik.touched.state &&
                                                                formik.errors.state &&
                                                                "border-red-600 focus:ring-red-500 focus:border-red-500"
                                                            }`}
                                                            selected={state}
                                                            onChange={async (value) => {
                                                                //     setCityList([]);
                                                                setState(value);
                                                                formik.setFieldValue("state", value?.name);
                                                                await GetCity(countryid, value.id).then(
                                                                    (result) => {
                                                                        if (result) {
                                                                            setCityList(result);
                                                                        }
                                                                    }
                                                                );
                                                            }}
                                                        />
                                                        {formik.touched.state && formik.errors.state ? (
                                                            <p className="mt-1 text-xs text-red-500">
                                                                {formik.errors.state}
                                                            </p>
                                                        ) : null}
                                                    </div>
                                                )}
                                                {/* City */}
                                                {cityList && cityList.length > 0 && (
                                                    <div className="mt-2 w-full sm:w-[48%]">
                                                        <label
                                                            htmlFor="city"
                                                            className="block text-sm font-medium text-gray-200"
                                                        >
                                                            City
                                                        </label>
                                                        <Autocomplete
                                                            list={cityList}
                                                            className={` ${
                                                                formik.touched.city &&
                                                                formik.errors.city &&
                                                                "border-red-600 focus:ring-red-500 focus:border-red-500"
                                                            }`}
                                                            selected={city}
                                                            onChange={(value) => {
                                                                setCity(value);
                                                                formik.setFieldValue("city", value?.name);
                                                            }}
                                                        />
                                                        {/* <CitySelect
                                                        id="city"
                                                        name="city"
                                                        className={`mt-1 block w-full px-3 py-2 border text-white bg-gray-700 border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md ${
                                                            formik.touched.city &&
                                                            formik.errors.city &&
                                                            "border-red-600 focus:ring-red-500 focus:border-red-500"
                                                        }`}
                                                        countryid={country}
                                                        stateid={stateid}
                                                        value={formik.values.city}
                                                        onChange={(val) => formik.setFieldValue("city", val)}
                                                        onBlur={formik.handleBlur}
                                                    /> */}
                                                        {formik.touched.city && formik.errors.city ? (
                                                            <p className="mt-1 text-xs text-red-500">
                                                                {formik.errors.city}
                                                            </p>
                                                        ) : null}
                                                    </div>
                                                )}

                                                <div className="w-full justify-between px-4 py-3 sm:flex sm:px-6">
                                                    <button
                                                        type="button"
                                                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500  sm:w-auto"
                                                        onClick={() => {
                                                            onClose();
                                                            formik.resetForm();
                                                        }}
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        className="mt-3 inline-flex w-full justify-center rounded-md text-white bg-gray-800 px-3 py-2 text-sm font-semibold hover:text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                        data-autofocus
                                                    >
                                                        Add
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

AddDialog.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default AddDialog;
