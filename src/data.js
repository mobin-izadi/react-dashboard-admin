const dataChartHome = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 200 },
    { name: 'Apr', value: 278 },
    { name: 'May', value: 189 },
    { name: 'Jun', value: 239 },
    { name: 'Jul', value: 349 },
    { name: 'Aug', value: 200 },
    { name: 'Sep', value: 300 },
    { name: 'Oct', value: 400 },
    { name: 'Nov', value: 100 },
    { name: 'Dec', value: 500 },
];

const users = [
    {
        id: 1,
        name: "John",
        lastName: "Doe",
        position: "Software Engineer",
        profile: "/images/profiles/1.png",
        email: "john.doe@gmail.com",
        phone: "+1 234 567 890",
        address: "1234 Elm Street, Springfield, USA"
    },
    {
        id: 2,
        name: "Jane",
        lastName: "Smith",
        position: "Product Manager",
        profile: "/images/profiles/5.jpg",
        email: "jane.smith@gmail.com",
        phone: "+1 234 567 891",
        address: "5678 Oak Avenue, Springfield, USA"
    },
    {
        id: 3,
        name: "Robert",
        lastName: "Brown",
        position: "Data Analyst",
        profile: "/images/profiles/2.jpg",
        email: "robert.brown@gmail.com",
        phone: "+1 234 567 892",
        address: "9101 Pine Road, Springfield, USA"
    },
    {
        id: 4,
        name: "Emily",
        lastName: "Clark",
        position: "UX Designer",
        profile: "/images/profiles/6.jpg",
        email: "emily.clark@gmail.com",
        phone: "+1 234 567 893",
        address: "1213 Cedar Blvd, Springfield, USA"
    },
    {
        id: 5,
        name: "Michael",
        lastName: "Johnson",
        position: "Backend Developer",
        profile: "/images/profiles/3.jpg",
        email: "michael.johnson@gmail.com",
        phone: "+1 234 567 894",
        address: "1415 Birch Lane, Springfield, USA"
    }
];

const TransActionsData = [
    { id: 0, img: '/images/profiles/1.png', customer: 'mobin', date: '12 Jun 2024', amount: 1_154_876, status: 'Approved' },
    { id: 1, img: '/images/profiles/2.jpg', customer: 'alireza', date: '15 Mar 2024', amount: 25_000_000, status: 'Declined' },
    { id: 2, img: '/images/profiles/3.jpg', customer: 'amir', date: '5 Feb 2024', amount: 5_000, status: 'pending' },
    { id: 3, img: '/images/profiles/4.jpg', customer: 'kian', date: '30 Jul 2024', amount: 11_000, status: 'Approved' },
]

export { dataChartHome, users, TransActionsData }