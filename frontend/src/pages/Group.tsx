function GroupCard() {
  return (
    <div className="col-12 col-md-6">
      <div className="m-3 p-3 rounded-3 group-card">
        <h5>Visit Oromia Travelers</h5>
        <h6>
          Destination: <span className="mx-1 bg-light-subtle rounded-1 p-1">Bale Mauntaines</span>
          <span className="mx-1 bg-light-subtle rounded-1 p-1">Abba Jifaar Palace</span>
        </h6>
        <p>Date <span>2023-10-09</span> - <span>2023-11-15</span></p>
        <h6 className="d-flex align-items-center justify-content-between"><span>Total Estimated Price: $1000</span> <button className="join-btn px-2 py-1">Join Group</button></h6>
        <h4 className="d-flex flex-column align-items-center people-number p-2"><span>12</span> <span className="text-center" title="click to see who get registered">Registered</span></h4>
      </div>
    </div>
  );
}

const Group = () => {
  return (
    <div className="my-5 py-5 container">
      <div className="row">
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
      </div>
    </div>
  );
};

export default Group;
