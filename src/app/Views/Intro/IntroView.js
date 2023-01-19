'use client'
import * as Styled from "./IntroStyle"
import { Button } from "../../Components/Button/ButtonView"
import { Logo } from "../../Components/Icons/IconsView"

export default function Intro() {
    return (
        <Styled.Container>
            <Styled.Header>
                <Styled.Navigation>
                    <Styled.Row>
                        <Logo width="10.4375em" height="2.8125em" fill="#E50914" />
                    </Styled.Row>
                    <Styled.Row>
                        <Styled.LangSelector defaultValue={'tr-en'}>
                            <option value="tr">Turkish</option>
                            <option value="tr-en">English</option>
                        </Styled.LangSelector>
                        <Button type="button" styleType="primary" variant="red" size="m" text="Sign In" />
                    </Styled.Row>
                </Styled.Navigation>
                <Styled.CardText>
                    <Styled.CardTitle>See what&apos;s next.</Styled.CardTitle>
                    <Styled.CardSubTitle>Watch anywhere.<br />Cancel anytime.</Styled.CardSubTitle>
                    <Button type="button" styleType="primary" variant="red" size="lg" text="Join Free For A Month" style={{ textTransform: 'uppercase' }} />
                </Styled.CardText>
            </Styled.Header>
        </Styled.Container>
    )
}