import { LogOutIcon } from "lucide-react";

const LogOut = ({onClick}) => {
    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingBottom: '16px'
        }}>
            <button
                type="button"
                className="hf-logout-btn"
                onClick={onClick}>
                <LogOutIcon size={16} strokeWidth={2} />
                تسجيل الخروج
            </button>
        </div>

    )
}
export default LogOut;