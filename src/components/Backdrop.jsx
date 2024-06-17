import PropTypes from "prop-types";

const Backdrop = ({ open, children }) => {
    if (!open) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-60 z-50 flex justify-center items-center">
            {children}
        </div>
    );
};

Backdrop.propTypes = {
    open: PropTypes.bool.isRequired,
    children: PropTypes.element.isRequired,
};

export default Backdrop;
