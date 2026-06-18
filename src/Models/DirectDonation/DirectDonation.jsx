import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

const DirectDonation = () => {
    return (
        <div className="directDonation">
            DirectDonation
            <Dialog
                open={openDirectModal}
                onClose={() => setOpenDirectModal(false)}
            >
                <DialogTitle>التبرع المباشر</DialogTitle>

                <DialogContent>
                    هون نموذج التبرع المباشر
                </DialogContent>

                <DialogActions>
                    <Button onClick={() => setOpenDirectModal(false)}>
                        إغلاق
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
export default DirectDonation;