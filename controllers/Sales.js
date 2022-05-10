const getSalesByProductBrand = async (request, response) => {
	const { product } = request.params;
	const { brand } = request.params;

	const getRandomMonths = () => {
		const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
		const result = [];
		const inicial = parseInt(Math.random() * (12 - 1) + 1)
		for (let i = 0; i < 5; i++) {
			result.push(months[(inicial+i)%12]);
		}
		return result;
	}

	const sales = {
		'Labels': getRandomMonths(),
		'Data': [
			brand * 10 + Math.random() * (1000 - 1) + product,
			brand * 10 + Math.random() * (1000 - 1) + product,
			brand * 10 + Math.random() * (1000 - 1) + product,
			brand * 10 + Math.random() * (1000 - 1) + product,
			brand * 10 + Math.random() * (1000 - 1) + product]
	};
	return response.json(sales);
}

module.exports = {
	getSalesByProductBrand
}