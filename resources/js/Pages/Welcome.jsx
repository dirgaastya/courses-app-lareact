import AuthenticatedHomeLayout from "@/Layouts/AuthenticatedHomeLayout";
import Hero from "@/Components/Welcome/Hero";
import Content from "@/Components/Welcome/Content";
import Services from "@/Components/Welcome/Services";
import { useEffect } from "react";

export default function Welcome(props) {
    useEffect(() => {
        document.title = "Hesecourse";
    }, []);
    return (
        <>
            <AuthenticatedHomeLayout auth={props.auth} ziggy={props.ziggy}>
                <Hero />
                <Content />
                <Services />
            </AuthenticatedHomeLayout>
        </>
    );
}
