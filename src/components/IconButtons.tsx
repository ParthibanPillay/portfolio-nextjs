import { SiFigma, SiGit, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function IconButtons() {
    return (
        <div className="grid grid-cols-2 p-5 gap-10 ml-3 mt-5">
            <div className="flex text-2xl gap-5 items-center justify-center bg-blue-300 w-[180px] p-3 rounded-lg">
                <SiTypescript />
                <p>Typescript</p>
            </div>
            <div className="flex text-2xl gap-5 items-center justify-center bg-blue-300 w-[180px] p-3 rounded-lg">
                <SiReact />
                <p>React</p>
            </div>
            <div className="flex text-2xl gap-5 items-center justify-center bg-blue-300 w-[180px] p-3 rounded-lg">
                <SiTailwindcss />
                <p>TailwindCSS</p>
            </div>
            <div className="flex text-2xl gap-5 items-center justify-center bg-blue-300 w-[180px] p-3 rounded-lg">
                <SiNodedotjs />
                <p>NodeJS</p>
            </div>
            <div className="flex text-2xl gap-5 items-center justify-center bg-blue-300 w-[180px] p-3 rounded-lg">
                <SiGit />
                <p>Git</p>
            </div>
            <div className="flex text-2xl gap-5 items-center justify-center bg-blue-300 w-[180px] p-3 rounded-lg">
                <SiFigma />
                <p>Figma</p>
            </div>
        </div>
    )
}