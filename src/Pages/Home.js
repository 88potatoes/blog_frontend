import Post from "../Post.js";
import Wrapper from "../Wrapper.js";
import Header from "../Header.js";
import { Link } from "react-router-dom";

const file = {
    title: "Everyone has right answers",
    date: "Apr 14",
    body: "It’s easy to get confused in the age of information. Tristan Tate once said there were lots of ways to make lots of money. Jeff Bezos selling books, Elon Musk starting PayPal and him starting a camgirl business. Alex Hormozi preaches sales and starting a business while Gary Vee loves to harp on the idea of garage sales. With all these ways of making money, which way is correct? ",
    to: "/article"
};

const header = {name: "Blog", secondary: "✍🏼"};

export default function Home() {
    return (<>
        <Header header={header}></Header>
        <Wrapper>
            <Link to="/article"><Post article={file}/></Link> 
            <Post article={file}/> 
        </Wrapper>
    </>
    );
};
