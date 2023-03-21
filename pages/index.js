import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { AiFillLinkedin, AiOutlineFacebook, AiOutlineGithub, AiOutlineGoogle, AiOutlineLinkedin } from "react-icons/ai";
export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className="mx-auto w-1/3">
                <p className="mt-4 ">
                    I am currently working in{" "}
                    <a
                        href="https://altersense.com"
                        target="_blank"
                        className="underline text-blue-700"
                    >
                        Altersense limited
                    </a>
                    . Have a look at my
                    <a
                        href="https://www.github.com/mdimran1409036"
                        target="_blank"
                        className="underline text-blue-700"
                    >
                        {" "}
                        Github
                    </a>{" "}
                    profile.
                    <br />
                    Click here to know{" "}
                    <Link href={"/about"} className="underline text-blue-700">
                        About me
                    </Link>
                    .
                    <br />
                </p>
                <h2 className="mt-2">Connect with me:</h2>
                <ul className="flex space-x-2 mt-4">
                    <a
                        href="https://www.linkedin.com/in/imran-kuet14/"
                        target="_blank"
                        className="tex-2xl"
                    >
                        <AiOutlineLinkedin size={40}/>
                    </a>
                    <a
                        href="https://www.github.com/mdimran1409036"
                        target="_blank"
                        
                    >
                        <AiOutlineGithub size={40}/>
                    </a>

                    <a
                        href="https://www.facebook.com/r.rudronil"
                        target="_blank"
                        
                    >
                       <AiOutlineFacebook size={40}/>
                    </a>
                    <a
                        href="mailto:mdimran1409036@gmail.com"
                        target="_blank"
                        
                    >
                        <AiOutlineGoogle size={40}/>
                    </a>
                </ul>
            </section>
            <section className="w-1/3 mx-auto mt-6">
                <h2 className="font-bold text-2xl mb-4">Blog</h2>
                <ul>
                    {allPostsData?.map(({ id, date, title }) => (
                        <li key={id} className="mb-4">
                            <Link
                                href={`/posts/${id}`}
                                className="underline text-blue-600 "
                            >
                                {title}
                            </Link>
                            <br />

                            {/* <Date dateString={date} /> */}
                            <time dateTime={date}>
                                {format(parseISO(date), "LLLL d, yyyy")}
                            </time>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}
export async function getStaticProps() {
    const allPostsData = getSortedPostsData() || [];
    return {
        props: {
            allPostsData,
        },
    };
}

// server side props
// export async function getServerSideProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }
