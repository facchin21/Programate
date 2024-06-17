const phoneNumber = '2494111111';
const message = `Hola, como estas?
Queria saber que el catalogo disponible🧉🤎!`;
const encodedMessage = encodeURIComponent(message);

export const Whatsapp = {
    whatsappURL : `https://wa.me/${phoneNumber}?text=${encodedMessage}`
}