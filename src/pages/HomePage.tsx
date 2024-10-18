import States from "@/components/States";
import { Link } from "react-router-dom";

const Page = () => {
    return (
        <div className="flex flex-1 flex-col">
            <States />
            <div className="flex w-full flex-1 items-center justify-center">
                <div className="flex flex-col">
                    <img
                        className="h-[50vw] w-[50vw]"
                        src="https://utfs.io/f/bkysktwhKky7zZkMcMoyOVoQAJU8haN1zf03sc2ukPFIK9xL"
                    ></img>
                    <Link
                        to="/skins"
                        className="mt-2 text-center text-xl text-amber-500 active:text-amber-600"
                    >
                        Изменить
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Page;
