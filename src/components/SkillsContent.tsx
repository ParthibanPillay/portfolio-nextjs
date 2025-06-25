import SocialMediaTabs from "./SocialMediaTabs";
import TechStack from "./TechStack";

export default function SKillsContent() {
    return (
        <div className="bg-[#1b1818] ml-[300px] text-white grid grid-rows-2 rounded-3xl">
            <TechStack />
            <SocialMediaTabs />
        </div>
    )
}