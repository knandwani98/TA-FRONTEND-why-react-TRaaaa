function Article(data) {
  return (
    <article>
      <img src={data.ur} alt="" />
      <h2>{data.title}</h2>
    </article>
  );
}
export default Article;
