
import css from './Statistic.module.css';
import { Item } from './Statistic.styled';


function StatisticList({ title, stats })
{
    return (
        <section className={css.statistics}>
            { title
                ? <h2 className={css.title}> {title} </h2>
                : ""
            }
            <ul className={css.stat_list}>
        {stats.map(stats => ( 
            <Item key={stats.id}>
                <span className={css.label}>{stats.label}</span>
                <span className={css.percentage}> {stats.percentage}%</span>
            </Item>
        ))}
            </ul>
    </section>
    )
}
export default StatisticList;