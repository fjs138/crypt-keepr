export default function Footer() {
  return (
    <div className="Footer">
      {/*<h1>Footer</h1>*/}
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <a href="https://frankjs.net" target="_blank" rel="noreferrer">
                  {<p>Personal</p>}
                </a>
              </td>
              <td>
                <a
                  href="https://builtbyfrank.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  {<p>Business</p>}
                </a>
              </td>
              <td>
                <a
                  href="https://github.com/fjs138"
                  target="_blank"
                  rel="noreferrer"
                >
                  {<p>Github</p>}
                </a>
              </td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
