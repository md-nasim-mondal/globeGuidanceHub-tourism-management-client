import useAuth from "../../providers/Auth";

const Home = () => {
    const { loading } = useAuth();
    if (loading) {
        return (
            <div className=" flex mt-16 justify-center">
                <span className="loading loading-infinity loading-lg"></span>
            </div>
        );
    }
    return (
        <div>
            <h1 className="text-7xl text-center">This is Home Page</h1>
        </div>
    );
};

export default Home;