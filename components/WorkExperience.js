const Experience = () => {
  const experiancesItems = [
    {
      id: 1,
      title: "Validity Media",
      subTitle: "Head of Design",
      icon: "/assets/img/icons/validitymedia.svg",
      date: "2019-2020",
    },
    {
      id: 2,
      title: "Mockexam ng.",
      subTitle: "Product Developer",
      icon: "/assets/img/icons/mockexamng.svg",
      date: "2020-2022",
    },
    {
      id: 3,
      title: "Exam Compass",
      subTitle: "Product Developer",
      icon: "/assets/img/icons/examcompass.svg",
      date: "2022-2024",
    },
    {
      id: 4,
      title: "Web3Bridge",
      subTitle: "Web3 Developer",
      icon: "/assets/img/icons/web3bridge.svg",
      date: "2024-2025",
    },
    {
      id: 5,
      title: "Lendbit",
      subTitle: "Product Developer",
      icon: "/assets/img/icons/lendbit.svg",
      date: "2024-2025",
    },
    {
      id: 6,
      title: "vProtocol",
      subTitle: "Founder & CEO",
      icon: "/assets/img/icons/vprotocol.svg",
      date: "2025-2025",
    },
  ];
  return (
    <ul className="work-experiance-slider list-unstyled">
      {experiancesItems.map((item) => (
        <li key={item.id}>
          <div className="date">
            <p>{item.date}</p>
          </div>
          <div className="info">
            <div className="icon">
              <img src={item.icon} alt="adobe" />
            </div>
            <div className="text">
              <h4 className="title">{item.title}</h4>
              <h6 className="subtitle">{item.subTitle}</h6>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const WorkExperience = () => {
  return (
    <div className="card">
      <div className="card-body work-experiance-card">
        <h3 className="card-title">Work Experience</h3>
        <div className="work-experiance-main">
          <Experience />
          <Experience />
        </div>
      </div>
    </div>
  );
};
export default WorkExperience;
