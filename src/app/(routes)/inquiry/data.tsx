const inquiriesData = [
  {
    id: "1001",
    title: "Printer Jamming Randomly During Different Times of Day",
    description:
      "My printer has been jamming at random times throughout the day. It is getting a slightly responsive signal that goes on and off throughout the printing. The printer brand is Canon, not sure about the model. I have put in some images below for your reference.",
    attachment: "deneka.ly/1001",
    status: "Pending",
    date: "25th March 2024, 1:30pm",
    type: "On-site Support",
    client: {
      id: "C001",
      name: "Daniel Martinez",
      company: "TechWorld Enterprises",
      email: "daniel.martinez@techworld.com",
      phone: "+61 410 213 132",
    },
  },
  {
    id: "1002",
    title: "Network Connectivity Issue",
    description:
      "We are experiencing intermittent network connectivity issues in our office. Some devices are unable to connect to the network at random intervals.",
    attachment: "deneka.ly/1002",
    status: "Overdue",
    date: "26th March 2024, 10:00am",
    type: "Remote Support",
    client: {
      id: "C002",
      name: "Emily Johnson",
      company: "TechConnect Inc.",
      email: "emily.johnson@techconnect.com",
      phone: "+1 555 123 4567",
    },
  },
  {
    id: "1003",
    title: "Server Maintenance",
    description:
      "Scheduled maintenance for server updates and security patches.",
    attachment: "deneka.ly/1003",
    status: "Archived",
    date: "28th March 2024, 3:00pm",
    type: "On-site Maintenance",
    client: {
      id: "C003",
      name: "John Doe",
      company: "ABC Corporation",
      email: "john.doe@abccorp.com",
      phone: "+1 123 456 7890",
    },
  },
  {
    id: "1004",
    title: "Software License Renewal",
    description:
      "Renewal of software licenses for the company's productivity suite.",
    attachment: "deneka.ly/1004",
    status: "Issued",
    date: "30th March 2024, 9:00am",
    type: "Administrative",
    client: {
      id: "C004",
      name: "Alice Johnson",
      company: "XYZ Solutions",
      email: "alice.johnson@xyzsolutions.com",
      phone: "+44 7890 123456",
    },
  },
  {
    id: "1005",
    title: "Data Backup Assistance",
    description:
      "Assistance required for setting up automated data backup solutions.",
    attachment: "deneka.ly/1005",
    status: "Pending",
    date: "1st April 2024, 2:00pm",
    type: "Consultation",
    client: {
      id: "C005",
      name: "Michael Smith",
      company: "Tech Support Ltd.",
      email: "michael.smith@techsupport.com",
      phone: "+61 400 987 654",
    },
  },
  {
    id: "1006",
    title: "Email Server Configuration Issue",
    description:
      "Our email server is experiencing configuration issues, resulting in delays and delivery problems.",
    attachment: "deneka.ly/1006",
    status: "Overdue",
    date: "3rd April 2024, 11:00am",
    type: "Remote Support",
    client: {
      id: "C006",
      name: "Sarah Lee",
      company: "Global Enterprises",
      email: "sarah.lee@globale.com",
      phone: "+1 789 456 1230",
    },
  },
  {
    id: "1007",
    title: "Network Firewall Upgrade",
    description:
      "Upgrade and configuration of network firewall for enhanced security measures.",
    attachment: "deneka.ly/1007",
    status: "Pending",
    date: "5th April 2024, 9:30am",
    type: "On-site Maintenance",
    client: {
      id: "C007",
      name: "Alex Wong",
      company: "Tech Innovators Inc.",
      email: "alex.wong@techinnovators.com",
      phone: "+65 9123 4567",
    },
  },
  {
    id: "1008",
    title: "Software Installation Support",
    description:
      "Assistance required for installing specialized software for design and development purposes.",
    attachment: "deneka.ly/1008",
    status: "Issued",
    date: "7th April 2024, 2:00pm",
    type: "Consultation",
    client: {
      id: "C008",
      name: "Sophia Adams",
      company: "Design Solutions Ltd.",
      email: "sophia.adams@designsolutions.com",
      phone: "+44 7890 987654",
    },
  },
  {
    id: "1009",
    title: "Hardware Upgrade Consultation",
    description:
      "Consultation required for upgrading hardware components across the organization's IT infrastructure.",
    attachment: "deneka.ly/1009",
    status: "Archived",
    date: "9th April 2024, 3:00pm",
    type: "Consultation",
    client: {
      id: "C009",
      name: "James Johnson",
      company: "Tech Solutions Inc.",
      email: "james.johnson@techsolutions.com",
      phone: "+1 123 789 4560",
    },
  },
  {
    id: "1010",
    title: "Database Performance Optimization",
    description:
      "Optimization and tuning of database servers to improve performance and reliability.",
    attachment: "deneka.ly/1010",
    status: "Pending",
    date: "12th April 2024, 10:00am",
    type: "Consultation",
    client: {
      id: "C010",
      name: "Emma Watson",
      company: "Data Analytics Co.",
      email: "emma.watson@dataanalyticsco.com",
      phone: "+61 410 987 654",
    },
  },
];

export default inquiriesData;
