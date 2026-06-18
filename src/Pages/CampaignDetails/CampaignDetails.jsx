import { useParams } from "react-router-dom";


const CampaignDetails = () => {
    const { id } = useParams();

    console.log(id);
    return (
        <div className="campaigndetails">
            <div>
                تفاصيل الحملة رقم {id}
            </div>

        </div>
    )
}
export default CampaignDetails;