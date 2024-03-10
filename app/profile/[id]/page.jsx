"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
    const [userPosts, setUserPosts] = useState([]);

    const searchParams = useSearchParams();
    const username = searchParams.get("name");

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${params?.id}/posts`);
            const data = await response.json();

            setUserPosts(data);
        };

        if (params?.id) fetchPosts();
    }, []);

    return (
        <Profile
            name={username}
            desc={`Welcome to ${username}'s personalized profile page`}
            data={userPosts}
        />
    );
};

export default UserProfile;
