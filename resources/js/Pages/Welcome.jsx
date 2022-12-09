import AuthenticatedHomeLayout from "@/Layouts/AuthenticatedHomeLayout";
import Hero from "@/Components/Welcome/Hero";
import Content from "@/Components/Welcome/Content";
import Services from "@/Components/Welcome/Services";

export default function Welcome(props) {
    return (
        <>
            <AuthenticatedHomeLayout auth={props.auth}>
                <Hero />
                <Content />
                <Services />
            </AuthenticatedHomeLayout>
        </>
    );
}
