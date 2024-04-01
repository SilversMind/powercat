import {exerciseContainerStyle, exercisesContainerStyle, exerciseStyle, profileStyle,} from "./ProfileScreenStyle";
import {useEffect, useState} from "react";
import {settings} from "../setting";

interface Profile {
    name: string;
    PR: {
        bench: number;
        squat: number;
        deadlift: number;
    };
}

export const ProfilePage = () => {
    const [ProfileData, setProfileData] = useState<Profile>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://${settings.defaultIPAddress}/profile/`);
                const data = await response.json();
                setProfileData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    if (!ProfileData) return <p>Loading</p>;
    return (
        <>
            <div style={profileStyle}>
                <p>Hello {ProfileData?.name}</p>
                <p>Vos PR:</p>
                <div style={exercisesContainerStyle}>
                    <div style={exerciseContainerStyle}>
                        <p style={exerciseStyle}>Squat</p>
                        <p style={exerciseStyle}>{ProfileData.PR.squat}</p>
                    </div>
                    <div style={exerciseContainerStyle}>
                        <p style={exerciseStyle}>Bench</p>
                        <p style={exerciseStyle}>{ProfileData.PR.bench}</p>
                    </div>
                    <div style={exerciseContainerStyle}>
                        <p style={exerciseStyle}>Deadlift</p>
                        <p style={exerciseStyle}>{ProfileData.PR.deadlift}</p>
                    </div>
                </div>
            </div>
        </>
    );
};
