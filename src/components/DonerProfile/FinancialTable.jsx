import StatusPill from "./StatusPill";
import {
  DONATION_TYPE,
  DONATION_COMPLIANCE,
  PAYMENT_STATUS,
  CURRENCY_TYPE,
} from "./constants";
function FinancialTable({ rows }) {
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
            const type = DONATION_TYPE[row.type] || {
              tone: "gray",
              label: row.type,
            };

            const compliance = DONATION_COMPLIANCE[row.compliance] || {
              tone: "gray",
              label: row.compliance,
            };

            const payment = PAYMENT_STATUS[row.payment] || {
              tone: "gray",
              label: row.payment,
            };
            const currency = CURRENCY_TYPE[row.currency] || {
              label: row.currency,
            };
            return (
              <tr key={row.id}>
                <td className="hf-table__amount">{row.amount}</td>
                <td className="hf-table__currency">{currency.label}</td>
                <td className="hf-table__muted">{row.dueDate}</td>
                <td>{row.campaign}</td>
                <td>
                  <StatusPill tone={type.tone} label={type.label} />
                </td>
                <td>
                  <StatusPill tone={compliance.tone} label={compliance.label} />
                </td>
                <td>
                  <StatusPill tone={payment.tone} label={payment.label} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default FinancialTable;