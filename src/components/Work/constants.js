import vop1 from "../../images/assets/vop_1.jpg"
import vop2 from "../../images/assets/vop_2.jpg"
import vop3 from "../../images/assets/vop_3.jpg"
import vop4 from "../../images/assets/vop_4.jpg"
import vop5 from "../../images/assets/vop_5.jpg"
import vop6 from "../../images/assets/vop_6.jpg"

import salon1 from "../../images/assets/salon_1.jpg"
import salon2 from "../../images/assets/salon_2.jpg"
import salon3 from "../../images/assets/salon_3.jpg"
import salon4 from "../../images/assets/salon_4.jpg"
import salon5 from "../../images/assets/salon_5.jpg"
import salon6 from "../../images/assets/salon_6.jpg"
import salon7 from "../../images/assets/salon_7.jpg"

import superglu1 from "../../images/assets/superglu_1.jpg"
import superglu2 from "../../images/assets/superglu_2.jpg"
import superglu3 from "../../images/assets/superglu_3.jpg"
import superglu4 from "../../images/assets/superglu_4.jpg"
import superglu5 from "../../images/assets/superglu_5.jpg"
import superglu6 from "../../images/assets/superglu_6.jpg"
import superglu7 from "../../images/assets/superglu_7.jpg"
import superglu8 from "../../images/assets/superglu_8.jpg"


export const workInfo = [
    {
        title: "Salon Booking App",
        description: "Built a mobile app for booking appointments for a salon.",
        info: [
            "Created a signup and login system with separate user entities such as employee, admin and customers",
            "Used mongodb for record keeping while using nodejs for the backend apis",
            "Added a notification, message and settings demo tab",
            "Created separate admin, client and employee views for both managing and booking appointments",
            "Used postman to test APIs"
        ],
        stack: [
            "React", 
            "NodeJs",
            "MongoDB",
            "Sass"

        ],
        images: [
            salon1,
            salon2,
            salon3,
            salon4,
            salon5,
            salon6,
            salon7
        ]
    },
    {
        title: "Village of Professionals",
        description: "Created a Demo app for the climate launchpad competition that connects various different professionals in the construction industry and went on to win the best national pitch.",
        info: [
            "Created a signup and login system",
            "Built a demo market for construction bids",
            "Added a discussion forum"
        ],
        stack: [
            "django", 
            "python",
            "bootstrap" 
        ],
        images: [
            vop1,
            vop2,
            vop3,
            vop4,
            vop5,
            vop6,
        ]
    },
    {
        title: "Superglu",
        description: "Worked on the Employee Engagement/Onboarding platform at 99x and built comprehensive chat and survey features.",
        info: [
            "Created a comprehensive Chat feature",
            "Built a Survey module to gather data from employees within the company",
            "Worked with Human Resources and translated their requirements into software design",
            "Managed and split workload through a Jira board",
            "Worked with AWS Serverless, DynamoDB and node to build APIs",
            "Used postman to test APIs",
            "Work on the superglu mobile application",
            "Design and deployed email flyers"
        ],
        stack: [
            "React", 
            "NodeJS",
            "AWS Serverless",
            "DynamoDB",
            "ReactNative",
            "Redux",
            "Sass"

        ],
        images: [
           superglu1,
           superglu2,
           superglu3,
           superglu4,
           superglu5,
           superglu6,
           superglu7,
           superglu8,
        ]
    }
]