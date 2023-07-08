const formatDate = (stringDate) => {
	const date = new Date(stringDate)
	return date.toLocaleString('ru-RU')
}

function classNamesArray(classes = []) {
	return classes.join(" ");
}

export { formatDate, classNamesArray }