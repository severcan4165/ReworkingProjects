import styled from "styled-components";

export const Flex = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

// Login formunu kapsayan div
export const LoginContainer = styled(Flex)`
width: 35vw;
height: 40vh;
background-color: #02203986;
color:white;
border-radius: 0.5rem ;
`;

// Login sayfasını kapsayan div
export const LoginBackground = styled(Flex)`
    background: url('https://picsum.photos/1600/900') no-repeat center;
    background-size: cover;
    
    width: 100vw;
    height: 100vh;
    padding: 0;
    `;

// Register formunu kapsayan div

export const RegisterContainer = styled(Flex)`
width: 35vw;
height: 40vh;
background-color: #02203986;
color:white;
border-radius: 0.5rem ;
`;

// Register sayfasını kapsayan div

export const RegisterBackground = styled(Flex)`
    background: url('https://picsum.photos/1600/900') no-repeat center;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    `;