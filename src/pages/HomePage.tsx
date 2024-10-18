import Stats from "@/components/ui/states";

const Page = () => {
    return (
        <>
            <Stats />
            <div className="flex w-full flex-1 items-center justify-center">
                <div className="flex flex-col">
                    <img
                        className="h-[50vw] w-[50vw]"
                        src="https://utfs.io/f/bkysktwhKky7zZkMcMoyOVoQAJU8haN1zf03sc2ukPFIK9xL"
                    ></img>
                    <button className="mt-2 text-xl text-amber-500 active:text-amber-600">
                        Изменить
                    </button>
                </div>
            </div>
        </>
    );
};

export default Page;
