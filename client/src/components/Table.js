import React from "react";
import "../css/table.css"

const Table = ({ data }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const headers = Object.keys(data[0]).filter((name) => name !== "id");
  
  return (
   
      <table className="table">
        <thead className="header">
          <tr>
            {headers.map((th) => (
              <th>
                {(th.charAt(0).toUpperCase() + th.substring(1)).replace(
                  /([A-Z])/g,
                  " $1"
                )}
              </th>
            ))}
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((campaign) => (
            <tr key={campaign.id}>
              {headers.map((header) => (
                <td key={`${campaign.id}-${header}`}>
                  {header === "Budget"
                    ? formatter.format(campaign[header])
                    : campaign[header]}
                </td>
              ))}
              {new Date(campaign.endDate) >= new Date() ? (
                <td className="active">Active</td>
              ) : (
                <td className="inactive">Inactive</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    
  );
};
export default Table;
