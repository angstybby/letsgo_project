const discoverData = [
    {
        title: 'Favourites',
        content: [false]
    },
    {
        title: 'Featured',
        content: [
            {
                image: require('../assets/paramore.jpg'),
                title: 'Paramore',
                date: 'Saturday 25th November, 6:30pm',
                location: 'The Domain',
            },
            {
                image: require('../assets/fob.jpg'),
                title: 'Fall Out Boy',
                date: 'Saturday 2nd December, 8pm',
                location: 'Centennial Park',
            },
            {
                image: require('../assets/fooFighters.jpg'),
                title: 'Foo Fighters',
                date: 'Saturday 9th December, 7:30pm',
                location: 'Accor Stadium',
            }
        ]
    },
    {
        title: 'In Your Area',
        content: [
            {
                image: require('../assets/fooFighters.jpg'),
                title: 'Foo Fighters',
                date: 'Saturday 9th December, 7:30pm',
                location: 'Accor Stadium',
            },
            {
                image: require('../assets/paramore.jpg'),
                title: 'Paramore',
                date: 'Saturday 25th November, 6:30pm',
                location: 'The Domain',
            }
        ]
    }
];

export default discoverData;
