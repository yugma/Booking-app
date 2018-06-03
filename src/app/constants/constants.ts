import { SearchCriteria } from "../interfaces/search-criteria";

export const initialPriceRange = 50000;
export const passengerCounter: any[] = [1, 2, 3, 4];

export const availableFlights: any[] = [
    {
      flightName: 'AI-988',
      origin: 'DEL',
      destination: 'PNQ',
      price: 5420,
      depart: new Date('July 22, 2018 18:15:00'),
      arrive: new Date('July 22, 2018 20:15:00'),
      logo: '../../assets/airIndia.jpg'
    },
    {
      flightName: 'AI-336',
      origin: 'DEL',
      destination: 'PNQ',
      price: 6580,
      depart: new Date('June 10, 2018 18:15:00'),
      arrive: new Date('June 10, 2018 20:15:00'),
      logo: '../../assets/jetAirways.jpg'
    },
    {
      flightName: 'AI-356',
      origin: 'DEL',
      destination: 'AMD',
      price: 5000,
      depart: new Date('July 10, 2018 18:15:00'),
      arrive: new Date('July 10, 2018 20:15:00'),
      logo: '../../assets/airIndia.jpg'
    },
    {
      flightName: 'AI-754',
      origin: 'DEL',
      destination: 'AMD',
      price: 2360,
      depart: new Date('June 10, 2018 18:15:00'),
      arrive: new Date('June 10, 2018 20:15:00'),
      logo: '../../assets/jetAirways.jpg'
    },
    {
      flightName: 'AI-555',
      origin: 'PNQ',
      destination: 'DEL',
      price: 8560,
      depart: new Date('July 12, 2018 18:15:00'),
      arrive: new Date('July 12, 2018 20:15:00'),
      logo: '../../assets/airIndia.jpg'
    },
    {
      flightName: 'AI-233',
      origin: 'PNQ',
      destination: 'DEL',
      price: 4400,
      depart: new Date('June 12, 2018 18:15:00'),
      arrive: new Date('June 12, 2018 20:15:00'),
      logo: '../../assets/jetAirways.jpg'
    },
    {
      flightName: 'AI-258',
      origin: 'PNQ',
      destination: 'AMD',
      price: 5000,
      depart: new Date('July 05, 2018 18:15:00'),
      arrive: new Date('July 05, 2018 20:15:00'),
      logo: '../../assets/airIndia.jpg'
    },
    {
      flightName: 'AI-125',
      origin: 'PNQ',
      destination: 'AMD',
      price: 5800,
      depart: new Date('June 22, 2018 18:15:00'),
      arrive: new Date('June 22, 2018 20:15:00'),
      logo: '../../assets/jetAirways.jpg'
    },
    {
      flightName: 'AI-965',
      origin: 'AMD',
      destination: 'DEL',
      price: 7000,
      depart: new Date('July 09, 2018 18:15:00'),
      arrive: new Date('July 09, 2018 20:15:00'),
      logo: '../../assets/airIndia.jpg'
    },
    {
      flightName: 'AI-568',
      origin: 'AMD',
      destination: 'DEL',
      price: 5420,
      depart: new Date('June 28, 2018 18:15:00'),
      arrive: new Date('June 28, 2018 20:15:00'),
      logo: '../../assets/jetAirways.jpg'
    },
    {
      flightName: 'AI-254',
      origin: 'AMD',
      destination: 'PNQ',
      price: 5420,
      depart: new Date('July 15, 2018 18:15:00'),
      arrive: new Date('July 15, 2018 20:15:00'),
      logo: '../../assets/airIndia.jpg'
    },
    {
      flightName: 'AI-123',
      origin: 'AMD',
      destination: 'PNQ',
      price: 5420,
      depart: new Date('June 15, 2018 18:15:00'),
      arrive: new Date('June 15, 2018 20:15:00'),
      logo: '../../assets/jetAirways.jpg'
    }
  ];

  export const sampleSearchCriteria: SearchCriteria = {
    passengerCount: 1,
    origin: 'DEL',
    destination: 'PNQ',
    departure: '2018-06-10',
    return: '2018-06-10',
    priceRange:10000
  };
