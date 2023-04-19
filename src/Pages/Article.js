import Wrapper from "../Wrapper";
import Header from "../Header.js";

export default function Article() {
    const place_holder={name: "NAME", secondary: "SECONDARY"};
    
    return (
    <>
        <Header header={place_holder}/>
        <div className="flex flex-col items-center max-w-[80rem]">
            <div className="font-serif m-24 w-[50rem] text-xl">
                <p className="mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus risus sed orci porttitor hendrerit. Aenean ipsum sem, interdum a risus a, ornare semper dui. Sed ultricies, mi placerat euismod porttitor, ante libero pulvinar purus, ac eleifend lorem turpis at metus. Praesent vel sem ut massa egestas malesuada nec vel orci. Maecenas vel rutrum ligula. Donec et aliquet tortor. Sed ac rhoncus nunc. Donec leo velit, egestas sed semper eu, dapibus et neque. Morbi ut odio mattis, condimentum tellus eget, condimentum orci. Integer porta malesuada magna. Ut ornare lobortis congue. Maecenas efficitur pulvinar metus quis cursus. Integer diam sem, gravida et massa ac, mollis ultrices diam.</p>
                <p className="mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus risus sed orci porttitor hendrerit. Aenean ipsum sem, interdum a risus a, ornare semper dui. Sed ultricies, mi placerat euismod porttitor, ante libero pulvinar purus, ac eleifend lorem turpis at metus. Praesent vel sem ut massa egestas malesuada nec vel orci. Maecenas vel rutrum ligula. Donec et aliquet tortor. Sed ac rhoncus nunc. Donec leo velit, egestas sed semper eu, dapibus et neque. Morbi ut odio mattis, condimentum tellus eget, condimentum orci. Integer porta malesuada magna. Ut ornare lobortis congue. Maecenas efficitur pulvinar metus quis cursus. Integer diam sem, gravida et massa ac, mollis ultrices diam.</p>
                <p className="mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus risus sed orci porttitor hendrerit. Aenean ipsum sem, interdum a risus a, ornare semper dui. Sed ultricies, mi placerat euismod porttitor, ante libero pulvinar purus, ac eleifend lorem turpis at metus. Praesent vel sem ut massa egestas malesuada nec vel orci. Maecenas vel rutrum ligula. Donec et aliquet tortor. Sed ac rhoncus nunc. Donec leo velit, egestas sed semper eu, dapibus et neque. Morbi ut odio mattis, condimentum tellus eget, condimentum orci. Integer porta malesuada magna. Ut ornare lobortis congue. Maecenas efficitur pulvinar metus quis cursus. Integer diam sem, gravida et massa ac, mollis ultrices diam.</p>
            </div>
            
        </div>
    </>
    );
}