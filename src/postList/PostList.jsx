import { Link } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

function PostList() {
    const [blogPost, setblogPost] = useState("");


    useEffect(() => {
            axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => setblogPost(res.data))
            .catch(e => console.error("error fetching: " + e))
        }, []);

    return (
        <div className="flex flex-col gap-y-2">
            <Link to="/posts/1">Post #1</Link>
            <Link to="/posts/2">Post #2</Link>
            <Link to="/posts/3">Post #3</Link>
        </div>
        );
}

export default PostList