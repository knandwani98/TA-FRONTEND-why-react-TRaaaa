import Article from "./Article";
import data from "../data";
function Articles(data) {
  return (
    <section className="articles">
      <div className="container">
        <h1>Articles</h1>
        <div>
          {data.map((article) => {
            <Article {...article} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Articles;
