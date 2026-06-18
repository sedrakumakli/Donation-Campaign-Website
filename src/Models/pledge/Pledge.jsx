import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
const Pledge = () => {
    return (
        <div className="pledge">
            pledge
            <Dialog
                open={openPledgeModal}
                onClose={() => setOpenPledgeModal(false)}
            >
                <DialogTitle>التعهد</DialogTitle>

                <DialogContent>
                    هون نموذج التعهد
                </DialogContent>

                <DialogActions>
                    <Button onClick={() => setOpenPledgeModal(false)}>
                        إغلاق
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
export default Pledge;