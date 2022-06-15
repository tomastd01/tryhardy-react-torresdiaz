
export const formatPrice = (value) => {
    return new Intl.NumberFormat('es-AR').format(value);
}