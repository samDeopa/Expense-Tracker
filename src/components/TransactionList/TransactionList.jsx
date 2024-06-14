import Button from "../Button/Button";
import Transaction from "../Transaction/Transaction";
import "./TransactionList.css";
export default function TransactionList({ Transactions }) {
  return (
    <div className="transactionList">
      <div>
        {Transactions.map((ele) => {
          return (
            <>
              <Transaction data={ele} key={ele.name} />
              <hr></hr>
            </>
          );
        })}
      </div>
      <div className="transactionControl">
        <Button type={"moveLeft"} />
        <div className="pageDisplay">1</div>
        <Button type={"moveRight"} />
      </div>
    </div>
  );
}
