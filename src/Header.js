export default function Header(props) {
    return (
        <div className="bg-brown3 h-[50vh] flex flex-col justify-center items-center
                        text-7xl font-serif font-bold relative w-screen">
             <div>{props.header.name}</div>
             <div className="absolute bottom-[25%] text-5xl">{props.header.secondary}</div>
        </div>
    );
}