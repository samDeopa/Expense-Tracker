import "./App.css";
import BalanceModal from "./components/BalanceModal/BalanceModal";
import BarGraphComponent from "./components/BarGraphComponent/BarGraphComponent";
import DisplayCard from "./components/DisplayCard/DisplayCard";
import StatChart from "./components/PieChart/StatChart";
import TransactionList from "./components/TransactionList/TransactionList";

function App() {
  return (
    <div className="container">
      <p className="title">Expense Tracker</p>
      <div className="dashboard">
        <DisplayCard
          amount={500}
          title={"Wallet Balance"}
          button={"Add Income"}
          gradient={"linear-gradient(90deg, #B5DC52 0%, #89E148 100%)"}
          color={"#9DFF5B"}
        />
        <DisplayCard
          amount={500}
          title={"Expenses"}
          button={"Add Expense"}
          gradient={
            "linear-gradient(90deg, #FF9595 0%, #FF4747 80%, #FF3838 100%)"
          }
          color={"#F4BB4A"}
        />
        <StatChart />
      </div>
      <div className="section">
        <div>
          <p className="subHeadding">Recent Transactions</p>

          <TransactionList
            Transactions={[
              {
                name: "same",
                price: 22,
                category: "food",
                date: new Date().toDateString(),
              },
            ]}
          />
        </div>
        <div>
          <p className="subHeadding">Top Expenses</p>
          <BarGraphComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
