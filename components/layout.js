import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "Md Imran Hossain";
export const siteTitle = "Home";

export default function Layout({ children, home }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className="mx-auto w-1/3 pt-2">
                {home ? (
                    <div className="flex justify-center flex-col items-center">
                        <div>
                            <Image
                                priority
                                src="/Images/profile.png"
                                height={144}
                                width={144}
                                alt=""
                                className="rounded-md"
                            />
                        </div>
                        <h1 className="text-3xl font-bold ">{name}</h1>
                        <p className=" text-md">Full Stack Software Engineer</p>
                    </div>
                ) : (
                    <div className="flex items-center space-x-2">
                        <Link href="/">
                            <Image
                                priority
                                src="/Images/profile.png"
                                height={108}
                                width={108}
                                alt=""
                                className="rounded-md"
                            />
                        </Link>
                        <div className="">
                            <h2 className="">
                                <Link
                                    href="https://www.github.com/mdimran1409036"
                                    className="text-3xl font-bold text-center"
                                    target="_blank"
                                >
                                    {name}
                                </Link>
                            </h2>
                            <p className=" text-md">
                                Full Stack Software Engineer
                            </p>
                        </div>
                    </div>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className="mx-auto w-1/3 mt-4">
                    <Link href="/" className="text-blue-600">
                        ← Back to home
                    </Link>
                </div>
            )}
        </div>
    );
}
