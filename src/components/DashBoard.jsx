import "./DashBoard.css";

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
        <div></div>
      </div>
    </div>
  )
}

export default DashBoard
