import { Link } from "react-router-dom";

export default function Post (props) {
    return (
        <div className="h-48 flex flex-row justify-around w-[50rem] 
        items-center bg-brown3 mt-24 font-serif
        hover:bg-brown5 transition hover:cursor-pointer transtion-75">
            {/* <img src={require("./mepicture.JPG")} className="h-28"/> */}
            <Link to={props.article.to} className="flex flex-col justify-center">
                <h1 className="font-bold text-3xl font-serif">{props.article.title}</h1>
                {/* <h2 className="font-bold text-xl font-serif">Leveraging them to our advantage</h2> */}
                <h3 className="">{props.article.date}</h3>
            </Link>
        </div>
    );
};