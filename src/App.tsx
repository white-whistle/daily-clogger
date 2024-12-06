import { END_DATE, START_DATE } from "./consts"
import { formatDate } from "./util/formatDate"


function App() {

  return (
    <>
      <main>
		<header>Dailyclogger.com</header>
		<nav></nav>

		<section>
			hello content
		</section>

		<footer>© Dailyclogger.com {formatDate(START_DATE)} - {formatDate(END_DATE)}</footer>
	  </main>
    </>
  )
}

export default App
