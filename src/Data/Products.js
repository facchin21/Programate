import MateImperial from "../assets/image/mate 1.png"
import MateCamionero from '../assets/image/camionero 1.png'
import MateAlgarrobo from '../assets/image/algarrob 1.png'
import TermoSystem from '../assets/image/stanleySystem.jpeg'
import TermoTermolar from '../assets/image/termolarNegro.jpeg'
import TermoStanley from '../assets/image/stanley1.4.jpeg'
import BombillaPicoLoro from '../assets/image/bombillaPico.jpg'
import Bombillon from '../assets/image/bombillon.jpg'
import MateraCuero from '../assets/image/materaCuero.webp'

export const Products = [
    {
        id : "001",
        name : "Mate Imperial",
        price : 21.999,
        type: "Mates",
        description: "Mate estilo imperial, con detalles en alta calidad!",
        image_src : MateImperial,
        colors: ['negro', 'marron'],
        characteristics : ['Calabaza ergonómica y duradera para un agarre cómodo y auténtico disfrute.', 'Detalles resistentes en acero inoxidable que aportan un toque moderno y aseguran durabilidad.', 'Diseño único que combina tradición y sofisticación, realzando la belleza natural de la calabaza.'],
        amout: 0,

    },
    {
        id : "002",
        name : "Mate Camionero",
        price : 17.503,
        type: "Mates",
        description: "Mate estilo cambionero, con una capacidad justa para las mejores mateadas!",
        image_src : MateCamionero,
        colors: ['negro', 'marron', 'marron oscuro'],
        characteristics : ['Calabaza ergonómica y duradera para un agarre cómodo y auténtico disfrute.', 'Detalles resistentes en acero inoxidable que aportan un toque moderno y aseguran durabilidad.', 'Diseño único que combina tradición y sofisticación, realzando la belleza natural de la calabaza.'],
        amout: 0,

    },
    {
        id : "003",
        name : "Mate Algarrobo",
        price : 13.702,
        type: "Mates",
        description: "Mate de Algarrobo, un mate muy bonito con una calidad maxima!",
        image_src : MateAlgarrobo,
        colors: ['madera'],
        characteristics : ['Calabaza ergonómica y duradera para un agarre cómodo y auténtico disfrute.', 'Detalles resistentes en acero inoxidable que aportan un toque moderno y aseguran durabilidad.', 'Diseño único que combina tradición y sofisticación, realzando la belleza natural de la calabaza.'],
        amout: 0,
        
    },
    {
        id : "004",
        name : "Termo Stanley Original",
        price : 162.399,
        type: "Termos",
        description: "Termo Stanley Original Mate System Classic 1.2 Litros",
        image_src : TermoSystem,
        colors: ['dorado'],
        characteristics : ['Acero inoxidable 18/8 libre de BPA'
            , 'Aislamiento de doble pared al vacío.',
             'Tapa de acero con doble pared (sirve como mate o vaso)',
            'Incluye tapón cebador de alta precision con gatillo.',
            'Mantiene contenido frio por 30 hs / caliente por 30 Hs / con hielo por 4 días.',
            'Garantia de por vida entregada por fabricante'],
        amout: 0,

    }, 
        
    {
        id : "005",
        name : "Termo Nuevo Termolar",
        price : 95.329,
        type: "Termos",
        description: "Termo Nuevo Termolar R-evolution Negro + Pico Click Mate",
        image_src : TermoTermolar,
        colors: ['negro', 'Acero inoxidable'],
        characteristics : ['Bebidas con la temperatura ideal.',
             'Agua caliente garantizada hasta por 20 horas.',
              'Capacidad de 1 litro.',
            'Apertura con pico.','Incluye manija.'],
        amout: 0,
        
    },
    {
        id : "006",
        name : "STANLEY CLASSIC 1.4",
        price : 152.459,
        type: "Termos",
        description: "Termo Stanley Classic 1.4l NEGRO",
        image_src : TermoStanley,
        colors: ['negro'],
        characteristics : ['Mantiene caliente 24 horas.' , 'Mantiene frio 24 horas.',
             'Mantiene hielo 5 dias.', 'Acero inoxidable 18/8.', 'Aislamiento al vacío de doble pared.',
              'A prueba de fugas + empacable.'],
        amout: 0,
        
    },
    {
        id : "007",
        name : "Bombilla Pico loro Cincelada",
        price : 7290,
        type: "Bombillas",
        description: "Bombilla Pico loro Cincelada - acero",
        image_src : BombillaPicoLoro,
        colors: ['Acero Inoxidable'],
        characteristics : ['El mismo pico de loro de siempre, pero con ese detalle artesano del cincelador.',
             'CALIDAD PREMIUM, TRABAJO ARTESANAL'],
        amout: 0,
            
    },
    {
        id : "008",
        name : "Bombillon",
        price : 13.299,
        type: "Bombillas",
        description: "Bombillon recto deluxe macizo de alpaca y bronce",
        image_src : Bombillon,
        colors: ['Acero Inoxidable'],
        characteristics : ['CALIDAD PREMIUM, TRABAJO ARTESANAL.'],
        amout: 0,
        
    },
    {
        id : "009",
        name : "MATERA CANASTA CUERO",
        price : 44.212,
        type: "Materas",
        description: "MATERA CANASTA CUERO PREMIUM",
        image_src : MateraCuero,
        colors: ['negra'],
        characteristics : ['Para 4 Articulos.',
             '100% cuero vacuno.',
              'Facil transporte.'],
        amout: 0,
        
    },
]