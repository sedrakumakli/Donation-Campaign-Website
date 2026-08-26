import { useState } from "react";
import StatusPill from "./StatusPill";
import {
  DONATION_TYPE,
  DONATION_COMPLIANCE,
  PAYMENT_STATUS,
  CURRENCY_TYPE,
} from "./constants";
import { useNavigate } from "react-router-dom";
import CompletePaymentModal from "./CompletePaymentModal";
function FinancialTable({ rows }) {
  const navigate = useNavigate();
  const [selectedDonation, setSelectedDonation] = useState(null);
  const handleContinuePayment = (donation) => {
    setSelectedDonation(donation);
  };
  const handleGoToPayment = () => {
    if (!selectedDonation) return;

    if (selectedDonation.method === "تبرع") {
      navigate(`/direct-donation/${selectedDonation.campaing.uuid}`);
    }

    if (selectedDonation.method === "تعهد") {
      navigate(`/pledge/${selectedDonation.campaing.uuid}`);
    }

    setSelectedDonation(null);
  };
  return (
    <div className="hf-table-wrap">
      <table className="hf-table">
        <thead>
          <tr>
            <th>آخر تبرع</th>
            <th>العملة</th>
            <th>تاريخ الاستحقاق</th>
            <th>الحملة</th>
            <th>نوع التبرع</th>
            <th>حالة التبرع</th>
            <th>حالة الدفع</th>
          </tr>
        </thead>
        <tbody>
          {rows?.map((row) => {
            const type = DONATION_TYPE[row.method] || {
              tone: "gray",
              label: row.method,
            };

            const compliance = DONATION_COMPLIANCE[row.status] || {
              tone: "gray",
              label: row.status,
            };

            const payment = PAYMENT_STATUS[row.pending] || {
              tone: "gray",
              label: row.pending,
            };
            const currency = CURRENCY_TYPE[row.currency_type] || {
              label: row.currency_type,
            };
            return (
              <tr key={row.uuid}>
                <td className="hf-table__amount">{row.last_donation}</td>
                <td className="hf-table__currency">{currency.label}</td>
                <td className="hf-table__muted">{row.date}</td>
                <td>{row?.campaing?.name}</td>
                <td>
                  <StatusPill tone={type.tone} label={type.label} />
                  {/* {row.method} */}
                </td>
                <td style={{"display" : "flex" , "gap" : "6px"}}>
                  <StatusPill tone={compliance.tone} label={compliance.label} />
                  {row.status === "غير متوافق" && (
                    <button 
                    className="continue-payment-btn"
                    onClick={() => handleContinuePayment(row)}
                  > اعرف السبب</button>
                  )}
                </td>
                <td>
                  {/* {row.pending} */}
                  <StatusPill tone={payment.tone} label={payment.label} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <CompletePaymentModal
        donation={selectedDonation}
        onClose={() => setSelectedDonation(null)}
        onContinue={handleGoToPayment}
      />
    </div>
  );
}
export default FinancialTable;