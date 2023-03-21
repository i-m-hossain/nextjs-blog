import Link from "next/link";
import React, { useEffect, useState } from "react";

const About = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetchMovies();
    }, []);
    async function fetchMovies() {
        try {
            setLoading(true);
            const response = await fetch("http://localhost:3000/api/movies");
            const data = await response.json();
            setData(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }
    if (loading) {
        return <h4 className="text-center mt-4">Loading...</h4>;
    }
    return (
        <div className="mx-auto w-1/3">
            <h2 className="text-center py-2 font-bold underline">About me</h2>

            <section>
                <div className="flex justify-between mb-2">
                    <h2 className="font-bold">Favorite Movie list:</h2>
                    <Link href="/" className="text-blue-600">
                        ← Back to home
                    </Link>
                </div>
                {data.map((item) => (
                    <div className="border p-2 rounded-md mb-2" key={item.id}>
                        <h2 className="text-xl font-bold">{item.title}</h2>
                        <div className="flex space-x-2">
                            {item.poster && (
                                <img
                                    src={item.poster}
                                    width="120"
                                    height="90"
                                    className="object-cover w-1/4"
                                />
                            )}
                            <p>{item.fullplot}</p>
                        </div>

                        <h4 className="mt-2 font-semibold">
                            IMDB Rating: {item.imdb.rating}
                        </h4>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default About;
