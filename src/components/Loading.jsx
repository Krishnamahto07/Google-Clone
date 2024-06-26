import { TailSpin } from "react-loader-spinner";
const Loading = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <TailSpin
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
            <p>Loading</p>
        </div>
    );
};  
export default Loading;