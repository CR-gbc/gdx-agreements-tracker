const dbConnection = require("@database/databaseConnection");
const { knex } = dbConnection();
const _ = require("lodash");

// get the fiscal year based on the id passed from frontend
const getFiscalYear = (fiscal) =>
  knex.select(knex.raw(`fiscal_year from data.fiscal_year`)).where({ "fiscal_year.id": fiscal });

/**
 * Gets data for the Divisional Project Reports - net recovery summary by quarter
 *
 * @param           fiscal {number}: the fiscal year for this report
 * @returns {any[]}
 */
const Tab_50_rpt_PF_NetRecoverySummaryByQuarter = (fiscal) => {
  const query = knex.select("*").fromRaw(`
    (WITH stob_base as (
      SELECT fy.Fiscal_Year,
        pd.Fiscal,
        po.ID as Portfolio_ID,
        po.Portfolio_Name,
        po.Portfolio_Abbrev,
        Sum(Q1_Amount) AS Q1_Amount,
        Sum(Q2_Amount) AS Q2_Amount,
        Sum(Q3_Amount) AS Q3_Amount,
        Sum(Q4_Amount) AS Q4_Amount,
        Sum(
          case
            when Left(stob, 2) In ('57', '65', '63', '60') then Q1_Amount
            else cast(0 as money)
          end
        ) AS Q1_Expenses,
        Sum(
          case
            when Left(stob, 2) In ('57', '65', '63', '60') then Q2_Amount
            else cast(0 as money)
          end
        ) AS Q2_Expenses,
        Sum(
          case
            when Left(stob, 2) In ('57', '65', '63', '60') then Q3_Amount
            else cast(0 as money)
          end
        ) AS Q3_Expenses,
        Sum(
          case
            when Left(stob, 2) In ('57', '65', '63', '60') then Q4_Amount
            else cast(0 as money)
          end
        ) AS Q4_Expenses
      FROM data.Project_Budget pb
        left join data.Project_Deliverable pd on pb.Project_Deliverable_Id = pd.ID
        left join data.Project p on pd.Project_ID = p.ID
        left join data.Fiscal_Year fy on pd.Fiscal = fy.ID
        left join data.Portfolio po on pb.Recovery_Area = po.ID
      GROUP BY fy.Fiscal_Year,
        pd.Fiscal,
        po.ID,
        po.Portfolio_Name,
        po.Portfolio_Abbrev
      order by portfolio_name asc
    ) --end stob_base

  -- select columns from stob_base
  SELECT Portfolio_Name,
    Q1_Amount + Q2_Amount + Q3_Amount + Q4_Amount as total_recoveries,
    Q1_Expenses + Q2_Expenses + Q3_Expenses + Q4_Expenses as less_all_project_expenses,
    (Q1_Amount + Q2_Amount + Q3_Amount + Q4_Amount) - (Q1_Expenses + Q2_Expenses + Q3_Expenses + Q4_Expenses) as net_recoveries,
    Q1_Amount as q1_gross,
    (Q1_Amount - Q1_Expenses) as q1_net,
    Q2_Amount as q2_gross,
    (Q2_Amount - Q2_Expenses) as q2_net,
    Q3_Amount as q3_gross,
    (Q3_Amount - Q3_Expenses) as q3_net,
    Q4_Amount as q4_gross,
    (Q4_Amount - Q4_Expenses) as q4_net,
    fiscal
  from stob_base
  order by Portfolio_Abbrev,
    fiscal
  ) as q`);

  return query.whereIn("q.fiscal", _.castArray(fiscal));
};

const Tab_50_totals = (fiscal) => {
  const query = knex.select("*").fromRaw(`
    (WITH stob_base as (
      SELECT fy.Fiscal_Year,
        pd.Fiscal,
        po.ID as Portfolio_ID,
        po.Portfolio_Name,
        po.Portfolio_Abbrev,
        Sum(Q1_Amount) AS Q1_Amount,
        Sum(Q2_Amount) AS Q2_Amount,
        Sum(Q3_Amount) AS Q3_Amount,
        Sum(Q4_Amount) AS Q4_Amount,
        Sum(
          case
            when Left(stob, 2) In ('57', '65', '63', '60') then Q1_Amount
            else cast(0 as money)
          end
        ) AS Q1_Expenses,
        Sum(
          case
            when Left(stob, 2) In ('57', '65', '63', '60') then Q2_Amount
            else cast(0 as money)
          end
        ) AS Q2_Expenses,
        Sum(
          case
            when Left(stob, 2) In ('57', '65', '63', '60') then Q3_Amount
            else cast(0 as money)
          end
        ) AS Q3_Expenses,
        Sum(
          case
            when Left(stob, 2) In ('57', '65', '63', '60') then Q4_Amount
            else cast(0 as money)
          end
        ) AS Q4_Expenses
      FROM data.Project_Budget pb
        left join data.Project_Deliverable pd on pb.Project_Deliverable_Id = pd.ID
        left join data.Project p on pd.Project_ID = p.ID
        left join data.Fiscal_Year fy on pd.Fiscal = fy.ID
        left join data.Portfolio po on pb.Recovery_Area = po.ID
      GROUP BY fy.Fiscal_Year,
        pd.Fiscal,
        po.ID,
        po.Portfolio_Name,
        po.Portfolio_Abbrev
      order by portfolio_name asc
    ) --end stob_base

  -- select columns from stob_base
  SELECT sum(Q1_Amount + Q2_Amount + Q3_Amount + Q4_Amount) as totals_recoveries,
    sum(Q1_Expenses + Q2_Expenses + Q3_Expenses + Q4_Expenses) as totals_less_all_project_expenses,
    sum((Q1_Amount + Q2_Amount + Q3_Amount + Q4_Amount) - (Q1_Expenses + Q2_Expenses + Q3_Expenses + Q4_Expenses)) as totals_net_recoveries,
    sum(Q1_Amount) as totals_q1_gross,
    sum(Q1_Amount - Q1_Expenses) as totals_q1_net,
    sum(Q2_Amount) as totals_q2_gross,
    sum(Q2_Amount - Q2_Expenses) as totals_q2_net,
    sum(Q3_Amount) as totals_q3_gross,
    sum(Q3_Amount - Q3_Expenses) as totals_q3_net,
    sum(Q4_Amount) as totals_q4_gross,
    sum(Q4_Amount - Q4_Expenses) as totals_q4_net,
    fiscal
  FROM stob_base
  GROUP BY fiscal
  ) as q`);

  return query.whereIn("q.fiscal", _.castArray(fiscal));
};

module.exports = {
  Tab_50_rpt_PF_NetRecoverySummaryByQuarter,
  Tab_50_totals,
  getFiscalYear,
};
