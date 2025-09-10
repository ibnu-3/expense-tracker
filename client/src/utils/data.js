import { MdOutlineDashboard } from "react-icons/md";
import { LuWalletMinimal } from "react-icons/lu";
import { SiExpensify } from "react-icons/si";
import { MdLogout } from "react-icons/md";
export const SIDEBAR_DATA =[
    {
        'id':1,
        'icon':MdOutlineDashboard,
        'label':'Dashboard',
        'path':'/'
    },
    {
        'id':2,
        'icon':LuWalletMinimal,
        'label':'Income',
        'path':'/income'
    },
    {
        'id':3,
        'icon':SiExpensify,
        'label':'Expense',
        'path':'/expense'
    },
    {
        'id':4,
        'icon':MdLogout,
        'label':'Logout',
        'path':'/login'
    },
]