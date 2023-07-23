export function extractTitleAndDate(blogContent: string): {
	title: string;
	date: string;
	remainingContent: string;
} {
	const titleMatch = blogContent.match(/Title:(.*?)\n/);
	const dateMatch = blogContent.match(/Date:(.*?)\n/);

	let title = '';
	let date = '';
	let remainingContent = blogContent;

	if (titleMatch && titleMatch.length > 1) {
		title = titleMatch[1].trim();
		remainingContent = remainingContent.replace(titleMatch[0], '');
	}

	if (dateMatch && dateMatch.length > 1) {
		date = dateMatch[1].trim();
		remainingContent = remainingContent.replace(dateMatch[0], '');
	}

	return { title, date, remainingContent };
}

export function replace42brWithBreak(blogContent: string): string {
	return blogContent.replace(/42br/g, '<br><br>');
}
export function replaceBqWithDiv(blogContent: string): string {
	return blogContent.replace(/42bq\("([\s\S]*?)"\)/g, '<article class=poem>$1</article>');
}
export function enhancePunctuation(blogContent: string): string {
	return blogContent.replace(/([.,;:!?'"()])/g, '<span class=big-punctuation>$1</span>');
}
export function replace4bWithBreak(blogContent: string): string {
	return blogContent.replace(/4b/g, '<br>');
}

export function replace42tableWithHTMLTable(blogContent: string): string {
	return blogContent.replace(/42table\("([\s\S]*?)"\)/g, (match, group1) => {
		const rows = group1.split('\n');
		let tableHTML = '<table><thead><tr><th>Latin</th><th>Plain English</th></tr></thead><tbody>';

		for (let row of rows) {
			const latinIndex = row.indexOf(':');
			const latin = row.slice(0, latinIndex).trim();
			const plainEnglish = row.slice(latinIndex + 1).trim();
			tableHTML += `<tr><td>${latin}</td><td>${plainEnglish}</td></tr>`;
		}

		tableHTML += '</tbody></table>';

		return tableHTML;
	});
}
export function replace42picWithFigure(blogContent: string): string {
	return blogContent.replace(/42pic\("([\s\S]*?)"\)/g, (match, imageName) => {
		return `
        <article class="float-left svg">
			<figure>
            <img src="/${imageName.trim()}" alt="${imageName.trim()}">;
				<img src="/sign.svg" alt="sign" width="50%" style="display: block; margin: 0 auto;" />

				<figcaption class="yellow-banner">
                ${imageName.trim()}
				</figcaption>
			</figure>
		</article>
        `;
	});
}
