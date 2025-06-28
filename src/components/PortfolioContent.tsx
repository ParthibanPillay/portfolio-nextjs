import Image from "next/image";
import InfoContent from "./InfoContent";
import ProfilePic from "./ProfilePic";
import SKillsContent from "./SkillsContent";
import SmallDescription from "./SmallDescription";
import ContactButton from "./ContactButton";
import SocialMediaTabs from "./SocialMediaTabs";
import TechStack from "./TechStack";

export default function PortfolioContent() {
    return (
        <div className="grid grid-cols-10 grid-rows-5 p-10 gap-3 m-0">
            <div className="h-[550px] col-span-4 row-span-3 bg-[#1b1818] text-white rounded-3xl
            flex items-center justify-center">
                Fueled by Coffee,
                Driven by design, Powered by Code
            </div>
            <div className="col-span-3 row-span-2">
                <Image
                    src="/cat_pfp.jpg"
                    alt="profile pic"
                    width={500}
                    height={600}
                    className="rounded-3xl"
                />
            </div>
            <div className="col-span-3 row-span-4 h-[790px] rounded-3xl">
                <TechStack />
            </div>
            <div className="flex items-center justify-center col-start-auto text-start col-span-4 row-span-2 bg-[#1b1818] text-white rounded-3xl pl-2 pt-60">
                <SmallDescription />
            </div>
            <div className="col-start-5 col-span-3 row-span-2 bg-[#FE866B] flex items-center justify-center rounded-3xl">
                <ContactButton />
            </div>
            <div className="col-start-8 col-span-3 row-start-5 row-span-2 bg-[#1b1818] h-[150px] rounded-3xl flex items-center justify-center">
                <SocialMediaTabs />
            </div>
        </div>
    )
}