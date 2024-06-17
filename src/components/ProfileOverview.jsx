import { useSelector } from "react-redux";
import { getUser } from "../features/auth/authSlice";

const ProfileOverview = () => {
    const userProfile = useSelector(getUser);

    const { firstName, lastName, email, age, gender, hobbies, country, state, city } = userProfile;
console.log(hobbies,"hobbies");
    return (
        <div className="p-6 bg-gray-800 rounded-lg overflow-x-auto text-white  shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Profile Overview</h2>
            <div className="grid grid-cols-1 gap-4 text-lg">
                <div>
                    <strong className="text-gray-400">Full Name:</strong> {firstName} {lastName}
                </div>
                <div>
                    <strong className="text-gray-400">Email:</strong> {email}
                </div>
                <div>
                    <strong className="text-gray-400">Age:</strong> {age}
                </div>
                <div>
                    <strong className="text-gray-400">Gender:</strong> {gender}
                </div>
                <div>
                    <strong className="text-gray-400">Hobbies:</strong> {hobbies.join(", ")}
                </div>
                <div>
                    <strong className="text-gray-400">Country:</strong> {country}
                </div>
                <div>
                    <strong className="text-gray-400">State:</strong> {state}
                </div>
                <div>
                    <strong className="text-gray-400">City:</strong> {city}
                </div>
            </div>
        </div>
    );
};

export default ProfileOverview;
