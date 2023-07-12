const YEAR = new Date().getFullYear()

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Nick Huemmer.
        <a href="/feed.xml">RSS</a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 4 rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
}
