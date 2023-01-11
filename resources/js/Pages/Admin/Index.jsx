import { usePage } from "@inertiajs/inertia-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Card from "@/Components/Dashboard/Card";
import RecentListCard from "@/Components/Dashboard/RecenListCard";
import moment from "moment-timezone";
import Header from "@/Components/Dashboard/Header";

const Index = (props) => {
    const { course, category, student } = usePage().props;
    return (
        <>
            <AuthenticatedLayout auth={props.auth} errors={props.errors}>
                <div>
                    <Header
                        title={
                            <div className="flex flex-col capitalize text-3xl">
                                <span className="font-semibold">hello,</span>
                                <span>{props.auth.user.name}!</span>
                            </div>
                        }
                        auth={props.auth}
                    />

                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                        <div>
                            <RecentListCard title={"Course"} to={"course"}>
                                <Card
                                    title={course[0].title}
                                    body={course[0].description}
                                    time={moment
                                        .tz(
                                            course[0].created_at,
                                            "Asia/Jakarta"
                                        )
                                        .fromNow()}
                                />
                            </RecentListCard>
                            <RecentListCard title={"Category"} to={"category"}>
                                <Card
                                    title={category[0].name}
                                    body={category[0].description}
                                    time={moment
                                        .tz(
                                            category[0].created_at,
                                            "Asia/Jakarta"
                                        )
                                        .fromNow()}
                                />
                            </RecentListCard>
                            <RecentListCard title={"Student"} to={"student"}>
                                <Card
                                    title={student[0].name}
                                    body={student[0].email}
                                    time={moment
                                        .tz(
                                            student[0].created_at,
                                            "Asia/Jakarta"
                                        )
                                        .fromNow()}
                                />
                            </RecentListCard>
                        </div>
                        <div
                            className="mr-6 w-full mt-8 py-2 flex-shrink-0 flex flex-col
				bg-purple-300 rounded-lg text-white"
                        >
                            <h3
                                className="flex items-center pt-1 pb-1 px-8 text-lg font-bold
					capitalize"
                            >
                                <span>scheduled lessons</span>
                                <button className="ml-2">
                                    <svg
                                        className="h-5 w-5 fill-current"
                                        viewBox="0 0 256 512"
                                    >
                                        <path
                                            d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
								0l-22.6-22.6c-9.4-9.4-9.4-24.6
								0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6
								0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136
								136c9.5 9.4 9.5 24.6.1 34z"
                                        ></path>
                                    </svg>
                                </button>
                            </h3>

                            <div className="flex flex-col items-center mt-12">
                                <img
                                    src="https://cdni.iconscout.com/illustration/premium/thumb/empty-state-2130362-1800926.png"
                                    alt=" empty schedule"
                                />

                                <span className="font-bold mt-8">
                                    Your schedule is empty
                                </span>

                                <span className="text-purple-500">
                                    Make your first appointment
                                </span>

                                <button className="mt-8 bg-purple-800 rounded-lg py-2 px-4">
                                    Find a Job
                                </button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default Index;
