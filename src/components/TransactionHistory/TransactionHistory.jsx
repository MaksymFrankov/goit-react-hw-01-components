import css from './TransactionHistory.module.css'


function TransactionHistory({ items }) {
    return (
        <table className={css.transaction_history}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
            {items.map(items =>
                <tbody key={items.id}>
                    <tr>
                        <td>{items.type}</td>
                        <td>{items.amount}</td>
                        <td>{items.currency}</td>
                    </tr>
                </tbody>
)}
</table>
    )


}
export default TransactionHistory;