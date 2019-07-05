import React from "react";
import BPTableRow from "../blockComponents/bpTableCell";

const BreakpointTable = props => {
  return (
    <table className="breakpoint-table col-md-12">
      <thead>
        <tr>
          <th>Breakpoint Range (dp)</th>
          <th>Portrait</th>
          <th>Landscape</th>
          <th>Window</th>
          <th>Columns</th>
          <th>Margins/Gutters*</th>
        </tr>
      </thead>
      <tbody>
        <BPTableRow
          bpRange={"0 - 359"}
          portrait={"Small Handset"}
          window={"xsmall"}
          columns={"4"}
          margins={"16"}
        />
        <BPTableRow
          bpRange={"360 - 399"}
          portrait={"Medium Handset"}
          window={"xsmall"}
          columns={"4"}
          margins={"16"}
        />
        <BPTableRow
          bpRange={"400 – 479"}
          portrait={"large handset"}
          window={"xsmall"}
          columns={"4"}
          margins={"16"}
        />
        <BPTableRow
          bpRange={"480 – 599"}
          portrait={"large handset"}
          landscape={"small handset"}
          window={"xsmall"}
          columns={"4"}
          margins={"16"}
        />
        <BPTableRow
          bpRange={"600 – 719"}
          portrait={"small tablet"}
          landscape={"medium handset"}
          window={"small"}
          columns={"8"}
          margins={"16"}
        />
        <BPTableRow
          bpRange={"720-839"}
          portrait={"large tablet"}
          landscape={"large handset"}
          window={"small"}
          columns={"8"}
          margins={"24"}
        />
        <BPTableRow
          bpRange={"840-959"}
          portrait={"large tablet"}
          landscape={"large handset"}
          window={"small"}
          columns={"12"}
          margins={"24"}
        />
        <BPTableRow
          bpRange={"960-1023"}
          landscape={"small tablet"}
          window={"small"}
          columns={"12"}
          margins={"24"}
        />
        <BPTableRow
          bpRange={"1024-1279"}
          landscape={"large tablet"}
          window={"medium"}
          columns={"12"}
          margins={"24"}
        />
        <BPTableRow
          bpRange={"1280-1439"}
          landscape={"large tablet"}
          window={"medium"}
          columns={"12"}
          margins={"24"}
        />

        <BPTableRow
          bpRange={"1440-1599"}
          window={"large"}
          columns={"12"}
          margins={"24"}
        />
        <BPTableRow
          bpRange={"1600-1919"}
          window={"large"}
          columns={"12"}
          margins={"24"}
        />
        <BPTableRow
          bpRange={"1920+"}
          window={"xlarge"}
          columns={"12"}
          margins={"24"}
        />
      </tbody>
    </table>
  );
};

export default BreakpointTable;
