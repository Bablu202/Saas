const benefits = [
  { title: " on payment", subtitle: "access to all the 3d Objects" },
  {
    title: "seamless downloads",
    subtitle: "unlimited objects in tight Project deadlines",
  },
  { title: "no hidden conditions", subtitle: "say no to payments at Anytime" },
];

export default function Benefits() {
  return (
    <div className="bg-black">
      <div className="column-padding">
        <div className="content-grid xl">
          <div className="spacing-base">
            {benefits.map((e) => (
              <div key={e.title} className="spacing-base">
                <h3>{e.title}</h3>
                <br />
                <div>{e.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
