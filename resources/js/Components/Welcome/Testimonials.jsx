import user1 from "@";
import user2 from "@";
import user3 from "@";

const Testimonials = () => {
    return (
        <div class="dark:bg-gray-900 py-16">
            <div class="xl:container max-w-7xl mx-auto px-6 text-gray-600 dark:text-gray-300 md:px-12 xl:px-6">
                <h2 class="mb-12 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                    What's our customers say
                </h2>
                <div class="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
                    <div class="row-span-2 rounded-3xl border border-gray-100 dark:border-gray-700 dark:bg-gray-800 p-8 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
                        <div class="flex h-full flex-col justify-center space-y-4">
                            <img
                                class="mx-auto h-20 w-20 rounded-full"
                                src="/Assets/first_user.webp"
                                alt="user avatar"
                                height="220"
                                width="220"
                                loading="lazy"
                            />
                            <p class="md:text-xl">
                                <span class="font-serif">"</span> Lorem ipsum
                                dolor sit amet consectetur adipisicing elit.
                                Quaerat repellat perspiciatis excepturi est. Non
                                ipsum iusto aliquam consequatur repellat
                                provident, omnis ut, sapiente voluptates
                                veritatis cum deleniti repudiandae ad doloribus.{" "}
                                <span class="font-serif">"</span>
                            </p>
                            <div>
                                <h6 class="text-lg font-semibold leading-none">
                                    Jane Doe
                                </h6>
                                <span class="text-xs text-gray-500">
                                    Product Designer
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="rounded-3xl sm:flex sm:space-x-8 border border-gray-100 dark:border-gray-700 dark:bg-gray-800 p-8 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
                        <img
                            class="mx-auto h-20 w-20 rounded-full"
                            src="/Assets/second_user.webp"
                            alt="user avatar"
                            height="220"
                            width="220"
                            loading="lazy"
                        />
                        <div class="mt-4 space-y-4 text-center sm:mt-0 sm:text-left">
                            <p>
                                <span class="font-serif">"</span> Lorem ipsum
                                dolor sit amet consectetur adipisicing elit.
                                Quaerat repellat perspiciatis excepturi est. Non
                                ipsum iusto aliquam consequatur repellat
                                provident, omnis ut, sapiente voluptates
                                veritatis cum deleniti repudiandae ad doloribus.{" "}
                                <span class="font-serif">"</span>
                            </p>
                            <div>
                                <h6 class="text-lg font-semibold leading-none">
                                    Jane Doe
                                </h6>
                                <span class="text-xs text-gray-500">
                                    Product Designer
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-3xl sm:flex sm:space-x-8 border border-gray-100 dark:border-gray-700 dark:bg-gray-800 p-8 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
                        <img
                            class="mx-auto h-20 w-20 rounded-full"
                            src="/Assets/third_user.webp"
                            alt="user avatar"
                            height="220"
                            width="220"
                            loading="lazy"
                        />
                        <div class="mt-4 space-y-4 text-center sm:mt-0 sm:text-left">
                            <p>
                                <span class="font-serif">"</span> Lorem ipsum
                                dolor sit amet consectetur adipisicing elit.
                                Quaerat repellat perspiciatis excepturi est. Non
                                ipsum iusto aliquam consequatur repellat
                                provident, omnis ut, sapiente voluptates
                                veritatis cum deleniti repudiandae ad doloribus.{" "}
                                <span class="font-serif">"</span>
                            </p>
                            <div>
                                <h6 class="text-lg font-semibold leading-none">
                                    Jane Doe
                                </h6>
                                <span class="text-xs text-gray-500">
                                    Product Designer
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
