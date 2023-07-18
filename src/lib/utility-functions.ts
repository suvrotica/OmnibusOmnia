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
	return blogContent.replace(/42bq\("([\s\S]*?)"\)/g, '<div class="poem">$1</div>');
}
