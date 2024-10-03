import { useState } from "react";
import { useTranslation } from "react-i18next";
import * as _ from './styles'
import { IoIosArrowDown, IoIosNotificationsOutline } from "react-icons/io";
import { IoPersonCircle, IoSearchSharp } from "react-icons/io5";
export default function Header() {
    const { i18n: { changeLanguage, language } } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language);
    const handleChanges = (newLang: string) => {
        changeLanguage(newLang);
        setCurrentLanguage(newLang);
    }
    return (
        <_.Container>
            <_.HeaderContent>
                <_.HeaderTitle>Dashboard</_.HeaderTitle>
                <_.Search>
                    <IoSearchSharp />
                    <input type="text" placeholder="Search here.." />
                </_.Search>
                <_.Select value={currentLanguage} onChange={(e) => handleChanges(e.target.value)}>
                    <option value="en">🇺🇸 En (US)</option>
                    <option value="pt-BR">🇧🇷 Pt (BR)</option>
                </_.Select>
                <_.Admin>
                    <_.Notification>
                        <IoIosNotificationsOutline />
                    </_.Notification>
                    <IoPersonCircle />
                    <_.AdminContent>
                        <p>danielle</p>
                        <small>Admin</small>
                    </_.AdminContent>
                    <IoIosArrowDown />
                </_.Admin>
            </_.HeaderContent>
        </_.Container>
    )
}