import "./css/transactions.css";

export default function Transactions() {
  const transactions = [
    {
      avatar:
        "https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2Fc6b7069df1a634e3db7ba5e9b923d3a8.png&w=400&q=75",
      name: "Aokiji",
      date: "28 Feb 2023",
      time: "06:23 PM",
      amount: "+$13.00",
      status: "Received",
    },
    {
      avatar:
        "https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2F386f22acf2f226c3a9ad7ad66fdce7a6.png&w=400&q=75",
      name: "Kizaru",
      date: "28 Feb 2023",
      time: "06:23 PM",
      amount: "-$9.00",
      status: "Outgoing",
    },
    {
      avatar:
        "https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2F2244af71ad0c25f2cb0a8efa167491fb.png&w=400&q=75",
      name: "Akainu",
      date: "28 Feb 2023",
      time: "06:23 PM",
      amount: "+$20.00",
      status: "Received",
    },
  ];

  return (
    <div className="transactions">
      <div className="transactions-header">
        <h3>Last Transactions</h3>
        <button className="see-all">See All</button>
      </div>
      {transactions.map((transaction, index) => (
        <div key={index} className="transaction">
          <div className="avatar">
            <img src={transaction.avatar} alt="Profile" />
          </div>
          <div className="transaction-info">
            <div className="transaction-name">{transaction.name}</div>
            <div className="transaction-date-time">
              {transaction.date} • {transaction.time}
            </div>
          </div>
          <div className="transaction-amount-status">
            <div
              className={`transaction-amount ${transaction.status.toLowerCase()}`}
            >
              {transaction.amount}
            </div>
            <div className="transaction-status">{transaction.status}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
