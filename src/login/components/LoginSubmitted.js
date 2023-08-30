export default function LoginSubmitted({ submitted }) {
  return (
    <div className="content-grid home-hero">
      <h1>A magic Link sent to your Mail!</h1>
      <p>{`check your email  ${submitted} to login.`}</p>
    </div>
  );
}
