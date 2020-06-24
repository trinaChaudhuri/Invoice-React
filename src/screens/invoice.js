import React from "react";
export default class Invoice extends React.Component {
  render() {
    return (
      <>
        <div>Create Invoice</div>
        <div>Invoice details</div>
        <form>
          <input type="text" placeholder="123456" />
          <input type="text" placeholder="22 June 2020" />
          <select>
            <option>dev</option>
            <option>web dev</option>
          </select>
        </form>
        <div>
          <div> Client details</div>
          <div>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Address 1" />
            <input type="text" placeholder="Address 2" />
            <input placeholder="official number" type="number" />
            <input placeholder="official email id" type="email" />
            <input placeholder="contact person" type="text" />
          </div>
        </div>
        <div>
          <div>Add Items</div>
          <form>
            <input type="text" placeholder="Item Name" />
            <input type="text" placeholder="Item Description" />
            <input type="number" placeholder="Rate per hour" />
            <input type="number" placeholder="Total hours" />
            <input type="number" placeholder="Tax" />
            <input type="number" placeholder="Flat Amount" />
            <input type="submit" name="Add" value="Add" />
          </form>
        </div>
        <div>
          <div>Payment Terms</div>
          <form>
            <label>Advanced</label>
            <input type="text" placeholder="Amount" />
            <label>Paid</label>
            <input type="text" placeholder="Amount" />
            <div>
              <label>Payment Breakups</label>
              <div>
                <input type="text" placeholder="Milestone1" />
                <input type="text" placeholder="Milestone2" />
                <input typr="text" placeholder="Milestone3" />
              </div>
            </div>
          </form>
        </div>
        <div>
          <div>Milestone Paid</div>
          <select>
            <option>1000-2000</option>
            <option>2000-3000</option>
          </select>
        </div>
        <div>
          <div>Current Milestone</div>
          <select>
            <option>1000-2000</option>
            <option>2000-3000</option>
          </select>
        </div>
        <div>
          <div>
            Payable amount
            <input type="number" placeholder="$00.00" />
          </div>
          <div>
            Amount due
            <input type="number" placeholder="$00.00" />
          </div>
          <div>
            Discount
            <input type="number" placeholder="$00.00" />
          </div>
        </div>
        <div>
          Invoice Total
          <label>300$</label>
        </div>
        <div>
          <div>
            <form>
              <label>Bank details</label>
              <input type="text" placeholder="Account Name" />
              <input type="number" placeholder="Account Number" />
              <input type="text" placeholder="IFSC code" />
              <input type="submit" value="Confirm" />
              <input type="submit" value="Edit" />
            </form>
          </div>
        </div>
        <div>
            <div>Other Payable Mode</div>
            <select>
                <option>Online</option>
                <option>UPI</option>
            </select>
        </div>
      </>
    );
  }
}
