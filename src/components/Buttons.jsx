import "../styles/buttons.css";

function test(props) {
  const { title, href } = props;

  return (
    <>
      <div className="btnContent">
        <a className="btn" href={href}>
          {title}
        </a>
      </div>
    </>
  );
}

export default test;
