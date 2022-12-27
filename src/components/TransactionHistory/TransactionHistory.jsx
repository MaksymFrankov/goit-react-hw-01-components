import css from './TransactionHistory.module.css'


function TransactionHistory({ items }) {
    return (
        <table className={css.transaction_history}>
  <thead>
    <tr className={css.tableRow}>
      <th className={css.tableHead}>Type</th>
      <th className={css.tableHead}>Amount</th>
      <th className={css.tableHead}>Currency</th>
    </tr>
  </thead>
            {items.map(items =>
                <tbody key={items.id} className={css.table}>
                    <tr className={css.tableRow}>
                        <td className={css.tableBody}>{items.type}</td>
                        <td className={css.tableBody}>{items.amount}</td>
                        <td className={css.tableBody}>{items.currency}</td>
                    </tr>
                </tbody>
)}
</table>
    )


}
export default TransactionHistory;