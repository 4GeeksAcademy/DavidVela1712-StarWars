import { DashBoard } from "../components/DashBoard";
import { InfoCharacter } from "../components/InfoCharacter";
import { InfoPlanet } from "../components/InfoPlanet";



export const pages = [
    {
        name: "Landing",
        route: "/",
        component: <DashBoard />
    },
    {
        name: "Info Character",
        route: "/infoCharacter/:uid",
        component: <InfoCharacter />
    },
    {
        name: "Info Planet",
        route: "/infoPlanet/:uid",
        component: <InfoPlanet />
    }
]