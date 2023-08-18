// You should implement your task here.

module.exports = function towelSort(matrix) {
	if (!matrix || matrix.length === 0) return [];
	const res = matrix.reduce((acc, cur, i) => {
		cur.sort((a, b) => (!(i & 1) ? a - b : b - a)).map(e => acc.push(e));
		return acc;
	}, []);
	return res;
};
