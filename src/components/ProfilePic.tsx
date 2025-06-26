import Image from "next/image";

export default function ProfilePic() {
    return (
            <Image 
            src="/cat_pfp.jpg"
            alt="profile pic"
            height={100}
            width={400}
            className="rounded-3xl"
            />
    );
};