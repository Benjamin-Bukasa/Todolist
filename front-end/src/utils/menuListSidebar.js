import {SquareActivity, UserRoundCog, LayoutDashboard,FileCheck, UsersRound, MessageCircleMore, CalendarClock, Dot} from 'lucide-react'

export const menuListProfile = [
    {
        id: 1,
        name: "Activité",
        icon: SquareActivity,
    },
    {
        id: 2,
        name: "Mon Profile",
        icon: UserRoundCog,
    }
]

export const menuListPages = [
    {
        id: 1,
        name: "Tableau de bord",
        icon: LayoutDashboard,
    },
    {
        id: 2,
        name: "Tâches",
        icon: FileCheck,
    },
    {
        id: 3,
        name: "Equipes",
        icon: UsersRound,
    },
    {
        id: 4,
        name: "Messages",
        icon: MessageCircleMore,
    },
    {
        id: 5,
        name: "Calendrier",
        icon: CalendarClock,
    },
]


export const menuListLabel = [
    {
        id: 1,
        name: "Haute priorité",
        priority:"high",
        icon: Dot,
    },
    {
        id: 2,
        name: "Moyenne priorité",
        priority:"medium",
        icon: Dot,
    },
    {
        id: 3,
        name: "Faible priorité",
        priority:"low",
        icon: Dot,
    },
    {
        id: 4,
        name: "En attente",
        priority:"onhold",
        icon: Dot,
    },
]

