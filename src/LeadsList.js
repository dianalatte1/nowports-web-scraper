import React, { useState } from "react";
import { leadsData } from "./leads";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
function LeadsList() {
  const [leadList, setLeadList] = useState(leadsData);

  const columns = [
    { dataField: "name", text: "Razón Social" },
    // { dataField: "logo", text: "Logo" },
    { dataField: "data", text: "Información de contacto" },
    { dataField: "tiers", text: "Tiers", sort: true },
    { dataField: "teus", text: "Teus", sort: true },
  ];

  console.log(leadList);
  const leads = leadList.map((lead) => ({
    ...lead,
    data: lead.data.map((data) => <div>{data}</div>),
    tiers: lead.tiers === 0 ? "Enterprise" : lead.tiers,
  }));

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageTest: " >>>",
    firstPagetext: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });

  return (
    <div>
      <BootstrapTable
        bootstrap4
        keyField="name"
        columns={columns}
        data={leads}
        pagination={pagination}
      />
    </div>
  );
}

export default LeadsList;
