import { PuffLoader } from "react-spinners";

export default function LoadingImg() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <PuffLoader 
                color="#FFFFFF" 
                speedMultiplier={2}
            />
        </div>
    )
}