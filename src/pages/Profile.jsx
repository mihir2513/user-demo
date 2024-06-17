import { useSelector } from "react-redux";
import { getUser } from "../features/auth/authSlice";

const Profile = () => {
    const userProfile = useSelector(getUser); 

    const { email, firstName, lastName, age, gender, hobbies, country, state, city } = userProfile;
    console.log(userProfile,"userProfile");

    return (
        <div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-100">Full name</dt>
                        <dd className="mt-1 text-sm leading-6 font-semibold text-gray-400 sm:col-span-2 sm:mt-0">
                            {`${firstName} ${lastName}`}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-100">Email address</dt>
                        <dd className="mt-1 text-sm leading-6 font-semibold text-gray-400 sm:col-span-2 sm:mt-0">
                            {email}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-100">Age</dt>
                        <dd className="mt-1 text-sm leading-6 font-semibold text-gray-400 sm:col-span-2 sm:mt-0">{age}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-100">Gender</dt>
                        <dd className="mt-1 text-sm leading-6 font-semibold text-gray-400 sm:col-span-2 sm:mt-0">
                            {gender}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-100">Hobbies</dt>
                        <dd className="mt-1 text-sm leading-6 font-semibold text-gray-400 sm:col-span-2 sm:mt-0">
                            {hobbies}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-100">Country</dt>
                        <dd className="mt-1 text-sm leading-6 font-semibold text-gray-400 sm:col-span-2 sm:mt-0">
                            {country}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-100">State</dt>
                        <dd className="mt-1 text-sm leading-6 font-semibold text-gray-400 sm:col-span-2 sm:mt-0">
                            {state}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-100">City</dt>
                        <dd className="mt-1 text-sm leading-6 font-semibold text-gray-400 sm:col-span-2 sm:mt-0">{city}</dd>
                    </div>
                </dl>
            </div>
        </div>
    );
};

export default Profile;
