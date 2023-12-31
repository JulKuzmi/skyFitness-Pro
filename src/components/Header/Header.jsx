import * as S from './Header.style'

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
