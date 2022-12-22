
import css from './Statistic.module.css'

function StatisticList({ data })
{
    return (
    <section className={css.statistics}>
            <h2 className={css.title}>Upload stats</h2>
            <ul className={css.stat_list}>
        {data.map(data => ( 
            <li className={css.item} key={data.id}>
                <span className={css.label}>{data.label}</span>
                <span className={css.percentage}> {data.percentage}%</span>
            </li>
        ))}
            </ul>
    </section>
    )
}
export default StatisticList;