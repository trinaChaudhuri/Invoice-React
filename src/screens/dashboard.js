import React from "react";
import Modal from "react-modal";
import "./dashboard.css";
import { invoiceData } from "../application_data/invoice_data";
import {
  FaPlus,
  FaFileDownload,
  FaEnvelope,
  FaTimesCircle,
} from "react-icons/fa";
import { ExportToCsv } from "export-to-csv";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      invoiceData,
      defaultFilterInvoice: "",
      defaultFilterMonth: "",
      modalIsOpen: false,
      inputDate: "",
      inputTitle: "",
      inputBillto: "",
      inputStatus: "",
      inputTax: "",
      inputAmount: "",
      email: "trinachaudhuri00@gmail.com",
    };
  }

  download = () => {
    const options = {
      fieldSeparator: ",",
      quoteStrings: '"',
      decimalSeparator: ".",
      showLabels: true,
      showTitle: true,
      title: "My Awesome CSV",
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
    };
    const csvExporter = new ExportToCsv(options);
    csvExporter.generateCsv(this.state.invoiceData);
  };
  handleFilterInvoice = (event) => {
    const filter = event.target.value;
    this.setState({
      defaultFilterInvoice: filter,
    });
    this.filterInvoice(filter);
  };

  filterInvoice = (data) => {
    if (data !== "All") {
      const invData = this.state.defaultFilterMonth
        ? this.state.invoiceData.filter((a) => a.status === data)
        : invoiceData.filter((a) => a.status === data);
      this.setState({ invoiceData: invData });
    } else {
      const invData = this.state.defaultFilterMonth
        ? this.state.invoiceData
        : invoiceData;
      this.setState({ invoiceData: invData });
    }
  };
  invoiceModalSubmit = (event) => {
    var data = {
      id: this.state.invoiceData[this.state.invoiceData.length - 1].id + 1,
      date: this.state.inputDate,
      title: this.state.inputTitle,
      billTo: this.state.inputBillto,
      status: this.state.inputStatus,
      tax: this.state.inputTax,
      amount: this.state.inputAmount,
    };

    this.state.invoiceData.push(data);
    this.setState({ invoiceData: this.state.invoiceData });
    event.preventDefault();
  };
  handleMonth = (event) => {
    const filter = event.target.value;
    this.setState({
      defaultFilterMonth: filter,
    });
    this.filterMonth(filter);
  };
  filterMonth = (data) => {
    if (data) {
      const invData = this.state.invoiceData.filter((a) => a.date === data);
      this.setState({ invoiceData: invData });
    } else {
      this.setState({ invoiceData: this.state.invoiceData });
    }
  };
  addInvoiceModal = () => {
    this.setState({
      modalIsOpen: true,
    });
  };
  closeInvoiceModal = () => {
    this.setState({
      modalIsOpen: false,
    });
  };
  deleteData = (item) => {
    const data = this.state.invoiceData;
    data.splice(data.indexOf(item), 1);
    this.setState({ invoiceData: data });
  };

  render() {
    const data = this.state.invoiceData;
    return (
      <div>
        <div className="title">Invoice List</div>

        <div className="tags">
          <div className="icons">
            <FaPlus size={15} onClick={this.addInvoiceModal} style={{marginRight:5}} />

            <FaFileDownload size={15} onClick={() => this.download()} style={{marginRight:5}} />

            <a href={"mailto:" + this.state.email}>
              <FaEnvelope size={15} style={{marginRight:7}}/>
            </a>
          </div>
          <div className="filters">
            <select
              value="All"
              onChange={(event) => this.handleFilterInvoice(event)}
              className="filter-dropdown"
            >
              <option value="All">All Invoices</option>
              <option value="paid">Paid</option>
              <option value="unpaid">Unpaid</option>
              <option value="overdue">Overdue</option>
            </select>
            <select
              value={this.state.defaultFilterMonth}
              onChange={this.handleMonth}
              className="filter-dropdown"
            >
              <option value="jan">January</option>
              <option value="feb">February</option>
              <option value="mar">March</option>
              <option value="apr">April</option>
              <option value="may">May</option>
              <option value="jun">June</option>
              <option value="jul">July</option>
              <option value="aug">August</option>
              <option value="sep">Sep</option>
              <option value="oct">Oct</option>
              <option value="nov">Nov</option>
              <option value="dec">Dec</option>
            </select>
          </div>
        </div>
        <div>
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className={
                  item.id % 2 !== 0 ? "invoice-list" : "invoice-list-odd"
                }
              >
                <input
                  type="checkbox"
                  id={item.id}
                  onClick={(e) => console.log(e.target.value, item.id)}
                ></input>
                <div className="item-list">{item.id}</div>
                <div className="item-list">{item.date}</div>
                <div className="item-list">{item.title}</div>
                <div className="item-list">{item.billTo}</div>
                <div className="item-list">{item.status}</div>
                <div className="item-list">{item.tax}</div>
                <div className="item-list"> {item.amount}</div>
                <div>
                  {" "}
                  <FaTimesCircle
                    size={15}
                    color="red"
                    id={item.id}
                    onClick={() => this.deleteData(item)}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeInvoiceModal}
          portalClassName="modal"
        >
          <form key={data.id}>
            <label className="modal-label">
              {" "}
              date(please enter the month):
              <input
                type="text"
                name="date"
                onChange={(e) => this.setState({ inputDate: e.target.value })}
                value={this.state.inputDate}
              />
            </label>

            <label className="modal-label">
              {" "}
              title:
              <input
                type="text"
                name="title"
                onChange={(e) => this.setState({ inputTitle: e.target.value })}
                value={this.state.inputTitle}
              />
            </label>

            <label className="modal-label">
              billTo:
              <input
                type="text"
                name="billTo"
                onChange={(e) => this.setState({ inputBillto: e.target.value })}
                value={this.state.inputBillto}
              />
            </label>

            <label className="modal-label">
              {" "}
              status:
              <input
                type="text"
                name="status"
                onChange={(e) => this.setState({ inputStatus: e.target.value })}
                value={this.state.inputStatus}
              />
            </label>

            <label className="modal-label">
              {" "}
              tax:
              <input
                type="text"
                name="tax"
                onChange={(e) => this.setState({ inputTax: e.target.value })}
                value={this.state.inputTax}
              />
            </label>

            <label className="modal-label">
              {" "}
              amount:
              <input
                type="text"
                name="amount"
                onChange={(e) => this.setState({ inputAmount: e.target.value })}
                value={this.state.inputAmount}
              />
            </label>
            <input
              type="submit"
              value="Submit"
              onClick={this.invoiceModalSubmit}
            />
            <input
              value="close"
              onClick={this.closeInvoiceModal}
              type="submit"
            />
          </form>
        </Modal>
      </div>
    );
  }
}
