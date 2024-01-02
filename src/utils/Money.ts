function formatNumberToReal(number: number): string {
    const formattedNumber = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(number);

    return formattedNumber;
}

export default formatNumberToReal