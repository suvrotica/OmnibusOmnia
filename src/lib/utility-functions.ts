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
	return blogContent.replace(/42br/g, '');
}
export function replace42lblWithLabel(blogContent: string): string {
	return blogContent.replace(/42lbl\("([\s\S]*?)"\)/g, '<kbd>$1</kbd>');
}
export function replaceNewLineWithBreak(blogContent: string): string {
	return blogContent.replace(/\n/g, '<br>');
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
        
			
            <img class="float-left svg" width="50%" margin="0px" src="/${imageName.trim()}" alt="${imageName.trim()}">
			
			
        `;
	});
}

export function replace42ytWithIframe(blogContent: string): string {
	return blogContent.replace(/42yt\("([^"]+)"\)/g, (match, videoUrl) => {
		const videoId = videoUrl.match(/(?:\/|v=)([\w-]{11})(?:$|&|\?|#)/)[1];
		return `
  <div style="aspect-ratio: 1.755; position: relative; margin: 0 auto;">
  <iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0; margin: 0;" src="https://www.youtube-nocookie.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

        `;
	});
}

export function replace42picWithFigureR(blogContent: string): string {
	return blogContent.replace(/42picr\("([\s\S]*?)"\)/g, (match, imageName) => {
		return `
        
			
            <img class="float-right svg" width="50%" margin="0px" src="/${imageName.trim()}" alt="${imageName.trim()}">
			
			
        `;
	});
}
export function replace42cWithHighlight(text: string) {
	const pattern = /42c\("([^"]+)","([^"]+)"\)/g;
	return text.replace(pattern, (match, language, codeContent) => {
		return `<pre><code class="language-${language} " style="font-size: 12px;">${codeContent}</code></pre>`;
	});
}
