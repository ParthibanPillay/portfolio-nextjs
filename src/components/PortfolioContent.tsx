import InfoContent from "./InfoContent" ;
import SKillsContent from "./SkillsContent" ;

export default function PortfolioContent() {
    return (
        <div className="grid grid-cols-2 ml-10 mr-10 gap-5 border">
            <InfoContent />
            <SKillsContent />
        </div>
    )
}