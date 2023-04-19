export default function Wrapper({children}) {
    return (
        <div className="flex flex-col items-center max-w-[80rem]">
            {children}
        </div>
    );
};