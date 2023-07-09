export default function () {
	const aboutMainMid = document.createElement('div')
	aboutMainMid.classList.add('about-mid')
	const h1 = document.createElement('h1')
	h1.textContent = 'About'
	const p = document.createElement('p')
	p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi architecto, autem\n' +
		'\t\t\t\t\tconsequatur debitis deleniti, deserunt enim eum facilis fuga in ipsum libero nihil praesentium quam\n' +
		'\t\t\t\t\tquo temporibus! Ea, praesentium.\n' +
		'\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eligendi eum, fuga minus nesciunt quos.\n' +
		'\t\t\t\t\tCupiditate delectus, dignissimos, eum hic, inventore laudantium magnam maiores minus quidem sint\n' +
		'\t\t\t\t\tsunt tempora totam.'
	aboutMainMid.appendChild(h1)
	aboutMainMid.appendChild(p)
	return aboutMainMid
}