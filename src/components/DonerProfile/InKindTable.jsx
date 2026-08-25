import { ImageIcon, MapPin } from "lucide-react";
import StatusPill from "./StatusPill";
import {
  ITEM_CONDITION,
  DELIVERY_STATUS,
} from "./constants";
import config from "../../constants/enviroment";
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
              ITEM_CONDITION[row.status_of_materail] || {
                tone: "gray",
                label: row.status_of_materail,
              };

            const delivery =
              DELIVERY_STATUS[row.status] || {
                tone: "gray",
                label: row.status,
              };
            return (
              <tr key={row.uuid}>
                <td>
                  <div className="hf-table__thumb">
                    {row.images?.[0]?.url? (
                      <img src={config.baseUrl + row.images[0].url} alt={row.name_of_material} />
                    ) : (
                      <ImageIcon size={16} strokeWidth={1.75} />
                    )}
                  </div>
                </td>
                <td className="hf-table__name">{row.name_of_material}</td>
                <td className="hf-table__muted">{row.type === "غير ذلك" ? row.on_the_other_hand : row.type}</td>
                <td>
                  <span className="hf-table__location">
                    <MapPin size={14} strokeWidth={2} />
                    {row?.governorate?.governorate_name}
                  </span>
                </td>
                <td className="hf-table__amount">{row.amount}</td>
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