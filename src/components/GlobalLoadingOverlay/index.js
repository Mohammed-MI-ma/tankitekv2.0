import Loader from "../Loader";

const GlobalLoadingOverlay = ({ isLoading }) => {
  return isLoading ? (
    <div className="fixed top-0 left-0 w-full h-full bg-white opacity-90 flex justify-center items-center z-50">
      <div className="text-center">
        <Loader />
      </div>
    </div>
  ) : null;
};
export default GlobalLoadingOverlay;
