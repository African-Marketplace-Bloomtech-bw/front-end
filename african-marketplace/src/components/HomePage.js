import React from 'react';
import styled from 'styled-components';

const BannerImage = styled.div`
    max-width: 100%;
    height: 50vh;
    border-radius: 3%;
    margin-top: 4em;
    background-image: url('https://images.unsplash.com/photo-1443131612988-32b6d97cc5da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const TitleText = styled.div`
    background-color: white;
    padding: 2em;
    margin: 5em;
    opacity: 70%;
    border-radius: 20px;
`
const QuestionText = styled.div`
    background-color: white;
    padding: 2em;
    margin: 5em;
    opacity: 70%;
    border-radius: 50px;
`

export default function HomePage() {
    return (
        <>
    <BannerImage>
        <TitleText>
        <div className='Title'>
    <h1> African Marketplace </h1>
    </div>
        </TitleText>
    </BannerImage>
<QuestionText>
<div className='questions'>
    <h2> Questions: </h2>
    <h3> What is African Marketplace?</h3>
    <p> It is a project built by web developers to empower small business owners. </p>
    <h3> Who is African Marketplace for?</h3>
    <p> This marketplace is for any gender, race, ethnicity, etc. We are inclusive to anyone! </p>
</div>
</QuestionText>
</>
    )
}