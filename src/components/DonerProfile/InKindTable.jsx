import { ImageIcon, MapPin } from "lucide-react";
import StatusPill from "./StatusPill";
import {
  ITEM_CONDITION,
  DELIVERY_STATUS,
} from "./constants";
const InKindTable = ({ rows }) => {
  return (
    <div className="hf-table-wrap">
      <table className="hf-table">
        <thead>
          <tr>
            <th>صورة التبرع</th>
            <th>اسم التبرع</th>
            <th>نوع التبرع</th>
            <th>الموقع</th>
            <th>الكمية</th>
            <th>حالة المواد</th>
            <th>حالة التسليم</th>
          </tr>
        </thead>
        <tbody>
          {rows?.map((row) => {
            const condition =
              ITEM_CONDITION[row.condition] || {
                tone: "gray",
                label: row.condition,
              };

            const delivery =
              DELIVERY_STATUS[row.delivery] || {
                tone: "gray",
                label: row.delivery,
              };
            return (
              <tr key={row.id}>
                <td>
                  <div className="hf-table__thumb">
                    {row.image ? (
                      <img src={row.image} alt={row.name} />
                    ) : (
                      <ImageIcon size={16} strokeWidth={1.75} />
                    )}
                  </div>
                </td>
                <td className="hf-table__name">{row.name}</td>
                <td className="hf-table__muted">{row.category}</td>
                <td>
                  <span className="hf-table__location">
                    <MapPin size={14} strokeWidth={2} />
                    {row.location}
                  </span>
                </td>
                <td className="hf-table__amount">{row.quantity}</td>
                <td>
                  <StatusPill tone={condition.tone} label={condition.label} />
                </td>
                <td>
                  <StatusPill tone={delivery.tone} label={delivery.label} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default InKindTable;