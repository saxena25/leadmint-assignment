import "./DashBoard.css";
import { Line } from "react-chartjs-2";
import Registration from "../data/Registration.json";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function DashBoard() {
  return (
    <div className="dashBoard">
      <div className="sub-menu">
        <div className="upper-box">
          <h1>AppZest</h1>
        </div>
        <div className="lower-box">
          <div className="sub-menu-btns">
            <img src="https://img.icons8.com/ios-glyphs/30/analytics.png" alt="analytics"/>
            <p>Analysis</p>
          </div>
          <div className="sub-menu-btns">
            <img src="https://img.icons8.com/quill/100/group.png" alt="group"/>
            <p>Users</p>
          </div>
          <div className="sub-menu-btns">
            <img src="https://img.icons8.com/external-linear-outline-icons-papa-vector/78/external-Notifications-interface-linear-outline-icons-papa-vector.png" alt="external-Notifications-interface-linear-outline-icons-papa-vector"/>
            <p>Notifications</p>
          </div>
          <div className="sub-menu-btns">
            <img src="https://img.icons8.com/glyph-neue/64/refund-2.png" alt="refund-2"/>
            <p>Transactions</p>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="content-header">
          <h1>Analytics</h1>
          <input type="date" name="date" className="input-date" placeholder="Select Date Range" />
        </div>
        <div className="content-body">
          <div className="content-box">
            <img src="https://img.icons8.com/quill/100/group.png" alt="group" />
            <p>Users</p>
            <p className="user-count user-count-green">140</p>
          </div>
          <div className="content-box">
            <img src="https://img.icons8.com/quill/100/group.png" alt="group"/>
            <p>Referral Users</p>
            <p className="user-count user-count-blue">64</p>
          </div>
          <div className="content-box">
            <img src="https://img.icons8.com/quill/100/group.png" alt="group"/>
            <p>Today Organic Users</p>
            <p className="user-count user-count-green">76</p>
          </div>
          <div className="content-box">
            <img src="https://img.icons8.com/quill/100/group.png" alt="group"/>
            <p>This Week Users</p>
            <p className="user-count user-count-blue">670</p>
          </div>
          <div className="content-box">
            <img src="https://img.icons8.com/quill/100/group.png" alt="group"/>
            <p>This Month Users</p>
            <p className="user-count user-count-blue">22727</p>
          </div>
          <div className="content-box">
            <img src="https://img.icons8.com/quill/100/group.png" alt="group"/>
            <p>Last Month Users</p>
            <p className="user-count user-count-blue">71291</p>
          </div>
        </div>
        <div className="chart-graph">
          <Line
            data={{
              labels: Registration.map((ele) => ele.label),
              datasets:[
                {
                  label: "Registration",
                  data: Registration.map((ele) => ele.Registrations),
                  backgroundColor: "rgba(60, 168, 249, 0.8)",
                  borderColor: "rgba(60, 168, 249, 0.8)",
                  // fill: false
                },
                {
                  label: "Referrals",
                  data: Registration.map((ele) => ele.Referrals),
                  backgroundColor: "#e32057",
                  borderColor: "#e32057",
                  // fill: true
                }
              ]
            }}
            options={{
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: "Last 7 Days: Registration vs Referrals",
                },
                legend: {
                  position: "top",
                },
              },
              scales: {
                x: {
                  type: "category",
                  title: {
                    display: true,
                    text: "Date",
                  },
                },
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: "Count",
                  },
                }
              }
            }}
            height={250}
            width={800}
          />
        </div>
      </div>
    </div>
  )
}

export default DashBoard
