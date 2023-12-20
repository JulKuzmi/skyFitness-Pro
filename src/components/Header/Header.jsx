import * as S from './Header.style'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <S.Header>
                <S.HeaderLogo>
                    <S.HeaderLogoImg src="/img/logo.svg" alt="logo" />
                </S.HeaderLogo>

                <S.HeaderSectionButton>
                    <S.HeaderButton>Войти</S.HeaderButton>
                </S.HeaderSectionButton>
            </S.Header>
        </>
    )
}
export const HeaderPurple = () => {
    const [isLogin] = useState(true)
    const [setExitForm] = useState(false)
    const [menu, setMenu] = useState(false)

    const handleClickPersonalMenu = () => {
        setMenu(!menu)
    }
    const handleClickExit = () => {
        setMenu(false)
        document.body.style.overflow = 'hidden'
        setExitForm(true)
    }
    const handleClickProfile = () => {
        setMenu(false)
    }

    return (
        <>
            <S.Header>
                <S.HeaderLogo to={'/'}>
                    <S.HeaderLogoImg src="/img/logo-light.svg" alt="logo" />
                </S.HeaderLogo>

                {isLogin ? (
                    <S.Personal onClick={handleClickPersonalMenu}>
                        {menu && (
                            <S.PersonalMenu>
                                <Link to={'/profile'}>
                                    <S.PersonalMenuButton
                                        onClick={handleClickProfile}
                                    >
                                        Профиль
                                    </S.PersonalMenuButton>
                                </Link>

                                <S.PersonalMenuButton onClick={handleClickExit}>
                                    Выйти
                                </S.PersonalMenuButton>
                            </S.PersonalMenu>
                        )}
                        <img src="/img/avatar.svg" alt="avatar" />
                        <S.NameLight>{}</S.NameLight>
                        <img src="/img/arrow-down-light.svg" alt="arrow-down" />
                    </S.Personal>
                ) : (
                    <S.HeaderSectionButton>
                        <S.HeaderButtonLink to="/login">
                            <S.HeaderButton>Войти</S.HeaderButton>
                        </S.HeaderButtonLink>
                    </S.HeaderSectionButton>
                )}
            </S.Header>
        </>
    )
}
